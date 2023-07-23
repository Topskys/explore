import "./heading.css"

export default () => {
    const element = document.createElement('h2');
    element.textContent = 'This is the title in H2';
    element.classList.add("heading"); // css 类选择器
    element.addEventListener('click', () => {
        alert('This is Webpack');
    })
    return element
}