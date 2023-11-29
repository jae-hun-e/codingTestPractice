function solution(coin, cards) {
    const n = cards.length;

    let arr = cards.slice(0, n / 3);

    let save = 0;
    for (let i = 0; i < n / 3; i++) {
        for (let j = i + 1; j < n / 3; j++) {
            if (arr[i] + arr[j] === n + 1) {
                arr = arr.filter((v) => v !== arr[i] && v !== arr[j]);
                save++;
            }
        }
    }

    const need = [];
    arr.forEach((v) => need.push(n + 1 - v));
    let round = 0;

    const junk = [];
    for (let i = n / 3; i < n; i += 2) {
        round++;

        const [a, b] = [cards[i], cards[i + 1]];
        let card = [a, b];

        if (coin >= 2 && a + b === n + 1) {
            coin -= 2;
            save++;
            continue;
        }

        if (coin >= 1 && need.includes(a)) {
            coin--;
            save++;
            card.shift();
        } else if (coin >= 1 && need.includes(b)) {
            coin--;
            save++;
            card.pop();
        }

        junk.push([round, card]);

        // save * 2 안에 쓸모 있음?
        junk.forEach(([round, card]) => {
            for (const a of card) {
                if (
                    coin >= 1 &&
                    cards
                        .slice(round * 2 + 4, round * 2 + 4 + 2 * save + 1)
                        .includes(n + 1 - a)
                ) {
                    // console.log("가능", a);
                    coin--;
                    save++;
                    need.push(n + 1 - a);
                }
            }
        });

        console.log("need, coin, save, i, round", need, coin, save, i, round);

        if (save === 0) break;
        save--;
    }
    if (save > 0) round++;

    return round;
}

console.log(solution(4, [3, 6, 7, 2, 1, 10, 5, 9, 8, 12, 11, 4]));

// console.log(solution(3, [1, 2, 3, 4, 5, 8, 6, 7, 9, 10, 11, 12])); // 2

// console.log(solution(2, [5, 8, 1, 2, 9, 4, 12, 11, 3, 10, 6, 7])); // 4

// console.log(
//     solution(10, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18])
// ); //1
