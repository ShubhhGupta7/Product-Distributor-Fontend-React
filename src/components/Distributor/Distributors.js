import Distributor from "./Distributor";
import classes from "./Distributors.module.css";

// Temprorary Code for storing data will be removed once integrated with backend
import { getDistributors } from "../../store";

function Distributors() {
  const distributors = getDistributors();

  return (
    <ul className={`d-flex justify-content-around flex-wrap ${classes.list}`}>
      {distributors.map((distributor) => {
        return (
          <Distributor
            key={distributor.id}
            name={distributor.name}
            email={distributor.email}
            contact={distributor.contact}
          />
        );
      })}
    </ul>
  );
}

export default Distributors;
