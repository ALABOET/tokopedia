import { FC } from 'react';
import { Button } from "@mui/material";
import classNames from './StoreHeader.module.scss'

const StoreHeader: FC = () => {
  return (
    <div className={classNames.header_root}>
      <img
        src="/logos/tokopedia.png"
        className={classNames.logo}
      />
      <Button
        variant="contained"
        color="success"
      >
        Buy now
      </Button>
    </div>
  )
};

export default StoreHeader;
