import React, { useState } from "react";
import { DogBreedList } from "./DogBreedList/DogBreedList";
import { DogBreedViewer } from "./DogBreedViewer/DogBreedViewer";

import "./Content.css";
import { RandomDogBreedViewer } from "./RandomDogBreedViewer/RandomDogBreedViewer";
import { CheckboxList } from "./CheckboxList/CheckboxList";
import { ClickCounter } from "./ClickCounter/ClickCounter";
import { Tabs } from "./Tabs/Tabs";

export const Content = () => {
  const [dogViewUrl, setDogViewUrl] = useState(
    "https://en.bcdn.biz/Images/2018/4/30/3947c575-2a29-4127-9675-ff305a946278.jpg"
  );

  return (
    <div className="content">
      <DogBreedList setDogViewUrl={setDogViewUrl} />
      <DogBreedViewer dogViewUrl={dogViewUrl} />
      {/* <RandomDogBreedViewer />
      {/* <CheckboxList /> */}
      {/* <ClickCounter /> */}
      {/* <Tabs tabItems={["Tab1", "Tab2", "Tab3"]}>
        <p>This is tab 1</p>
        <p>This is tab 2</p>
        <div>
          <button>Tab 3</button>
        </div>
      </Tabs> */}
    </div>
  );
};
