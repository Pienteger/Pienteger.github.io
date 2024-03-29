const NoPage = () => {
    return (
        <div className="flex flex-col items-center py-10">
            <h1 className="text-6xl font-extrabold mb-5">404</h1>
            <p>We are sorry to tell you that, you've been lost.</p>
            <p>
                But the goodnews is, you can
                always <a href="/"
                    className="hover:underline font-semibold">find a path</a> to go back to the home page.
            </p>
            <p>
                Just ask Allah, just like he said in the Quran:
                <span className="font-bold"> "Guide us to the straight path (1:6)"</span>
            </p>
        </div>
    );
}

export default NoPage;