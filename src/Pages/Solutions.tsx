import { Button } from "@fluentui/react-components";
import { Alert, Card, CardFooter, CardHeader, CardPreview } from '@fluentui/react-components/unstable';
import { News20Filled } from "@fluentui/react-icons";
import software_dev from "../images/software_dev.jpg"
import cloud_city from "../images/cloud_city.jpg"

const Solutions = () => {
    return (
        <div className="mt-5 pt-5">
            <h1 className="mt-5">Solutions</h1>
            <p>

            </p>

            <div className="row mt-5">
                <div className="col-12 col-sm-6">
                    <Card>
                        <h2>Software Development</h2>
                        <CardPreview >
                            <img src={software_dev} alt="Image of software development machines" />
                        </CardPreview>
                        <p className="fs-1-2rem">
                            We build custom software for our clients.
                            We have a team of experienced software developers who can build any kind of software
                            to meet your business requirements. We use the latest technologies to build the software.
                        </p>
                        <CardFooter>
                            <Button as="a" className="me-2" href="/solutions/software-development">Learn More</Button>
                            <Button as="a">Our Testimonials and Clients</Button>
                        </CardFooter>
                    </Card>
                </div>
                <div className="col-12 col-sm-6">
                    <Card>
                        <h2>Consultancy</h2>
                        <CardPreview >
                            <img src={software_dev} alt="Image of software development machines" />
                        </CardPreview>
                        <p className="fs-1-2rem">
                            We provide consultancy services to our clients. We help them to choose the right technology for their business.
                            First, we understand and analyze their business requirements. Then we suggest them the best possible solution.
                        </p>
                        <CardFooter>
                            <Button as="a" className="me-2" href="/solutions/consultancy">Learn More</Button>
                            <Button as="a">Our Testimonials and Clients</Button>
                        </CardFooter>
                    </Card>

                </div>
            </div>

            <div className="mt-5 mb-5">

                <h4>
                    <News20Filled /> Following solutions are coming soon:
                </h4>

            </div>


            <div className="row">
                <div className="col-12 col-sm-6">
                    <Card>
                        <h2>Cloud Infrastructure</h2>
                        <CardPreview >
                            <img src={cloud_city} alt="Cloud connected city image" />
                        </CardPreview>
                        <p className="fs-1-2rem">
                            We provide cloud infrastructure services to our clients in Bangladesh's official currency (BDT). We sell cloud servers, cloud storage,
                            cloud databases, etc. in a very affordable price.
                        </p>
                        <CardFooter>
                            <Button as="a" className="me-2" href="/solutions/infrastructure">Learn More</Button>
                        </CardFooter>
                    </Card>

                </div>
            </div>
        </div>
    );
};

export default Solutions;
