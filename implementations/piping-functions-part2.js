// We need to create a function that accepts multiple functions as an argument.
// Run the first function passed asargument with this value.
// return the value from 1st function and pass it to second function and so on return the final result from the final function.

function executeAllFunctions(...arrayOfAllArguments){
    const arrayOfFunctions=arrayOfAllArguments.slice(0,-1)
    const initialValue=arrayOfAllArguments[arrayOfAllArguments.length-1]
    let valueToBePassed=initialValue;
    for(const func of arrayOfFunctions){
        const val=func(valueToBePassed);
        valueToBePassed=val;
    }
    return valueToBePassed;
}
const val = { salary: 10000 };
const getSalary = (person) => person.salary;
const addBonus = (netSalary) => netSalary + 1000;
const deductTax = (grossSalary) => grossSalary - grossSalary * 0.3; 
const arrayOfAllfunction = [getSalary, addBonus, deductTax];
const result = executeAllFunctions(...arrayOfAllfunction,val);
console.log(result); // 7700
 