import Card from 'react-bootstrap/Card'

const middleCard = () => {
    return (
        <div>
            <Card className="bg-dark text-dark">
                <Card.Img src="holder.js/100px270" alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>"Trusted by the Best Hairstylists and Loved by the Best Clients"</Card.Title>
                      <Card.Text>
                        The finest botanical ingredients made in our Phenix City lab to your shower.
                      </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
            </Card>
        </div>
    )
}

export default middleCard
