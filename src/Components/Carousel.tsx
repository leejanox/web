import Banner from "./banner";

const Carousel= () => {
    return(
        <div /*배너 들어갈 전체 영역*/ className="main_banner_area">
            <button className="btn_prev">prev button</button>
            <Banner/>
            <button className="btn_next">next_button</button>
        </div>
    );
}

export default Carousel;