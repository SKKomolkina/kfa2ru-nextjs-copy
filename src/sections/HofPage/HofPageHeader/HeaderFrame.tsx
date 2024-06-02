import styles from './HeaderFrame.module.scss';
import {useMediaQuery} from "@/features/lib/useMediaQuery";

export const HeaderFrame = () => {
    const query720 = useMediaQuery(640)

    return (
        <>
            {!query720 ? (
                <svg className={styles.top} width="214" height="214" viewBox="0 0 214 214" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M214 0V214L0 0H214Z" fill="#1B1B1B"/>
                    <path d="M212 2V177L37 2H212Z" stroke="white" strokeWidth="4"/>
                </svg>
            ) : (
                <svg className={styles.top} width="25" height="22" viewBox="0 0 25 22" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.125 0.127649V21.1016L0.125 0.127649H24.125Z" fill="#1B1B1B"/>
                    <path d="M24.125 1V17L5.125 1H24.125Z" fill="#1B1B1B" stroke="white"/>
                </svg>
            )}

            {!query720 ? (
                <svg className={styles.bot} width="175" height="175" viewBox="0 0 175 175" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 175V0L175 175H0Z" fill="#1B1B1B"/>
                    <path d="M0 175V45L130 175H0Z" fill="white"/>
                </svg>
            ) : (
                <svg className={styles.bot} width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.125 22V0L25.125 22H0.125Z" fill="#1B1B1B"/>
                    <path d="M0.125 21V3L21.125 21H0.125Z" fill="white"/>
                </svg>

            )}


            {!query720 ? (
                <svg className={styles.frame} width="1670" height="814" viewBox="0 0 1670 814" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <mask id="path-1-inside-1_3263_4531" fill="white">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 0H1456L1670 214V814H175L0 639V0Z"/>
                    </mask>
                    <path
                        d="M1456 0L1457.41 -1.41421L1456.83 -2H1456V0ZM0 0V-2H-2V0H0ZM1670 214H1672V213.172L1671.41 212.586L1670 214ZM1670 814V816H1672V814H1670ZM175 814L173.586 815.414L174.172 816H175V814ZM0 639H-2V639.828L-1.41421 640.414L0 639ZM1456 -2H0V2H1456V-2ZM1671.41 212.586L1457.41 -1.41421L1454.59 1.41421L1668.59 215.414L1671.41 212.586ZM1672 814V214H1668V814H1672ZM175 816H1670V812H175V816ZM-1.41421 640.414L173.586 815.414L176.414 812.586L1.41421 637.586L-1.41421 640.414ZM-2 0V639H2V0H-2Z"
                        fill="white" mask="url(#path-1-inside-1_3263_4531)"/>
                </svg>
            ) : (
                <svg className={styles.frame} width="280" height="201" viewBox="0 0 280 201" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <mask id="path-1-inside-1_3279_4602" fill="white">
                        <path fillRule="evenodd" clipRule="evenodd" d="M257 0H0V180L23.8636 201H280V20.1L257 0Z"/>
                    </mask>
                    <path
                        d="M257 0L257.658 -0.752982L257.375 -1H257V0ZM0 0V-1H-1V0H0ZM0 180H-1V180.452L-0.660628 180.751L0 180ZM23.8636 201L23.203 201.751L23.4863 202H23.8636V201ZM280 201V202H281V201H280ZM280 20.1H281V19.6459L280.658 19.347L280 20.1ZM257 -1H0V1H257V-1ZM-1 0V180H1V0H-1ZM-0.660628 180.751L23.203 201.751L24.5243 200.249L0.660628 179.249L-0.660628 180.751ZM23.8636 202H280V200H23.8636V202ZM281 201V20.1H279V201H281ZM280.658 19.347L257.658 -0.752982L256.342 0.752982L279.342 20.853L280.658 19.347Z"
                        fill="white" mask="url(#path-1-inside-1_3279_4602)"/>
                </svg>

            )}
        </>
    );
};
