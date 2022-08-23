import { Request } from 'express'
import { getHost, getUrComplement } from './redirect'

const userMockedRequet = {
  baseUrl: '/user/get',
  url: '/?allUsers=true'
} as Request

const equipmentMockedRequest = {
  baseUrl: '/equipment/get',
  url: '/?all=true'
} as Request

const noSuportedMockedRequest = {
  baseUrl: '/noService',
  url: '/?all=true'
} as Request

describe('Should test get url complement', () => {
  it('Should return user api url complement', () => {
    const url = getHost(userMockedRequet)
    expect(url).toEqual('http://localhost:4001')
  })

  it('Should return equipment api url', () => {
    const url = getHost(equipmentMockedRequest)
    expect(url).toEqual('http://localhost:4002')
  })
  it('Should return null api url', () => {
    const url = getHost(noSuportedMockedRequest)
    expect(url).toEqual('')
  })
})

describe('Should test get url complement', () => {
  it('Should return user api url', () => {
    const complement = getUrComplement(userMockedRequet)
    expect(complement).toEqual(userMockedRequet.baseUrl + userMockedRequet.url)
  })

  it('Should return equipment api url', () => {
    const complement = getUrComplement(equipmentMockedRequest)
    expect(complement).toEqual(
      equipmentMockedRequest.baseUrl + equipmentMockedRequest.url
    )
  })
})
