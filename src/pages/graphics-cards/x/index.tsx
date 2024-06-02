import {XPage} from "@/sections/XPage/XPage";
import localFont from "@next/font/local";
import {useEffect} from "react";
import {ProductNavigation} from "@/shared/ui/ProductNavigation/ProductNavigation";
import styles from '@/sections/XPage/XPage.module.scss'

const furore = localFont({
    src: '../../../styles/fonts/Furore/Furore.otf',
    weight: '400',
    variable: '--font-furore',
})

const X = ({setLogo, router, setBackground, setDarkFooter}: any) => {
    useEffect(() => {
        setLogo(true)
        setBackground('light')
        setDarkFooter(true)
    }, [])

    useEffect(() => {
        setLogo(true)
        setBackground('light')
        setDarkFooter(true)
    }, [router])

    return (
        <>
            <ProductNavigation className={styles.color} pageLink={'/graphics-cards/x'}/>
            <XPage font={furore}/>
        </>
    )
}
export default X
