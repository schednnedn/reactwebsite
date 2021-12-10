import React, { useState, useRef } from "react"
import Video from "../../videos/video.mp4"
import Video1 from "../../videos/video2.mp4"
import { Button } from "../ButtonElements"
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight,
} from "./HeroElements"

const HeroSection = () => {
    const [hover, setHover] = useState(false)
    const videoRef = useRef(null)

    const videoSources = [Video, Video1]
    let videoSource = videoSources[0]

    const nextVideo = (e) => {
        e.preventDefault()
        videoSource === videoSources[0]
            ? (videoSource = videoSources[1])
            : (videoSource = videoSources[0])
        videoRef.current.src = videoSource
        videoRef.current.play()
    }

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg
                    ref={videoRef}
                    autoPlay
                    muted
                    src={videoSource}
                    type="video/mp4"
                    onEnded={(e) => nextVideo(e)}
                ></VideoBg>
            </HeroBg>
            <HeroContent>
                <HeroH1>Create your perfect Diet Plan today!</HeroH1>
                <HeroP>
                    Sign Up and save your own Diet Plans and Recipes.{" "}
                </HeroP>
                <HeroBtnWrapper>
                    <Button
                        to="signup"
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary="true"
                        dark="true"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                    >
                        Get started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
