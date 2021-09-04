import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const Home = () => {
    return (
        <>

            <div className="home">
                <h2>task - 1</h2>
                <br></br>
                <Link to="/sectionone">  <Button variant="primary" size="lg" active>
                    Generate a buisness plan
                </Button> </Link>

            </div>
        </>
    )
}

export default Home
