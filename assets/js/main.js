const btn_printer = document.getElementById("printer");

btn_printer.addEventListener("click", (evt) => {
    alert("Você será redirecionado!!")
  setTimeout(() => {
    window.open(
      "https://drive.google.com/file/d/1YPGI4XfqNRgo1aFRKyQGoFPMvruqaQC4/view",
      "_blank"
    );
  }, 3000);
});
