import { useState } from 'react'
import { Alert, View } from 'react-native'
import { useLocalSearchParams, router } from 'expo-router'

import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { PageHeader } from '@/components/PageHeader'
import { CurrencyInput } from '@/components/CurrencyInput'

import { useTargetDatabase } from '@/database/useTargetDatabase'

export default function Target() {
  const [isProcessing, setIsProcessing] = useState(false)
  const [name, setName] = useState('')
  const [amount, setAmout] = useState(0)

  const params = useLocalSearchParams<{ id?: string }>()
  const targetDatabase = useTargetDatabase()

  function handleSave() {
    if (!name.trim() || amount <= 0) {
      return Alert.alert('Atenção!', 'Preencha os campos de nome e valor.')
    }

    setIsProcessing(true)

    if (params.id) {
      // update
    } else {
      create()
    }
  }

  async function create() {
    try {
      await targetDatabase.create({ name, amount })

      Alert.alert('Nova meta', 'Meta criada com sucesso!', [
        {
          text: 'ok',
          onPress: () => router.back(),
        },
      ])
    } catch (error) {
      Alert.alert('Erro.', 'Não foi posssível criar a meta')
      console.log(error)
      setIsProcessing(false)
    }
  }

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <PageHeader
        title='Meta'
        subtitle='Economize para alcançar sua meta financeira.'
      />

      <View style={{ marginTop: 32, gap: 24 }}>
        <Input
          label='Nome da meta'
          placeholder='Ex: Viagem para praia, Apple Watch'
          onChangeText={setName}
          value={name}
        />

        <CurrencyInput
          label='Valor alvo (R$)'
          value={amount}
          onChangeValue={setAmout}
        />

        <Button
          title='Salvar'
          onPress={handleSave}
          isProcessing={isProcessing}
        />
      </View>
    </View>
  )
}
