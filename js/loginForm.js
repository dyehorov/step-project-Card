import Component from "./component.js";
import { getCard } from "./api/api.js";
import Card from "./cards.js";
import { noItemHaveBeenAdded } from "./element.js";
export default class LoginForm extends Component {
  constructor() {
    const elements = {
      parent: document.querySelector("main"),
      self: document.createElement("div"),
      email: document.createElement("input"),
      password: document.createElement("input"),
      btnSub: document.createElement("button"),
      btnExit: document.createElement("button"),
    };
    super(elements);
  }
   
  render() {
    const { self, email, password, btnSub, btnExit } = this.elements;
    self.classList.add("loginForm");
    email.classList.add("loginForm-email");
    email.type = "email";
    email.placeholder = "Введіть єлектронну адрессу";

    password.classList.add("loginForm-email");
    password.type = "password";
    password.placeholder = "Введіть пароль";
    btnSub.classList.add("loginForm-btnSub");
    btnSub.textContent = "Вхід";
    btnExit.classList.add("loginForm-btnExit");

    self.append(email, password, btnSub, btnExit);
    btnSub.addEventListener("click", () => {
      fetch("https://ajax.test-danit.com/api/v2/cards/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.value,
          password: password.value,
        }),
      })
        .then((response) => response.text())
        .then((token) => {
          localStorage.setItem("token", token);
          document.querySelector(".loginForm").remove();
          document.querySelector("#createVisit").classList.remove("hide");
        })
        .then((res) => (res = getCard()))
        .then((cards) => cards.forEach((card) => new Card(card).render()))
        // .then(() => this.noItemHaveBeenAdded())
    });
    btnExit.addEventListener("click", () => {
      document.querySelector("#login").classList.remove("hide");
      document.querySelector(".loginForm").remove();
    });
    super.render();
    noItemHaveBeenAdded();
  }
}

// 486d4175-0d4a-4ef5-b039-0c8b5e7c812e 70035412  himick.com@gmail.com
