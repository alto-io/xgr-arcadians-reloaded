import { LowSync } from "lowdb";
import { JSONFileSync } from "lowdb/node";

import type { Address, ContractDetails } from "core/types";

type Data = {
  contracts: {
    [key: Address]: ContractDetails;
  };
};

const file = ".exampledb.json";
const db = new LowSync(new JSONFileSync<Data>(file));
export { db };
