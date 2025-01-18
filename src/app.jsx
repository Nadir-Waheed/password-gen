import React, { useState } from 'react';
import { FaClipboard } from 'react-icons/fa';
import { useForm } from "./useForm";
import { getRandomChar, getSpecialChar } from "./utils";

function App(){

    const[values,setValues] = useForm({
        length: 6,
        uppercase:true,
        lowercase:true,
        number:true,
        symbol:true,


    });
    const[result,setResult] = useState("");

    const fieldsArray = [
        {
        field: values.uppercase,
        getChar: ()=> getRandomChar(65,90)
        },
        {
        field: values.lowercase,
        getChar: () => getRandomChar(97,122)
        },
        {
            field: values.number,
            getChar:() => getRandomChar(48,57)
        },
        {
            field: values.symbol,
            getChar: () => getSpecialChar(),
        },
        
];


const handleOnSubmit = (e) => {
    e.preventDefault();
    let generatedPasssword = '';
    const checkedFields = fieldsArray.filter(({
        field}) => field);

        for(let i =0; i < values.length; i++){
            const index = Math.floor(Math.random()* checkedFields.length);
            const letter = checkedFields[index].getChar()

            if(letter){
                generatedPasssword += letter;
            }
        }
        if(generatedPasssword){
            setResult(generatedPasssword)
        }


}

    return(
        <section>
          <div className="container">
            <form id="pg-form" onSubmit={handleOnSubmit}>
                <div className="result">
                    <input type="text" id="result"
                    placeholder="Minimum 6 characters"readOnly
                    value ={result}/>
                    <div className="clipboard">
                        <FaClipboard></FaClipboard>

                    </div>
                </div>
                <div>
                   <div className="field">
                    <label htmlFor="length">length</label>
                    <input type="number" id="length"min={6} max={10}
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