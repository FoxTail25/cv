// import React from "react"

import { Footer } from "../components/Footer/footer"
import Header from "../components/Header/header"
import { Main } from "../components/Main/main"

export const App = () => {

    return(
        <>
        <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
        <Header/>
        <Main/>
        <Footer/>
        </div>
        </>
    )
}