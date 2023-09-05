import { Timeline, Tween } from "react-gsap";

export default function Box() {

    return(
        <div>
            <h2>react-gsap Animation</h2>
            <div className="wrap">
                <Timeline
                    target={<div className="box"></div>}
                >
                    <Tween from={{ opacity: 0 }} to={{opacity: 1}} duration={1} />
                    <Tween to={{ x: '200px' }} />
                </Timeline>
            </div>
        </div>
    )
}