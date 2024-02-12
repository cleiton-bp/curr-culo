const btn_printer = document.getElementById("printer");

btn_printer.addEventListener("click", (evt) => {
    alert("Você será redirecionado!!")
  setTimeout(() => {
    window.open(
      "https://drive.google.com/file/d/1NgT3cByuqWT2bI2cb6Ak_yjo7CQn-GnZ/view?usp=drive_link",
      "_blank"
    );
  }, 3000);
});