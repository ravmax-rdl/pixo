import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../../Styles/auth.styles';
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello</Text>
      <Link href="/notifications">Feed</Link>
    </View>
  );
}