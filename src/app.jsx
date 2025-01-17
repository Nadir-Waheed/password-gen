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
                   <div className="field">
                    <label htmlFor="Uppercase">Uppercase</label>
                    <input type="checkbox"id = "Uppercase" />
                   </div>
                   <div className="field">
                    <label htmlFor="Lowercase">Lowercase</label>
                    <input type="checkbox"id = "Lowercase" />
                   </div>
                   <div className="field">
                    <label htmlFor="Number">Number</label>
                    <input type="checkbox"id = "Number" />
                   </div>
                   <div className="field">
                    <label htmlFor="Symbol">Symbol</label>
                    <input type="checkbox"id = "Symbol" />
                   </div>
                </div>
                <button type="submit">Generate password</button>
            </form>
            </div>  
        </section>
    )
}
export default App;