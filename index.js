const fs = require('fs');

const xmljs1 = require('xml-js');
//const xmljs2 = require('xml-js-converter');
var employees = [];
employees.push(
  {
    id: 1,
    nom: 'Loukili',
    salaire: 10000,
  },
  {
    id: 2,
    nom: 'Kamal',
    salaire: 9000,
  },
  {
    id: 3,
    nom: 'Sanae',
    salaire: 8000,
  }
);
console.log(employees);
var listEmployees = { employe: employees };
var jsonData = JSON.stringify(listEmployees);
var xmlData ="<root>"+ xmljs1.js2xml(listEmployees)+"</root>";
console.log(jsonData);
console.log(xmlData);
var options = { compact: true, spaces: 4 };
//fs.writeFileSync('data.json', jsonData, options);
fs.writeFileSync('data.xml',xmlData, options);
