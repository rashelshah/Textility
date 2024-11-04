
import React, {useState}from 'react'

export default function About(props) {

   
    
  return (
    <div className="container" >
        <h2 style={{color: props.mode === 'light'?'black':'white'}}>About Us</h2>
        <div className="accordion" id="accordionExample">
  <div className="accordion-item" style={{backgroundColor: props.mode === 'light'?'white':'#010310', color: props.mode === 'light'?'black':'white'}}>
    <h2 className="accordion-header">
      <button className="accordion-button" style={{backgroundColor: props.mode === 'light'?'white':'#010310', color: props.mode === 'light'?'black':'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Analyze your Text
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or time.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={{backgroundColor: props.mode === 'light'?'white':'#010310', color: props.mode === 'light'?'black':'white'}}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={{backgroundColor: props.mode === 'light'?'white':'#010310', color: props.mode === 'light'?'black':'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Free To Use
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        TextUtils is a free character counter tool that provides instant character counter functionality an word count statistics for a give  text. TextUtils reports the number of characters and words . Thus it is suitable for writing text.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={{backgroundColor: props.mode === 'light'?'white':'#010310', color: props.mode === 'light'?'black':'white'}}> 
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={{backgroundColor: props.mode === 'light'?'white':'#010310', color: props.mode === 'light'?'black':'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Browser Compatible
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        This word counter software works in any web borwsers such as Chrome, Firefox, Safari and Internet Explore. It suits to count characters in facebook, blog, books, excel document, pdf document, essays etc.
      </div>
    </div>
  </div>
</div>

    </div>
  )
}
