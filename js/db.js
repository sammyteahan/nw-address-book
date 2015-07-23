var db = new PouchDB('addresses');

db.info().then(function(info) {
  document.getElementById('database').innerHTML = 'we have a database: ' + JSON.stringify(info);
});

var doc = {
  "_id": "teahan",
  "name": "Teahan",
  "address": "676 Country Breeze Circle",
  "city": "Draper",
  "state": "Utah"
};

db.put(doc);

db.get('teahan').then(function(doc) {
  console.log(doc);
});