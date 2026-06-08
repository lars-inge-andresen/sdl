/* Created by Lars-Inge Andresen */

/* External resources */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserLock } from "@fortawesome/free-solid-svg-icons";

/* Local resources */
import { getUserByAuthID, userLogin } from "~/models/user";
import { getSession, commitSession } from "~/session";
import { data, redirect, useActionData, useNavigation } from "react-router";

export const action = async ({ request }: any) => {
  const formData = await request.formData();
  const login = formData.get("login");
  const password = formData.get("password");
  const auth_id = await userLogin({ login: login, password });

  if (!auth_id) {
    return (data({ error: "Incorrect username and/or password" }), 401);
  }

  const session = await getSession(request.headers.get("Cookie"));
  session.set("auth_id", auth_id);
  const user = await getUserByAuthID(auth_id);

  return redirect("/" + user?.department.shortname.toLowerCase(), {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
};

export default function Login() {
  const data = useActionData();
  const navigation = useNavigation();
  const isLoading = navigation.state === "submitting";

  return (
    <>
      <div className="content">
        <div className="content__header">
          <div className="content__title">
            <h2 className="text-2xl font-bold">Login</h2>
          </div>
          <div className="content__icon">
            <FontAwesomeIcon icon={faUserLock} />
          </div>
        </div>
        <div className="login__form">
          <form method="post">
            <p>
              This application requires a valid user account, and it seems that
              you are not logged in at the moment.
            </p>
            <p>
              Please provide your username and password in the form below.
              <br />
              If you don't have an account, contact your local administrator.
            </p>

            <div className="col-6">
              <div className="mb-3">
                <label className="form-label" htmlFor="username">
                  <b>Username</b>
                </label>
                <input type="text" className="form-control" id="username" />
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="password">
                  <b>Password</b>
                </label>
                <input type="password" className="form-control" id="password" />
              </div>
            </div>

            <div>
              {data?.error && <p className="warning">{data.error}</p>}
              <button
                type="submit"
                className="btn btn-primary btn-sm"
                disabled={isLoading}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
