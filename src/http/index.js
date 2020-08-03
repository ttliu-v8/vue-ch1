import axios from 'axios'

const config = {
  baseURL: 'https://testm.jxlife.com.cn',
  timeout: 40000
}
const _axios = axios.create(config)
_axios.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

_axios.interceptors.response.use(response => {
  return response.data
}, error => {
  return Promise.reject(error)
})

function setParams (data) {
  let params = {
    header: {
      appCpu: "string",
      appVersion: "string",
      brand: "string",
      carrier: "string",
      clientIp: "string",
      cpu: "string",
      deviceId: "string",
      deviceModel: "string",
      deviceVersion: "string",
      displayResolution: "string",
      jpushAppKey: "string",
      jpushRegistrationId: "string",
      latitude: "string",
      loadSpeed: "string",
      longitude: "string",
      mac: "string",
      networkLevel: "string",
      networkName: "string",
      networkType: "string",
      openid: "string",
      osVersion: "string",
      reqDate: "2019-12-17",
      reqTime: "string",
      screenSize: "string",
      sn: "string",
      storageSize: "string",
      totalCpu: "string",
      totalMemory: "string",
      transId: "",
      uploadSpeed: "string",
      usedMemory: "string",
    },
    request: data
  }
  return params
}

export default {
  async get (params) {
    let data = setParams(params.data)
    let resource = await _axios.get(params.api, {params: data})
    return resource
  },
  async post (params) {
    let data = setParams(params.data)
    let resource = await _axios.post(params.api, data)
    return resource
  }
}