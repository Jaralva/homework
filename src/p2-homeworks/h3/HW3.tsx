import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";


export type UserType = {
    _id: string
    name: string
}


function HW3() {
    const [users, setUsers] = useState<UserType[]>([])

    const addUserCallback = (name: string) => {
        setUsers([{name: name, _id: v1()} , ...users])
    }

    return (
        <div>
            <hr/>
            homeworks 3
            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

        </div>
    )
}

export default HW3
