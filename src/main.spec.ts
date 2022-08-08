import dotenv from 'dotenv'
import { selectProxyHost } from './redirect'

dotenv.config({
  path: process.env.NODE === 'test' ? '.env.test' : '.env'
})

describe('selectProxyHost', () => {
  test('Should return user proxy', () => {
    const pathMocked = 'https://localhost:8080/users'
    const result = selectProxyHost(pathMocked)
    expect(result).toEqual(process.env.USER_URL)
  })
  test('Should return equipaments proxy', () => {
    const pathMocked = 'https://localhost:8080/equipaments'
    const result = selectProxyHost(pathMocked)
    expect(result).toEqual(process.env.EQUIP_URL)
  })
  test('Should return default proxy', () => {
    const pathMocked = 'https://localhost:8080/'
    const result = selectProxyHost(pathMocked)
    expect(result).toEqual(process.env.BASE_URL)
  })
})
