import cls from './Item.module.scss';
import {classNames} from "@/shared/lib/classNames/classNames";
import {Button} from '../Button/Button';
import {useState} from "react";

interface ItemProps {
    className?: string;
    index: number,
    item: { title: string, tags: string[], text: string, link: string },
}

export const Item = ({className, index, item}: ItemProps) => {
    const [focus, setFocus] = useState(false);

    return (
        <li onMouseEnter={() => setFocus(true)}
            onMouseLeave={() => setFocus(false)}
            className={classNames(cls.Item, {}, [className])}
        >
            <a className={cls.link} href={item.link}>
                <h3 className={cls.title}>{item.title}</h3>

                <ul className={cls.tags}>
                    {item.tags.map((tag, index) => {
                        if (tag === 'Видеокарты' || tag === 'Периферия') {
                            return (
                                <li key={index} className={cls.tagGreen}>
                                    <p className={cls.tagText}>{tag}</p>
                                </li>
                            )
                        } else {
                            return (
                                <li key={index} className={cls.tag}>
                                    <p className={cls.tagText}>{tag}</p>
                                </li>
                            )
                        }
                    })}
                </ul>

                <p className={cls.text}>
                    {item.text}
                </p>

                <Button focus={focus} className={cls.arrowHidden}/>
            </a>
        </li>
    );
};
