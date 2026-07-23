const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);
console.log(obj);
console.log(obj.count);

const arrJson = '[1, 2, 3]';
console.log(JSON.parse(arrJson));

const nested = '[1, 2, [1, 2, 3]]';
console.log(JSON.parse(nested));

let jsonData = '[{"name": "Hong", "age": 25}, {"name": "Kim", "age": 30}]';
let parsedData = JSON.parse(jsonData);
console.log(parsedData.length);

parsedData.forEach((item) => {
    console.log(item.name);
    console.log(item.age);
});

try {
    const data = JSON.parse(raw);
} catch (e) {
    console.error('JSON 파싱 실패', e);
}