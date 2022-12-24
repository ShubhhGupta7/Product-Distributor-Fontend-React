import Destributor from "./Destributor";
import classes from "./Destributors.module.css";

// Temprorary Code for storing data will be removed once integrated with backend
import { getDistributors } from "../../store";
const destributors = getDistributors();

function Destributors() {
  return (
    <ul className={`d-flex justify-content-around flex-wrap ${classes.list}`}>
      {destributors.map((destributor) => {
        return (
          <Destributor
            key={destributor.id}
            name={destributor.name}
            email={destributor.email}
            contact={destributor.contact}
          />
        );
      })}
    </ul>
  );
}

export default Destributors;
