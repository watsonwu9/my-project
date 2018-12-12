// //工具函数

import config from './config'

export function get (url, data) {
  return request(url, 'GET')
}
export function post (url, data) {
  return request(url, 'POST', data)
}
export function showSuccess (text) {
  wx.showToast({
    title: text,
    icon: 'success'
  })
}

function request (url, method, data) {
  return new Promise((resolve, reject) => {
    wx.request({
      method: method,
      data: data,
      url: config.host + url,
      success: function (res) {
        if (res.data.code === 0) {
          resolve(res.data.data)
        } else {
          reject(res.data)
        }
      }
    })
  })
}
