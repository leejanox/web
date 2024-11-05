import { icons24 } from "Images/assets_icon24";
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
                            <img alt="dropdown_icon" src={icons24.dropdown24} className="dropdown_icon"/>
                        </div>
                        <div /*검색어 제출 버튼 : 돋보기 아이콘*/className="search_button">
                            <img alt="search_icon" src={icons24.search24} className="search_icon"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;