import '@/styles/index.scss'
import {Manrope} from 'next/font/google'

import type {AppProps} from 'next/app'
import {Header} from "@/shared/ui/Header/Header";
import {Footer} from "@/shared/ui/FooterOct23/Footer";
import Head from "next/head";
import {Layout} from "@/widgets/Layout/Layout";
import {useRouter} from "next/router";
import {Suspense, useEffect, useState} from "react";
import {Navigation} from "@/shared/ui/Navigation/Navigation";
import {footerList} from "@/utils/footerList";
import {ProductNavigation} from "@/shared/ui/ProductNavigation/ProductNavigation";
import {Metrika} from "@/utils/Metrika";
import {ParallaxProvider} from 'react-scroll-parallax';

const manrope = Manrope({
    weight: ['300', '400', '500', '600', '700'],
    style: ['normal'],
    subsets: ['cyrillic'],
})

function MyApp({Component, pageProps}: AppProps) {
    const router = useRouter()
    const [background, setBackground] = useState('light')
    const [whiteLogo, setWhiteLogo] = useState(false)
    const [darkFooter, setDarkFooter] = useState(true)

    const [open, setOpen] = useState(false)

    const [productPage, setProductPage] = useState(false)

    useEffect(() => {
        setOpen(false)
    }, [])

    useEffect(() => {
        if (router.pathname === '/') {
            setDarkFooter(true)
        }
    }, [router])

    return (
        <div className={`root ${background}`}>
            <ParallaxProvider>
                <div className={`page-wrapper`}>
                    <Layout className={`${manrope.className}`}>
                        <Head>
                            <meta name="yandex-verification" content="5f3943bf12cb3e45"/>
                            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                            <link rel="icon" href="/images/kfa2_icon_6.svg" sizes="any"/>
                        </Head>
                        <Suspense>
                            <Metrika/>
                        </Suspense>
                        <Header darkFooter={darkFooter} productPage={productPage} setOpen={setOpen}
                                logoColor={whiteLogo}/>
                        <Navigation open={open} setOpen={setOpen}/>

                        <main className={'main'}>
                            <Component
                                productPage={productPage}
                                setProductPage={setProductPage}
                                router={router} setDarkFooter={setDarkFooter}
                                setLogo={setWhiteLogo}
                                setBackground={setBackground}
                                {...pageProps}
                            />
                        </main>

                        <Footer darkFooter={darkFooter} list={footerList}/>
                    </Layout>
                </div>
            </ParallaxProvider>
        </div>
    )
}

export default MyApp
