import { Button } from "@fluentui/react-components";
import ReactPlayer from "react-player";

const SoftwareDevelopment = () => {
    return (
        <>
            <div className="pt-5">
                <h6 className="mt-5">Software Development</h6>
                <p className="fs-6vmax fw-400">
                    Automate your workflow with customized software
                </p>





                <p className="mt-5 fs-1-5rem fw-400 w-sm-75">
                    We build exclusively native applications, devoting ourselves to development and design
                    that meets your business needs.
                    <br />
                    It's our way of creating products that your users will love.
                </p>

                <Button className="mt-5" as='a' href="tel:8801935037396">Let's Work Together</Button>

            </div>
        </>
    );
};

export default SoftwareDevelopment;