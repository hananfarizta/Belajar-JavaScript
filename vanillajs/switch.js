// const foo = "Papayas";
// let namaBuah = "";
// switch (foo) {
//     case "Papayas":
//         namaBuah = "Papaya";
//         break;
//     case "Salak":
//         namaBuah = "Salaks";
//         break;

//     default:
//         namaBuah = "Semangka";
//         break;
// }
// console.log(namaBuah);

const nomor = 1;

function pilihBuah(nomor) {
    switch (nomor) {
        case 1:
            return "Salak";
        case 2:
            return "Semangka";
        case 3:
            return "Durian";
        case 4:
            return "Rambutan";
        default:
            return "Apel";
    }
}

console.log(pilihBuah());