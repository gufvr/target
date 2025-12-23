import { View, Text, Button } from 'react-native'
import { router, Router } from 'expo-router'

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Hello Expo Router!</Text>

      <Button title='Nova Meta' onPress={() => router.navigate('/target')} />
    </View>
  )
}
