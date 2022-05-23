const breedsContainer = document.querySelector(".content__dog-list");
const breedImg = document.querySelector(".content__dog-viewer__img");

const getDogBreeds = () =>
  fetch("https://dog.ceo/api/breeds/list/all")
    .then((r) => r.json())
    .then((data) => Object.keys(data.message));

const createDogBreedButton = (breed) => {
  const button = document.createElement("button");
  button.classList.add("content__dog-list__button");
  button.innerText = breed;

  return button;
};

const selectDogBreedButton = (breedButton) => {
  document
    .querySelector(".content__dog-list__button--selected")
    ?.classList.remove("content__dog-list__button--selected");
  breedButton.classList.add("content__dog-list__button--selected");
};

const setGetImgByDogBreed = (breedButton) => {
  const breed = breedButton.innerText;
  breedButton.addEventListener("click", () => {
    selectDogBreedButton(breedButton);
    fetch(`https://dog.ceo/api/breed/${breed}/images`)
      .then((r) => r.json())
      .then((data) => {
        const imgSrc = data.message[0];
        breedImg.setAttribute("src", imgSrc);
      });
  });
};

const renderDogBreeds = (breeds) => {
  for (const breed of breeds) {
    const breedButton = createDogBreedButton(breed);
    setGetImgByDogBreed(breedButton);
    breedsContainer.appendChild(breedButton);
  }
};

getDogBreeds().then(renderDogBreeds);
