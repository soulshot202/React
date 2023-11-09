import { useEffect, useState } from "react";

export default function useAddnum(x, y) {
  const [sum, setSum] = useState(0);

  useEffect(() => {
    setSum(Number(x) + Number(y));
  }, [x, y]);
  return sum;
}
