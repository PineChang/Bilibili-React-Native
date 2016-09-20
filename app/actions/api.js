import { CALL_API } from '../middleware/api'
import { API } from '../config/constants'
import {loadWithAPI} from '../actions'
import {obj2query} from '../util/func'


// const getHeader = () => {
//   return {
//        'Accept': 'application/json',
//        'Content-Type': 'application/json'
//    }
// }
//
// export const GET_LIST_REQUEST = 'GET_LIST_REQUEST'
// export const GET_LIST_SUCCESS = 'GET_LIST_SUCCESS'
// export const GET_LIST_FAILURE = 'GET_LIST_FAILURE'
//
// const getList = (request) => {
//   const {url, query} = request
//   console.log(url)
//   return {
//     query,
//     [CALL_API]: {
//       types: [ GET_LIST_REQUEST, GET_LIST_SUCCESS, GET_LIST_FAILURE ],
//       endpoint: url,
//       request: {
//         method: 'GET',
//         headers: getHeader()
//       }
//     }
//   }
// }
//
// export const POST_LIST_REQUEST = 'POST_LIST_REQUEST'
// export const POST_LIST_SUCCESS = 'POST_LIST_SUCCESS'
// export const POST_LIST_FAILURE = 'POST_LIST_FAILURE'
//
// const postList = (form, params) => {
//   return {
//     [CALL_API]: {
//       types: [ POST_LIST_REQUEST, POST_LIST_SUCCESS, POST_LIST_FAILURE ],
//       endpoint: API[form].path,
//       request: {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded'
//         },
//         body: obj2query(params)
//       }
//     }
//   }
// }
//
// export const loadDataList = (opts) => (dispatch, getState) =>  {
//   const {request} = opts
//   const {method} = request
//   let {
//     page = 0
//   } = {}
//   switch(method){
//     case 'GET':
//       return dispatch(getList(request))
//       break
//     case 'POST':
//       return dispatch(postList(form,params))
//       break
//     default:
//       return null
//   }
// }


export const RECEIVE_DATA = 'RECEIVE_DATA'

export const receiveData = (reducer, data ) => {
  return {
    type: RECEIVE_DATA,
    reducer,
    data
  }
}
