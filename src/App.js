import React from "react"
import Front from "./components/Front"
import Quiz from "./components/Quiz"
import {nanoid} from "nanoid"

export default function App () {
    //front page
    const [start,setStart] = React.useState(false)
    function startQuiz(){
        setStart(prevState => !prevState)
    }
    //quiz
    const [questions,setQuestions] = React.useState([])
    const [check,setCheck] = React.useState(false)
   
   
    React.useEffect(() =>{
        fetch("https://opentdb.com/api.php?amount=5")
            .then(res => res.json())
            .then(data => {setQuestions(data.results.map(item =>({
                ...item,
                id:nanoid()
            })))} )
    },[])

    function gameOver(e){
        setCheck(prevState => !prevState)
    }
    function playAgain(){
        window.location.reload()
    }
  
    
   
    
    const problems = questions.map(item =>(
        <Quiz
            correct={item.correct_answer}
            incorrect={item.incorrect_answers}
            question={item.question}
            type={item.type}
            key={item.id}
            gameOver = {check}
             
        />
    ))
   
    
    return(
        !start?

        <Front
            startQuiz = {startQuiz}
         />
         :
         <main>
            <h1 className="quizzical">Quizzical</h1>
            {problems}
            {!check&&<button onClick={gameOver} className="check">Check Answers</button>}
            {check&&<button onClick={playAgain} className="check">Game Over</button>}
         </main>
    )
}
