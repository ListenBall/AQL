// 名前入力
const pl1 = document.getElementById("pl1");
const player1 = document.getElementById("player1");
const pl2 = document.getElementById("pl2");
const player2 = document.getElementById("player2");
const pl3 = document.getElementById("pl3");
const player3 = document.getElementById("player3");
const pl4 = document.getElementById("pl4");
const player4 = document.getElementById("player4");
const pl5 = document.getElementById("pl5");
const player5 = document.getElementById("player5");
const pl6 = document.getElementById("pl6");
const player6 = document.getElementById("player6");
const pl7 = document.getElementById("pl7");
const player7 = document.getElementById("player7");
const pl8 = document.getElementById("pl8");
const player8 = document.getElementById("player8");
const pl9 = document.getElementById("pl9");
const player9 = document.getElementById("player9");
const pl10 = document.getElementById("pl10");
const player10 = document.getElementById("player10");
const pl11 = document.getElementById("pl11");
const player11 = document.getElementById("player11");
const pl12 = document.getElementById("pl12");
const player12 = document.getElementById("player12");
const pl13 = document.getElementById("pl13");
const player13 = document.getElementById("player13");
const pl14 = document.getElementById("pl14");
const player14 = document.getElementById("player14");
const pl15 = document.getElementById("pl15");
const player15 = document.getElementById("player15");
const pl16 = document.getElementById("pl16");
const player16 = document.getElementById("player16");
const pl17 = document.getElementById("pl17");
const player17 = document.getElementById("player17");
const pl18 = document.getElementById("pl18");
const player18 = document.getElementById("player18");
const pl19 = document.getElementById("pl19");
const player19 = document.getElementById("player19");
const pl20 = document.getElementById("pl20");
const player20 = document.getElementById("player20");
const grade1 = document.getElementById("grade1");
const grade2 = document.getElementById("grade2");
const grade3 = document.getElementById("grade3");
const grade4 = document.getElementById("grade4");
const grade5 = document.getElementById("grade5");
const grade6 = document.getElementById("grade6");
const grade7 = document.getElementById("grade7");
const grade8 = document.getElementById("grade8");
const grade9 = document.getElementById("grade9");
const grade10 = document.getElementById("grade10");
const grade11 = document.getElementById("grade11");
const grade12 = document.getElementById("grade12");
const grade13 = document.getElementById("grade13");
const grade14 = document.getElementById("grade14");
const grade15 = document.getElementById("grade15");
const grade16 = document.getElementById("grade16");
const grade17 = document.getElementById("grade17");
const grade18 = document.getElementById("grade18");
const grade19 = document.getElementById("grade19");
const grade20 = document.getElementById("grade20");
const nameinput = [pl1, pl2, pl3, pl4, pl5, pl6, pl7, pl8, pl9, pl10, pl11, pl12, pl13, pl14, pl15, pl16, pl17, pl18, pl19, pl20];
document.addEventListener("keydown", (event) => {
    if (event.key === "@" && event.target.tagName != "TD") {
        let team1name = [player5, player4, player3, player2, player1, player15, player14, player13, player12, player11];
        let team2name = [player6, player7, player8, player9, player10, player16, player17, player18, player19, player20];
        let gr0th = [];
        let gr1st = [];
        let gr2nd = [];
        let gr3rd = [];
        for (let i = 0; i < 20; i++) {
            if ([grade1.value, grade2.value, grade3.value, grade4.value, grade5.value, grade6.value, grade7.value, grade8.value, grade9.value, grade10.value, grade11.value, grade12.value, grade13.value, grade14.value, grade15.value, grade16.value, grade17.value, grade18.value, grade19.value, grade20.value][i] === "0" && nameinput[i].textContent !== "") {
                gr0th.push(i);
            }
        }
        for (let i = 0; i < 20; i++) {
            if ([grade1.value, grade2.value, grade3.value, grade4.value, grade5.value, grade6.value, grade7.value, grade8.value, grade9.value, grade10.value, grade11.value, grade12.value, grade13.value, grade14.value, grade15.value, grade16.value, grade17.value, grade18.value, grade19.value, grade20.value][i] === "1" && nameinput[i].textContent !== "") {
                gr1st.push(i);
            }
        }
        for (let i = 0; i < 20; i++) {
            if ([grade1.value, grade2.value, grade3.value, grade4.value, grade5.value, grade6.value, grade7.value, grade8.value, grade9.value, grade10.value, grade11.value, grade12.value, grade13.value, grade14.value, grade15.value, grade16.value, grade17.value, grade18.value, grade19.value, grade20.value][i] === "2" && nameinput[i].textContent !== "") {
                gr2nd.push(i);
            }
        }
        for (let i = 0; i < 20; i++) {
            if ([grade1.value, grade2.value, grade3.value, grade4.value, grade5.value, grade6.value, grade7.value, grade8.value, grade9.value, grade10.value, grade11.value, grade12.value, grade13.value, grade14.value, grade15.value, grade16.value, grade17.value, grade18.value, grade19.value, grade20.value][i] === "3" && nameinput[i].textContent !== "") {
                gr3rd.push(i);
            }
        }
        for (let i = 0; i < 10; i++) {
            team1name[i].textContent = "";
        }
        for (let i = 0; i < 10; i++) {
            team2name[i].textContent = "";
        }
        let loop = gr3rd.length;
        for (let i = 0; i < loop; i++) {
            let rnd = Math.floor(Math.random() * gr3rd.length);
            if (team1name.length > team2name.length) {
                team1name[0].textContent = nameinput[gr3rd[rnd]].textContent;
                team1name.shift();
            } else if (team1name.length < team2name.length) {
                team2name[0].textContent = nameinput[gr3rd[rnd]].textContent;
                team2name.shift();
            } else if (Math.random() < 0.5) {
                team1name[0].textContent = nameinput[gr3rd[rnd]].textContent;
                team1name.shift();
            } else {
                team2name[0].textContent = nameinput[gr3rd[rnd]].textContent;
                team2name.shift();
            }
            gr3rd.splice(rnd,1);
        }
        loop = gr2nd.length;
        for (let i = 0; i < loop; i++) {
            let rnd = Math.floor(Math.random() * gr2nd.length);
            if (team1name.length > team2name.length) {
                team1name[0].textContent = nameinput[gr2nd[rnd]].textContent;
                team1name.shift();
            } else if (team1name.length < team2name.length) {
                team2name[0].textContent = nameinput[gr2nd[rnd]].textContent;
                team2name.shift();
            } else if (Math.random() < 0.5) {
                team1name[0].textContent = nameinput[gr2nd[rnd]].textContent;
                team1name.shift();
            } else {
                team2name[0].textContent = nameinput[gr2nd[rnd]].textContent;
                team2name.shift();
            }
            gr2nd.splice(rnd,1);
        }
        loop = gr1st.length;
        for (let i = 0; i < loop; i++) {
            let rnd = Math.floor(Math.random() * gr1st.length);
            if (team1name.length > team2name.length) {
                team1name[0].textContent = nameinput[gr1st[rnd]].textContent;
                team1name.shift();
            } else if (team1name.length < team2name.length) {
                team2name[0].textContent = nameinput[gr1st[rnd]].textContent;
                team2name.shift();
            } else if (Math.random() < 0.5) {
                team1name[0].textContent = nameinput[gr1st[rnd]].textContent;
                team1name.shift();
            } else {
                team2name[0].textContent = nameinput[gr1st[rnd]].textContent;
                team2name.shift();
            }
            gr1st.splice(rnd,1);
        }
        loop = gr0th.length;
        for (let i = 0; i < loop; i++) {
            let rnd = Math.floor(Math.random() * gr0th.length);
            if (team1name.length > team2name.length) {
                team1name[0].textContent = nameinput[gr0th[rnd]].textContent;
                team1name.shift();
            } else if (team1name.length < team2name.length) {
                team2name[0].textContent = nameinput[gr0th[rnd]].textContent;
                team2name.shift();
            } else if (Math.random() < 0.5) {
                team1name[0].textContent = nameinput[gr0th[rnd]].textContent;
                team1name.shift();
            } else {
                team2name[0].textContent = nameinput[gr0th[rnd]].textContent;
                team2name.shift();
            }
            gr0th.splice(rnd,1);
        }
    }
});
// 変数宣言
let pt1 = 1;
document.getElementById("point1").textContent = pt1;
let pt2 = 1;
document.getElementById("point2").textContent = pt2;
let pt3 = 1;
document.getElementById("point3").textContent = pt3;
let pt4 = 1;
document.getElementById("point4").textContent = pt4;
let pt5 = 1;
document.getElementById("point5").textContent = pt5;
let pt6 = 1;
document.getElementById("point6").textContent = pt6;
let pt7 = 1;
document.getElementById("point7").textContent = pt7;
let pt8 = 1;
document.getElementById("point8").textContent = pt8;
let pt9 = 1;
document.getElementById("point9").textContent = pt9;
let pt10 = 1;
document.getElementById("point10").textContent = pt10;
let ms1 = "";
document.getElementById("miss1").textContent = ms1;
let ms2 = "";
document.getElementById("miss2").textContent = ms2;
let ms3 = "";
document.getElementById("miss3").textContent = ms3;
let ms4 = "";
document.getElementById("miss4").textContent = ms4;
let ms5 = "";
document.getElementById("miss5").textContent = ms5;
let ms6 = "";
document.getElementById("miss6").textContent = ms6;
let ms7 = "";
document.getElementById("miss7").textContent = ms7;
let ms8 = "";
document.getElementById("miss8").textContent = ms8;
let ms9 = "";
document.getElementById("miss9").textContent = ms9;
let ms10 = "";
document.getElementById("miss10").textContent = ms10;
let tm1p = 1;
document.getElementById("team1point").textContent = tm1p;
let tm2p = 1;
document.getElementById("team2point").textContent = tm2p;
let pushdowned = 0;
let resetcounter = 0;
let history = [];
let listnum = 0;
let templist = [];
const qwert = ["q", "w", "e", "r", "t"];
const yuiop = ["y", "u", "i", "o", "p"];
let limitquestion = 40;
// 点数計算
document.addEventListener("keydown", (event) => {
    if (pushdowned == 0 && event.target.tagName != "TD") {
        if (limitquestion != 0 && tm1p < 200 && tm2p < 200) {
            if (!((["1", "q"].includes(event.key) && ms1 === "LOCK") || (["2", "w"].includes(event.key) && ms2 === "LOCK") || (["3", "e"].includes(event.key) && ms3 === "LOCK") || (["4", "r"].includes(event.key) && ms4 === "LOCK") || (["5", "t"].includes(event.key) && ms5 === "LOCK") || (["6", "y"].includes(event.key) && ms6 === "LOCK") || (["7", "u"].includes(event.key) && ms7 === "LOCK") || (["8", "i"].includes(event.key) && ms8 === "LOCK") || (["9", "o"].includes(event.key) && ms9 === "LOCK") || (["0", "p"].includes(event.key) && ms10 === "LOCK"))) {
                // 点数加算
                if (event.key === "1") {
                    limitquestion = --limitquestion;
                    pt1 = ++pt1;
                    history.push("1");
                }
                if (event.key === "2") {
                    limitquestion = --limitquestion;
                    pt2 = ++pt2;
                    history.push("2");
                }
                if (event.key === "3") {
                    limitquestion = --limitquestion;
                    pt3 = ++pt3;
                    history.push("3");
                }
                if (event.key === "4") {
                    limitquestion = --limitquestion;
                    pt4 = ++pt4;
                    history.push("4");
                }
                if (event.key === "5") {
                    limitquestion = --limitquestion;
                    pt5 = ++pt5;
                    history.push("5");
                }
                if (event.key === "6") {
                    limitquestion = --limitquestion;
                    pt6 = ++pt6;
                    history.push("6");
                }
                if (event.key === "7") {
                    limitquestion = --limitquestion;
                    pt7 = ++pt7;
                    history.push("7");
                }
                if (event.key === "8") {
                    limitquestion = --limitquestion;
                    pt8 = ++pt8;
                    history.push("8");
                }
                if (event.key === "9") {
                    limitquestion = --limitquestion;
                    pt9 = ++pt9;
                    history.push("9");
                }
                if (event.key === "0") {
                    limitquestion = --limitquestion;
                    pt10 = ++pt10;
                    history.push("0");
                }
                //ミス処理
                if (qwert.includes(event.key)) {
                    limitquestion = --limitquestion;
                    if (ms6 === "LOCK") {
                        ms6 = "✕";
                    }
                    if (ms7 === "LOCK") {
                        ms7 = "✕";
                    }
                    if (ms8 === "LOCK") {
                        ms8 = "✕";
                    }
                    if (ms9 === "LOCK") {
                        ms9 = "✕";
                    }
                    if (ms10 === "LOCK") {
                        ms10 = "✕";
                    }
                    if (event.key === "q") {
                        pt1 = 1;
                        history.push("q");
                        if (ms1 === "") {
                            ms1 = "✕";
                        } else {
                            ms1 = "LOCK";
                        }
                    }else if (event.key === "w") {
                        pt2 = 1;
                        history.push("w");
                        if (ms2 === "") {
                            ms2 = "✕";
                        } else {
                            ms2 = "LOCK";
                        }
                    }else if (event.key === "e") {
                        pt3 = 1;
                        history.push("e");
                        if (ms3 === "") {
                            ms3 = "✕";
                        } else {
                            ms3 = "LOCK";
                        }
                    }else if (event.key === "r") {
                        pt4 = 1;
                        history.push("r");
                        if (ms4 === "") {
                            ms4 = "✕";
                        } else {
                            ms4 = "LOCK";
                        }
                    }else if (event.key === "t") {
                        pt5 = 1;
                        history.push("t");
                        if (ms5 === "") {
                            ms5 = "✕";
                        } else {
                            ms5 = "LOCK";
                        }
                    }
                }
                if (yuiop.includes(event.key)) {
                    limitquestion = --limitquestion;
                    if (ms1 === "LOCK") {
                        ms1 = "✕";
                    }
                    if (ms2 === "LOCK") {
                        ms2 = "✕";
                    }
                    if (ms3 === "LOCK") {
                        ms3 = "✕";
                    }
                    if (ms4 === "LOCK") {
                        ms4 = "✕";
                    }
                    if (ms5 === "LOCK") {
                        ms5 = "✕";
                    }
                    if (event.key === "y") {
                        pt6 = 1;
                        history.push("y");
                        if (ms6 === "") {
                           ms6 = "✕";
                        } else {
                            ms6 = "LOCK";
                        }
                    }else if (event.key === "u") {
                        pt7 = 1;
                        history.push("u");
                        if (ms7 === "") {
                            ms7 = "✕";
                        } else {
                            ms7 = "LOCK";
                        }
                    }else if (event.key === "i") {
                        pt8 = 1;
                        history.push("i");
                        if (ms8 === "") {
                            ms8 = "✕";
                        } else {
                            ms8 = "LOCK";
                        }
                    }else if (event.key === "o") {
                        pt9 = 1;
                        history.push("o");
                        if (ms9 === "") {
                            ms9 = "✕";
                        } else {
                            ms9 = "LOCK";
                        }
                    }else if (event.key === "p") {
                        pt10 = 1;
                        history.push("p");
                        if (ms10 === "") {
                            ms10 = "✕";
                        } else {
                            ms10 = "LOCK";
                        }
                    }
                }
            }
            if (event.key === "Enter") {
                limitquestion = --limitquestion;
                history.push("Enter");
            }
        }
        //undo処理
        if (event.key === "-") {
            limitquestion = ++limitquestion;
            if (history.at(-1) === "1") {
                pt1 = --pt1;
                history.pop();
            } else if (history.at(-1) === "2") {
                pt2 = --pt2;
                history.pop();
            } else if (history.at(-1) === "3") {
                pt3 = --pt3;
                history.pop();
            } else if (history.at(-1) === "4") {
                pt4 = --pt4;
                history.pop();
            } else if (history.at(-1) === "5") {
                pt5 = --pt5;
                history.pop();
            } else if (history.at(-1) === "6") {
                pt6 = --pt6;
                history.pop();
            } else if (history.at(-1) === "7") {
                pt7 = --pt7;
                history.pop();
            } else if (history.at(-1) === "8") {
                pt8 = --pt8;
                history.pop();
            } else if (history.at(-1) === "9") {
                pt9 = --pt9;
                history.pop();
            } else if (history.at(-1) === "0") {
                pt10 = --pt10;
                history.pop();
            } else if (qwert.includes(history.at(-1))) {
                if (history.at(-1) === "q") {
                    history.pop();
                    listnum = history.lastIndexOf("q");
                    templist = history.slice(++listnum);
                    pt1 = templist.filter(element => element === "1").length + 1;
                    if (listnum == 0) {
                        ms1 = "";
                    } else {
                        ms1 = "✕";
                    }
                } else if (history.at(-1) === "w") {
                    history.pop();
                    listnum = history.lastIndexOf("w");
                    templist = history.slice(++listnum);
                    pt2 = templist.filter(element => element === "2").length + 1;
                    if (listnum == 0) {
                        ms2 = "";
                    } else {
                        ms2 = "✕";
                    }
                } else if (history.at(-1) === "e") {
                    history.pop();
                    listnum = history.lastIndexOf("e");
                    templist = history.slice(++listnum);
                    pt3 = templist.filter(element => element === "3").length + 1;
                    if (listnum == 0) {
                        ms3 = "";
                    } else {
                        ms3 = "✕";
                    }
                } else if (history.at(-1) === "r") {
                    history.pop();
                    listnum = history.lastIndexOf("r");
                    templist = history.slice(++listnum);
                    pt4 = templist.filter(element => element === "4").length + 1;
                    if (listnum == 0) {
                        ms4 = "";
                    } else {
                        ms4 = "✕";
                    }
                } else {
                    history.pop();
                    listnum = history.lastIndexOf("t");
                    templist = history.slice(++listnum);
                    pt5 = templist.filter(element => element === "5").length + 1;
                    if (listnum == 0) {
                        ms5 = "";
                    } else {
                        ms5 = "✕";
                    }
                }
                if (yuiop.some(element => templist.includes(element))) {
                    if (templist.includes("y")) {
                        if (history.filter(element => element === "y").length >= 2 && !qwert.some(element => templist.slice(templist.lastIndexOf("y") + 1).includes(element))) {
                            ms6 = "LOCK";
                        } else {
                            ms6 = "✕";
                        }
                    }
                    if (templist.includes("u")) {
                        if (history.filter(element => element === "u").length >= 2 && !qwert.some(element => templist.slice(templist.lastIndexOf("u") + 1).includes(element))) {
                            ms7 = "LOCK";
                        } else {
                            ms7 = "✕";
                        }
                    }
                    if (templist.includes("i")) {
                        if (history.filter(element => element === "i").length >= 2 && !qwert.some(element => templist.slice(templist.lastIndexOf("i") + 1).includes(element))) {
                            ms8 = "LOCK";
                        } else {
                            ms8 = "✕";
                        }
                    }
                    if (templist.includes("o")) {
                        if (history.filter(element => element === "o").length >= 2 && !qwert.some(element => templist.slice(templist.lastIndexOf("o") + 1).includes(element))) {
                            ms9 = "LOCK";
                        } else {
                            ms9 = "✕";
                        }
                    }
                    if (templist.includes("p")) {
                        if (history.filter(element => element === "p").length >= 2 && !qwert.some(element => templist.slice(templist.lastIndexOf("p") + 1).includes(element))) {
                            ms10 = "LOCK";
                        } else {
                            ms10 = "✕";
                        }
                    }
                }
            } else if (yuiop.includes(history.at(-1))) {
                if (history.at(-1) === "y") {
                    history.pop();
                    listnum = history.lastIndexOf("y");
                    templist = history.slice(++listnum);
                    pt6 = templist.filter(element => element === "6").length + 1;
                    if (listnum == 0) {
                        ms6 = "";
                    } else {
                        ms6 = "✕";
                    }
                } else if (history.at(-1) === "u") {
                    history.pop();
                    listnum = history.lastIndexOf("u");
                    templist = history.slice(++listnum);
                    pt7 = templist.filter(element => element === "7").length + 1;
                    if (listnum == 0) {
                        ms7 = "";
                    } else {
                    ms7 = "✕";
                    }
                } else if (history.at(-1) === "i") {
                    history.pop();
                    listnum = history.lastIndexOf("i");
                    templist = history.slice(++listnum);
                    pt8 = templist.filter(element => element === "8").length + 1;
                    if (listnum == 0) {
                        ms8 = "";
                    } else {
                        ms8 = "✕";
                    }
                } else if (history.at(-1) === "o") {
                    history.pop();
                    listnum = history.lastIndexOf("o");
                    templist = history.slice(++listnum);
                    pt9 = templist.filter(element => element === "9").length + 1;
                    if (listnum == 0) {
                        ms9 = "";
                    } else {
                        ms9 = "✕";
                    }
                } else if (history.at(-1) === "p") {
                    history.pop();
                    listnum = history.lastIndexOf("p");
                    templist = history.slice(++listnum);
                    pt10 = templist.filter(element => element === "0").length + 1;
                    if (listnum == 0) {
                        ms10 = "";
                    } else {
                        ms10 = "✕";
                    }
                }
                if (qwert.some(element => templist.includes(element))) {
                    if (templist.includes("q")) {
                        if (history.filter(element => element === "q").length >= 2 && !yuiop.some(element => templist.slice(templist.lastIndexOf("q") + 1).includes(element))) {
                            ms1 = "LOCK";
                        } else {
                            ms1 = "✕";
                        }
                    }
                    if (templist.includes("w")) {
                        if (history.filter(element => element === "w").length >= 2 && !yuiop.some(element => templist.slice(templist.lastIndexOf("w") + 1).includes(element))) {
                            ms2 = "LOCK";
                        } else {
                            ms2 = "✕";
                        }
                    }
                    if (templist.includes("e")) {
                        if (history.filter(element => element === "e").length >= 2 && !yuiop.some(element => templist.slice(templist.lastIndexOf("e") + 1).includes(element))) {
                            ms3 = "LOCK";
                        } else {
                            ms3 = "✕";
                        }
                    }
                    if (templist.includes("r")) {
                        if (history.filter(element => element === "r").length >= 2 && !yuiop.some(element => templist.slice(templist.lastIndexOf("r") + 1).includes(element))) {
                            ms4 = "LOCK";
                        } else {
                            ms4 = "✕";
                        }
                    }
                    if (templist.includes("t")) {
                        if (history.filter(element => element === "t").length >= 2 && !yuiop.some(element => templist.slice(templist.lastIndexOf("t") + 1).includes(element))) {
                            ms5 = "LOCK";
                        } else {
                            ms5 = "✕";
                        }
                    }
                }
            } else if (history.at(-1) === "Enter") {
                history.pop();
            } else {
                limitquestion = --limitquestion;
            }
        }
        //リセット
        if (event.key === " ") {
            if (resetcounter == 2) {
                pt1 = 1;
                pt2 = 1;
                pt3 = 1;
                pt4 = 1;
                pt5 = 1;
                pt6 = 1;
                pt7 = 1;
                pt8 = 1;
                pt9 = 1;
                pt10 = 1;
                ms1 = "";
                ms2 = "";
                ms3 = "";
                ms4 = "";
                ms5 = "";
                ms6 = "";
                ms7 = "";
                ms8 = "";
                ms9 = "";
                ms10 = "";
                resetcounter = 0;
                history = [];
                limitquestion = 40;
            } else {
                resetcounter = ++resetcounter;
            }
        } else {
            resetcounter = 0;
        }
        tm1p = pt1 * pt2 * pt3 * pt4 * pt5;
        tm2p = pt6 * pt7 * pt8 * pt9 * pt10;
        // 表示更新
        document.getElementById("point1").textContent = pt1;
        document.getElementById("point2").textContent = pt2;
        document.getElementById("point3").textContent = pt3;
        document.getElementById("point4").textContent = pt4;
        document.getElementById("point5").textContent = pt5;
        document.getElementById("point6").textContent = pt6;
        document.getElementById("point7").textContent = pt7;
        document.getElementById("point8").textContent = pt8;
        document.getElementById("point9").textContent = pt9;
        document.getElementById("point10").textContent = pt10;
        document.getElementById("miss1").textContent = ms1;
        document.getElementById("miss2").textContent = ms2;
        document.getElementById("miss3").textContent = ms3;
        document.getElementById("miss4").textContent = ms4;
        document.getElementById("miss5").textContent = ms5;
        document.getElementById("miss6").textContent = ms6;
        document.getElementById("miss7").textContent = ms7;
        document.getElementById("miss8").textContent = ms8;
        document.getElementById("miss9").textContent = ms9;
        document.getElementById("miss10").textContent = ms10;
        pushdowned = 1;
        if (limitquestion == 0) {
            if (tm1p >= tm2p) {
                document.querySelectorAll(".win1, .reach1, .reach2, .reach3, .reach4, .reach5").forEach(element => {
                    element.style.backgroundColor = "#0f0";
                });
            }
            if (tm2p >= tm1p) {
                document.querySelectorAll(".win2, .reach6, .reach7, .reach8, .reach9, .reach10").forEach(element => {
                    element.style.backgroundColor = "#0f0";
                });
            }
        } else {
            document.querySelectorAll(".win1, .reach1, .reach2, .reach3, .reach4, .reach5").forEach(element => {
                element.style.backgroundColor = "#fff";
            });
            if (ms1 === "LOCK") {
                document.getElementById("miss1").style.backgroundColor = "#7f7f7f";
            } else if ((pt1 + 1) * pt2 * pt3 * pt4 * pt5 >= 200 && ms1 !== "LOCK") {
                document.querySelectorAll(".reach1").forEach(element => {
                    element.style.backgroundColor = "#ff0";
                }); 
            }
            if (ms2 === "LOCK") {
            document.getElementById("miss2").style.backgroundColor = "#7f7f7f";
            } else if (pt1 * (pt2 + 1) * pt3 * pt4 * pt5 >= 200 && ms2 !== "LOCK") {
                document.querySelectorAll(".reach2").forEach(element => {
                    element.style.backgroundColor = "#ff0";
                }); 
            }
            if (ms3 === "LOCK") {
                document.getElementById("miss3").style.backgroundColor = "#7f7f7f";
            } else if (pt1 * pt2 * (pt3 + 1) * pt4 * pt5 >= 200 && ms3 !== "LOCK") {
                document.querySelectorAll(".reach3").forEach(element => {
                    element.style.backgroundColor = "#ff0";
                }); 
            }
            if (ms4 === "LOCK") {
                document.getElementById("miss4").style.backgroundColor = "#7f7f7f";
            } else if (pt1 * pt2 * pt3 * (pt4 + 1) * pt5 >= 200 && ms4 !== "LOCK") {
                document.querySelectorAll(".reach4").forEach(element => {
                    element.style.backgroundColor = "#ff0";
                }); 
            }
            if (ms5 === "LOCK") {
                document.getElementById("miss5").style.backgroundColor = "#7f7f7f";
            } else if (pt1 * pt2 * pt3 * pt4 * (pt5 + 1) >= 200 && ms5 !== "LOCK") {
                document.querySelectorAll(".reach5").forEach(element => {
                    element.style.backgroundColor = "#ff0";
                }); 
            }
            document.querySelectorAll(".win2, .reach6, .reach7, .reach8, .reach9, .reach10").forEach(element => {
                element.style.backgroundColor = "#fff";
            });
            if (ms6 === "LOCK") {
                document.getElementById("miss6").style.backgroundColor = "#7f7f7f";
            } else if ((pt6 + 1) * pt7 * pt8 * pt9 * pt10 >= 200 && ms6 !== "LOCK") {
                document.querySelectorAll(".reach6").forEach(element => {
                    element.style.backgroundColor = "#ff0";
                }); 
            }
            if (ms7 === "LOCK") {
                document.getElementById("miss7").style.backgroundColor = "#7f7f7f";
            } else if (pt6 * (pt7 + 1) * pt8 * pt9 * pt10 >= 200 && ms7 !== "LOCK") {
                document.querySelectorAll(".reach7").forEach(element => {
                    element.style.backgroundColor = "#ff0";
                }); 
            }
            if (ms8 === "LOCK") {
                document.getElementById("miss8").style.backgroundColor = "#7f7f7f";
            } else if (pt6 * pt7 * (pt8 + 1) * pt9 * pt10 >= 200 && ms8 !== "LOCK") {
                document.querySelectorAll(".reach8").forEach(element => {
                    element.style.backgroundColor = "#ff0";
                }); 
            }
            if (ms9 === "LOCK") {
                document.getElementById("miss9").style.backgroundColor = "#7f7f7f";
            } else if (pt6 * pt7 * pt8 * (pt9 + 1) * pt10 >= 200 && ms9 !== "LOCK") {
                document.querySelectorAll(".reach9").forEach(element => {
                    element.style.backgroundColor = "#ff0";
                }); 
            }
            if (ms10 === "LOCK") {
                document.getElementById("miss10").style.backgroundColor = "#7f7f7f";
            } else if (pt6 * pt7 * pt8 * pt9 * (pt10 + 1) >= 200 && ms10 !== "LOCK") {
                document.querySelectorAll(".reach10").forEach(element => {
                    element.style.backgroundColor = "#ff0";
                }); 
            }
        }
        if (tm1p >= 200 || (ms6 == "LOCK" && ms7 == "LOCK" && ms8 == "LOCK" && ms9 == "LOCK" && ms10 == "LOCK")) {
            tm1p = 200
                document.querySelectorAll(".win1, .reach1, .reach2, .reach3, .reach4, .reach5").forEach(element => {
                element.style.backgroundColor = "#0f0";
            });
        }
        document.getElementById("team1point").textContent = tm1p;
        if (tm2p >= 200 || (ms1 == "LOCK" && ms2 == "LOCK" && ms3 == "LOCK" && ms4 == "LOCK" && ms5 == "LOCK")) {
            tm2p = 200
            document.querySelectorAll(".win2, .reach6, .reach7, .reach8, .reach9, .reach10").forEach(element => {
                element.style.backgroundColor = "#0f0";
            });
        }
        document.getElementById("team2point").textContent = tm2p;
    }
});
document.addEventListener("keyup", (event) => {
    pushdowned = 0;
});
