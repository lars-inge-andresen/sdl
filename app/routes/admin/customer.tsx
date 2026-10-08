/* Created by Lars-Inge Andresen */

/* External resources */
import { data, useLoaderData } from "react-router";

/* Local resources */
import { getCustomer } from "~/models/customer";

export const loader = async () => {
  return data(getCustomer);
};

export default function AdminCustomer() {
  // const customer = useLoaderData();

  return <>Customer</>;
}
