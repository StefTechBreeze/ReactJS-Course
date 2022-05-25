import React, { useEffect, useState } from "react";
import { DogBreedButton } from "./DogBreedButton/DogBreedButton";

import "./DogBreedList.css";

export const DogBreedList = (props) => {
  const [selectedBreedIndex, setBreedIndex] = useState();
  const [dogBreeds, setDogBreeds] = useState([]);

  const getRandomImgByBreed = (breed) => {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        props.setDogViewUrl(data.message);
      });
  };

  useEffect(() => {
    console.log("did mount and fetch");
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((r) => r.json())
      .then((data) => {
        const breeds = Object.keys(data.message);
        setDogBreeds(breeds);
      });
  }, []);

  // triggers for every internal or external update
  // useEffect(() => {
  //   console.log("did update");
  //   setBreedIndex(selectedBreedIndex + 1);
  // });

  // triggers only if selectedBreedIndex changes values from one render to another
  useEffect(() => {
    console.log("did update with dependencies");
  }, [selectedBreedIndex]);

  return (
    <div className="content__dog-list__container">
      <h2 className="content__dog-list__title">Choose a dog breed</h2>
      <div className="content__dog-list">
        {dogBreeds.map((breed, index) => {
          return (
            <DogBreedButton
              key={index}
              selected={index === selectedBreedIndex}
              onClick={() => {
                getRandomImgByBreed(breed);
                setBreedIndex(index);
              }}
            >
              {breed}
            </DogBreedButton>
          );
        })}
      </div>
    </div>
  );
};
