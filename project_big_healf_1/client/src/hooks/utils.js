import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { TEST } from "@store";

export const useUtilsHooks = () => {
  const dispatch = useDispatch();
  const utils = useSelector(({ utils }) => utils);

  return {
    test: useCallback(() => dispatch({ type: TEST }), [dispatch]),
    utils,
  };
};
