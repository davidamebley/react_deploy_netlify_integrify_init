import { Link } from "react-router-dom";
import { Navbar, Button } from "reactstrap"
const Navigation = () => {
    return (
        <Navbar
            color="light"
            expand="md"
            light
        >
            <Link to="/">
                <Button color="primary">
                    Home
                </Button>
            </Link>
        </Navbar>
    )
}
export default Navigation;