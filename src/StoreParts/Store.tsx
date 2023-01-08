import { FC, useEffect } from 'react';
import StoreHeader from "./header/StoreHeader";
import StoreContent from "./body/StoreContent";
import store from "../stores/MainStore";

const Store: FC = () => {
  useEffect(() => {
    store.setPageIsLoaded();
  }, []);
  return (
    <>
      <StoreHeader />
      <StoreContent />
    </>
  )
};

export default Store;
