/*
    write 3 function:
        - bring a recipes that prepation time is no longer then 15 min
        - bring all gluten free recipes 
        - all recipes less then 5 ingredients
*/

/* prepationTime in minutes */

var recipe1 = {
    name: 'Omelete',
    isGlutenFree: false,
    prepationTime: 15, // in minutes
    ingredients: [
        'Bread',
        'Eggs',
        'Salt',
        'Tomato'
    ],
    instructions: 'Put all together'
}

var recipe2 = {
    name: 'Pasta',
    isGlutenFree: false,
    prepationTime: 15, // in minutes
    ingredients: [
        'Pasta',
        'Water'
    ],
    instructions: 'Put all together'
}

var recipe3 = {
    name: 'Salad',
    isGlutenFree: true,
    prepationTime: 25, // in minutes
    ingredients: [
        'Tomato',
        'Cucumber',
        'Lettuce',
        'Pepper',
        'Onion',
        'Olive oil'
    ],
    instructions: 'Slice and dice'
}


var recipes = [
    recipe1,
    recipe2,
    recipe3
]

function recipePreprationTime(recipes, maxMinutes) {
    var rArray = [];
    for(var i=0; i <recipes.length; i++) {
        if (recipes[i].prepationTime < maxMinutes) {
            rArray.push(recipes[i]);
        }
    }
    return rArray;
}

function gluten(recipes, withotGluten) {

}

var result = recipePreprationTime(recipes, 16); // all less then 15 mins
var result2 = gluten(result, true);
console.log(result);