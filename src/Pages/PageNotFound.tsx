import { useState, useEffect } from "react";
import svg404 from "../images/404.svg";
interface RandomH {
    collection: string;
    bookNumber: string;
    chapterId: string;
    hadithNumber: string;
    hadith: Hadith[];
}

interface Hadith {
    lang: string;
    chapterNumber: string;
    chapterTitle: string;
    urn: number;
    body: string;
    grades: any[];
}


const PageNotFound = () => {
    const [randomH, setRandomH] = useState<RandomH>();

    // call https://api.sunnah.com/v1/hadiths/random with X-API-Key
    // and get a random hadith
    // and display it on the page

    const getHadith = () => {
        fetch('https://api.sunnah.com/v1/hadiths/random', {
            method: 'GET',
            headers: {
                'X-API-Key': '',
                'Content-Type': 'application/jsonp'
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setRandomH(data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    useEffect(() => {
        getHadith();
    }, []);

    return (

        <div className="ms-auto me-auto">
            <img src={svg404} alt="404" className="text-center" />
            <h1 className="text-center mt-3">Sorry the page you were looking for wasn't found.</h1>
        </div>
    );
};

export default PageNotFound;
