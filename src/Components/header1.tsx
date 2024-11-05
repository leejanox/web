import { profile34,pending34,alram34,unalram34 } from "Images/assets_icon34";
import logo from "Images/Rocket.svg"

const Header1 = () => {
    return(
        <div  /*헤더 전체 1280px 로 고정*/ className="wrap"> 

            <div /*헤더 위 : 로고 + 주요 기능(알림 + 프로필 + 개인메뉴) | 비로그인일때 - sign in, sign up*/ className="header_top">

                <div /*왼쪽*/className="header_top_logo">
                    <a href="/test" className="logo_link">
                        <img alt="Logo" src={logo} className="logo_icon"/>
                    </a>
                    <span className="logo_text">
                        우주까지가는거야
                    </span>
                </div>

                <div /*로그인*/className="header_top_user">

                    <div /*알림*/className="alram_icon">
                        <img alt="alram_icon" src={alram34} className="alram_icon"/>
                    </div>
                    <div /*알림 도착*/className="alram_icon">
                        <img alt="unread_alram_icon" src={unalram34} className="unread_alram_icon"/>
                    </div>


                    <div /*프로필 아이콘*/className="profile_icon">
                        <img alt="profile_icon" src={profile34} className="profile_icon"/>
                    </div>

                    <div /*유저 제공 메뉴판*/className="user_menu_icon">
                        <img alt="user_menu_icon" src={pending34} className="user_menu_icon"/>
                    </div>
                </div>

                <div /*비로그인 : 로그인 , 회원가입*/className="header_top_guest">

                    <div /*로그인 창*/>
                        <a href="/test" className="guest_link_service">
                            <span className="sign_in_text">sign in</span>
                        </a>
                    </div>

                    <div /*회원가입 창*/>
                        <a href="/test" className="guest_link_service">
                            <span className="sign_up_text">sign up</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header1;