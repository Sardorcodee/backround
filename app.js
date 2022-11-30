let off = document.querySelector(".border-0");
let on = document.getElementsByTagName("img")[0];
let body = document.getElementsByTagName("body")[0];
setInterval(() => {
  let r = Math.round(Math.random() * 255);
  let g = Math.round(Math.random() * 255);
  let b = Math.round(Math.random() * 255);
  body.style.background = `rgb(${r},${b},${g})`;
}, 1000);
function button() {
  body.style.background = "gold";
  on.setAttribute("src", "img/light-on.png");
  off.setAttribute( "onclick",
    "document.write.innerHTML = window.location.reload('Refresh')"
  );
  off.style.background = "red";
  off.style.color = "white";
  document.getElementById("p1").innerHTML = "O'chirish";
}
