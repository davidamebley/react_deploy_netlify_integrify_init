import { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import UserCard from '../../Components/UserCard/UserCard';

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(_users => setUsers(_users))
    }, [])
    return (
        <Container className="bg-light border">
            <Row>
            {users.map(user => (
                <Col key={user.id} xs="12" sm="6" md="4">
                    <UserCard user={user}/>
                </Col>
            ))}
            </Row>
        </Container>
    );
}

export default Users;