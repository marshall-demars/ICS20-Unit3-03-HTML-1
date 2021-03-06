// Created by: Marshall
// Created on: Apr 2022
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit3-03-HTML-1/sw.js", {
    scope: "/ICS20-Unit3-03-HTML-1/",
  })
}

'use strict'

/**
 * This function calculates area of a triangle.
 */
function calculate () {
  // input
  const radius = parseFloat(document.getElementById('radius-sphere').value)

  // process
  const volume = 4/3 * Math.PI * Math.pow(radius, 3)

  // output
  document.getElementById('volume').innerHTML = 'Area of the sphere is: ' + volume.toFixed(2) + ' km³'
}