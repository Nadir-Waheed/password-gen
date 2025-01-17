import React from 'react';
import { FaClipboard } from 'react-icons/fa';
import {userForm} from "./useForm"
function App(){

    const[values,setValues] = userForm({
        length: 6,
        uppercase:true,
        lowercase:true,
        number:true,
        symbol:true,


    });
    
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
                    <input type="number" id="Length"min={6} max={25}
                    name="length" value = {values.length} onCHange={setValues}/>
                   </div>
                   <div className="field">
                    <label htmlFor="Uppercase">Uppercase</label>
                    <input type="checkbox"id = "Uppercase"
                    name = "uppercase"
                    checked = {values.uppercase}
                    onChange = {setValues}
                    />
                   </div>
                   <div className="field">
                    <label htmlFor="Lowercase">Lowercase</label>
                    <input type="checkbox"id = "Lowercase"
                    name= "lowercase" checked = {values.lowercase} onChange = {setValues}              
                    />
                   </div>
                   <div className="field">
                    <label htmlFor="Number">Number</label>
                    <input type="checkbox"id = "Number"
                    name = "number" checked={values.number} onChange={setValues}
                    />
                   </div>
                   <div className="field">
                    <label htmlFor="Symbol">Symbol</label>
                    <input type="checkbox"id = "Symbol"
                    name = "symbol" checked={values.symbol} onChange={setValues} />
                   </div>
                </div>
                <button type="submit">Generate password</button>
            </form>
            </div>  
        </section>
    )
}
export default App;