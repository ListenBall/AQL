// 名前入力
document.addEventListener("keydown", (event) => {
    if (event.key === "@" && event.target.tagName != "TD") {
        let playernums = [[4, 3, 2, 1, 0, 10, 11, 12, 13, 14], [5, 6, 7, 8, 9, 19, 18, 17, 16, 15]];
        let grades = [[], [], [], []];
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 20; j++) {
                if (document.getElementById("grade" + j).value == i && document.getElementById("pl" + j).textContent !== "") {
                    grades[i].push(j);
                }
            }
        }
        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 10; j++) {
                document.getElementById("player" + playernums[i][j]).textContent = "";
            }
        }
        for (let i = 3; i > -1; i--) {
            let loop = grades[i].length;
            for (let j = 0; j < loop; j++) {
                let rnd = Math.floor(Math.random() * grades[i].length);
                document.getElementById("player" + playernums[Number(playernums[0].length < playernums[1].length || (playernums[0].length == playernums[1].length && Math.random() < 0.5))].shift).textContent = document.getElementById("pl" + grades[i][rnd]).textContent;
                grades[i].splice(rnd,1);
            }
        }
    }
});
//初期表示
let keys = [["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],[["q", "w", "e", "r", "t"],["y", "u", "i", "o", "p"]]];
let resetlimit = 3;
for (let i = 0; i < 10; i++) {
    document.getElementById("point" + i).textContent = 1;
}
for (let i = 0; i < 2; i++) {
    document.getElementById("team" + i + "point").textContent = 1;
}
//点数計算
let history = [];
let pushdowned = 0;
document.addEventListener("keydown", (event) => {
    if (pushdowned === 0 && event.target.tagName !== "TD") {
        if (![document.getElementById("team0point").textContent, document.getElementById("team1point").textContent].includes("200") && history.length != 40) {
            //正答
            for (let i = 0; i < 10; i++) {
                if (event.key === keys[0][i] && document.getElementById("miss" + i).textContent !== "LOCK") {
                    history.push(event.key);
                }
            }
            //誤答
            for (let i = 0; i < 2; i++) {
                for (let j = 0; j < 5; j++) {
                    if (event.key === keys[1][i][j] && document.getElementById("miss" + (i * 5 + j)).textContent !== "LOCK") {
                        history.push(event.key);
                    }
                }
            }
            if (event.key === "Enter") {
                history.push("Enter");
            }
        }
        if (event.key === "-") {
            history.pop();
        }
        if (event.key === " ") {
            if(--resetlimit === 0) {
                history = [];
            }
        } else {
            resetlimit = 3;
        }
        //表示リセット
        for (let i = 0; i < 10; i++) {
            document.getElementById("point" + i).textContent = 1;
        }
        for (let i = 0; i < 10; i++) {
            document.getElementById("miss" + i).textContent = "";
        }
        for (let i = 0; i < 2; i++) {
            document.querySelectorAll(".win" + i).forEach(element => {
                element.style.backgroundColor = "#fff";
            });
        }
        for (let i = 0; i < 10; i++) {
            document.querySelectorAll(".riichi" + i).forEach(element => {
                element.style.backgroundColor = "#fff";
            });
            document.getElementById("miss" + i).style.backgroundColor = "#fff";
        }
        //表示更新
        for (let i = 0; i < history.length; i++) {
            for (let j = 0; j < 10; j++) {
                if (history[i] === keys[0][j]) {
                    ++document.getElementById("point" + (Number(history[i]) + 9) % 10).textContent;
                }
            }
            for (let j = 0; j < 2; j++) {
                for (let k = 0; k < 5; k++) {
                    if (history[i] === keys[1][j][k]) {
                        document.getElementById("point" + (5 * j + k)).textContent = 1;
                        if (document.getElementById("miss" + (5 * j + k)).textContent === "") {
                            document.getElementById("miss" + (5 * j + k)).textContent = "✕";
                        } else {
                            document.getElementById("miss" + (5 * j + k)).textContent = "LOCK";
                        }
                        for (let l = 0; l < 5; l++) {
                            if (document.getElementById("miss" + (5 - 5 * j + l)).textContent === "LOCK") {
                                document.getElementById("miss" + (5 - 5 * j + l)).textContent = "✕";
                            }
                        }
                    }
                }
            }
        }
        for (let i = 0; i < 2; i++) {
            document.getElementById("team" + i + "point").textContent = 1;
            for (let j = 0; j < 5; j++) {
                document.getElementById("team" + i + "point").textContent = document.getElementById("team" + i + "point").textContent * document.getElementById("point" + (i * 5 + j)).textContent;
            }
        }
        for (let i = 0; i < 2; i++) {
            if (document.getElementById("team" + i + "point").textContent > 200 || [document.getElementById("miss" + (5 - i * 5)).textContent, document.getElementById("miss" + (6 - i * 5)).textContent, document.getElementById("miss" + (7 - i * 5)).textContent, document.getElementById("miss" + (8 - i * 5)).textContent, document.getElementById("miss" + (9 - i * 5)).textContent].every(currentValue => currentValue == "LOCK")) {
                document.getElementById("team" + i + "point").textContent = 200;
            }
        }
        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 5; j++) {
                let productother = 1;
                for (let k = j + 1; k < j + 5; k++) {
                    productother = productother * (document.getElementById("point" + (i * 5 + k % 5)).textContent);
                }
                if (Number(document.getElementById("team" + i + "point").textContent) + productother >= 200 && document.getElementById("miss" + (i * 5 + j)).textContent != "LOCK") {
                    document.querySelectorAll(".riichi" + (5 * i + j)).forEach(element => {
                        element.style.backgroundColor = "#0f0";
                    });
                }
            }
        }
        for (let i = 0; i < 10; i++) {
            if (document.getElementById("miss" + i).textContent == "LOCK") {
                document.getElementById("miss" + i).style.backgroundColor = "#7f7f7f";
            }
        }
        for (let i = 0; i < 2; i++) {
            if (document.getElementById("team" + i + "point").textContent == 200 || (history.length == 40 && document.getElementById("team" + i + "point").textContent >= document.getElementById("team" + (1 - i) + "point").textContent)) {
                document.querySelectorAll(".win" + i).forEach(element => {
                    element.style.backgroundColor = "#ff0";
                });
                for (let j = 0; j < 5; j++) {
                    document.querySelectorAll(".riichi" + (5 * i + j)).forEach(element => {
                        element.style.backgroundColor = "#ff0";
                    });
                }
            }
        }
        pushdowned = 1;
    }
});
document.addEventListener("keyup", (event) => {
    pushdowned = 0;
});
