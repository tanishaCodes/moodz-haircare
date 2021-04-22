import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

import '../index.css'
import 'bootstrap/dist/css/bootstrap.min.css'


const middleCard = () => {
    return (
        <div className='middleCard'>
            <Container>
            <Jumbotron className='middleCard__graphic' fluid>
                <h2>
                "Trusted by the Best Hairstylists and Loved by the Best Clients"
                </h2>
                <p>
                The finest botanical ingredients made in our Phenix City lab to your shower.
                </p>
            </Jumbotron>
            </Container>
        </div>
    )
}

export default middleCard