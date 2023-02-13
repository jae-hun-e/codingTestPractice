const table = new Map();
table.set("key", 100);
table.set("key2", "hello");
console.log(table["key"]); // undefined
console.log(table.get("key")); // 100

const obj = { a: 1 };
table.set(obj, "A1");
console.log(table.get(obj)); // A1
table.delete(obj);
console.log(table.get(obj)); // undefined
console.log(table.keys()); // [Map Iterator] { 'key', 'key2' }
console.log(table.values()); // [Map Iterator] { 100, 'hello' }
table.clear();
console.log(table.values()); // [Map Iterator] {  }
