//dinamicko kreiranje menija
let hrefNiz = ["index.html", "#listaProizvoda", "#tekstBakery", "#bakeryForma", "#"];
let nazivNiz = ["Početna", "Proizvodi", "O nama", "Kontakt", "Autor"];

//dinamicko kreiranje proizvoda
let proizvodNiz = [
    ["kiflice", "Kiflice", "Ukusno testo sa mekanom sredinom."],
    ["rolvirsla", "Rol Viršla", "Hrskavo testo posuto susamom u sebi krije ukusnu viršlu."],
    ["djevrek", "Đevrek", "Pecivo sa dodatkom kiselog testa, posuto krupnom morskom solju, ima bogat ukus."],
    ["sunka", "Sendvič", "Sendvič u sendvič kifli sa sirnim namazom, šunkom, kačkavaljem, paradajzom i zelenom salatom."],
    ["hleb", "Beli Hleb", "Najmekši hleb od najfinijeg brašna pravljen po receptu starih majstora."],
    ["burek", "Burek sa Sirom", "Napravljeni po tradicionalnom receptu i uvek sveže ispečeni."]
];

// dinamicko kreiranje social bar-a
let socialNiz = [
    ["Facebook-u", "facebook-square", "https://www.facebook.com/"], 
    ["Instagram-u", "instagram-square", "https://www.instagram.com/"], 
    ["Twitter-u", "twitter-square", "https://www.twitter.com/"], 
    ["Youtube-u", "youtube", "https://www.youtube.com/"]
];

ispisNav("bigMeni");
ispisNav("smallMeni");
ispisProizvod("listaProizvoda");
ispisSocial("info");

// hamburger na klik
$("#hamburger").click(() => {
    $("#smallMeni").slideToggle();
});

//dinamicko ispisivanje socijalnih mreza
function ispisSocial(proslednjeno){
    let dodaj = document.getElementById(proslednjeno);
    let html = "";
    for(let i = 0; i < socialNiz.length; i++){
        html += `<div class="social">
            <a href="${socialNiz[i][2]}" target="_blank">
                <i class="fab fa-${socialNiz[i][1]}"></i><p>Zapratite nas na ${socialNiz[i][0]}</p>
            </a>
        </div>`;
    }
    dodaj.innerHTML += html;
}

//dinamicko ispisivanje proizvoda
function ispisProizvod(proslednjeno){
    let dodaj = document.getElementById(proslednjeno);
    let html = "";
    for(let i = 0; i < proizvodNiz.length; i++){
        html += `<div class="proizvod">
            <img src="assets/images/${proizvodNiz[i][0]}.png" alt="${proizvodNiz[i][1]}">
            <h3>${proizvodNiz[i][1]}</h3>
            <p>${proizvodNiz[i][2]}</p>
        </div>`;
    }
    dodaj.innerHTML += html;
}

//funkcija za dinamicko kreiranje menija
function ispisNav(proslednjeno){
    let dodaj = document.getElementById(proslednjeno);
    let html = "";
    html += `<ul>`
    for(let i = 0; i < hrefNiz.length; i++){
        if(proslednjeno == "smallMeni" && i == hrefNiz.length - 1){
            html += `<li><a href="${hrefNiz[i]}" id="smallModal">${nazivNiz[i]}</a></li>`;
        }
        else if(proslednjeno == "bigMeni" && i == hrefNiz.length - 1){
            html += `<li><a href="${hrefNiz[i]}" id="otvoriModal">${nazivNiz[i]}</a></li>`;    
        }
        else{
            html += `<li><a href="${hrefNiz[i]}">${nazivNiz[i]}</a></li>`;
        }
    }
    html += `</ul>`;
    dodaj.innerHTML += html;
}

//slick.js plugin (ovo ces ti da ubacis)
$("#listaProizvoda").slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1030,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
        }
    ]
});

//aktiviranje i deaktiviranje modala
$("#otvoriModal").click(()=>{
    $("#modal").show("fast").css("display", "flex");
});
$("#smallModal").click(()=>{
    $("#modal").show("fast").css("display", "flex");
});
$("#autorFooter").click(()=>{
    $("#modal").show("fast").css("display", "flex");
});
$("#iksic").click(()=>{
    $("#modal").hide("fast");
});
//smenjivanje teksta u about bakery delu sajta
let nizAbout = ["&bull; uvek tu za Vas &bull;", "&bull; najiskusniji &bull;", "&bull; sa Vama svako jutro &bull;", "&bull; najbolji &bull;"];
let brojac = 0;
setInterval(() => {
    document.getElementById("menjanje").innerHTML = nizAbout[brojac];
    ++brojac;
    if(nizAbout[brojac] == undefined) {
        brojac = 0;
    }
}, 2000);

//dinamicko ispisivanje komentara
let komentarDiv = document.getElementById("blockComment");

let komentarNiz = [
    ["comment1", "Danilo Lazić", '"Redovan sam kupac i mogu vam reći da atmosfera u objektu opuštena, osoblje je uvek nasmejano i spremno da pomogne. Najbolji ste sve pohvale za vas."'],
    ["comment2", "Veljko Perović", '"Svakodnevno kupujem kod vas. Cene su pristupačne a kvalitet je savršen. Moja deca vole da jedu vaš burek za doručak."'],
    ["comment3", "Valentina Čanić", '"Svi proizvodi su vam odličnog kvaliteta i još boljeg ukusa. Moje omiljene su rol viršle."']
];

let ispisKomentar = "";
for(let i = 0; i < komentarNiz.length; i++){
    ispisKomentar += `<div class="comment">
    <div class="pictureCommenter">
        <img src="assets/images/${komentarNiz[i][0]}.png" alt="${komentarNiz[i][0]}"/>
    </div>
    <div class="textCommenter">
        <h3>${komentarNiz[i][1]}</h3>
        <p>${komentarNiz[i][2]}</p>
    </div>
</div>`;
}
komentarDiv.innerHTML += ispisKomentar;

//provera i ispisivanje forme

let selectNiz = ["Navedite razlog", "Primedba", "Preporuka", "Prijava za posao"];

let selectIspis = "";
for(let i = 0; i < selectNiz.length; i++){
    selectIspis += `<option>${selectNiz[i]}</option>`;
}
document.getElementById("about").innerHTML = selectIspis;

let ime = document.getElementById("name");
let email = document.getElementById("email");
let about = document.getElementById("about");
let terms = document.getElementById("terms");
let radio = document.getElementsByName("lice");

let poruka = document.getElementById("poruka");

let errorBlock = document.getElementsByClassName("error");

let nameBool = false;
let emailBool = false;
let aboutBool = false;
let termsBool = false;
let radioBool = false;

let regexIme = /^[A-ZŠĐĆŽČ]{1}[a-zšđžćč]{2,15}\s[A-ZŠĐŽĆČ]{1}[a-zšđžćč]{2,15}$/;
let regexEmail = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;

$("#bakeryForma").submit((e) =>{
    e.preventDefault();
    proveraName();
    proveraEmail();
    proveraAbout();
    proveraTerms();
    radioBool = proveraRadio();
    console.log(nameBool);
    console.log(emailBool);
    console.log(aboutBool);
    console.log(termsBool);
    console.log(radioBool);
    if(nameBool && emailBool && aboutBool && termsBool && radioBool){
        alert("Uspesno ste poslali, kontaktiracemo Vas sto pre!");
        setTimeout("location.reload(true);",0);
    }
});

document.getElementById("reset").addEventListener("click", () =>{
    for(let i = 0; i < errorBlock.length; i++){
        errorBlock[i].innerHTML = "";
    }
});

function proveraName(){
    if(regexIme.test(ime.value)){
        errorBlock[0].innerHTML = "";
        nameBool = true;
    }
    else{
        errorBlock[0].innerHTML = "Nepravilno ime, molim Vas unesite \"Ime Prezime\".";
        nameBool = false;
    }
}

function proveraEmail(){
    if(regexEmail.test(email.value)){
        errorBlock[1].innerHTML = "";
        emailBool = true;
    }
    else{
        errorBlock[1].innerHTML = "Nepravilan email, primer: \"ime@gmail.com\".";
        emailBool = false;
    }
}

function proveraAbout(){
    if(about.value != "Navedite razlog"){
        $(poruka).show("fast");
        errorBlock[2].innerHTML = "";
        aboutBool = true;
    }
    else{
        $(poruka).hide("fast");
        errorBlock[2].innerHTML = "Izaberite opciju.";
        aboutBool = false;
    }
}

function proveraRadio(){
    for(let i = 0; i < radio.length; i++){
        if(radio[i].checked == true){
            errorBlock[3].innerHTML = "";
            return true;
        }
    }
    errorBlock[3].innerHTML = "Izaberite opciju.";
    return false;
}

function proveraTerms(){
    if(terms.checked == true){
        errorBlock[4].innerHTML = "";
        termsBool = true;
    }
    else{
        errorBlock[4].innerHTML = "Molimo stiklirajte.";
        termsBool = false;
    }
}

$("#name").blur(proveraName);
$("#email").blur(proveraEmail);
$("#about").change(proveraAbout);
$("#terms").change(proveraTerms);
$(radio).change(proveraRadio);

//back to top dugme
jQuery(window).scroll(function () {
    if (jQuery(window).scrollTop() > 100) {
      jQuery("#backToTop").show("fast");
    } 
    else {
      jQuery("#backToTop").hide("fast");
    }
});
