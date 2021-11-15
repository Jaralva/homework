import React from 'react'
import sd from './SuperDoubleRange.module.css'

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки

    return (
        <>
            <input
                type={'range'}
                value={value[0]}
                className={sd.slider1}
            />
            <input
                type={'range'}
                value={value[1]}
                className={sd.slider2}
            />

        </>
    )
}

export default SuperDoubleRange
