import React from 'react'
import Question from './Question'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'


const Sectiontwo = () => {
    const questions = [' - Did you have an investment?', ' - how much was the investment?']
    const answer1 = ['YES ', 'NO']
    const show = { two: false, three: false }
    const [answerone, setAnswerone] = React.useState('')

    console.log(answerone);

    return (
        <>

            <h2>• Section(2):</h2>
            <Question questions={questions} answer1={answer1} show={show} setAnswerone={setAnswerone}></Question>
            <p>{questions[1]}</p>
            <div class="input-group mb-3">
                <span class="input-group-text">$</span>
                <span class="input-group-text">0.00</span>
                <input type="text" class="form-control" />
            </div>
            <br></br>
            <Button variant="outline-success">submit</Button>
            <br></br>
            <Link to="/"> <Button variant="primary" size="sm" active>
                HOME
            </Button></Link>

        </>
    )
}

export default Sectiontwo
