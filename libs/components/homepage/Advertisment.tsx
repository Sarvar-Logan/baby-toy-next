import React from 'react';
import useDeviceDetect from '../../hooks/useDeviceDetect';
import { Stack } from '@mui/material';

const Advertisement = () => {
  const device = useDeviceDetect();

  if (device == 'mobile') {
    return (
      <Stack className={'video-frame'}>
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        >
          <source src="/video/ads.mov" type="video/mp4" />
        </video>
      </Stack>
    );
  } else {
    return (
      <>
        <Stack className={'video-frame'}>
  
          <Stack className='video-top'>

            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              style={{ width: '50%', height: '264px', objectFit: 'cover' }}
            >
              <source src="/video/video1.mp4" type="video/mp4" />
            </video>

            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              style={{ width: '50%', height: '264px', objectFit: 'cover' }}
            >
              <source src="/video/video2.mp4" type="video/mp4" />
            </video>
          </Stack>

          <Stack className='video-bottom'>
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              style={{ width: '50%', height: '338px', objectFit: 'cover' }}
            >
              <source src="/video/video3.mp4" type="video/mp4" />
            </video>
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              style={{ width: '50%', height: '338px', objectFit: 'cover' }}
            >
              <source src="/video/video4.mp4" type="video/mp4" />
            </video>
          </Stack>

        </Stack>



      </>

    );
  }
};

export default Advertisement;
