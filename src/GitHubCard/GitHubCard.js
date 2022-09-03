import React from "react"
import Card from "react-bootstrap/Card"
import RYU from './images/RYU.jpg'

function GitHubCard() {
    return (
        <div className="card">
            <Card style={{ width: "150rem" }}>
                {/* Use your GitHub info instead, but Mickey Mouse is used as an example */}
                <Card.Img variant="top" />
                {/* Source:https://unsplash.com/photos/Rt0fXXXvf4w  */}
                <Card.Body>
                    <Card.Title>Street Fighter</Card.Title>
                    <Card.Text>
                        "The road to becoming a true martial artist is still long... This is only training!!" -RYU
                        <img src={RYU} alt="RYU" />
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default GitHubCard