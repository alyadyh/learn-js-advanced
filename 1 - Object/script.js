// Cara untuk membuat Object pada javascript
// 1. Object Literal
// PROBLEM: Tidak efektif untuk object yang banyak
// let mahasiswa = {
//     nama: 'Alya Dhiya',
//     energi: 10,
//     makan: function(porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }
// }


// 2. Function Declaration
// function Mahasiswa(nama, energi) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;
    
//     mahasiswa.makan = function(porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }
//     mahasiswa.main = function(jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain!`);
//     }

//     return mahasiswa;
// }

// let alya = Mahasiswa('Alya', 15);
// let dhiya = Mahasiswa('Dhiya', 17);


// 3. Constructor Function
// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
    
//     this.makan = function(porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }
//     this.main = function(jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain!`);
//     }
// }

// let alya = new Mahasiswa('Alya', 15);


// 4. Object.create
// const methodMahasiswa = {
//     makan: function(porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     },
//     main: function(jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain!`);
//     },
//     tidur: function(jam) {
//         this.energi += jam;
//         console.log(`Halo ${this.nama}, selamat tidur!`);
//     }
// };

// function Mahasiswa(nama, energi) {
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     return mahasiswa;
// }

// let alya = Mahasiswa('Alya', 15);
// let dhiya = Mahasiswa('Dhiya', 17);


// 5. Prototype
function Mahasiswa(nama, energi) {
    this.nama = nama;
    this.energi = energi;
}

Mahasiswa.prototype.makan = function(porsi) {
    this.energi += porsi;
    return `Halo ${this.nama}, selamat makan!`;
}
Mahasiswa.prototype.main = function(jam) {
    this.energi -= jam;
    return `Halo ${this.nama}, selamat bermain!`;
}
Mahasiswa.prototype.tidur = function(jam) {
    this.energi += jam + 2;
    return `Halo ${this.nama}, selamat tidur!`;
}

let alya = new Mahasiswa('Alya', 12);