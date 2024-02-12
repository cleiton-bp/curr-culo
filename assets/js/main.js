const btn_printer = document.getElementById("printer");

btn_printer.addEventListener("click", (evt) => {
    alert("Você será redirecionado!!")
  setTimeout(() => {
    window.open(
      "https://drive.google.com/file/d/1yiAYwSqHu4RE4bUpstylAT-sZ6tzyMif/view?usp=drive_link",
      "_blank"
    );
  }, 3000);
});