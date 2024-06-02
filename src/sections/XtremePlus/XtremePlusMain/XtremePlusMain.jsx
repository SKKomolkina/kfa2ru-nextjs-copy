import styles from './XtremePlusMain.module.scss';

const XtremePlusMain = ({children}) => {
    return (
        <section className={styles.main}>
            {children}
        </section>
    )
}

export default XtremePlusMain;
