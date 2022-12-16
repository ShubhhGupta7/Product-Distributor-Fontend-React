import Destributor from "./Destributor";

const destributors = [
  {name: 'shubhhgupta7', email: 'shubhgupta036@gmail.com', contact: '5464', password: 's', confirmPassword: 's'},
 {name: 'Shubh Gupta', email: 'shubhguptasda036@gmail.cods', contact: '5464564', password: 's4', confirmPassword: 's4'},
 {name: 'Shubh Guptadsfrs', email: 'shubhguptasdasda036@gmail.cods', contact: '5464564453', password: 's43', confirmPassword: 's43'}
];

function Destributors() {
  return (
    <div>
      <h1>This is the list of Destributors</h1>
      <ul>
        {destributors.map((destributor) => {
          return <Destributor key={destributor.email} 
              name={destributor.name}
              email={destributor.email}
              contact={destributor.contact}
          />;
        })}
      </ul>
    </div>
  );
}

export default Destributors;
