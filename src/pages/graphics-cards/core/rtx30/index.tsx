import {Rtx30Core} from "@/sections/Rtx30Core/Rtx30Core"
import {useEffect} from "react";
import {ProductNavigation} from "@/shared/ui/ProductNavigation/ProductNavigation";
import Head from "next/head";

const Index = () => {
    return (
        <>
            <Head>
                <link rel="canonical" href='https://kfa2.ru/graphics-cards/core/rtx30'/>
                <title>Серия CORE GeForce RTX 30 - Видеокарты KFA2</title>
                <meta name="keywords" content="kfa2 core, видеокарты core,"
                />
                <meta name="description"
                      content="Игровые видеокарты серии CORE разработаны для ежедневного гейминга со стабильными игровыми показателями."
                />
            </Head>

            {/*<ProductNavigation/>*/}
            <ProductNavigation pageLink={'/graphics-cards/core/rtx30'}/>
            <Rtx30Core/>
        </>
    );
};

export default Index
