import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { Outlet } from "react-router";
import { useEffect, useState } from "react";
import Usercontext from "./utils/useContext";
import hotelListContext from "./utils/HotelListContext";

function App() {
  const [swiggyRes, setswiggyRes] = useState(null);
  const [allItems, setAllItems] = useState(null);
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  useEffect(() => {
    const randomTrue = Math.random() < 0.3;

    if (!randomTrue) {
      setName("guest");
      setEmail("guest@gmial.com");
      return;
    }

    const loggedInUser = {
      name: "sufiyan",
      email: "sufiyantdc@gmial.com",
    };

    setName(loggedInUser.name);
    setEmail(loggedInUser.email);
  }, []);

  return (
    <>
      <Usercontext.Provider value={{ name: name, email: email }}>
        <hotelListContext.Provider
          value={{ swiggyRes, setswiggyRes, setAllItems, allItems }}
        >
          <Header />
          <Outlet />
          <Footer />
        </hotelListContext.Provider>
      </Usercontext.Provider>
    </>
  );
}

export default App;
