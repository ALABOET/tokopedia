import { FC, useEffect } from 'react';
import TokopediaHeader from "./header/TokopediaHeader";
import TokopediaContent from "./body/TokopediaContent";
import store from "../store/store";

const Tokopedia: FC = () => {
  useEffect(() => {
    store.setPageIsLoaded();
  }, []);
  return (
    <>
      <TokopediaHeader />
      <TokopediaContent />
    </>
  )
};

export default Tokopedia;
