import React, { createContext, useState } from "react";
export const UserContext = createContext([{}, () => {}]);

export default props => {
  const [state, setState] = useState({
    user: {
      firstName: "",
      lastName: "",
      email: "",
      dateOfBirth: new Date().toISOString().slice(0, 10),
      Country: "Indian",
      countryCode: "+91",
      phoneNumber: "",
      profession:"",
      password: "",
      confirmPassword: "",
      bio: "",

      PostalAddress: {
        addressLine1: "",
        addressLine2:"",
        lankMark:"",
        City:"",
        State:"",
        Country:"",
      },
      BillingAddress: {
        addressLine1:"",
        addressLine2:"",
        lankMark:"",
        City:"",
        State:"",
        Country:"",
      },
      governmentId:"", 
      governmentIdentificationType:"",
      image: "",//convert to base 64
      isSubscibed: false,
      acceptTerms: false,
    },
    errors: {}
  });
  return (
    <UserContext.Provider value={[state, setState]}>
      {props.children}
    </UserContext.Provider>
  );
};
