import _ from 'lodash';
import './style.css'
// import Icon from './icon.png'
import printMe from './print.js';

function component() {
    const element = document.createElement('div');
    // lodash 现在使用 import 引入
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    const btn = document.createElement('button');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);

    // 将图像添加到已经存在的 div 中。
    // const myIcon = new Image();
    // myIcon.src = Icon;

    // element.appendChild(myIcon);

    return element;
}

document.body.appendChild(component());