function solution(participant, completion) {
    const participantPerson = participant.sort();
    const completionPerson = completion.sort();

    return participantPerson.find((person, idx) => person !== completionPerson[idx]);
}

// test
solution(["leo", "kiki", "eden"], ["eden", "kiki"]); // "leo"
solution(
    ["marina", "josipa", "nikola", "vinko", "filipa"],
    ["josipa", "filipa", "marina", "nikola"]
); // "vinko"
solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]); // "mislav"
