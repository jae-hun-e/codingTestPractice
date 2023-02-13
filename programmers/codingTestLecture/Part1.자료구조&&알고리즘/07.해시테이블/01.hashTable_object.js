const table = {};

table["key"] = 100;
table["key2"] = "hello";
console.log(table["key"]);
table["key"] = 349;
console.log(table["key"]);
delete table["key"];
console.log(table["key"]);
