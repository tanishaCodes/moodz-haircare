import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

import '../../index.css'
import 'bootstrap/dist/css/bootstrap.min.css'


const middleCard = () => {
    return (
        <div>
            <Container className='middleCard'>
              <Jumbotron className='middleCard__graphic' fluid>
                <h4 className='text-center'>
                    <span>
                       <strong>
                        Trusted by the Best Hairstylists and Loved by the Best Clients
                       </strong>
                    </span>
                </h4>
                <p className='text-center'>
                    <span>
                        The finest botanical ingredients made in our Phenix City lab to your shower.
                    </span>
                </p>
              </Jumbotron>
            </Container>
        </div>
    )
}

export default middleCard