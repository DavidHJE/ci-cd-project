const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');


let x


  Given('J\'achete une boisson pour ${int}', function (int) {
    // Write code here that turns the phrase above into concrete actions
    x =int;
  });




  Given('J\'acheteune baquette pour ${int}', function (int) {
    // Write code here that turns the phrase above into concrete actions
    x = x + int;
  });

  Then('Le montant total de mes course est ${int}', function (x) {
    // Write code here that turns the phrase above into concrete actions
    console.log(x);
  });