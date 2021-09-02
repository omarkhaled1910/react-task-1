import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const Home = () => {
    return (
        <div className="home">

            <Link to="/sectionone">  <Button variant="primary" size="lg" active>
                generate a buisness plan
            </Button> </Link>
        </div>
    )
}

export default Home
