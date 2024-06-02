import cls from './Radiator.module.scss'

export const Radiator = () => {
    return (
        <div className={cls.section}>
            <svg className={cls.details} width="154" height="177" viewBox="0 0 154 177" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <circle cx="65.5" cy="88.5" r="88.5" fill="url(#paint0_radial_4549_1306)" fill-opacity="0.5"/>
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M67.9461 74.2742C42.5202 50.0385 13.8543 48.9431 -5.99948 53.1666C-18.3141 55.7863 -26.9076 62.5541 -32.0335 70.8266C-23.3682 69.1008 -14.4704 70.5369 -5.76677 76.7682C4.64149 84.22 8.41882 94.6776 7.47626 103.556C6.5364 112.41 0.868828 119.766 -7.61874 120.754C-17.7136 121.928 -25.5486 118.816 -30.8781 113.284C-36.1932 107.767 -38.9663 99.8965 -39.0695 91.6217C-39.1483 85.2971 -37.6673 78.7129 -34.5507 72.7231C-35.4903 72.9853 -36.427 73.2843 -37.3604 73.6179C-47.5042 77.2426 -57.2613 84.9532 -65.9344 93.9096C-80.7878 109.248 -92.3142 128.077 -97.0557 135.822C-97.8518 137.122 -98.4566 138.11 -98.8538 138.717C-99.044 139.007 -99.4315 139.087 -99.7194 138.896C-100.007 138.704 -100.087 138.313 -99.8965 138.023C-99.5116 137.435 -98.9198 136.468 -98.1376 135.189C-93.4252 127.488 -81.7996 108.489 -66.8284 93.0291C-58.0997 84.0153 -48.1834 76.1483 -37.7777 72.43C-36.4315 71.949 -35.0771 71.5375 -33.7163 71.2019C-28.5109 62.1871 -19.4487 54.7397 -6.25738 51.9335C13.874 47.651 42.9993 48.7611 68.8044 73.3583C69.0552 73.5974 69.0663 73.9962 68.8293 74.2491C68.5923 74.502 68.1969 74.5132 67.9461 74.2742ZM-32.9023 72.302C-36.2929 78.3669 -37.9008 85.1284 -37.82 91.6059C-37.7201 99.6213 -35.0342 107.162 -29.9819 112.406C-24.9442 117.635 -17.5035 120.635 -7.76196 119.502C-0.00554657 118.599 5.33843 111.857 6.23383 103.422C7.12652 95.0131 3.56283 84.9931 -6.49009 77.7958C-15.2549 71.5207 -24.1867 70.2822 -32.9023 72.302Z"
                      fill="#91FF6A"/>
                <defs>
                    <radialGradient id="paint0_radial_4549_1306" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                                    gradientTransform="translate(65.5 88.5) rotate(90) scale(88.5)">
                        <stop stop-color="#91FF6A" stop-opacity="0.6"/>
                        <stop offset="1" stop-color="#91FF6A" stop-opacity="0"/>
                    </radialGradient>
                </defs>
            </svg>

            <p className={cls.text}>
                <span className={cls.textSpan}>Радиатор отводит тепло от&nbsp;всех ключевых точек нагрева:</span> Модуль
                регулятора напряжения (VRM),
                Графического процессора, Микросхем видеопамяти
            </p>
        </div>
    );
};
