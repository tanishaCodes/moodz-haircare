import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'

import Hydrated from '../assets/images/hydrated.jpg'
import Nourish from '../assets/images/nourish.jpg'
import Volume from '../assets/images/volume.jpg'

import '../index.css'
import 'bootstrap/dist/css/bootstrap.min.css'


const cards = () => {
    return (
        <div>
            <div>
                <p className='text-center cards__statement'>
                    Our products are cruelty free and safe for all hair types and textures. Satisfaction guaranteed. Try it now!
                </p>
            </div>
            <div>
                <CardDeck className='cards'>
                 <Card className='text-center' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Hydrated} alt="photo of hydrated curls"/>
                     <Card.Body>
                      <Card.Title>Hydrate</Card.Title>
                        <Card.Text>
                        Formulated with a mix of 10 nutritional oils  increases hydration, eliminating frizz.
                        </Card.Text>
                            <Button variant="dark">Shop</Button>
                     </Card.Body>
                 </Card>
                 <Card className='text-center' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Volume} alt='curls with volume'/>
                     <Card.Body>
                      <Card.Title>Volume</Card.Title>
                        <Card.Text>
                        Healing astringent helps control frizz and provide beautiful full volume to the hair.
                        </Card.Text>
                            <Button variant="dark">Shop</Button>
                     </Card.Body>
                 </Card>    
                 <Card className='text-center' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Nourish} alt='nourished curls'/>
                     <Card.Body>
                      <Card.Title>Nourish</Card.Title>
                        <Card.Text>
                        Infusion of caster oil that strengthens, nourishes and soothes dry hair. Breakage and hair loss are reduced.
                        </Card.Text>
                            <Button variant="dark">Shop</Button>
                     </Card.Body>
                 </Card>
                </CardDeck>
            </div>
        </div>
    )
}

export default cards
