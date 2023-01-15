import { Outlet } from "react-router-dom";

const { createContext, Children, useState } = require("react");

const ApplicationStatusContext = createContext({
  status: null,
  updateStatus: (status) => {},
});

export const ApplicationStatusContextProvider = (props) => {
  const [status, setStatus] = useState("pending");

  const updateStatusHandler = (status) => {
    setStatus(status);
  };

  const context = {
    status,
    updateStatus: updateStatusHandler,
  };

  return (
    <ApplicationStatusContext.Provider value={context}>
      {props.children}
    </ApplicationStatusContext.Provider>
  );
};
export default ApplicationStatusContext;
