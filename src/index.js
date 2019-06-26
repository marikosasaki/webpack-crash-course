import _ from 'lodash'
import Lion from './utilities'

console.log(Lion.say());

function component(){
    var element =  document.createElement('div');
    const array = ['hello', 'webpack', '！！！！!']
    element.innerHTML =  _.join(array,' ')
    return element;
}

document.body.appendChild(component());