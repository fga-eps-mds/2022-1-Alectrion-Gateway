import { Request } from 'express'

const USER_URL = process.env.USER_URL || 'http://localhost:4001'
const EQUIP_URL = process.env.EQUIP_URL || 'http://localhost:4002'

export const getHost = (req: Request) => {
  if (req.baseUrl.match('/user')) {
    return USER_URL
  } else if (req.baseUrl.match('/equipment')) {
    return EQUIP_URL
  } else return ''
}

export const getUrComplement = (req: Request): string => {
  const parts = req.url.split('?')
  const baseUrl = req.baseUrl
  const queryString = parts[1]
  const updatedPath = parts[0]
  return baseUrl + updatedPath + (queryString ? '?' + queryString : '')
}
