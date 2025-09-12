// src/setupTests.ts
import { afterAll, afterEach, beforeAll } from 'vitest'
import { server } from '../mocks/node'

// Antes de todos los tests, inicia el server
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))

// Después de cada test, resetea los handlers
afterEach(() => server.resetHandlers())

// Al final, cierra el server
afterAll(() => server.close())
