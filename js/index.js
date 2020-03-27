const bioMenu = document.getElementById("bio-menu");
const liDrop = document.getElementById("li-drop");
const crisExp = document.getElementById("cris-exp");
const navContainer = document.getElementById("nav-links-container");
const btns = navContainer.getElementsByClassName("bt");
const bioButton = document.getElementById("bio-button");
const confButton = document.getElementById("conf-button");
const tallButton = document.getElementById("tall-button");
const terButton = document.getElementById("ter-button");
const tvButton = document.getElementById("tv-button");
const biosButton = document.getElementById("bios-button");
const confsButton = document.getElementById("confs-button");
const tallsButton = document.getElementById("talls-button");
const tersButton = document.getElementById("ters-button");
const tvsButton = document.getElementById("tvs-button");
const bioContainer = document.getElementById("bio-container");
const confContainer = document.getElementById("conf-container");
const tallContainer = document.getElementById("tall-container");
const terContainer = document.getElementById("ter-container");
const tvContainer = document.getElementById("tv-container");
const principalSection = document.getElementById("principal-section");
const cristinaSection = document.getElementById("cristina-section");
const coursesSection = document.getElementById("courses-section");
const coursesButton = document.getElementById("courses-button");
const principalButton = document.getElementById("principal-button");
const blogSection = document.getElementById("blog-section");
const blogButton = document.getElementById("blog-button");

window.onload = function(event) {
  if (window.matchMedia("only screen and (max-width: 993px)").matches) {
    bioMenu.classList.remove("dropdown-menu");
    liDrop.classList.remove("dropdown");
    crisExp.classList.remove("dropdown-toggle");
  }
  if (window.matchMedia("only screen and (min-width: 992px)").matches) {
    bioMenu.classList.add("dropdown-menu");
    liDrop.classList.add("dropdown");
    crisExp.classList.add("dropdown-toggle");
  }
};

window.onresize = function(event) {
  if (window.matchMedia("only screen and (max-width: 993px)").matches) {
    bioMenu.classList.remove("dropdown-menu");
    liDrop.classList.remove("dropdown");
    crisExp.classList.remove("dropdown-toggle");
  }
  if (window.matchMedia("only screen and (min-width: 992px)").matches) {
    bioMenu.classList.add("dropdown-menu");
    liDrop.classList.add("dropdown");
    crisExp.classList.add("dropdown-toggle");
  }
};

$(document).ready(function() {
  $(document).click(function(event) {
    var target = $(event.target);
    var _mobileMenuOpen = $(".navbar-collapse").hasClass("show");
    if (_mobileMenuOpen === true && !target.hasClass("navbar-toggler")) {
      $("button.navbar-toggler").click();
    }
  });
});

for (i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    let getBts = document.getElementsByClassName("active-bt");
    if (getBts.length > 0) {
      getBts[0].className = getBts[0].className.replace("active-bt", "");
    }
    this.className += " active-bt";
  });
}

const coSection = () => {
  principalSection.classList.add("hide");
  cristinaSection.classList.add("hide");
  coursesSection.classList.remove("hide");
  blogSection.classList.add("hide");
};

coursesButton.addEventListener("click", coSection);

const bloSection = () => {
  principalSection.classList.add("hide");
  cristinaSection.classList.add("hide");
  coursesSection.classList.add("hide");
  blogSection.classList.remove("hide");
};

blogButton.addEventListener("click", bloSection);

const confSect = () => {
  blogSection.classList.add("hide");
  cristinaSection.classList.remove("hide");
  principalSection.classList.add("hide");
  coursesSection.classList.add("hide");
  bioContainer.classList.add("hide");
  confContainer.classList.remove("hide");
  tallContainer.classList.add("hide");
  terContainer.classList.add("hide");
  tvContainer.classList.add("hide");
  biosButton.classList.remove("bts-sub");
  confsButton.classList.add("bts-sub");
  tallsButton.classList.remove("bts-sub");
  tersButton.classList.remove("bts-sub");
  tvsButton.classList.remove("bts-sub");
};
confButton.addEventListener("click", confSect);

const bioSect = () => {
  blogSection.classList.add("hide");
  cristinaSection.classList.remove("hide");
  principalSection.classList.add("hide");
  coursesSection.classList.add("hide");
  bioContainer.classList.remove("hide");
  confContainer.classList.add("hide");
  tallContainer.classList.add("hide");
  terContainer.classList.add("hide");
  tvContainer.classList.add("hide");
  biosButton.classList.add("bts-sub");
  confsButton.classList.remove("bts-sub");
  tallsButton.classList.remove("bts-sub");
  tersButton.classList.remove("bts-sub");
  tvsButton.classList.remove("bts-sub");
};
bioButton.addEventListener("click", bioSect);

const tallSect = () => {
  blogSection.classList.add("hide");
  cristinaSection.classList.remove("hide");
  principalSection.classList.add("hide");
  coursesSection.classList.add("hide");
  bioContainer.classList.add("hide");
  confContainer.classList.add("hide");
  tallContainer.classList.remove("hide");
  terContainer.classList.add("hide");
  tvContainer.classList.add("hide");
  biosButton.classList.remove("bts-sub");
  confsButton.classList.remove("bts-sub");
  tallsButton.classList.add("bts-sub");
  tersButton.classList.remove("bts-sub");
  tvsButton.classList.remove("bts-sub");
};

tallButton.addEventListener("click", tallSect);

const terSect = () => {
  blogSection.classList.add("hide");
  cristinaSection.classList.remove("hide");
  principalSection.classList.add("hide");
  coursesSection.classList.add("hide");
  principalSection.classList.add("hide");
  coursesSection.classList.add("hide");
  bioContainer.classList.add("hide");
  confContainer.classList.add("hide");
  tallContainer.classList.add("hide");
  terContainer.classList.remove("hide");
  tvContainer.classList.add("hide");
  biosButton.classList.remove("bts-sub");
  confsButton.classList.remove("bts-sub");
  tallsButton.classList.remove("bts-sub");
  tersButton.classList.add("bts-sub");
  tvsButton.classList.remove("bts-sub");
};

terButton.addEventListener("click", terSect);

const tvSect = () => {
  blogSection.classList.add("hide");
  cristinaSection.classList.remove("hide");
  principalSection.classList.add("hide");
  coursesSection.classList.add("hide");
  bioContainer.classList.add("hide");
  confContainer.classList.add("hide");
  tallContainer.classList.add("hide");
  terContainer.classList.add("hide");
  tvContainer.classList.remove("hide");
  biosButton.classList.remove("bts-sub");
  confsButton.classList.remove("bts-sub");
  tallsButton.classList.remove("bts-sub");
  tersButton.classList.remove("bts-sub");
  tvsButton.classList.add("bts-sub");
};

tvButton.addEventListener("click", tvSect);

const confsSect = () => {
  blogSection.classList.add("hide");
  cristinaSection.classList.remove("hide");
  principalSection.classList.add("hide");
  coursesSection.classList.add("hide");
  biosButton.classList.remove("bts-sub");
  confsButton.classList.add("bts-sub");
  tallsButton.classList.remove("bts-sub");
  tersButton.classList.remove("bts-sub");
  tvsButton.classList.remove("bts-sub");
  bioContainer.classList.add("hide");
  confContainer.classList.remove("hide");
  tallContainer.classList.add("hide");
  terContainer.classList.add("hide");
  tvContainer.classList.add("hide");
};
confsButton.addEventListener("click", confsSect);

const biosSect = () => {
  blogSection.classList.add("hide");
  cristinaSection.classList.remove("hide");
  principalSection.classList.add("hide");
  coursesSection.classList.add("hide");
  biosButton.classList.add("bts-sub");
  confsButton.classList.remove("bts-sub");
  tallsButton.classList.remove("bts-sub");
  tersButton.classList.remove("bts-sub");
  tvsButton.classList.remove("bts-sub");
  bioContainer.classList.remove("hide");
  confContainer.classList.add("hide");
  tallContainer.classList.add("hide");
  terContainer.classList.add("hide");
  tvContainer.classList.add("hide");
};
biosButton.addEventListener("click", biosSect);

const tallsSect = () => {
  blogSection.classList.add("hide");
  cristinaSection.classList.remove("hide");
  principalSection.classList.add("hide");
  coursesSection.classList.add("hide");
  biosButton.classList.remove("bts-sub");
  confsButton.classList.remove("bts-sub");
  tallsButton.classList.add("bts-sub");
  tersButton.classList.remove("bts-sub");
  tvsButton.classList.remove("bts-sub");
  bioContainer.classList.add("hide");
  confContainer.classList.add("hide");
  tallContainer.classList.remove("hide");
  terContainer.classList.add("hide");
  tvContainer.classList.add("hide");
};

tallsButton.addEventListener("click", tallsSect);

const tersSect = () => {
  blogSection.classList.add("hide");
  cristinaSection.classList.remove("hide");
  principalSection.classList.add("hide");
  coursesSection.classList.add("hide");
  principalSection.classList.add("hide");
  coursesSection.classList.add("hide");
  biosButton.classList.remove("bts-sub");
  confsButton.classList.remove("bts-sub");
  tallsButton.classList.remove("bts-sub");
  tersButton.classList.add("bts-sub");
  tvsButton.classList.remove("bts-sub");
  bioContainer.classList.add("hide");
  confContainer.classList.add("hide");
  tallContainer.classList.add("hide");
  terContainer.classList.remove("hide");
  tvContainer.classList.add("hide");
};

tersButton.addEventListener("click", tersSect);

const tvsSect = () => {
  blogSection.classList.add("hide");
  cristinaSection.classList.remove("hide");
  principalSection.classList.add("hide");
  coursesSection.classList.add("hide");
  biosButton.classList.remove("bts-sub");
  confsButton.classList.remove("bts-sub");
  tallsButton.classList.remove("bts-sub");
  tersButton.classList.remove("bts-sub");
  tvsButton.classList.add("bts-sub");
  bioContainer.classList.add("hide");
  confContainer.classList.add("hide");
  tallContainer.classList.add("hide");
  terContainer.classList.add("hide");
  tvContainer.classList.remove("hide");
};

tvsButton.addEventListener("click", tvsSect);

/*jQuery("html").bind("click", function(e) {
  if (jQuery(e.target).closest(".navbar").length == 0) {
    // click happened outside of .navbar, so hide
    var opened = jQuery(".navbar-collapse").hasClass("collapse in");
    if (opened === true) {
      jQuery(".navbar-collapse").collapse("hide");
    }
  }
});

/*$(document).ready(function() {
  $(document).click(function(event) {
    var clickover = $(event.target);
    var _opened = $(".navbar-collapse").hasClass("navbar-collapse in");
    if (_opened === true && !clickover.hasClass("navbar-toggle")) {
      $("button.navbar-toggle").click();
    }
  });
});

/*const principalMenu = document.getElementById("principal-menu");
const ariaExpanded = principalMenu.getAttribute("aria-expanded"); // fruitCount = '12'
const burgerButton = document.getElementById("prueba");
// 'Setting' data-attributes using setAttribute

const openData = () => {
  alert("ayuda");
};

burgerButton.addEventListener("click", openData);
/*burgerButton.addEventListener("click", event => {
  event.preventDefault();
  if (principalMenu.getAttribute("aria-expanded") === "true")
    principalMenu.classList.remove("show");
  principalMenu.classList.add("collapsed");

   if (principalMenu.getAttribute("aria-expanded") === "true") {
    burgerButton.setAttribute("data-toggle", "collapsed");  
});*/

//principalMenu.setAttribute("data-fruit", "7");

/*$("#prueba").click(function() {
  if ($(".navbar-collapse").attr("aria-expanded") === "true") {
    $("#principal-menu").removeClass("show");
  }
});*/
