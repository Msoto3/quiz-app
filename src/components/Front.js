import React from "react"
export default function Front (props){
    return(
        <main className="front-main">
            <h1>Quizzical</h1>
            <h2>When finished, the correct answer will light up green.</h2>
            <button onClick={props.startQuiz}>Start Quiz</button>
        </main>
    )
}