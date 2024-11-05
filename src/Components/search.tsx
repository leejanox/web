import { fire32,event32,talk32,book32,rank32,ai32 } from "Images/aseets_icon32";
import { search24,dropdown24 } from "Images/assets_icon";
import logo from "Images/Rocket.svg"

const Search = () => {
    return (
        <div /*헤더 아래 : 검색 + 바로가기 메뉴*/className="header_bottom">

            <div /*검색창 들어갈 공간*/className="search_Area">

                <div /*검색 UI 틀 */className="search-group">
                    <div /*내부 요소 : 로고 - 검색 input - 검색어 저장 - 돋보기*/className="search_inner">

                        <div /*검색 창 안의 로고*/className="search_inner_logo">
                            <a href="/test" className="logo_link">
                                <img alt="Logo" src={logo} className="logo_icon"/>
                            </a>
                        </div>

                        <form /*검색어 입력받을 공간*/className="search"></form>

                        <div /*검색어 저장 : 드롭버튼*/className="search_save">
                            <img alt="dropdown_icon" src={dropdown24} className="dropdown_icon"/>
                        </div>

                        <div /*검색어 제출 버튼 : 돋보기 아이콘*/className="search_button">
                            <img alt="search_icon" src={search24} className="search_icon"/>
                        </div>
                    </div>
                </div>
            </div>

            <div /*검색 창 밑 메뉴*/className="menu_Area">

                <ul className="short_list">

                    <li className="short_item">
                        <a href="/test" className="link_service">
                            <div /*신작도서*/className="service_icon_name">
                                <img alt="service_icon" src={event32} className="service_icon"/>
                                <span className="service_name">Calendar|이달의 신작도서</span>
                            </div>
                        </a>
                    </li>

                    <li className="short_item">
                        <a href="/test" className="link_service">
                            <div /*AI추천*/className="service_icon_name">
                                <img alt="service_icon" src={ai32} className="service_icon"/>
                                <span className="service_name">AI|추천</span>
                            </div>
                        </a>
                    </li>

                    <li className="short_item">
                        <a href="/test" className="link_service">
                            <div /*도서 정보*/className="service_icon_name">
                                <img alt="service_icon" src={book32} className="service_icon"/>
                                <span className="service_name">Book|도서</span>
                            </div>
                        </a>
                    </li>

                    <li className="short_item">
                        <a href="/test" className="link_service">
                            <div /*도서 베스트 순위*/className="service_icon_name">
                                <img alt="service_icon" src={rank32} className="service_icon"/>
                                <span className="service_name">BookRank|베스트 순위</span>
                            </div>
                        </a>
                    </li>

                    <li className="short_item">
                        <a href="/test" className="link_service">
                            <div /*도서 관련 소식지*/className="service_icon_name">
                                <img alt="service_icon" src={fire32} className="service_icon"/>
                                <span className="service_name">Hot|소식지</span>
                            </div>
                        </a>
                    </li>

                    <li className="short_item">
                        <a href="/test" className="link_service">
                            <div /*유저 소통공간(톡톡)*/className="service_icon_name">
                                <img alt="service_icon" src={talk32} className="service_icon"/>
                                <span className="service_name">Talk|소통 공간</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Search;