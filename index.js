// Complete the Numbers class below
// the constructor has already been provided
class Numbers {
  constructor(data) {
    //data can either be a string or an array of numbers
    if (typeof data === "string") {
      this.data = str.split(",").map((number) => number * 1);
    } else {
      this.data = data;
    }
  }
  count() {
    //return the count of numbers in data
    console.log(`count: ${this.data.length}`);
    
    return this.data.length;
  }
  printNumbers() {
    //print the numbers in data
    console.log(`printNumbers: ${this.data}`);
  }
  odds() {
    //return the odd numbers in data
    const odds = this.data.filter((num) => {
      return num % 2 !== 0;
    });
    console.log(`odds: ${odds}`);
    return odds;
  }
  evens() {
    //return the even numbers in data
    const evens = this.data.filter((num) => {
      return num % 2 == 0;
    });
    console.log(`evens: ${evens}`);
    return evens;
  }
  sum() {
    //return the sum of the numbers
    let sum = this.data.reduce((total, value) => {
      return total + value;
    });
    console.log(`sum: ${sum}`);
    return sum;
  }

  product() {
    //return the product of the numbers
    let product = this.data.reduce((total, value) => {
      return total * value;
    });
    console.log(`product: ${product}`);
    return product;
  }

  greaterThan(target) {
    //return the numbers greater than the target
    console.log(`greaterThan: ${target}`);
    return this.data.filter((num) => {
      return num > target;
    });
  }
  howMany(target) {
    //return the count of a given number
    console.log(`howMany: ${target}`);
    let count = 0;
    let found = this.data.forEach((num) => {
      count += num === target ? 1 : 0;
    });
    console.log(`count: ${count}`);
    return count;
  }
}

//Prompt the user for a list of integers separated by commas
const str = prompt("enter some numbers, like this", "1,2,3,3,5,9");

//create an instance of numbers
const n1 = new Numbers(str);
console.log(n1.count()); //returns count of numbers
n1.printNumbers(); //prints the number along with their indexes
console.log(n1.odds()); //returns odd numbers
console.log(n1.evens()); //returns even numbers
console.log(n1.sum()); //returns sum of numbers
console.log(n1.product()); //returns product of numbers
console.log(n1.greaterThan(3)); //returns numbers greater than another number
console.log(n1.howMany(3)); //return the count of a specific number
