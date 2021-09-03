import React from 'react'
import Question from './Question'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'



const Sectiontwo = () => {
    //data for sectiontwo
    const questions = [' - Did you have an investment?', ' - how much was the investment?']
    const answer1 = ['YES ', 'NO']


    const show = { two: false, three: false }
    const [showinput, setShowinput] = React.useState(true)
    const [answerone, setAnswerone] = React.useState('')
    const [money, setMoney] = React.useState(0)

    const handleSubmit = () => {

    }
    React.useEffect(() => {
        if (answerone === 'NO') {
            setShowinput(false)
        }
    }, [answerone])

    console.log(answerone, money);

    return (
        <>

            <h2>• Section(2):</h2>
            <Question questions={questions} answer1={answer1} show={show} setAnswerone={setAnswerone}></Question>
            <p>{questions[1]}</p>
            <InputGroup className={showinput ? 'showinput' : 'greyoutinput'}>
                <InputGroup.Text>$</InputGroup.Text>
                <FormControl onChange={(e) => setMoney(e.target.value)} aria-label="Amount (to the nearest dollar)" />

            </InputGroup>
            <br></br>
            <Button variant="outline-success" type="submit" onClick={handleSubmit}>submit</Button>
            <br></br>
            <Link to="/"> <Button variant="primary" size="sm" active>
                HOME
            </Button></Link>

        </>
    )
}

export default Sectiontwo
