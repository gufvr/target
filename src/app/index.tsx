import { View, StatusBar } from 'react-native'
import { router, Router } from 'expo-router'

import { HomeHeader } from '@/components/HomeHeader'
import { Target } from '@/components/Target'
import { List } from '@/components/List'
import { Button } from '@/components/Button'

const summary = {
  total: 'R$ 2.680,00',
  input: { label: 'Entradas', value: 'R$ 6.184,90' },
  output: { label: 'Saidas', value: '-R$ 883,65' },
}

const targets = [
  {
    id: '1',
    name: 'Apple Watch',
    current: 'R$ 580,00',
    percentage: '50%',
    target: 'R$ 1.790,00',
  },
  {
    id: '2',
    name: 'Comprar uma cadeira ergonômica',
    current: 'R$ 900,00',
    percentage: '75%',
    target: 'R$ 1.200,00',
  },
  {
    id: '3',
    name: 'Fazer uma viagem para o Canadá',
    current: 'R$ 1,00',
    percentage: '75%',
    target: 'R$ 3.000,00',
  },
]

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle='light-content' />
      <HomeHeader data={summary} />

      <List
        title='Metas'
        data={targets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Target
            data={item}
            onPress={() => router.navigate(`/in-progress/${item.id}`)}
          />
        )}
        emptyMessage='Nenhuma meta. Toque em "Nova meta" para criar!'
        containerStyle={{ paddingHorizontal: 24 }}
      />

      <View style={{ paddingHorizontal: 24, paddingBottom: 32 }}>
        <Button title='Nova meta' onPress={() => router.navigate('/target')} />
      </View>
    </View>
  )
}
