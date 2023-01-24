import logo from '../images/pienteger_logo.png';
import logoGrad from '../images/pienteger_logo_gradient.png';
import whiteBg from '../images/white_banner.png';
import logoBanner from '../images/logo_banner.png';
import { useEffect } from 'react';

const LogoHistory = () => {
    useEffect(() => {
        document.title = "Logo History - Pienteger";
    }, []);
    return (<>

        <div style={{ paddingLeft: '20px', paddingRight: '20px' }}>

            <h1>Shape, Color, and Stroke | Pienteger adopts a newly designed logo</h1>
            <img src={logoBanner}
                alt="A black banner image contains Pienteger's logo at the left bottom and a text 'Int32.Parse(π);' at the top right corner."
                className="img_center mt-2" />

            <p className="mt-2">
                Pienteger's new logo expresses durability, security, strength which can be
                defined by math. It's a black squire that contains 3, 'i' and a perfect angle.
                The name Pienteger came from the concept of an integer typed π. Here 3 in
                the logo expresses the integer version of π which is 3, 'i' means 'integer'
                and the angle refers to strength with flexibility.
            </p>
            <h2 className="mt-2">Pienteger's Logo</h2>
            <h3 className="mt-2">Main Logo</h3>
            <img src={logo} alt="Pienteger's Logo" className="img_center mt-2" />
            <h3 className="mt-2">Gradient Logo</h3>
            <img src={logoGrad} alt="Pienteger's Logo with a gradient background"
                className="img_center mt-2" />
            <h3 className="mt-2">White Banner</h3>
            <img src={whiteBg} alt="Pienteger's Logo in a white banner." className="img_center mt-2" />
        </div>
    </>)
};

export default LogoHistory;