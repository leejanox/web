import React,{useState} from "react";
import { bannerImgs } from "Images/bannerImgs";
import { BannerItem } from "types";

const bannerItems:BannerItem [] =bannerImgs.map((imgSrc)=> ({
    src: imgSrc
}));
    
const Carousel:React.FC= () => {

    //상태 설정
    //현재 배너 -> 버튼 누르면 현재 배너 = 이전or다음 배너로 설정
    const [currIndex,setCurrIndex] = useState(0);
    const [count,setCount] =useState(1);

    const prevIndex = (currIndex - 1 + bannerItems.length)% bannerItems.length;
    const nextIndex = (currIndex + 1) % bannerItems.length;

    //이전 배너로 이동
    const setPrev = () =>{
        setCurrIndex(prevIndex);
        setCount((prevCount)=>(prevCount > 1 ? prevCount -1 : bannerItems.length));
    };
    //다음 배너로 이동
    const setNext = () =>{
        setCurrIndex(nextIndex);
        setCount((prevCount)=>(prevCount < bannerItems.length ? prevCount+1 :1));
    };

    return(
        <div /*배너 들어갈 전체 영역*/ className="main_banner_area">
            <button className="btn_prev" onClick={setPrev}>prev button</button>
                <div /*슬라이더가 보여지는 부분*/className="banner_wrap">
                    <div /*배너 전체묶음 : x 축 기준으로 이동*/className="banner_group">
                        <React.Fragment key={`group_${currIndex}`}>
                            <div /*이전 배너*/className="prev_banner">
                                <img alt={`banner_${prevIndex}`} src={bannerItems[prevIndex].src} className="prev_content"/>
                            </div>
                            <div /*현재 배너*/className="curr_banner">
                                <img alt={`banner_${currIndex}`} src={bannerItems[currIndex].src} className="curr_content"/>
                            </div>
                            <div /*다음 배너*/className="next_banner">
                                <img alt={`banner_${nextIndex}`} src={bannerItems[nextIndex].src} className="next_content"/>
                            </div>
                        </React.Fragment>
                    </div>
                </div>
                <div /*배너 카운트 그룹*/className="banner_count_group">
                    <span /*현재 배너 순서*/ className="banner_count_text">
                            {`${count}|${bannerItems.length}`}
                    </span>
                </div>
            <button className="btn_next" onClick={setNext}>next_button</button>
        </div>
    );
}

export default Carousel;