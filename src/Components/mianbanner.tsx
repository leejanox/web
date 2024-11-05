const MainBanner = () => {
    return(
        <div /*배너 공간*/ className="main_banner_area">

            <div /*배너 컨테이너*/ className="main_banner_container">

                <div /*배너 이동 버튼 공간*/ className="banner_button_area">

                    <div /*배너 버튼 그룹*/ className="banner_button_wrap">

                        <button /*이전 버튼*/ className="prev_button"></button>

                        <button /*다음 버튼*/ className="next_button"></button>
                    </div>
                </div>

                
                <div /*배너 카운트 공간*/ className="banner_count_area">

                    <div /*배너 카운트*/ className="banner_count_wrap">

                        <div /*카운트*/ className="banner_count"></div>

                        <span /*남은 배너 수*/ className="len_banner">
                            
                        </span>
                    </div>
                </div>

                <div /*이전 배너 img*/ className="prev_banner"></div>

                <div /*현재 배너 img*/ className="curr_banner"></div>

                <div /*다음 배너 img*/ className="next_banner"></div>

            </div>
        </div>
    );
}

export default MainBanner;