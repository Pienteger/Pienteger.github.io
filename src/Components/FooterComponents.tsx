import commonStyle from "../css/Common.module.css";
import mainLogo from "../images/mainLogo.png";

const FooterComponents = () => {
  return (
    <>
      {/* <footer className="footer"> */}
      {/* <a className="text-decoration-none" href="/privacy">Privacy</a>| */}
      {/* <footer
        className={`footerComponent ${commonStyle["min-h20rem"]} ${commonStyle["carbon_effect_bg"]}`}
      >
        <div className="links">
          <a className="text-decoration-none" href="/terms">
            TOS
          </a>

          <a className="text-decoration-none" href="/copyrights">
            Copyrights
          </a>

          <a className="text-decoration-none" href="/logoHistory">
            Logo
          </a>

          <a className="text-decoration-none" href="/Contact">
            Contact
          </a>

          <a className="text-decoration-none" href="/Careers">
            Career
          </a>
          <a className="text-decoration-none" href="/login">
            Login
          </a>
        </div>
        <div className="links">
          <a
            className="text-decoration-none"
            href="https://www.linkedin.com/company/68650611"
          >
            LinkedIn
          </a>
          <a
            className="text-decoration-none"
            href="https://www.facebook.com/pienteger"
          >
            Facebook
          </a>
          <a
            className="text-decoration-none"
            href="https://www.reddit.com/r/pienteger/"
          >
            Reddit
          </a>
          <a
            className="text-decoration-none"
            href="http://github.com/pienteger/"
          >
            GitHub
          </a>
        </div>

        <p className="m-0">
          Copyright &copy; Pienteger, Bangladesh 2020. All right's reserved.
        </p>
        
      </footer> */}
      <footer
        className={`footerComponent ${commonStyle["min-h20rem"]} ${commonStyle["carbon_effect_bg"]}`}
      >
        <div className="container mx-auto my-0 px-0 py-5 ">
          <div className="main_logo d-flex align-items-center py-4 gap-3">
            <img
              src={mainLogo}
              alt="main logo"
              className={`${commonStyle["h-40px"]} rounded border  ${commonStyle["box-shadow-3d"]}`}
            />
            <h3
              className={`text-uppercase py-0 my-0 ${commonStyle["text-shadow-3d"]} ${commonStyle["font-2_5rem"]}`}
            >
              pienteger
            </h3>
          </div>

          {/* links */}
          <div className="link-menus py-5">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-3">
                <h4
                  className={`${commonStyle["metallic_text"]} py-3 text-white`}
                >
                  About
                </h4>
                <div className="link-box d-flex flex-column gap-2">
                  <a className="text-decoration-none text-white" href="/terms">
                    TOS
                  </a>
                  <a
                    className="text-decoration-none text-white"
                    href="/copyrights"
                  >
                    Copyrights
                  </a>
                  <a
                    className="text-decoration-none text-white"
                    href="/logoHistory"
                  >
                    Logo
                  </a>
                  <a
                    className="text-decoration-none text-white"
                    href="/Contact"
                  >
                    Contact
                  </a>
                  <a
                    className="text-decoration-none text-white"
                    href="/Careers"
                  >
                    Career
                  </a>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <h4
                  className={`${commonStyle["metallic_text"]} py-3 text-white`}
                >
                  Connections
                </h4>
                <div className="link-box d-flex flex-column gap-2">
                  <a
                    className="text-decoration-none text-white"
                    href="https://www.linkedin.com/company/68650611"
                  >
                    LinkedIn
                  </a>
                  <a
                    className="text-decoration-none text-white"
                    href="https://www.facebook.com/pienteger"
                  >
                    Facebook
                  </a>
                  <a
                    className="text-decoration-none text-white"
                    href="https://www.reddit.com/r/pienteger/"
                  >
                    Reddit
                  </a>
                  <a
                    className="text-decoration-none text-white"
                    href="http://github.com/pienteger/"
                  >
                    GitHub
                  </a>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <h4
                  className={`${commonStyle["metallic_text"]} py-3 text-white`}
                >
                  Business
                </h4>
                <div className="link-box d-flex flex-column gap-2">
                  <a
                    className="text-decoration-none text-white"
                    href="//kothakunjo.com"
                  >
                    Kothakunjo
                  </a>
                  <a
                    className="text-decoration-none text-white"
                    href="//sertifiket.com"
                  >
                    Sertifiket
                  </a>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <h4
                  className={`${commonStyle["metallic_text"]} py-3 text-white`}
                >
                  Others
                </h4>
                <div className="link-box d-flex flex-column gap-2">
                  <a className="text-decoration-none text-white" href="">
                    Linkitem
                  </a>
                  <a className="text-decoration-none text-white" href="">
                    Linkitem
                  </a>
                  <a className="text-decoration-none text-white" href="">
                    Linkitem
                  </a>
                  <a className="text-decoration-none text-white" href="">
                    Linkitem
                  </a>
                  <a className="text-decoration-none text-white" href="">
                    Linkitem
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`copyright_box d-flex align-items-center justify-content-center pt-3 mt-5 ${commonStyle["border-top-white"]}`}
          >
            <p className="text-white">
              &copy;2023, Pienteger BD, All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
export default FooterComponents;
