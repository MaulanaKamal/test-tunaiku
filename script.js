// Soal 1
for (var i = 0; i < 4; i++) {
    setTimeout(() => {
        return i
    });
    console.log(i)
}

// jawaban a : karena data var i tidak di return jadi akan menghasilkan angka 4 terus
// jawaban b : harus menggunakan return 

// Soal 2
class soal1 {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    Running(place) {
        return `${this.name} age of ${this.age} likes to run in ${place}`
    }
}

let x = new soal1('Maulana Kamal', 24).Running('Senayan')
console.log(x)

// Soal 3
class soal2 {
    constructor(fullname) {
        this.fullname = fullname;
    }
    walking() {
        return `${this.fullname} is walking`
    }
    running() {
        return `${this.walking()} and then running`
    }
}

let y = new soal2('Maulana')
console.log(y.running())


// Soal 4
var a = [1, 2, 3, 4] + [5, 6, 7, 8];
var b = [1, 2, 3, 4] - [3, 6, 7, 8];

console.log(a)

// karena array yang membungkus integer akan menjadi String, 
// jadi ketika string tambah string hasilnya keluar
// dan kalau string minus string dia akan menggeluarkan NaN

