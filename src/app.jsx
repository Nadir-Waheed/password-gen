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

                    </div>
                </div>
            </form>
            </div>  
        </section>
    )
}
export default App;