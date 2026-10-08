/* Created by Lars-Inge Andresen */

/* External resources */
import { useLoaderData } from "react-router";

/* Local resources */
// import { getVessel, update } from "~/models/vessel";

export function meta() {
  return [
    { title: "Admin - Vessel" },
    { name: "description", content: "Vessel administration" },
  ];
}

export async function loader() {
  // const [vessel] = await Promise.all([getVessel()]);
  // return { vessel };
}

export default function AdminUser() {
  // const data = useLoaderData();

  return (
    <>
      <h4>User</h4>
      <p>
        This installtion of Seismic Daily Log is licensed for use on the below
        vessel.
      </p>
    </>
  );
}
