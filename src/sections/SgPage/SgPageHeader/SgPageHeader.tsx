import styles from './SgPageHeader.module.scss';
import SGPageHeaderText from "@/sections/SgPage/SgPageHeader/SGPageHeaderText/SGPageHeaderText";
import SGPageHeaderFrame from "@/sections/SgPage/SgPageHeader/SGPageHeaderFrame/SGPageHeaderFrame";

export const SgPageHeader = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/*ELLIPSE*/}
                <div className={styles.backEllipse}/>

                {/*FRAME*/}
                {/*FRAME BORDERS*/}
                <SGPageHeaderFrame/>

                {/*FRAME TEXT*/}
                <SGPageHeaderText/>

                {/*FRAME DETAILS*/}
                <div className={styles.leftTopDetail}/>
                <div className={styles.leftDetail}/>
                <div className={styles.rightDetail}/>

                {/*FRAME TEXT*/}
                <div className={styles.textContainer}>
                    <p className={styles.text}>
                        Высокое качество элементной базы, надежность долговечность. Серия SG&nbsp;разработана
                        с&nbsp;учётом ежедневных потребностей современного геймера и&nbsp;гарантирует комфорт игрового
                        процесса
                        в&nbsp;сочетании с&nbsp;актуальными дизайнерскими решениями для ценителей стильных сборок.
                    </p>
                    <svg className={styles.textLine} width="306" height="61" viewBox="0 0 306 61" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.999985 0V43H286.543L305 60" stroke="white"/>
                    </svg>
                </div>
                {/*FRAME*/}

                <div className={styles.imageContainer}>
                    <img
                        width={1152}
                        height={508}
                        className={styles.image}
                        alt='' src={'../images/sg-page/header/image.png'}
                    />
                    <img className={styles.imageNoise}
                         width={1210}
                         height={471}
                         alt='' src={'../images/sg-page/header/imageNoise.png'}/>
                </div>
            </div>
        </section>
    );
};
