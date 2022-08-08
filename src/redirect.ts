export function selectProxyHost(path: string) {
  if (path.match('/users')) {
    return process.env.USER_URL
  } else if (path.match('/equipaments')) {
    return process.env.EQUIP_URL
  } else {
    return process.env.BASE_URL
  }
}
