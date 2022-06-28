const Person = {
    firstName: "Kimi",
    lastName: "Hime",
    fullName: function() {
        return `${this.firstName} ${this.lastName}`;
    },
    weight: 65,
    height: 172,
    isWeightIdeal: function() {
        const heightMinus100 = this.height - 100;
        return heightMinus100 - (heightMinus100 * 10) / 100;
    },
    needDiet: function() {
        const weightIdeal = this.isWeightIdeal();
        if (weightIdeal - 5 > this.weight)
            return (
                "you need more protein, need more " + (weightIdeal - this.weight) + "Kg"
            );
        else if (weightIdeal + 5 < this.weight)
            return (
                "you need a mayo diet, need reduce weight: " +
                (this.weight - weightIdeal) +
                "Kg"
            );
        return "you are in a good shape";
    },
};

console.log(Person.fullName());
console.log(Person.isWeightIdeal());
console.log(Person.needDiet());

// const countries = {
//     ID: {
//         province: ["bali", "jawa timur", "jawa tengah"],
//         city: ["singaraja", "gianyar", "negare", "badung"],
//     },
//     MY: {},
// };

// console.log(countries.ID.province);