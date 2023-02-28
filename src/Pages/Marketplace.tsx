import { Button } from '@fluentui/react-components';
import {
    Card,
    CardFooter,
    CardHeader,
    CardPreview,
} from '@fluentui/react-components/unstable';
import { Info20Regular, Money20Regular } from '@fluentui/react-icons';
import openai_logo from '../images/openai.svg';

const Marketplace = () => {

    return (
        <div className='d-flex flex-wrap'>
            <Card style={{ maxWidth: '25vw' }}>

                <CardHeader header={<img src={openai_logo} style={{ maxHeight: 50 }} />}

                ></CardHeader>
                <p>
                    OpenAi is a company that is working on artificial intelligence and machine learning.
                </p>
                <CardFooter>
                    <Button as='a' href="/marketplace/openai" icon={<Info20Regular />}>Learn More</Button>
                    <Button as='a' href="/marketplace/openai_pricing" icon={<Money20Regular />}>Pricing</Button>
                </CardFooter>


            </Card>

        </div>
    );
};

export default Marketplace;