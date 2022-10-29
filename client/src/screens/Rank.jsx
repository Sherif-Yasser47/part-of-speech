import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Rank = () => {
  const [rank, setRank] = useState(null);
  const navigate = useNavigate();
  const {state} = useLocation();
  
  useEffect(() => {
    const rank = state.rank;
    setRank(rank);
  }, []);

  const routeToPracticeScreen = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Rank</h1>
      {rank && <h2>{rank}</h2>}

      <div
        style={{
          textDecoration: "underline",
          cursor: "pointer",
          fontSize: "20px",
          fontWeight: "bold",
        }}
        onClick={routeToPracticeScreen}
      >
        Practice Again
      </div>
    </div>
  );
};

export default Rank;
