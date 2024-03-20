const navItems = document.querySelectorAll('.sidebar p');
const contentSections = document.querySelectorAll('.content > div');

navItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    contentSections.forEach((section, i) => {
      navItems[i].classList.remove('nav-active');
      section.classList.add('hidden');
    });

    navItems[index].classList.add('nav-active');
    contentSections[index].classList.remove('hidden');
  });
});
