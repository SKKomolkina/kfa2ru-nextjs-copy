import cls from './AboutSwiper.module.scss'

import {Swiper, SwiperSlide} from "swiper/react";
import {Controller, Mousewheel, Scrollbar} from "swiper";
import {useEffect, useRef, useState} from "react";
import {useMediaQuery} from "@/features/lib/useMediaQuery";

export const AboutSwiper = () => {
    const [firstSwiper, setFirstSwiper] = useState();
    const [secondSwiper, setSecondSwiper] = useState();
    const [index, setIndex] = useState(0)

    const [indexSlide, setIndexSlide] = useState(0)
    const years = ['1994', '1999', '2000', '2004', '2008', '2010', '2011', '2012']

    const over1200 = useMediaQuery(1200)

    // useEffect(() => {
    //     setIndexSlide(firstSwiper.activeIndex)
    // }, [firstSwiper, secondSwiper])
    //
    // useEffect(() => {
    //     setIndexSlide(0)
    // }, [])

    return (
        <section className={cls.section}>
            <Swiper
                initialSlide={0}
                direction={over1200 ? 'horizontal' : 'vertical'}
                scrollbar={{
                    el: '.aboutscroll',
                    draggable: true,
                }}
                modules={[Scrollbar, Mousewheel, Controller]}
                slidesPerView={over1200 ? 'auto' : 1}
                className={cls.containerPagination}
                onSwiper={setFirstSwiper}
                // slidesPerView={1}
                controller={{ control: secondSwiper }}
            >
                {years.map((i, index) =>
                    <SwiperSlide key={i} className={cls.itemPagination}>
                        <p className={cls.datePagination}>{i}</p>
                    </SwiperSlide>
                )}

                <div className={`aboutscroll ${cls.scrollbar}`}/>
            </Swiper>

            <Swiper
                mousewheel={true}
                modules={[Mousewheel, Controller]}
                initialSlide={0}
                slidesPerView={1}
                className={cls.aboutSwiper}
                onSwiper={setSecondSwiper}
                controller={{ control: firstSwiper }}
            >
                <SwiperSlide className={cls.slide}>
                    <div className={cls.titleContainer}>
                        <h3 className={cls.itemTitle}>
                            1994
                        </h3>
                        <p className={cls.itemText}>Год основания производственной группы.</p>

                        <svg className={cls.itemBlur} width="1315" height="1082" viewBox="0 0 1315 1082" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.5" filter="url(#filter0_f_4747_1131)">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M670.361 82.2049C793.045 92.8181 890.26 169.343 983.899 249.17C1089.47 339.166 1253.39 425.006 1233.32 562.122C1213.08 700.315 1014.13 709.184 903.949 795.274C818.767 861.833 778.54 1001.83 670.361 1002C562.161 1002.17 522.476 860.973 436.047 795.998C319.276 708.214 117.788 704.372 85.2353 562.122C52.1231 417.428 182.431 284.003 297.317 189.774C401.275 104.508 536.309 70.6082 670.361 82.2049Z"
                                      fill="url(#paint0_linear_4747_1131)"/>
                            </g>
                            <defs>
                                <filter id="filter0_f_4747_1131" x="0" y="0" width="1315" height="1082"
                                        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix"
                                             result="shape"/>
                                    <feGaussianBlur stdDeviation="40" result="effect1_foregroundBlur_4747_1131"/>
                                </filter>
                                <linearGradient id="paint0_linear_4747_1131" x1="80" y1="80" x2="1396.05"
                                                y2="564.974" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#44FC8E"/>
                                    <stop offset="1" stop-color="#4916DD"/>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </SwiperSlide>

                <SwiperSlide className={cls.slide}>
                    <div className={cls.titleContainer}>
                        <h3 className={cls.itemTitle}>
                            1999
                        </h3>
                        <p className={cls.itemText}>Официальный партнёр NVIDIA c 1999.</p>

                        <svg className={cls.itemBlur} width="1315" height="1082" viewBox="0 0 1315 1082" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.5" filter="url(#filter0_f_4747_1131)">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M670.361 82.2049C793.045 92.8181 890.26 169.343 983.899 249.17C1089.47 339.166 1253.39 425.006 1233.32 562.122C1213.08 700.315 1014.13 709.184 903.949 795.274C818.767 861.833 778.54 1001.83 670.361 1002C562.161 1002.17 522.476 860.973 436.047 795.998C319.276 708.214 117.788 704.372 85.2353 562.122C52.1231 417.428 182.431 284.003 297.317 189.774C401.275 104.508 536.309 70.6082 670.361 82.2049Z"
                                      fill="url(#paint0_linear_4747_1131)"/>
                            </g>
                            <defs>
                                <filter id="filter0_f_4747_1131" x="0" y="0" width="1315" height="1082"
                                        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix"
                                             result="shape"/>
                                    <feGaussianBlur stdDeviation="40" result="effect1_foregroundBlur_4747_1131"/>
                                </filter>
                                <linearGradient id="paint0_linear_4747_1131" x1="80" y1="80" x2="1396.05"
                                                y2="564.974" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#44FC8E"/>
                                    <stop offset="1" stop-color="#4916DD"/>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </SwiperSlide>

                <SwiperSlide className={cls.slide}>
                    <div className={cls.titleContainer}>
                        <h3 className={cls.itemTitle}>
                            2000
                        </h3>
                        <p className={cls.itemText}>Появление бренда GALAXY.</p>

                        <svg className={cls.itemBlur} width="1315" height="1082" viewBox="0 0 1315 1082" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.5" filter="url(#filter0_f_4747_1131)">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M670.361 82.2049C793.045 92.8181 890.26 169.343 983.899 249.17C1089.47 339.166 1253.39 425.006 1233.32 562.122C1213.08 700.315 1014.13 709.184 903.949 795.274C818.767 861.833 778.54 1001.83 670.361 1002C562.161 1002.17 522.476 860.973 436.047 795.998C319.276 708.214 117.788 704.372 85.2353 562.122C52.1231 417.428 182.431 284.003 297.317 189.774C401.275 104.508 536.309 70.6082 670.361 82.2049Z"
                                      fill="url(#paint0_linear_4747_1131)"/>
                            </g>
                            <defs>
                                <filter id="filter0_f_4747_1131" x="0" y="0" width="1315" height="1082"
                                        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix"
                                             result="shape"/>
                                    <feGaussianBlur stdDeviation="40" result="effect1_foregroundBlur_4747_1131"/>
                                </filter>
                                <linearGradient id="paint0_linear_4747_1131" x1="80" y1="80" x2="1396.05"
                                                y2="564.974" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#44FC8E"/>
                                    <stop offset="1" stop-color="#4916DD"/>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </SwiperSlide>

                <SwiperSlide className={cls.slide}>
                    <div className={cls.titleContainer}>
                        <h3 className={cls.itemTitle}>
                            2004
                        </h3>
                        <p className={cls.itemText}>Выход бренда GALAXY на&nbsp;Европейский рынок.</p>

                        <svg className={cls.itemBlur} width="1315" height="1082" viewBox="0 0 1315 1082" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.5" filter="url(#filter0_f_4747_1131)">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M670.361 82.2049C793.045 92.8181 890.26 169.343 983.899 249.17C1089.47 339.166 1253.39 425.006 1233.32 562.122C1213.08 700.315 1014.13 709.184 903.949 795.274C818.767 861.833 778.54 1001.83 670.361 1002C562.161 1002.17 522.476 860.973 436.047 795.998C319.276 708.214 117.788 704.372 85.2353 562.122C52.1231 417.428 182.431 284.003 297.317 189.774C401.275 104.508 536.309 70.6082 670.361 82.2049Z"
                                      fill="url(#paint0_linear_4747_1131)"/>
                            </g>
                            <defs>
                                <filter id="filter0_f_4747_1131" x="0" y="0" width="1315" height="1082"
                                        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix"
                                             result="shape"/>
                                    <feGaussianBlur stdDeviation="40" result="effect1_foregroundBlur_4747_1131"/>
                                </filter>
                                <linearGradient id="paint0_linear_4747_1131" x1="80" y1="80" x2="1396.05"
                                                y2="564.974" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#44FC8E"/>
                                    <stop offset="1" stop-color="#4916DD"/>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </SwiperSlide>

                <SwiperSlide className={cls.slide}>
                    <div className={cls.titleContainer}>
                        <h3 className={cls.itemTitle}>
                            2008
                        </h3>
                        <p className={cls.itemText}>Учреждение ежегодного мероприятия для геймеров
                            и&nbsp;фанатов &laquo;GALAXY Carnaval&raquo; с&nbsp;игровыми турнирами и&nbsp;чемпионатом
                            по&nbsp;экстремальному разгону.</p>

                        <svg className={cls.itemBlur} width="1315" height="1082" viewBox="0 0 1315 1082" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.5" filter="url(#filter0_f_4747_1131)">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M670.361 82.2049C793.045 92.8181 890.26 169.343 983.899 249.17C1089.47 339.166 1253.39 425.006 1233.32 562.122C1213.08 700.315 1014.13 709.184 903.949 795.274C818.767 861.833 778.54 1001.83 670.361 1002C562.161 1002.17 522.476 860.973 436.047 795.998C319.276 708.214 117.788 704.372 85.2353 562.122C52.1231 417.428 182.431 284.003 297.317 189.774C401.275 104.508 536.309 70.6082 670.361 82.2049Z"
                                      fill="url(#paint0_linear_4747_1131)"/>
                            </g>
                            <defs>
                                <filter id="filter0_f_4747_1131" x="0" y="0" width="1315" height="1082"
                                        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix"
                                             result="shape"/>
                                    <feGaussianBlur stdDeviation="40" result="effect1_foregroundBlur_4747_1131"/>
                                </filter>
                                <linearGradient id="paint0_linear_4747_1131" x1="80" y1="80" x2="1396.05"
                                                y2="564.974" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#44FC8E"/>
                                    <stop offset="1" stop-color="#4916DD"/>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </SwiperSlide>

                <SwiperSlide className={cls.slide}>
                    <div className={cls.titleContainer}>
                        <h3 className={cls.itemTitle}>
                            2010
                        </h3>
                        <p className={cls.itemText}>
                            В&nbsp;2010 инженерный отдел разработал первую в&nbsp;мире видеокарту с&nbsp;поддержкой WHDI
                            для стриминга видео в&nbsp;1080р.
                        </p>

                        <svg className={cls.itemBlur} width="1315" height="1082" viewBox="0 0 1315 1082" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.5" filter="url(#filter0_f_4747_1131)">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M670.361 82.2049C793.045 92.8181 890.26 169.343 983.899 249.17C1089.47 339.166 1253.39 425.006 1233.32 562.122C1213.08 700.315 1014.13 709.184 903.949 795.274C818.767 861.833 778.54 1001.83 670.361 1002C562.161 1002.17 522.476 860.973 436.047 795.998C319.276 708.214 117.788 704.372 85.2353 562.122C52.1231 417.428 182.431 284.003 297.317 189.774C401.275 104.508 536.309 70.6082 670.361 82.2049Z"
                                      fill="url(#paint0_linear_4747_1131)"/>
                            </g>
                            <defs>
                                <filter id="filter0_f_4747_1131" x="0" y="0" width="1315" height="1082"
                                        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix"
                                             result="shape"/>
                                    <feGaussianBlur stdDeviation="40" result="effect1_foregroundBlur_4747_1131"/>
                                </filter>
                                <linearGradient id="paint0_linear_4747_1131" x1="80" y1="80" x2="1396.05"
                                                y2="564.974" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#44FC8E"/>
                                    <stop offset="1" stop-color="#4916DD"/>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </SwiperSlide>

                <SwiperSlide className={cls.slide}>
                    <div className={cls.titleContainer}>
                        <h3 className={cls.itemTitle}>
                            2011
                        </h3>
                        <p className={cls.itemText}>
                            В&nbsp;2011 году была разработана концепция видеокарты премиального сегмента для энтузиастов
                            и&nbsp;профессиональных оверклокеров&nbsp;&mdash; появилась серия Hall Of&nbsp;Fame (HOF).
                        </p>

                        <svg className={cls.itemBlur} width="1315" height="1082" viewBox="0 0 1315 1082" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.5" filter="url(#filter0_f_4747_1131)">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M670.361 82.2049C793.045 92.8181 890.26 169.343 983.899 249.17C1089.47 339.166 1253.39 425.006 1233.32 562.122C1213.08 700.315 1014.13 709.184 903.949 795.274C818.767 861.833 778.54 1001.83 670.361 1002C562.161 1002.17 522.476 860.973 436.047 795.998C319.276 708.214 117.788 704.372 85.2353 562.122C52.1231 417.428 182.431 284.003 297.317 189.774C401.275 104.508 536.309 70.6082 670.361 82.2049Z"
                                      fill="url(#paint0_linear_4747_1131)"/>
                            </g>
                            <defs>
                                <filter id="filter0_f_4747_1131" x="0" y="0" width="1315" height="1082"
                                        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix"
                                             result="shape"/>
                                    <feGaussianBlur stdDeviation="40" result="effect1_foregroundBlur_4747_1131"/>
                                </filter>
                                <linearGradient id="paint0_linear_4747_1131" x1="80" y1="80" x2="1396.05"
                                                y2="564.974" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#44FC8E"/>
                                    <stop offset="1" stop-color="#4916DD"/>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </SwiperSlide>

                <SwiperSlide className={cls.slide}>
                    <div className={cls.titleContainer}>
                        <h3 className={cls.itemTitle}>
                            2012
                        </h3>
                        <p className={cls.itemText}>
                            Компания выходит на&nbsp;рынок твердотельных SSD накопителей.
                        </p>

                        <svg className={cls.itemBlur} width="1315" height="1082" viewBox="0 0 1315 1082" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.5" filter="url(#filter0_f_4747_1131)">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M670.361 82.2049C793.045 92.8181 890.26 169.343 983.899 249.17C1089.47 339.166 1253.39 425.006 1233.32 562.122C1213.08 700.315 1014.13 709.184 903.949 795.274C818.767 861.833 778.54 1001.83 670.361 1002C562.161 1002.17 522.476 860.973 436.047 795.998C319.276 708.214 117.788 704.372 85.2353 562.122C52.1231 417.428 182.431 284.003 297.317 189.774C401.275 104.508 536.309 70.6082 670.361 82.2049Z"
                                      fill="url(#paint0_linear_4747_1131)"/>
                            </g>
                            <defs>
                                <filter id="filter0_f_4747_1131" x="0" y="0" width="1315" height="1082"
                                        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix"
                                             result="shape"/>
                                    <feGaussianBlur stdDeviation="40" result="effect1_foregroundBlur_4747_1131"/>
                                </filter>
                                <linearGradient id="paint0_linear_4747_1131" x1="80" y1="80" x2="1396.05"
                                                y2="564.974" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#44FC8E"/>
                                    <stop offset="1" stop-color="#4916DD"/>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </SwiperSlide>
            </Swiper>

            <p className={cls.text}>
                Основанная в&nbsp;1994 году в&nbsp;Гонконге производственная группа <span
                className={cls.textSpan}> GALAXY Microsystems
                            Limited</span>, владеет торговыми марками <span
                className={cls.textSpan}> KFA2, GALAX и&nbsp;GALAXY</span>, широко представленными
                на&nbsp;международном рынке. Продукция компании продаётся в&nbsp;России, странах
                Азиатско-Тихоокеанского региона, Северной Америке, странах Европы и&nbsp;на&nbsp;Среднем
                Востоке.
                <br/><br/>
                Благодаря сплочённой команде инженеров, дизайнеров и&nbsp;налаженными производственными
                процессами компания разрабатывает свои собственные видеокарты для большого круга геймеров
                и&nbsp;энтузиастов компьютерного мира&nbsp;&mdash; от&nbsp;только вступивших в&nbsp;ряды
                фанатов видеоигр до&nbsp;оверклокеров с&nbsp;мировым признанием.
            </p>
        </section>
    );
};
