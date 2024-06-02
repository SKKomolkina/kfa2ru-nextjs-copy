import styles from './Item.module.scss';

const CatalogueItem = ({item}: any) => {
    const cards = item.cards;

    return (
        <div className={styles.item}>
            <ul className={styles.codeList}>
                {cards.map((card: any) => {
                    return (
                        <li key={card.code} className={styles.codeItem}>
                            <div className={styles.series}>
                                <p className={styles.title}>{card.series}</p>
                            </div>

                            <h3 className={styles.titleSpan}>{card.graphic}</h3>

                            <div className={styles.model}>
                                <p className={styles.title}>{card.model}</p>
                            </div>

                            <div className={styles.code}>
                                <p className={styles.title}>{card.code}</p>
                            </div>

                            <div className={styles.name}>
                                <p className={styles.title}>{card.name}</p>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default CatalogueItem;
