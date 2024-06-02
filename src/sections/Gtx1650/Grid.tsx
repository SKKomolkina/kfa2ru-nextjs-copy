import cls from './Grid.module.scss'
import Image from "next/image";

export const Grid = () => {
    return (
        <div className={cls.section}>
            <ul className={cls.container}>
                <li className={cls.item}>
                    <p className={cls.itemText}>Сетевые кооперативы</p>
                </li>

                <li className={cls.item}>
                    <Image className={cls.image1} width={516} height={292} src={'../../images/1650/grid/1.png'}
                           alt={''}/>
                </li>

                <li className={cls.item}>
                    <p className={cls.itemText}>Стратегии</p>
                </li>

                <li className={cls.item}>
                    <Image className={cls.image2} width={670} height={368} src={'../../images/1650/grid/2.png'}
                           alt={''}/>
                </li>

                <li className={cls.item}>
                    <p className={cls.itemText}>Песочницы</p>
                </li>

                <li className={cls.item}>
                    <Image className={cls.image3} width={592} height={336} src={'../../images/1650/grid/3.png'}
                           alt={''}/>
                </li>

                <li className={cls.item}>
                    <Image className={cls.image4} width={352} height={196} src={'../../images/1650/grid/4.png'}
                           alt={''}/>
                </li>

                <li className={cls.item}>
                    <p className={cls.itemText}>Инди проекты</p>
                </li>

                <li className={cls.item}>
                    <p className={cls.itemText}>Свежие релизы</p>
                </li>
            </ul>

            <svg className={cls.lines} width="1088" height="370" viewBox="0 0 1088 370" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M368.43 67.8909C245.146 109.57 98.1214 161.806 0.340356 197.2L0 196.259C97.7847 160.865 244.816 108.626 368.11 66.9436C429.755 46.1027 485.472 27.899 526.133 15.759C546.462 9.68956 563.037 5.1328 574.711 2.52032C580.545 1.21479 585.174 0.39055 588.442 0.108906C590.072 -0.0315911 591.392 -0.0398976 592.364 0.105896C592.85 0.178762 593.276 0.293764 593.617 0.467585C593.961 0.642717 594.25 0.894916 594.398 1.25192C594.57 1.66652 594.535 2.10639 594.374 2.53062C594.215 2.94756 593.927 3.37414 593.545 3.80743C592.78 4.67434 591.56 5.65967 589.943 6.75345C586.701 8.94616 581.756 11.6474 575.359 14.7827C562.558 21.0565 543.873 29.1035 521.205 38.3425C475.865 56.8218 414.548 80.0863 352.404 103.499C342.87 107.091 333.317 110.686 323.799 114.268C271.272 134.036 219.816 153.402 178.615 169.553C154.281 179.092 133.531 187.508 118.253 194.222C110.613 197.579 104.348 200.508 99.6903 202.937C97.3611 204.152 95.4401 205.238 93.9526 206.188C92.4561 207.143 91.4302 207.941 90.864 208.572C90.6466 208.815 90.6375 208.925 90.6383 208.946C90.6437 208.955 90.6642 208.985 90.7281 209.029C90.8129 209.087 90.9502 209.153 91.1578 209.217C92.0124 209.48 93.634 209.584 96.0459 209.504C100.831 209.343 108.457 208.468 118.565 206.964C138.773 203.958 168.82 198.455 205.715 191.203C279.501 176.702 380.642 155.216 485.151 132.754C516.326 126.053 547.801 119.266 578.939 112.552C652.181 96.7578 723.555 81.3667 784.772 68.4548C871.998 50.0572 938.643 36.6837 960.668 34.3599C962.052 34.2138 963.184 34.151 964.063 34.1733C964.919 34.195 965.614 34.2975 966.066 34.5411C966.303 34.6693 966.523 34.8636 966.622 35.1519C966.722 35.4418 966.667 35.7293 966.556 35.9729C966.346 36.4322 965.86 36.9116 965.223 37.406C963.917 38.4182 961.677 39.7137 958.596 41.2687C955.507 42.8281 951.546 44.6622 946.779 46.7497C927.714 55.0987 895.687 67.5361 854.828 82.7376C773.104 113.143 656.001 154.622 536.473 196.598C492.7 211.97 448.602 227.409 405.797 242.395C331.713 268.332 261.501 292.914 203.548 313.448C157.829 329.647 119.744 343.326 93.4079 353.164C80.2388 358.083 70.0134 362.04 63.2419 364.87C59.8535 366.286 57.3425 367.415 55.7623 368.238C55.1803 368.541 54.7403 368.795 54.4334 368.999C54.4411 369 54.4488 369 54.4566 369C54.8852 369.004 55.4805 368.971 56.2461 368.898C57.7746 368.754 59.936 368.457 62.7046 368.013C68.2394 367.125 76.1685 365.656 86.2465 363.663C106.401 359.677 135.13 353.6 170.445 345.907C241.074 330.52 338.035 308.669 445.403 284.149C660.138 235.108 916.493 175.39 1087.06 135.355L1087.28 136.328C916.72 176.363 660.363 236.082 445.626 285.123C338.257 309.644 241.292 331.496 170.658 346.884C135.341 354.577 106.605 360.656 86.4405 364.644C76.3593 366.637 68.416 368.11 62.8629 369C60.0877 369.445 57.9012 369.746 56.3403 369.894C55.5612 369.968 54.9264 370.004 54.4472 370C54.2081 369.997 53.996 369.985 53.8184 369.958C53.6561 369.934 53.4616 369.89 53.3039 369.787C53.1886 369.711 53.0665 369.585 53.0193 369.396C52.9737 369.213 53.0182 369.051 53.0705 368.939C53.1657 368.736 53.3494 368.564 53.5221 368.426C53.8913 368.13 54.497 367.77 55.3003 367.351C56.9201 366.507 59.4639 365.365 62.8563 363.947C69.6465 361.109 79.8869 357.147 93.058 352.227C119.402 342.386 157.495 328.705 203.214 312.505C261.169 291.97 331.384 267.388 405.47 241.45C448.274 226.464 492.371 211.026 536.141 195.654C655.671 153.678 772.765 112.202 854.479 81.8004C895.339 66.5987 927.341 54.17 946.378 45.8337C951.136 43.7499 955.079 41.924 958.146 40.376C961.221 38.8236 963.387 37.5643 964.61 36.6157C965.237 36.1296 965.546 35.7771 965.646 35.5581C965.664 35.5174 965.671 35.4917 965.673 35.4777C965.662 35.4666 965.638 35.4468 965.591 35.4212C965.364 35.2989 964.879 35.1943 964.038 35.173C963.22 35.1523 962.137 35.2104 960.772 35.3544C938.814 37.6713 872.236 51.029 784.978 69.4333C723.764 82.3446 652.393 97.7349 579.153 113.528C548.015 120.243 516.538 127.031 485.361 133.732C380.853 156.193 279.704 177.681 205.908 192.185C169.011 199.436 138.944 204.943 118.713 207.953C108.601 209.457 100.926 210.341 96.0793 210.503C93.675 210.584 91.8976 210.49 90.864 210.173C90.3722 210.022 89.8735 209.768 89.6975 209.286C89.5082 208.768 89.7851 208.278 90.1194 207.905C90.7804 207.167 91.9021 206.311 93.4145 205.345C94.9358 204.374 96.8848 203.273 99.2279 202.051C103.914 199.607 110.202 196.668 117.85 193.307C133.148 186.584 153.913 178.162 178.25 168.622C219.459 152.467 270.924 133.099 323.452 113.33C332.968 109.749 342.52 106.154 352.052 102.563C414.198 79.1496 475.502 55.8898 520.827 37.4165C543.492 28.1791 562.15 20.1427 574.918 13.8848C581.306 10.7543 586.201 8.0776 589.383 5.92515C590.977 4.84636 592.115 3.9173 592.794 3.14612C593.135 2.76036 593.34 2.43697 593.439 2.17527C593.536 1.92086 593.523 1.75344 593.474 1.63435C593.445 1.56439 593.369 1.46377 593.163 1.35854C592.954 1.25199 592.645 1.15909 592.216 1.09484C591.359 0.966404 590.131 0.967017 588.527 1.10521C585.328 1.38095 580.752 2.19319 574.93 3.49619C563.29 6.10078 546.742 10.6493 526.419 16.7172C485.776 28.8519 430.073 47.0509 368.43 67.8909Z"
                      fill="#91FF6A"/>
            </svg>

            <svg className={cls.text} width="448" height="214" viewBox="0 0 448 214" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M72.8652 158.028C70.0817 156.387 68.1418 154.39 67.0458 152.037C65.9315 149.802 65.88 147.366 66.8912 144.729C66.5086 145.642 66.7137 145.491 67.5068 144.277C68.4185 143.081 69.6081 141.261 71.0757 138.815C72.6618 136.387 74.3527 133.672 76.1484 130.669C77.9623 127.548 79.7078 124.477 81.3848 121.456C83.1805 118.454 84.6662 115.889 85.842 113.763C88.6403 108.972 91.1879 104.627 93.4849 100.73C95.7819 96.8335 97.6914 93.4842 99.2135 90.6824C100.854 87.8989 102.098 85.7223 102.946 84.1526C103.794 82.5829 104.226 81.7388 104.245 81.6201C105.849 79.0738 107.458 76.1033 109.071 72.7085C110.82 69.2133 112.548 66.2609 114.253 63.8514C115.219 62.2999 116.135 60.6799 117.001 58.9916C117.985 57.3215 118.91 55.6423 119.776 53.954C116.146 57.0397 112.225 60.4449 108.012 64.1695C103.936 67.7937 99.6638 71.5093 95.1954 75.3162C90.8456 79.1413 86.4365 82.9573 81.9681 86.7642C77.6183 90.5893 73.4144 94.2546 69.3563 97.7603C65.4169 101.284 61.7602 104.548 58.3862 107.551C55.0303 110.436 52.1624 112.91 49.7823 114.973C47.4204 116.918 45.6831 118.351 44.5706 119.273C41.652 120.89 38.884 122.711 36.2667 124.738C33.7861 126.664 31.0866 128.436 28.168 130.052C26.9731 130.719 25.377 131.628 23.3796 132.778C21.519 133.828 19.6766 134.76 17.8524 135.573C16.1467 136.404 14.7602 136.738 13.6926 136.574C9.07531 135.017 6.26883 133.13 5.27317 130.913C4.37794 128.834 4.48617 126.544 5.59787 124.043C6.84636 121.442 8.22256 118.8 9.72647 116.117C10.5741 114.547 11.3715 112.909 12.1187 111.203C12.8659 109.496 13.5126 107.653 14.059 105.673C15.6443 101.667 17.1477 98.1947 18.5694 95.2562C19.991 92.3177 21.3079 89.6666 22.5201 87.3029C23.7867 84.5835 24.985 81.9142 26.1149 79.2952C27.3634 76.6943 28.2469 74.0982 28.7656 71.5069C30.279 69.5536 31.847 67.2446 33.4695 64.5796C35.1102 61.7961 36.6141 59.113 37.9812 56.5303C39.4669 53.9658 40.6063 52.0766 41.3994 50.8628C43.1405 48.2161 44.6626 45.4143 45.9657 42.4576C47.3873 39.5191 48.9778 36.6672 50.7371 33.9018C51.822 32.3685 53.2761 30.4061 55.0995 28.0148C56.941 25.5049 58.664 22.9767 60.2683 20.4304C61.8727 17.8841 62.8021 15.7807 63.0567 14.1201C63.3294 12.3408 64.1727 11.1954 65.5865 10.6837C67.0004 10.172 68.5787 10.1712 70.3216 10.6811C72.0826 11.0725 73.593 11.911 74.8528 13.1967C76.2493 14.382 76.9891 15.8915 77.0722 17.7253C77.3467 19.1028 77.3657 20.5625 77.1293 22.1045C77.0116 23.6647 76.5471 25.111 75.7358 26.4435L55.2136 61.7213L32.4771 101.941C31.4927 103.611 30.5083 105.281 29.5239 106.951C28.5395 108.621 27.555 110.291 26.5706 111.961L68.02 81.5304C70.3638 79.7044 72.6573 77.8101 74.9006 75.8473C77.2625 73.9027 79.4465 71.9309 81.4525 69.9318C84.3157 67.0928 87.1335 64.5504 89.9058 62.3045C92.6963 59.94 95.2634 57.8448 97.6071 56.0188C100.069 54.2111 102.258 52.6041 104.173 51.1981C106.089 49.792 107.662 48.6371 108.893 47.7332L135.171 27.1775L139.892 26.0801C142.182 26.1883 143.998 27.013 145.34 28.5541C146.682 30.0952 147.435 31.9104 147.601 33.9996C147.903 35.9883 147.562 37.8177 146.577 39.4879C145.939 40.4827 144.895 42.1437 143.446 44.471C141.997 46.7982 140.288 49.632 138.319 52.9722C136.368 56.1939 134.244 59.7532 131.947 63.6501C129.65 67.5471 127.267 71.6129 124.797 75.8475C122.463 79.9817 120.062 84.1661 117.591 88.4007C115.258 92.5349 113.011 96.5002 110.851 100.297C109.639 102.66 108.368 105.015 107.037 107.36C105.843 109.605 104.64 111.91 103.428 114.273C102.216 116.637 101.003 119.001 99.7913 121.364C98.5792 123.728 97.3077 126.082 95.977 128.428C94.783 130.673 93.58 132.977 92.3679 135.341C91.6389 136.929 90.8003 138.439 89.8523 139.872C88.9042 141.305 88.0246 142.688 87.2133 144.02C86.3016 145.216 85.5176 146.37 84.8613 147.484C84.1869 148.716 83.4306 150.481 82.5925 152.781C81.499 155.163 79.9626 156.87 77.9834 157.902C76.1046 159.071 74.3985 159.113 72.8652 158.028ZM128.437 155.256C126.887 155.868 125.409 156.006 124.004 155.669C122.699 155.469 121.047 155.155 119.049 154.727C117.379 153.743 116.311 152.79 115.845 151.869C115.48 151.084 115.146 149.698 114.844 147.709C115.354 145.966 115.932 144.173 116.579 142.33C117.226 140.487 117.904 138.83 118.615 137.361C119.846 134.879 120.925 132.191 121.854 129.299C122.92 126.306 124.123 123.212 125.462 120.018L130.836 112.283C131.847 109.646 133.123 106.867 134.663 103.947C136.204 101.027 137.553 98.5625 138.71 96.5547C140.059 94.0907 141.331 91.7361 142.525 89.4911C143.837 87.2643 145.063 85.2063 146.202 83.3171C146.841 82.3223 147.652 80.9899 148.636 79.3197C149.639 77.531 150.719 75.6327 151.877 73.6249C153.052 71.4985 154.141 69.541 155.144 67.7522C155.627 66.9765 156.101 66.26 156.566 65.6029C157.031 64.9457 157.428 64.3388 157.756 63.7821C155.776 63.2358 154.348 62.6527 153.471 62.0327C152.613 61.2942 151.988 60.2271 151.595 58.8315C151.521 57.7276 151.438 56.683 151.347 55.6977C151.374 54.7306 151.4 53.7635 151.427 52.7964C151.573 51.8475 151.65 50.9488 151.658 50.1003C153.929 48.7488 155.922 48.0224 157.638 47.9211C159.49 47.7194 160.653 47.6549 161.127 47.7276C162.879 47.3891 164.69 47.0596 166.56 46.7393C168.43 46.419 170.232 46.1488 171.965 45.9289C172.576 45.9012 174.232 45.7908 176.932 45.5978C179.633 45.4047 182.698 45.2069 186.129 45.0043C189.559 44.8017 192.674 44.6723 195.475 44.616C198.294 44.4412 200.06 44.4083 200.771 44.5174C202.332 44.6351 203.518 44.8169 204.33 45.0628C205.279 45.2083 205.812 45.2901 205.931 45.3083C207.272 45.2711 208.545 45.2841 209.749 45.3473C210.972 45.2919 212.185 45.2958 213.39 45.359C214.731 45.3217 216.003 45.3347 217.208 45.3979C218.585 45.1235 219.917 45.1456 221.204 45.4642C222.509 45.6642 223.663 45.659 224.666 45.4486C225.587 44.9828 226.504 44.9413 227.417 45.324C228.466 45.6062 229.803 45.9932 231.427 46.485C232.961 47.5699 233.992 48.7599 234.522 50.0551C235.07 51.2318 235.454 52.6867 235.674 54.4201L233.775 60.8668C232.991 61.2322 231.883 61.73 230.45 62.3603C229.137 63.0088 227.577 63.6802 225.771 64.3746C225.005 64.6213 224.239 64.8681 223.473 65.1148C222.706 65.3616 221.89 65.5399 221.023 65.6499C219.783 65.8239 218.56 65.8793 217.356 65.8161C216.151 65.7529 215.052 65.4022 214.057 64.7641C213.518 64.3174 213.021 63.9983 212.565 63.807C212.245 63.5152 211.976 63.2918 211.757 63.1369C211.319 62.8269 211.041 62.6628 210.922 62.6446C210.803 62.6265 210.653 62.4213 210.47 62.0291C210.287 61.6369 209.635 60.7477 208.512 59.3615C206.806 60.1927 205.319 60.3897 204.051 59.9524C202.8 59.3966 201.29 59.3472 199.521 59.8044C198.198 59.723 196.441 59.6965 194.252 59.7251C192.062 59.7537 189.864 59.8415 187.656 59.9887C185.329 60.1177 183.24 60.2831 181.388 60.4848C179.554 60.5679 178.382 60.6917 177.871 60.8562C177.06 62.1887 176.19 63.5121 175.26 64.8263C174.448 66.1588 173.696 67.5004 173.004 68.851C170.953 71.9358 169.047 74.8609 167.288 77.6263C165.529 80.3916 163.957 83.125 162.571 85.8263L149.241 109.824C148.776 110.481 148.024 111.822 146.985 113.848C145.965 115.756 144.848 117.891 143.636 120.255C142.424 122.618 141.358 124.822 140.437 126.866C139.535 128.792 138.97 130.101 138.743 130.795C138.287 132.182 137.686 133.729 136.939 135.435C136.31 137.16 135.563 138.866 134.697 140.555C133.759 142.717 132.82 144.88 131.881 147.043C131.08 149.105 130.52 150.78 130.201 152.066C130.074 152.897 129.787 153.581 129.34 154.12C128.893 154.658 128.592 155.037 128.437 155.256ZM214.874 167.413C214.28 167.322 213.318 166.871 211.985 166.06C210.635 165.367 209.371 164.506 208.193 163.475C207.134 162.463 206.677 161.483 206.823 160.534C206.823 160.534 206.818 160.169 206.809 159.439C206.936 158.609 206.826 157.742 206.479 156.839C206.624 155.89 206.788 154.823 206.97 153.636C207.288 152.35 207.785 151.09 208.459 149.858C208.659 148.554 209.055 147.158 209.648 145.67C210.258 144.064 210.864 142.882 211.466 142.125C211.666 140.82 212.217 139.205 213.119 137.279C214.158 135.253 215.051 133.387 215.798 131.681C217.703 127.966 219.088 125.265 219.954 123.577C220.939 121.907 221.613 120.675 221.978 119.881C222.36 118.968 222.624 118.037 222.77 117.088C223.271 116.194 224.069 114.556 225.162 112.174C226.256 109.792 227.358 107.351 228.47 104.851C229.718 102.25 230.552 100.375 230.971 99.2248C231.518 98.8231 231.819 98.4443 231.874 98.0885C232.065 97.6322 232.197 97.1668 232.27 96.6924C232.27 96.6924 232.894 95.3919 234.143 92.7911C235.391 90.1902 236.94 87.2106 238.791 83.8521C241.889 77.8928 244.013 73.5444 245.161 70.8067C246.428 68.0873 247.092 66.1254 247.156 64.921C247.338 63.7349 247.223 62.5033 246.812 61.2262C246.218 59.5569 246.399 58.3708 247.357 57.6678C247.904 57.2661 248.401 56.7959 248.848 56.2574C249.313 55.6003 249.545 55.2717 249.545 55.2717C249.582 55.0345 250.485 54.6873 252.254 54.2301C254.161 53.6726 256.432 53.1102 259.069 52.5432C261.723 51.8575 264.36 51.2904 266.978 50.8419C269.614 50.2748 271.74 49.8722 273.354 49.6341C273.71 49.6887 274.541 49.8159 275.845 50.016C277.269 50.2341 278.751 50.4614 280.293 50.6978C281.954 50.9523 283.259 51.1523 284.208 51.2978C287.219 52.245 290.226 53.6164 293.228 55.4121C296.35 57.226 298.855 59.4918 300.745 62.2095C301.969 63.7325 303.229 65.8074 304.526 68.4342C305.941 71.0792 307.23 74.5546 308.391 78.8602C308.318 79.3347 308.282 80.3611 308.283 81.9394C308.42 83.4173 308.38 84.868 308.162 86.2914C307.617 89.8498 306.109 93.7463 303.639 97.9809C301.287 102.234 298.096 106.419 294.066 110.535C290.054 114.534 285.375 118.126 280.031 121.313C274.431 124.583 268.853 126.52 263.297 127.125C257.741 127.73 252.951 127.299 248.927 125.833C246.7 124.52 245.299 122.97 244.723 121.182C244.165 119.275 244.064 117.56 244.419 116.037C244.774 114.513 245.157 113.6 245.567 113.299C246.552 113.207 247.985 113.366 249.865 113.776C251.762 114.066 254.905 113.759 259.293 112.853C260.671 112.579 262.117 112.254 263.631 111.879C265.163 111.386 266.381 110.966 267.284 110.618C269.893 109.44 272.565 107.847 275.301 105.838C278.156 103.848 281.206 100.977 284.452 97.225C285.774 95.7281 286.827 94.0077 287.61 92.064C288.394 90.1203 288.999 88.1493 289.427 86.151C289.991 84.0523 290.392 82.232 290.628 80.69C292.05 77.7515 291.848 75.1104 290.022 72.7666C288.333 70.3225 285.271 68.5177 280.836 67.3523C279.467 66.7783 277.697 66.4462 275.526 66.3562C273.473 66.2843 271.511 66.4086 269.641 66.7289C267.789 66.9306 266.344 67.2553 265.304 67.7029C264.829 67.6302 264.478 67.9406 264.25 68.6341C264.023 69.3276 263.599 70.1124 262.979 70.9886C262.852 71.8189 262.223 73.5436 261.093 76.1626C259.982 78.663 258.779 80.9674 257.484 83.0756C256.254 85.5578 254.8 88.3093 253.123 91.3301C251.464 94.2323 250.261 96.5366 249.514 98.2431C248.749 100.068 247.874 101.816 246.889 103.486C246.024 105.174 245.591 106.018 245.591 106.018C245.518 106.493 245.007 107.447 244.059 108.879C243.23 110.33 242.442 111.909 241.694 113.616C240.875 115.797 239.831 118.247 238.565 120.966C237.417 123.704 236.195 126.127 234.901 128.235C232.923 132.424 231.124 136.64 229.502 140.883C227.899 145.008 227.412 147.786 228.042 149.218C231.583 149.882 233.303 150.935 233.203 152.377C233.241 153.718 230.929 156.52 226.27 160.783C224.629 163.567 223.134 165.401 221.784 166.287C220.416 167.291 219.13 167.762 217.925 167.699C216.84 167.654 215.822 167.558 214.874 167.413ZM318.199 181.431C316.758 181.331 315.334 181.113 313.929 180.776C312.642 180.457 311.365 180.079 310.097 179.642C305.771 177.765 302.499 175.746 300.281 173.585C298.081 171.305 295.871 168.296 293.652 164.557C294.016 162.184 294.845 159.155 296.138 155.468C297.55 151.8 299.168 147.981 300.99 144.011C302.658 140.26 304.426 136.647 306.294 133.17C308.299 129.592 310.182 126.421 311.941 123.655C314.347 119.047 316.949 114.347 319.747 109.555C322.564 104.645 325.49 99.813 328.525 95.058C329.51 93.3879 330.494 91.7178 331.479 90.0476C332.6 88.2771 333.703 86.6251 334.788 85.0918C336.237 82.7645 337.823 80.3368 339.546 77.8087C341.388 75.2988 343.074 73.0079 344.606 70.936C346.256 68.8823 347.469 67.3079 348.244 66.2127C349.93 63.9217 351.015 62.3884 351.498 61.6127C352.1 60.8551 352.67 59.9105 353.207 58.7789C354.009 56.7166 354.939 55.4023 355.997 54.8361C357.073 54.1512 358.642 53.4205 360.703 52.6439C363.377 53.4179 365.175 54.3612 366.097 55.4738C367.019 56.5863 368.348 58.611 370.083 61.5478C369.846 63.0898 369.61 64.6318 369.374 66.1738C369.137 67.7158 368.239 69.2171 366.68 70.6777C365.613 72.0924 364.469 73.6166 363.248 75.2504C362.144 76.9023 360.982 78.5451 359.76 80.1789C358.657 81.8308 357.504 83.4144 356.301 84.9295C355.216 86.4629 354.149 87.8776 353.101 89.1737C352.171 90.488 351.337 91.5741 350.598 92.4321C353.792 93.7715 356.945 95.7724 360.058 98.4347C363.17 101.097 366.073 104.334 368.767 108.146C371.479 111.84 373.821 115.962 375.794 120.514C378.133 125.85 378.824 131.237 377.869 136.675C377.051 142.013 375.389 146.917 372.882 151.389C370.513 155.761 368.042 159.206 365.471 161.726C363.31 163.944 360.793 166.107 357.92 168.216C355.065 170.207 352.042 172.111 348.85 173.928C345.676 175.627 342.351 177.12 338.876 178.409C335.419 179.578 332.007 180.451 328.641 181.028L318.199 181.431ZM388.257 188.892C386.625 189.249 384.996 189.181 383.372 188.689C381.729 188.316 379.726 187.523 377.363 186.311C376.176 184.551 375.445 182.982 375.17 181.605C374.914 180.109 375.223 178.092 376.098 175.555C376.69 174.068 377.802 171.568 379.433 168.054C381.183 164.559 383.192 160.557 385.461 156.049C387.868 151.44 390.351 146.722 392.912 141.895C395.61 136.966 398.135 132.376 400.486 128.123C402.856 123.752 404.93 120.124 406.707 117.24C408.503 114.237 409.761 112.367 410.481 111.627C411.22 110.769 411.73 109.815 412.012 108.766C413.015 106.977 414.017 105.189 415.02 103.4C416.023 101.611 416.957 99.8726 417.823 98.1843C418.825 96.3956 419.828 94.6068 420.831 92.8181C421.833 91.0293 422.836 89.2406 423.838 87.4519C424.686 85.8822 425.524 84.3718 426.354 82.9207C427.183 81.4696 427.953 80.0095 428.664 78.5402C430.67 76.5411 433.134 76.3116 436.054 77.8519C438.992 79.2736 441.503 81.9043 443.585 85.7441C443.787 87.5961 443.3 89.5853 442.124 91.7117C441.067 93.8563 440.288 95.3757 439.786 96.2701C438.264 99.0718 436.692 101.805 435.069 104.47C433.584 107.035 431.979 109.581 430.256 112.109C428.944 114.336 427.572 116.554 426.141 118.762C424.828 120.989 423.447 123.266 421.998 125.593C420.549 127.921 419.099 130.248 417.65 132.575C416.319 134.921 414.92 137.316 413.452 139.762C412.468 141.432 411.484 143.102 410.499 144.773C409.652 146.342 408.726 148.021 407.724 149.81C406.858 151.498 405.983 153.246 405.099 155.053C404.233 156.741 403.358 158.489 402.474 160.296C400.378 164.466 398.765 167.861 397.635 170.48C396.506 173.099 395.558 175.321 394.793 177.146C394.164 178.871 393.348 180.628 392.346 182.417C391.48 184.105 390.117 186.263 388.257 188.892ZM319.517 164.515C321.807 164.623 324.084 164.426 326.346 163.923C328.626 163.301 331.336 162.26 334.473 160.798C337.2 159.638 339.896 158.291 342.559 156.757C345.24 155.104 347.684 153.415 349.891 151.689C352.098 149.964 353.804 148.343 355.007 146.828C357.086 144.355 358.672 141.927 359.765 139.545C360.859 137.163 361.469 134.768 361.595 132.359C362.177 128.564 362.207 125.594 361.686 123.45C361.302 121.206 360.032 118.401 357.877 115.036C357.411 114.115 356.53 113.13 355.234 112.081C354.075 110.933 352.501 109.72 350.511 108.444C348.54 107.049 346.053 105.454 343.05 103.658C341.409 106.442 339.7 109.275 337.923 112.159C336.163 114.925 334.6 117.599 333.233 120.181C332.75 120.957 332.258 121.792 331.756 122.687C331.255 123.581 330.754 124.475 330.253 125.37C329.769 126.145 329.277 126.98 328.776 127.875C328.293 128.651 327.801 129.486 327.299 130.38C324.82 135.463 322.205 140.647 319.452 145.931C316.837 151.114 314.395 156.749 312.126 162.836C313.513 163.291 314.791 163.669 315.959 163.97C317.245 164.288 318.432 164.47 319.517 164.515Z" fill="#91FF6A"/>
            </svg>
        </div>
    );
};