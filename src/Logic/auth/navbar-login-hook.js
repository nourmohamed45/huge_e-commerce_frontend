import { useCallback, useEffect, useState } from "react";

const NavbarLoginHook = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const logOut = useCallback(() => {
    localStorage.removeItem("user");
    setUser(null);
  }, []);

  return { user, logOut };
};

export default NavbarLoginHook;
