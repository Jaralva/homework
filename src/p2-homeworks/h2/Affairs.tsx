import React from 'react'
import Affair from './Affair'
import {AffairType} from './HW2'
import {FilterType} from "./HW2";

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (settedfilter:FilterType ) => void
    deleteAffairCallback: (deletedid: number) => void
}

export default function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {props.setFilter('all')}// need to fix
    const setHigh = () => {props.setFilter('high')}
    const setMiddle = () => {props.setFilter('middle')}
    const setLow = () => {props.setFilter('low')}


    return (
        <div>

            {mappedAffairs}

            <button onClick={setAll}>All</button>
            <button onClick={setHigh}>High</button>
            <button onClick={setMiddle}>Middle</button>
            <button onClick={setLow}>Low</button>
        </div>
    )
}

