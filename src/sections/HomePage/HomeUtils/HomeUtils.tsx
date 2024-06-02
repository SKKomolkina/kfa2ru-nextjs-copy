import cls from './HomeUtils.module.scss';
import {Item} from './Item/Item';

interface HomeUtilsProps {
    className?: string;
}

const items = [
    {
        tags: ['Видеокарты', 'Периферия', 'RTX 40', 'RTX 30'],
        title: 'Xtreme tuner',
        text: 'Приложение Xtreme Tuner позволяет легко синхронизировать режимы и эффекты подсветки видеокарт KFA2\n' +
            'с игровой периферией KFA2.',
        link: '/xtreme-tuner'
    },
    {
        tags: ['Периферия', 'Slider'],
        title: 'TUNER GEAR',
        text: 'Утилита Gaming Gear Tuner позволит настраивать периферию KFA2 без привязки к видеокартам KFA2.',
        link: '/tuner-gear'
    },
    {
        tags: ['HOF', 'RTX 40', 'RTX 30'],
        title: 'HOF AI',
        text: 'Утилита HOF AI разработана специально для видеокарт серии Hall Of Fame.',
        link: '/hof-ai'
    }
]

export const HomeUtils = () => {
    return (
        <article className={cls.HomeUtils}>
            <div className={cls.titleContainer}>
                <p className={cls.title}>Утилиты для</p>
                <p className={cls.title}>периферии</p>
                <p className={cls.gradientTitle}>и видеокарт <span className={cls.span}> kfa2</span></p>
            </div>

            <ul className={cls.list}>
                {items.map((item, index) => (<Item key={index} index={index} item={item}/>))}
            </ul>

            <div className={cls.blur}/>
        </article>
    );
};
