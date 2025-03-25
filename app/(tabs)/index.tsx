import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../../Styles/auth.styles';
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello</Text>
      <TouchableOpacity onPress={() => alert('pressed')}>
        <Text>Press me</Text>
      </TouchableOpacity>
      <Link href="/(tabs)/notifications" style={styles.page}>
        Notifications
      </Link>
    </View>
  );
}
