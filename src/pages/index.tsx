import type {NextPage} from 'next'
import Head from 'next/head'

import {HomePage} from "@/sections/HomePage/HomePage"
import {useEffect} from "react";

const Home = ({setLogo, setBackground, router, setDarkFooter}: any) => {
    useEffect(() => {
        setLogo(false)
        setBackground('light')
        setDarkFooter(true)
    }, [])

    useEffect(() => {
        setLogo(false)
        setBackground('light')
        setDarkFooter(true)
    }, [setBackground, setLogo, router, setDarkFooter])

    return (
        <HomePage/>
    )
}

export default Home
