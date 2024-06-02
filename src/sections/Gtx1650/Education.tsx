import cls from './Education.module.scss'
import Image from "next/image";

export const Education = () => {
    return (
        <div className={cls.section}>
            <ul className={cls.container}>
                <li className={cls.item}>
                    <p className={cls.itemText}>
                        Программирование
                    </p>
                </li>

                <li className={cls.item}>
                    <Image width={668} height={444} className={cls.image1} src={'../../images/1650/education/1.png'}
                           alt={''}/>
                </li>

                <li className={cls.item}>
                    <p className={cls.itemText}>
                        Разработка игр
                    </p>
                </li>

                <li className={cls.item}>
                    <Image width={223} height={153} className={cls.image2} src={'../../images/1650/education/2.png'}
                           alt={''}/>
                </li>

                <li className={cls.item}>
                    <p className={cls.itemText}>
                        Машинное обучение
                    </p>
                </li>

                <li className={cls.item}>
                    <Image width={291} height={431} className={cls.image3} src={'../../images/1650/education/3.png'}
                           alt={''}/>
                </li>

                <li className={cls.item}>
                    <Image width={293} height={196} className={cls.image4} src={'../../images/1650/education/4.png'}
                           alt={''}/>
                </li>

                <li className={cls.item}>
                    <p className={cls.itemText}>
                        Видеоредактирование
                    </p>
                </li>

                <li className={cls.item}>
                    <Image width={883} height={553} className={cls.image5} src={'../../images/1650/education/5.png'}
                           alt={''}/>
                </li>

                <li className={cls.item}>
                    <p className={cls.itemText}>
                        Вычисления
                    </p>
                </li>
            </ul>

            <svg className={cls.text} width="154" height="40" viewBox="0 0 154 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.47879 37.6344C4.64262 37.1287 3.96954 36.6518 3.45955 36.2035C2.96897 35.7322 2.68214 35.2646 2.59906 34.8007C2.52336 34.4218 2.47818 33.9011 2.46352 33.2385C2.47012 32.5742 2.48826 31.9195 2.51795 31.2745C2.54764 30.6295 2.58054 30.1449 2.61663 29.8205C2.71368 29.705 2.7442 29.5632 2.7082 29.395C2.6916 29.2037 2.6833 29.1081 2.6833 29.1081C2.65283 29.0037 2.70324 28.7209 2.83454 28.2598C2.964 27.7775 3.07177 27.1686 3.15784 26.4331C3.47227 25.121 3.78388 24.0233 4.09268 23.1399C4.42088 22.2335 4.74953 21.4555 5.07861 20.806C5.4077 20.1564 5.74139 19.56 6.0797 19.0167C6.87364 18.0485 7.63012 17.2655 8.34914 16.6678C9.08942 16.0682 9.77608 15.591 10.4091 15.2363C10.8121 14.9444 11.1877 14.7084 11.5361 14.5283C11.8845 14.3481 12.1802 14.3011 12.4232 14.387C13.6356 14.5388 14.6903 14.9719 15.5874 15.6864C16.4845 16.4009 17.1358 17.49 17.5412 18.9537C17.7711 19.876 17.9298 20.7187 18.0175 21.482C18.1245 22.2222 18.1359 22.9707 18.0517 23.7275C17.9656 24.463 17.7585 25.284 17.4303 26.1904C17.1233 27.095 16.6699 28.1622 16.0699 29.392C15.3479 31.1891 14.5169 32.7173 13.5769 33.9766C12.6563 35.2129 11.7012 36.1737 10.7114 36.8591C9.74283 37.5428 8.79284 37.9464 7.86137 38.07C6.953 38.2131 6.15881 38.0679 5.47879 37.6344ZM7.84664 35.309C8.32994 35.2028 8.71483 35.073 9.00132 34.9197C9.30905 34.7645 9.61728 34.4915 9.92598 34.1007C10.2347 33.7099 10.6668 33.1371 11.2223 32.3822C11.7196 31.6967 12.1295 31.1151 12.4521 30.6374C12.7959 30.1579 13.0751 29.6733 13.2895 29.1835C13.5252 28.692 13.7323 28.1173 13.9108 27.4594C14.1087 26.7784 14.3121 25.9149 14.5212 24.8689C14.6359 24.2166 14.7122 23.7389 14.7501 23.4358C14.8075 23.1096 14.8376 22.8393 14.8404 22.6249C14.8432 22.4106 14.8183 22.1236 14.7657 21.7642C14.7325 21.3816 14.6827 20.8078 14.6163 20.0426C14.5637 19.6832 14.4543 19.2858 14.2881 18.8506C14.12 18.394 13.9426 18.0775 13.756 17.901C13.5232 17.6856 13.1868 17.5114 12.747 17.3783C12.3072 17.2451 11.8627 17.3051 11.4136 17.5582C11.1678 17.6866 10.8683 17.9374 10.5153 18.3107C10.1604 18.6627 9.80037 19.0793 9.43528 19.5607C9.07019 20.0421 8.72635 20.5216 8.40377 20.9992C8.08119 21.4769 7.8293 21.9056 7.64812 22.2854C7.46693 22.6651 7.38279 22.9294 7.3957 23.0782C7.3957 23.0782 7.38969 23.1322 7.37765 23.2403C7.38687 23.3466 7.35359 23.4566 7.27779 23.5702C7.02731 23.8917 6.78281 24.4055 6.54427 25.1114C6.30573 25.8173 6.09675 26.617 5.91731 27.5106C5.73788 28.4041 5.60095 29.2939 5.50653 30.1801C5.41211 31.0662 5.37408 31.8618 5.39242 32.5669C5.42193 32.9069 5.44682 33.1938 5.46711 33.4276C5.48739 33.6614 5.52709 33.8721 5.58619 34.0597C5.66471 34.2242 5.77694 34.4072 5.92291 34.6086C6.06887 34.8101 6.34235 35.0005 6.74335 35.1799C7.16561 35.3574 7.53337 35.4004 7.84664 35.309ZM22.4174 35.5865C22.143 35.6317 21.754 35.5905 21.2504 35.4629C20.768 35.3334 20.4229 35.1814 20.2151 35.0067C20.0478 34.8071 19.876 34.5543 19.6996 34.2484C19.5426 33.9194 19.4086 33.6098 19.2978 33.3197C19.1851 33.0082 19.1339 32.7878 19.1441 32.6585L19.297 29.9792C19.3405 29.7399 19.3734 29.5015 19.3956 29.264C19.4391 29.0247 19.4835 28.796 19.5288 28.5779C19.5038 28.5373 19.5297 28.3423 19.6065 27.993C19.6814 27.6225 19.7642 27.2192 19.8548 26.783C19.9649 26.3238 20.0689 25.9186 20.1669 25.5675C20.2631 25.1951 20.3103 24.9983 20.3084 24.9771C20.3621 24.6084 20.4495 24.2582 20.5706 23.9265C20.6899 23.5735 20.8004 23.2427 20.9021 22.9341C21.0315 22.4518 21.1531 22.0023 21.2668 21.5855C21.4018 21.167 21.5202 20.8034 21.6219 20.4948C21.7236 20.1861 21.7989 19.9441 21.848 19.7685C21.9182 19.5911 21.9543 19.513 21.9561 19.5343L23.3873 15.2987C23.2026 15.1434 23.015 14.9563 22.8247 14.7372C22.6344 14.5182 22.5245 14.2387 22.495 13.8986C22.4534 13.6667 22.49 13.4708 22.6046 13.3109C22.7404 13.1492 22.8897 13.0185 23.0524 12.9187C23.3481 12.8717 23.6225 12.8265 23.8757 12.7831C24.1502 12.7378 24.4593 12.7217 24.803 12.7347C24.9287 12.7024 25.0553 12.6807 25.1828 12.6697C25.3316 12.6567 25.4688 12.6341 25.5945 12.6018C25.7026 12.6138 25.8213 12.625 25.9507 12.6351C26.0782 12.6241 26.2348 12.5784 26.4206 12.498C26.6294 12.4371 26.903 12.3812 27.2412 12.3305C27.6006 12.2779 27.9601 12.2252 28.3196 12.1726C28.6772 12.0988 28.9942 12.0499 29.2705 12.0259C29.5662 11.9788 29.7565 11.9516 29.8415 11.9442C30.0947 11.9008 30.3479 11.8575 30.6011 11.8141C30.8543 11.7707 31.1075 11.7273 31.3607 11.6839C31.6352 11.6387 31.899 11.5944 32.1522 11.551C32.4054 11.5076 32.6586 11.4643 32.9118 11.4209C33.5577 11.2149 33.999 11.2409 34.2355 11.4987C34.4914 11.7335 34.6923 11.9516 34.8383 12.1531C34.89 12.2557 34.9792 12.4192 35.1057 12.6438C35.2517 12.8453 35.3339 13.0523 35.3523 13.2648C35.3902 13.4542 35.2525 13.5947 34.9392 13.6861C34.9096 13.8386 34.771 13.9684 34.5233 14.0755C34.295 14.1596 34.0053 14.1526 33.6542 14.0546C33.6099 14.037 33.3132 14.0734 32.7643 14.1639C32.2348 14.2312 31.5797 14.3309 30.7988 14.4629C30.018 14.5949 29.2381 14.7375 28.4591 14.8908C27.6995 15.0209 27.0568 15.1409 26.531 15.2508C26.4801 15.4051 26.4186 15.5603 26.3465 15.7165C26.2957 15.8708 26.2448 16.0251 26.194 16.1794C26.0729 16.5111 25.9517 16.8428 25.8306 17.1745C25.7289 17.4831 25.6175 17.8033 25.4964 18.135C25.3753 18.4667 25.2542 18.7984 25.1331 19.1301C25.0314 19.4388 24.9297 19.7474 24.828 20.056C24.7734 20.1678 24.7198 20.2902 24.6671 20.4233C24.6144 20.5563 24.5608 20.6787 24.5063 20.7905C24.6957 20.7527 24.8745 20.7158 25.0427 20.6798C25.2321 20.6419 25.4216 20.6041 25.611 20.5662C25.9049 20.4979 26.2468 20.4896 26.6367 20.5414C27.0248 20.572 27.4156 20.6345 27.8093 20.7288C28.2011 20.8019 28.5628 20.899 28.8945 21.0201C29.2244 21.1199 29.4789 21.2156 29.6582 21.3071C30.1728 21.5623 30.6362 21.8433 31.0483 22.1501C31.4797 22.4339 31.8558 22.8188 32.1763 23.3049C32.4045 23.7134 32.6257 24.1653 32.84 24.6606C33.0524 25.1347 33.1623 25.6605 33.1696 26.2381C33.177 26.3231 33.1644 26.549 33.132 26.9158C33.119 27.2596 33.076 27.6273 33.0029 28.0191C32.9492 28.3878 32.8679 28.684 32.7588 28.9076C32.5795 29.3086 32.3576 29.7132 32.0932 30.1216C31.8501 30.5282 31.5849 30.9259 31.2974 31.3149C30.9554 31.8157 30.5538 32.2467 30.0927 32.6079C29.6297 32.9478 29.1736 33.2444 28.7245 33.4975C28.3178 33.7469 28.0022 33.9349 27.7777 34.0614C27.5531 34.188 27.3479 34.2914 27.1622 34.3718C26.9958 34.429 26.756 34.5034 26.4428 34.5948C26.3171 34.6271 26.1923 34.6701 26.0685 34.7236C25.9641 34.7541 25.849 34.7855 25.7234 34.8178C25.5977 34.8502 25.4729 34.8931 25.3491 34.9467C25.0256 35.1675 24.6948 35.3032 24.3566 35.354C24.0202 35.426 23.7033 35.4749 23.4057 35.5007C23.2357 35.5155 23.0647 35.5196 22.8929 35.5131C22.7441 35.526 22.5856 35.5505 22.4174 35.5865ZM21.8316 32.9071C22.1698 32.8563 22.4993 32.8277 22.8199 32.8213C23.1387 32.7937 23.4432 32.7244 23.7334 32.6136C24.7702 32.2238 25.7105 31.8318 26.5542 31.4374C27.4192 31.0411 28.1683 30.4194 28.8014 29.5721C29.2599 28.9328 29.5954 28.3576 29.808 27.8467C30.0207 27.3357 30.1622 26.7453 30.2325 26.0753C30.276 25.836 30.2548 25.5916 30.1689 25.3421C30.083 25.0926 29.9791 24.759 29.8572 24.3413C29.7039 24.0548 29.5704 23.8737 29.4567 23.7979C29.3413 23.7008 29.2073 23.6375 29.0548 23.6079C28.9024 23.5783 28.7037 23.5099 28.4588 23.4026C28.2316 23.2511 27.9123 23.1503 27.5011 23.1003C27.0899 23.0503 26.7018 23.0198 26.3368 23.0086C26.1419 22.9827 25.9372 22.9683 25.7228 22.9655C25.5297 22.9609 25.3366 22.9562 25.1434 22.9515C24.9485 22.9256 24.7438 22.9113 24.5294 22.9085C24.3344 22.8826 24.1404 22.8673 23.9473 22.8626C23.9334 22.9495 23.8571 23.1809 23.7184 23.557C23.601 23.9312 23.4669 24.3604 23.3162 24.8446C23.1849 25.3057 23.0712 25.7224 22.975 26.0948C22.816 26.7295 22.6685 27.374 22.5325 28.0282C22.3947 28.6612 22.2782 29.2923 22.1829 29.9216C22.1468 30.2459 22.1028 30.603 22.051 30.993C22.0186 31.3598 21.9746 31.7169 21.9191 32.0644C21.883 32.3887 21.8538 32.6696 21.8316 32.9071ZM39.7923 34.5286C39.5104 34.4888 39.2286 34.449 38.9468 34.4092C38.6668 34.3907 38.3938 34.3287 38.1276 34.2234C37.5067 33.9774 37.1067 33.5625 36.9275 32.9784C36.7484 32.3944 36.9379 31.864 37.4961 31.3873C37.8325 31.3153 38.0991 31.3029 38.2959 31.3501C38.4927 31.3972 38.7445 31.461 39.0513 31.5415C39.2924 31.6062 39.5087 31.6303 39.6999 31.6137C39.9106 31.574 40.125 31.5768 40.3431 31.6221C40.7839 31.5196 41.2039 31.3012 41.6031 30.9667C42.0237 30.6305 42.3573 30.2803 42.6041 29.9163C42.6993 29.7795 42.8139 29.6197 42.9479 29.4368C43.0801 29.2326 43.222 29.0168 43.3736 28.7895C43.7331 28.2444 44.1209 27.654 44.5368 27.0184C44.9509 26.3614 45.3262 25.7507 45.6627 25.1862C46.0185 24.5986 46.2598 24.1708 46.3864 23.9028C46.747 23.1221 47.0844 22.3219 47.3987 21.5023C47.7112 20.6615 48.014 19.8322 48.3071 19.0145C48.5983 18.1755 48.8798 17.3481 49.1517 16.5322C49.4235 15.7163 49.6981 14.9323 49.9754 14.1802C50.1511 13.7367 50.2718 13.2765 50.3374 12.7997C50.4244 12.3211 50.5548 11.8494 50.7286 11.3846C50.9107 11.2618 51.1352 11.1352 51.4023 11.005C51.6694 10.8747 51.9138 10.8535 52.1355 10.9413C52.7103 11.1484 53.1394 11.5288 53.423 12.0823C53.605 12.452 53.6594 12.8327 53.5863 13.2245C53.4892 13.8325 53.3528 14.3582 53.1771 14.8018C53.0227 15.2434 52.8725 15.6098 52.7265 15.9008C52.4491 16.6529 52.1611 17.406 51.8625 18.16C51.5621 18.8927 51.2625 19.636 50.9639 20.39C50.7919 20.876 50.5899 21.386 50.3579 21.9201C50.1453 22.4311 49.9539 22.9402 49.7838 23.4474C49.5804 24.0647 49.2568 24.778 48.8131 25.5874C48.3676 26.3755 47.9775 27.0624 47.6429 27.6482C47.5708 27.8044 47.4871 27.9508 47.3919 28.0876C47.3161 28.2012 47.2316 28.337 47.1382 28.495C46.786 29.1252 46.3682 29.7396 45.8848 30.3383C45.4209 30.9139 44.9222 31.4603 44.389 31.9777C44.23 32.12 44.071 32.2623 43.9121 32.4045C43.7531 32.5468 43.5941 32.6891 43.4352 32.8314C43.2993 32.993 43.1625 33.1441 43.0248 33.2845C42.889 33.4462 42.7041 33.5372 42.4703 33.5575C42.352 33.6748 42.1168 33.8023 41.7648 33.9399C41.4127 34.0775 41.0375 34.1957 40.6392 34.2945C40.2622 34.3915 39.9799 34.4695 39.7923 34.5286ZM43.2763 29.8901C43.1359 29.7524 42.9525 29.4899 42.7262 29.1027C42.4981 28.6942 42.268 28.2645 42.0362 27.8135C41.9309 27.5871 41.8265 27.3713 41.7231 27.1661C41.6178 26.9397 41.5249 26.7337 41.4446 26.5479C41.3642 26.3622 41.2963 26.1967 41.2409 26.0517C41.1855 25.9066 41.1541 25.7915 41.1467 25.7065C41.1107 25.5383 41.0632 25.3604 41.0041 25.1728C40.9662 24.9834 40.9187 24.8055 40.8614 24.6392C40.6915 24.1614 40.4897 23.6864 40.256 23.2142C40.0223 22.7419 39.8098 22.2679 39.6186 21.7919C39.5023 21.438 39.3573 21.0009 39.1837 20.4806C39.0313 19.9585 38.8761 19.4045 38.7182 18.8186C38.5603 18.2328 38.4265 17.6769 38.3166 17.1511C38.2049 16.6041 38.1449 16.1596 38.1367 15.8177C38.1368 15.3252 38.0661 14.8816 37.9248 14.487C37.8048 14.0906 37.7041 13.671 37.6229 13.2284C37.5629 12.7839 37.6028 12.2558 37.7424 11.6441L39.1951 11.3575C39.4418 11.486 39.6797 11.6366 39.9088 11.8095C40.1379 11.9823 40.3749 12.1224 40.6198 12.2296C40.6401 12.4634 40.6604 12.6972 40.6806 12.931C40.7222 13.1629 40.7637 13.3949 40.8053 13.6268L41.0308 15.8557C41.1407 15.8889 41.2146 16.0003 41.2525 16.1897C41.2903 16.3792 41.3032 16.5279 41.2912 16.6361C41.281 16.7654 41.3156 17.0408 41.395 17.4622C41.4938 17.8605 41.6069 18.3003 41.7343 18.7818C41.8599 19.242 41.9827 19.6703 42.1028 20.0667C42.2423 20.4401 42.3485 20.6771 42.4215 20.7779C42.4879 21.0505 42.6043 21.4044 42.7706 21.8397C42.9562 22.2518 43.1668 22.7046 43.4023 23.1981C43.636 23.6704 43.8707 24.1532 44.1062 24.6467C44.363 25.1384 44.6064 25.599 44.8364 26.0288C45.0646 26.4372 45.2438 26.775 45.374 27.0421L43.2763 29.8901ZM65.8195 32.9448C65.3806 33.0686 64.9384 33.032 64.4931 32.8351C64.0496 32.6594 63.6819 32.3701 63.3899 31.9672C63.098 31.5643 62.9618 31.105 62.9813 30.5894C63.0608 30.5182 63.1296 30.448 63.1879 30.3787C63.2655 30.2863 63.3191 30.1639 63.3487 30.0114C63.4874 29.6354 63.6145 29.2496 63.7301 28.8541C63.8457 28.4587 63.9506 28.0641 64.045 27.6705C64.1254 27.3637 64.2068 27.0676 64.2891 26.7821C64.3695 26.4753 64.4403 26.1801 64.5013 25.8964C64.5975 25.524 64.683 25.1526 64.758 24.782C64.8523 24.3884 64.9484 24.016 65.0465 23.6649C65.0918 23.4469 65.138 23.2394 65.1852 23.0426C65.2518 22.8227 65.3086 22.6143 65.3558 22.4175C65.4224 22.1976 65.4792 21.9892 65.5264 21.7924L65.7552 21.098C65.6388 21.2366 65.5154 21.4186 65.385 21.6441C65.2529 21.8483 65.1091 22.0428 64.9539 22.2275C64.8198 22.4105 64.6493 22.543 64.4423 22.6253C64.3665 22.7389 64.2094 22.9024 63.971 23.1158C63.7325 23.3292 63.4747 23.5658 63.1974 23.8254C63.1179 23.8965 63.0384 23.9676 62.959 24.0388C62.8776 24.0886 62.7972 24.1492 62.7178 24.2203C62.4756 24.3912 62.2229 24.563 61.9595 24.7358C61.7155 24.8854 61.4803 25.0129 61.2539 25.1182C61.1495 25.1487 61.045 25.1791 60.9406 25.2096C60.8575 25.2382 60.7627 25.2572 60.6565 25.2664C60.017 25.3005 59.4109 25.2246 58.838 25.0387C58.2651 24.8529 57.7246 24.5465 57.2164 24.1195C56.845 23.7877 56.5231 23.4087 56.2506 22.9827C55.9993 22.5548 55.8931 22.0715 55.932 21.5328C55.9543 21.2953 55.9465 21.0819 55.9086 20.8924C55.8902 20.6799 55.9355 20.4618 56.0446 20.2382C56.077 19.8714 56.1376 19.4593 56.2264 19.0019C56.3346 18.5214 56.4516 18.0187 56.5773 17.4939C56.7244 16.9672 56.8723 16.4512 57.0212 15.9457C57.1682 15.4191 57.3189 14.9349 57.4733 14.4932C57.6259 14.0303 57.7724 13.6214 57.9129 13.2666C57.8095 13.0615 57.7956 12.9021 57.8714 12.7884C57.9472 12.6748 58.0549 12.5584 58.1944 12.4392C58.1834 12.3117 58.1963 12.2142 58.2333 12.1467C58.2897 12.0562 58.3345 11.956 58.3678 11.846C58.4714 11.5586 58.5749 11.2713 58.6785 10.9839C58.7802 10.6753 58.9059 10.3967 59.0556 10.1482C59.2266 9.8978 59.4669 9.70564 59.7765 9.57171C60.087 9.69467 60.4205 9.83704 60.7772 9.99881C61.1338 10.1606 61.4101 10.3829 61.6059 10.6657C61.8498 11.0085 61.9255 11.3874 61.833 11.8023C61.7266 12.304 61.5672 12.8104 61.3545 13.3213C61.1401 13.811 60.9362 14.2998 60.743 14.7877C60.5146 15.3643 60.3219 15.9806 60.1647 16.6366C60.0268 17.2696 59.8872 17.8812 59.7457 18.4717C59.6902 18.8191 59.6125 19.1578 59.5127 19.4876C59.4341 19.8157 59.3333 20.1349 59.2103 20.4454C59.2482 20.6348 59.2578 20.8695 59.2393 21.1495C59.2402 21.4064 59.241 21.6633 59.2419 21.9201C59.2622 22.1539 59.3222 22.3522 59.422 22.5148C59.8581 22.6054 60.3142 22.5552 60.7901 22.364C61.2854 22.1497 61.7433 21.8744 62.1638 21.5381C62.6056 21.2 62.9545 20.9021 63.2105 20.6443C63.4877 20.3847 63.7904 20.048 64.1186 19.634C64.4661 19.197 64.8099 18.7175 65.1501 18.1955C65.3774 17.8546 65.603 17.4924 65.8267 17.1089C66.0504 16.7255 66.2644 16.3536 66.4686 15.9933C66.8772 15.2726 67.2451 14.5768 67.5723 13.906C67.8996 13.2353 68.1501 12.6675 68.3239 12.2027C68.5485 12.0762 68.7504 11.8124 68.9298 11.4114C69.1304 11.0085 69.2861 10.7059 69.3971 10.5036C69.4359 10.4574 69.4941 10.3881 69.5717 10.2957C69.6706 10.2015 69.8083 10.061 69.9849 9.87441C70.4866 9.98077 70.883 10.107 71.1741 10.253C71.4633 10.3778 71.7275 10.7082 71.9667 11.2442C72.0166 11.3256 71.9976 11.4771 71.9098 11.6988C71.8432 11.9188 71.7226 12.1327 71.5479 12.3405C71.4813 12.5604 71.4157 12.791 71.3509 13.0321C71.3056 13.2502 71.24 13.4808 71.154 13.7238C70.982 14.2098 70.8216 14.7055 70.6727 15.2109C70.5239 15.7164 70.3237 16.2476 70.0723 16.8048C70.039 16.9148 69.9844 17.0266 69.9087 17.1402C69.8329 17.2538 69.7783 17.3656 69.745 17.4756C69.5768 18.0041 69.4085 18.5326 69.2402 19.0612C69.0932 19.5879 68.9249 20.1164 68.7354 20.6467C68.532 21.264 68.3401 21.8909 68.1598 22.5275C67.9776 23.1429 67.7964 23.7689 67.6161 24.4056C67.5042 24.8435 67.4251 25.2894 67.3788 25.7431C67.3307 26.1755 67.2073 26.6038 67.0085 27.0279C66.8819 27.2959 66.7654 27.6807 66.659 28.1824C66.5721 28.6611 66.486 29.1503 66.4009 29.6502C66.3371 30.1483 66.2871 30.5595 66.251 30.8838C66.1881 31.1462 66.1516 31.3421 66.1414 31.4715C66.133 31.6221 66.2088 31.7547 66.3686 31.8693C66.1939 32.0772 66.0802 32.2477 66.0276 32.3807C65.9749 32.5138 65.9055 32.7018 65.8195 32.9448ZM79.6829 31.4207C79.2486 31.3514 78.7132 31.2265 78.0765 31.0462C77.4399 30.8659 76.8652 30.6588 76.3524 30.4249C75.8396 30.191 75.543 29.9812 75.4626 29.7955C75.4534 29.6892 75.4035 29.6079 75.313 29.5515C75.2206 29.4739 75.1213 29.4396 75.015 29.4489C75.015 29.4489 75.0141 29.4382 75.0122 29.417C75.0104 29.3957 75.0039 29.3213 74.9929 29.1938C74.9855 29.1088 74.9781 29.0238 74.9707 28.9388C74.9828 28.8307 74.9329 28.7493 74.8211 28.6948C74.6447 28.3889 74.557 27.8719 74.558 27.1437C74.5803 26.4137 74.6512 25.626 74.7705 24.7805C74.9093 23.9119 75.0582 23.1603 75.2173 22.5255C75.2007 22.3342 75.216 22.1401 75.2631 21.9433C75.3316 21.7447 75.3612 21.5922 75.3519 21.4859C75.3991 21.2891 75.4911 20.9921 75.6279 20.5947C75.7629 20.1762 75.927 19.723 76.1202 19.2351C76.3116 18.726 76.5058 18.2487 76.7027 17.8034C76.8977 17.3368 77.0808 16.9783 77.2518 16.7279C77.2425 16.6216 77.3049 16.477 77.439 16.2941C77.573 16.1112 77.6696 15.8672 77.7288 15.5623C77.8841 15.3775 78.0717 15.0722 78.2917 14.6462C78.533 14.2184 78.7451 13.8253 78.9281 13.4668C79.3431 13.0668 79.5917 12.724 79.674 12.4385C79.7545 12.1317 79.7661 11.8951 79.7088 11.7288C79.7024 11.4082 79.7768 11.1554 79.9321 10.9707C80.0855 10.7646 80.3374 10.5822 80.6876 10.4233C81.0379 10.2644 81.4838 10.0973 82.0253 9.92179C82.6833 9.60774 83.3583 9.36715 84.0505 9.20003C84.7639 9.03107 85.6722 8.88801 86.7756 8.77086C87.1083 8.65634 87.3702 8.59078 87.5615 8.57419C87.751 8.53634 87.8457 8.51741 87.8457 8.51741C87.8845 8.47122 88.0758 8.45462 88.4195 8.46762C88.7633 8.48062 89.1541 8.54307 89.5921 8.65496C90.0282 8.7456 90.4034 8.87365 90.7175 9.03912C91.0529 9.20274 91.2211 9.41299 91.2219 9.66987C91.233 9.7974 91.0121 9.96645 90.5593 10.1771C90.1046 10.3664 89.5756 10.5622 88.9721 10.7644C88.3668 10.9454 87.8332 11.0881 87.3711 11.1924C86.4239 11.3817 85.6352 11.5465 85.005 11.6868C84.3748 11.8272 83.8448 12.0123 83.4151 12.2423C83.0048 12.4493 82.6249 12.7606 82.2756 13.1763C81.9474 13.5903 81.5809 14.1788 81.1761 14.942C80.81 15.659 80.5498 16.2383 80.3954 16.68C80.2391 17.1004 80.1906 17.4044 80.2497 17.592C80.33 17.7777 80.4871 17.8605 80.7209 17.8402C80.9759 17.8181 81.2929 17.7691 81.6718 17.6934C82.0488 17.5965 82.3011 17.5425 82.4286 17.5314C82.4286 17.5314 82.6143 17.4511 82.9858 17.2903C83.3767 17.1065 83.8661 16.9463 84.4538 16.8097C85.1228 16.6231 85.5715 16.4878 85.7997 16.4038C86.0474 16.2966 86.2872 16.2223 86.5191 16.1808C87.2362 16.0543 87.683 16.144 87.8594 16.4499C88.0359 16.7558 88.0035 17.1226 87.7622 17.5504C87.5422 17.9764 87.1757 18.3187 86.6628 18.5773C86.4577 18.6808 86.2003 18.7995 85.8907 18.9334C85.5812 19.0673 85.2919 19.1888 85.023 19.2978C84.7522 19.3855 84.5743 19.4331 84.4893 19.4404C84.4893 19.4404 84.4061 19.4691 84.2398 19.5263C84.0929 19.5605 83.8813 19.5895 83.605 19.6135C83.5412 19.6191 83.2367 19.6883 82.6915 19.8213C82.1445 19.933 81.6293 20.0419 81.146 20.1481C80.4187 20.4039 79.8693 20.6122 79.4978 20.7729C79.1457 20.9105 78.893 21.0823 78.7395 21.2884C78.5861 21.4944 78.4428 21.8173 78.3097 22.2572C78.159 22.7413 78.036 23.298 77.9407 23.9273C77.8435 24.5353 77.7783 25.1405 77.7449 25.743C77.7328 26.3437 77.7567 26.8662 77.8167 27.3107C77.8961 27.7321 78.0166 28.0107 78.1783 28.1466C78.5959 28.5172 79.1281 28.728 79.7749 28.7789C80.4199 28.8086 81.0751 28.7089 81.7404 28.4799C82.427 28.249 83.0115 27.952 83.494 27.589C83.6529 27.4467 83.8438 27.3017 84.0665 27.1539C84.3086 26.9829 84.5429 26.8448 84.7693 26.7395C85.0309 26.5455 85.2388 26.474 85.3931 26.5248C85.5687 26.5738 85.8712 26.7296 86.3009 26.9921C86.7064 27.4708 86.7276 27.9615 86.3644 28.4641C86.0205 28.9436 85.2756 29.4901 84.1297 30.1034C83.0596 30.6031 82.2006 30.9453 81.5528 31.13C80.9263 31.3129 80.303 31.4098 79.6829 31.4207ZM106.524 30.9227C106.238 30.8404 105.927 30.589 105.591 30.1685C105.255 29.748 105.02 29.3936 104.888 29.1053C104.92 28.9741 104.974 28.616 105.052 28.0311C105.132 27.4674 105.233 26.7841 105.356 25.9811C105.479 25.1782 105.622 24.3627 105.786 23.5348C105.948 22.6856 106.108 21.933 106.265 21.277C106.303 20.9739 106.326 20.7471 106.334 20.5964C106.362 20.4227 106.363 20.3049 106.336 20.243C106.328 20.158 106.28 20.0979 106.192 20.0628C106.057 19.9888 105.74 19.9199 105.242 19.8561C104.744 19.7922 104.172 19.7348 103.525 19.6839C102.878 19.6329 102.253 19.5908 101.651 19.5574C101.068 19.5009 100.626 19.4643 100.324 19.4476C100.071 19.491 99.7922 19.4831 99.4873 19.4239C99.1824 19.3647 98.8927 19.3577 98.6182 19.403C98.2782 19.4325 98.0647 19.4403 97.9778 19.4264C97.891 19.4125 97.8111 19.3552 97.7381 19.2545C97.7058 19.1288 97.6799 19.0775 97.6605 19.1006C97.6392 19.1025 97.5833 19.3214 97.4927 19.7576C97.402 20.1937 97.2355 20.9898 96.9932 22.1457C96.7278 23.2822 96.5396 24.1979 96.4286 24.8928C96.3388 25.5858 96.2805 26.1476 96.2536 26.5782C96.2267 27.0088 96.1952 27.3863 96.1591 27.7106C96.0528 28.2124 95.9386 28.7469 95.8165 29.3142C95.6962 29.9028 95.5677 30.3958 95.4309 30.7931C95.3171 31.2098 95.1974 31.4344 95.0718 31.4667C95.0366 31.5554 94.8666 31.5701 94.5617 31.5109C94.2586 31.473 94.0077 31.4198 93.8091 31.3514C93.47 31.1453 93.252 30.8537 93.155 30.4767C93.0599 30.1209 93.0554 29.5752 93.1414 28.8397C93.2257 28.0829 93.3603 27.0434 93.5454 25.7211C93.6416 24.8562 93.7319 24.0454 93.8161 23.2886C93.9216 22.53 94.0432 22.0805 94.1809 21.94C94.2558 21.5695 94.347 21.0155 94.4543 20.2782C94.581 19.5177 94.7558 18.8173 94.9786 18.177C95.0933 17.5246 95.2811 16.7267 95.5418 15.7833C95.8238 14.8381 96.1252 13.8697 96.4461 12.8783C96.7651 11.8656 97.0693 10.9291 97.3586 10.0689C97.648 9.20866 97.8778 8.52491 98.0479 8.01764C98.205 7.85411 98.2822 7.63328 98.2795 7.35514C98.298 7.07516 98.3115 6.85986 98.3198 6.70924C98.4622 6.37568 98.7233 6.05324 99.1031 5.7419C99.4811 5.40932 99.7454 5.2472 99.8961 5.25554C100.176 5.27408 100.466 5.4095 100.766 5.66183C101.067 5.91415 101.305 6.19325 101.482 6.49915C101.679 6.8032 101.734 7.0661 101.646 7.28786C101.51 7.44954 101.35 7.81682 101.164 8.38969C100.999 8.96073 100.75 9.79602 100.418 10.8956C100.33 11.1173 100.173 11.4093 99.9475 11.7715C99.7432 12.1318 99.6009 12.4654 99.5204 12.7722C99.3919 13.0188 99.3166 13.2609 99.2943 13.4984C99.2934 13.734 99.2444 13.9096 99.1473 14.0251C99.0965 14.1794 99.0183 14.3896 98.913 14.6557C98.8076 14.9218 98.7137 15.1976 98.6314 15.4831C98.5473 15.7474 98.4719 15.9895 98.4054 16.2094C98.36 16.4275 98.3499 16.5568 98.3748 16.5975C98.421 16.6363 98.6275 16.6719 98.9943 16.7043C99.3612 16.7368 99.7705 16.7655 100.222 16.7905C100.694 16.7924 101.091 16.8008 101.413 16.8157C101.517 16.7852 101.774 16.7843 102.184 16.8131C102.612 16.8187 103.095 16.8303 103.632 16.848C104.169 16.8656 104.663 16.887 105.115 16.912C105.771 17.0692 106.304 17.1622 106.713 17.1909C107.144 17.2178 107.366 17.1878 107.38 17.101C107.38 17.101 107.412 16.9804 107.477 16.7392C107.563 16.4962 107.682 16.1432 107.835 15.6803C107.892 15.3541 107.949 14.8995 108.006 14.3164C108.082 13.7103 108.197 13.0686 108.353 12.3913C108.569 11.9228 108.75 11.4146 108.895 10.8667C109.038 10.2975 109.141 9.75325 109.203 9.23394C109.284 8.69154 109.342 8.24754 109.376 7.90196C109.47 7.25144 109.659 6.72107 109.945 6.31085C110.252 5.89878 110.451 5.60312 110.542 5.42388C110.542 5.42388 110.609 5.45022 110.742 5.50292C110.895 5.53252 111.047 5.56212 111.199 5.59171C111.588 5.62228 111.901 5.77712 112.139 6.05623C112.376 6.31408 112.5 6.76365 112.513 7.40495C112.547 8.0444 112.411 8.94486 112.105 10.1063C112.044 10.39 111.92 10.8076 111.732 11.3593C111.564 11.8878 111.407 12.426 111.262 12.974C111.115 13.5006 111.02 13.8943 110.979 14.1548C110.855 14.7009 110.749 15.2133 110.663 15.6919C110.576 16.1706 110.386 16.8294 110.095 17.6684C110.08 17.734 110.13 17.8259 110.248 17.9442C110.384 18.0394 110.566 18.1628 110.794 18.3144C111.106 18.4586 111.253 18.6707 111.234 18.9507C111.214 19.2094 111.095 19.4446 110.878 19.6561C110.661 19.8677 110.414 19.9855 110.138 20.0095C109.86 20.0122 109.662 20.0828 109.546 20.2214C109.451 20.3582 109.392 20.6737 109.371 21.1681C109.183 21.7197 108.978 22.4335 108.754 23.3094C108.551 24.1835 108.362 25.0886 108.186 26.0246C108.009 26.9394 107.866 27.7655 107.759 28.5029C107.675 29.2596 107.645 29.7762 107.669 30.0525C107.559 30.5117 107.411 30.7815 107.225 30.8619C107.06 30.9404 106.827 30.9607 106.524 30.9227ZM126.473 28.9991C125.923 28.8326 125.504 28.5692 125.216 28.2088C124.929 27.8696 124.818 27.451 124.882 26.9529C124.854 27.1266 124.883 27.092 124.969 26.849C125.076 26.6041 125.205 26.2396 125.356 25.7555C125.528 25.2694 125.706 24.7294 125.89 24.1352C126.072 23.5199 126.245 22.916 126.407 22.3237C126.591 21.7296 126.74 21.2242 126.854 20.8075C127.136 19.8622 127.394 19.0047 127.627 18.235C127.86 17.4654 128.049 16.8065 128.194 16.2586C128.36 15.7088 128.484 15.2806 128.564 14.9738C128.645 14.667 128.684 14.503 128.682 14.4818C128.852 13.9745 129.005 13.3937 129.141 12.7395C129.297 12.0622 129.471 11.4797 129.664 10.9918C129.766 10.6832 129.856 10.3649 129.935 10.0369C130.034 9.70699 130.124 9.37804 130.202 9.05002C129.705 9.73557 129.171 10.4886 128.6 11.309C128.048 12.1064 127.466 12.9277 126.854 13.7731C126.263 14.6167 125.662 15.4611 125.05 16.3065C124.46 17.1501 123.887 17.9599 123.334 18.736C122.801 19.5102 122.307 20.2277 121.85 20.8883C121.392 21.5276 121 22.0755 120.676 22.532C120.35 22.9671 120.11 23.2877 119.956 23.4938C119.52 23.8956 119.119 24.3266 118.752 24.7867C118.404 25.2237 118.012 25.6432 117.576 26.0451C117.398 26.2104 117.16 26.4345 116.864 26.7172C116.586 26.9768 116.307 27.2151 116.026 27.4322C115.766 27.6475 115.541 27.7634 115.35 27.78C114.487 27.705 113.923 27.497 113.657 27.156C113.415 26.8343 113.338 26.4342 113.425 25.9556C113.531 25.4538 113.658 24.9396 113.805 24.4129C113.885 24.1062 113.954 23.7897 114.012 23.4635C114.069 23.1373 114.103 22.7918 114.114 22.4268C114.22 21.6681 114.334 21.0052 114.456 20.4378C114.578 19.8705 114.694 19.3572 114.804 18.8979C114.908 18.375 115.003 17.8635 115.088 17.3636C115.195 16.8619 115.238 16.3763 115.219 15.9069C115.398 15.5059 115.572 15.0411 115.74 14.5126C115.907 13.9628 116.054 13.4361 116.181 12.9325C116.33 12.4271 116.448 12.0529 116.534 11.8099C116.723 11.2795 116.868 10.7316 116.969 10.1661C117.091 9.59874 117.246 9.03926 117.434 8.48764C117.557 8.17718 117.726 7.7771 117.94 7.2874C118.153 6.77644 118.344 6.26732 118.514 5.76005C118.684 5.25278 118.756 4.85037 118.731 4.55282C118.703 4.23402 118.8 4.00071 119.023 3.85291C119.246 3.7051 119.518 3.63862 119.841 3.65347C120.162 3.64706 120.458 3.72843 120.729 3.89758C121.02 4.04364 121.212 4.2733 121.303 4.58657C121.408 4.81298 121.473 5.06434 121.497 5.34063C121.542 5.61508 121.523 5.88444 121.439 6.1487L119.376 13.105L117.139 21.008C117.039 21.3379 116.939 21.6677 116.839 21.9976C116.74 22.3275 116.64 22.6573 116.54 22.9872L122.421 15.9886C122.749 15.5747 123.066 15.1511 123.371 14.7178C123.697 14.2826 123.991 13.8502 124.254 13.4206C124.629 12.8098 125.009 12.2523 125.393 11.7478C125.776 11.2221 126.132 10.7523 126.46 10.3384C126.809 9.92261 127.12 9.55304 127.391 9.22968C127.663 8.90631 127.886 8.64069 128.061 8.43281L131.736 3.77768L132.506 3.38973C132.906 3.31218 133.254 3.37832 133.551 3.58813C133.847 3.79795 134.054 4.07982 134.17 4.43375C134.306 4.76459 134.324 5.09494 134.224 5.42481C134.156 5.62346 134.045 5.95425 133.892 6.41717C133.74 6.88009 133.564 7.44142 133.364 8.10115C133.163 8.73963 132.945 9.44372 132.712 10.2134C132.479 10.9831 132.238 11.7856 131.99 12.6209C131.76 13.4331 131.521 14.2568 131.273 15.0921C131.043 15.9043 130.822 16.6837 130.608 17.4303C130.498 17.8895 130.377 18.3497 130.246 18.8108C130.134 19.2487 130.023 19.6973 129.913 20.1566C129.803 20.6158 129.693 21.075 129.583 21.5343C129.473 21.9935 129.352 22.4537 129.221 22.9147C129.109 23.3527 128.998 23.8013 128.888 24.2605C128.829 24.5655 128.748 24.8616 128.644 25.149C128.541 25.4363 128.447 25.7121 128.363 25.9764C128.255 26.2213 128.168 26.4536 128.102 26.6736C128.037 26.9147 127.981 27.2515 127.933 27.684C127.844 28.1414 127.65 28.5008 127.352 28.7622C127.076 29.0431 126.783 29.122 126.473 28.9991ZM141.715 26.2954C140.865 26.3692 140.095 26.3824 139.406 26.3352C138.739 26.3073 138.112 26.1048 137.522 25.7277C136.821 25.296 136.292 24.6352 135.937 23.7453C135.601 22.8323 135.569 21.6038 135.842 20.0597C135.902 19.5192 135.978 19.0415 136.071 18.6266C136.185 18.2099 136.295 17.9969 136.401 17.9877C136.413 17.8795 136.432 17.728 136.458 17.533C136.482 17.3168 136.503 17.0687 136.522 16.7887C136.595 16.3969 136.645 16.1142 136.673 15.9405C136.699 15.7455 136.77 15.5787 136.886 15.4401C136.946 15.3921 137.009 15.2475 137.074 15.0063C137.136 14.7439 137.177 14.5905 137.194 14.5462C137.194 14.5462 137.198 14.4709 137.207 14.3203C137.213 14.1484 137.25 13.9525 137.316 13.7326C137.589 13.1736 137.718 12.8091 137.703 12.639C137.738 12.5503 137.812 12.4154 137.925 12.2344C138.059 12.0514 138.157 11.8181 138.218 11.5344C138.758 10.3527 139.198 9.38298 139.539 8.62532C139.879 7.84641 140.073 7.25136 140.123 6.84017C140.209 6.59716 140.281 6.31256 140.338 5.98639C140.415 5.63711 140.52 5.371 140.654 5.18807C140.603 5.08549 140.709 4.95845 140.975 4.80696C141.261 4.65362 141.632 4.48228 142.086 4.29293C142.541 4.10359 143.029 3.93273 143.551 3.78036C144.074 3.62799 144.557 3.52182 145.001 3.46184C145.121 3.36576 145.392 3.27803 145.814 3.19864C146.256 3.1174 146.765 3.05189 147.338 3.0021C147.912 2.95231 148.445 2.92746 148.938 2.92755C149.405 2.88698 149.783 2.91847 150.07 3.02202C150.358 3.12557 150.645 3.22912 150.932 3.33266C151.048 3.42971 151.21 3.56558 151.417 3.74026C151.625 3.91495 151.76 4.10671 151.821 4.31556C151.903 4.52256 151.781 4.72583 151.456 4.92536C151.398 4.99465 151.052 5.07822 150.418 5.17604C149.784 5.27388 149.116 5.35322 148.415 5.41407C147.629 5.4823 146.954 5.60508 146.391 5.78239C145.828 5.9597 145.43 6.0585 145.196 6.07878C144.906 6.18961 144.56 6.27317 144.158 6.32947C143.756 6.38576 143.555 6.4139 143.555 6.4139C143.513 6.41759 143.417 6.55433 143.27 6.82413C143.12 7.07267 142.953 7.37619 142.77 7.73468C142.607 8.07008 142.452 8.38331 142.306 8.67435C142.181 8.96356 142.121 9.14004 142.127 9.2038C142.145 9.41634 142.081 9.6575 141.933 9.9273C141.785 10.1971 141.609 10.5122 141.404 10.8725C141.216 11.1672 141.104 11.4768 141.067 11.8011C141.03 12.1042 141.11 12.2899 141.309 12.3584C141.643 12.2651 142.105 12.1608 142.695 12.0454C143.306 11.9281 143.907 11.8224 144.498 11.7283C145.088 11.6129 145.542 11.5414 145.861 11.5137C146.213 11.3761 146.508 11.329 146.748 11.3725C146.987 11.416 147.163 11.465 147.274 11.5195C147.533 11.5399 147.693 11.6545 147.754 11.8634C147.836 12.0704 147.855 12.2829 147.809 12.501C147.764 12.719 147.67 12.8664 147.526 12.9431C147.41 13.0816 147.104 13.2581 146.609 13.4724C146.113 13.6867 145.522 13.9092 144.836 14.1401C144.17 14.3692 143.494 14.5885 142.805 14.7981C142.136 14.9847 141.55 15.1426 141.047 15.2718C140.566 15.3993 140.282 15.456 140.195 15.4422C140.042 15.1557 139.894 15.1792 139.751 15.5128C139.628 15.8232 139.501 16.4552 139.37 17.4088C139.182 17.9605 139.037 18.38 138.933 18.6673C138.849 18.9316 138.789 19.2259 138.753 19.5502C138.715 19.8533 138.661 20.3398 138.59 21.0097C138.491 21.5965 138.547 22.1163 138.758 22.5691C138.988 22.9988 139.457 23.3436 140.164 23.6034C140.597 23.6515 141.088 23.641 141.639 23.5718C142.19 23.5026 142.912 23.3114 143.806 22.9983C144.168 22.7313 144.532 22.4856 144.898 22.2611C145.262 22.0154 145.515 21.8436 145.656 21.7457C145.763 21.7364 145.918 21.6801 146.123 21.5766C146.348 21.4501 146.503 21.3831 146.588 21.3758C146.738 21.1272 146.94 20.9919 147.195 20.9698C147.237 20.9661 147.363 21.0516 147.571 21.2262C147.8 21.3991 148.023 21.626 148.24 21.9069C148.457 22.1879 148.579 22.4878 148.607 22.8066C148.625 23.0191 148.288 23.3267 147.595 23.7295C146.923 24.1304 146.074 24.5895 145.049 25.1068C144.538 25.3867 144.117 25.6051 143.788 25.7622C143.481 25.9173 143.18 26.0291 142.886 26.0974C142.594 26.187 142.204 26.253 141.715 26.2954Z" fill="#91FF6A"/>
            </svg>

        </div>
    );
};
