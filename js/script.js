const contactList = document.querySelector(".contact-list");
const contactItem = contactList.children;
const perPage = 10;
let page = 1;

// To show 10 contacts item per a page
const showPage = (list, page) => {
  for (let i = 0; i < list.length; i++) {
    if (i < page * 10 || i > page * 10 + 9) {
      list[i].style.display = "none";
    } else {
      list[i].style.display = "block";
    }
  }
};

// To append page numbers & to jump the clicked page
const appendPageLinks = (list) => {
  const totalpages = Math.ceil(list.length / perPage);
  // To test total pages
  // console.log(totalpages);
  const itemList = document.querySelector("div.pagination");

  // Add buttons
  for (let i = 1; i <= totalpages; i++) {
    let addButton = document.createElement("li");
    addButton.innerHTML = '<a class="ref" >' + i + "</a>";
    itemList.appendChild(addButton);
  }

  let itemButtons = document.querySelectorAll(".ref");

  // Remove active when refreshing the page
  for (let i = 0; i < itemButtons.length; i++) {
    itemButtons[i].classList.remove("active");

    // Add event listeners
    itemButtons[i].addEventListener("click", () => {
      showPage(contactItem, i);

      // Remove active for other buttons
      for (let j = 0; j < itemButtons.length; j++) {
        itemButtons[j].classList.remove("active");
      }
      // Add active for a clicked button
      itemButtons[i].classList.add("active");
    });
  }
};

showPage(contactItem, 0);
appendPageLinks(contactItem);
