import cls from './Create.module.scss'
import Image from "next/image"

export const Create = () => {
    return (
        <section className={cls.section}>
            <div className={cls.container}>
                <p className={cls.top}>Создавай</p>
                <p className={cls.topBorder}>Создавай</p>
                <p className={cls.mid}>свои</p>
                <p className={cls.midBorder}>свои</p>
                <p className={cls.bot}>миры</p>
                <p className={cls.botBorder}>миры</p>

                <Image className={cls.image} width={670} height={757} src={'../../images/1650/create/image.png'}
                       alt={''}/>

                <svg className={cls.lines} viewBox="0 0 1539 777" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M1046.8 4.32837C1062.42 -1.65064 1076.81 -0.398894 1086.53 1.93899C1097.17 4.49629 1106.1 9.15713 1111.59 12.2773C1117.87 15.8449 1124.18 20.0565 1130.21 24.3862C1142.3 33.0645 1156.16 44.3128 1170.96 57.0729C1200.72 82.7213 1237.41 117.171 1276.87 155.961C1355.92 233.656 1448.51 331.122 1523.44 415.833C1545.4 440.653 1543.08 478.572 1518.26 500.527C1493.44 522.482 1455.52 520.16 1433.56 495.34C1360.5 412.741 1269.83 317.3 1192.76 241.543C1185.82 234.721 1179.01 228.078 1172.34 221.635C1175.47 229.839 1178.66 238.163 1181.9 246.567C1187.43 260.91 1193.09 275.478 1198.71 289.949C1214 329.291 1229.01 367.917 1240.3 399.363C1247.97 420.696 1254.72 440.869 1258.74 456.813C1260.63 464.295 1262.78 474.096 1263.29 483.872C1263.52 488.465 1263.67 497.152 1261.02 507.041C1258.47 516.588 1250.34 537.349 1226.59 548.28C1214.16 554 1202.95 554.185 1197.28 553.924C1191.04 553.637 1185.91 552.507 1182.63 551.646C1176.11 549.934 1170.4 547.51 1166.52 545.728C1158.38 541.994 1149.35 536.899 1140.55 531.609C1122.51 520.775 1099.05 505.254 1072.72 487.272C1035.27 461.701 989.767 429.597 942.193 396.035C922.704 382.285 902.868 368.292 883.097 354.401C819.847 309.966 757.092 266.472 705.957 233.527C723.326 279.304 746.036 333.741 769.987 389.529C785.006 424.511 800.353 459.659 814.983 493.147L816.407 496.406C830.482 528.622 843.889 559.311 855.514 586.444C867.474 614.36 877.861 639.237 885.277 658.573C888.957 668.166 892.232 677.239 894.646 685.056C895.845 688.942 897.073 693.289 898.026 697.693C898.761 701.087 900.312 708.732 899.955 717.67C899.656 725.147 897.682 741.036 885.107 755.671C870.841 772.274 852.076 776.935 838.818 776.997C827.249 777.051 818.371 773.849 814.257 772.178C809.484 770.238 805.635 768.047 803.055 766.457C793.998 760.875 785.132 752.949 778.618 746.864C763.988 733.2 744.389 712.647 722.438 688.845C691.103 654.866 652.297 611.318 611.654 565.709C594.928 546.94 577.891 527.821 560.935 508.877C541.204 486.831 521.577 465.013 502.562 444.112C504.313 448.056 506.068 452 507.823 455.94C512.656 466.787 517.504 477.628 522.288 488.326C539.64 527.124 556.153 564.047 568.036 592.633C575.445 610.455 582.14 627.585 585.999 640.781C587.456 645.766 590.713 657.132 590.544 669.34L590.543 669.41C590.485 673.672 590.211 693.597 574.565 711.039C552.295 735.864 522.906 732.672 509.599 728.383C478.847 718.473 441.45 695.832 404.878 671.015C366.597 645.039 323.146 612.391 278.746 577.786C234.251 543.107 188.02 505.849 144.228 470.556C100.224 435.092 58.8425 401.742 23.2848 374.229C-2.92276 353.95 -7.72892 316.265 12.5499 290.057C32.8287 263.85 70.5134 259.044 96.7209 279.323C133.257 307.594 175.443 341.592 218.971 376.673L219.529 377.122C263.467 412.533 308.925 449.165 352.514 483.137C371.342 497.812 389.677 511.876 407.251 525.034C404.271 518.365 401.252 511.604 398.208 504.772C375.547 453.903 351.723 399.557 334.154 353.953C325.4 331.231 317.72 309.456 312.494 290.692C309.884 281.32 307.599 271.69 306.192 262.443C304.925 254.117 303.656 241.816 305.829 228.855C308.021 215.78 315.826 194.882 338.293 182.514C358.356 171.47 377.531 174.465 386.071 176.534C402.552 180.526 416.355 190.171 423.57 195.441C441.23 208.339 462.952 228.601 485.564 251.177C531.808 297.349 591.807 363.434 650.352 428.848C654.158 433.101 657.959 437.351 661.749 441.593C661.072 440.018 660.396 438.444 659.72 436.869C629.496 366.47 599.823 294.975 580.304 239.357C570.688 211.956 562.626 185.887 558.57 164.773C556.637 154.706 554.798 141.807 555.752 128.906C556.377 120.457 559.97 86.0657 594.002 69.7019C608.768 62.6019 622.594 62.7174 629.843 63.2694C637.891 63.8821 645.049 65.6502 650.44 67.2699C661.254 70.5191 672.432 75.4887 682.723 80.5977C703.724 91.0239 729.502 106.328 757.303 123.932C813.303 159.393 883.553 208.068 952.08 256.211C972.419 270.5 992.592 284.732 1012.26 298.607C1041.79 319.442 1070.18 339.472 1096.28 357.677C1093.38 350.215 1090.44 342.626 1087.45 334.943C1081.7 320.144 1075.81 304.994 1069.93 289.72C1049.12 235.73 1028.2 179.877 1015.94 137.9C1010.13 118.027 1004.64 96.0147 1003.8 77.5217C1003.46 70.2165 1002.95 51.3459 1013.34 33.1532C1019.63 22.1413 1030.45 10.5915 1046.8 4.32837ZM1216.97 436.841C1216.98 436.845 1216.91 436.817 1216.76 436.751C1216.89 436.805 1216.97 436.837 1216.97 436.841ZM471.357 676.515C471.346 676.505 471.282 676.254 471.192 675.794C471.322 676.295 471.367 676.525 471.357 676.515ZM424.614 242.599C424.618 242.602 424.629 242.721 424.638 242.944C424.615 242.707 424.611 242.595 424.614 242.599ZM349.73 290.245C349.447 290.095 349.3 290.004 349.297 289.997C349.294 289.989 349.436 290.064 349.73 290.245ZM615.909 182.194C615.913 182.196 615.918 182.197 615.922 182.198C615.722 182.146 615.712 182.135 615.909 182.194ZM1123.67 72.0398C1123.62 71.0102 1123.74 71.2865 1123.7 72.5398C1123.69 72.3546 1123.68 72.188 1123.67 72.0398ZM1051.98 116.426C1051.71 116.3 1051.57 116.223 1051.57 116.217C1051.56 116.21 1051.7 116.273 1051.98 116.426Z"
                          fill="#91FF6A"/>
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M805.091 319.595C805.098 319.6 805.101 319.602 805.1 319.602C806.055 320.157 806.379 321.381 805.823 322.336C805.344 323.161 804.364 323.515 803.491 323.238C807.691 326.415 811.966 329.536 816.314 332.591C817.218 333.226 817.436 334.473 816.801 335.377C816.166 336.281 814.919 336.499 814.015 335.864C771.795 306.206 736.57 270.405 707.902 236.987C705.148 234.385 702.393 231.771 699.647 229.154C675.188 205.845 651.395 182.251 634.808 163.785C626.527 154.566 619.976 146.552 616.039 140.457C614.087 137.433 612.678 134.733 612.082 132.511C611.784 131.397 611.645 130.245 611.865 129.165C612.1 128.009 612.737 127.012 613.793 126.359C615.467 125.325 617.343 125.222 619.212 125.732C621.023 126.226 622.901 127.308 624.821 128.762C628.666 131.673 633.174 136.463 638.327 142.611C644.755 150.281 652.378 160.304 661.185 171.886C666.506 178.881 672.258 186.446 678.441 194.403C688.128 206.87 698.905 220.349 710.804 234.227C732.511 254.736 754.189 274.567 771.316 289.971C780.984 298.668 789.199 305.951 795.148 311.147C798.122 313.745 800.526 315.817 802.258 317.282C803.125 318.015 803.817 318.589 804.325 318.999C804.816 319.395 805.043 319.56 805.091 319.595ZM744.528 271.05C761.166 287.96 779.457 304.678 799.458 320.152C797.722 318.681 795.377 316.658 792.516 314.159C786.55 308.948 778.32 301.651 768.641 292.945C761.317 286.358 753.162 278.962 744.528 271.05ZM685.992 210.465C682.282 205.818 678.713 201.273 675.282 196.857C669.021 188.799 663.236 181.191 657.907 174.184C649.155 162.675 641.635 152.786 635.261 145.18C630.13 139.059 625.865 134.57 622.407 131.951C620.675 130.64 619.269 129.894 618.159 129.591C617.106 129.303 616.424 129.435 615.896 129.761L615.888 129.766C615.848 129.791 615.815 129.81 615.784 129.963C615.736 130.201 615.732 130.675 615.946 131.475C616.376 133.079 617.506 135.355 619.4 138.287C623.156 144.104 629.532 151.925 637.784 161.112C650.532 175.304 667.601 192.585 685.992 210.465Z"
                          fill="#1B1B1B"/>
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M1060.37 305.764C1061.28 305.14 1062.53 305.373 1063.15 306.285C1070.35 316.793 1078.23 328.635 1086.47 341.007C1090.23 346.657 1094.07 352.418 1097.95 358.213C1115.29 377.789 1134.09 396.898 1150.46 413.512L1151.5 414.568C1164.98 428.237 1176.77 440.192 1184.55 449.189C1188.52 453.783 1191.55 457.725 1193.22 460.795C1194.04 462.306 1194.65 463.811 1194.74 465.191C1194.79 465.91 1194.7 466.676 1194.36 467.4C1194.01 468.145 1193.45 468.717 1192.76 469.111C1189.31 471.083 1185.21 470.3 1181.11 468.193C1176.96 466.062 1172.32 462.338 1167.34 457.489C1157.36 447.769 1145.62 433.113 1133.26 416.248C1120.76 399.178 1107.53 379.724 1094.77 360.66C1082.56 346.862 1071.04 332.808 1061.58 319.211C1060.95 318.304 1061.17 317.058 1062.08 316.427C1062.99 315.796 1064.23 316.019 1064.86 316.926C1067.54 320.771 1070.38 324.655 1073.36 328.561C1068.65 321.514 1064.12 314.783 1059.85 308.544C1059.23 307.633 1059.46 306.388 1060.37 305.764ZM1113.23 380.842C1121.07 392.316 1128.91 403.532 1136.49 413.884C1148.83 430.717 1160.4 445.147 1170.13 454.624C1175.01 459.372 1179.31 462.774 1182.94 464.635C1186.59 466.512 1189.07 466.598 1190.75 465.654C1190.75 465.614 1190.75 465.551 1190.75 465.458C1190.71 464.95 1190.44 464.058 1189.71 462.704C1188.26 460.041 1185.47 456.376 1181.52 451.805C1173.83 442.909 1162.12 431.032 1148.57 417.287L1147.62 416.32C1136.87 405.423 1125.04 393.4 1113.23 380.842Z"
                          fill="#1B1B1B"/>
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M619.941 390.143C619.822 390.013 619.759 389.948 619.738 389.927C619.728 389.917 619.727 389.916 619.734 389.922C618.902 389.195 618.817 387.931 619.544 387.099C620.271 386.268 621.534 386.183 622.366 386.91C622.651 387.159 623.099 387.666 623.587 388.234C624.124 388.859 624.836 389.711 625.709 390.771C627.455 392.893 629.867 395.875 632.84 399.595C633.614 400.564 634.428 401.584 635.278 402.652C624.908 386.153 614.649 370.101 604.678 354.929C604.072 354.006 604.328 352.766 605.252 352.16C606.175 351.553 607.415 351.81 608.021 352.733C624.181 377.324 641.109 404.238 658.031 431.616C677.18 456.233 701.761 488.354 725.788 520.827C750.385 554.07 774.423 587.712 791.459 614.06C799.97 627.225 806.77 638.623 811.016 647.264C813.133 651.573 814.66 655.284 815.429 658.232C815.813 659.703 816.034 661.076 816.005 662.288C815.976 663.484 815.697 664.745 814.85 665.732C814.126 666.575 813.183 667.122 812.079 667.293C811.024 667.458 809.966 667.257 808.98 666.886C807.046 666.159 804.914 664.595 802.652 662.507C798.082 658.287 792.329 651.303 785.646 642.205C772.25 623.972 754.817 596.831 735.17 565.171C722.534 544.808 708.976 522.567 694.971 499.593C681.825 478.028 668.285 455.816 654.743 433.903C654.329 433.372 653.918 432.844 653.509 432.319C643.848 419.911 635.649 409.516 629.715 402.092C626.747 398.379 624.35 395.414 622.62 393.314C621.755 392.262 621.063 391.434 620.552 390.84C620.297 390.542 620.094 390.311 619.941 390.143ZM677.8 463.781C684.75 475.141 691.647 486.455 698.437 497.593C712.431 520.55 725.968 542.757 738.569 563.062C758.219 594.726 775.577 621.744 788.869 639.837C795.53 648.903 801.094 655.624 805.366 659.568C807.525 661.562 809.195 662.694 810.388 663.142C810.965 663.359 811.302 663.366 811.464 663.341C811.579 663.323 811.68 663.283 811.816 663.125C811.828 663.111 811.989 662.903 812.006 662.192C812.022 661.497 811.894 660.525 811.559 659.242C810.891 656.682 809.502 653.253 807.426 649.028C803.285 640.602 796.588 629.361 788.099 616.232C771.134 589.992 747.156 556.431 722.573 523.206C707.365 502.653 691.934 482.238 677.8 463.781Z"
                          fill="#1B1B1B"/>
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M368.847 478.608C369.707 477.915 370.966 478.05 371.659 478.91C375.228 483.339 390.035 500.586 408.915 522.068C420.606 533.214 434.22 546.256 447.752 559.421C465.59 576.775 483.306 594.36 496.302 608.106C502.795 614.973 508.141 620.915 511.741 625.406C513.533 627.643 514.941 629.579 515.841 631.123C516.286 631.887 516.657 632.639 516.87 633.335C517.052 633.93 517.28 634.986 516.738 635.977C516.445 636.515 515.976 636.928 515.391 637.146C514.854 637.346 514.339 637.338 513.95 637.284C513.205 637.181 512.458 636.839 511.805 636.475C510.447 635.718 508.716 634.416 506.717 632.734C502.684 629.339 497.197 624.08 490.75 617.559C477.841 604.502 460.929 586.224 443.808 567.274C430.797 552.873 417.649 538.065 406.027 524.842C402.352 521.339 398.868 518.024 395.637 514.952C393.275 512.707 391.047 510.59 388.979 508.625C385.126 504.965 381.826 501.83 379.241 499.364C377.254 497.469 375.683 495.962 374.603 494.912C374.064 494.388 373.639 493.968 373.343 493.668C373.197 493.52 373.068 493.386 372.968 493.277C372.921 493.225 372.859 493.156 372.8 493.082C372.772 493.047 372.723 492.984 372.67 492.905L372.669 492.902C372.648 492.872 372.473 492.616 372.385 492.254C372.125 491.181 372.785 490.1 373.858 489.839C374.67 489.643 375.485 489.972 375.948 490.608C375.998 490.661 376.077 490.744 376.191 490.86C376.457 491.129 376.858 491.525 377.392 492.044C377.603 492.25 377.834 492.474 378.084 492.715C373.361 487.209 370.019 483.25 368.544 481.42C367.851 480.56 367.987 479.301 368.847 478.608ZM442.818 560.204C444.138 561.669 445.458 563.133 446.776 564.592C463.888 583.532 480.751 601.755 493.595 614.747C500.024 621.251 505.407 626.402 509.293 629.674C509.93 630.21 510.518 630.688 511.055 631.108C510.393 630.175 509.58 629.107 508.619 627.908C505.125 623.548 499.869 617.7 493.396 610.854C480.46 597.172 462.792 579.634 444.963 562.288C444.248 561.593 443.533 560.898 442.818 560.204ZM513.083 634.669C513.082 634.668 513.08 634.654 513.078 634.629C513.084 634.657 513.084 634.669 513.083 634.669Z"
                          fill="#1B1B1B"/>
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M1195.15 248.963C1195.19 249.006 1195.19 249.013 1195.18 248.997C1195.97 249.769 1195.98 251.035 1195.21 251.826C1194.44 252.616 1193.17 252.631 1192.38 251.86C1192.16 251.644 1191.87 251.26 1191.6 250.913C1191.51 250.785 1191.4 250.642 1191.28 250.486C1195.01 257.406 1198.71 264.162 1202.35 270.669C1202.89 271.633 1202.55 272.852 1201.58 273.391C1200.62 273.931 1199.4 273.587 1198.86 272.623C1190.21 257.175 1181.25 240.314 1172.33 223.183C1161.69 207.518 1148.08 187.115 1134.86 166.54C1121.33 145.463 1108.19 124.171 1099.09 107.601C1094.54 99.3269 1090.97 92.1654 1088.86 86.7696C1087.81 84.0859 1087.08 81.733 1086.8 79.848C1086.66 78.9073 1086.62 77.9764 1086.77 77.1303C1086.92 76.2768 1087.29 75.3457 1088.12 74.6768C1089.57 73.5116 1091.27 73.6712 1092.68 74.3035C1094.01 74.9053 1095.38 76.0349 1096.73 77.4339C1099.47 80.2651 1102.74 84.7907 1106.42 90.5654C1113.8 102.153 1123.1 119.217 1133.48 139.042C1140.15 151.807 1147.28 165.727 1154.64 180.101C1161.54 193.568 1168.64 207.435 1175.77 221.126C1175.99 221.45 1176.21 221.772 1176.42 222.092C1181.79 229.986 1186.36 236.605 1189.67 241.336C1191.33 243.702 1192.67 245.591 1193.64 246.929C1194.12 247.599 1194.51 248.123 1194.79 248.497C1194.99 248.758 1195.1 248.9 1195.15 248.963ZM1156.24 192.001C1154.5 188.591 1152.76 185.198 1151.03 181.83C1143.68 167.477 1136.58 153.595 1129.93 140.896C1119.56 121.068 1110.33 104.142 1103.05 92.7143C1099.4 86.9811 1096.3 82.7425 1093.86 80.217C1092.62 78.9378 1091.68 78.241 1091.04 77.9513C1090.89 77.8864 1090.78 77.8519 1090.71 77.8335C1090.66 78.1046 1090.66 78.5658 1090.76 79.2694C1090.97 80.7047 1091.57 82.7247 1092.58 85.313C1094.59 90.4614 1098.07 97.4406 1102.59 105.675C1111.63 122.122 1124.71 143.321 1138.23 164.379C1144.26 173.766 1150.37 183.119 1156.24 192.001ZM1090.75 77.6523C1090.75 77.6524 1090.75 77.6542 1090.75 77.6574C1090.75 77.6539 1090.75 77.6523 1090.75 77.6523Z"
                          fill="#1B1B1B"/>
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M530.133 477.08C530.173 477.129 530.174 477.131 530.148 477.105C530.947 477.868 530.976 479.134 530.213 479.933C529.604 480.571 528.674 480.718 527.917 480.363C530.752 485.503 533.566 490.528 536.343 495.388C536.891 496.347 536.558 497.568 535.599 498.116C534.64 498.664 533.418 498.331 532.87 497.372C525.457 484.399 517.775 470.24 510.132 455.853C501.005 442.698 489.336 425.568 478.01 408.293C466.402 390.59 455.131 372.701 447.323 358.772C443.425 351.819 440.353 345.787 438.538 341.233C437.636 338.97 437 336.963 436.759 335.338C436.639 334.527 436.601 333.702 436.737 332.939C436.876 332.164 437.228 331.3 438.015 330.679C439.361 329.618 440.93 329.772 442.19 330.325C443.386 330.85 444.585 331.828 445.759 333.013C448.136 335.413 450.956 339.237 454.113 344.09C460.451 353.836 468.428 368.18 477.317 384.832C483.044 395.56 489.154 407.256 495.463 419.332C501.369 430.636 507.448 442.274 513.552 453.765C513.737 454.032 513.921 454.297 514.104 454.56C518.708 461.188 522.624 466.746 525.465 470.717C526.885 472.703 528.033 474.288 528.862 475.409C529.277 475.971 529.607 476.409 529.848 476.72C529.999 476.916 530.09 477.027 530.133 477.08ZM493.921 425.02C493.234 423.706 492.55 422.395 491.868 421.089C485.569 409.034 479.479 397.377 473.788 386.716C464.898 370.06 456.993 355.855 450.759 346.271C447.63 341.46 444.993 337.924 442.917 335.828C441.91 334.811 441.157 334.26 440.651 334.02C440.653 334.205 440.671 334.447 440.716 334.752C440.889 335.918 441.39 337.586 442.254 339.752C443.969 344.056 446.936 349.903 450.812 356.816C458.55 370.62 469.76 388.417 481.355 406.1C485.545 412.491 489.783 418.863 493.921 425.02ZM440.292 333.894C440.291 333.893 440.298 333.892 440.315 333.895C440.301 333.896 440.292 333.895 440.292 333.894Z"
                          fill="#1B1B1B"/>
                </svg>
            </div>

            <p className={cls.text}>
                Создавай свои собственные миры, решай интригующие головоломки, сражайся с&nbsp;опасными врагами
                на&nbsp;пути к&nbsp;победе с&nbsp;видеокартой KFA2&nbsp;X GeForce GTX 1650.
            </p>
        </section>
    );
};
