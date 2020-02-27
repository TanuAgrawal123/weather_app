import React from 'react';

const Forms =props =>
    (
            <div>
            <form onSubmit={props.getweather}>
                <input type="text" name="city" placeholder="City"/>
                    <input type="text" name="country" placeholder="Country"/>
                    <button>Get Answer</button>
            </form>
            </div>
        )
    



export default Forms;
