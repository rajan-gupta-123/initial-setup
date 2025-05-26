import { forwardRef } from "react";

const Component1 = forwardRef((props, refs) => {
  return <input ref={refs} {...props}></input>;
});

export default Component1;
