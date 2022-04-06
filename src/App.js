import { useState } from "react";
import "./styles.css";

const tabItems = [
  {
    id: 1,
    title: "Tab 1",
    content: "Content 1"
  },
  {
    id: 2,
    title: "Tab 2",
    content: "Content 2"
  },
  {
    id: 3,
    title: "Tab 3",
    content: "Content 3"
  },
  {
    id: 4,
    title: "Tab 4",
    content: "Content 5"
  }
];
export default function App() {
  const [active, setActive] = useState(1);

  const TabsComponent = () => (
    <div className="wrapper">
      <div className="tabs">
        {tabItems.map(({ id, title }) => (
          <TabItemComponent
            key={title}
            title={title}
            onItemClicked={() => setActive(id)}
            isActive={active === id}
          />
        ))}
      </div>
      <div className="content">
        {tabItems.map(({ id, content }) => {
          return active === id ? content : "";
        })}
      </div>
    </div>
  );

  const TabItemComponent = (props) => {
    const { title, onItemClicked, isActive = false } = props;
    return (
      <div
        className={isActive ? "tabitem" : "tabitem tabitem--inactive"}
        onClick={onItemClicked}
      >
        <p className="tabitem__title">{title}</p>
      </div>
    );
  };

  return (
    <div className="App">
      <TabsComponent />
    </div>
  );
}
