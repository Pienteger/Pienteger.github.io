import React from "react";
import style from "../Pages/Css/Pricing.module.css";

const Pricing = () => {
  return (
    <>
      {/* heading */}
      <div className={`sticky-top`}>
        <div
          className={`container px-0 my-0 mx-auto py-4 position-relative  ${style["bg_white_transparent"]}`}
        >
          {/* <!-- navigation --> */}
          <nav className={`navbar navbar-expand-lg bg-body-tertiary`}>
            <div className={`container-fluid`}>
              <button
                className={`navbar-toggler shadow-none`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className={`navbar-toggler-icon`}></span>
              </button>
              <div
                className={`collapse navbar-collapse`}
                id="navbarSupportedContent"
              >
                <div
                  className={`mx-auto  ${style["width_fit_content"]} middle_div d-flex flex-column flex-lg-row align-items-start align-items-lg-center gap-5`}
                >
                  <a
                    href=""
                    className={`${style["text_opacity_light_black"]} text-uppercase text-decoration-none text-dark fw-semibold`}
                  >
                    overview
                  </a>
                  <a
                    href=""
                    className={`text-uppercase text-decoration-none text-black-50 fw-semibold disabled`}
                  >
                    pricing
                  </a>
                  <a
                    href=""
                    className={`${style["text_opacity_light_black"]} text-uppercase text-decoration-none text-dark fw-semibold  ${style["pseudo_arrow"]}`}
                  >
                    docs
                  </a>
                  <a
                    href=""
                    className={`${style["text_opacity_light_black"]} text-uppercase text-decoration-none text-dark fw-semibold  ${style["pseudo_arrow"]}`}
                  >
                    examples
                  </a>
                </div>
              </div>
            </div>
          </nav>
          <div
            className={`right_div d-flex gap-4 align-items-center position-absolute end-0 top-50 translate-middle-y`}
          >
            <a
              href=""
              className={`text-uppercase text-decoration-none text-dark fw-semibold  ${style["text_opacity_light_black"]}`}
            >
              log in
            </a>
            <a
              href=""
              className={`text-uppercase text-decoration-none text-dark fw-semibold bg-black text-white rounded-5 py-2 px-3  ${style["bg_opacity_light_black"]}`}
            >
              sign up
            </a>
          </div>
        </div>
      </div>
      <section className={`${style["bg_white_transparent"]} container-fluid`}>
        <section
          className={`title_section container px-0 my-0 mx-auto py-5 mt-0`}
        >
          <h1 className={`text-center fw-normal display-4 mb-3`}>Pricing</h1>
          <p className={`text-center ${style["font_20"]} mb-4`}>
            Simple and flexible. Only pay for what you use.
          </p>
          <div
            className={`d-flex flex-column flex-sm-row align-items-center justify-content-center gap-4 mb-5`}
          >
            <a
              href=""
              className={`text-uppercase text-decoration-none text-dark fw-semibold bg-black text-white rounded-5 py-2 px-3  ${style["bg_opacity_light_black"]}`}
            >
              get started
            </a>
            <a
              href=""
              className={`text-uppercase text-decoration-none text-dark fw-semibold  ${style["text_opacity_light_black"]}`}
            >
              contact sales
            </a>
          </div>
        </section>
      </section>

      {/* <!-- main --> */}
      <section>
        {/* <!-- models 0--> */}
        <div className={`container-fluid  ${style["light_gray_bg_1"]} py-5`}>
          <div
            className={`container px-0 d-flex flex-column flex-lg-row justify-content-center`}
          >
            <div className={`container`}>
              <h2 className={` ${style["section-heading-font-family"]} mb-4`}>
                Software models
              </h2>
              <p
                className={`text-center text-lg-start  ${style["font_20"]}  mb-4`}
              >
                Build DALL·E directly into your apps to generate and edit novel
                images and art. Our image models offer three tiers of resolution
                for flexibility.
              </p>
              <a
                href=""
                className={`text-uppercase text-decoration-none text-black-50 fw-semibold  ${style["text-hover-black"]}  ${style["pseudo_arrow"]}`}
              >
                learn more
              </a>
            </div>
            <div className={`container`}>
              <table className={`container-fluid`}>
                <thead>
                  <tr>
                    <th className={` ${style["table_header_font"]} px-2 py-2`}>
                      Version
                    </th>
                    <th className={` ${style["table_header_font"]} px-2 py-2`}>
                      price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={`${style["font_20"]}  px-2 py-1`}>bigger</td>
                    <td className={`${style["font_20"]}  px-2 py-1`}>1000$</td>
                  </tr>
                  <tr>
                    <td className={`${style["font_20"]}  px-2 py-1`}>medium</td>
                    <td className={`${style["font_20"]}  px-2 py-1`}>700$</td>
                  </tr>
                  <tr>
                    <td className={`${style["font_20"]}  px-2 py-1`}>
                      smaller
                    </td>
                    <td className={`${style["font_20"]}  px-2 py-1`}>300$</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* <!-- language models --> */}
        <div className={`container-fluid  ${style["bg_white"]} py-5`}>
          <div className={`container`}>
            <h2
              className={`pb-5 pt-5  ${style["section-heading-font-family"]}`}
            >
              Language models
            </h2>
            <h3 className={`pb-2  ${style["section-heading-font-family"]}`}>
              Base models
            </h3>

            <div className={`row`}>
              <div className={`col-12 col-md-6 col-lg-3 p-2`}>
                <div className={`p-4  ${style["light_gray_bg_2"]}`}>
                  <div className={`pb-4 d-flex align-items-center gap-2`}>
                    <h5 className={` ${style["section-heading-font-family"]}`}>
                      Ada
                    </h5>
                    <span
                      className={`text-black-50  ${style["font_0_88rem"]} mb-1`}
                    >
                      Fastest
                    </span>
                  </div>
                  <div className={`pt-5 d-flex align-items-center gap-2`}>
                    <h4
                      className={`p-0  ${style["section-heading-font-family"]}`}
                    >
                      $0.0003
                    </h4>
                    <span
                      className={`text-black-50  ${style["font_0_88rem"]} mb-1`}
                    >
                      /1k tokens
                    </span>
                  </div>
                </div>
              </div>
              <div className={`col-12 col-md-6 col-lg-3 p-2`}>
                <div className={`p-4  ${style["light_gray_bg_2"]}`}>
                  <div className={`pb-4 d-flex align-items-center gap-2`}>
                    <h5 className={`${style["section-heading-font-family"]}`}>
                      Babbage
                    </h5>
                    {/* <!-- <span className={`text-black-50  ${style["font_0_88rem"]}">Fastest</span> --> */}
                  </div>
                  <div className={`pt-5 d-flex align-items-center gap-2`}>
                    <h4
                      className={`p-0  ${style["section-heading-font-family"]}`}
                    >
                      $0.0003
                    </h4>
                    <span
                      className={`text-black-50  ${style["font_0_88rem"]} mb-1`}
                    >
                      /1k tokens
                    </span>
                  </div>
                </div>
              </div>
              <div className={`col-12 col-md-6 col-lg-3 p-2`}>
                <div className={`p-4  ${style["light_gray_bg_2"]}`}>
                  <div className={`pb-4 d-flex align-items-center gap-2`}>
                    <h5 className={` ${style["section-heading-font-family"]}`}>
                      Curie
                    </h5>
                    {/* <!-- <span className={`text-black-50  ${style["font_0_88rem"]}">Fastest</span> --> */}
                  </div>
                  <div className={`pt-5 d-flex align-items-center gap-2`}>
                    <h4
                      className={`p-0  ${style["section-heading-font-family"]}`}
                    >
                      $0.0003
                    </h4>
                    <span
                      className={`text-black-50  ${style["font_0_88rem"]} mb-1`}
                    >
                      /1k tokens
                    </span>
                  </div>
                </div>
              </div>
              <div className={`col-12 col-md-6 col-lg-3 p-2`}>
                <div className={`p-4  ${style["light_gray_bg_2"]}`}>
                  <div className={`pb-4 d-flex align-items-center gap-2`}>
                    <h5 className={` ${style["section-heading-font-family"]}`}>
                      Davinci
                    </h5>
                    <span
                      className={`text-black-50  ${style["font_0_88rem"]} mb-1`}
                    >
                      Most powerful
                    </span>
                  </div>
                  <div className={`pt-5 d-flex align-items-center gap-2`}>
                    <h4
                      className={`p-0  ${style["section-heading-font-family"]}`}
                    >
                      $0.0003
                    </h4>
                    <span
                      className={`text-black-50  ${style["font_0_88rem"]} mb-1`}
                    >
                      /1k tokens
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className={`row`}>
              <div className={`col-12 col-lg-6 pt-5 pb-4`}>
                <p className={`${style["font_18"]} fw-normal`}>
                  Multiple models, each with different capabilities and price
                  points. Ada is the fastest model, while Davinci is the most
                  powerful. <br />
                  <br />
                  Prices are per 1,000 tokens. You can think of tokens as pieces
                  of words, where 1,000 tokens is about 750 words. This
                  paragraph is 35 tokens.
                </p>
              </div>
            </div>
            <a
              href=""
              className={`text-uppercase text-decoration-none text-black fw-semibold  ${style["text-hover-black"]}  ${style["pseudo_arrow_down"]} pb-5`}
            >
              learn more
            </a>

            <div className={`row pt-5`}>
              <div className={`col-12 col-md-4 mb-1.5`}>
                <h3
                  className={`mb-1/3 d-flex  ${style["section-heading-font-family"]}  ${style["font_1_5rem"]}`}
                >
                  <span className={`icon position-relative ml-n0.125 mr-0.25`}>
                    [flag]
                  </span>
                  Start for free
                </h3>
                <div
                  className={`content no-col medium-xsmall-copy line-height-1.5`}
                >
                  Start experimenting with $18 in free credit that can be used
                  during your first 3 months.
                </div>
              </div>

              <div className={`col-12 col-md-4 mb-1.5`}>
                <h3
                  className={`mb-1/3 d-flex  ${style["section-heading-font-family"]}  ${style["font_1_5rem"]}`}
                >
                  <span className={`icon position-relative ml-n0.125 mr-0.25`}>
                    [barup]
                  </span>
                  Pay as you go
                </h3>
                <div
                  className={`content no-col medium-xsmall-copy line-height-1.5`}
                >
                  To keep things simple and flexible, pay only for the resources
                  you use.
                </div>
              </div>

              <div className={`col-12 col-md-4 mb-1.5`}>
                <h3
                  className={`mb-1/3 d-flex  ${style["section-heading-font-family"]}  ${style["font_1_5rem"]}`}
                >
                  <span className={`icon position-relative ml-n0.125 mr-0.25`}>
                    [check]
                  </span>
                  Choose your model
                </h3>
                <div
                  className={`content no-col medium-xsmall-copy line-height-1.5`}
                >
                  Use the right model for the job. We offer a spectrum of
                  capabilities and price points.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- models 1--> */}
        <div className={`container-fluid  ${style["bg_white"]} py-5`}>
          <div
            className={`container px-0 border-bottom py-5 d-flex flex-column flex-lg-row justify-content-center`}
          >
            <div className={`container`}>
              <h2 className={` ${style["section-heading-font-family"]} mb-4`}>
                Fine-tuned models
              </h2>
              <p
                className={`text-center text-lg-start  ${style["font_20"]}  mb-4`}
              >
                Build DALL·E directly into your apps to generate and edit novel
                images and art. Our image models offer three tiers of resolution
                for flexibility.
              </p>
              <a
                href=""
                className={`text-uppercase text-decoration-none text-black-50 fw-semibold  ${style["text-hover-black"]}  ${style["pseudo_arrow_down"]}`}
              >
                learn more
              </a>
            </div>
            <div className={`container`}>
              <table className={`container-fluid`}>
                <thead>
                  <tr>
                    <th className={` ${style["table_header_font"]} px-2 py-2`}>
                      Version
                    </th>
                    <th className={` ${style["table_header_font"]} px-2 py-2`}>
                      Price
                    </th>
                    <th className={` ${style["table_header_font"]} px-2 py-2`}>
                      Usage
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={` ${style["font_20"]}  px-2 py-1`}>
                      bigger
                    </td>
                    <td className={` ${style["font_20"]}  px-2 py-1`}>$1000</td>
                    <td className={` ${style["font_20"]}  px-2 py-1`}>$1000</td>
                  </tr>
                  <tr>
                    <td className={` ${style["font_20"]}  px-2 py-1`}>
                      medium
                    </td>
                    <td className={` ${style["font_20"]}  px-2 py-1`}>$700</td>
                    <td className={` ${style["font_20"]}  px-2 py-1`}>$700</td>
                  </tr>
                  <tr>
                    <td className={` ${style["font_20"]}  px-2 py-1`}>
                      smaller
                    </td>
                    <td className={` ${style["font_20"]}  px-2 py-1`}>$300</td>
                    <td className={` ${style["font_20"]}  px-2 py-1`}>$300</td>
                  </tr>
                  <tr>
                    <td className={` ${style["font_20"]}  px-2 py-1`}>tiny</td>
                    <td className={` ${style["font_20"]}  px-2 py-1`}>$50</td>
                    <td className={` ${style["font_20"]}  px-2 py-1`}>$50</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* <!-- models 2--> */}
        <div className={`container-fluid  ${style["bg_white"]} py-5`}>
          <div
            className={`container px-0 border-bottom py-5 d-flex flex-column flex-lg-row justify-content-center`}
          >
            <div className={`container`}>
              <h2 className={` ${style["section-heading-font-family"]} mb-4`}>
                Embedding models
              </h2>
              <p
                className={`text-center text-lg-start  ${style["font_20"]}  mb-4`}
              >
                Build DALL·E directly into your apps to generate and edit novel
                images and art. Our image models offer three tiers of resolution
                for flexibility.
              </p>
            </div>
            <div className={`container`}>
              <table className={`container-fluid`}>
                <thead>
                  <tr>
                    <th className={` ${style["table_header_font"]} px-2 py-2`}>
                      Version
                    </th>
                    <th className={` ${style["table_header_font"]} px-2 py-2`}>
                      price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={` ${style["font_20"]}  px-2 py-1`}>
                      bigger
                    </td>
                    <td className={` ${style["font_20"]}  px-2 py-1`}>1000$</td>
                  </tr>
                </tbody>
              </table>
              <p className={`.container-fluid text-black-50 pt-4`}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
                impedit dolore ullam consectetur eaque odio.
              </p>
            </div>
          </div>
        </div>

        {/* <!-- models 3 --> */}
        <div className={`container-fluid  ${style["bg_white"]} py-5`}>
          <div
            className={`container px-0 d-flex flex-column flex-lg-row justify-content-center`}
          >
            <div className={`container`}>
              <h2 className={` ${style["section-heading-font-family"]} mb-4`}>
                Usage Quotas
              </h2>
            </div>
            <div className={`container`}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                excepturi a hic vitae? Nihil odit asperiores facilis accusamus
                placeat, dicta possimus repellat recusandae consequuntur
                incidunt impedit ut saepe ea sequi.
              </p>
            </div>
          </div>
        </div>

        {/* <!-- FAQ section --> */}
        <div className={`container-fluid  ${style["light_gray_bg_1"]} py-5`}>
          <div
            className={`container  ${style["accordion-container"]} my-5 py-5`}
          >
            <h2 className={`pb-5  ${style["section-heading-font-family"]}`}>
              Frequently Asked Questions
            </h2>
            <div
              className={`accordion w-100  ${style["light_gray_bg_1"]}`}
              id={style["a_accordion"]}
            >
              <div className={`accordion-item  ${style["light_gray_bg_1"]}`}>
                <h2 className={`accordion-header`} id="headingOne">
                  <button
                    className={` accordion-button px-0 py-3 fw-bold`}
                    id={style["a_accordion-button"]}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Accordion Item
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className={`accordion-collapse collapse show`}
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className={`accordion-body px-0`}>
                    It is shown by default, until the collapse plugin adds the
                    appropriate classNamees that we use to style each element.
                    These classNamees control the overall appearance, as well as
                    the showing and hiding via CSS transitions. You can modify
                    any of this with custom CSS or overriding our default
                    variables. It's also worth noting that just about any HTML
                    can go within the , though the transition does limit
                    overflow.
                  </div>
                </div>
              </div>
              <div className={`accordion-item  ${style["light_gray_bg_1"]}`}>
                <h2 className={`accordion-header" id="headingTwo`}>
                  <button
                    className={` accordion-button px-0 py-3 fw-bold collapsed`}
                    id={style["a_accordion-button"]}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Accordion Item
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className={`accordion-collapse collapse`}
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className={`accordion-body px-0`}>
                    It is hidden by default, until the collapse plugin adds the
                    appropriate classNamees that we use to style each element.
                    These classNamees control the overall appearance, as well as
                    the showing and hiding via CSS transitions. You can modify
                    any of this with custom CSS or overriding our default
                    variables. It's also worth noting that just about any HTML
                    can go within the , though the transition does limit
                    overflow.
                  </div>
                </div>
              </div>
              <div className={`accordion-item  ${style["light_gray_bg_1"]}`}>
                <h2 className={`accordion-header" id="headingThree`}>
                  <button
                    className={` accordion-button px-0 py-3 fw-bold collapsed`}
                    id={style["a_accordion-button"]}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Accordion Item
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className={`accordion-collapse collapse`}
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className={`accordion-body px-0`}>
                    It is hidden by default, until the collapse plugin adds the
                    appropriate classNamees that we use to style each element.
                    These classNamees control the overall appearance, as well as
                    the showing and hiding via CSS transitions. You can modify
                    any of this with custom CSS or overriding our default
                    variables. It's also worth noting that just about any HTML
                    can go within the , though the transition does limit
                    overflow.
                  </div>
                </div>
              </div>
              <div className={`accordion-item  ${style["light_gray_bg_1"]}`}>
                <h2 className={`accordion-header" id="headingThree`}>
                  <button
                    className={` accordion-button px-0 py-3 fw-bold collapsed`}
                    id={style["a_accordion-button"]}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    Accordion Item
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className={`accordion-collapse collapse`}
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className={`accordion-body px-0`}>
                    It is hidden by default, until the collapse plugin adds the
                    appropriate classNamees that we use to style each element.
                    These classNamees control the overall appearance, as well as
                    the showing and hiding via CSS transitions. You can modify
                    any of this with custom CSS or overriding our default
                    variables. It's also worth noting that just about any HTML
                    can go within the , though the transition does limit
                    overflow.
                  </div>
                </div>
              </div>
              <div
                className={`accordion-item ${style["light_gray_bg_1"]} ${style["ai_border_bottom"]}`}
              >
                <h2 className={`accordion-header" id="headingThree`}>
                  <button
                    className={`accordion-button px-0 py-3 fw-bold collapsed`}
                    id={style["a_accordion-button"]}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    Accordion Item
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  className={`accordion-collapse collapse`}
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className={`accordion-body px-0 border_bottom`}>
                    It is hidden by default, until the collapse plugin adds the
                    appropriate classNamees that we use to style each element.
                    These classNamees control the overall appearance, as well as
                    the showing and hiding via CSS transitions. You can modify
                    any of this with custom CSS or overriding our default
                    variables. It's also worth noting that just about any HTML
                    can go within the , though the transition does limit
                    overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- get started --> */}
        <div className={`container-fluid  ${style["bg_white"]} py-5`}>
          <section className={`title_section container px-0 my-0 mx-auto py-5`}>
            <h1
              className={`text-center fw-normal display-4 mx-auto mb-3 pt-5 pb-4  ${style["section-heading-font-family"]}  ${style["get-started"]}`}
            >
              Get started with OpenAI's powerful language and code generation
              models.
            </h1>

            <div
              className={`d-flex flex-column flex-sm-row align-items-center justify-content-center gap-4 mb-5`}
            >
              <a
                href=""
                className={`text-uppercase text-decoration-none text-dark fw-semibold bg-black text-white rounded-5 py-2 px-3  ${style["bg_opacity_light_black"]}`}
              >
                get started
              </a>
              <a
                href=""
                className={`text-uppercase text-decoration-none text-dark fw-semibold  ${style["text_opacity_light_black"]}`}
              >
                contact sales
              </a>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Pricing;
