import React from "react"
import { Bg } from "../bg/bg"
import  Education from "../Education/education"
import { WorksList } from "../Works/works-list"

export const Main = () => {
    return(
        <>
        <div style={{ flexGrow: '3'}}>
            <Bg/>
            <WorksList/>
        <Education/>
        </div>
        </>
    )
}