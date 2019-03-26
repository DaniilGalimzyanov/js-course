"use strict";

import {timer as timer}             from './parts/timer';
import {tabs as tabs}               from './parts/tabs';
import {slider as slider}           from './parts/slider';
import {popupWindow as popupWindow} from './parts/popup';
import {formInit as formInit}       from './parts/formInit';
import {anchorLink as anchorLink}   from './parts/anchorLink';
import {calc as calc}               from './parts/calc';


window.addEventListener('DOMContentLoaded', function() {
    anchorLink();
    tabs()
    timer('2019-04-15', '.hours', '.minutes', '.seconds');
    popupWindow();  
    formInit('.main-form');
    formInit('#form');
    slider();
    calc();  
});