import hangang1 from "Images/books/HanGang.jpg"
import hangang1_2 from "Images/books/HanGangBack.jpg"
import {useState} from "react";
import "card.css"

const Card = () => {

    const [isFlipped,setIsFlipped] = useState(false);

    const handleToggle = () =>{
        setIsFlipped(!isFlipped);
    }

    return(
        <div className="flex justify-center items-center px-6 py-6 
                        rounded-lg ring-2 ring-inset ring-gray-400
                        w-5/12 h-3/4 shadow-sm bg-white">
            <div className="card-container perspective"
                 onClick={handleToggle}
            >
                <div className={`card ${isFlipped ? "flipped" : ""}`}>    
                    <div className="card-front w-full h-full overflow-hidden">
                        <img alt="소년이 온다" src={hangang1} className="w-full h-full mx-auto mh-auto object-contain"/>
                    </div>
                    <div className="card-back w-full h-full overflow-hidden">
                        <img alt="뒷판" src={hangang1_2} className="w-full h-full mx-auto mh-auto object-contain"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;