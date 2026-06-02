/* Created by create-react-router */
/* Modified by Lars-Inge Andresen */

/* External resources */
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useMatch,
  useMatches,
  useParams,
} from "react-router";

/* Local resources */
import type { Route } from "./+types/root";
import "./styles/styles.css";
import "./styles/colors.css";

import Header from "./components/header.js";
import { getCustomer } from "./models/customer";
import { getVessel } from "./models/vessel";

import Navigation from "./components/navigation";
import { getActiveDepartments } from "./models/department";

import Menu from "./components/menu.jsx";

import Footer from "./components/footer";
import { getDeveloper } from "./models/developer";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export async function loader() {
  const [customer, vessel, developer, activeDepartments] = await Promise.all([
    getCustomer(),
    getVessel(),
    getDeveloper(),
    getActiveDepartments(),
  ]);
  return { customer, vessel, developer, activeDepartments };
}

export function Layout({ children }: { children: React.ReactNode }) {
  const data = useLoaderData();
  const params = useParams();
  const matches = useMatches();
  const matchWithMenu = matches.find(
    (match) => match.handle && match.handle.menu__links,
  );
  const menu__links = matchWithMenu?.handle.menu__links(params) ?? [];

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Header
          customer={data.customer}
          vessel={data.vessel}
          user={data.user}
        />

        <Navigation department={data.activeDepartments} />

        <Menu items={menu__links} hideLogout={undefined} userRole={undefined} />

        <div className="content__container">{children}</div>

        <Footer developer={data.developer} />

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
