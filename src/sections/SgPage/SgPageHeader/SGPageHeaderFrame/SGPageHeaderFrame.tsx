import styles from './SGPageHeaderFrame.module.scss';
import frameStyles from "./SGPageHeaderFrame.module.scss";
import {useMediaQuery} from "@/features/lib/useMediaQuery";

const SGPageHeaderFrame = () => {
    const match720 = useMediaQuery(720)

    return (
        <div className={styles.frameContainer}>
            {!match720 ? (
                <svg className={frameStyles.frameBorder} width="1670" height="814" viewBox="0 0 1670 814" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <mask id="path-1-inside-1_871_2033" fill="white">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 0H1456L1670 214V814H175L0 639V0Z"/>
                    </mask>
                    <path
                        d="M1456 0L1457.41 -1.41421L1456.83 -2H1456V0ZM0 0V-2H-2V0H0ZM1670 214H1672V213.172L1671.41 212.586L1670 214ZM1670 814V816H1672V814H1670ZM175 814L173.586 815.414L174.172 816H175V814ZM0 639H-2V639.828L-1.41421 640.414L0 639ZM1456 -2H0V2H1456V-2ZM1671.41 212.586L1457.41 -1.41421L1454.59 1.41421L1668.59 215.414L1671.41 212.586ZM1672 814V214H1668V814H1672ZM175 816H1670V812H175V816ZM-1.41421 640.414L173.586 815.414L176.414 812.586L1.41421 637.586L-1.41421 640.414ZM-2 0V639H2V0H-2Z"
                        fill="white" mask="url(#path-1-inside-1_871_2033)"/>
                </svg>
            ) : (
                <svg className={styles.frameBorder} width="280" height="440" viewBox="0 0 280 440" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <mask id="path-1-inside-1_3072_4182" fill="white">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M0 0H219L247.806 28.8056L280 61V440H59L31.1389 412.139L1.90735e-06 381L0 440V0Z"/>
                    </mask>
                    <path
                        d="M219 0L219.707 -0.707107L219.414 -1H219V0ZM0 0V-1H-1V0H0ZM247.806 28.8056L248.513 28.0984L248.513 28.0984L247.806 28.8056ZM280 61H281V60.5858L280.707 60.2929L280 61ZM280 440V441H281V440H280ZM59 440L58.2929 440.707L58.5858 441H59V440ZM31.1389 412.139L31.846 411.432L31.846 411.432L31.1389 412.139ZM1.90735e-06 381L0.707109 380.293L-0.999998 378.586L-0.999998 381L1.90735e-06 381ZM219 -1H0V1H219V-1ZM248.513 28.0984L219.707 -0.707107L218.293 0.707107L247.098 29.5127L248.513 28.0984ZM280.707 60.2929L248.513 28.0984L247.098 29.5127L279.293 61.7071L280.707 60.2929ZM281 440V61H279V440H281ZM59 441H280V439H59V441ZM30.4318 412.846L58.2929 440.707L59.7071 439.293L31.846 411.432L30.4318 412.846ZM-0.707105 381.707L30.4318 412.846L31.846 411.432L0.707109 380.293L-0.707105 381.707ZM1 440L1 381L-0.999998 381L-1 440L1 440ZM-1 0V440H1V0H-1Z"
                        fill="white" mask="url(#path-1-inside-1_3072_4182)"/>
                </svg>
            )}

            <svg className={frameStyles.frameBot} width="130" height="130" viewBox="0 0 130 130" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path d="M0 130V0L130 130H0Z" fill="white"/>
            </svg>

            <svg className={frameStyles.frameTop} width="182" height="182" viewBox="0 0 182 182" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path d="M180 2V177L5 2H180Z" stroke="white" strokeWidth="4"/>
            </svg>

            {/*FRAME LINES*/}
            {!match720 ? (
                <svg className={frameStyles.frameLines} width="1668" height="814" viewBox="0 0 1668 814" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M519 641L1149 641" stroke="#D9D9D9" strokeOpacity="0.1" strokeLinecap="round"/>
                    <path d="M519 174L519 641" stroke="#D9D9D9" strokeOpacity="0.1" strokeLinecap="round"/>
                    <path d="M389 109L389 704" stroke="#D9D9D9" strokeOpacity="0.1" strokeLinecap="round"/>
                    <path d="M259 44L259 768" stroke="#D9D9D9" strokeOpacity="0.1" strokeLinecap="round"/>
                    <path d="M129 1L129 764" stroke="#D9D9D9" strokeOpacity="0.1" strokeLinecap="round"/>
                    <path d="M1279 109L1279 704.5" stroke="#D9D9D9" strokeOpacity="0.1" strokeLinecap="round"/>
                    <path d="M1409 44L1409 768.5" stroke="#D9D9D9" strokeOpacity="0.1" strokeLinecap="round"/>
                    <path d="M1539 87L1539 811" stroke="#D9D9D9" strokeOpacity="0.1" strokeLinecap="round"/>
                    <path d="M1149 174L1149 641" stroke="#D9D9D9" strokeOpacity="0.1" strokeLinecap="round"/>
                    <path d="M518.5 641L174 810.5" stroke="#D9D9D9" strokeOpacity="0.1"/>
                    <path d="M1149 641L1493.5 810.5" stroke="#D9D9D9" strokeOpacity="0.1"/>
                    <path d="M389 705H1279" stroke="#D9D9D9" strokeOpacity="0.1"/>
                    <path d="M259 768H1409" stroke="#D9D9D9" strokeOpacity="0.1" strokeLinecap="round"/>
                    <path d="M518.5 517L1 636.5" stroke="#D9D9D9" strokeOpacity="0.1"/>
                    <path d="M1150 517L1667.5 636.5" stroke="#D9D9D9" strokeOpacity="0.1"/>
                    <path d="M834 641V811" stroke="#D9D9D9" strokeOpacity="0.1"/>
                    <path d="M758.5 641L646 812" stroke="#D9D9D9" strokeOpacity="0.1"/>
                    <path d="M629 641L452 809" stroke="#D9D9D9" strokeOpacity="0.1"/>
                    <path d="M909 642L1021.5 813" stroke="#D9D9D9" strokeOpacity="0.1"/>
                    <path d="M1038.5 642L1215.5 810" stroke="#D9D9D9" strokeOpacity="0.1"/>
                    <path d="M519 174L174 1" stroke="#D9D9D9" strokeOpacity="0.1"/>
                    <path d="M1149 174L1467.5 14" stroke="#D9D9D9" strokeOpacity="0.1"/>
                    <path d="M519.5 307.5L2 188" stroke="#D9D9D9" strokeOpacity="0.1"/>
                    <path d="M1149 307.5L1646 192.5" stroke="#D9D9D9" strokeOpacity="0.1"/>
                </svg>
            ) : (
                <svg className={frameStyles.frameLines} width="282" height="380" viewBox="0 0 282 380" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M62 238H220" stroke="#D9D9D9" strokeOpacity="0.1" strokeWidth="0.5"
                          strokeLinecap="square"/>
                    <path d="M26 261H257" stroke="#D9D9D9" strokeOpacity="0.1" strokeWidth="0.5"
                          strokeLinecap="square"/>
                    <path d="M2 301L280 301" stroke="#D9D9D9" strokeOpacity="0.1" strokeWidth="0.5"
                          strokeLinecap="square"/>
                    <path d="M2 139L62 139" stroke="#D9D9D9" strokeOpacity="0.1" strokeWidth="0.5"
                          strokeLinecap="square"/>
                    <path d="M220 139L280 139" stroke="#D9D9D9" strokeOpacity="0.1" strokeWidth="0.5"
                          strokeLinecap="square"/>
                    <path d="M32 351L280 351" stroke="#D9D9D9" strokeOpacity="0.1" strokeWidth="0.5"
                          strokeLinecap="square"/>
                    <path d="M62 238L62 39" stroke="#D9D9D9" strokeOpacity="0.1" strokeWidth="0.5"
                          strokeLinecap="round"/>
                    <path d="M141 379L141 238" stroke="#D9D9D9" strokeOpacity="0.1" strokeWidth="0.5"
                          strokeLinecap="round"/>
                    <path d="M26 261L26 17" stroke="#D9D9D9" strokeOpacity="0.1" strokeWidth="0.5"
                          strokeLinecap="round"/>
                    <path d="M280 1L220 39" stroke="#D9D9D9" strokeOpacity="0.1" strokeWidth="0.5"
                          strokeLinecap="round"/>
                    <path d="M2 1L62 39" stroke="#D9D9D9" strokeOpacity="0.1" strokeWidth="0.5" strokeLinecap="round"/>
                    <path d="M280 276L220 238" stroke="#D9D9D9" strokeOpacity="0.1" strokeWidth="0.5"
                          strokeLinecap="round"/>
                    <path d="M2 276L62 238" stroke="#D9D9D9" strokeOpacity="0.1" strokeWidth="0.5"
                          strokeLinecap="round"/>
                    <path d="M220 238V39" stroke="#D9D9D9" strokeOpacity="0.1" strokeWidth="0.5" strokeLinecap="round"/>
                    <path d="M257 261L257 16" stroke="#D9D9D9" strokeOpacity="0.1" strokeWidth="0.5"
                          strokeLinecap="round"/>
                    <path d="M99 238L38 357" stroke="#D9D9D9" strokeOpacity="0.1" strokeWidth="0.5"/>
                    <path d="M184 238L257 379" stroke="#D9D9D9" strokeOpacity="0.1" strokeWidth="0.5"/>
                    <path d="M62 90L1 71" stroke="#D9D9D9" strokeOpacity="0.1" strokeWidth="0.5"/>
                    <path d="M220 90L281 71" stroke="#D9D9D9" strokeOpacity="0.1" strokeWidth="0.5"/>
                    <path d="M62 186L1 205" stroke="#D9D9D9" strokeOpacity="0.1" strokeWidth="0.5"/>
                    <path d="M220 186L281 205" stroke="#D9D9D9" strokeOpacity="0.1" strokeWidth="0.5"/>
                </svg>
            )}


            {/*FRAME GROUPS*/}
            <svg className={frameStyles.group} width="919" height="556" viewBox="0 0 919 556" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <circle cx="234" cy="96" r="1" fill="white"/>
                <circle cx="149" cy="64" r="2" fill="white"/>
                <circle cx="355" cy="137" r="2" fill="white"/>
                <g filter="url(#filter0_f_3028_4580)">
                    <circle cx="782" cy="223" r="2" fill="white"/>
                </g>
                <circle cx="615" cy="11" r="2" fill="white"/>
                <circle cx="746" cy="555" r="1" fill="white"/>
                <g filter="url(#filter1_f_3028_4580)">
                    <circle cx="257" cy="182" r="1" fill="white"/>
                </g>
                <circle cx="455" cy="94" r="1" fill="white"/>
                <g filter="url(#filter2_f_3028_4580)">
                    <circle cx="339" cy="43" r="1" fill="white"/>
                </g>
                <circle cx="572" cy="94" r="1" fill="white"/>
                <circle cx="731" cy="330" r="1" fill="white"/>
                <circle cx="686" cy="194" r="1" fill="white"/>
                <circle cx="918" cy="31" r="1" fill="white"/>
                <circle cx="733" cy="69" r="1" fill="white"/>
                <g filter="url(#filter3_f_3028_4580)">
                    <circle cx="259" cy="541" r="1" fill="white"/>
                </g>
                <circle cx="1" cy="1" r="1" fill="white"/>
                <circle cx="230" cy="331" r="1" fill="white"/>
                <defs>
                    <filter id="filter0_f_3028_4580" x="772" y="213" width="20" height="20"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur_3028_4580"/>
                    </filter>
                    <filter id="filter1_f_3028_4580" x="250" y="175" width="14" height="14"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="3" result="effect1_foregroundBlur_3028_4580"/>
                    </filter>
                    <filter id="filter2_f_3028_4580" x="333" y="37" width="12" height="12"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_3028_4580"/>
                    </filter>
                    <filter id="filter3_f_3028_4580" x="250" y="532" width="18" height="18"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur_3028_4580"/>
                    </filter>
                </defs>
            </svg>
        </div>
    )
}

export default SGPageHeaderFrame;
