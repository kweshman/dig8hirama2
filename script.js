'use strict'
// 1行目に記載している 'use strict' は削除しないでください
// test関数の定義
function test(actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
        console.log("Yay! Test PASSED.");
    } else {
        console.error("Test FAILED. Keep trying!");
        console.group("Result")
        console.log("    actual: ", actual);
        console.log("  expected: ", expected);
        console.trace();
        console.groupEnd;
    }
}


// HTMLから日付のID要素を取得する
let show_day=document.getElementById("show_day");
let show_hour=document.getElementById("show_hour");
let show_minute=document.getElementById("show_minute");
let show_second=document.getElementById("show_second");

//DIG8期生基礎コースの終了日時を定義する
function DigLastDay() {

    let lastDay= new Date();

    lastDay.setMonth(7);//0~11(-1)で1月～12月を定義
    lastDay.setDate(8);
    lastDay.setHours(12);
    lastDay.setMinutes(0);
    lastDay.setSeconds(0);

    return lastDay;

}

//現在時刻から基礎コースの終了日時までの残り時間を計算する(終了日 - 現在時刻)

function rest_time() {

    let last_time = DigLastDay();

    let now = new Date(); //現在時刻の取得
    let restall=last_time.getTime()-now.getTime(); //getTime()残り時間をミリ秒（1000分の1秒）で取得
    let rest_second=Math.floor(restall/1000)%60;
    //全体が何「秒」あるかのデータをさらに60で割って
    //「分」に変換した際に出た余りが残りの「秒」
    let rest_minute=Math.floor(restall/1000/60)%60;
    let rest_hour=Math.floor(restall/1000/60/60)%24;
    let rest_day=Math.floor(restall/1000/60/60/24);
    

    show_day.textContent=String(rest_day).padStart(2,"0");
    show_hour.textContent=String(rest_hour).padStart(2,"0");
    show_minute.textContent=String(rest_minute).padStart(2,"0");
    show_second.textContent=String(rest_second).padStart(2,"0");

    re_calculation();  //re_calculationファンクションを実行する

}

//1秒経過後にもう一度rest_timeファンクションを実行する。

function re_calculation() {

    setTimeout(rest_time,1000); 

}

rest_time();  //rest_timeファンクションを実行する。 ->1秒ごとに画面更新する
