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
            </ul>
        </>
    )
}
export default Copyrights;