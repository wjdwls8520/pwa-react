import { useEffect, useState } from "react";

export default function TimeText() {

    const htmlTag = [
        "<span class='big'>사람</span><span class='tiny'>과 </span><span class='big'>사람</span><span class='tiny'>의 연결</span>", 
        "<span class='big'>상상</span><span class='tiny'>과 </span><span class='big'>현실</span><span class='tiny'>을 잇는</span>",
        "<span class='big'>디지털 플랫폼 </span><span class='tiny'>건축가</span>",
        "<span class='big'>KVR 인터랙티브 </span><span class='tiny'>입니다</span>"
      ]
    
      let [mainText, setMainText] = useState(htmlTag[0])
      
      let i = 0;
      useEffect(()=> {
        setInterval(function(){
          if(i<4){
            setMainText(htmlTag[i]);
            i++;
          }else if(i == 4) {
            // clearInterval(timer)
            i=0;
            if(i<4) {
              setMainText(htmlTag[i]);
               i++;
            }
          }
        }, 3800)
       
      }, [])

    return(
        <p className='main_txt' dangerouslySetInnerHTML={{ __html : mainText }} />
    )
}