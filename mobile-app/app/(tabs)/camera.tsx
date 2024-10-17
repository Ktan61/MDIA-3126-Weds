import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library'
import { useState, useRef, useEffect } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const [facing, setFacing] = useState<CameraType>('back');

  // @ts-ignore
  const cameraRef = useRef<CameraView>(undefined);
  const [permission, requestPermission] = useCameraPermissions();
  // @ts-ignore
  const [hasMediaLibraryPermissions, setMediaLibraryPermissions] = useState();
  const [photo, setPhoto] = useState();

  useEffect(() => {
    async function getMediaPermissions () {
      // we are calling await because we know it's a promise
      const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
      setMediaLibraryPermissions(mediaLibraryPermission.status === "granted");
    }

    getMediaPermissions();
  }, [permission, cameraRef])

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet. Returns a button that asks for permission.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  // this is not part of Sonja's code - she deleted this and const facing 
  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  // Assume we have camera permissions! (We would want to take pictures) // initially was left blank as return was coded (scaffolded)
  // implied that it's async due to name of API
  let takePicture = async () => {
    let options = {
      exit: false,
      quality: 1,
      base64: true
    }

    let newPhoto = await cameraRef.current.takePictureAsync(options);
  
    //@ts-ignore
    setPhoto(newPhoto);
  }

  // Assume we have a photo // blank as return coded
  if (photo) {
    let savePhoto = () => {
      // @ts-ignore
      MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
        setPhoto(undefined);
      })
    }

    return(
      <SafeAreaView style={styles.container}>
        <Image style={styles.photoPreview} source={{ uri: "data:image/jpg;base64," + photo.base64 }} />
        {hasMediaLibraryPermissions ? <Button title="Save photo" onPress={savePhoto} /> : undefined}
        <Button title="Trash it! 🗑️" onPress={() => setPhoto(undefined)} />
      </SafeAreaView>
    )
  }


  return (
    <View style={styles.container}>
      <CameraView 
        style={styles.camera} 
        facing={facing}
        ref={cameraRef}
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
       <View style={{ flex:1 }}>
          <Button title="Take a pic!" onPress={takePicture} />
       </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  photoPreview: {
    alignSelf: 'stretch',
    flex: 1
  }
});
