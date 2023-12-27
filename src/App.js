import "./index.css";

import { categoryObj, dataObj } from "./obj.js";
import { categoryAdd } from "./obj.js";

function App() {
  return (
    <div className="container">
      <FirstSection />
      <SecondSection />
    </div>
  );
}

const FirstSection = () => {
  return (
    <div className="first-section">
      <div className="first-section-container">
        <Logo img="images/Logo/Logo.png" />
        <Category title="Category" obj={categoryObj} btnObj={categoryAdd} />
        <Data title="Data" obj={dataObj} />
      </div>
    </div>
  );
};

const Logo = ({ img }) => {
  return (
    <div>
      <img src={img} alt="Logo" id="logo" />
    </div>
  );
};

const Category = ({ title, obj, btnObj }) => {
  return (
    <div>
      <h2 className="title">{title}</h2>
      <ul className="category-ul">
        {obj.map((item) => (
          <li className="category-li">
            <a href="#" className="a-tag">
              <span>
                <img src={item.icon} />
              </span>
              <span>{item.text}</span>
            </a>
          </li>
        ))}
        <button className="add-category">
          <span className="add-item-category-span">
            <img src={btnObj.icon} />
          </span>
          <span className="add-item-category-span">{btnObj.text}</span>
        </button>
      </ul>
    </div>
  );
};

const Data = ({ title, obj }) => {
  return (
    <div>
      <h2 className="title">{title}</h2>
      <ul className="category-ul">
        {obj.map((item) => (
          <li className="category-li">
            <a href="#" className="a-tag">
              <span>
                <img src={item.icon} />
              </span>
              <span>{item.text}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};


const SecondSection = () => {
  return <div></div>;
};

export default App;
