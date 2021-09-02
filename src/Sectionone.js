import React from 'react'
import Question from './Question'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const Sectionone = () => {
    const answer1 = ['B2C', 'B2B', 'both']
    const answer2 = ['YES ', 'NO']
    const questions = [' - Is your business model B2C or B2B or both?', ' - Do you target all age brackets?', ' - Do you target all industries?']
    const [answerone, setAnswerone] = React.useState('')
    const [show, setShow] = React.useState({ two: true, three: true })
    console.log(answerone, show);

    React.useEffect(() => {
        if (answerone === 'B2B') {
            setShow({ two: true, three: false })
        }
        if (answerone === 'B2C') {
            setShow({ two: false, three: true })
        }
        if (answerone === 'both') {
            setShow({ two: true, three: true })
        }

    }, [answerone])

    return (
        <>
            <h2>• Section(1):</h2>
            <Question questions={questions} answer1={answer1} answer2={answer2} show={show} setAnswerone={setAnswerone} > </Question>


            <Link to="/sectiontwo"><Button variant="primary" size="lg" active>
                CONTINUE
            </Button></Link>
        </>
    )
}

export default Sectionone
