import { useSelector } from "react-redux";
import { Loading } from "../Loading/Loading";
import "./Footer.css";

export const Footer = () => {
  const showLoading = useSelector((state) => state.loading.show);

  return (
    <footer>
      {showLoading && <Loading />}
      <p>Credits To:</p>
      <a target="_blank" rel="noreferrer" href="https://www.tech-breeze.com/">
        Tech Breeze
      </a>
    </footer>
  );
};
