const elements = Array.from(document.querySelectorAll('.nav-el'));

const moveClass = (e) => {
    e.preventDefault();
    const elClicked = e.currentTarget;
    const activeEl = elements.filter(el => el.classList.contains('nav-el-active'))[0];
    activeEl.classList.remove('nav-el-active');
    elClicked.classList.add('nav-el-active')
};

elements.forEach(element => element.addEventListener('click', moveClass));
