import cls from './Item.module.scss';
import {classNames} from "@/shared/lib/classNames/classNames";
import {Line} from "@/shared/ui/Line/Line";
import {Title} from "./Title/Title";
import {Text} from "./Text/Text";
import {ReverseArrowLink} from "@/shared/ui/ReverseArrowLink/ReverseArrowLink";
import {useState} from "react";
import Link from "next/link";

interface ItemProps {
    className?: string;
    item: {
        title: string,
        text: string,
        link: string,
    },
    index: number,
}

export const Item = ({className, item, index}: ItemProps) => {
    const [onFocus, setOnFocus] = useState(false);

    return (
        <li className={cls.item} onMouseEnter={() => setOnFocus(true)} onMouseLeave={() => setOnFocus(false)}>
            <Link href={item.link} className={classNames(cls.Item, {}, [className])}>
                <p className={cls.number}>{`0${(index + 1)}`}</p>

                <div className={cls.textContainer}>
                    <Title title={item.title}/>
                    {item.text && <Text text={item.text}/>}
                </div>

                <ReverseArrowLink className={onFocus ? cls.arrowAnimation : cls.arrow}/>
            </Link>

            <Line className={cls.line}/>
        </li>
    );
};
