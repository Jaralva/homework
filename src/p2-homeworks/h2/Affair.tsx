import React from 'react'
import {AffairType} from "./HW2";

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (deletedid: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    return (
        <div>
            <button onClick={deleteCallback}>X</button>
            {props.affair.name}
        </div>
    )
}

export default Affair
