import {
  LOADING
} from '../constants/global'


export const setLoading = (payload) => {
  return {
    type: LOADING,
    payload: {
      isLoading: payload.isLoading
    }
  }
}


export default {};
