import React from 'react'
import './style.css'



function App() {
    return(
        <div>
            <div className='form'>
                <form action="">
                    <p>FirstName</p>
                    <input className='input' type="text" placeholder='FirstName' /><br />
                    <p>LastName</p>
                    <input className='input' type="text" placeholder='LastName' />
                    <br />
                    <p>Password</p>
                    <input className='input' type="password" placeholder='Password' />
                    <br />
                    <br />
                    <input type="submit" />
                    <br />
                </form> 
            </div>
        {/* <h1 style={{ textAlign: "center" }}>Kunal Arya</h1> */}
        </div>
    );
}

export default App;