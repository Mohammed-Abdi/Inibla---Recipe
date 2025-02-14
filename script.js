//animation on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hidden = document.querySelectorAll(".hidden");
hidden.forEach((e1) => observer.observe(e1));

const nav = document.querySelector(".header .navLinks");
const menu = document.querySelector(".menu");
const main = document.querySelector("main");

//opens the menu by clicking the menu icon
menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  nav.classList.toggle("active");
});

//closes the menu by clicking the navigation
nav.addEventListener("click", () => {
  menu.classList.remove("active");
  nav.classList.remove("active");
});

//closes the navigation by clicking the main body
main.addEventListener("click", () => {
  menu.classList.remove("active");
  nav.classList.remove("active");
});

//rating
const starButtons = document.querySelectorAll(".starButton");

starButtons.forEach((button) => {
  const star = button.querySelector("i");

  button.addEventListener("click", () => {
    star.classList.toggle("colorChange");
  });
});

//search engine
const searchBar = document.querySelector(".searchBar");
const recipes = document.querySelectorAll(".recipe");

//hide all other recipes
searchBar.addEventListener("click", () => {
  recipes.forEach((recipe) => {
    recipe.classList.add("place");
  });
});

//filter the choices
searchBar.addEventListener("input", (e) => {
  const searchTerm = e.target.value.trim().toLowerCase();

  if (searchTerm === "") {
    recipes.forEach((recipe) => recipe.classList.remove("place"));
  } else {
    recipes.forEach((recipe) => {
      const title = recipe
        .querySelector(".recipeTitle")
        .textContent.toLowerCase();
      const isMatch = title.includes(searchTerm);
      recipe.classList.toggle("place", !isMatch);
    });
  }
});
