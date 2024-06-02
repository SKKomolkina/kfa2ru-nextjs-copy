import styles from './Header.module.scss'
import star from './Gtx1630Header/images/Star.svg'
import lines from './Gtx1630Header/images/lines.svg'
import Image from "next/image"

const Gtx1630Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Image width={270} height={270} alt='' src={'../../images/gtx16x/header/Star.svg'} className={styles.star}/>
                <Image width={1021} height={792} alt='' src={'../../images/gtx16x/header/lines.svg'} className={styles.lines}/>

                <div className={styles.titleContainer}>
                    <h1 className={styles.title}>Вступай</h1>
                    <Image width={542} height={124} alt='' src={'../../images/gtx16x/header/title.svg'} className={styles.titleBorder}/>

                    <Image width={341} height={161} alt='' src={'../../images/gtx16x/header/Sign.svg'} className={styles.sign}/>
                </div>
            </div>
        </header>
    )
}

export default Gtx1630Header;
