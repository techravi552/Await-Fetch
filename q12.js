function createCar(make, model, year) {
    return {
        make: make,
        model: model,
        year: year,
        describeCar: function () {
            console.log(`This car is a ${year} ${make} ${model}.`)
        }
    }
}

const myCar = createCar("Toyota", "Corolla", 2022)
myCar.describeCar()


const myCar2 = createCar("Bjaj", "camry", 2021)
myCar2.describeCar()