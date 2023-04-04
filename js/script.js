 // Copyright (c) 2022 Ms Raffin All rights reserved
//
// Created by: Ms Raffin edited by david ukiri
// Created on: March 2022
// This file contains the JS functions for index.html

"use strict";
/**
 * This function calculates the surface area of a cube.
 */
function calculate () {
  // input
  let l = parseFloat(document.getElementById('Side l').value);
  let w = parseFloat(document.getElementById('Side w').value);
  let h = parseFloat(document.getElementById('Side h').value);

  // process
  let volume = (l * w * h) / 3 ;
volume = volume.toFixed(2)
  // output
  document.getElementById('user-info').innerHTML = 'Area is: ' + volume + ' cm²'
}
