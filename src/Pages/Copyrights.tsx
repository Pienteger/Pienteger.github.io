import { useEffect } from "react";
import { Link } from "react-router-dom";

const Copyrights = () => {
    useEffect(() => {
        document.title = "Copyrights and attributes - Pienteger";
    }, []);
    return (
        <>
            <h1 className="display-1">Copyrights and attributes</h1>
            <p className="fs-1-5rem mt-3 mb-5">
                We relay on numerous open source and free products. But we believe in crediting them properly.
            </p>
            <h3 className="display-3">This Website</h3>
            <ul className="fs-1-5rem">
                <li>
                    Dotnet bot copyrighted to <Link to={"https://mod-dotnet-bot.net/"} target="_blank">Microsoft</Link>
                </li>
                <li>
                    Icons of C#, TypeScript and SQL Server copyrighted to <Link to={"https://www.flaticon.com/packs/programming-database-1"}>
                        Flaticon
                    </Link>
                </li>
                <li>
                    <a href="https://www.freepik.com/free-photo/computer-screens-running-programming-code-empty-software-developing-agency-office-computers-parsing-data-algorithms-background-neural-network-servers-cloud-computing-data-room_22298430.htm#query=software%20development&position=18&from_view=search&track=sph">Image by DCStudio</a> on Freepik
                </li>
                <li>
                    <a href="https://www.freepik.com/free-photo/competition-computer-computing-perspective-sky_1046096.htm#query=cloud%20computing&position=30&from_view=search&track=sph">Image by evening_tao</a> on Freepik
                </li>
            </ul>
        </>
    )
}
export default Copyrights;