import { FC } from 'react';
import classNames from './BodyComponents.module.scss';
import { Button, Typography } from '@mui/material';

const IntroductionSection: FC = () => {
  return (
    <div className={classNames.bodyComponents_root}>
      <div className={classNames.bodyComponents_header}>
        <img
          src="/logos/tokopedia-logo.png"
          className={classNames.logo}
        />
        <ul>
          <li>Demos</li>
          <li>Featured</li>
          <li>Purchase Now</li>
          <li>Video Tutorials</li>
          <li>Support Center</li>
       </ul>
      </div>
      <div className={classNames.bodyComponents_body}>
        <Typography variant="h5">Tokopedia - Fashion Store Elementor <br/> eCommerce Wordpress Theme</Typography>
        <Typography variant="subtitle1">
          If you are planning to build a Fashion Store or Clothing eCommerce website,
          then Tokopedia – Fashion Store eCommerce Elementor WooCommerce WordPress Theme is what you need.
        </Typography>
        <Button
          variant="contained"
          color="success"
          sx={{ marginTop: '25px' }}
        >
          View Demos
        </Button>
      </div>
    </div>
  )
};

export default IntroductionSection;
