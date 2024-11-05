import { icons34 } from "Images/assets_icon34";
import { UserIcon } from "types";
import logo from "Images/Rocket.svg"

const userIcons:UserIcon[]= icons34.map((icon34Src)=>({
    src:icon34Src,
}));

const isLogin =false;

const Header = () => {
    return(
        <div  /*헤더 전체 1280px 로 고정*/ className="header_area"> 
            <div className="header_group">
                <div className="header_left">
                    <a href="/test" className="logo_link">
                        <img alt="Logo" src={logo} className="logo_icon"/>
                    </a>
                </div>
                <div className="header_right">
                    {isLogin?(
                        <div /*로그인*/className="header_user">
                            {userIcons.map((icon,index)=>(
                                <div className="login_header" key={index}>
                                    <img alt="login_header_icon" src={icon.src} className="login_header_icon"/>
                                </div>
                            ))}
                        </div>
                    ):(
                        <div /*비로그인*/className="header_top_guest">
                            <div className="header_signin">
                                <a href="/test" className="guest_link_service">
                                    <span className="sign_in_text">sign in</span>
                                </a>
                            </div>
                            <div className="header_signup">
                                <a href="/test" className="guest_link_service">
                                    <span className="sign_up_text">sign up</span>
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Header;