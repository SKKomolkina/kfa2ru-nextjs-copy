import styles from './SGPage.module.scss';

interface SGPageSubtitleProps {
    title: string;
    underline?: string;
}

const SGPageSubtitle = ({title, underline}: SGPageSubtitleProps) => {
    return (
        <h2 className={styles.subtitle}>{title}
            <span className={styles.subtitleSpan}>{underline}</span>
        </h2>
    )
}

export default SGPageSubtitle;
