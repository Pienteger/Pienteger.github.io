import React from "react";
import style from "../../Pages/Css/Pricing.module.css";
import { Link } from "react-router-dom";
import {
  DataBarVertical24Filled,
  Checkmark24Regular,
} from "@fluentui/react-icons";

const OpenAiPricing = () => {
  return (
    <>
      {/* heading */}
      <div className={`sticky-top`}>
        <div
          className={`container px-0 my-0 mx-auto py-4 position-relative  ${style["bg_white_transparent"]}`}
        >
          {/* <!-- navigation --> */}
          <nav className={`navbar navbar-expand-lg `}>
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
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <section className={`container-fluid`}>
        <section
          className={`title_section container px-0 my-0 mx-auto pt-5 mt-0`}
        >
          <h1 className={`text-center fw-normal display-4 mb-3`}>Pricing</h1>
          <p className={`text-center ${style["font_20"]} mb-4`}>
            Simple and flexible. Only pay for what you use.
          </p>
          <div
            className={`d-flex flex-column flex-sm-row align-items-center justify-content-center gap-4 mb-5`}
          >
            <Link
              to="/login"
              className={`text-uppercase text-decoration-none text-dark fw-semibold bg-black text-white rounded-5 py-2 px-3  ${style["bg_opacity_light_black"]}`}
            >
              get started
            </Link>
            <Link
              to="/Contact"
              className={`text-uppercase text-decoration-none text-dark fw-semibold  ${style["text_opacity_light_black"]}`}
            >
              contact sales
            </Link>
          </div>
        </section>
      </section>

      {/* <!-- main --> */}
      <section>
        {/* <!-- models 0--> */}
        <div className={`container-fluid`}>
          <div
            className={`container px-0 d-flex flex-column flex-lg-row justify-content-center`}
          >
            <div className={`container`}>
              <h2 className={` ${style["section-heading-font-family"]} mb-4`}>
                Image models
              </h2>
              <p
                className={`text-center text-lg-start  ${style["font_20"]}  mb-4`}
              >
                Build DALL·E directly into your apps to generate and edit novel
                images and art. Our image models offer three tiers of resolution
                for flexibility.
              </p>
              <a
                href="#faqid"
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
                      Resolution
                    </th>
                    <th className={` ${style["table_header_font"]} px-2 py-2`}>
                      price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={`${style["font_20"]}  px-2 py-1`}>
                      1024x1024
                    </td>
                    <td className={`${style["font_20"]}  px-2 py-1`}>1000$</td>
                  </tr>
                  <tr>
                    <td className={`${style["font_20"]}  px-2 py-1`}>
                      512x512
                    </td>
                    <td className={`${style["font_20"]}  px-2 py-1`}>700$</td>
                  </tr>
                  <tr>
                    <td className={`${style["font_20"]}  px-2 py-1`}>
                      256x256
                    </td>
                    <td className={`${style["font_20"]}  px-2 py-1`}>300$</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* <!-- language models --> */}
        <div className={`container-fluid`}>
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
              href="#faqid"
              className={`text-uppercase text-decoration-none text-black fw-semibold  ${style["text-hover-black"]}  ${style["pseudo_arrow_down"]} pb-5`}
            >
              learn more
            </a>

            <div className={`row pt-5`}>
              <div className={`col-12 col-md-4 mb-1.5`}>
                <h3
                  className={`mb-1/3 d-flex align-items-center gap-2  ${style["section-heading-font-family"]}  ${style["font_1_5rem"]}`}
                >
                  <span className={`icon position-relative ml-n0.125 mr-0.25`}>
                    <DataBarVertical24Filled />
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
                  className={`mb-1/3 d-flex align-items-center gap-2  ${style["section-heading-font-family"]}  ${style["font_1_5rem"]}`}
                >
                  <span className={`icon position-relative ml-n0.125 mr-0.25`}>
                    <Checkmark24Regular />
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
        <div className={`container-fluid py-2`}>
          <div
            className={`container px-0 border-bottom py-2 d-flex flex-column flex-lg-row justify-content-center`}
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
                href="#faqid"
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
        <div className={`container-fluid py-1`}>
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

        {/* <!-- FAQ section --> */}
        <div className={`container-fluid py-1`} id="faqid">
          <div
            className={`container  ${style["accordion-container"]} my-5 py-5`}
          >
            <h2 className={`pb-5  ${style["section-heading-font-family"]}`}>
              Frequently Asked Questions
            </h2>
            <div className={`accordion w-100`} id={style["a_accordion"]}>
              <div className={`accordion-item`}>
                <h2 className={`accordion-header" id="headingThree`}>
                  <button
                    className={` accordion-button px-0 py-3 fw-bold collapsed`}
                    id={style["a_accordion-button"]}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    What's a token?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className={`accordion-collapse collapse`}
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className={`accordion-body px-0`}>
                    <div className="pb-5">
                      <p>
                        You can think of tokens as pieces of words used for
                        natural language processing. For English text, 1 token
                        is approximately 4 characters or 0.75 words. As a point
                        of reference, the collected works of Shakespeare are
                        about 900,000 words or 1.2M&nbsp;tokens.
                      </p>
                      <p>
                        To learn more about how tokens work and estimate
                        your&nbsp;usage…
                      </p>
                      <ul>
                        <li>
                          Experiment with our interactive&nbsp;
                          <a
                            href="https://beta.openai.com/tokenizer"
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            Tokenizer&nbsp;tool
                          </a>
                          .
                        </li>
                        <li>
                          Log in to your account and enter text into the
                          Playground. The counter in the footer will display how
                          many tokens are in your&nbsp;text.
                          <br />{" "}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`accordion-item`}>
                <h2 className={`accordion-header`} id="headingOne">
                  <button
                    className={` accordion-button px-0 py-3 fw-bold`}
                    id={style["a_accordion-button"]}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="true"
                    aria-controls="collapseTwo"
                  >
                    Which model should I use?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className={`accordion-collapse collapse show`}
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className={`accordion-body px-0`}>
                    While Davinci is generally the most capable model, the other
                    models can perform certain tasks extremely well and, in some
                    cases, significantly faster. They also have cost advantages.
                    For example, Curie can perform many of the same tasks as
                    Davinci, but faster and for 1/10th the cost. We encourage
                    developers to experiment to find the model that's most
                    efficient for your application. Visit our documentation for
                    a more detailed{" "}
                    <a href="" className="text-decoration-underline">
                      model comparison
                    </a>{" "}
                    .
                  </div>
                </div>
              </div>
              <div className={`accordion-item`}>
                <h2 className={`accordion-header" id="headingTwo`}>
                  <button
                    className={` accordion-button px-0 py-3 fw-bold collapsed`}
                    id={style["a_accordion-button"]}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    How will I know how many tokens I've used each month?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className={`accordion-collapse collapse`}
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className={`accordion-body px-0`}>
                    Log in to your account to view your{" "}
                    <a href="" className="text-decoration-underline">
                      usage tracking dashboard
                    </a>{" "}
                    . This page will show you how many tokens you've used during
                    the current and past billing cycles.
                  </div>
                </div>
              </div>
              <div className={`accordion-item`}>
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
                    How can I manage my spending?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className={`accordion-collapse collapse`}
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className={`accordion-body px-0`}>
                    You can configure a usage hard limit in your billing
                    settings, after which we'll stop serving your requests. You
                    may also configure a soft limit to receive an email alert
                    once you pass a certain usage threshold. There may be a
                    delay in enforcing the limit, and you are responsible for
                    any overage incurred. We recommend checking your{" "}
                    <a href="" className="text-decoration-underline">
                      usage tracking
                    </a>{" "}
                    dashboard regularly to monitor your spend.
                  </div>
                </div>
              </div>
              <div className={`accordion-item`}>
                <h2 className={`accordion-header" id="headingThree`}>
                  <button
                    className={` accordion-button px-0 py-3 fw-bold collapsed`}
                    id={style["a_accordion-button"]}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    Does Playground usage count against my quota?
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  className={`accordion-collapse collapse`}
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className={`accordion-body px-0`}>
                    Yes, we treat Playground usage the same as regular API
                    usage.
                  </div>
                </div>
              </div>
              <div className={`accordion-item`}>
                <h2 className={`accordion-header" id="headingThree`}>
                  <button
                    className={`accordion-button px-0 py-3 fw-bold collapsed`}
                    id={style["a_accordion-button"]}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSix"
                    aria-expanded="false"
                    aria-controls="collapseSix"
                  >
                    How is pricing calculated for Completions?
                  </button>
                </h2>
                <div
                  id="collapseSix"
                  className={`accordion-collapse collapse`}
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className={`accordion-body px-0 border_bottom`}>
                    <div className="pb-5">
                      <p>
                        <a
                          href="https://beta.openai.com/docs/api-reference/completions"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          Completions
                        </a>
                        &nbsp;requests are billed based on the number of tokens
                        sent in your prompt plus the number of tokens in the
                        completion(s) returned by the&nbsp;API.
                      </p>
                      <p>
                        The <code>best_of</code> and <code>n</code> parameters
                        may also impact costs. Because these parameters generate
                        multiple completions per prompt, they act as multipliers
                        on the number of tokens&nbsp;returned.
                      </p>
                      <p>
                        Your request may use up to{" "}
                        <code>
                          num_tokens(prompt) + max_tokens * max(n, best_of)
                        </code>{" "}
                        tokens, which will be billed at the per-engine rates
                        outlined at the top of this&nbsp;page.
                      </p>
                      <p>
                        In the simplest case, if your prompt contains 10 tokens
                        and you request a single 90 token completion from the
                        davinci engine, your request will use 100 tokens and
                        will cost&nbsp;$0.002.
                      </p>
                      <p>
                        You can limit costs by reducing prompt length or maximum
                        response length, limiting usage of{" "}
                        <code>best_of/n</code>, adding appropriate stop
                        sequences, or using engines with lower
                        per-token&nbsp;costs.
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`accordion-item`}>
                <h2 className={`accordion-header" id="headingThree`}>
                  <button
                    className={`accordion-button px-0 py-3 fw-bold collapsed`}
                    id={style["a_accordion-button"]}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSeven"
                    aria-expanded="false"
                    aria-controls="collapseSeven"
                  >
                    How is pricing calculated for Fine-tuning?
                  </button>
                </h2>
                <div
                  id="collapseSeven"
                  className={`accordion-collapse collapse`}
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className={`accordion-body px-0 border_bottom`}>
                    <div className="pb-5">
                      <p>
                        There are two components to fine-tuning pricing:
                        training and&nbsp;usage.
                      </p>
                      <p>
                        When training a fine-tuned model, the total tokens used
                        will be billed according to our&nbsp;
                        <a
                          href="https://openai.com/api/pricing/#quotas"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          training rates
                        </a>
                        . Note that the number of training tokens depends on the
                        number of tokens in your training dataset&nbsp;
                        <strong>and</strong>&nbsp;your chosen number of&nbsp;
                        <a
                          href="https://beta.openai.com/docs/guides/fine-tuning/hyperparameters"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          training epochs
                        </a>
                        . The default number of epochs is&nbsp;4.
                      </p>
                      <br />
                      <span className="p-3" style={{ background: "#e5e5e5" }}>
                        (Tokens in your training file * Number of training
                        epochs) = Total training tokens
                        <br />
                      </span>
                      <br />
                      <p>
                        Once you fine-tune a model, you'll be billed only for
                        the tokens you use. Requests sent to fine-tuned models
                        are billed at our&nbsp;
                        <a
                          href="https://openai.com/api/pricing/#quotas"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          usage&nbsp;rates
                        </a>
                        .<br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`accordion-item`}>
                <h2 className={`accordion-header" id="headingThree`}>
                  <button
                    className={`accordion-button px-0 py-3 fw-bold collapsed`}
                    id={style["a_accordion-button"]}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseEight"
                    aria-expanded="false"
                    aria-controls="collapseEight"
                  >
                    Is there an SLA on the various models?
                  </button>
                </h2>
                <div
                  id="collapseEight"
                  className={`accordion-collapse collapse`}
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className={`accordion-body px-0 border_bottom`}>
                    <div className="pb-5">
                      <p>
                        We will be publishing an SLA soon. In the meantime you
                        can visit our&nbsp;
                        <a
                          href="https://status.openai.com/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          Status page
                        </a>
                        &nbsp;to monitor service availability and view
                        historical uptime. If your company or application has
                        specific requirements, please&nbsp;
                        <a
                          href="https://openai.com/contact-sales"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          contact our sales&nbsp;team
                        </a>
                        .<br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`accordion-item  ${style["ai_border_bottom"]}`}>
                <h2 className={`accordion-header" id="headingThree`}>
                  <button
                    className={`accordion-button px-0 py-3 fw-bold collapsed`}
                    id={style["a_accordion-button"]}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseNine"
                    aria-expanded="false"
                    aria-controls="collapseNine"
                  >
                    Is the API available on Microsoft Azure?
                  </button>
                </h2>
                <div
                  id="collapseNine"
                  className={`accordion-collapse collapse`}
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className={`accordion-body px-0 border_bottom`}>
                    <div className="pb-5">
                      <p>
                        Yes. Azure customers can access the OpenAI API on Azure
                        with the compliance, regional support, and
                        enterprise-grade security that Azure offers.&nbsp;
                        <a
                          href="https://azure.microsoft.com/en-us/services/openai-service/#overview"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          Learn more
                        </a>
                        &nbsp;or contact&nbsp;
                        <a
                          href="mailto:sales@openai.com"
                          rel="noopener noreferrer"
                        >
                          sales@openai.com
                        </a>
                        .<br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- get started --> */}
        <div className={`container-fluid py-1`}>
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
              <Link
                to="/login"
                className={`text-uppercase text-decoration-none text-dark fw-semibold bg-black text-white rounded-5 py-2 px-3  ${style["bg_opacity_light_black"]}`}
              >
                get started
              </Link>
              <Link
                to="/Contact"
                className={`text-uppercase text-decoration-none text-dark fw-semibold  ${style["text_opacity_light_black"]}`}
              >
                contact sales
              </Link>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default OpenAiPricing;
