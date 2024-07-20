/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
    //Write your code here , just console.log

    var developers = arr.filter(function(person) {
        return person.profession === "developer";
    });

    developers.map(function(person) {
        console.log(person);
    });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(person => {
    if (person.profession === "developer") {
      console.log(person);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newEmployee);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  arr = arr.filter(person => person.profession !== "admin");
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  const newArray = [
    { id: 4, name: "mike", age: "28", profession: "designer" },
    { id: 5, name: "lisa", age: "25", profession: "developer" },
    { id: 6, name: "tom", age: "30", profession: "manager" },
  ];
  
  // Concatenate the two arrays and log the result
  const combinedArray = arr.concat(newArray);
  console.log(combinedArray);
}
