import cls from './ChairPage.module.scss'
import Image from "next/image";
import {HomeAbout} from "@/shared/ui/HomeAbout/HomeAbout";
import {useMediaQuery} from "@/features/lib/useMediaQuery";

export const ChairPage = () => {
    const query640 = useMediaQuery(639)

    return (
        <div className={cls.main}>

            {query640 ? (
                <>
                    <Image className={cls.image1} width={414} height={480} src={'../images/gc-03/1-400.png'}
                           alt={'Игровое кресло KFA2 GC-03'}/>
                    <Image className={cls.image2} width={414} height={559} src={'../images/gc-03/2-400.png'}
                           alt={'Игровое кресло KFA2 GC-03'}/>
                    <Image className={cls.image3} width={414} height={516} src={'../images/gc-03/3-400.png'}
                           alt={'Игровое кресло KFA2 GC-03'}/>
                    <Image className={cls.image4} width={414} height={520} src={'../images/gc-03/4-400.png'}
                           alt={'Игровое кресло KFA2 GC-03'}/>
                    <Image className={cls.image5} width={414} height={554} src={'../images/gc-03/5-400.png'}
                           alt={'Игровое кресло KFA2 GC-03'}/>
                    <Image className={cls.image6} width={414} height={562} src={'../images/gc-03/6-400.png'}
                           alt={'Игровое кресло KFA2 GC-03'}/>
                    <Image className={cls.image7} width={414} height={512} src={'../images/gc-03/7-400.png'}
                           alt={'Игровое кресло KFA2 GC-03'}/>
                    <Image className={cls.image8} width={414} height={437} src={'../images/gc-03/8-400.png'}
                           alt={'Игровое кресло KFA2 GC-03'}/>
                </>
            ) : (
                <>
                    <Image className={cls.image1} width={1920} height={790} src={'../images/gc-03/1.png'}
                           alt={'Игровое кресло KFA2 GC-03'}/>
                    <Image className={cls.image2} width={1920} height={755} src={'../images/gc-03/2.png'}
                           alt={'Игровое кресло KFA2 GC-03'}/>
                    <Image className={cls.image3} width={1920} height={773} src={'../images/gc-03/3.png'}
                           alt={'Игровое кресло KFA2 GC-03'}/>
                    <Image className={cls.image4} width={1920} height={749} src={'../images/gc-03/4.png'}
                           alt={'Игровое кресло KFA2 GC-03'}/>
                    <Image className={cls.image5} width={1920} height={685} src={'../images/gc-03/5.png'}
                           alt={'Игровое кресло KFA2 GC-03'}/>
                    <Image className={cls.image6} width={1920} height={877} src={'../images/gc-03/6.png'}
                           alt={'Игровое кресло KFA2 GC-03'}/>
                    <Image className={cls.image7} width={1920} height={908} src={'../images/gc-03/7.png'}
                           alt={'Игровое кресло KFA2 GC-03'}/>
                    <Image className={cls.image7} width={1920} height={854} src={'../images/gc-03/8.png'}
                           alt={'Игровое кресло KFA2 GC-03'}/>
                </>
            )}

            <HomeAbout blackText={true} boxClassName={cls.boxClassName}/>
        </div>
    );
};
