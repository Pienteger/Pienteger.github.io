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
      <div className={`market_header bg-dark ${style["minheight7rem"]} p-5`}>
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
      <div className="container m-0 px-0 py-5 d-flex">
        <div className="container m-0 px-0 sidebar">
          <h3 className="text-dark">Solution Categories</h3>
          <ul className="list-unstyled">
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
            <li>item 4</li>
            <li>item 5</li>
            <li>item 6</li>
            <li>item 7</li>
            <li>item 8</li>
            <li>item 9</li>
            <li>item 10</li>
          </ul>
        </div>
        <div className="container m-0 px-0 content_cards">
          <Card style={{ maxWidth: "25vw" }}>
            <CardHeader
              header={<img src={openai_logo} style={{ maxHeight: 50 }} />}
            ></CardHeader>
            <p>
              OpenAi is a company that is working on artificial intelligence and
              machine learning.
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
  );
};

export default Marketplace;
