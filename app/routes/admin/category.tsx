/* Created by Lars-Inge Andresen */

/* External resources */
import { data, useLoaderData } from "react-router";

/* Local resources */
import { getVessel, update } from "~/models/vessel";

export const loader = async () => {
  return data(getVessel);
};

export default function AdminCategory() {
  const vessel = useLoaderData();

  return <>Category</>;
}
