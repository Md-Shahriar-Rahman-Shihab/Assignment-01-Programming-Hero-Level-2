# What are some differences between Interfaces and Types in TypeScript?

✅ 1. Extension/Inherit করার ক্ষেত্রে

Interface বেশি flexible — সহজেই extend করা যায়।

interface User {
  name: string;
}

interface Admin extends User {
  role: string;
}

type দিয়েও extend করা যায়, তবে syntax ভিন্ন:

type User = { name: string };
type Admin = User & { role: string };


---

✅ 2. Declaration Merging

Interface declaration merging সাপোর্ট করে — একই নাম দিয়ে বারবার declare করলে merge হয়।

interface User {
  name: string;
}

interface User {
  age: number;
}

কিন্তু type alias এটা সাপোর্ট করে না:

type User = { name: string };
type User = { age: number }; 


---

✅ 3. Features
Type বেশি powerful — union, intersection, conditional types ইত্যাদি define করা যায়।

type Status = "success" | "error" | "loading";

Interface এগুলো সাপোর্ট করে না।


---

✅ 4. Usage Difference

Interface → object-এর structure/shapes define করার জন্য ভালো

Type → object ছাড়াও union, tuple, function signature, primitive — সব define করতে পারে


type Age = number;
type Coordinates = [number, number];


---

✅ 5. Performance

Compiler-এ interface তুলনামূলক fast ও optimized।

---

# What is the use of the keyof keyword in TypeScript?

TypeScript-এর keyof keyword কোনো object type-এর সবগুলো key নিয়ে একটি union type তৈরি করে। object-এর যে property-গুলো আছে, keyof সেগুলোকেই string literal type হিসেবে রিটার্ন করে।

এটা মূলত ব্যবহার করা হয়—
✔ type safety বাড়াতে
✔ generic function-এ key validation করতে
✔ mapped type তৈরিতে


---

✅ Example 1 — Basic keyof

type User = {
  name: string;
  age: number;
};

এখন,

keyof User

এর ফল হবে:

"name" | "age"

কারণ User টাইপে এই দুইটি key আছে।


---

✅ Example 2 — keyof দিয়ে ভুল key prevent করা

function printValue(obj: User, key: keyof User) {
  console.log(obj[key]);
}

printValue({ name: "Shihab", age: 20 }, "name"); //  Valid
printValue({ name: "Shihab", age: 20 }, "email"); // Error (email নেই)

এখানে keyof User ensure করে যে কেবলমাত্র valid key-ই ব্যবহার করা যাবে।
Invalid key দিলে TypeScript সাথে সাথেই error দেখাবে।


---

✅ Example 3 — keyof + typeof (Real object থেকে key নেওয়া)

const account = {
  username: "shihab",
  email: "shihab@gmail.com",
  role: "admin"
};

type AccountKeys = keyof typeof account;
// "username" | "email" | "role"

এখানে কোনো টাইপ manually লিখিনি।
বরং:

typeof account → প্রথমে account object-এর টাইপ বের করেছে

keyof → সেই টাইপের সব key নিয়ে union বানিয়েছে


TypeScript object-টাকে দেখে নিজে বুঝে নেয়:

username
email
role

তারপর এগুলোকে type বানিয়ে দেয়:

"username" | "email" | "role"

এটা তখন খুব useful যখন— object already তৈরি করা আছে ওই object-এর key গুলো type-safe ভাবে use করতে


---
