import React from 'react';
import {render} from 'react-dom'

function Popup(){
    return(
        <div>
            <h1>Howdy</h1>
        </div>
    );
}

render(<Popup />, document.getElementById("react-root"));