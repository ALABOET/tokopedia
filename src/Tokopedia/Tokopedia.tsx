import { FC, useEffect } from 'react';
import TokopediaHeader from "./header/TokopediaHeader";
import TokopediaContent from "./body/TokopediaContent";
import store from "../store/store";
import TokopediaFooter from "./footer/TokopediaFooter";

const Tokopedia: FC = () => {
  useEffect(() => {
    store.setPageIsLoaded();
  }, []);
  return (
    <>
      <TokopediaHeader />
      <TokopediaContent />
      <TokopediaFooter />
    </>
  )
};

export default Tokopedia;
