import { Card, CardDeck, Button } from 'react-bootstrap'

import Hydrated from '../../assets/images/hydrated.jpg'
import Nourish from '../../assets/images/nourish.jpg'
import Volume from '../../assets/images/volume.jpg'

import '../../index.css'
import 'bootstrap/dist/css/bootstrap.min.css'


const cards = () => {
    return (
        <>
            <div>
                <h4 className='text-center cards__statement'>
                    Our products are cruelty free and safe for all hair types and textures. Satisfaction guaranteed. <p><strong>Try it now!</strong></p>
                </h4>
            </div>
            <div className='cards'>
<br></br>
<br></br>
                <CardDeck>
                 <Card className='text-center card__hydrate' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Hydrated} alt="photo of hydrated curls"/>
                     <Card.Body>
                      <Card.Title><strong>Hydrate</strong></Card.Title>
                        <Card.Text>
                        Formulated with a mix of 10 nutritional oils  increases hydration, eliminating frizz.
                        </Card.Text>
                          <div>
                            <Button variant="dark">Shop</Button>
                          </div>
                     </Card.Body>
                 </Card>
                 <Card className='text-center card__volume' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Volume} alt='curls with volume'/>
                     <Card.Body>
                      <Card.Title><strong>Volume</strong></Card.Title>
                        <Card.Text>
                        Healing astringent helps control frizz and provide beautiful full volume to the hair.
                        </Card.Text>
                          <div>
                            <Button variant="dark">Shop</Button> 
                          </div>
                     </Card.Body>
                 </Card>    
                 <Card className='text-center card__nourish' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Nourish} alt='nourished curls'/>
                     <Card.Body>
                      <Card.Title><strong>Nourish</strong></Card.Title>
                        <Card.Text>
                        Infusion of caster oil that strengthens, nourishes and soothes dry hair. Breakage and hair loss are reduced.
                        </Card.Text>
                          <div>
                            <Button variant="dark">Shop</Button>   
                          </div>
                     </Card.Body>
                 </Card>
                </CardDeck>
<br></br>
<br></br>
            </div>
        </>
    )
}

export default cards
