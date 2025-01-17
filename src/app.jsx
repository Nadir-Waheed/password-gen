import React from 'react';
import { FaClipboard } from 'react-icons/fa';
import { useForm } from "./useForm";

function App(){

    const[values,setValues] = useForm({
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
                    <label htmlFor="length">length</label>
                    <input type="number" id="length"min={6} max={25}
                    name="length" value = {values.length} onChange={setValues}/>
                   </div>
                   <div className="field">
                    <label htmlFor="uppercase">uppercase</label>
                    <input type="checkbox"id = "uppercase"
                    name = "uppercase"
                    checked = {values.uppercase}
                    onChange = {setValues}
                    />
                   </div>
                   <div className="field">
                    <label htmlFor="lowercase">lowercase</label>
                    <input type="checkbox"id = "lowercase"
                    name= "lowercase" checked = {values.lowercase} onChange = {setValues}              
                    />
                   </div>
                   <div className="field">
                    <label htmlFor="number">number</label>
                    <input type="checkbox"id = "number"
                    name = "number" checked={values.number} onChange={setValues}
                    />
                   </div>
                   <div className="field">
                    <label htmlFor="symbol">symbol</label>
                    <input type="checkbox"id = "symbol"
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