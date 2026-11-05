function genererContenu() {
  // Obtenir l'élément avec l'id démo et lui ajouter des éléments h2 et p
  let demo = document.getElementById("demo");
  demo.innerHTML = "";

  let titre = document.getElementById("titre").value;
  let qty = document.getElementById("qty").value;
  let contenu = document.getElementById("contenu").value;

  for (i = 0; i < qty; i++) {
    let h = document.createElement("h2");
    let p = document.createElement("p");
    
    h.textContent = titre + " " + i;
    p.textContent = contenu + " " + i;

    demo.appendChild(h);
    demo.appendChild(p);
  }
}
  
function changerStyle() {
  // Obtenir les éléments p qui sont sous le div demo et changer la couleur spécifiée dans l'input
  let demo = document.getElementById("demo");

  let pBalise = demo.getElementsByTagName("p");

  let couleurR = document.getElementById("couleur").value;

  for (let p of pBalise) {
    p.style.color = couleurR;
  }
}
  
function changerClassBoutons() {
  // Obtenir les éléments boutons et changer leur className pour celui qui est spécifié dans l'input
  let buttons = document.getElementsByTagName("button");

  let boutonId = document.getElementById("btnClass").value;

  for (let b of buttons) {
    b.className = boutonId
  }
}