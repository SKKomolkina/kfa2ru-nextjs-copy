import styles from './List.module.scss'

import Item from './Item'

import {useState} from "react";

interface Interface {
    cards: [{
        name: string;
        model: string;
        code: string;
        series: string;
    }],
    graphic: string
}

const List = ({list}: any) => {
    return (
        <section className={styles.section}>
            <ul className={styles.titleContainer}>
                <li className={styles.titleItem}>
                    <h2 className={styles.title}>Серия</h2>
                </li>

                <li className={styles.titleItem}>
                    <h2 className={styles.title}>Графический процессор</h2>
                </li>

                <li className={styles.model}>
                    <h2 className={styles.title}>Код модели</h2>
                </li>

                <li className={styles.code}>
                    <h2 className={styles.title}>Код продукта</h2>
                </li>

                <li className={styles.name}>
                    <h2 className={styles.title}>Наименование</h2>
                </li>
            </ul>

            <div className={styles.line}/>

            <ul className={styles.list}>
                {list.map((item: any, index: number) => {
                    return (
                        <li key={index} className={styles.item}>
                            <Item item={item}/>
                            <div className={styles.line}/>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default List
