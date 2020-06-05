import { requests } from './requests'

export function getGoodsDetail(iid) {
  return requests({
    url: '/detail',
    params: {
      iid,
    }
  })
}