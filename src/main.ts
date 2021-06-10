type ID = string;
type Drinks = string;
type MaybeDrinks = Drinks | null;

interface UserInterface {
  id: ID;
  name: string;
  surname: string;
}

const PopularDrinks: Drinks[] = ["tea", "coffee"];

const coffee: MaybeDrinks = "coffee";

let username: string = "alex";

let pageName: string | number = "1";

let errorMessage: string | null = null;

let user: UserInterface | null = null;
