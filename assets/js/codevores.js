
// MENU BURGER

 document.querySelector('.cross').addEventListener('click', function() {
   document.querySelector('.aside').style.display='none';
   document.querySelector('.hamburger').style.display='inline';
});

document.querySelector('.hamburger').addEventListener('click', function() {
   document.querySelector('.aside').style.display='inline';
   document.querySelector('.hamburger').style.display='none';
});
document.querySelector('.aside').style.display='none';


// Actualités Geekzone:

function afficheArticle(article) {

  let element = document.createElement("li");

  let lien = document.createElement("a");
  lien.href = article.url;
  lien.textContent = article.title;

  element.appendChild(lien);
  return element;
}

let liste = document.createElement("ul");

for(let i = 0; i < 10; i++) {
  article = afficheArticle(data.items[i]);
  liste.appendChild(article);
}

document.querySelector(".geekzone").appendChild(liste);
