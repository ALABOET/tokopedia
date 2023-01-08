import { FC } from 'react';
import { Button } from "@mui/material";
import classNames from './TokopediaHeader.module.scss'

const TokopediaHeader: FC = () => {
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

export default TokopediaHeader;
