import React from 'react';
import { FaClipboard } from 'react-icons/fa';

function App(){
    return(
        <section>
          <div className="container">
            <form id="pg-form">
                <div className="result">
                    <input type="text" id="result"
                    placeholder="Minimum 6 characters"readOnly/>
                    <div className="clipboard">
                        <FaClipboard></FaClipboard>

                    </div>
                </div>
                <div>
                   <div className="field">
                    <label htmlFor="length">Length</label>
                    <input type="number" id="Length"min={6} max={25}/>
                   </div>
                </div>
            </form>
            </div>  
        </section>
    )
}
export default App;