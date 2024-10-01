import { nextApiRoute } from "~/api";

export const useHomeViewLogic = async () => {
  const response = await nextApiRoute.get("/");
  const products = response.data.products;

  return { data: { products }, state: {}, setState: {}, handlers: {} };
};
