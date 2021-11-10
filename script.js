const glowny = document.getElementById("center");
const side = document.getElementById("bok");
const add = document.getElementById("dodaj");
const rem = document.getElementById("usun");
const forms = document.getElementById("form");

//const nazwa= document.getElementById("nazwa").value;
//const cena= document.getElementById("cena").value;
//const link= document.getElementById("link");


if(localStorage.getItem("licz")===null){
  window.localStorage.setItem('licz','0');
  let zlicz = window.localStorage.getItem('licz');
      licznik = parseInt(zlicz);


}else if(localStorage.getItem("licz")!=null){

let zlicz = window.localStorage.getItem('licz');
      licznik = parseInt(zlicz);
     

}

let licz = parseInt(1);
licz= licz+licznik;
let suma = parseInt(0);
add.addEventListener("click", function() {
  const el = document.createElement("div");
  const s1 = document.createElement("span");
  const s2 = document.createElement("span");
  const s3 = document.createElement("span");
  const head = document.createElement("h2");
  const usun = document.createElement("img");
  const acc = document.createElement("img");

  el.classList.add("element");
  head.innerText = `Produkt`;
  el.setAttribute("id", `i${licz}`);
  el.style.border = `solid`;
  head.setAttribute("id", `head`);
  usun.setAttribute(
    "src",
    `https://img.icons8.com/ios-glyphs/30/000000/minus.png`
  );
  usun.setAttribute("id", `del`);
  acc.setAttribute("id", "acc");
  acc.setAttribute(
    "src",
    "https://img.icons8.com/ios-filled/50/000000/submit-for-approval.png"
  );

  s1.setAttribute("id", `test1`);
  s2.setAttribute("id", `test2`);
  s3.setAttribute("id", `test3`);

  const div = document.querySelector("#center");
  div.appendChild(el);
  el.appendChild(head);
  el.appendChild(usun);
  el.appendChild(s1);
  el.appendChild(s2);
  el.appendChild(s3);
  el.appendChild(acc);

  const daj = document.querySelector("#dodaj");
  const pausa = document.createElement("br");
  const div2 = document.querySelector("#bok");
  const form = document.createElement("form");
  const nazwa = document.createElement("input");
  const cena = document.createElement("input");
  const link = document.createElement("input");
  daj.style.display = "none";

  form.setAttribute("id", `form`);
  nazwa.setAttribute("id", `nazwa`);
  nazwa.setAttribute("type", "text");
  nazwa.setAttribute("onkeyup", `myFunctionx()`);

  cena.setAttribute("id", `cena`);
  cena.setAttribute("type", "number");
  cena.setAttribute("onkeyup", `myFunctiony()`);

  link.setAttribute("id", `link`);
  link.setAttribute("type", "text");
  link.setAttribute("onkeyup", `myFunctionz()`);

  div.appendChild(form);
  form.appendChild(pausa);
  form.appendChild(nazwa);

  form.appendChild(cena);
  form.appendChild(link);
  licz++;

  const s1x = document.createElement("span");
  const s2x = document.createElement("span");
  const s3x = document.createElement("a");
  const headx = document.createElement("h2");
  headx.setAttribute("onkeyup", `myFunctionxx()`);
  s2x.setAttribute("onkeyup", `myFunctionyy()`);
  s3x.setAttribute("onkeyup", `myFunctionzz()`);

  s2x.setAttribute("id", `s2x`);
  s2x.setAttribute("value", `${--licz}`);
  licz++;
  s3x.setAttribute("id", `s3x`);
  headx.setAttribute("id", `headx`);
  el.appendChild(headx);
  el.appendChild(s1x);
  el.appendChild(s2x);
  el.appendChild(s3x);
  s1x.style.display = "none";
  s2x.style.display = "none";
  s3x.style.display = "none";
  headx.style.display = "none";

  usun.addEventListener("click", function() {
    el.parentNode.removeChild(el);
    form.parentNode.removeChild(form);
    daj.style.display = "block";
  });

  acc.addEventListener("click", function() {
    let temp = document.getElementById(`suma`).innerHTML;
    let temp2 = document.getElementById(`suma2`).innerHTML;
    document.getElementById(`suma2`).innerHTML =
      parseInt(temp) + parseInt(temp2);
    s1x.style.display = "block";
    s2x.style.display = "block";
    s3x.style.display = "block";
    headx.style.display = "block";
    const elx = document.createElement("div");
    const alink = document.createElement("a");
    const sum = parseInt(document.getElementById("suma").value);
    const usunx = document.createElement("img");
    elx.classList.add("element");

    el.parentNode.removeChild(el);
    form.parentNode.removeChild(form);
    daj.style.display = "block";

    elx.setAttribute("id", `view${--licz}`);
    elx.style.border = `solid`;
    headx.setAttribute("id", `headx`);
    usunx.setAttribute(
      "src",
      `https://img.icons8.com/ios-glyphs/30/000000/minus.png`
    );

    usunx.setAttribute("id", `delx`);
    usunx.setAttribute("value", `${licz}`);
    usunx.setAttribute("name", `${licz}`);
    const div = document.querySelector("#center");
    s2x.setAttribute("id", `s2x`);
    s3x.setAttribute("id", `s3x`);

    headx.setAttribute("id", `headx${licz}`);
    div.appendChild(elx);
    elx.appendChild(headx);
    elx.appendChild(usunx);
    elx.appendChild(s1x);
    elx.appendChild(s2x);
    elx.appendChild(s3x);

    s2x.setAttribute("id", `s2x${licz}`);
    s3x.href = s3x.innerHTML;
    s3x.setAttribute("id", `s3x${licz}`);

    licz++;
    usunx.addEventListener("mouseover", function(e) {
      let tekst = e.target.name;

      odejmowanie = document.getElementById(`s2x${tekst}`).innerHTML;
      sumatemp = document.getElementById("suma2").innerHTML;
      document.getElementById("suma2").innerHTML =
        parseInt(sumatemp) - parseInt(odejmowanie);
    });

    usunx.addEventListener("mouseout", function(e) {
      let tekst = e.target.name;

      dodawanie = document.getElementById(`s2x${tekst}`).innerHTML;
      sumatemp = document.getElementById("suma2").innerHTML;
      document.getElementById("suma2").innerHTML =
        parseInt(sumatemp) + parseInt(dodawanie);
    });

    usunx.addEventListener("click", function(e) {
      let tekst = parseInt(e.target.name) + 1;

      localStorage.removeItem(`nazwa${tekst}`);
      localStorage.removeItem(`cena${tekst}`);
      localStorage.removeItem(`link${tekst}`);
      localStorage.setItem(`licz`, `${--licz}`);

      elx.parentNode.removeChild(elx);
      form.parentNode.removeChild(form);
      daj.style.display = "block";
      document.location.reload(true);
    });
    //document.getElementById("bok").innerHTML = localStorage.getItem("nazwa");
    //document.getElementById("bok").innerHTML = localStorage.getItem("cena");
    //document.getElementById("bok").innerHTML = localStorage.getItem("link");
  });
});
licz--;

function myFunctionx() {
  let x = document.getElementById(`nazwa`).value;
  for (let i = 0; i <= 1; i++) {
    document.getElementById(`head`).innerHTML = x;
    document.getElementById(`headx`).innerHTML = x;
    localStorage.setItem(`nazwa${licz}`, `${x}`);
  }
}

function myFunctiony() {
  let y = document.getElementById(`cena`).value;

  for (let i = 0; i < 1; i++) {
    document.getElementById(`test2`).innerHTML = y;
    document.getElementById(`s2x`).innerHTML = y;
    localStorage.setItem(`cena${licz}`, `${y}`);
    localStorage.setItem(`licz`, `${licz}`);
  }
  document.getElementById(`suma`).innerHTML = y;
}

function myFunctionz() {
  let z = document.getElementById(`link`).value;
  for (let i = 0; i <= 1; i++) {
    document.getElementById(`test3`).innerHTML = z;
    document.getElementById(`s3x`).href = "http://"+z+"/";
    document.getElementById(`s3x`).innerHTML = z;
    localStorage.setItem(`link${licz}`, `${z}`);
  
  }
}
document.getElementById("kasuj").addEventListener("click", function(){
localStorage.clear();
});