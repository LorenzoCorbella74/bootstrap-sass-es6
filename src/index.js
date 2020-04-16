import "./styles.scss";


import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap';

window.$ = $
window.jQuery = $
window.Popper = Popper

// eslint-disable-next-line no-console
let log = (a) => console.log(a);

log('Works !');