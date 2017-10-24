import request from 'request-promise-native';

export const get = async url => await request.get(url);

export const getApi = async options => await request(options);

export const post = async options => await request(options);
