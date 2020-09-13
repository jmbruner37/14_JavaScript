// from data.js
var tableData = data;
console.log(tableData);

//reference to table body
var tbody = d3.select('tbody');

// data.js console weather data
console.log(data);

 data.forEach(function(sightingReport) {
    console.log(sightingReport);
    var row = tbody.append("tr");
     Object.entries(sightingReport).forEach(function([key, value]) {
       console.log(key, value);
       var cell = tbody.append("td");
       cell.text(value);
     });
   });

