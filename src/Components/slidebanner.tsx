import { bannerImgs } from "Images/bannerImgs";
import { BannerItem } from "types";
import React,{useState} from "react";

const bannerItems:BannerItem [] =bannerImgs.map((imgSrc)=> ({
    src: imgSrc
}));

const SlideBanner:React.FC = () => {

    const [currIndex, setCurrIndex] = useState(0);
    //마우스 시작 위치 = startX
    const [startX,setStartX] = useState(0);
    //슬라이드 상태 확인
    const [isSlide,setIsSlide] =useState(false);

    const prevIndex = (currIndex - 1 + bannerItems.length) % bannerItems.length;
    const nextIndex = (currIndex + 1) % bannerItems.length;

    //이벤트가 일어남 -> isSlide = true, 이벤트 시작 위치 -> screenX 로 지정
    const StartEvent = (e:React.MouseEvent<HTMLDivElement>) =>{
        setIsSlide(!isSlide);
        setStartX(e.screenX);
    }

    //슬라이드가 true 일때 상태 변화 감지 

    const MoveSlide = (e:React.MouseEvent<HTMLDivElement>) =>{

        //마우스 이동 거리 = 이벤트 시작 위치 - 이벤트 종료 위치
        const diffX = e.screenX - startX;

        //마우스 이동 거리 > 80px 일때 , 이전 배너로 슬라이드    
        //마우스 이동 거리 < -80px 일때 , 다음 배너로 슬라이드 

    }

    //아무것도 전달 되지 않을때 = 이벤트 종료
    const EndEvent = () =>{
        setIsSlide(isSlide);
    }


    return(
            <div /*슬라이더가 보여지는 부분*/className="slide_banner_wrap">
                <div /*배너 전체묶음 : x 축 기준으로 이동*/ className="slide_banner_group">
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