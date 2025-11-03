document.querySelector("#hotspot-1").addEventListener("click", updateInfobox1);

function updateInfobox1() {
  console.log("updateInfobox1");
  //   document.querySelector("#efficiency").textContent = "Dette er en test";
  //   document.querySelector("#requirement").textContent = "Dette er en test";
}

function updateInfobox1() {
  document.querySelector("#efficiency").innerHTML = "<h1>Dette er</h1><p>en test</p>";
  document.querySelector("#requirement").textContent = "Dette er en test";
}
