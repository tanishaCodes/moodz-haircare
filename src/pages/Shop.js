import { Container, Card, CardDeck, Button } from 'react-bootstrap'

import Shampoo from '../assets/images/shampoo.jpg'
import Fresh from '../assets/images/fresh.jpg'

import '../index.css'
import 'bootstrap/dist/css/bootstrap.min.css'


const Shop = () => {
    return (
        <div>
          <Container className='text-center'>
          <CardDeck>
            <Card>
              <Card.Img variant="top" src={Shampoo} />
                <Card.Body>
                  <Card.Title>Hydrating Shampoo</Card.Title>
                  <Card.Text>
                    $20.00
                  </Card.Text>
                  <div>
                    <Button type='addToCart' onClick='document.getElementById(' >Add to Cart</Button>
                  </div>
                </Card.Body>
            </Card>

            <Card>
              <Card.Img variant="top" src={Shampoo} />
                <Card.Body>
                  <Card.Title>Volumizing Shampoo</Card.Title>
                  <Card.Text>
                    $20.00
                  </Card.Text>
                  <div>
                    <Button variant="dark">Add to Cart</Button>
                  </div>
                </Card.Body>
            </Card>

            <Card>
              <Card.Img variant="top" src={Shampoo} />
                <Card.Body>
                  <Card.Title>Nourishing Shampoo</Card.Title>
                  <Card.Text>
                    $20.00
                  </Card.Text>
                  <div>
                    <Button variant="dark">Add to Cart</Button>
                  </div>
                </Card.Body>
            </Card>

            <Card>
              <Card.Img variant="top" src={Shampoo} />
                <Card.Body>
                  <Card.Title>Cleansing Shampoo</Card.Title>
                  <Card.Text>
                    $20.00
                  </Card.Text>
                  <div>
                    <Button variant="dark">Add to Cart</Button>
                  </div>
                </Card.Body>
            </Card>
          </CardDeck>
<br></br>
<br></br>
          <CardDeck>
          <Card>
              <Card.Img variant="top" src={Fresh} />
                <Card.Body>
                  <Card.Title>Hydrating Conditioner</Card.Title>
                  <Card.Text>
                    $20.00
                  </Card.Text>
                  <div>
                    <Button variant="dark">Add to Cart</Button>
                  </div>
                </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={Fresh} />
                <Card.Body>
                  <Card.Title>Volumizing Conditioner</Card.Title>
                  <Card.Text>
                    $20.00
                  </Card.Text>
                  <div>
                    <Button variant="dark">Add to Cart</Button>
                  </div>
                </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={Fresh} />
                <Card.Body>
                  <Card.Title>Nourishing Conditioner</Card.Title>
                  <Card.Text>
                    $20.00
                  </Card.Text>
                  <div>
                    <Button variant="dark">Add to Cart</Button>
                  </div>
                </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={Fresh} />
                <Card.Body>
                  <Card.Title>Ultimate Deep Conditioner</Card.Title>
                  <Card.Text>
                    $30.00
                  </Card.Text>
                  <div>
                    <Button variant="dark">Add to Cart</Button>
                  </div>
                </Card.Body>
            </Card>
          </CardDeck>
          </Container>
        </div>
    )
}

export default Shop
