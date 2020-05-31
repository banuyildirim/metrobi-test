
// Question 1: Write a function that finds the duplicate items in any given array.
findDuplicateItem = (array) => {
    let results = [];
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i + 1] === array[i]) {
        results.push(array[i]);
      }
    }
    return results
}

// Question 2: Write an async python function that writes every item in any given array with 1, 2, 4...
printedArrayItem = (array) => {
    let t = 1000;
    for(let i = 0; i< array.length; i++) {
        setTimeout(() => {
            return array[i];
        }, t);
        t = t*2;
    }
}

// Question 7: Think that you have an unlimited number of carrots, but limited number of carrot...
getMaxValue = (carrotTypes, capacity) => {
    //Calculates the price of a kg and add into the object
    carrotTypes.map((item,i) => {
        let value;
        value = item.price / item.kg
        carrotTypes[i].value = value;
    });

    //Objects sorts by price in carrotTypes and assign new array carrotTypesNew
    let carrotTypesNew = carrotTypes.slice(0);
    carrotTypesNew.sort(function(a, b) {
        return b.value - a.value;
    });


    // lastArray: Add the items that will create the max value to lastArray
    // currentWeight: Updates the kg in lastArray, not to exceed the capacity
    let lastArray = [];
    let currentWeight = 0;

    //First step: add from all carrot types in lastArray
    for (i=0; i<carrotTypesNew.length; i++ ) {
        currentWeight = currentWeight + carrotTypesNew[i].kg;
        lastArray.push(carrotTypesNew[i])
    }

    // Second Step: subtract the current capacity from the total capacity and if it is the most expensive type, if not, add from the second max value item until
    if ((capacity - currentWeight) % lastArray[0].kg !== 0) {
        do {
            lastArray.push(carrotTypesNew[1]);
            currentWeight = currentWeight + carrotTypesNew[1].kg;
        }
        while ((capacity - currentWeight) % lastArray[0].kg !== 0 && currentWeight <= capacity - carrotTypesNew[1].kg);
    }

    //If the remaining weight is divided by the weight of the max value item, add enough to not exceed the total capacity
    if ((capacity - currentWeight) % lastArray[0].kg === 0) {
        let n = (capacity - currentWeight) / lastArray[0].kg
        for (i=0; i<n; i++) {
            if(currentWeight <= capacity) {
                lastArray.push(carrotTypesNew[0]);
                currentWeight = currentWeight + carrotTypesNew[0].kg;
            }
        }
    }

    //return the range with the maximum value
    return lastArray;
    //console.log(lastArray)
}

//getMaxValue([{kg: 5, price: 100}, {kg: 7, price: 150}, {kg: 3, price: 70}], 36)
