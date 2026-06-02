import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Seismic Daily Log" },
    { name: "description", content: "Welcome to Seismic Daily Log" },
  ];
}

export default function Home() {
  return <Welcome />;
}
