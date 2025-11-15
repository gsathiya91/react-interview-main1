import * as React from "react";
import ScrollButton from "../ScrollButton";

import axios from "axios";
import { useState, useEffect, useMemo } from "react";

const Layout = ({
  children,
  bgColor,
}) => {

  let backgroundColor = bgColor ? bgColor : "#fff";
  return (
    <>

      <main
        style={{
          backgroundColor: backgroundColor,
        }}
      >
        {children}
      </main>
      <ScrollButton />
    </>
  );
};

export default Layout;
