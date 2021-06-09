interface UserInterface {
  name: string;
  age?: number;
  getMessage(): string;
}

const user: UserInterface = {
  name: "Ruslan",
  age: 27,
  getMessage() {
    return "Hello" + name;
  },
};

const user2: UserInterface = {
  name: "Andy",
  getMessage() {
    return "Hello" + name;
  },
};
