import { Button } from "@fluentui/react-components";
import {
  Card,
  CardFooter,
  CardHeader,
  CardPreview,
} from "@fluentui/react-components/unstable";
import {
  Info20Regular,
  Money20Regular,
  Search24Regular,
} from "@fluentui/react-icons";
import openai_logo from "../images/openai.svg";
import style from "../Pages/Css/MarketPlace.module.css";

const Marketplace = () => {
  return (
    <div className="d-flex flex-column flex-wrap">
      <div
        className={`market_header ${style["carbon_effect_bg"]} ${style["minheight7rem"]} px-0 py-5`}
      >
        <h1 className="text-white text-center">Find a Solution</h1>
        <div className="d-flex align-items-center justify-content-center">
          <form className="bg-white rounded d-flex align-items-center py-2 px-3 my-4">
            <Search24Regular />
            <input
              type="text"
              className={`border-0 shadow-none ${style["search_input"]} rounded`}
              placeholder="Search"
            />
          </form>
        </div>
      </div>
      <div className="container m-0 p-0 d-flex">
        <div className="row w-100 mx-0">
          <div className="container mx-0 px-0 col-3 sidebar">
            <h3 className="text-dark pb-4">Solution Categories</h3>
            <ul className="list-unstyled d-flex flex-column pe-5">
              <li
                className={`${style["border_bottom"]} py-3 ${style["font1_1"]}`}
              >
                Category Name
              </li>
              <li
                className={`${style["border_bottom"]} py-3 ${style["font1_1"]}`}
              >
                Category Name
              </li>
              <li
                className={`${style["border_bottom"]} py-3 ${style["font1_1"]}`}
              >
                Category Name
              </li>
              <li
                className={`${style["border_bottom"]} py-3 ${style["font1_1"]}`}
              >
                Category Name
              </li>
              <li
                className={`${style["border_bottom"]} py-3 ${style["font1_1"]}`}
              >
                Category Name
              </li>
              <li
                className={`${style["border_bottom"]} py-3 ${style["font1_1"]}`}
              >
                Category Name
              </li>
            </ul>
          </div>
          <div className="container mx-0 px-0 col-9 content_cards">
            <div className="row mx-0 px-0">
              <div className="col-12 col-md-6 col-lg-4 mx-0 px-2 pb-4">
                <Card style={{ width: "100%" }}>
                  <CardHeader
                    header={<img src={openai_logo} style={{ maxHeight: 50 }} />}
                  ></CardHeader>
                  <p>
                    OpenAi is a company that is working on artificial
                    intelligence and machine learning.
                  </p>
                  <CardFooter>
                    <Button
                      as="a"
                      href="/marketplace/openai"
                      icon={<Info20Regular />}
                    >
                      Learn More
                    </Button>
                    <Button
                      as="a"
                      href="/marketplace/openai_pricing"
                      icon={<Money20Regular />}
                    >
                      Pricing
                    </Button>
                  </CardFooter>
                </Card>
              </div>
              <div className="col-12 col-md-6 col-lg-4 mx-0 px-2 pb-4">
                <Card style={{ width: "100%" }}>
                  <CardHeader
                    header={<img src={openai_logo} style={{ maxHeight: 50 }} />}
                  ></CardHeader>
                  <p>
                    OpenAi is a company that is working on artificial
                    intelligence and machine learning.
                  </p>
                  <CardFooter>
                    <Button
                      as="a"
                      href="/marketplace/openai"
                      icon={<Info20Regular />}
                    >
                      Learn More
                    </Button>
                    <Button
                      as="a"
                      href="/marketplace/openai_pricing"
                      icon={<Money20Regular />}
                    >
                      Pricing
                    </Button>
                  </CardFooter>
                </Card>
              </div>
              <div className="col-12 col-md-6 col-lg-4 mx-0 px-2 pb-4">
                <Card style={{ width: "100%" }}>
                  <CardHeader
                    header={<img src={openai_logo} style={{ maxHeight: 50 }} />}
                  ></CardHeader>
                  <p>
                    OpenAi is a company that is working on artificial
                    intelligence and machine learning.
                  </p>
                  <CardFooter>
                    <Button
                      as="a"
                      href="/marketplace/openai"
                      icon={<Info20Regular />}
                    >
                      Learn More
                    </Button>
                    <Button
                      as="a"
                      href="/marketplace/openai_pricing"
                      icon={<Money20Regular />}
                    >
                      Pricing
                    </Button>
                  </CardFooter>
                </Card>
              </div>
              <div className="col-12 col-md-6 col-lg-4 mx-0 px-2 pb-4">
                <Card style={{ width: "100%" }}>
                  <CardHeader
                    header={<img src={openai_logo} style={{ maxHeight: 50 }} />}
                  ></CardHeader>
                  <p>
                    OpenAi is a company that is working on artificial
                    intelligence and machine learning.
                  </p>
                  <CardFooter>
                    <Button
                      as="a"
                      href="/marketplace/openai"
                      icon={<Info20Regular />}
                    >
                      Learn More
                    </Button>
                    <Button
                      as="a"
                      href="/marketplace/openai_pricing"
                      icon={<Money20Regular />}
                    >
                      Pricing
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
