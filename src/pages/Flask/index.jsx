import { useState, useEffect } from "react";
import axios from "axios";
import Text from "../../components/Text";
import { useResolvedPath } from "react-router-dom";

const Flask = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const { pathname } = useResolvedPath();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`/api${pathname}`, {
          withCredentials: false,
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        });
        setMessage(response.data);
      } catch (error) {
        console.error(error);
        setError(error.message);
      }
    })();
  }, []);

  return (
    <>
      <Text>{message}</Text>
      {error && <Text>{error}</Text>}
    </>
  );
};

export default Flask;
