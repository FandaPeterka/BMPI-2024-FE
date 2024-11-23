import React, { createContext, useContext, useState, useCallback } from "react";

const RequestStatusContext = createContext();

export const useRequestStatus = () => {
  return useContext(RequestStatusContext);
};

const RequestStatusProvider = ({ children }) => {
  const [status, setStatus] = useState({
    pending: false,
    error: null,
    success: false,
    message: "",
  });

  const setPending = useCallback((message = "Loading...") => {
    setStatus({ pending: true, error: null, success: false, message });
  }, []);

  const setError = useCallback((error, message = "An error occurred") => {
    setStatus({ pending: false, error, success: false, message });
  }, []);

  const setSuccess = useCallback((message = "Operation successful") => {
    setStatus({ pending: false, error: null, success: true, message });
  }, []);

  const resetStatus = useCallback(() => {
    setStatus({ pending: false, error: null, success: false, message: "" });
  }, []);

  return (
    <RequestStatusContext.Provider
      value={{ status, setPending, setError, setSuccess, resetStatus }}
    >
      {children}
    </RequestStatusContext.Provider>
  );
};

export default RequestStatusProvider;