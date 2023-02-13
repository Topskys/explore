/*
 * @Author: Topskys
 * @Date: 2022-09-13 20:37:28
 * @LastEditTime: 2022-09-14 16:11:58
 */

const CityReducer = (prevState = {
    city: '深圳',
}, action) => {
    let newState = {
        ...prevState
    }
    switch (action.type) {
        case 'change-city':
            newState.city = action.payload
            return newState
        default:
            return prevState
    }
    return prevState
}


export default CityReducer