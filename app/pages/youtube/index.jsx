import React from 'react';
import Container from '../../theme/components/base/container';
import { AspectRatio } from '../../components/shared/ui/index';

function Youtube() {
  return (
    <>
    <h1> Youtube Page</h1>
    <iframe>
      width='1280'
      height='720'
      title='Round to the World Fitness Challange 2022'
      src='https://www.youtube.com/embed/nh_NaMZKM0c'
      allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share; clipboard-write;'
    </iframe>
    </>
  )
}

export default Youtube;