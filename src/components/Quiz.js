import React from "react"

export default function Quiz (props){
    const [isHeld,setHeld] = React.useState(false)
    function holdAnswer(e){
        isHeld?e.target.style.backgroundColor="#587da1":e.target.style.backgroundColor="white"
        setHeld(prevState => !prevState)
        
    }
    if(props.gameOver){
        checkAnswers()
    }
    function checkAnswers(){
        const ans1 = document.querySelectorAll(".ans1")
        for(let i=0;i<ans1.length;i++){
            ans1[i].style.backgroundColor="#59E391"
        }

    }
    
   return(
       <div className="questions">
            {
                props.type==="multiple"
                ?
                <div className="multiple-choice">
                    <h3>{props.question}</h3>
                    <button className="ans1" onClick={holdAnswer} >{props.correct}</button>
                    <button className="ans2" onClick={holdAnswer} >{props.incorrect[0]}</button>
                    <button className="ans3" onClick={holdAnswer} >{props.incorrect[1]}</button>
                    <button className="ans4" onClick={holdAnswer} >{props.incorrect[2]}</button>
                </div>
                :
                <div className="true-or-false">
                    <h3>{props.question}</h3>
                    <button className="ans1" onClick={holdAnswer} >{props.correct}</button>
                    <button className="ans2" onClick={holdAnswer} >{props.incorrect[0]}</button>
                </div>
                
            }
            
       
       
       </div>
   )
}