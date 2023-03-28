//---------Asyncron-------------------
// function process1() {
//     setTimeout(() => {
//         console.log("Process 1");
//     }, 3000);
// }
// function process2() {
//     setTimeout(() => {
//         console.log("Process 2");
//     }, 2000);
// }
// process1();
// process2();
//----------Syncron--------------

// function process1(callback) {
//     setTimeout(() => {
//         console.log("Process 1");
//         callback();
//     }, 3000);
// }
// function process2() {
//     setTimeout(() => {
//         console.log("Process 2");
//     }, 2000);
// }
// process1(process2);

const langs = ["Java", "C++", "C#", "PHP"];
function addLangs(lang, callback) {
    setTimeout(() => {
        langs.push(lang);
        console.log("eklendi");
        callback();
    }, 2000);
}
function getLangs() {
    setTimeout(() => {
        langs.forEach((lang) => {
            console.log(lang);
        });
    }, 1000);
}
addLangs("JavaScript", getLangs);
