import { useState } from "react"
import { Link } from "react-router-dom";

export default function Menu() {

    let [on, setOn] = useState('false');

    return(
        <>
            {/* 햄버거 */}
            <div className={`menu_bar ${on == true ? 'on' : null}`} onClick={()=> { 
                on == true ? setOn(false) : setOn(true) 
            }}>
                <div className="top_bar bar"></div>
                <div className="mid_bar bar"></div>
                <div className="bottom_bar bar"></div>
            </div>
            <MenuWrap on={on} setOn={setOn} />
        </>
    )
}

let MenuWrap = ({ on, setOn })=> {

    return (
        <nav className="nav_wrap">
            <div className={`m_gnb_wrap ${on == true ? 'on' : null}`}>
                <div className="nav_bg nav_bg_top"></div>
                <div className="nav_bg nav_bg_right"></div>
                <div className="nav_bg nav_bg_left"></div>
                <div className="nav_bg nav_bg_bottom"></div>
                <ul className={`m_gnb ${on == true ? 'on' : null}`}>
                    <li className="gnb_list">
                        <Link className="link" to="/" onClick={()=> {setOn(false)}}>Home</Link>
                    </li>
                    <li className="gnb_list">
                        <Link className="link" to="/about" onClick={()=> {setOn(false)}}>About</Link>
                    </li>
                    <li className="gnb_list">
                        <Link className="link" to="/works" onClick={()=> {setOn(false)}}>Works</Link>
                    </li>
                    <li className="gnb_list">
                        <Link className="link" to="/contact" onClick={()=> {setOn(false)}}>Contact us</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}