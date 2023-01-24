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
    useEffect(() => {
        document.title = "Page Not Found - Pienteger";
    }, []);

    return (

        <div className="ms-auto me-auto">
            <img src={svg404} alt="404" className="text-center" />
            <h1 className="text-center mt-3">Sorry the page you were looking for wasn't found.</h1>
        </div>
    );
};

export default PageNotFound;
