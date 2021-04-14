import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

import '../index.css'

const jumbotron = () => {
    return (
        <div>
            <Jumbotron className='jumbotron'>
                <h2>
                    Unique Hair Calls for Unique Care
                </h2>
                <p>
                    Custom hair care formulated just for you!
                </p>
                <p>
                 <Button className='jumbotron__btn' variant='dark'>
                    Get Your Formula
                 </Button>
                </p>
            </Jumbotron>
        </div>
    )
}

export default jumbotron
