function solution(participant, completion) {
    participant.sort();
    completion.sort();

    return participant.find((person, idx) => person !== completion[idx]);
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));
console.log(
    solution(
        ["marina", "josipa", "nikola", "vinko", "filipa"],
        ["josipa", "filipa", "marina", "nikola"]
    )
);
console.log(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]));
