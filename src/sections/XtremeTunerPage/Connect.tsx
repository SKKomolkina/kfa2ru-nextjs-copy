import cls from './Connect.module.scss'
import Image from "next/image"
import {useState} from "react";

export const Connect = () => {
    const [open, setOpen] = useState(false)

    return (
        <section className={cls.section}>
            <div className={cls.titleContainer}>
                <h2 className={cls.title}>
                    Выбери свой вариант подключения
                </h2>
                <p className={cls.text}>
                    Десктоп и мобильное приложение
                </p>
                <button onClick={() => setOpen(true)} className={cls.buttonOpen}>Подробнее</button>

                <Image className={cls.image} width={1388} height={781}
                       src={'./images/extreme-tuner-page/connect/image.png'}
                       alt={'extreme-tuner'}
                />
                <div className={cls.shadow}/>
            </div>

            <div className={open ? cls.containerHidden : cls.containerVisible}>
                <svg onClick={() => setOpen(false)} className={cls.buttonClose} width="40" height="40"
                     viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="19.5" stroke="white"/>
                    <path d="M25.1111 25.1111L14.2188 14.2227M25.1111 14.2227L14.2188 25.1111" stroke="white"
                          strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

                <ul className={cls.list}>
                    <li className={cls.item}>
                        <svg className={cls.icon} width="59" height="50" viewBox="0 0 59 50" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M55.6693 0H3.33064C2.4476 0.000984614 1.60101 0.355864 0.976594 0.986781C0.352191 1.61771 0.000975669 2.47313 0 3.36537V38.9423C0.000975669 39.8345 0.352191 40.69 0.976594 41.3209C1.60101 41.9518 2.4476 42.3066 3.33064 42.3077H22.6294L22.0583 45.1923H18.0806C17.8282 45.1923 17.5862 45.2935 17.4078 45.4739C17.2293 45.6542 17.1291 45.8988 17.1291 46.1539V49.0384C17.1291 49.2934 17.2293 49.538 17.4078 49.7183C17.5862 49.8986 17.8282 50 18.0806 50H40.9193C41.1717 50 41.4137 49.8986 41.5922 49.7183C41.7706 49.538 41.8709 49.2934 41.8709 49.0384V46.1539C41.8709 45.8988 41.7706 45.6542 41.5922 45.4739C41.4137 45.2935 41.1717 45.1923 40.9193 45.1923H36.9416L36.3706 42.3077H55.6693C56.5523 42.3066 57.399 41.9518 58.0234 41.3209C58.6477 40.69 58.9989 39.8345 59 38.9423V3.36537C58.9989 2.47313 58.6477 1.61771 58.0234 0.986781C57.399 0.355864 56.5523 0.000984614 55.6693 0ZM39.9678 47.1153V48.0768H19.0322V47.1153H39.9678ZM23.9997 45.1923L24.5706 42.3077H34.4293L35.0003 45.1923H23.9997ZM57.0967 38.9423C57.0964 39.3247 56.9459 39.6913 56.6782 39.9617C56.4106 40.2321 56.0478 40.3843 55.6693 40.3845H3.33064C2.95216 40.3843 2.58927 40.2321 2.32165 39.9617C2.05403 39.6913 1.90354 39.3247 1.90322 38.9423V36.5384H57.0967V38.9423ZM57.0967 34.6154H1.90322V3.36537C1.90354 2.98295 2.05403 2.61628 2.32165 2.34587C2.58927 2.07546 2.95216 1.92339 3.33064 1.92307H55.6693C56.0478 1.92339 56.4106 2.07546 56.6782 2.34587C56.9459 2.61628 57.0964 2.98295 57.0967 3.36537V34.6154Z"
                                fill="#C7C7C7"/>
                        </svg>

                        <p className={cls.itemText}>
                            Запускаем десктоп приложение Xtreme Tuner
                        </p>
                    </li>

                    <li className={cls.item}>
                        <svg className={cls.icon} width="50" height="50" viewBox="0 0 50 50" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16.5893 23.9616C21.6559 23.9616 26.7219 23.9616 31.7873 23.9616C32.204 23.9616 32.4139 23.8721 32.5555 23.4233C32.8818 22.3712 33.536 21.4507 34.4226 20.7963C35.3093 20.1418 36.382 19.7876 37.4843 19.7852C38.5866 19.7829 39.6608 20.1325 40.5503 20.7831C41.4397 21.4338 42.0979 22.3514 42.4287 23.4022C42.5768 23.877 42.7965 23.9697 43.2424 23.9648C45.0537 23.9404 46.8649 23.9518 48.6746 23.9486C49.1628 23.9486 49.62 24.0088 49.8691 24.5064C50.2369 25.243 49.7731 26.009 48.9008 26.0334C47.6412 26.0659 46.3784 26.0464 45.1172 26.0497C44.9343 26.06 44.7511 26.0573 44.5687 26.0415C43.3401 25.8789 42.5703 26.1098 41.9845 27.4823C41.1512 29.4338 39.3286 30.3153 37.1935 30.177C34.9331 30.0306 33.3546 28.8174 32.5913 26.6725C32.4009 26.1375 32.1601 26.0334 31.6474 26.0334C21.6586 26.0507 11.6692 26.0562 1.67932 26.0497C1.3948 26.0577 1.1101 26.0419 0.828204 26.0025C0.584324 25.9651 0.363666 25.8367 0.210599 25.6433C0.0575324 25.45 -0.0165947 25.2058 0.00312531 24.9601C0.0470644 24.4462 0.292796 24.0721 0.846103 23.9844C1.04735 23.9583 1.25022 23.9469 1.45311 23.9502L16.5893 23.9616ZM34.3813 24.9991C34.382 25.6164 34.5662 26.2194 34.9103 26.7319C35.2545 27.2444 35.7433 27.6433 36.3145 27.8778C36.8859 28.1124 37.514 28.1721 38.1194 28.0494C38.7247 27.9267 39.2799 27.6271 39.7146 27.1886C40.1492 26.75 40.4439 26.1924 40.561 25.5864C40.678 24.9804 40.6124 24.3533 40.3723 23.7846C40.1321 23.2159 39.7285 22.7313 39.2124 22.3922C38.6963 22.0531 38.0911 21.8749 37.4734 21.88C36.6513 21.8898 35.8662 22.2225 35.2875 22.8062C34.709 23.3898 34.3834 24.1775 34.3813 24.9991Z"
                                fill="#C7C7C7"/>
                            <path
                                d="M38.6747 6.25376C35.3402 6.25376 32.0025 6.25376 28.6696 6.244C28.2302 6.244 28.0041 6.31881 27.856 6.80342C27.5231 7.85699 26.8618 8.77657 25.9686 9.42776C25.0755 10.0788 23.9973 10.4275 22.8918 10.4226C21.7862 10.4177 20.7112 10.0595 19.8238 9.40047C18.9365 8.74139 18.2834 7.816 17.9599 6.75952C17.8281 6.33344 17.6344 6.244 17.2374 6.24563C11.9299 6.25647 6.62254 6.25647 1.31514 6.24563C0.311045 6.24563 -0.193441 5.67808 0.0685663 4.87796C0.241067 4.34781 0.646284 4.16893 1.15239 4.16243C1.98561 4.15267 2.81882 4.16243 3.65367 4.16243C8.14684 4.16243 12.6417 4.16243 17.1365 4.17218C17.5986 4.17218 17.8346 4.08761 17.994 3.58674C18.3296 2.54376 18.988 1.63428 19.8744 0.989597C20.7608 0.34492 21.8292 -0.00162297 22.9255 5.71469e-06C24.0218 0.0016344 25.0892 0.351348 25.9736 0.998665C26.8581 1.64597 27.5138 2.5574 27.8462 3.60138C27.9943 4.06648 28.1977 4.17381 28.6598 4.17218C35.2692 4.15809 41.878 4.15809 48.4861 4.17218C48.7698 4.1614 49.0536 4.19041 49.3291 4.25837C49.832 4.40473 50.0257 4.81454 49.9899 5.29916C49.9541 5.78378 49.7018 6.14806 49.1762 6.22287C48.9342 6.24972 48.6906 6.25951 48.4471 6.25214L38.6747 6.25376ZM22.9153 8.33209C23.7385 8.33426 24.5291 8.01029 25.1138 7.43116C25.6986 6.85203 26.0297 6.06493 26.0349 5.24224C26.0417 4.62269 25.864 4.01512 25.5243 3.49676C25.1846 2.97841 24.6984 2.57268 24.1275 2.33118C23.5565 2.08969 22.9266 2.0233 22.3177 2.14049C21.7089 2.25767 21.1486 2.55312 20.7083 2.98928C20.2679 3.42544 19.9672 3.98261 19.8446 4.58996C19.7219 5.19729 19.7827 5.82737 20.0193 6.40009C20.2558 6.9728 20.6575 7.46229 21.1732 7.80631C21.6889 8.15033 22.2952 8.33334 22.9153 8.33209Z"
                                fill="#C7C7C7"/>
                            <path
                                d="M17.619 45.8401C16.8052 48.4795 14.9355 49.9822 12.5237 50C10.6115 50.013 8.19811 48.8763 7.36814 45.8401H5.76193C4.23708 45.8401 2.71061 45.8498 1.18576 45.8401C0.399737 45.8319 -0.0656949 45.3522 0.00753689 44.6855C0.0726318 44.0936 0.453439 43.7699 1.15809 43.765C3.02957 43.7536 4.90104 43.7406 6.77089 43.765C7.24283 43.765 7.42185 43.6236 7.55854 43.1748C7.89518 42.1332 8.55326 41.2248 9.43839 40.5802C10.3236 39.9354 11.3903 39.5873 12.4856 39.5859C13.5809 39.5844 14.6485 39.9297 15.5353 40.5721C16.4222 41.2145 17.0827 42.1211 17.4221 43.1618C17.5848 43.6496 17.7914 43.7634 18.27 43.7634C28.2772 43.7504 38.2834 43.7504 48.2884 43.7634C48.5325 43.7634 48.7767 43.7634 49.0208 43.7764C49.6049 43.8219 49.9679 44.1912 49.9972 44.7522C50.0139 45.009 49.9326 45.2627 49.7695 45.4618C49.6063 45.6611 49.3736 45.7911 49.1184 45.8254C48.856 45.8562 48.5916 45.8665 48.3275 45.8563H18.4311L17.619 45.8401ZM15.6059 44.7457C15.5962 43.9197 15.2585 43.1315 14.6672 42.5543C14.0759 41.9771 13.2794 41.6583 12.4529 41.668C11.6264 41.6777 10.8375 42.0152 10.26 42.6061C9.68238 43.197 9.36336 43.9929 9.37307 44.8188C9.37788 45.2279 9.46324 45.6318 9.62431 46.0078C9.78536 46.3838 10.019 46.7245 10.3118 47.0102C10.6045 47.296 10.9507 47.5213 11.3308 47.6734C11.7107 47.8255 12.1168 47.9013 12.5261 47.8965C12.9354 47.8917 13.3396 47.8064 13.7159 47.6454C14.0922 47.4845 14.433 47.2511 14.7191 46.9585C15.005 46.6659 15.2305 46.3199 15.3827 45.9402C15.5348 45.5605 15.6107 45.1547 15.6059 44.7457Z"
                                fill="#C7C7C7"/>
                        </svg>

                        <p className={cls.itemText}>
                            Нажимаем на иконку мобильного устройства
                        </p>
                    </li>

                    <li className={cls.item}>
                        <svg className={cls.icon} width="50" height="50" viewBox="0 0 50 50" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.6247 0H0V15.6252H15.6247V0ZM12.4998 12.5001H3.12494V3.12504H12.4998V12.5001Z"
                                  fill="#C7C7C7"/>
                            <path d="M9.37494 6.25H6.25V9.37534H9.37494V6.25Z" fill="#C7C7C7"/>
                            <path
                                d="M34.375 0V15.6252H49.9997V0H34.375ZM46.8748 12.5001H37.4999V3.12504H46.8748V12.5001Z"
                                fill="#C7C7C7"/>
                            <path d="M43.7499 6.25H40.625V9.37534H43.7499V6.25Z" fill="#C7C7C7"/>
                            <path
                                d="M0 49.9992H15.6247V34.375H0V49.9992ZM3.12494 37.4999H12.4998V46.8743H3.12494V37.4999Z"
                                fill="#C7C7C7"/>
                            <path d="M9.37494 40.625H6.25V43.7501H9.37494V40.625Z" fill="#C7C7C7"/>
                            <path d="M31.2499 0H25V3.12508H31.2499V0Z" fill="#C7C7C7"/>
                            <path
                                d="M24.9999 12.5002H28.1248V9.37517H31.2498V6.25008H21.8749V3.125H18.75V6.25008V7.81262V9.37517H24.9999V12.5002Z"
                                fill="#C7C7C7"/>
                            <path d="M21.8749 12.5H18.75V15.6246H21.8749V12.5Z" fill="#C7C7C7"/>
                            <path d="M31.2498 15.625H28.1248V18.7499H18.75V21.8747H31.2498V15.625Z" fill="#C7C7C7"/>
                            <path d="M3.12494 28.1251H6.24988V25H3.12494V18.75H0V31.2501H3.12494V28.1251Z"
                                  fill="#C7C7C7"/>
                            <path d="M9.37494 18.75H6.25V21.8754H9.37494V18.75Z" fill="#C7C7C7"/>
                            <path
                                d="M18.7498 31.2501H24.9997V28.1251H21.8748V25H15.6249V18.75H12.4999V25H9.375V31.2501H12.4999V28.1251H14.0624H15.6249H18.7498V31.2501Z"
                                fill="#C7C7C7"/>
                            <path d="M31.2499 25H28.125V31.2504H31.2499V25Z" fill="#C7C7C7"/>
                            <path
                                d="M28.1248 34.375H18.75V37.4998H24.9999V46.8743H18.75V49.9992H28.1248V46.8743H34.3747V43.7495H28.1248V34.375Z"
                                fill="#C7C7C7"/>
                            <path d="M21.8749 40.625H18.75V43.7501H21.8749V40.625Z" fill="#C7C7C7"/>
                            <path d="M34.3749 34.375H31.25V40.6241H34.3749V34.375Z" fill="#C7C7C7"/>
                            <path d="M46.8748 40.625H37.5V49.9997H40.6249V43.7499H46.8748V40.625Z" fill="#C7C7C7"/>
                            <path d="M49.9999 46.875H43.75V50.0004H49.9999V46.875Z" fill="#C7C7C7"/>
                            <path d="M49.9999 34.375H46.875V37.4996H49.9999V34.375Z" fill="#C7C7C7"/>
                            <path d="M37.4999 37.5H40.6249V28.125H34.375V31.25H37.4999V37.5Z" fill="#C7C7C7"/>
                            <path
                                d="M43.7498 21.8751H40.6249V18.75H37.4999V21.8751H34.375V25.0002H46.8748V21.8751H49.9997V18.75H43.7498V21.8751Z"
                                fill="#C7C7C7"/>
                            <path d="M49.9999 28.125H43.75V31.2501H49.9999V28.125Z" fill="#C7C7C7"/>
                        </svg>

                        <p className={cls.itemText}>
                            Выбираем в мобильном приложении подключение по QR-коду
                        </p>
                    </li>

                    <li className={cls.item}>
                        <svg className={cls.icon} width="50" height="50" viewBox="0 0 50 50" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1.04163 14.5833C1.61661 14.5833 2.08327 14.1167 2.08327 13.5417V5.20833C2.08327 3.48542 3.4853 2.08333 5.20816 2.08333H13.5412C14.1162 2.08333 14.5829 1.61667 14.5829 1.04167C14.5829 0.466667 14.1162 0 13.5412 0H5.20816C2.33743 0 0 2.33542 0 5.20833V13.5417C0 14.1167 0.466653 14.5833 1.04163 14.5833Z"
                                fill="#C7C7C7"/>
                            <path
                                d="M5.20816 49.9974H13.5412C14.1162 49.9974 14.5829 49.5308 14.5829 48.9558C14.5829 48.3808 14.1162 47.9141 13.5412 47.9141H5.20816C3.4853 47.9141 2.08327 46.512 2.08327 44.7891V36.4558C2.08327 35.8808 1.61661 35.4141 1.04163 35.4141C0.466653 35.4141 0 35.8808 0 36.4558V44.7891C0 47.662 2.33743 49.9974 5.20816 49.9974Z"
                                fill="#C7C7C7"/>
                            <path
                                d="M36.4634 49.9974H44.7966C47.6673 49.9974 50.0047 47.662 50.0047 44.7891V36.4558C50.0047 35.8808 49.538 35.4141 48.963 35.4141C48.3881 35.4141 47.9215 35.8808 47.9215 36.4558V44.7891C47.9215 46.512 46.5194 47.9141 44.7966 47.9141H36.4634C35.8885 47.9141 35.4219 48.3808 35.4219 48.9558C35.4219 49.5308 35.8885 49.9974 36.4634 49.9974Z"
                                fill="#C7C7C7"/>
                            <path
                                d="M48.963 14.5833C49.538 14.5833 50.0047 14.1167 50.0047 13.5417V5.20833C50.0047 2.33542 47.6673 0 44.7966 0H36.4634C35.8885 0 35.4219 0.466667 35.4219 1.04167C35.4219 1.61667 35.8885 2.08333 36.4634 2.08333H44.7966C46.5194 2.08333 47.9215 3.48542 47.9215 5.20833V13.5417C47.9215 14.1167 48.3881 14.5833 48.963 14.5833Z"
                                fill="#C7C7C7"/>
                            <path
                                d="M13.5468 39.5808H36.4627C38.1856 39.5808 39.5876 38.1787 39.5876 36.4558V30.2058C39.5876 29.6308 39.1209 29.1641 38.546 29.1641C37.971 29.1641 37.5044 29.6308 37.5044 30.2058V36.4558C37.5044 37.0287 37.0377 37.4974 36.4627 37.4974H13.5468C12.9718 37.4974 12.5052 37.0287 12.5052 36.4558V30.2058C12.5052 29.6308 12.0385 29.1641 11.4635 29.1641C10.8886 29.1641 10.4219 29.6308 10.4219 30.2058V36.4558C10.4219 38.1787 11.8239 39.5808 13.5468 39.5808Z"
                                fill="#C7C7C7"/>
                            <path
                                d="M11.4635 22.918C12.0385 22.918 12.5052 22.4513 12.5052 21.8763V13.543C12.5052 12.9701 12.9718 12.5013 13.5468 12.5013H36.4627C37.0377 12.5013 37.5044 12.9701 37.5044 13.543V21.8763C37.5044 22.4513 37.971 22.918 38.546 22.918C39.1209 22.918 39.5876 22.4513 39.5876 21.8763V13.543C39.5876 11.8201 38.1856 10.418 36.4627 10.418H13.5468C11.8239 10.418 10.4219 11.8201 10.4219 13.543V21.8763C10.4219 22.4513 10.8886 22.918 11.4635 22.918Z"
                                fill="#C7C7C7"/>
                            <path
                                d="M7.29164 31.2474H42.7071C43.2821 31.2474 43.7488 30.7808 43.7488 30.2058C43.7488 29.6308 43.2821 29.1641 42.7071 29.1641H7.29164C6.71665 29.1641 6.25 29.6308 6.25 30.2058C6.25 30.7808 6.71665 31.2474 7.29164 31.2474Z"
                                fill="#C7C7C7"/>
                        </svg>

                        <p className={cls.itemText}>
                            Сканируем код из&nbsp;десктоп приложения
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    );
};