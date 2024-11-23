import React, { useEffect } from "react";
import { useRequestStatus } from "../context/RequestStatusContext";
import "./StatusIndicator.css"; 

const StatusIndicator = () => {
  const { status, resetStatus } = useRequestStatus();

  useEffect(() => {
    let timer;
    if (status.success || status.error) {
      timer = setTimeout(() => {
        resetStatus();
      }, 500); 
    }
    return () => clearTimeout(timer);
  }, [status.success, status.error, resetStatus]);

  if (status.pending) {
    return (
      <div className="status-overlay">
        <div className="status-indicator pending">
          <div className="spinner"></div>
          <p>{status.message || "Loading..."}</p>
        </div>
      </div>
    );
  }

  if (status.error) {
    return (
      <div className="status-overlay">
        <div className="status-indicator error">
          <p>Error: {status.message || "An error occurred."}</p>
        </div>
      </div>
    );
  }

  if (status.success) {
    return (
      <div className="status-overlay">
        <div className="status-indicator success">
          <p>{status.message || "Operation successful."}</p>
        </div>
      </div>
    );
  }

  return null;
};

export default StatusIndicator;