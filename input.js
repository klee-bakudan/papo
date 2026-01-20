const paragraf = document.getElementById("hitungnow")
const hitung = document.getElementById("hitungnow")
const inputbtn = document.getElementById("inputbtn")

const allform = document.querySelectorAll('form')
const firstform = allform[0]
const secondform = allform[1]

hitung.addEventListener('click', function () {
    paragraf.classList.add("hide")
    inputbtn.classList.add("show")
})

function tampilhasil1() {
    const hasiln = document.getElementById("N")
    hasiln.innerHTML = localStorage.getItem("N")
    const hasilx = document.getElementById("X")
    hasilx.innerHTML = localStorage.getItem("X")
    const hasilp_topi = document.getElementById("p_topi")
    hasilp_topi.innerHTML = localStorage.getItem("p_topi")
    const hasilcl_bawah = document.getElementById("cl_bawah")
    hasilcl_bawah.innerHTML = localStorage.getItem("cl_bawah")
    const hasilcl_atas = document.getElementById("cl_atas")
    hasilcl_atas.innerHTML = localStorage.getItem("cl_atas")
    event.preventDefault()
}

function hitung1(x, n, alpha) {
    var p_topi = x / n
    localStorage.setItem("p_topi", p_topi)
    var q_topi = 1 - p_topi
    var zScore = jStat.normal.inv((1 - alpha / 2), 0, 1);
    var se = Math.sqrt((p_topi * q_topi) / n)
    var me = zScore * se
    var cl_bawah = p_topi - me
    localStorage.setItem("cl_bawah", cl_bawah)
    var cl_atas = p_topi + me
    localStorage.setItem("cl_atas", cl_atas)
    localStorage.setItem("N", n)
    localStorage.setItem("X", x)
    localStorage.setItem("alpha", alpha)
    tampilhasil1()
}

function input1() {
    var n = localStorage.getItem("N");
    var x = localStorage.getItem("X");
    document.getElementById("hitungn").innerHTML = n;
    document.getElementById("hitungx").innerHTML = x;
    document.getElementById("hitunga").innerHTML = alpha;
    event.preventDefault()
}


firstform.addEventListener('submit', function (event) {
    const inputx = document.getElementById('hitungn')
    const inputn = document.getElementById('hitungx')
    const inputa = document.getElementById('hitunga')
    const hitungn = inputn.value
    const hitungx = inputx.value
    const hitunga = inputa.value
    if (hitungn == '') {
        alert("nilai n tidak boleh kosong")
        event.preventDefault()
    }
    if (hitungx == '') {
        alert("nilai x tidak boleh kosong")
        event.preventDefault()
    }
    if (hitunga == '') {
        alert("nilai alpha tidak boleh kosong")
        event.preventDefault()
    }
    if (hitungn < hitungx) {
        alert("x tidak boleh lebih besar dari n")
        event.preventDefault()
    }


    hitung1(hitungx, hitungn, hitunga)
})


// hitung 2 pop
function tampilhasil2() {
    const hasiln1 = document.getElementById("N1")
    hasiln1.innerHTML = localStorage.getItem("N1")
    const hasilx1 = document.getElementById("X1")
    hasilx1.innerHTML = localStorage.getItem("X1")
    const hasiln2 = document.getElementById("N2")
    hasiln2.innerHTML = localStorage.getItem("N2")
    const hasilx2 = document.getElementById("X2")
    hasilx2.innerHTML = localStorage.getItem("X2")
    const hasilp1topi = document.getElementById("p1topi")
    hasilp1topi.innerHTML = localStorage.getItem("1p_topi")
    const hasilp2topi = document.getElementById("p2topi")
    hasilp2topi.innerHTML = localStorage.getItem("p2_topi")
    const hasilcl2bawah = document.getElementById("cl2_bawah")
    hasilcl2bawah.innerHTML = localStorage.getItem("cl_bawah")
    const hasil2cl2atas = document.getElementById("cl2_atas")
    hasil2cl2atas.innerHTML = localStorage.getItem("cl_atas")
    event.preventDefault()
}

function hitung2(x1, n1, x2, n2, alpha) {
    var p1_topi = x1 / n1
    localStorage.setItem("1p_topi", p1_topi)
    var p2_topi = x2 / n2
    localStorage.setItem("p2_topi", p2_topi)
    var q1 = 1 - p1_topi
    var q2 = 1 - p2_topi
    var zScore = jStat.normal.inv((1 - alpha / 2), 0, 1);
    var se = Math.sqrt((p1_topi * q1) / n1 + (p2_topi * q2) / n2)
    var me = zScore * se
    var diff = p1_topi - p2_topi
    var cl_bawah = diff - me
    localStorage.setItem("cl_bawah", cl_bawah)
    var cl_atas = diff + me
    localStorage.setItem("cl_atas", cl_atas)
    localStorage.setItem("N1", n1)
    localStorage.setItem("X1", x1)
    localStorage.setItem("N2", n2)
    localStorage.setItem("X2", x2)
    localStorage.setItem("alpha", alpha)
    tampilhasil2()
}

function input2() {
    var n1 = localStorage.getItem("N1");
    var x1 = localStorage.getItem("X1");
    var n2 = localStorage.getItem("N2");
    var x2 = localStorage.getItem("X2");
    document.getElementById("hitungn1").innerHTML = n1;
    document.getElementById("hitungx1").innerHTML = x1;
    document.getElementById("hitungn2").innerHTML = n2;
    document.getElementById("hitungx2").innerHTML = x2;
    document.getElementById("hitunga2").innerHTML = alpha;
    event.preventDefault()
 
}

secondform.addEventListener('submit', function (event) {
    const inputn1 = document.getElementById('hitungn1')
    const inputx1 = document.getElementById('hitungx1')
    const inputn2 = document.getElementById('hitungn2')
    const inputx2 = document.getElementById('hitungx2')
    const inputa2 = document.getElementById('hitunga2')
    const hitungn1 = inputn1.value
    const hitungx1 = inputx1.value
    const hitungn2 = inputn2.value
    const hitungx2 = inputx2.value
    const hitunga = inputa2.value
     


    hitung2(hitungx1, hitungn1, hitungx2, hitungn2, hitunga)
})

