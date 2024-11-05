import { icons32 } from "Images/aseets_icon32";
import {MenuItem} from "../types"

const menuItems: MenuItem[] =[
    {src: icons32.event32, name:"Calendar", description:"이달의 신작도서"},
    {src: icons32.ai32, name:"AI", description:"추천"},
    {src: icons32.book32, name:"Book", description:"장르 소설"},
    {src: icons32.rank32, name:"Best", description:"베스트"},
    {src: icons32.fire32, name:"Hot", description:"소식지"},
    {src: icons32.talk32, name:"Talk", description:"소통 공간"}
 ]

const menubar:React.FC = () => {
    return(
        <div className="menu_area">
            <div className="menu_wrap">
                <ul className="menu_list">
                    {menuItems.map((item,index)=>(
                        <li className="menu_item" key={index}>
                            <a href="/test" className="link_service">
                                <div className="link_service_item">
                                    <img alt={`link_icon${index+1}`} 
                                        src={item.src} 
                                        className="link_service_icon"
                                    />
                                    <span className="link_text">
                                        {item.name}|{item.description}
                                    </span>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default menubar;

