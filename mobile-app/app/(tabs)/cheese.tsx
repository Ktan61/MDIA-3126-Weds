import { Text, View } from 'react-native';
import { Link } from 'expo-router';
import { Pressable } from 'react-native';

export default function Page() {
  return (
    <View>
        <Text>This is a page about cheese.</Text>
        <Link href="/" asChild>
            <Pressable>
                <Text>Index 🍓🍓</Text>
            </Pressable>
        </Link>
    </View>
  )
}