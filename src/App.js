
// import React, {useState, useEffect, useRef} from 'react';
import { PanelHeader } from "@vkontakte/vkui";
// import SwypeRight from "./components/SwypeRight";
import SwypeLeft from "./components/SwypeLeft";

// import "@vkontakte/vkui/dist/vkui.css";
import "./App.css";
 
const App = () => {
  // const [state, setState] = useState([
  //     {id: 1, title: 'left panel 1'},
  //     {id: 2, title: 'left panel 2'},
  //     {id: 4, title: 'left panel 3'},
  //     {id: 5, title: 'left panel 5'},
  //     {id: 6, title: 'left panel 6'},
  //     {id: 3, title: 'left panel 7'},
    
  //   ]);
    // const [newState, setNewState] = useState({
    //   isScrolling: false,
    //   clientX: 0,
    //   scrollX: 0
    // });
    // useEffect(() => {
    //   document.addEventListener('onmousedown', onMouseDown)
    //   document.addEventListener('onmouseup', onMouseUp)
    //   document.addEventListener('onmousemove', onMouseMove)
    //   return () =>  {
    //     document.removeEventListener('onmousedown', onMouseDown)
    //     document.removeEventListener('onmouseup', onMouseUp)
    //     document.removeEventListener('onmousemove', onMouseMove)
    //   }
    // },[])
    
    //   let ref = useRef()
     
    
    //   const onMouseDown = (e) => {
    //     if(ref && ref.current && !ref.current.contains(e.target)) {
    //       return
    //     }
    //     e.preventDefault()
    //     setNewState({
    //       ...newState,
    //       isScrolling: true,
    //       clientX: e.clientX
    //     })
    //   }
    //   const onMouseUp = (e) => {
    //     if(ref && ref.current && !ref.current.contains(e.target)) {
    //       return
    //     }
    //     e.preventDefault()
    //     setNewState({
    //       ...newState,
    //       isScrolling: false,
    //     })
    //   }
    //   const onMouseMove = (e) => {
    //     if(ref && ref.current && !ref.current.contains(e.target)){
    //       return
    //     }
    //     console.log(e)
    //     e.preventDefault()
    //     const { clientX, scrollX, isScrolling } = newState
    //     console.log(clientX, scrollX,  ref.current.scrollLeft)
    //     if(isScrolling) {
    //       ref.current.scrollLeft = scrollX + e.clientX - clientX
    //       setNewState({
    //         ...newState,
    //         scrollX: scrollX + e.clientX - clientX,
    //         clientX: e.clientX,
    //         // isScrolling: true
    //       })
    //     }
       
    
    //   }
   
    
      return (
        <div className="App" >
             {/* <div 
          className="app"
          ref={ref}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
          > 
            {
              state.map((t, i) => (
                <div key={t.id} className="state" >
                  {t.title}    
                </div>
              ))
            }
             
         </div> */}
         <div>
         <PanelHeader  >
        <span className="Column_head">Доска - "1"</span>
      </PanelHeader>
              <div className="news">
              <div className="">
                <div><SwypeLeft/></div>
              </div>
              {/* <div className="">
                <div><SwypeLeft/></div>
              </div> */}
              </div>
        </div>  
       
        </div>
      );
          }

export default App;
