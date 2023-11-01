import {COLORCHECK, STATUSCHECK} from './ActionTypes'

export const colorCheck = (color, changeType) => {
    return {
        type: COLORCHECK,
        payload: {
            color, 
            changeType
        }
    }
}

const statusCheck = (status) => {
    return {
        type: STATUSCHECK,
        payload: status
    }
}
export default statusCheck;