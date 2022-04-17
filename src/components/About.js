import React,{useState} from 'react';

export default function About()  {






   const [myStyle, setmyStyle] = useState({
    color: 'black',
    backgroundColor :'white'

  }) 
  const [btntext,setBtnText]= useState('enable dark mode')
 const  togglestyle= ()=>{
    if(myStyle.color ==='black'){
      setmyStyle({
        color: 'white',
    backgroundColor :'black',
    border:'3px solid white'

      })
      setBtnText("Enable light mode")
    }

    else {
      setmyStyle({
        color: 'black',
    backgroundColor :'white',
    border:'1px solid white'
      })
      setBtnText("Enable dark mode")
    }
  }
  
    return (<div className='container' style={myStyle}>
        <h1 className="my-2">About us</h1>
        <div className="accordion" id="accordionExample" style={myStyle}>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button"style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Working 
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>How this app works.</strong>  Actually this app uses javascript and react js to work<code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button"style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Uses
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>Uses of this aap.</strong> This app is used to manipulate your text by which you can convert your text in upper class or to lower class also you can remove extra spaces you can also check tyhe number of words, characters and sentences  <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button"  style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
{<div className='container my-3'>
<button onClick={togglestyle}  type='button' className="btn btn-primary my- 5">{btntext}</button></div>}
</div>
    )
    }

