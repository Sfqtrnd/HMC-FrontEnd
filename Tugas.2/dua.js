prompt("masukkan umur anda:");
let umur = 18;
if (umur >= 18) {
    alert("kamu dewasa");
} else {
    alert("kamu belum dewasa");
}
console.log(umur)

for (let i=1; i <=100; i++) {
if (i % 3 === 0 && i % 5 === 0) {
    console.log("fizzbuzz")
} else if (i % 3 === 0) {
    console.log("fizz")
} else if (i % 5 === 0) {
    console.log("buzz")
} else console.log(i)
}

function menghitungdiskon(harga, persentasidiskon) {
    let diskon = harga * (persentasidiskon / 100);
    let hasil = harga - diskon;
    return(hasil)
}

let harga = 100;
let diskon = 50;
let total = menghitungdiskon(harga, diskon);
console.log("jumlah:" + total)