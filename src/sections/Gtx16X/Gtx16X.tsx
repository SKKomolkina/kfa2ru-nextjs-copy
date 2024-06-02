import styles from './Gtx16X.module.scss'
import Header from "./Header"
import Subtitle from './Subtitle'
import Swiper from './Swiper'
import Games from './Games'
import Memory from './Memory'
import Radiator from './Radiator'
import Simple from './Simple'
import Block from './Block'
import Stickers from './Stickers'
import Line from './Line'
import Download from './Download'
import Scope from './Scope'

export const Gtx16X = () => {
    return (
        <>
            <Header/>
            <div className={styles.linesContainer}/>
            <Subtitle/>
            <Swiper/>
            <Games/>
            <Memory/>
            <Radiator/>
            <Simple/>

            <div className={styles.linesContainerBot}/>
            <Block/>
            <Stickers/>
            <Line/>
            <Download/>
            <Scope/>
        </>
    );
}
