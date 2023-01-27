import React from 'react'
import s from './bg.module.css'

export const Bg = () => {
    return (
        <>

            <div className={s.bg}></div>
            <div className={`${s.bg} ${s.bg2}`}></div>
            <div className={`${s.bg} ${s.bg3}`}></div>
        
        </>
    )
}
