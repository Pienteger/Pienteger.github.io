import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Pienteger® | Mission, Vision, and Values",
    description: "About Pienteger® - A software company that you can trust.",
};

const About = () => {

    return (
        <>
            <div className="content">
                <h1>About</h1>
                <p>
                    Pienteger&reg; (pronounced as Pi-in-tee-zer) is a technology company based in Rajshahi, Bangladesh.
                    We are a team of passionate individuals who are dedicated to making a difference in the world.
                    We are committed to creating innovative solutions.
                </p>
            </div>
        </>
    );

};

export default About;
