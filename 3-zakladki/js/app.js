const tabs = document.querySelectorAll('.tab-el');
const contents = document.querySelectorAll('.tab-content');

const switchTab = (e) => {
    e.preventDefault();

    const tabClicked = e.currentTarget;
    const linkClickedText = e.target.textContent;
    tabs.forEach(tab => tab.classList.contains('tab-el-active') ? tab.classList.remove('tab-el-active') : null);
    contents.forEach(content => content.classList.contains('tab-content-active') ? content.classList.remove('tab-content-active') : null);
    tabClicked.classList.add('tab-el-active');
    contents.forEach(content => content.firstElementChild.textContent === linkClickedText ? content.classList.add('tab-content-active') : null);
};

tabs.forEach(tab => tab.addEventListener('click', switchTab));
