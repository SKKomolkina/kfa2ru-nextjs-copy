import cls from './Video.module.scss'
import {useRef, useState} from "react";

export const Video = () => {
    const [play, setPlay] = useState(false)
    const videoRef = useRef(null)

    const handleVideoPlay = () => {
        videoRef.current.play()
        setPlay(true)
    }

    const handleVideoStop = () => {
        videoRef.current.pause()
        setPlay(false)
    }

    return (
        <div className={cls.section}>
            <video poster={'../../images/1650/video/image.png'} ref={videoRef} className={cls.video}>
                <source src={'../../images/1650/video/video.mp4'} type={'video/mp4'}/>
            </video>

            <div className={cls.shadow}/>

            <svg onClick={handleVideoPlay} className={play ? cls.iconHidden : cls.icon} width="40" height="40"
                 viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="19.5" stroke="white"/>
                <path
                    d="M26.6293 19.4676C27.5733 20.0545 27.5733 21.4284 26.6293 22.0153L17.9726 27.3977C16.9734 28.019 15.6806 27.3005 15.6806 26.1239V15.3591C15.6806 14.1825 16.9734 13.4639 17.9726 14.0852L26.6293 19.4676Z"
                    stroke="#91FF6A"/>
            </svg>

            <svg onClick={handleVideoStop} className={play ? cls.icon : cls.iconHidden} width="40" height="40"
                 viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="19.5" stroke="white"/>
                <rect x="13.2969" y="13.3008" width="4.6" height="13.4" rx="2.3" stroke="#91FF6A"/>
                <rect x="22.0938" y="13.3008" width="4.6" height="13.4" rx="2.3" stroke="#91FF6A"/>
            </svg>

            <div className={cls.textContainer}>
                <p className={cls.title}>Shadowplay</p>
                <p className={cls.text}>
                    Записывайте и&nbsp;делитесь с&nbsp;друзьями своими видео, скриншотами и&nbsp;прямыми трансляциями
                    игрового процесса.
                </p>
            </div>
        </div>
    );
};
