import { Button } from "@fluentui/react-components";
import { PanelLeftKeyFilled } from "@fluentui/react-icons";

const Solutions = () => {
    return (
        <div>
            <h1>Solutions</h1>
            <p>

            </p>
            <div className="solution-item-box shadow-sm p-3 bg-matt-white mb-3">
                <h2>Software Development</h2>
                <p className="fs-1-2rem">
                    We build custom software for our clients. We have a team of experienced software developers who can build any kind of software
                    to meet your business requirements. We use the latest technologies to build the software.
                </p>
                <Button as="a" className="me-2">Learn More</Button>
                <Button as="a">Our Testimonials and Clients</Button>
            </div>
            <div className="solution-item-box shadow-sm p-3 bg-matt-white mb-3">
                <h2>Consultancy</h2>
                <p className="fs-1-2rem">
                    We provide consultancy services to our clients. We help them to choose the right technology for their business.
                    First, we understand and analyze their business requirements. Then we suggest them the best possible solution.
                </p>
                <Button as="a" className="me-2">Learn More</Button>
                <Button as="a">Our Testimonials and Clients</Button>
            </div>
        </div>
    );
};

export default Solutions;
