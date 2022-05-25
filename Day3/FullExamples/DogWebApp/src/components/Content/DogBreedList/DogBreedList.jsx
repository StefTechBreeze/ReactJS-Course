import React, { useState } from "react";
import { DogBreedButton } from "./DogBreedButton/DogBreedButton";

import "./DogBreedList.css";

const dogBreeds = ["akita", "boxer", "terrier", "buhund", "husky"];

export const DogBreedList = ({ setCurrentBreedUrl }) => {
  const [currentBreed, setCurrentBreed] = useState(null);

  return (
    <div className="content__dog-list__container">
      <h2 className="content__dog-list__title">Choose a dog breed</h2>
      <div className="content__dog-list">
        {dogBreeds.map((breed) => {
          return (
            <DogBreedButton
              key={breed}
              label={breed}
              isActive={currentBreed === breed}
              onClick={() => {
                setCurrentBreed(breed);
                fetch(`https://dog.ceo/api/breed/${breed}/images/random`).then(
                  (r) =>
                    r.json().then(({ message }) => setCurrentBreedUrl(message))
                );
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
