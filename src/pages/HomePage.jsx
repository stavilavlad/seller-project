import { useEffect } from "react";
import { CategoriesGrid, Hero, SearchForm } from "../components/index";
import { useDispatch } from "react-redux";
import { loginUser } from "../features/user/userSlice";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const user = JSON.parse(params.get("user"));
    const token = params.get("token");

    if (user) {
      dispatch(loginUser({ id: user.id, username: user.username, registration_date: user.registration_date, email: user.email, token: token }));
    }
    window.history.replaceState({}, document.title, window.location.pathname);
  }, []);

  return (
    <div>
      <CategoriesGrid />
      <Hero />
    </div>
  );
};

export default HomePage;
