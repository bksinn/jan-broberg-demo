import React from 'react';
import ReactPlayer from 'react-player/youtube'
import { InView } from 'react-intersection-observer';

export default function TedXVideo() {
    return(
        <React.Fragment>
        <InView as="div" onChange={(inView, entry) => console.log("TedX Video")}>
            <div className='player-wrapper tedx'>
                <ReactPlayer
                    className='react-player'
                    url='https://www.youtube.com/watch?v=shycFdL05b0'
                    width='100%'
                    height='100vh'
                    playing={true}
                    muted={true}
                    controls={true}
                    loop={true}
                />
            </div>
        </InView>
    </React.Fragment>
    );
}