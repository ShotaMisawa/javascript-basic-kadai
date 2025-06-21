const today = new Date(); // 現在の日時を取得

let localYear=today.getFullYear();
let localMonth = today.getMonth() + 1; // 月は0から始まるので+1
let localDay = today.getDate();

console.log(localYear+"年"+localMonth+"月"+localDay+"日");
