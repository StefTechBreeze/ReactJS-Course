import React, { useState } from "react";
import { DogBreedList } from "./DogBreedList/DogBreedList";
import { DogBreedViewer } from "./DogBreedViewer/DogBreedViewer";

import "./Content.css";
import { RandomDogBreedViewer } from "./RandomDogBreedViewer/RandomDogBreedViewer";
import { Tabs } from "./Tabs/Tabs";

export const Content = () => {
  const [currentBreedUrl, setCurrentBreedUrl] = useState(null);

  return (
    <div className="content">
      <Tabs tabItems={["Random Dog", "Breed List"]}>
        <RandomDogBreedViewer />
        <>
          <DogBreedList setCurrentBreedUrl={setCurrentBreedUrl} />
          <DogBreedViewer currentBreedUrl={currentBreedUrl} />
        </>
      </Tabs>
    </div>
  );
};
