import { useState } from "react";
import "./App.css";
import { tabs } from "./Data/Tabs";

function App() {
  const [activeTabs, setactiveTabs] = useState(0);
  const [activeContent, setactiveContent] = useState(tabs[0]);

  const changedData = (index) => {
    setactiveTabs(index);
    setactiveContent(tabs[index]);
  };
  return (
    <>
      <div className="main">
        <h1>Law Prep Vision Mission and Values</h1>

        <ul className="m-4 d-flex list-unstyled gap-4 text-center">
          {tabs.map((tabsItems, index) => {
            return (
              <li className="">
                <button
                  onClick={() => {
                    changedData(index);
                  }}
                  className={activeTabs == index ? "activeButton" : ""}
                >
                  {tabsItems.title}
                </button>
              </li>
            );
          })}
        </ul>

        {activeContent !== undefined ? <p>{activeContent.description}</p> : ""}
      </div>
    </>
  );
}

export default App;
