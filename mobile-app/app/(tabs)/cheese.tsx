import { Text, View , StyleSheet, Button } from 'react-native';
import { Link } from 'expo-router';
import { Pressable } from 'react-native';

export default function Page() {
  return (
    <View style={makeItPretty.testing} className='m-2'>
        <Button title="BUTTON KUDASAI"></Button>
        <Text className='border-red-700 border-2 '>This is a page about cheese.</Text>
        <Link href="/" asChild>
            <Pressable>
                <Text>Index 🍓🍓</Text>
            </Pressable>
        </Link>
    </View>
  )
}

const makeItPretty = StyleSheet.create({
  testing: {
    marginTop: 50,
    borderColor: 'blue',
    borderWidth: 3,
    borderStyle: 'dashed'
  }
})