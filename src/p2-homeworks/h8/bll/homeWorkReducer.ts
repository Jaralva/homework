import {ActionType, UsersType } from "../HW8"

export const homeWorkReducer = (state: UsersType, action: ActionType): UsersType => {
    switch (action.type) {
        case 'sort': {
            switch (action.payload) {
                case 'up':
                    return [...state.sort((a, b) => a.age > b.age ? 1 : -1)]
                case 'down':
                    return [...state.sort((a, b) => a.age < b.age ? 1 : -1)]
                default: return state
            }
        }
        case 'check': {
            let stateCheckCopy = [...state.filter(f => f.age >= action.payload)]
            console.log(stateCheckCopy)
            return stateCheckCopy
        }
        default: return state
    }
}