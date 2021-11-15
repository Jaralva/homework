const initState = {
    loading: false
}

export const loadingReducer = (state:initStateType = initState, action: ActionsType): initStateType => {
    switch (action.type) {
        case 'LOADING': 
            return {...state, loading: true}
        case 'END-LOADING': 
            return  {...state, loading: false}
        default:
            return state
    }
}

export type ActionsType = LoadingACType | EndloadingACType

type LoadingACType = ReturnType<typeof loadingAC>
type EndloadingACType = ReturnType<typeof endloadingAC>
export type initStateType = {
    loading: boolean
}


export const loadingAC = () => { return {type: 'LOADING',} as const}
export const endloadingAC = () => { return {type: 'END-LOADING',} as const}