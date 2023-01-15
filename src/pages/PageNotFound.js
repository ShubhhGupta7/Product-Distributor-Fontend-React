import classes from "./PageNotFound.module.css";
import Navbar from "../components/UI/NavBar";

const PageNotFound = () => {
  return (
    <>
      <Navbar />
      <div className={classes.text}>
        <h1>OOOPS! ERROR 404, Page Not Found</h1>
        <h3>This Route Does'nt Exist</h3>
      </div>
    </>
  );
};
export default PageNotFound;
