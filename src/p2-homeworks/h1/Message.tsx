import React from 'react'
import g from './Message.module.css'


type TypeMessage = {
    avatar: string
    name: string
    message: string
    time: string
}

const Message = (props: TypeMessage) => {

    return (
        <div className={g.parent}>
            <img src={props.avatar} className={g.avatar}/>
            <div className={g.child}>
                <div className={g.name}>{props.name}</div>
                <div className={g.message}>{props.message}</div>
                <div className={g.time}>{props.time}</div>
            </div>

        </div>
    )
}

export default Message;

