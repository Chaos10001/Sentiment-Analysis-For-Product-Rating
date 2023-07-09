import React, { useState } from "react";
import Continue from "./content/Continue";
import Welcome from "./content/Welcome";

const Main = () => {
  const [page, setPage] = useState(0);

  const componentList = [
      <Welcome page={page} setPage={setPage} />,
      <Continue page={page} setPage={setPage} />,
    ];
  return(
      <>
        {componentList[page]}
      </>
  );
};

export default Main;
