import React from "react";
import { Pane, Heading } from "evergreen-ui";

const Header = () => {
  return (
    <Pane
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="100%"
      background="greenTint"
      height={120}
    >
      <Heading size={500} marginTop="default">
        Captain Hook's online store
      </Heading>
    </Pane>
  );
};

export default Header;
