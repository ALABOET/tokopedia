import {FC, useState} from 'react';
import classNames from './BodyComponents.module.scss';
import {Button, Fade, IconButton, Slide, Typography} from '@mui/material';
import { useMedia } from 'use-media';
import SettingsIcon from '@mui/icons-material/Settings';

const IntroductionSection: FC = () => {
  const isMobile = useMedia('(max-width: 769px)');
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <div className={classNames.bodyComponents_root}>
      {!isMobile && <div className={classNames.bodyComponents_header}>
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
      </div>}
      {isMobile && <IconButton
          onClick={() => setMenuIsOpen(!menuIsOpen)}
          sx={{ position: 'absolute', top: '60px', right: '20px' }}
      >
        <SettingsIcon />
      </IconButton>}
      <Fade in={menuIsOpen}>
        <ul className={classNames.list}>
          <li>Demos</li>
          <li>Featured</li>
          <li>Purchase Now</li>
          <li>Video Tutorials</li>
          <li>Support Center</li>
        </ul>
      </Fade>
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
