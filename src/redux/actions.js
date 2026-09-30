import { INCREMENT } from './types'

export const onIncrement = (fn) => {
    return {
        type: INCREMENT,
        payload: fn,
    }
}