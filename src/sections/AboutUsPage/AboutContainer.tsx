import cls from './AboutContainer.module.scss'

export const AboutContainer = () => {
    return (
        <div className={cls.container}>
            <h2 className={cls.title}>
                KFA2&nbsp;&mdash; зарегистрированная торговая марка производственной группы Galaxy Microsystems Limited
                (Гонконг).
            </h2>

            <p className={cls.text}>
                Свидетельство на&nbsp;товарный знак &#8470;&nbsp;721125. Выдано Федеральной службой
                по&nbsp;интеллектуальной собственности (Роспатент)
                РФ&nbsp;23&nbsp;июля 2019&nbsp;года.
            </p>

            <Blur/>
        </div>
    );
};

const Blur = () => {
    return (
        <svg className={cls.blur} width="566" height="544" viewBox="0 0 566 544" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.5" filter="url(#filter0_f_4757_1198)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M310.916 81.627C260.603 89.2367 239.299 145.351 201.447 179.281C159.334 217.032 75.9437 232.161 80.1536 288.486C84.4277 345.67 170.928 347.769 216.639 382.536C251.009 408.677 267.698 464.419 310.916 463.998C354.079 463.577 373.638 411.934 403.369 380.716C431.738 350.928 468.725 328.503 478.068 288.486C489.838 238.069 492.077 180.552 459.511 140.25C424.76 97.2445 365.662 73.3469 310.916 81.627Z" fill="url(#paint0_linear_4757_1198)"/>
            </g>
            <defs>
                <filter id="filter0_f_4757_1198" x="0" y="0" width="566" height="544" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="40" result="effect1_foregroundBlur_4757_1198"/>
                </filter>
                <linearGradient id="paint0_linear_4757_1198" x1="486" y1="80" x2="6.91199" y2="229.007" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#44FC8E"/>
                    <stop offset="1" stop-color="#4916DD"/>
                </linearGradient>
            </defs>
        </svg>
    )
}
