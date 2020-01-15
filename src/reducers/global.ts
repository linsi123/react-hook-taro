import { LOADING } from '../constants/global'

const INITIAL_STATE = {
  isLoading: true
}

export default function global (state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      }
     default:
       return state
  }
}
