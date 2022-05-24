// fetch example

document
  .querySelector(".content__dog-viewer__img")
  .setAttribute("src", "https://");

fetch("https://dog.ceo/api/breeds/image/random")
  .then((response) => {
    console.log(response);

    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
