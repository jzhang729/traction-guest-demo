import { Pane, Spinner } from "evergreen-ui";
import React from "react";

const Loading = () => {
  return (
    <Pane display="flex" alignItems="center" justifyContent="center" height={400}>
      <Spinner size={80} />
    </Pane>
  );
};

export default Loading;
