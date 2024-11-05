import { bannerImgs } from "Images/bannerImgs";
import { BannerItem } from "types";
import React from "react";

const bannerItems:BannerItem [] =bannerImgs.map((imgSrc)=> ({
    src: imgSrc
    }));

const Banner:React.FC = () => {
    return(
            <div /*슬라이더가 보여지는 부분*/className="banner_wrap">
                <div /*배너 전체묶음 : x 축 기준으로 이동*/className="banner_group">
                    {bannerItems.map((item,currIndex)=>{
                        
                        const prevIndex = (currIndex - 1 + bannerItems.length)% bannerItems.length;
                        const nextIndex = (currIndex + 1 + bannerItems.length) % bannerItems.length;

                        return(
                            <React.Fragment key={`group_${currIndex}`}>
                                <div className="prev_banner">
                                    <img alt={`banner_${prevIndex}`} src={bannerItems[prevIndex].src} className="prev_content"/>
                                </div>
                                <div className="curr_banner">
                                    <img alt={`banner_${currIndex}`} src={bannerItems[currIndex].src} className="curr_content"/>
                                </div>
                                <div className="next_banner">
                                    <img alt={`banner_${nextIndex}`} src={bannerItems[nextIndex].src} className="next_content"/>
                                </div>
                            </React.Fragment>
                        );
                    })}
                </div>
            </div>
    );
}

export default Banner;