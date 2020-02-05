import React from 'react';

function Input({textValue, updateText}) {
    return (
     <div> 
      <label>
        Type Here:
      </label>
      <form>
          <input onChange={updateText} value={textValue} type="text" name="input"></input>
      </form>
      
      </div>
    )
}



export default Input;