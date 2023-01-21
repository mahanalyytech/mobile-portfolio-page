// pop up menu JS

const close = document.createElement('img');
const navvbar = document.querySelector('.navvbar');
const optIcon = document.querySelector('.opt');
const subOptIcon = document.querySelector('.n-b-list-icon');
const navBarList = document.querySelectorAll('.n-b-list');

function menuPopUp() {
  navvbar.classList.remove('navvbar');
  navvbar.classList.add('Phone-menu-section');
  optIcon.classList.add('vanish');
  subOptIcon.classList.add('vanish');
  navBarList.forEach((element) => element.classList.add('Phone-menu-section-text'));
  close.src = './Imgs/close-icon.png';
  close.classList.add('close');
  navvbar.prepend(close);
  close.classList.remove('vanish');
}

function menuCloseUp() {
  navvbar.classList.add('navvbar');
  navvbar.classList.remove('Phone-menu-section');
  optIcon.classList.remove('vanish');
  subOptIcon.classList.remove('vanish');
  navBarList.forEach((element) => element.classList.remove('Phone-menu-section-text'));
  close.classList.add('vanish');
}

optIcon.addEventListener('click', menuPopUp);
close.addEventListener('click', menuCloseUp);
navBarList.forEach((element) => {
  element.addEventListener('click', menuCloseUp);
});

const workCards = [
  {
    mCardImg: './img/Img-Placeholder.png',
    mCardHeading: 'Multi-Post Stories',
    mCardInfo:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    mCardBudgeList: ['css', 'html', 'bootstrap', 'Ruby'],
    mCardButton: 'See Project',
    popUpCardSLB: 'See Live ',
    popUpCardSSB: 'See Source ',
    popUpCardSL: '#',
    popUpCardSS: '#',
    popUpCardImg: './img/pop-up-img.png',
    popUpCardBL: ['html', 'bootstrap', 'Ruby on rails'],
    popUpCardT:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  },
  {
    cardHeading: 'Profesional Art Printing Data',
    cardText:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    cardBudgeList: ['html', 'bootstrap', 'Ruby'],
    cardButton: 'See Project',
    popUpCardSLB: 'See Live ',
    popUpCardSSB: 'See Source ',
    popUpCardSL: '#',
    popUpCardSS: '#',
    popUpCardImg: './img/pop-up-img.png',
    popUpCardBL: ['html', 'bootstrap', 'Ruby on rails'],
    popUpCardT:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  },
  {
    cardHeading: 'Profesional Art Printing Data',
    cardText:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    cardBudgeList: ['html', 'bootstrap', 'Ruby'],
    cardButton: 'See Project',
    popUpCardSLB: 'See Live ',
    popUpCardSSB: 'See Source ',
    popUpCardSL: '#',
    popUpCardSS: '#',
    popUpCardImg: './img/pop-up-img.png',
    popUpCardBL: ['html', 'bootstrap', 'Ruby on rails'],
    popUpCardT:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  },
  {
    cardHeading: 'Profesional Art Printing Data',
    cardText:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    cardBudgeList: ['html', 'bootstrap', 'Ruby'],
    cardButton: 'See Project',
    popUpCardSLB: 'See Live ',
    popUpCardSSB: 'See Source ',
    popUpCardSL: '#',
    popUpCardSS: '#',
    popUpCardImg: './img/pop-up-img.png',
    popUpCardBL: ['html', 'bootstrap', 'Ruby on rails'],
    popUpCardT:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  },
  {
    cardHeading: 'Profesional Art Printing Data',
    cardText:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    cardBudgeList: ['html', 'bootstrap', 'Ruby'],
    cardButton: 'See Project',
    popUpCardSLB: 'See Live ',
    popUpCardSSB: 'See Source ',
    popUpCardSL: '#',
    popUpCardSS: '#',
    popUpCardImg: './img/pop-up-img.png',
    popUpCardBL: ['html', 'bootstrap', 'Ruby on rails'],
    popUpCardT:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  },
  {
    cardHeading: 'Profesional Art Printing Data',
    cardText:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    cardBudgeList: ['html', 'bootstrap', 'Ruby'],
    cardButton: 'See Project',
    popUpCardSLB: 'See Live ',
    popUpCardSSB: 'See Source ',
    popUpCardSL: '#',
    popUpCardSS: '#',
    popUpCardImg: './img/pop-up-img.png',
    popUpCardBL: ['html', 'bootstrap', 'Ruby on rails'],
    popUpCardT:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  },
  {
    cardHeading: 'Profesional Art Printing Data',
    cardText:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    cardBudgeList: ['html', 'bootstrap', 'Ruby'],
    cardButton: 'See Project',
    popUpCardSLB: 'See Live ',
    popUpCardSSB: 'See Source ',
    popUpCardSL: '#',
    popUpCardSS: '#',
    popUpCardImg: './img/pop-up-img.png',
    popUpCardBL: ['html', 'bootstrap', 'Ruby on rails'],
    popUpCardT:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  },
];

// multi post images

const myWorkSection = document.querySelector('.my-work-section');
const mPS = document.createElement('div');
mPS.classList.add('multi-post-stories');
mPS.classList.add('the-general-cont');
myWorkSection.append(mPS);
const mCI = document.createElement('img');
mCI.src = workCards[0].mCardImg;
mPS.append(mCI);
mCI.classList.add('image-placeholder');

// multi post Hs

const mPSDesktop = document.createElement('div');
mPSDesktop.classList.add('multi-post-stories-desktop');
const mPH = document.createElement('h2');
mPH.innerText = workCards[0].mCardHeading;
mPS.append(mPSDesktop);
mPSDesktop.append(mPH);
mPH.classList.add('multi-post-head');

// multi post text

const mPT = document.createElement('p');
mPT.innerText = workCards[0].mCardInfo;
mPSDesktop.append(mPT);
mPT.classList.add('multi-post-text');

// multi post skill list

const mPSL = document.createElement('ul');
workCards[0].mCardBudgeList.forEach((e) => {
  const sLI = document.createElement('li');
  const sLL = document.createElement('a');
  sLL.innerText = e;
  sLI.append(sLL);
  sLL.classList.add('skills-list-text');
  mPSL.append(sLI);
  sLI.classList.add('skills-list');
});
mPSDesktop.append(mPSL);
mPSL.classList.add('skills');

// multi post button

const mPB = document.createElement('button');
mPB.innerText = workCards[0].mCardButton;
mPSDesktop.append(mPB);
mPB.classList.add('mini-see-project');
mPB.classList.add('btn');

function mPSProjectPopUpPage() {
  // create pop up page container

  const popUpPCont = document.createElement('div');
  popUpPCont.classList.add('multi-post-stories');
  popUpPCont.classList.add('the-general-cont');
  popUpPCont.classList.add('pop-up-general-container');

  // create pop up page head and skill container

  const popUpHAndS = document.createElement('div');
  popUpHAndS.classList.add('pop-up-head-plus-skills');
  popUpPCont.append(popUpHAndS);

  // create pop up page img and H container

  const popUpImgHCont = document.createElement('div');
  popUpImgHCont.classList.add('contain');
  popUpHAndS.append(popUpImgHCont);

  // create pop up page close img

  const popUpCloseImg = document.createElement('img');
  popUpCloseImg.src = './img/pop-up-close-button.png';
  popUpImgHCont.append(popUpCloseImg);

  // create pop up page H

  const popUpCardH = document.createElement('h2');
  popUpCardH.classList.add('multi-post-head');
  popUpCardH.classList.add('pop-up-H');
  popUpCardH.innerText = workCards[0].mCardHeading;
  popUpImgHCont.append(popUpCardH);

  // create pop up page skill list

  const popUpSkillList = document.createElement('ul');
  workCards[0].mCardBudgeList.forEach((e) => {
    const popUpsLI = document.createElement('li');
    const popUpsLL = document.createElement('a');
    popUpsLL.innerText = e;
    popUpsLI.append(popUpsLL);
    popUpsLL.classList.add('skills-list-text');
    popUpSkillList.append(popUpsLI);
    popUpsLI.classList.add('skills-list');
  });
  popUpHAndS.append(popUpSkillList);
  popUpSkillList.classList.add('skills');
  popUpSkillList.classList.add('pop-up-skill');

  // create pop up page main C and image

  const popUpImgAndC = document.createElement('div');
  popUpImgAndC.classList.add('pop-up-img-and-content');
  popUpPCont.append(popUpImgAndC);

  // create pop up page main image

  const popUpCardMainImg = document.createElement('img');
  popUpCardMainImg.src = workCards[0].mCardImg;
  popUpCardMainImg.classList.add('image-placeholder');
  popUpCardMainImg.classList.add('pop-up-image');
  popUpImgAndC.append(popUpCardMainImg);

  // create pop up page C and B container

  const popUpCAndB = document.createElement('div');
  popUpCAndB.classList.add('multi-post-stories-desktop');
  popUpCAndB.classList.add('pop-up-content');
  popUpImgAndC.append(popUpCAndB);

  // create pop up page C

  const popUpC = document.createElement('p');
  popUpC.classList.add('multi-post-text');
  popUpC.innerText = workCards[0].mCardInfo;
  popUpCAndB.append(popUpC);

  // create pop up page B

  const popUpB = document.createElement('div');
  popUpB.classList.add('pop-up-buttons');
  popUpCAndB.append(popUpB);

  // create pop up page various B

  const popUpSLB = document.createElement('button');
  popUpSLB.classList.add('mini-see-project');
  popUpSLB.classList.add('btn');
  popUpSLB.innerText = workCards[0].popUpCardSLB;
  popUpSLB.setAttribute('href', workCards[0].popUpCardSL);
  const popUpSeeLiveImg = document.createElement('img');
  popUpSeeLiveImg.src = './img/see-live-btn.png';
  popUpSLB.append(popUpSeeLiveImg);
  popUpB.append(popUpSLB);
  const popUpSSB = document.createElement('button');
  popUpSSB.classList.add('mini-see-project');
  popUpSSB.classList.add('btn');
  popUpSSB.innerText = workCards[0].popUpCardSSB;
  popUpSSB.setAttribute('href', workCards[0].popUpCardSS);
  const popUpSeeSourceImg = document.createElement('img');
  popUpSeeSourceImg.src = './img/source-btn.png';
  popUpSSB.append(popUpSeeSourceImg);
  popUpB.append(popUpSLB);
  popUpB.append(popUpSSB);
  document.body.append(popUpPCont);

  // add background blur

  document.querySelector('#the-nav-cont').classList.add('overlay');
  document.querySelector('.main-cont').classList.add('overlay');
  document.querySelector('.my-work-section').classList.add('overlay');
  document.querySelector('#about').classList.add('overlay');
  document.querySelector('#contact').classList.add('overlay');

  // size up pop up close image

  popUpCloseImg.setAttribute('width', '24px');
  popUpCloseImg.setAttribute('height', '24px');

  // remove background blur

  popUpCloseImg.addEventListener('click', () => {
    document.body.removeChild(popUpPCont);
    document.querySelector('#the-nav-cont').classList.remove('overlay');
    document.querySelector('.main-cont').classList.remove('overlay');
    document.querySelector('.my-work-section').classList.remove('overlay');
    document.querySelector('#about').classList.remove('overlay');
    document.querySelector('#contact').classList.remove('overlay');
  });
}

// all project cards

const allProjects = document.createElement('div');
myWorkSection.append(allProjects);
allProjects.classList.add('all-projects');

function projectPopUpPage(card) {
  // create pop up page container

  const popUpPCont = document.createElement('div');
  popUpPCont.classList.add('multi-post-stories');
  popUpPCont.classList.add('the-general-cont');
  popUpPCont.classList.add('pop-up-general-container');

  // create pop up page head and skill container

  const popUpHAndS = document.createElement('div');
  popUpHAndS.classList.add('pop-up-head-plus-skills');
  popUpPCont.append(popUpHAndS);

  // create pop up page img and H container

  const popUpImgHCont = document.createElement('div');
  popUpImgHCont.classList.add('contain');
  popUpHAndS.append(popUpImgHCont);

  // create pop up page close img

  const popUpCloseImg = document.createElement('img');
  popUpCloseImg.src = './img/pop-up-close-button.png';
  popUpImgHCont.append(popUpCloseImg);

  // create pop up page HH

  const popUpCardH = document.createElement('h2');
  popUpCardH.classList.add('multi-post-head');
  popUpCardH.classList.add('pop-up-H');
  popUpCardH.innerText = workCards[card].cardHeading;
  popUpImgHCont.append(popUpCardH);

  // create pop up page skill list

  const popUpSkillList = document.createElement('ul');
  workCards[card].popUpCardBL.forEach((e) => {
    const popUpsLI = document.createElement('li');
    const popUpsLL = document.createElement('a');
    popUpsLL.innerText = e;
    popUpsLI.append(popUpsLL);
    popUpsLL.classList.add('skills-list-text');
    popUpSkillList.append(popUpsLI);
    popUpsLI.classList.add('skills-list');
  });
  popUpHAndS.append(popUpSkillList);
  popUpSkillList.classList.add('skills');
  popUpSkillList.classList.add('pop-up-skill');

  // create pop up page main C and image

  const popUpImgAndC = document.createElement('div');
  popUpImgAndC.classList.add('pop-up-img-and-content');
  popUpPCont.append(popUpImgAndC);

  // create pop up page main image

  const popUpCardMainImg = document.createElement('img');
  popUpCardMainImg.src = workCards[card].popUpCardImg;
  popUpCardMainImg.classList.add('image-placeholder');
  popUpCardMainImg.classList.add('pop-up-image');
  popUpImgAndC.append(popUpCardMainImg);

  // create pop up page C and B container

  const popUpCAndB = document.createElement('div');
  popUpCAndB.classList.add('multi-post-stories-desktop');
  popUpCAndB.classList.add('pop-up-content');
  popUpImgAndC.append(popUpCAndB);

  // create pop up page C

  const popUpC = document.createElement('p');
  popUpC.classList.add('multi-post-text');
  popUpC.innerText = workCards[card].popUpCardT;
  popUpCAndB.append(popUpC);

  // create pop up page B

  const popUpB = document.createElement('div');
  popUpB.classList.add('pop-up-buttons');
  popUpCAndB.append(popUpB);

  // create pop up page various B

  const popUpSLB = document.createElement('button');
  popUpSLB.classList.add('mini-see-project');
  popUpSLB.classList.add('btn');
  popUpSLB.innerText = workCards[card].popUpCardSLB;
  popUpSLB.setAttribute('href', workCards[card].popUpCardSL);
  const popUpSeeLiveImg = document.createElement('img');
  popUpSeeLiveImg.src = './img/see-live-btn.png';
  popUpSLB.append(popUpSeeLiveImg);
  popUpB.append(popUpSLB);
  const popUpSSB = document.createElement('button');
  popUpSSB.classList.add('mini-see-project');
  popUpSSB.classList.add('btn');
  popUpSSB.innerText = workCards[card].popUpCardSSB;
  popUpSSB.setAttribute('href', workCards[card].popUpCardSS);
  const popUpSeeSourceImg = document.createElement('img');
  popUpSeeSourceImg.src = './img/source-btn.png';
  popUpSSB.append(popUpSeeSourceImg);
  popUpB.append(popUpSLB);
  popUpB.append(popUpSSB);
  document.body.append(popUpPCont);

  // add background blur

  document.querySelector('#the-nav-cont').classList.add('overlay');
  document.querySelector('.main-cont').classList.add('overlay');
  document.querySelector('.my-work-section').classList.add('overlay');
  document.querySelector('#about').classList.add('overlay');
  document.querySelector('#contact').classList.add('overlay');

  // size up pop up close image

  popUpCloseImg.setAttribute('width', '24px');
  popUpCloseImg.setAttribute('height', '24px');

  // remove background blur

  popUpCloseImg.addEventListener('click', () => {
    document.body.removeChild(popUpPCont);
    document.querySelector('#the-nav-cont').classList.remove('overlay');
    document.querySelector('.main-cont').classList.remove('overlay');
    document.querySelector('.my-work-section').classList.remove('overlay');
    document.querySelector('#about').classList.remove('overlay');
    document.querySelector('#contact').classList.remove('overlay');
  });
}

for (let card = 1; card < workCards.length; card += 1) {
  // create card container

  const projectCard = document.createElement('article');
  projectCard.classList.add('various-projects');
  allProjects.append(projectCard);

  // create card H

  const projectCardH = document.createElement('h2');
  projectCardH.classList.add('various-Project-heading');
  projectCardH.innerText = workCards[card].cardHeading;
  projectCard.append(projectCardH);

  // create card body

  const projectCardBody = document.createElement('p');
  projectCardBody.classList.add('various-project-text');
  projectCardBody.innerText = workCards[card].cardText;
  projectCard.append(projectCardBody);

  // create card skill list

  const projectCardSkillList = document.createElement('ul');
  workCards[card].cardBudgeList.forEach((e) => {
    const projectsLI = document.createElement('li');
    const projectsLL = document.createElement('a');
    projectsLL.innerText = e;
    projectsLI.append(projectsLL);
    projectsLL.classList.add('various-required-skills');
    projectCardSkillList.append(projectsLI);
    projectsLI.classList.add('required-skill');
  });
  projectCard.append(projectCardSkillList);
  projectCardSkillList.classList.add('various-skills');

  // create card button

  const projectCardButton = document.createElement('button');
  projectCardButton.classList.add('various-project-see-project');
  projectCardButton.classList.add('btn');
  projectCardButton.innerText = workCards[card].cardButton;
  projectCard.append(projectCardButton);

  projectCardButton.addEventListener('click', () => {
    projectPopUpPage(card);
  });
}

mPB.addEventListener('click', () => {
  mPSProjectPopUpPage();
});

// contact validating form

const thisForm = document.querySelector('.contact-form');
const errorMsg = document.createElement('small');
const theMainForm = document.querySelector('.contact-f-sec');
errorMsg.innerText = 'email should be in lowercase';
theMainForm.appendChild(errorMsg);
errorMsg.className = 'vanish';

function validateEmail() {
  const userInputEmail = thisForm.querySelector('#mail');
  const validatorStr = userInputEmail.value.toLowerCase();
  const validate = userInputEmail.value === validatorStr;
  return validate;
}

thisForm.addEventListener('submit', (val) => {
  if (validateEmail()) {
    thisForm.submit();
    errorMsg.className = 'vanish';
  } else {
    val.preventDefault();
    errorMsg.className = 'appear';
  }
});
