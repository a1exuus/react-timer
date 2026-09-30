import { INCREMENT, DECREMENT, COUNTDOWN, RESET } from './types'

export const onIncrement = (fn) => {
    return {
        type: INCREMENT,
        payload: fn,
    }
}

export const onDecrement = (fn) => {
    return {
        type: DECREMENT,
        payload: fn
    }
}

export const onCountdown = (fn) => {
    return {
        type: COUNTDOWN,
        payload: fn
    }
}

export const onReset = () => {
    return {
        type: RESET
    }
}