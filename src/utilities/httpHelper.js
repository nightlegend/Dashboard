import rp from 'request-promise-native'

export const get = async url => await rp.get(url)

export const getApi = async options => await rp(options)

export const post = async options => await rp(options)
