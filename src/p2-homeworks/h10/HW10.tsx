import React, { Dispatch } from 'react'
import {useDispatch, useSelector } from 'react-redux';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {ActionsType, initStateType, loadingAC, endloadingAC } from './bll/loadingReducer';
import { AppStoreType } from './bll/store';

function HW10() {
    // useSelector, useDispatch


    const loading = useSelector<AppStoreType, initStateType>(state => state.loading)
    const dispatch = useDispatch<Dispatch<ActionsType>>()

    const setLoading = () => {
        dispatch(loadingAC())
        setTimeout(() => {dispatch(endloadingAC())},2000)
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {loading.loading
                ? (
                    <div>крутилка...</div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
        </div>
    )
}

export default HW10
