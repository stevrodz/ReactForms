import { useState } from "react";

export default function Authenticate({ token }) {
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState(null);

  async function handleClick() {
    //if (!token) {
    //console.log("No token available. Please sign up first.");
    // return;
    //}

    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const result = await response.json();

      //console.log("Authentication response:", result);

      if (result.success) {
        setSuccessMessage("Token is valid");
        setUsername(result.data.username);
        setError(null);
        //console.log("Token is valid!");
      } else {
        setSuccessMessage(null);
        setError("Token is invalid or expired");
        //console.log("Token is invalid or expired.");
      }
    } catch (error) {
      setSuccessMessage(null);
      setError(error.message);
      //console.error("Error authenticating:", error.message);
    }
  }

  return (
    <>
      <h2>Authenticate!</h2>
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {username && <p>Welcome, {username}!</p>} {/* Display the username */}
      <button onClick={handleClick}>Authenticate Token</button>
      {token ? <p>Token: {token}</p> : <p>Please sign up to get a token.</p>}
    </>
  );
}
