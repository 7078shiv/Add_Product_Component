// first letter is capital in component.
// short cut for component rafc react and functional component.

import React from 'react'
import './person.css'
const Person = () => {
    let luckynumber=7;
    let randomnumber=Math.floor(Math.random()*10);
  return (
    <div style={{color:"blue",padding:"20px"}} className='person'>
        {
        randomnumber === luckynumber ? <div>
        <p>Name:shiv</p>
        <p>Age:20</p>
        <p>Location:Newdelhi</p>
        <img style={{width:"150px"}}src="https://i0.wp.com/www.galvanizeaction.org/wp-content/uploads/2022/06/Wow-gif.gif?fit=450%2C250&ssl=1" alt=" " ></img>
        <p>My Number is:{randomnumber}</p> </div>:<p>You didnt win try again  </p>
        }
    </div>

  )
}
export default Person;

