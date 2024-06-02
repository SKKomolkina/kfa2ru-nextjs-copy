// import styles from './SGPageSerious.module.scss';

import SGPageSubtitle from "../SGPageSubtitle";

import light from './images/light.png'
import Image from "next/image";

const SgPageSerious = () => {
    return (
        <section className={styles.section}>
            <div className={styles.background}/>

            <SGPageSubtitle title={'SG'}/>
            <SGPageSubtitle underline={'_'} title={'Всё серьёзно'}/>

            {/*LIGHT*/}
            <Image width={1100} height={641} className={styles.light} src={light} alt=''/>
            {/*LIGHT*/}

            {/*DETAILS*/}
            <div className={styles.detailLeft}/>
            <div className={styles.detailRight}/>
            <div className={styles.detailRightTop}/>
            {/*DETAILS*/}
        </section>
    )
}

export default SgPageSerious;
