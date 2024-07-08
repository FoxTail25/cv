import React from 'react'
import './works.css'
import { myWorks } from './myWorks.js'
import Work from './Work/work'

export const WorksList = () => {

    return (
        <>
        <div id='project' className='works__anchor'/>
            <div className='flex_column works__list' style={{
                width: '100%', scrollMarginTop: '40px'
            }}>

                    <h1 className='worklist__header'>
                        Примеры моих работ
                    </h1>
                
                <div className='flex_column' >
                    {
                        myWorks.map((el) => <Work key={el.id} {...el} />)
                    }

                </div>
            </div>
        </>
    )
}
