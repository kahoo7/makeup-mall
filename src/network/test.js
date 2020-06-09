import {reqFromMysql} from './reqFromMysql'

export function getDataFromMysql() {
  return reqFromMysql({
    url: '/test'
  })
}