import { FC } from 'react';
import classNames from '../bodyComponents/BodyComponents.module.scss'
import { useInView } from 'react-intersection-observer';
import {Fade, Typography} from "@mui/material";

const HomepagesHeaderSection: FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      className={classNames.bodyComponents_homePagesHeader}
    >
      <Fade
        in={inView}
        mountOnEnter
        unmountOnExit
        timeout={1000}
       >
         <div>
           <Typography variant="h5">Stunning Homepages</Typography>
           <Typography variant="subtitle1">
             If you are planning to build a Fashion Store or Clothing eCommerce website, then Tokopedia
             – Fashion Store eCommerce Elementor WooCommerce WordPress Theme is what you need.
           </Typography>
         </div>
       </Fade>
    </div>
  )
};

export default HomepagesHeaderSection;
