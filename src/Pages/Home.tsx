import { Button, Image } from "@fluentui/react-components";
import { Library16Filled, Mail20Filled } from "@fluentui/react-icons";
import csharp from "../images/programming-languages/c-sharp.png";
import sql from "../images/programming-languages/sql-server.png";
import ts from "../images/programming-languages/typescript.png";
import dotnet_bot from "../images/programming-languages/dotnet_bot.svg";

const Home = () => {
    return (
        <>
            <h1 style={{ fontSize: '10vw' }}>WE BUILD <span className="flamingo-1 bold">SOFTWARE</span></h1>
            <Button size="large" as="a" href="mailto:pienteger@gmail.com" icon={<Mail20Filled />}>
                Request a Demo</Button>
            <h3 className="display-3 mt-5">Our Tech Stack</h3>

            <div className="d-flex justify-content-around mt-5">
                <Image src={csharp} height={'100px'} />
                <Image src={ts} height={'100px'} />
                <Image src={sql} height={'100px'} />
                <Image src={dotnet_bot} height={'100px'} />
            </div>
        </>
    )
}

export default Home;