import cls from './SecondBox.module.scss';

export const SecondBox = () => {
    return (
        <div className={cls.box}>
            <div className={cls.container}>
                {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
                <p className={cls.title}>//Скорость и мощь</p>
                <p className={cls.text}>
                    Независимо от&nbsp;того, являетесь&nbsp;ли вы&nbsp;начинающим геймером или убежденным энтузиастом,
                    наши видеокарты обеспечат мощность и&nbsp;скорость, необходимые для доминирования в&nbsp;любой игре.
                    <br/><br/>
                    Попрощайтесь с&nbsp;раздражающими задержками и&nbsp;скажите привет плавной, безупречной игре.
                </p>
            </div>
        </div>
    );
};
