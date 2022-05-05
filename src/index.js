import _ from 'lodash';

function component() {
    const element = document.createElement('div');

    // lodash stuff
    element.innerHTML = _.join(['Hello', 'Gradle'], ' ');

    return element;
}

document.body.appendChild(component());