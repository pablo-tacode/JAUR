const bioMenu = document.getElementById("bio-menu");
const liDrop = document.getElementById("li-drop");
const crisExp = document.getElementById("cris-exp");
//const navContainer = document.getElementById("nav-links-container");
//const btns = navContainer.getElementsByClassName("bt");
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
const principalBlog = document.getElementById("principal-blog");
const bullyingArt = document.getElementById("bullying-art");
const bullyingButton = document.getElementById("bullying-button");
const relationArt = document.getElementById("relation-art");
const relationButton = document.getElementById("relation-button");
const familyArt = document.getElementById("family-art");
const familyButton = document.getElementById("family-button");
const workArt = document.getElementById("work-art");
const workButton = document.getElementById("work-button");
const happyArt = document.getElementById("happy-art");
const happyButton = document.getElementById("happy-button");
const developeArt = document.getElementById("develope-art");
const developeButton = document.getElementById("develope-button");
const principalBlogButton = document.getElementById("principal-blog-button");
const blogTitle = document.getElementById("blog-title");
const bullyingTitle = document.getElementById("bullying-title");
const relationTitle = document.getElementById("relation-title");
const workTitle = document.getElementById("work-title");
const familyTitle = document.getElementById("family-title");
const happyTitle = document.getElementById("happy-title");
const developeTitle = document.getElementById("develope-title");
const courseVideo = document.getElementById("course-video");
const principalVideo = document.getElementById("principal-video");

window.onload = function (event) {
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

window.onresize = function (event) {
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

$(document).ready(function () {
  $(document).click(function (event) {
    var target = $(event.target);
    var _mobileMenuOpen = $(".navbar-collapse").hasClass("show");
    if (_mobileMenuOpen === true && !target.hasClass("navbar-toggler")) {
      $("button.navbar-toggler").click();
    }
  });
});

/*for (i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    let getBts = document.getElementsByClassName("active-bt");
    if (getBts.length > 0) {
      getBts[0].className = getBts[0].className.replace("active-bt", "");
    }
    this.className += " active-bt";
  });
}*/

const prinSection = () => {
  principalSection.classList.remove("hide");
  cristinaSection.classList.add("hide");
  coursesSection.classList.add("hide");
  blogSection.classList.add("hide");
  coursesButton.classList.remove("active-menu");
  blogButton.classList.remove("active-menu");
  crisExp.classList.remove("drop-container-one");
  crisExp.classList.add("drop-container-off");
  courseVideo.load();
  //principalVideo.play();
};
principalButton.addEventListener("click", prinSection);

const coSection = () => {
  principalSection.classList.add("hide");
  cristinaSection.classList.add("hide");
  coursesSection.classList.remove("hide");
  blogSection.classList.add("hide");
  coursesButton.classList.add("active-menu");
  blogButton.classList.remove("active-menu");
  crisExp.classList.remove("drop-container-one");
  crisExp.classList.add("drop-container-off");
  //courseVideo.play();
  principalVideo.load();
};

coursesButton.addEventListener("click", coSection);

const bloSection = () => {
  principalSection.classList.add("hide");
  cristinaSection.classList.add("hide");
  coursesSection.classList.add("hide");
  blogSection.classList.remove("hide");
  coursesButton.classList.remove("active-menu");
  blogButton.classList.add("active-menu");
  crisExp.classList.remove("drop-container-one");
  crisExp.classList.add("drop-container-off");
  courseVideo.load();
  principalVideo.load();
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
  coursesButton.classList.remove("active-menu");
  blogButton.classList.remove("active-menu");
  crisExp.classList.add("drop-container-one");
  crisExp.classList.remove("drop-container-off");
  courseVideo.load();
  principalVideo.load();
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
  coursesButton.classList.remove("active-menu");
  blogButton.classList.remove("active-menu");
  crisExp.classList.add("drop-container-one");
  crisExp.classList.remove("drop-container-off");
  courseVideo.load();
  principalVideo.load();
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
  coursesButton.classList.remove("active-menu");
  blogButton.classList.remove("active-menu");
  crisExp.classList.add("drop-container-one");
  crisExp.classList.remove("drop-container-off");
  courseVideo.load();
  principalVideo.load();
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
  coursesButton.classList.remove("active-menu");
  blogButton.classList.remove("active-menu");
  crisExp.classList.add("drop-container-one");
  crisExp.classList.remove("drop-container-off");
  courseVideo.load();
  principalVideo.load();
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
  coursesButton.classList.remove("active-menu");
  blogButton.classList.remove("active-menu");
  crisExp.classList.add("drop-container-one");
  crisExp.classList.remove("drop-container-off");
  courseVideo.load();
  principalVideo.load();
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
  coursesButton.classList.remove("active-menu");
  blogButton.classList.remove("active-menu");
  crisExp.classList.add("drop-container-one");
  crisExp.classList.remove("drop-container-off");
  courseVideo.load();
  principalVideo.load();
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
  coursesButton.classList.remove("active-menu");
  blogButton.classList.remove("active-menu");
  crisExp.classList.add("drop-container-one");
  crisExp.classList.remove("drop-container-off");
  courseVideo.load();
  principalVideo.load();
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
  coursesButton.classList.remove("active-menu");
  blogButton.classList.remove("active-menu");
  crisExp.classList.add("drop-container-one");
  crisExp.classList.remove("drop-container-off");
  courseVideo.load();
  principalVideo.load();
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
  coursesButton.classList.remove("active-menu");
  blogButton.classList.remove("active-menu");
  crisExp.classList.add("drop-container-one");
  crisExp.classList.remove("drop-container-off");
  courseVideo.load();
  principalVideo.load();
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
  coursesButton.classList.remove("active-menu");
  blogButton.classList.remove("active-menu");
  crisExp.classList.add("drop-container-one");
  crisExp.classList.remove("drop-container-off");
  courseVideo.load();
  principalVideo.load();
};

tvsButton.addEventListener("click", tvsSect);

const primeBlog = () => {
  principalBlog.classList.remove("hide");
  bullyingArt.classList.add("hide");
  relationArt.classList.add("hide");
  familyArt.classList.add("hide");
  workArt.classList.add("hide");
  happyArt.classList.add("hide");
  developeArt.classList.add("hide");
  principalBlogButton.classList.add("a-blog-button");
  bullyingButton.classList.remove("a-blog-button");
  relationButton.classList.remove("a-blog-button");
  familyButton.classList.remove("a-blog-button");
  workButton.classList.remove("a-blog-button");
  happyButton.classList.remove("a-blog-button");
  developeButton.classList.remove("a-blog-button");
  blogTitle.classList.remove("hide");
  bullyingTitle.classList.add("hide");
  relationTitle.classList.add("hide");
  workTitle.classList.add("hide");
  familyTitle.classList.add("hide");
  happyTitle.classList.add("hide");
  developeTitle.classList.add("hide");
};

principalBlogButton.addEventListener("click", primeBlog);

const bullyingBlog = () => {
  principalBlog.classList.add("hide");
  bullyingArt.classList.remove("hide");
  relationArt.classList.add("hide");
  familyArt.classList.add("hide");
  workArt.classList.add("hide");
  happyArt.classList.add("hide");
  developeArt.classList.add("hide");
  principalBlogButton.classList.remove("a-blog-button");
  bullyingButton.classList.add("a-blog-button");
  relationButton.classList.remove("a-blog-button");
  familyButton.classList.remove("a-blog-button");
  workButton.classList.remove("a-blog-button");
  happyButton.classList.remove("a-blog-button");
  developeButton.classList.remove("a-blog-button");
  blogTitle.classList.add("hide");
  bullyingTitle.classList.remove("hide");
  relationTitle.classList.add("hide");
  workTitle.classList.add("hide");
  familyTitle.classList.add("hide");
  happyTitle.classList.add("hide");
  developeTitle.classList.add("hide");
};

bullyingButton.addEventListener("click", bullyingBlog);

const relationBlog = () => {
  principalBlog.classList.add("hide");
  bullyingArt.classList.add("hide");
  relationArt.classList.remove("hide");
  familyArt.classList.add("hide");
  workArt.classList.add("hide");
  happyArt.classList.add("hide");
  developeArt.classList.add("hide");
  principalBlogButton.classList.remove("a-blog-button");
  bullyingButton.classList.remove("a-blog-button");
  relationButton.classList.add("a-blog-button");
  familyButton.classList.remove("a-blog-button");
  workButton.classList.remove("a-blog-button");
  happyButton.classList.remove("a-blog-button");
  developeButton.classList.remove("a-blog-button");
  blogTitle.classList.add("hide");
  bullyingTitle.classList.add("hide");
  relationTitle.classList.remove("hide");
  workTitle.classList.add("hide");
  familyTitle.classList.add("hide");
  happyTitle.classList.add("hide");
  developeTitle.classList.add("hide");
};

relationButton.addEventListener("click", relationBlog);

const familyBlog = () => {
  principalBlog.classList.add("hide");
  bullyingArt.classList.add("hide");
  relationArt.classList.add("hide");
  familyArt.classList.remove("hide");
  workArt.classList.add("hide");
  happyArt.classList.add("hide");
  developeArt.classList.add("hide");
  principalBlogButton.classList.remove("a-blog-button");
  bullyingButton.classList.remove("a-blog-button");
  relationButton.classList.remove("a-blog-button");
  familyButton.classList.add("a-blog-button");
  workButton.classList.remove("a-blog-button");
  happyButton.classList.remove("a-blog-button");
  developeButton.classList.remove("a-blog-button");
  blogTitle.classList.add("hide");
  bullyingTitle.classList.add("hide");
  relationTitle.classList.add("hide");
  workTitle.classList.add("hide");
  familyTitle.classList.remove("hide");
  happyTitle.classList.add("hide");
  developeTitle.classList.add("hide");
};

familyButton.addEventListener("click", familyBlog);

const workBlog = () => {
  principalBlog.classList.add("hide");
  bullyingArt.classList.add("hide");
  relationArt.classList.add("hide");
  familyArt.classList.add("hide");
  workArt.classList.remove("hide");
  happyArt.classList.add("hide");
  developeArt.classList.add("hide");
  principalBlogButton.classList.remove("a-blog-button");
  bullyingButton.classList.remove("a-blog-button");
  relationButton.classList.remove("a-blog-button");
  familyButton.classList.remove("a-blog-button");
  workButton.classList.add("a-blog-button");
  happyButton.classList.remove("a-blog-button");
  developeButton.classList.remove("a-blog-button");
  blogTitle.classList.add("hide");
  bullyingTitle.classList.add("hide");
  relationTitle.classList.add("hide");
  workTitle.classList.remove("hide");
  familyTitle.classList.add("hide");
  happyTitle.classList.add("hide");
  developeTitle.classList.add("hide");
};

workButton.addEventListener("click", workBlog);

const happyBlog = () => {
  principalBlog.classList.add("hide");
  bullyingArt.classList.add("hide");
  relationArt.classList.add("hide");
  familyArt.classList.add("hide");
  workArt.classList.add("hide");
  happyArt.classList.remove("hide");
  developeArt.classList.add("hide");
  principalBlogButton.classList.remove("a-blog-button");
  bullyingButton.classList.remove("a-blog-button");
  relationButton.classList.remove("a-blog-button");
  familyButton.classList.remove("a-blog-button");
  workButton.classList.remove("a-blog-button");
  happyButton.classList.add("a-blog-button");
  developeButton.classList.remove("a-blog-button");
  blogTitle.classList.add("hide");
  bullyingTitle.classList.add("hide");
  relationTitle.classList.add("hide");
  workTitle.classList.add("hide");
  familyTitle.classList.add("hide");
  happyTitle.classList.remove("hide");
  developeTitle.classList.add("hide");
};

happyButton.addEventListener("click", happyBlog);

const developeBlog = () => {
  principalBlog.classList.add("hide");
  bullyingArt.classList.add("hide");
  relationArt.classList.add("hide");
  familyArt.classList.add("hide");
  workArt.classList.add("hide");
  happyArt.classList.add("hide");
  developeArt.classList.remove("hide");
  principalBlogButton.classList.remove("a-blog-button");
  bullyingButton.classList.remove("a-blog-button");
  relationButton.classList.remove("a-blog-button");
  familyButton.classList.remove("a-blog-button");
  workButton.classList.remove("a-blog-button");
  happyButton.classList.remove("a-blog-button");
  developeButton.classList.add("a-blog-button");
  blogTitle.classList.add("hide");
  bullyingTitle.classList.add("hide");
  relationTitle.classList.add("hide");
  workTitle.classList.add("hide");
  familyTitle.classList.add("hide");
  happyTitle.classList.add("hide");
  developeTitle.classList.remove("hide");
};

developeButton.addEventListener("click", developeBlog);

principalVideo.addEventListener("ended", function () {
  this.currentTime = 0;
  principalVideo.load();
});

courseVideo.addEventListener("ended", function () {
  this.currentTime = 0;
  courseVideo.load();
});

/*const videoPlaying = () => {
  courseVideo.play();
  //principalVideo.load();
};
coursesButton.addEventListener("click", videoPlaying);

const videoPlayOne = () => {
  //courseVideo.load();
  principalVideo.play();
};
principalButton.addEventListener("click", videoPlayOne);*/
