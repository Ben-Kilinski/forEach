//task 1 
let names = ["Ben", "Itzhak", "Matan",  "Maya", "Aron"]
function task1 () {
    names.forEach(function (item){console.log(item)})
}
task1()


//task 2 
let ages = [10, 33, 26, 48, 55, 78, 93, 84, 15, 102]
function task2 () {
    ages.forEach(function(item){
        if (item >= 25){
        console.log(item)
        }
    })
}
task2 ()


//task 3 
let familyNames = ["Kilinski", "Jones", "Gurion", "Einstein", "Openheimer"]
function task3 () {
    familyNames.forEach(function(item, index){
            console.log(familyNames[index].toUpperCase())
    })
}
task3 () 
