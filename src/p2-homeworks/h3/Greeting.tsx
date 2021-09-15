import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
import {ErrorPropsType} from "./GreetingContainer";

type GreetingPropsType = {
    name: string
    setNameCallback: (event: ChangeEvent<HTMLInputElement>)=> void
    addUser: ()=> void
    error: ErrorPropsType
    totalUsers: number
}



const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers}
) => {
    const inputClass = error.style? s.error : s.not_error
    const spanClass = error.style? s.span_error : s.span_not_error

    return (
        <div className={s.hw3div}>
            <input value={name} onChange={setNameCallback} className={inputClass}/>
            <span className={spanClass}>{error.title}</span>
            <button className={s.button} onClick={addUser}>Add</button>
            <span className={s.span}>{totalUsers}</span>
        </div>
    )
}

export default Greeting
