import { useState } from "react";

import "./DogBreedChecker.css";

export const DogBreedChecker = () => {
  const [checked, setChecked] = useState(null);
  const [loading, setLoading] = useState(false);

  console.log(loading);
  const checkBreed = (event) => {
    setChecked(null);

    if (event.key === "Enter") {
      setLoading(true);
      fetch("https://dog.ceo/api/breeds/list/all")
        .then((r) => r.json())
        .then((data) => {
          if (data.message[event.target.value]) {
            setChecked(true);
          } else {
            setChecked(false);
          }
          setLoading(false);
        });
    }
  };

  return (
    <div className="dog-breed-checker component">
      <p>Type a dog breed and check</p>
      <input onKeyDown={checkBreed} />
      {checked === null ? null : checked ? (
        <img alt="" src="/svg/fireworks.svg" />
      ) : (
        <img alt="" src="/svg/cross.svg" />
      )}
      {loading && <p>loading</p>}
    </div>
  );
};
