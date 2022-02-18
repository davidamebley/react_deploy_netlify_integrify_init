import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";
import Avatar from "../Avatar/Avatar";
const UserCard = ({ user }) => {
     
        
return (
        <Card className="my-3">
            <CardBody className="text-center">
                <Avatar name={user.username} />
                <CardTitle tag="h5">
                   {user.name}
                </CardTitle>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                    {`@${user.username}`}
                </CardSubtitle>
                <CardText>
                    {user.email}
                </CardText>
                <Link to={`/${user.id}`}>
                    <Button color="primary">
                    MORE DETAILS
                    </Button>
                </Link>
            </CardBody>
        </Card>
);
};

export default UserCard;