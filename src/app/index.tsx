import { View, Text, Button } from 'react-native'
import { router, Router } from 'expo-router'

import { fontFamily } from '@/theme/fontFamily'

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontFamily: fontFamily.bold }}>Hello Expo Router!</Text>

      <Button title='Nova Meta' onPress={() => router.navigate('/target')} />

      <Button
        title='Transação'
        onPress={() => router.navigate('./transaction/765890')}
      />

      <Button
        title='Progresso'
        onPress={() => router.navigate('./in-progress/69')}
      />
    </View>
  )
}
