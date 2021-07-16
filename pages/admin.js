import "tailwindcss/tailwind.css";
import { signIn, getSession } from "next-auth/client";
import { useEffect, useState } from "react";

import { AdminPage } from "../components/adminPage/index";

function Admin({ session }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (session) {
      if (
        session.user.email == "yusufeser446@outlook.com" ||
        session.user.email == "hiquala.corci@gmail.com"
      ) {
        setLoaded(true);
      } else {
        setLoaded(false);
      }
    }
    else {
        setLoaded(false);
    }
  });

  return loaded ? <AdminPage>Sa</AdminPage> : <button onClick={signIn}>Sign in</button>;
}

Admin.getInitialProps = async (ctx) => {
    const session = await getSession(ctx);

    return { session: session };
  };

export default Admin;
