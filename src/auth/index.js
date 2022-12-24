// TODO:: isLoggedIn : Checks if user is logged in or not
export const isLoggedIn = () => {
  let data = localStorage.getItem("data");
  return data != null;
};

// TODO:: doLogin : this function will set the user and jwttokken to local storage of the browser
export const doLogin = (data, next) => {
  // next 3 lines is used to make frontend work this will be removed in integration
  data = {
    user: data,
  };
  localStorage.setItem("data", JSON.stringify(data));
  next();
};

// TODO:: doLogout : this function will take out the user and jwttokken from the local storage of the browser
export const doLogout = (next) => {
  localStorage.removeItem("data");
  next();
};

// TODO:: getCurrentUserDetail : Gives the user which is currently logged in
export const getCurrentUserDetail = () => {
  return isLoggedIn() ? JSON.parse(localStorage.getItem("data")).user : false;
};

// TODO:: isAdmin : tells us that whether login user is admin or not
export const isAdmin = () => {
  return (
    JSON.parse(localStorage.getItem("data")).user.email ===
    "productmanager@sanjeevni.com"
  );
};
