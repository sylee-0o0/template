// 나만의 라면 레시피
// 1. 라면을 고른다.
// 2. 뒷면의 사용설명서를 본다.
// 3. 사용 설명서에 맞춰서 라면을 끓인다.
// 4. 기호에 따라 김치, 파 또는 계란을 넣는다.
// 5. 먹는다.
function makeRamyun(물양, 짜파) {
    let wateTemp = 20;
    let 재료 = ["계란", "대파", "양파", "김치", "마늘", "치즈"];
    console.log(`물을 ${물양} 만큼을 냄비에 넣는다.`);
    for (; wateTemp <= 100; wateTemp = wateTemp + 10) {
        console.log(`물의 온도는 ${wateTemp} 입니다.`);
    }
    if(짜파) {
        console.log("면을 넣는다. ");
    } else {
        console.log("스프를 넣는다. ");
        console.log("면을 넣는다. ");
    }
    console.log("후레이크를 넣는다. ");
    for (let waitMin = 0; waitMin < 4; waitMin++) {
        console.log("라면을 익히고 있습니다...");
    }
    console.log("인덕션을 종료합니다. ");
    //for (let i = 0; i < 재료.length; i++) {
    //    console.log(`${재료[i]}을/를 넣습니다. `);}
    if (짜파) {
        console.log("물을 버린다.")
        console.log("분말 스프를 넣고 비빈다.");
    } else {
        for (const item of 재료) {
        console.log(`${item}을/를 넣습니다. `);}
    }
    console.log("그릇에 옮겨 담아서 김치와 함께 먹는다. ");
}
makeRamyun(500, false);