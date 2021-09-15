import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string)=> void
}

export type ErrorPropsType = {
    title:string
    style: boolean
}


const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<ErrorPropsType>({title: '', style: false})

    const setNameCallback = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.currentTarget.value)
    }
    const addUser = () => {
        if (name.length >= 2) {
            setError({title: '', style: false})
            addUserCallback(name)
            alert(`Hello  ${name}!`) // need to fix
            setName('')
        } else {
            setError({title: 'Имя слишком короткое', style: true})
        }

    }

    const totalUsers = users.length

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
