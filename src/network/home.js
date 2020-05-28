import { requests } from './requests'

export function getHomeMultiData() {
  return requests({
    url: '/home/multidata'
  })
}