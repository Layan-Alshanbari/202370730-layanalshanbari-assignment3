const themeButton = document.querySelector("#theme-toggle");
const filterButtons= document.querySelectorAll("[data-filter]");
const projectCards= document.querySelectorAll(".project-card");
const contactForm= document.querySelector("#contact-form");
const formStatus= document.querySelector("#form-status");
const githubStatus = document.querySelector("#github-status");
const githubRepositories = document.querySelector("#github-repositories");
const repositorySort = document.querySelector("#repository-sort");


if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    themeButton.textContent = "Light Mode";
}

// Return to the top when the page loads.
window.addEventListener("load", function () {
    window.scrollTo(0, 0);
});

// Restore the theme saved from the visitor's previous visit.
themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem(
        "theme",
        document.body.classList.contains("dark-mode") ? "dark" : "light"
    );
    if (document.body.classList.contains("dark-mode")) {
        themeButton.textContent = "Light Mode";
    } else {
        themeButton.textContent = "Dark Mode";
    }
});

// Filter the portfolio project cards by category.
filterButtons.forEach(function (button){
     button.addEventListener("click", function(){
           const selectedCategory= button.dataset.filter;
           projectCards.forEach(function (card){
           if(selectedCategory === "all" || card.dataset.category === selectedCategory){
                 card.hidden= false;
          } else{
                   card.hidden= true;
                   }
         })
    })
});

// Show confirmation after the browser accepts the form fields.
contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      formStatus.textContent= "Thanks! Your form is valid.";
      contactForm.reset();
});

// Fetch and display public GitHub repositories.
function loadRepositories() {
    const repositoriesUrl =
        "https://api.github.com/users/Layan-Alshanbari/repos?sort=created&direction=" +
        repositorySort.value +
        "&per_page=5";

    githubRepositories.replaceChildren();
    githubStatus.hidden = false;
    githubStatus.textContent = "Loading repositories...";

    fetch(repositoriesUrl)
        .then(function (response) {
            if (!response.ok) {
                throw new Error("GitHub request failed");
            }
            return response.json();
        })
        .then(function (repositories) {
            repositories.forEach(function (repository) {
                const card = document.createElement("article");
                card.classList.add("project-card");

                const title = document.createElement("h3");
                title.textContent = repository.name;

                const description = document.createElement("p");
                description.textContent =
                    repository.description || "No description provided.";

                const language = document.createElement("p");
                language.textContent =
                    "Language: " + (repository.language || "Not specified");

                const link = document.createElement("a");
                link.href = repository.html_url;
                link.textContent = "View repository";

                card.append(title, description, language, link);
                githubRepositories.append(card);
            });

            githubStatus.hidden = true;
        })
        .catch(function () {
            githubStatus.textContent =
                "Could not load repositories right now.";
        });
}

repositorySort.addEventListener("change", loadRepositories);
loadRepositories();