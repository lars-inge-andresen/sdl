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
  useParams,
} from "react-router";

/* Local resources */
import type { Route } from "./+types/root";
import "./styles/colors.css";
import "./styles/styles.css";
import getAuthUser from "./utilities/getAuthUser";
import { ROLE_VALUES } from "./utilities/roles";

import Header from "./components/header.js";
import { getCustomer } from "./models/customer";
import { getVessel } from "./models/vessel";

import Navigation from "./components/navigation";
import { getActiveDepartments } from "./models/department";

import Menu from "./components/menu.jsx";

import Footer from "./components/footer";
import { useTypedMatches } from "./hooks";
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

export async function loader({ request }: Route.LoaderArgs) {
  const [customer, vessel, developer, activeDepartments, user] =
    await Promise.all([
      getCustomer(),
      getVessel(),
      getDeveloper(),
      getActiveDepartments(),
      getAuthUser(request),
    ]);
  return { customer, vessel, developer, activeDepartments, user };
}

export function Layout({ children }: { children: React.ReactNode }) {
  const data = useLoaderData();
  const params = useParams();
  const matches = useTypedMatches();
  const matchWithMenu = matches.find(
    (match) => match.handle && match.handle.menu__links,
  );
  const menu__links = params.dep
    ? (matchWithMenu?.handle.menu__links(params.dep) ?? [])
    : [];

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        ></link>
        <Meta />
        <Links />
      </head>
      <body>
        <Header
          customer={data.customer}
          vessel={data.vessel}
          user={data.user}
        />

        <Navigation
          activeDepartments={data.activeDepartments}
          userRole={data.user?.role ?? ROLE_VALUES.GUEST}
        />

        <div className="content__container">
          <Menu
            items={menu__links}
            hideLogout={!data.user}
            userRole={data.user?.role}
          />
          {children}
        </div>

        <Footer developer={data.developer} />

        <ScrollRestoration />
        <Scripts />
        <script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
          integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
          integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
          crossOrigin="anonymous"
        ></script>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  if (isRouteErrorResponse(error)) {
    return (
      <>
        <h1>
          {error.status} {error.statusText}
        </h1>
        <p>{error.data}</p>
      </>
    );
  } else if (error instanceof Error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error.message}</p>
        <p>The stack trace is:</p>
        <pre>{error.stack}</pre>
      </div>
    );
  } else {
    return <h1>Unknown Error</h1>;
  }
}
