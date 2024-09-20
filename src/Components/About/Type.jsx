import React from "react";

import Typewriter from "typewriter-effect";

export const Type = () => {
  return (
    <>
      <Typewriter
        options={{
          strings: ["A Software Engineer", "Fitness Enthusiast", "Painter | Guitarist", "A Tech Enthusiast"],
          autoStart: true,
          loop: true,
          deleteSpeed: 40
        }}
      />
    </>
  );
};



