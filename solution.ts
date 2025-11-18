// Problem 1 - Solution
function formatValue(value: string | number | boolean): string | number | boolean {
  let result: string | number | boolean;

  if (typeof value === "string") {
    result = value.toUpperCase();
  } 
  else if (typeof value === "number") {
    result = value * 10;
  } 
  else {
    result = !value;
  }

  return result;
}

//Problem 2 - Solution
function getLength(value: string | any[]): number {
  let length: number;
  
  if (typeof value === "string") {
    length = value.length;
  } 
  else if (Array.isArray(value)) {
    length = value.length;
  } 
  else {
    length = 0; 
  }

  return length;
}

// Problem 3 - Solution
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

// Problem 4 - Solution
function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {

  const result: { title: string; rating: number }[] = [];

  for (let i = 0; i < items.length; i++) {
    if (items[i].rating >= 4) {
      result.push(items[i]);
    }
  }

  return result;
}

// Problem 5 - Solution
function filterActiveUsers(
  users: { id: number; name: string; email: string; isActive: boolean }[]
): { id: number; name: string; email: string; isActive: boolean }[] {

  const output: { id: number; name: string; email: string; isActive: boolean }[] = [];

  for (const user of users) {
    if (user.isActive === true) {
      output.push(user);
    }
  }

  return output;
}

//Problem 6 - Solution
interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book): void {
  const availability = book.isAvailable ? "Yes" : "No";

  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`
  );
}

//Problem 7 - Solution
function getUniqueValues(
  arr1: (string | number)[],
  arr2: (string | number)[]
): (string | number)[] {

  const result: (string | number)[] = [];

  for (let i = 0; i < arr1.length; i++) {
    let found = false;

    for (let j = 0; j < result.length; j++) {
      if (result[j] === arr1[i]) {
        found = true;
        break;
      }
    }

    if (!found) {
      result.push(arr1[i]);
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    let found = false;

    for (let j = 0; j < result.length; j++) {
      if (result[j] === arr2[i]) {
        found = true;
        break;
      }
    }

    if (!found) {
      result.push(arr2[i]);
    }
  }

  return result;
}

//Problem 8 - Solution
function calculateTotalPrice(
  products: { name: string; price: number; quantity: number; discount?: number }[]
): number {

  if (products.length === 0) return 0;

  const total = products
    .map(product => {
      const netPrice = product.price * product.quantity;

      if (product.discount !== undefined) {
        const discountAmount = netPrice * (product.discount / 100);
        return netPrice - discountAmount;
      }

      return netPrice;
    })
    .reduce((sum, value) => sum + value, 0);

  return total;
}