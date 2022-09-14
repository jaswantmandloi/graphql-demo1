export const resolvers = {
  Query: {
    hello: () => `Hello, World`,
    cats: () => {
      console.log("select from Cats");
      return cats;
    },
  },
  Mutation: {
    createCat: async (_, { name }) => {
      const cat = {
        id: new Date().getTime(),
        name,
      };
      cats.push(cat);
      console.log(cat);
      return cat;
    },
  },
};

const cats = [
  {
    id: 1,
    name: "Cat 1",
  },
];

`
query Cats {
  cats {
    id
  }
}



`;
