import { renderHook, waitFor  } from '@testing-library/react'
import { useFetch } from './useFetch'
import { expect, test } from 'vitest'

test('useFetch returns mock data', async () => {
  const { result } = renderHook(() =>
    useFetch('https://restcountries.com/v3.1/all?fields=region,population')
  )

  // Espera a que useFetch actualice el state
  await waitFor(() => expect(result.current.response).toHaveLength(7))

  expect(result.current.response[0]).toHaveProperty('region')
  expect(result.current.response[0]).toHaveProperty('population')
})
