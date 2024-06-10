import "./style.css";

// accordion
const radioBtn = document.querySelectorAll("input[type=radio]");
const radioBtnCheckState: Function[] = [];

for (let i = 0; i < radioBtn.length; i++) {
  radioBtnCheckState.push((value: string) => {
    radioBtn[i].setAttribute("data-checked", value);
  });

  radioBtn[i].addEventListener("click", function (this: HTMLInputElement) {
    const dataChecked =
      this.attributes.getNamedItem("data-checked")?.value || "";

    if (dataChecked === "checked") {
      radioBtnCheckState[i]("");
      this.checked = false;
    } else {
      radioBtnCheckState.map((value, index) =>
        index !== i ? value("") : value("checked"),
      );
    }
  });
}

const newsLetterForm =
  document.querySelector<HTMLFormElement>("#newsletter-form");

newsLetterForm?.addEventListener("submit", function (e) {
  console.log(e);
  e.preventDefault();
});
