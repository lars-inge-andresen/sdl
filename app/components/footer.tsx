/* Created by Lars-Inge Andresen */

/* Local resources */

interface FooterProps {
  developer: { fullname: string; primary_contact: string };
}

export default function Footer({ developer }: FooterProps) {
  return (
    <>
      <div className="footer__container">
        <div className="footer">
          <div className="left">
            <div>{developer?.fullname || "Developer"}</div>
            <div>{developer?.primary_contact || "Contact"}</div>
          </div>
          <div className="middle">
            <div>SDL Version: {import.meta.env.VITE_SDL_VERSION}</div>
            <div>SDL Update: {import.meta.env.VITE_SDL_UPDATE}</div>
            <div>{import.meta.env.VITE_SDL_COPYRIGHT}</div>
          </div>
          <div className="right">
            <div>Network Status</div>
            <div>Server Status</div>
          </div>
        </div>
      </div>
    </>
  );
}
