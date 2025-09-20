let uysernameF: string = "John";
let age: number = 20;
let isStudent: boolean = true;
let hobbies: string[] = ["reading", "swimming", "coding"];
let role: [number, string] = [1, "admin"];
let person: { name: string; age: number } = { name: "John", age: 20 };

let sayHello = (name: string) => {
  console.log(`Hello ${name}`);
};

sayHello("John");

export { uysernameF, age, isStudent, hobbies, role, person, sayHello };
