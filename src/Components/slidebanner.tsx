import { bannerImgs } from "Images/bannerImgs";
import { BannerItem } from "types";
import React,{useState} from "react";

const bannerItems:BannerItem [] =bannerImgs.map((imgSrc)=> ({
    src: imgSrc
    }));

const SlideBanner:React.FC = () => {

    const [isSlide,setIsSlide] = useState(false);
    const [currIndex,setCurrIndex] = useState(0);

    const HandleSlide=()=>{
        setIsSlide(!isSlide);
    }

    const prevIndex = (currIndex - 1 + bannerItems.length)% bannerItems.length;
    const nextIndex = (currIndex + 1 ) % bannerItems.length;

    const setNext=()=>{
        setCurrIndex(nextIndex);
    }

    const setPrev=()=>{
        setCurrIndex(prevIndex);
    }

    return(
            <div /*슬라이더가 보여지는 부분*/className="slide_banner_wrap">
                <div /*배너 전체묶음 : x 축 기준으로 이동*/ onChange={HandleSlide} className="slide_banner_group">
                    {bannerItems.map((item,currIndex)=>{
                        
                        return(
                            <React.Fragment key={`group_${currIndex}`}>
                                <div className="curr_slide_banner">
                                    <img alt={`banner_${currIndex}`} src={bannerItems[currIndex].src} className="curr_slide_content"/>
                                </div>
                            </React.Fragment>
                        );
                    })}
                </div>
            </div>
    );
}

export default SlideBanner;