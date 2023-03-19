// reacline 객체를 만듬
const rl = require("readline").createInterface({
    // 표준입럭을 받음 (한 줄 씩 enter를 쳐서 입력 받음)
    input: process.stdin,
    // 표준출력을 함 (모니테 화면에 출력 됨)
    output: process.stdout,
});

let input = [];

// readline 객체의 on event로
rl.on("line", function (line) {
    // 콘솔 입력 창에서 한 줄 입력 했을 때(enter) 마다 호출
    input.push(line);
}).on("close", function () {
    // 입력이 끝났을 때 호출 (ctrl + c || d)
    console.log(input);
    process.exit();
});
