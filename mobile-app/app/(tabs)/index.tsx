import { View } from 'react-native';
import { Link } from 'expo-router';


export default function Page() {
  return (
    <View>
      <Link href="/sandwich">Sandwich 🥪</Link>
      <Link href="/cheese">Cheese 🧀</Link>
    </View>
  );
}
