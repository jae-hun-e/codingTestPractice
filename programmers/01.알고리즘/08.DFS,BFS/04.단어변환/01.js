function solution(begin, target, words) {
    // 없을 때
    if (!words.find((word) => word === target)) return 0;

    // bfs
    let step = 0;
    const queue = [[begin, step]];

    while (queue.length) {
        [begin, step] = queue.shift();
        // 다음 스탭 가능한 단어
        const nextStep = [];

        if (begin === target) return step;

        // 하나만 다른 단어 찾기
        for (const word of words) {
            let diff = 0;
            for (let i = 0; i < begin.length; i++) {
                if (!!word && begin[i] !== word[i]) diff++;
            }
            if (diff === 1) {
                words[words.findIndex((v) => v === word)] = null;
                nextStep.push(word);
            }
        }
        // console.log("nextStep", nextStep);
        // console.log("words", words);

        // 다음step
        for (const next of nextStep) {
            queue.push([next, step + 1]);
        }
    }

    return step;
}

console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));
console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log"]));
