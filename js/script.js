// Profile objects
// elements - imgSrc, name, emailAddress, joinedDate
const profiles = [
  (profile1 = {
    imgSrc: "https://randomuser.me/api/portraits/thumb/women/67.jpg",
    name: "iboya vat",
    emailAddress: "iboya.vat@example.com",
    joinedDate: "Joined 07/15/15",
  }),
  (profile2 = {
    imgSrc: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
    name: "aapo niskanen",
    emailAddress: "aapo.niskanen@example.com",
    joinedDate: "Joined 06/15/12",
  }),
  (profile3 = {
    imgSrc: "https://randomuser.me/api/portraits/thumb/men/34.jpg",
    name: "phillip cox",
    emailAddress: "phillip.cox@example.com",
    joinedDate: "Joined 09/11/14",
  }),
  (profile4 = {
    imgSrc: "https://randomuser.me/api/portraits/thumb/women/38.jpg",
    name: "zilda moreira",
    emailAddress: "zilda.moreira@example.com",
    joinedDate: "Joined 07/15/15",
  }),
  (profile5 = {
    imgSrc: "https://randomuser.me/api/portraits/thumb/women/23.jpg",
    name: "zilda moreira",
    emailAddress: "zilda.moreira@example.com",
    joinedDate: "Joined 07/15/15",
  }),
  (profile6 = {
    imgSrc: "https://randomuser.me/api/portraits/thumb/women/94.jpg",
    name: "lucy hall",
    emailAddress: "lucy.hall@example.com",
    joinedDate: "Joined 09/11/16",
  }),
  (profile7 = {
    imgSrc: "https://randomuser.me/api/portraits/thumb/women/24.jpg",
    name: "mark colin",
    emailAddress: "mark.colin@example.com",
    joinedDate: "Joined 01/14/14",
  }),
  (profile8 = {
    imgSrc: "https://randomuser.me/api/portraits/thumb/women/14.jpg",
    name: "sara alves",
    emailAddress: "sara.alves@example.com",
    joinedDate: "Joined 07/19/16",
  }),
  (profile9 = {
    imgSrc: "https://randomuser.me/api/portraits/thumb/men/49.jpg",
    name: "ramon macrae",
    emailAddress: "ramon.macrae@example.com",
    joinedDate: "Joined 05/13/12",
  }),
  (profile10 = {
    imgSrc: "https://randomuser.me/api/portraits/thumb/men/15.jpg",
    name: "connor taylor",
    emailAddress: "connor.taylor@example.com",
    joinedDate: "Joined 05/18/14",
  }),
  (profile11 = {
    imgSrc: "https://randomuser.me/api/portraits/thumb/men/11.jpg",
    name: "aymeric morel",
    emailAddress: "aymeric.morel@example.com",
    joinedDate: "Joined 06/13/13",
  }),
  (profile12 = {
    imgSrc: "https://randomuser.me/api/portraits/thumb/men/49.jpg",
    name: "lorenz otto",
    emailAddress: "lorenz.otto@example.com",
    joinedDate: "Joined 05/11/14",
  }),
  (profile13 = {
    imgSrc: "https://randomuser.me/api/portraits/thumb/men/29.jpg",
    name: "karl williamson",
    emailAddress: "karl.williamson@example.com",
    joinedDate: "Joined 01/12/14",
  }),
  (profile14 = {
    imgSrc: "https://randomuser.me/api/portraits/thumb/men/34.jpg",
    name: "ouassim heering",
    emailAddress: "ouassim.heering@example.com",
    joinedDate: "Joined 01/18/12",
  }),
  (profile15 = {
    imgSrc: "https://randomuser.me/api/portraits/thumb/men/91.jpg",
    name: "roberto molina",
    emailAddress: "roberto.molina@example.com",
    joinedDate: "Joined 06/13/15",
  }),
  (profile16 = {
    imgSrc: "https://randomuser.me/api/portraits/thumb/men/28.jpg",
    name: "jordan hubert",
    emailAddress: "jordan.hubert@example.com",
    joinedDate: "Joined 06/13/15",
  }),
  (profile17 = {
    imgSrc: "https://randomuser.me/api/portraits/thumb/men/29.jpg",
    name: "melvin baker",
    emailAddress: "melvin.baker@example.com",
    joinedDate: "Joined 09/18/14",
  }),
  (profile18 = {
    imgSrc: "https://randomuser.me/api/portraits/thumb/men/26.jpg",
    name: "everett gordon",
    emailAddress: "everett.gordon@example.com",
    joinedDate: "Joined 06/17/15",
  }),
  (profile19 = {
    imgSrc: "https://randomuser.me/api/portraits/thumb/men/82.jpg",
    name: "aiden ma",
    emailAddress: "aiden.ma@example.com",
    joinedDate: "Joined 07/18/12",
  }),
  (profile20 = {
    imgSrc: "https://randomuser.me/api/portraits/thumb/men/62.jpg",
    name: "florent gerard",
    emailAddress: "florent.gerard@example.com",
    joinedDate: "Joined 02/12/13",
  }),
  (profile21 = {
    imgSrc: "https://randomuser.me/api/portraits/thumb/women/96.jpg",
    name: "amber chen",
    emailAddress: "amber.chen@example.com",
    joinedDate: "Joined 07/12/12",
  }),
  (profile22 = {
    imgSrc: "https://randomuser.me/api/portraits/thumb/women/9.jpg",
    name: "alexandra davies",
    emailAddress: "alexandra.davies@example.com",
    joinedDate: "Joined 05/11/13",
  }),
  (profile23 = {
    imgSrc: "https://randomuser.me/api/portraits/thumb/men/57.jpg",
    name: "sergio cole",
    emailAddress: "sergio.cole@example.com",
    joinedDate: "Joined 02/17/15",
  }),
  (profile24 = {
    imgSrc: "https://randomuser.me/api/portraits/thumb/men/98.jpg",
    name: "edgar dixon",
    emailAddress: "edgar.dixon@example.com",
    joinedDate: "Joined 06/17/11",
  }),
  (profile25 = {
    imgSrc: "https://randomuser.me/api/portraits/thumb/men/94.jpg",
    name: "kirk myers",
    emailAddress: "kirk.myers@example.com",
    joinedDate: "Joined 09/17/15",
  }),
  (profile26 = {
    imgSrc: "https://randomuser.me/api/portraits/thumb/women/28.jpg",
    name: "ani hesseling",
    emailAddress: "ani.hesseling@example.com",
    joinedDate: "Joined 08/14/16",
  }),
  (profile27 = {
    imgSrc: "https://randomuser.me/api/portraits/thumb/women/24.jpg",
    name: "victoire bonnet",
    emailAddress: "victoire.bonnet@example.com",
    joinedDate: "Joined 05/13/16",
  }),
  (profile28 = {
    imgSrc: "https://randomuser.me/api/portraits/thumb/men/44.jpg",
    name: "marcos morales",
    emailAddress: "marcos.morales@example.com",
    joinedDate: "Joined 01/12/12",
  }),
  (profile29 = {
    imgSrc: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
    name: "nils neumann",
    emailAddress: "nils.neumann@example.com",
    joinedDate: "Joined 03/11/12",
  }),
  (profile30 = {
    imgSrc: "https://randomuser.me/api/portraits/thumb/women/86.jpg",
    name: "emily harrison",
    emailAddress: "emily.harrison@example.com",
    joinedDate: "Joined 07/18/15",
  }),
  (profile31 = {
    imgSrc: "https://randomuser.me/api/portraits/thumb/men/41.jpg",
    name: "matthew fortin",
    emailAddress: "matthew.fortin@example.com",
    joinedDate: "Joined 03/18/15",
  }),
  (profile32 = {
    imgSrc: "https://randomuser.me/api/portraits/thumb/women/32.jpg",
    name: "charlotte steward",
    emailAddress: "charlotte.steward@example.com",
    joinedDate: "Joined 02/18/11",
  }),
  (profile33 = {
    imgSrc: "https://randomuser.me/api/portraits/thumb/men/3.jpg",
    name: "marceau rodriguez",
    emailAddress: "marceau.rodriguez@example.com",
    joinedDate: "Joined 07/13/14",
  }),
  (profile34 = {
    imgSrc: "https://randomuser.me/api/portraits/thumb/men/91.jpg",
    name: "hudson anderson",
    emailAddress: "hudson.anderson@example.com",
    joinedDate: "Joined 09/12/15",
  }),
  (profile35 = {
    imgSrc: "https://randomuser.me/api/portraits/thumb/men/33.jpg",
    name: "warren phillips",
    emailAddress: "warren.phillips@example.com",
    joinedDate: "Joined 01/11/12",
  }),
  (profile36 = {
    imgSrc: "https://randomuser.me/api/portraits/thumb/men/41.jpg",
    name: "leo niva",
    emailAddress: "leo.niva@example.com",
    joinedDate: "Joined 09/14/15",
  }),
  (profile37 = {
    imgSrc: "https://randomuser.me/api/portraits/thumb/men/3.jpg",
    name: "hani prevoo",
    emailAddress: "hani.prevoo@example.com",
    joinedDate: "Joined 01/11/15",
  }),
  (profile38 = {
    imgSrc: "https://randomuser.me/api/portraits/thumb/women/79.jpg",
    name: "veronica rodriguez",
    emailAddress: "veronica.rodriguez@example.com",
    joinedDate: "Joined 07/17/12",
  }),
  (profile39 = {
    imgSrc: "https://randomuser.me/api/portraits/thumb/men/41.jpg",
    name: "ginestal das neves",
    emailAddress: "ginestal.das neves@example.com",
    joinedDate: "Joined 06/19/12",
  }),
  (profile40 = {
    imgSrc: "https://randomuser.me/api/portraits/thumb/men/63.jpg",
    name: "devon barnes",
    emailAddress: "devon.barnes@example.com",
    joinedDate: "Joined 09/19/14",
  }),
  (profile41 = {
    imgSrc: "https://randomuser.me/api/portraits/thumb/men/55.jpg",
    name: "brennan pierce",
    emailAddress: "brennan.pierce@example.com",
    joinedDate: "Joined 05/15/14",
  }),
  (profile42 = {
    imgSrc: "https://randomuser.me/api/portraits/thumb/men/35.jpg",
    name: "arlo harris",
    emailAddress: "arlo.harris@example.com",
    joinedDate: "Joined 07/12/15",
  }),
  (profile43 = {
    imgSrc: "https://randomuser.me/api/portraits/thumb/women/60.jpg",
    name: "hannah ginnish",
    emailAddress: "hannah.ginnish@example.com",
    joinedDate: "Joined 05/17/14",
  }),
  (profile44 = {
    imgSrc: "https://randomuser.me/api/portraits/thumb/men/95.jpg",
    name: "goos brunt",
    emailAddress: "goos.brunt@example.com",
    joinedDate: "Joined 09/15/12",
  }),
  (profile45 = {
    imgSrc: "https://randomuser.me/api/portraits/thumb/men/91.jpg",
    name: "eduard riedel",
    emailAddress: "eduard.riedel@example.com",
    joinedDate: "Joined 06/12/15",
  }),
  (profile46 = {
    imgSrc: "https://randomuser.me/api/portraits/thumb/women/42.jpg",
    name: "geesken jekel",
    emailAddress: "geesken.jekel@example.com",
    joinedDate: "Joined 02/12/13",
  }),
  (profile47 = {
    imgSrc: "https://randomuser.me/api/portraits/thumb/women/54.jpg",
    name: "dolores ryan",
    emailAddress: "dolores.ryan@example.com",
    joinedDate: "Joined 06/17/16",
  }),
  (profile48 = {
    imgSrc: "https://randomuser.me/api/portraits/thumb/men/49.jpg",
    name: "steven rogers",
    emailAddress: "steven.rogers@example.com",
    joinedDate: "Joined 01/18/11",
  }),
  (profile49 = {
    imgSrc: "https://randomuser.me/api/portraits/thumb/men/63.jpg",
    name: "virgulino silva",
    emailAddress: "virgulino.silva@example.com",
    joinedDate: "Joined 03/18/11",
  }),
  (profile50 = {
    imgSrc: "https://randomuser.me/api/portraits/thumb/women/11.jpg",
    name: "lucile bertrand",
    emailAddress: "lucile.bertrand@example.com",
    joinedDate: "Joined 06/13/16",
  }),
  (profile51 = {
    imgSrc: "https://randomuser.me/api/portraits/thumb/women/10.jpg",
    name: "elsa lahti",
    emailAddress: "elsa.lahti@example.com",
    joinedDate: "Joined 04/15/12",
  }),
  (profile52 = {
    imgSrc: "https://randomuser.me/api/portraits/thumb/women/12.jpg",
    name: "soline leclercq",
    emailAddress: "soline.leclercq@example.com",
    joinedDate: "Joined 05/12/14",
  }),
  (profile53 = {
    imgSrc: "https://randomuser.me/api/portraits/thumb/men/89.jpg",
    name: "henri kruse",
    emailAddress: "henri.kruse@example.com",
    joinedDate: "Joined 05/14/13",
  }),
];

// contacts list html listWrapper
const contactsWrapper = document.querySelector(".contact-list");
// pages list html listWrapper
const pagesWrapper = document.querySelector(".pagination");
console.log(pagesWrapper);
// Pages per page is '10'
const profilesPerPage = 10;
// Initialize the current page
let currentPage = 1;

/**
 * To display profiles in each page
 * @param {object array} profiles a list of profiles
 * @param {ul html element} listWrapper list wrapper of elements (page list OR profile list)
 * @param {int} profilesPerPage the number of profiles per pages
 * @param {int} currentPage the current page
 */
const DisplayProfiles = (
  profiles,
  listWrapper,
  profilesPerPage,
  currentPage
) => {
  // Initialize inner HTML
  listWrapper.innerHTML = "";
  currentPage--; // should be '0' at first

  // 10 * 0
  let startPoint = profilesPerPage * currentPage;
  // 0 + 10
  let endPoint = startPoint + profilesPerPage;
  // 0 ~ 10 profiles

  // console.log(profiles);
  let separatedProfiles = profiles.slice(startPoint, endPoint);
  // console.log(separatedProfiles.length);

  // Display each profiles from start to end point (e.g. 0,1,2,3,4,5...10)
  for (let index = 0; index < separatedProfiles.length; index++) {
    let profile = separatedProfiles[index];
    let profileElement = document.createElement("li");
    // add class = "contact-item cf"
    profileElement.classList.add("contact-item", "cf");

    profileElement.innerHTML =
      "<div class = 'contact-details'> <img class = 'avatar' src = '" +
      profile.imgSrc +
      " ' /> <h3>" +
      profile.name +
      "</h3><span class='email'>" +
      profile.emailAddress +
      "</span></div><div class='joined-details'> <span class ='date'>" +
      profile.joinedDate +
      "</span></div>";

    // Append all profiles inside the contacts wrapper
    listWrapper.appendChild(profileElement);
  }
};

const paging = (page, profiles) => {
  let pageElement = document.createElement("li");
  pageElement.innerHTML = "<a>" + page + "</a>";

  pageElement.addEventListener("click", function () {
    currentPage = page;
    DisplayProfiles(profiles, contactsWrapper, profilesPerPage, currentPage);
  });

  return pageElement;
};

/**
 * To set up profiles pagination
 * @param {object array} profiles a list of profiles
 * @param {ul html element} listWrapper list wrapper of elements (page list OR profile list)
 * @param {int} profilesPerPage the number of profiles per pages
 */
const SetupPagination = (profiles, listWrapper, profilesPerPage) => {
  listWrapper.innerHTML = "";

  totalPages = Math.ceil(profiles.length / profilesPerPage); // 55/10 => ceil(5.5) => 6
  // console.log(totalPages); // 6

  // Display profiles pages
  for (let index = 1; index <= totalPages; index++) {
    let pageElement = paging(index, profiles);
    listWrapper.appendChild(pageElement);
  }
};

DisplayProfiles(profiles, contactsWrapper, profilesPerPage, currentPage);
SetupPagination(profiles, pagesWrapper, profilesPerPage);
