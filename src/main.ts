const doSomething = (): void => {
  console.log("9");
};

let foo: any = "foo";
foo = 2;
foo = undefined;
console.log(foo.bar);

const doNever = (): never => {
  throw "never";
};

let vAny: any = 10;
let vUnknown: unknown = 10;

let s1: string = vAny;
let s2: string = vUnknown as string;

let page: any = "1";
let pageNumber = page as string;

const someElement = document.querySelector(".foo") as HTMLInputElement;

someElement.addEventListener("blur", event => {
  const target = event.target as HTMLInputElement;
  console.log(target.value);
});

interface UserInterface {
  getFullName(): string;
}

class User implements UserInterface {
  private firstName: string;
  private lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName(): string {
    return this.firstName + " " + this.lastName;
  }
}

const user = new User("Rus", "Lan");
console.log(user.getFullName);
