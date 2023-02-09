import logo from '../images/pienteger_logo.png'

const HeaderComponent = () => {
    function responsiveNavToggle() {

    }
    return (
        <>
            <div className="top-bar"></div>
            <header className="header d-flex justify-content-between">
                <div className="d-flex">
                    <a href="/" className='align-self-center'>
                        <img src={logo} className="header-logo" />
                    </a>
                    <div className="divider"></div>
                    <div className="links">
                        {/* <a href="/">Home</a>
                        <a href="/about">About</a>
                        <a href="/products">Products</a> */}
                        <a href="/solutions">Solutions</a>
                        <a href="//docs.pienteger.com">Docs</a>
                    </div>
                </div>

                {/* <div className="account">
                    <a href="/store">Store</a>
                    <a href="/login">Login</a>
                    <a href="/sign-up">Sign Up</a>
                </div> */}
            </header>

        </>
    )
};

export default HeaderComponent;
