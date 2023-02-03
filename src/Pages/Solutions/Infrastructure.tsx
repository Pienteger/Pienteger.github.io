import { Button } from "@fluentui/react-components";
import { Alert } from '@fluentui/react-components/unstable';
import React from "react";

const Infrastructure = () => {

    return (
        <>
            <div className="pt-5">
                <h6 className="mt-5">Cloud Infrastructure</h6>
                <p className="fs-6vmax fw-400">
                    The simple and hassle free cloud solution for your business
                </p>

                <p className="mt-5 fs-1-5rem fw-400 w-sm-75">
                    We sell cloud computing infrastructures and services to businesses and individuals in BDT currency.
                    So that you can focus on your business and cloud native applications and forget
                    about all those foreign currency and payment issues.
                </p>


                <Alert intent="warning">
                    <div>Coming soon</div>
                </Alert>



                <Button className="mt-5" as='a' href="tel:8801935037396">Give Us Suggestions</Button>

            </div>

        </>
    );

}


export default Infrastructure;