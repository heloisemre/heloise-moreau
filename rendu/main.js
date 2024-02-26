let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  // Annule le comportement par défaut (envoie du formulaire)
  event.preventDefault();

  let errorContainer = document.querySelector(".message-error");
  let errorList = document.querySelector(".message-error ul");

  errorList.innerHTML = "";
  errorContainer.classList.remove("visible");

  let email = document.querySelector("#email");
  if (email.value === "") {
    errorContainer.classList.remove("visible");
    email.classList.remove("success");

    // Créer un <li></li> dans le HTML
    let err = document.createElement("li");
    err.innerText = "Le champ email ne peut pas être vide";
    // On ajoute le li dans la liste des erreurs
    errorList.appendChild(err);
  } else {
    // On affiche le succès
    email.classList.add("success");
  }
  let pseudo = document.querySelector("#pseudo");
  if (pseudo.value.length < 6) {
    errorContainer.classList.remove("visible");
    pseudo.classList.remove("success");

    // Créer un <li></li> dans le HTML
    let err = document.createElement("li");
    err.innerText = "Le champ pseudo ne peut pas être vide";
    // On ajoute le li dans la liste des erreurs
    errorList.appendChild(err);
  } else {
    // On affiche le succès
    pseudo.classList.add("success");
  }
  let passCheck = new RegExp(
    "^(?=.[a-z])(?=.[A-Z])(?=.d)(?=.[-+_!@#$%^&*.,?]).+$"
  );

  // On récupère le champ pseudo
  let password = document.querySelector("#pseudo");
  //   si pseudo inférieur à 6 caractères
  if (password.value.length < 10 || passCheck.test(password.value) === false) {
    // on affiche le conteneur des erreur et suprime le succès
    errorContainer.classList.add("visible");
    password.classList.remove("success");

    // Créer un <li></li> dans le HTML
    let err = document.createElement("li");
    err.innerText = "Le mot de passe n'est pas assez sécurisé";
    // On ajoute le li dans la liste des erreurs
    errorList.appendChild(err);
  } else {
    // On affiche le succès
    password.classList.add("success");
  }
  // On récupère le champ password 2
  let passwordConfirm = document.querySelector("#password2");
  //   si password2 différent de password
  if ((passwordConfirm.value !== passwordConfirm.value) === "") {
    // on affiche le conteneur des erreur et suprime le succès
    errorContainer.classList.add("visible");
    passwordConfirm.classList.remove("success");

    // Créer un <li></li> dans le HTML
    let err = document.createElement("li");
    err.innerText = "Les deux mots de passe doivent être identiques";
    // On ajoute le li dans la liste des erreurs
    errorList.appendChild(err);
  } else {
    // On affiche le succès
    passwordConfirm.classList.add("success");
  }
  //   Ici, tous les checks sont passés

  let successContaineur = document.querySelector(".message-success");
  successContaineur.classList.remove("visible");

  if (
    email.classList.contains("success") &&
    pseudo.classList.contains("success") &&
    password.classList.contains("success") &&
    passwordConfirm.classList.contains("success")
  ) {
    successContaineur.classList.add("visible");
  }
});
