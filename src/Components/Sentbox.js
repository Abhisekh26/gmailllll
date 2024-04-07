import React from "react";
import { useSelector } from "react-redux";

function Sentbox() {
  const selector=useSelector((state)=>state.emailState.items)
  console.log(selector)
  return (
    <div style={{ marginLeft: '28rem', marginRight: 'auto', maxWidth: '800px', padding: '20px' }}>
          hi
    </div>
  )
}

export default Sentbox;
