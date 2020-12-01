/***navbar fixed **/
$(window).scroll(function(){
  if($(window).scrollTop() > 10) {
      $(".navbar").addClass("fixed");
  } else {
    $(".navbar").removeClass("fixed");
  }
});

/** fin navar fixed ****/

/*** search box ***/
const choisirTypeInner = $(".choisir-type-inner");
const choisirType = $(".choisir-type");

const inputSearch = $(".search-box-div input");
inputSearch.click(function() {
  choisirType.addClass("display-choisir-type-inner");
  $(".voiture-voyage-hotel").removeClass("display-voyages-inner");
  $(".voiture-voyage-hotel").removeClass("display-location-de-voitures");
  $(".voiture-voyage-hotel").removeClass("display-avion-billets");
   $(".recherche-avancé").removeClass("open");
   $(".radio-button-info input").removeClass("type-recherche");
});

const searchi = $(".search-box-div i");
searchi.click(function() {
  choisirType.addClass("display-choisir-type-inner");
   $(".voiture-voyage-hotel").removeClass("display-voyages-inner");
   $(".voiture-voyage-hotel").removeClass("display-location-de-voitures");
   $(".voiture-voyage-hotel").removeClass("display-avion-billets");
   $(".recherche-avancé").removeClass("open");
});

const choisirTypeText = $(".box1 .radio-button-info label");

const radioChoisirType = $(".radio-button-info input");

choisirTypeText.click(function(e) {
   const typeValue = $(this).text().trim();
   const thistype = $(this).attr("class");
   $(".radio-button-info input").addClass("type-recherche");
   if(typeValue === "VOYAGES"){
     choisirType.removeClass("display-choisir-type-inner");
     $(".voiture-voyage-hotel").addClass("display-voyages-inner");
     $(".recherche-avancé").removeClass("open");
   }
   if(typeValue === "AVION"){
      choisirType.removeClass("display-choisir-type-inner");
       $(".voiture-voyage-hotel").addClass("display-avion-billets");
   }
   if(typeValue === "LOCATION DE VOITURES"){
     choisirType.removeClass("display-choisir-type-inner");
      $(".voiture-voyage-hotel").addClass("display-location-de-voitures");
   }
});

/*** hide choisirtype ***/

const closeChoisirType = $(".choisir-type-inner");
closeChoisirType.click(function() {
  choisirType.removeClass("display-choisir-type-inner");
});

/*** fin hide choisirtype **/

const faCloseLocationVoiture = $(".location-de-voitures .fa-times");

faCloseLocationVoiture.click(function(){
  $(".voiture-voyage-hotel").removeClass("display-location-de-voitures");
  window.setTimeout( initialiser, 400 );
});

/*** Cherche voyages avancée **/

const chercherVoyagesAvancée = $(".chercher-voyages-avancée button");

chercherVoyagesAvancée.click(function(){
  if($(".recherche-avancé").hasClass("open")){
    $(".recherche-avancé").removeClass("open");
      window.setTimeout( initialiserPrixMinMax, 500 );
  }else {
    $(".recherche-avancé").addClass("open");
  }
});

/** fin Cherche voyages avancée **/

/*** close cherche voyage **/

const chercheVoyageClose = $(".voyages-inner .fa-times");
chercheVoyageClose.click(function(){
$(".voiture-voyage-hotel").removeClass("display-voyages-inner");
$(".recherche-avancé").removeClass("open");
  window.setTimeout( initialiser, 400 );
window.setTimeout( initialiserPrixMinMax, 500 );
});

/*** fin close cherche voyage **/

/*** hide avion billets **/

const avionInner = $(".avion-inner .fa-times");

avionInner.click(function() {
$(".voiture-voyage-hotel").removeClass("display-avion-billets");
  window.setTimeout( initialiser, 400 );
});
/** fin hide avion billets **/

/**** dropdow menu tests ***/

var marqueGlo = "";
const voituremarque = $(".marque .dropdown-menu ul li");
const marqueButton = $(".marque button label");
voituremarque.click(function() {
  const marque = $(this).text().trim();
  marqueGlo = marque;
  marqueButton.html(marque);
});

var passagersGlo = "";
const voiturePassagers = $(".passagers .dropdown-menu ul li");
const passagersButton = $(".passagers button label");
voiturePassagers.click(function(){
  const passagers = $(this).text().trim();
  passagersGlo = passagers;
  passagersButton.html(passagers);
});

var portevoituresGlo = "";
const porteVoitures = $(".porte-voitures .dropdown-menu ul li");
const porteVoituresButton = $(".porte-voitures button label");
porteVoitures.click(function(){
   const portevoitures =  $(this).text().trim();
   portevoituresGlo = portevoitures;
   porteVoituresButton.html(portevoitures);
});

var paysIstanceGlo = "";
const pays = $(".pays .dropdown-menu ul li");
const paysButton = $(".pays button label");
pays.click(function(){
  const paysIstance = $(this).text().trim();
  paysIstanceGlo = paysIstance;
  paysButton.html(paysIstance);
});

var methodeVoyageInstanceGlo = "";
const methodeVoyage = $(".methode-voyage .dropdown-menu ul li");
const methodeVoyageButton = $(".methode-voyage button label");
methodeVoyage.click(function(){
  const methodeVoyageInstance = $(this).text().trim();
  methodeVoyageInstanceGlo = methodeVoyageInstance;
  methodeVoyageButton.html(methodeVoyageInstance);
});

var nombrePlaceGlo = "";
const nombrePlace = $(".nombre-de-place .dropdown-menu ul li");
const nombrePlaceButton = $(".nombre-de-place button label");
nombrePlace.click(function(){
 const nombrePlaceInstance = $(this).text().trim();
 nombrePlaceGlo = nombrePlaceInstance;
 nombrePlaceButton.html(nombrePlaceInstance);
});

var hotelCategoryGlo = "";
const hotelCategory = $(".hotel-category .dropdown-menu ul li");
const hotelCategoryButton = $(".hotel-category button label");
hotelCategory.click(function(){
  const hotelCategoryInstance = $(this).text().trim();
  hotelCategoryGlo = hotelCategoryInstance;
  hotelCategoryButton.html(hotelCategoryInstance);
});
/**** fin dropdow menu tests ****/

/*** test fields ***/

const avionSubmit = $(".avion-submit input");
avionSubmit.click(function(e) {
  if($(".depart-avion").val() === "" || $(".destionation-avion").val() === "" || $(".date-depart-avion").val() === "" || $(".date-retour-avion").val() === ""){
    alert("Vous devez remplire tous les champs");
    e.preventDefault();
  }
});

const chercherVoyagesSubmit = $(".chercher-voyages-submit input");
chercherVoyagesSubmit.click(function(e){
   if($(".date-du-voyages").val() === "" || $(".date-au-voyages").val() === "" || paysIstanceGlo === "" || methodeVoyageInstanceGlo === ""){
      alert("Vous devez remplire tous les champs");
      e.preventDefault();
   }
});

const chercherVoitures = $(".chercher-voitures input");
chercherVoitures.click(function(e) {
  if($(".date-du-voiture").val() === "" || $(".date-au-voiture").val() === "" || marqueGlo === "" || passagersGlo === "" || portevoituresGlo === ""){
     alert("Vous devez remplire tous les champs");
     e.preventDefault();
  }
});

/*** fin test fields ***/

/*** test numer cherche voyages ***/

const minPrix = $(".prix-min input");
const maxPrix = $(".prix-max input");

function validateNumber(event) {
    var key = window.event ? event.keyCode : event.which;
    if (event.keyCode === 8 || event.keyCode === 46) {
        return true;
    } else if ( key < 48 || key > 57 ) {
        return false;
    } else {
        return true;
    }
};

minPrix.keypress(validateNumber);
maxPrix.keypress(validateNumber);

/*** fin test numer cherche voyages ***/


/**** dropdown search change color **/

const searchDropdown = $(".search-dropdown");

searchDropdown.click(function() {
   $(this).addClass("change-color");
});

searchDropdown.mouseout(function() {
   $(this).removeClass("change-color");
/*   $(".location-de-voitures .dropdown-menu").hide();*/
});


/**** fin dropdown search change color */

function initialiserPrixMinMax(){
  $(".prix-min input").val("");
  $(".prix-max input").val("");
  $(".hotel-category .search-dropdown label").html("Sélectionner");
  $(".nombre-de-place .search-dropdown label").html("Sélectionner");
}

function initialiser(){
  $(".depart-avion").val("");
  $(".destionation-avion").val("");
  $(".avion-input input").val("");
  $(".date-voyages input").val("");
  $(".date input").val("");
  $(".marque .search-dropdown label").html("Marque");
  $(".passagers .search-dropdown label").html("Passagers");
  $(".porte-voitures .search-dropdown label").html("Portes de voiture");
  $(".pays .search-dropdown label").html("Sélectionner");
  $(".methode-voyage .search-dropdown label").html("Sélectionner");
}

/*** fin search box ***/

/**** change active class navbar*/
jQuery(function($) {
     var path = window.location.href;
     $('.navbar .nav-item .nav-link').each(function() {
      if (this.href === path) {
       $(this).addClass('active');
      }
     });
    });

/****fin change active class navbar*/

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container1");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
  $(".container1.sign-up-mode form .sign-up-form").css("z-index", 50);
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});


/***********ffffffffffffff**************/

const selectType = $(".select-type");
const precedent = $(".precedent");

var userType = "";
$(".user-type-menu ul li label").on("click", function(){
     const user = $(this).text().trim();
     userType = user;
     $(".user-type").html(user);
     if(user === 'Utilisateur normale'){
         $("#adress").remove();
     }
});

selectType.click(function(e){
  e.preventDefault();
  if(userType == ""){
    alert("Vous devez choisir un type avant de passer l'étape suivant");
  } else {
    container.classList.add("hide-form-div");
  }

});

precedent.click(function(e){
  e.preventDefault();
  container.classList.remove("hide-form-div");
});

/***login inputs tests *****/

var wilayaMenu = "";
$(".wilaya-menu ul li label").on("click", function(){
     const wilaya = $(this).text().trim();
     wilayaMenu = wilaya;
     $("#wilaya").html(wilaya);
});

const connecter = $(".connecter");
const emailConnecter = $(".email-connecter");
const passwordConnecter = $(".password-connecter");
connecter.click(function(e){
  if($(".email-connecter").val() == ""  || $(".password-connecter").val()){
    alert("Vous devez remplire tous les formulaires");
  }
});

const suivant = $(".suivant");
suivant.click(function(){
  if($(".user-creer-compte").val() == ""  || $(".email-creer-compte").val() || $(".address-creer-compte").val() || $(".password-creer-compte").val() || wilayaMenu == ""){
    alert("Vous devez remplire tous les formulaires");
  }
});
