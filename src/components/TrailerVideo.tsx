import React, {useState} from 'react';
import ReactPlayer from 'react-player/youtube'
import { useInView } from 'react-intersection-observer';
import { InView } from 'react-intersection-observer';


export default function TrailerVideo() {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 200,
      });

    const [isPlaying, setPlay] = useState(false);
    const [isMuted, setMute] = useState(true);

    const playVideo = (inview: boolean, ent: any) => {
        if (inview) {
            setPlay(false);
        }
        else {
            setPlay(false);
        }
        console.log(ent)
        console.log('Inview:', inview);
        console.warn("IS PLAYING " + isPlaying);
        console.warn("IS MUTED " + isMuted)
      };

    return (
        <React.Fragment>
            <InView as="div" onChange={(inView, entry) => playVideo(inView, entry)}>
                <div className='player-wrapper trailer'>
                    <ReactPlayer
                        className='react-player'
                        url='https://www.youtube.com/watch?v=NLC-Fgfz6n4'
                        width='100%'
                        height='100vh'
                        playing={false}
                        muted={true}
                        controls={true}
                        loop={true}
                    />
                </div>
            </InView>
        </React.Fragment>
    );
}