/* Created by Lars-Inge Andresen */

/* Local resources */
import CurrentDate from "./current-date";

interface HeaderProps {
  customer?: { fullname: string };
  vessel?: { fullname: string };
  user?: { firstname: string; surname: string };
}

export default function Header({ customer, vessel, user }: HeaderProps) {
  return (
    <>
      <div className="header__container">
        <div className="header">
          <div className="left">
            <div>{customer?.fullname || "Customer"}</div>
            <div>{vessel?.fullname || "Vessel"}</div>
            <div>
              {user?.firstname || "Guest"} {user?.surname}
            </div>
          </div>
          <div className="middle">
            <div>
              <h1 className="text-3xl font-bold">
                {import.meta.env.VITE_SDL_TITLE}
              </h1>
            </div>
            <div>{import.meta.env.VITE_SDL_SLOGAN}</div>
          </div>
          <div className="right">
            <CurrentDate />
          </div>
        </div>
      </div>
    </>
  );
}
