import React, { useState } from "react";

const useLogin = () => {
  const [sendingData, setSendingData] = useState(false);

  const loginUser = async (username, password) => {
    setSendingData(true);
    try {
    } catch (error) {
    } finally {
      setSendingData(false);
    }
  };
};

export default useLogin;
