import React from 'react'
import Message from "./Message";

const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Винцент Анисенко',
    message: 'Доброе утро',
    time: '04:00',
}

function HW1() {
    // @ts-ignore
    return (
        <div >
            <hr/>


            {/*should work (должно работать)*/}

            <Message avatar={messageData.avatar}
                     name={messageData.name}
                     message={messageData.message}
                     time={messageData.time}/>


            <hr/>
        </div>
    )
}

export default HW1

