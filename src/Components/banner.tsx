import { bannerImgs } from "Images/bannerImgs";
import { BannerItem } from "types";

const bannerItems:BannerItem [] =bannerImgs.map((imgSrc)=> ({
    src: imgSrc,
    }));

const Banner:React.FC = () => {
    return(
            <div /*슬라이더가 보여지는 부분*/className="banner_wrap">
                <div /*배너 item들 전체묶음 : x 축 기준으로 이동*/className="banner_items">
                    {bannerItems.map((item,index)=>(
                        <div className="prev_item" key={`prev_${index}`}>
                            <img src={item.src} alt={`banner_${index}`} className="prev_content"/>
                        </div>
                    ))}
                    {bannerItems.map((item,index)=>(
                        <div className="curr_item" key={`curr_${index}`}>
                            <img src={item.src} alt={`banner_${index+1}`} className="curr_content"/>
                        </div>
                    ))}
                    {bannerItems.map((item,index)=>(
                        <div className="next_item" key={`next-${index}`}>
                            <img src={item.src} alt={`banner_${index+2}`} className="next_content"/>
                        </div>
                    ))}
                </div>
            </div>
    );
}

export default Banner;