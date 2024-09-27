import { api } from "~/api";

export const ExampleService = {
  getExample: async () => {
    return (await api.get("/products")).data;
  },
};
