import React from 'react'
import { Col, Row, Container, Card, Button, FormControl, Modal } from 'react-bootstrap'
import { MdMessage } from 'react-icons/md';
function Messages() {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={3}><Card >
                        <Card.Body>
                            <Card.Text>Start a new message</Card.Text>
                            <Row className="mb-3">
                                <Col lg={9}>  <FormControl
                                    placeholder="Username"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                /></Col>
                                <Col lg={3}> <Button variant="primary"><MdMessage /></Button></Col>

                            </Row>
                            <Container>
                                <Card.Title>user20</Card.Title>
                                <Card.Title>user20</Card.Title>
                                <Card.Title>user20</Card.Title>
                                <Card.Title>user20</Card.Title>
                                <Card.Title>user20</Card.Title>
                                <Card.Title>user20</Card.Title>

                            </Container>
                        </Card.Body>
                    </Card></Col>
                    <Col lg={6}><Card >

                        <Card.Body>
                            <Card.Title>username20</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
    </Card.Text>
                            <Row className="mb-3">
                                <Col >  <FormControl
                                    placeholder=" Send something Cool"
                                    aria-label="Text"
                                    aria-describedby="basic-addon1"
                                /></Col>
                                <Col > <Button variant="primary"><MdMessage /></Button></Col>
                            </Row>
                        </Card.Body>
                    </Card></Col>
                </Row>

                {/* <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>Modal body text goes here.</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary">Close</Button>
                        <Button variant="primary">Save changes</Button>
                    </Modal.Footer>
                </Modal.Dialog> */}
            </Container>
        </div >
    )
}
export default Messages