import { useEffect, useState } from "react";
import { Fade } from "@mui/material";

const picList = [
    '/static/aboutPagePics/cenoteCoconut.jpg',
    '/static/aboutPagePics/haGiangMountain.JPEG',
    '/static/aboutPagePics/linkedInPic.JPG',
    '/static/aboutPagePics/peggysCove.jpeg',
    '/static/aboutPagePics/skiingBaker.jpg',
    '/static/aboutPagePics/tenerifeMountain.jpeg',
]

const Pics = () => {
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
        const interval = setInterval(() => {
          setIndex((index + 1) % picList.length);
        }, 7543); 
        return () => clearInterval(interval);
      }, [index]);
  
    return (
        <Fade in={true} key={index} timeout={1000}>
            <img src={picList[index]} width={'80%'} alt="Shuffled image" />
        </Fade>
    )
  };
export default Pics;