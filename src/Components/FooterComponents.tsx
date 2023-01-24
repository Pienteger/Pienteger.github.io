const FooterComponents = () => {
    return (
        <>
            <footer className="footer">
                <div className="links">
                    <a className="text-decoration-none" href="/privacy">Privacy</a>|
                    <a className="text-decoration-none" href="/terms">TOS</a>|
                    <a className="text-decoration-none" href="/copyrights">Copyrights</a>|
                    <a className="text-decoration-none" href="/logoHistory">Logo</a>|
                    <a className="text-decoration-none">History</a>|
                    <a className="text-decoration-none" href="/careers">Career</a>
                </div>
                <div className="links" style={{ marginTop: '20px' }}>
                    <a className="text-decoration-none" href="https://www.linkedin.com/company/68650611">LinkedIn</a> |
                    <a className="text-decoration-none" href="https://www.facebook.com/pienteger">Facebook</a> |
                    <a className="text-decoration-none" href="https://www.reddit.com/r/pienteger/">Reddit</a> |
                    <a className="text-decoration-none" href="http://github.com/pienteger/">GitHub</a>
                </div>

                <p>Made with 💖 in Bangladesh</p>
                <div className="bottom-bar"></div>
            </footer>
        </>)
}; export default FooterComponents;