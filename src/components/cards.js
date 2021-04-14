import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'

import Hydrated from '../assets/images/hydrated.jpg'
import Nourish from '../assets/images/nourish.jpg'
import Volume from '../assets/images/volume.jpg'

import '../index.css'


const cards = () => {
    return (
        <div>
            <div>
                <p className='card__statement'>
                    A comprehensive consultation. Professional Expertise. The ultimate custom experience.
                </p>
            </div>
            <div>
                <CardDeck>
                 <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Hydrated} alt="photo of hydrated curls"/>
                     <Card.Body>
                      <Card.Title>Hydrate</Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                        </Card.Text>
                            <Button variant="primary">Shop</Button>
                     </Card.Body>
                 </Card>
                 <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Volume} alt='curls with volume'/>
                     <Card.Body>
                      <Card.Title>Volume</Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                        </Card.Text>
                            <Button variant="primary">Shop</Button>
                     </Card.Body>
                 </Card>    
                 <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Nourish} alt='nourished curls'/>
                     <Card.Body>
                      <Card.Title>Nourish</Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                        </Card.Text>
                            <Button variant="primary">Shop</Button>
                     </Card.Body>
                 </Card>
                </CardDeck>
            </div>
        </div>
    )
}

export default cards
