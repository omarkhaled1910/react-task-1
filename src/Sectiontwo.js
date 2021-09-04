import React from 'react'
import Question from './Question'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/esm/Container'
import Alert from 'react-bootstrap/Alert'
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
    const [alert, setAlert] = React.useState(false)

    const handleSubmit = () => {
        setAlert(true)
    }
    React.useEffect(() => {
        setTimeout(() => {
            setAlert(false)
        }, 3000);
    }, [alert])

    React.useEffect(() => {
        if (answerone === 'NO') {
            setShowinput(false)
        }
        else {
            setShowinput(true)
        }
    }, [answerone])

    console.log(answerone, money);

    return (
        <>

            {alert && <div> <Alert variant="success">
                succefully submited
            </Alert></div>}
            <h2>• Section(2):</h2>


            <Container>
                <Question questions={questions} answer1={answer1} show={show} setAnswerone={setAnswerone}></Question>
                <p>{questions[1]}</p>

                {showinput ? <InputGroup placeholder='amount of money' size='sm' >
                    <InputGroup.Text>$</InputGroup.Text>
                    <FormControl onChange={(e) => setMoney(e.target.value)} aria-label="Amount (to the nearest dollar)" />

                </InputGroup> : <InputGroup placeholder='amount of money' size='sm' >
                    <InputGroup.Text>$</InputGroup.Text>
                    <FormControl disabled onChange={(e) => setMoney(e.target.value)} aria-label="Amount (to the nearest dollar)" />

                </InputGroup>}



                <br></br>
                <Button variant="outline-success" type="submit" size='md' onClick={handleSubmit}>submit</Button>
                <br></br>
                <br></br>

            </Container>

            <div className="button">
                <Link to="/"> <Button variant="primary" size="lg" active>
                    HOME
                </Button></Link>
            </div>


        </>
    )
}

export default Sectiontwo
