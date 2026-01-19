// const paragraf = document.getElementById("hitungnow")
// const hitung = document.getElementById("hitungnow")
// const inputbtn = document.getElementById("inputbtn")
// hitung.addEventListener('click', function () {
//     paragraf.classList.add("hide")
//     inputbtn.classList.add("show")
// })

// function hitung1(x,n,alpha) {
//     var p_topi = x / n
//     var q_topi = 1 - p_topi
//     var ztabel = qnorm(1 - alpha / 2)
//     var se = sqrt((p_topi * q_topi) / n)
//     var me = ztabel * se
//     var cl_bawah = p_topi - me
//     var cl_atas = p_topi + me
// }

const jStat = require('jstat');
const zScore = jStat.normal.inv(0.95, 0, 1);
console.log(zScore)