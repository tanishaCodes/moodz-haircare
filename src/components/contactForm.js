import { Form, Col, Button } from 'react-bootstrap'


const contactForm = () => {
    return (
        <div>
            <Form>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control placeholder="First name" />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control placeholder="Last name" />
                    </Form.Group>
                </Form.Row>

                <Form.Group as={Col}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default contactForm
