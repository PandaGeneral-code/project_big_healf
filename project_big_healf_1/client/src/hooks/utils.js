import { useSelector } from "react-redux";

export const useUtilsHooks = () => {
  const utils = useSelector(({ utils }) => utils);

  return {
    utilsState: utils,
  };
};
