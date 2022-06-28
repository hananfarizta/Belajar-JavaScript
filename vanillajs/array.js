const namaMantan = ["ayu", "zahra", "calista", "lia"];

// console.log(namaMantan.length);

// namaMantan.forEach(function(item, index, array) {
//     console.log(item, index);
// });

// //Menambah namaMantan
// namaMantan.push("caca");
// console.log(namaMantan);

// //Menghapus namaMantan dari akhir
// namaMantan.pop();
// console.log(namaMantan);

// //Menghapus namaMantan dari awal
// namaMantan.shift();
// console.log(namaMantan);

// //Melihat posisi namaMantan
// console.log(namaMantan.indexOf("calista") + 1);

// //Menghapus namaMantan berdasarkan index
// namaMantan.splice(namaMantan.indexOf("lia"), 1);
// console.log(namaMantan);

// namaMantan.push("yasmine");
// console.log(namaMantan);

// //Menduplikat sebuah array tanpa membawa yang lama
// const namaMantanLama = namaMantan.slice();
// namaMantan.pop();
// console.log("Nama mantan: ", namaMantan);
// console.log("Nama mantan lama: ", namaMantanLama);

// //Looping for
// for (let index = 0; index < namaMantan.length; index++) {
//     const element = namaMantan[index];
//     console.log(element);
// }

// //Looping while
// let index = 0;
// while (index < namaMantan.length) {
//     const element = namaMantan[index];
//     console.log(element);
//     index++;
// }

// console.log(
//     namaMantan
//     .map(function(mantan, ke) {
//         return `${mantan} adalah mantan ke ${ke + 1}`;
//     })
//     .join(", ")
// );

// console.log(
//     namaMantan
//     .filter(function(mantan, ke) {
//         return mantan != "ayu";
//     })
//     .map(function(mantan, ke) {
//         return `${mantan} adalah mantan ke ${ke + 1}`;
//     })
// );

// console.log(
//     namaMantan
//     .filter(function(mantan, ke) {
//         return mantan == "zahra";
//     })
//     .map(function(mantan, ke) {
//         return `${mantan} adalah mantan ke ${ke + 1}`;
//     })
// );

console.log(
    namaMantan.reduce(function(acc, mantan, ke) {
        acc[mantan] = `Mantan ke ${ke + 1}`;

        return acc;
    }, {})
);