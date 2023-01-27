import React from "react"
import  Education from "../Education/education"
import { WorksList } from "../Works/works-list"

export const Main = () => {
    return(
        <>
        <div style={{ flexGrow: '3'}}>
            <WorksList/>
        <Education/>
        </div>
        </>
    )
}