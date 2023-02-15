import { Button, Image } from "@fluentui/react-components";
import { Library16Filled, Mail20Filled, Call20Filled } from "@fluentui/react-icons";
import csharp from "../images/programming-languages/c-sharp.png";
import sql from "../images/programming-languages/sql-server.png";
import ts from "../images/programming-languages/typescript.png";
import dotnet_bot from "../images/programming-languages/dotnet_bot.svg";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const Home = () => {


    useEffect(() => {
        document.title = "Home Page - Pienteger";
    }, []);

    return (
        <>
            <Helmet>
                <title>Home Page - Pienteger</title>
                <meta name="description" content="Pienteger is a leading software company with solid design and engineering expertise. 
                We build ready-made websites, mobile applications, desktop tools and web services to elevate your business." />

                <meta property="og:title" content="Home Page - Pienteger" />
                <meta property="og:description" content="Pienteger is a leading software company with solid design and engineering expertise.
                We build ready-made websites, mobile applications, desktop tools and web services to elevate your business." />
                <meta property="og:image" content="https://pienteger.com/static/media/white_banner.318afd674551b16f53b5.png" />
                <meta property="og:url" content="https://pienteger.com" />

                <meta name="twitter:title" content="Home Page - Pienteger" />
                <meta name="twitter:description" content="Pienteger is a leading software company with solid design and engineering expertise.
                We build ready-made websites, mobile applications, desktop tools and web services to elevate your business." />
                <meta name="twitter:image" content="https://pienteger.com/static/media/white_banner.318afd674551b16f53b5.png" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <h1 className="mt-20vmax">At our HQ, we build</h1>
            <div className="d-flex flex-sm-row flex-column flex-wrap">
                <h2 className="bold fs-6vmax">
                    <span className="flamingo-1 ">Websites</span>,&nbsp;
                </h2>
                <h2 className="flamingo-4 bold fs-6vmax">Tools&nbsp;</h2>

                <h2 className="bold fs-6vmax">&&nbsp;

                    <a href="/solutions/software-development">
                        <span className="flamingo-3 hover-hummingbird">
                            Softwares
                        </span>
                    </a>
                </h2>
            </div>

            <div className="bar-100 mt-3 mb-5"></div>

            <p className="fs-1-5rem mt-20vmax">
                Leading software company with solid design and engineering expertise.
                We build ready-made websites, mobile applications, desktop tools and web services to elevate your business.
            </p>

            <Button size="large" as="a" className="me-2" href="mailto:info@pienteger.com" icon={<Mail20Filled />}>
                Request a Demo</Button>

            <Button size="large" as="a" href="tel:8801935037396" icon={<Call20Filled />}>
                Call Us</Button>

            {/* <h3 className="display-3 mt-5">Our Tech Stack</h3>

                <div className="d-flex flex-wrap mt-5">
                <Image src={csharp} height={'50px'} className="me-3" />
                <Image src={ts} height={'50px'} />
                <Image src={sql} height={'50px'} />
                <Image src={dotnet_bot} height={'50px'} />
            </div> */}
        </>
    )
}

export default Home;
