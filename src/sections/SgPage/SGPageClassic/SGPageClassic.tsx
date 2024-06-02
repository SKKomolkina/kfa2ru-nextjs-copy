import styles from './SGPageClassic.module.scss';

import SGPageSubtitle from "../SGPageSubtitle";
import Image from "next/image";

const SGPageClassic = () => {
    return (
        <section className={styles.section}>

            <SGPageSubtitle title={'КЛАССИЧЕСКИЙ ДИЗАЙН ЯРКИЕ АКЦЕНТЫ_'}/>

            <Image width={1922} height={1343} className={styles.blur} src={'../../images/sg-st/fans/blur.svg'}
                   alt={''}/>

            <Image width={1280} height={690} className={styles.image} src={'../images/sg-st/classic/image.png'}
                   alt=''/>

            <p className={styles.text}>
                Обновлённый дизайн придётся по&nbsp;вкусу тем, кто любит чёткий баланс строгих классических форм
                и&nbsp;настраиваемых элементов.
            </p>
        </section>
    )
}

export default SGPageClassic;
