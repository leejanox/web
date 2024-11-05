import { HmenuItem } from "types";

const hmenuItems:HmenuItem[] = [
    {name:"장르소설", description:"전체"},
    {name:"추리|미스터리", description:"추리/미스터리"},
    {name:"공포|스릴러", description:"공포/스릴러"},
    {name:"판타지", description:"판타지"},
    {name:"무협", description:"무협"},
    {name:"SF", description:"SF"},
    {name:"역사", description:"역사"},
    {name:"로맨스", description:"로맨스"}
];


const HMenuBar:React.FC =() => {
    return(

        <div /*헤더 밑 메뉴바*/ className="HMenuBar_area">
            <div /*메뉴바 컨테이너*/ className="HMenuBar_container">
                <ul className="Hmenu_list">
                    {hmenuItems.map((item,index)=>(
                        <li className="Hmenu_item" key={index}>
                            <a href="/test" className="category_link_service">
                                <span className="category_link_text">
                                    {item.name}|{item.description}
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default HMenuBar;