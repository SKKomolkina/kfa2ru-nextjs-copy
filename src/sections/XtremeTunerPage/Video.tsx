import cls from './Video.module.scss'
import {useRef, useState} from "react"

export const Video = () => {
    const videoRef = useRef(null)
    const handlePlayVideo = () => {
        videoRef.current.play()
        setPlay(true)
    }

    const handleStopVideo = () => {
        videoRef.current.pause()
        setPlay(false)
    }

    const [play, setPlay] = useState(false)

    return (
        <div className={cls.section}>
            <svg onClick={() => handleStopVideo()} className={play ? cls.buttonStop : cls.button} width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="13.5" cy="13.5" r="13.25" stroke="white" strokeWidth="0.5"/>
                <path d="M16.9539 16.9512L9.60156 9.60156M16.9539 9.60156L9.60156 16.9512" stroke="white"
                      strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

            <svg onClick={() => handlePlayVideo()} className={play ? cls.button : cls.buttonPlay} width="50" height="50" viewBox="0 0 50 50"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <circle cx="25" cy="25" r="24.6168" stroke="white" strokeWidth="0.766467"/>
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M31.7846 26.2952C32.8092 25.7057 32.8092 24.2274 31.7846 23.6379L21.3912 17.6574C20.3693 17.0694 19.0937 17.807 19.0937 18.9861V30.947C19.0937 32.1261 20.3693 32.8637 21.3912 32.2757L31.7846 26.2952Z"
                      fill="white"/>
            </svg>

            <video ref={videoRef} className={cls.video}>
                <source src={'./videos/extreme-tuner/video2.mp4'} type={'video/mp4'}/>
            </video>
        </div>
    );
};
