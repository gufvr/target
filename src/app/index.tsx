import { View } from 'react-native'

import { HomeHeader } from '@/components/HomeHeader'
import { Target } from '@/components/Target'

const summary = {
  total: 'R$ 2.680,00',
  input: { label: 'Entradas', value: 'R$ 6.184,90' },
  output: { label: 'Saidas', value: '-R$ 883,65' },
}

const targets = [
  {
    name: 'Apple Watch',
    current: 'R$ 580,00',
    percentage: '50%',
    target: 'R$ 1.790,00',
  },
]

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <HomeHeader data={summary} />

      <Target data={targets[0]} />
    </View>
  )
}
