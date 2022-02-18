import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, CardBody } from "reactstrap";

const User = () => {
    const params = useParams();
    const [user, setUser] = useState(null);
    useEffect(() => {
        if (params.id !== undefined) {
            fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
                .then(res => res.json())
                .then(_user => setUser(_user));
        }
    }, [params])

    return (
        <>
            {
                !user ? <p>Loading...</p> :
                    (
                        <Container className="bg-light border">
                            <Row className="m-2">
                                <Col xs="12" md="8" lg="6">
                                    <Card>
                                        <CardBody>
                                            <Row className="border my-1">
                                                <Col xs="4" className="bg-secondary text-light">
                                                    <p className="text-uppercase">Name:</p>
                                                </Col>
                                                <Col xs="1" />
                                                <Col xs="7">
                                                    <p>{user.name}</p>
                                                </Col>
                                            </Row>
                                            <Row className="border my-1">
                                                <Col xs="4" className="bg-secondary text-light">
                                                    <p className="text-uppercase">Username:</p>
                                                </Col>
                                                <Col xs="1" />
                                                <Col xs="7">
                                                    <p>{user.username}</p>
                                                </Col>
                                            </Row>
                                            <Row className="border my-1">
                                                <Col xs="4" className="bg-secondary text-light">
                                                    <p className="text-uppercase">Email:</p>
                                                </Col>
                                                <Col xs="1" />
                                                <Col xs="7">
                                                    <p>{user.email}</p>
                                                </Col>
                                            </Row>
                                            <Row className="border my-1">
                                                <Col xs="4" className="bg-secondary text-light">
                                                    <p className="text-uppercase">Name:</p>
                                                </Col>
                                                <Col xs="1" />
                                                <Col xs="7">
                                                    <p>{user.name}</p>
                                                </Col>
                                            </Row>
                                            <Row className="border my-1">
                                                <Col xs="4" className="bg-secondary text-light">
                                                    <p className="text-uppercase">Phone:</p>
                                                </Col>
                                                <Col xs="1" />
                                                <Col xs="7">
                                                    <a rel="noreferrer" href={`tel:${user.phone}`}>{user.phone}</a>
                                                </Col>
                                            </Row>
                                            <Row className="border my-1">
                                                <Col xs="4" className="bg-secondary text-light">
                                                    <p className="text-uppercase">Company:</p>
                                                </Col>
                                                <Col xs="1" />
                                                <Col xs="7">
                                                    <p>{user.company.name}</p>
                                                </Col>
                                            </Row>
                                            <Row className="border my-1">
                                                <Col xs="4" className="bg-secondary text-light">
                                                    <p className="text-uppercase">Website:</p>
                                                </Col>
                                                <Col xs="1" />
                                                <Col xs="7">
                                                    <a target="_blank" rel="noreferrer" href={user.website}>{user.website}</a>
                                                </Col>
                                            </Row>
                                            <Row className="border my-1">
                                                <Row className="mb-1">
                                                    <Col xs="4" className="bg-secondary text-light">
                                                        <p className="text-uppercase">Address:</p>
                                                    </Col>
                                                </Row>
                                                <Row className="mb-1">
                                                    <Col xs="4">
                                                        <Row>
                                                            <Col xs="1"/>
                                                            <Col xs="10" className="bg-secondary text-light">
                                                                <p className="text-uppercase">Street:</p>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                    <Col xs="1" />
                                                    <Col xs="7">
                                                        <p>{user.address.street}</p>
                                                    </Col>
                                                </Row>
                                                <Row className="mb-1">
                                                    <Col xs="4">
                                                        <Row>
                                                            <Col xs="1"/>
                                                            <Col xs="10" className="bg-secondary text-light">
                                                                <p className="text-uppercase">Suite:</p>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                    <Col xs="1" />
                                                    <Col xs="7">
                                                        <p>{user.address.suite}</p>
                                                    </Col>
                                                </Row>
                                                <Row className="mb-1">
                                                    <Col xs="4">
                                                        <Row>
                                                            <Col xs="1"/>
                                                            <Col xs="10" className="bg-secondary text-light">
                                                                <p className="text-uppercase">City:</p>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                    <Col xs="1" />
                                                    <Col xs="7">
                                                        <p>{user.address.city}</p>
                                                    </Col>
                                                </Row>
                                                <Row className="mb-1">
                                                    <Col xs="4">
                                                        <Row>
                                                            <Col xs="1"/>
                                                            <Col xs="10" className="bg-secondary text-light">
                                                                <p className="text-uppercase">Zipcode:</p>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                    <Col xs="1" />
                                                    <Col xs="7">
                                                        <p>{user.address.zipcode}</p>
                                                    </Col>
                                                </Row>
                                            </Row>

                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>

                        </Container>
                    )
            }
        </>
    )
}

export default User;