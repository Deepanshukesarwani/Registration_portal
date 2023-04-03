import React from 'react'
// import ReactDOM from 'react-dom';
// import { Link } from 'react-router-dom'
import { useNavigate} from 'react-router-dom';
import Typewriter from 'typewriter-effect'
import './homepage.css'
const Homepage = () => {
let target=document.getElementById("but_clickme")
const navigate = useNavigate();
function register(event){
  console.log('jkh');
  navigate('/form')
}
console.log(target);
  return (
    <div id='wrapper'>
      <div className="content">
        <div className="main">
          <h1 id='mainheading'>Hello & Welcome to !.. </h1>
          <div className="typing-content">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 40,
                strings: [
                  "College Musical Society ",
                  "Euphony",
                ]
              }}
            />
          </div>
<br />
          <div className="but-reg">
            <button id='but_clickme' onClick={register}>Register Here..</button>
          </div>
        </div>

      </div>
    </div>
  )

}

export default Homepage
