const addId = <T extends object>(obj: T) => {
  const id = Math.random().toString(16);
  return {
    ...obj,
    id,
  };
};

interface UserInterface<T, V> {
  name: string;
  data: T;
  meta: V;
}

const user: UserInterface<{ meta: string }, string> = {
  name: "Jack",
  data: {
    meta: "foo",
  },
  meta: "baz",
};

const user2: UserInterface<string[], number> = {
  name: "Alex",
  data: ["foo", "bar", "baz"],
  meta: 12,
};

const result = addId<UserInterface>(user);

console.log(result);
