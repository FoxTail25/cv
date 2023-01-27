import React from 'react'
import './works.css'
import { myWorks } from './myWorks.js'
import Work from './Post/work'
import { Link } from '@mui/material'

export const WorksList = () => {



    return (
        <><Link id='project'/>
            <div className='flex_column works__list' style={{
                width: '100%', marginTop: '45px'
            }}>

               
                    <h1>
                        Примеры моих работ
                    </h1>
                
                <div
                    className='flex_column'

                >
                    {
                        myWorks.map((el) => <Work key={el.id} {...el} />)
                    }

                </div>
            </div>
        </>
    )
}
