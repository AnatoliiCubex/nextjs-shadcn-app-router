import { nextApiRoute } from "~/api";

import type { ExampleType } from "~/basics/types/example.type";

export const useHomeViewLogic = async () => {
  const products = (await nextApiRoute.get<ExampleType[]>("")).data;

  return { data: { products }, state: {}, setState: {}, handlers: {} };
};
