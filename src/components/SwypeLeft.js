import React, {useState} from 'react';
import { Gallery, PanelHeader } from "@vkontakte/vkui";
import SwypeRight from './SwypeRight';

const SwypeLeft = () => {
     const [state, setState] = useState([
      {id: 1, title: 'left panel 1'},
      {id: 2, title: 'left panel 2'},
   
    ]);
    console.log(state)
    return (
        <div>
        <Gallery slideWidth="100vw" slideHeight="100vh" align="center" className="Column__list">
        {
              state.map((t, i) => (
               <div className="state">
                   <p>{t.title}</p>
                   <p>{t.id}</p>
               </div>
              ))
            }     
            <div>
              <SwypeRight/>
              </div>   
        </Gallery> 
        </div>
    )
}

export default SwypeLeft;