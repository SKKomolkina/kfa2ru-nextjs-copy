import {ProductNavigation} from "@/shared/ui/ProductNavigation/ProductNavigation"
import {Gtx1650} from "@/sections/Gtx1650/Gtx1650"
import {useEffect} from "react";
import Head from "next/head";

const Index = ({setLogo, setBackground, setDarkFooter, router}: any) => {
    useEffect(() => {
        setLogo(true)
        setBackground('dark')
        setDarkFooter(true)
    }, [])

    useEffect(() => {
        setLogo(true)
        setBackground('dark')
        setDarkFooter(true)
    }, [setLogo, setBackground, setDarkFooter, router])

    return (
        <>
            <Head>
                <link rel="canonical" href='https://kfa2.ru/graphics-cards/x/gtx16'/>
                <title>Серия X GeForce GTX 16 - Видеокарты KFA2</title>
                <meta name="keywords" content="видеокарта geforce gtx 1650, для сетевых игр, 4 гб"
                />
                <meta name="description"
                      content="Игровая видеокарта KFA2 GeForce GTX 1650 X позволит ознакомиться с самым широким спектром игровых проектов - от многочисленных инди до больших открытых миров в Full HD разрешении монитора."
                />
            </Head>

            <ProductNavigation pageLink={'/graphics-cards/x/gtx16'}/>
            {/*<Rtx30X/>*/}
            <Gtx1650/>
        </>
    );
};

export default Index
