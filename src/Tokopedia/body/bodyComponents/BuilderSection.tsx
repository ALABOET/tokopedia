import { FC } from 'react';
import classNames from '../bodyComponents/BodyComponents.module.scss'
import { useInView } from 'react-intersection-observer';
import { Fade, Typography } from '@mui/material';
import { useMedia } from 'use-media';

const BuilderSection: FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const isMobile = useMedia( '(max-width: 769px)');
  return (
    <div
      className={classNames.bodyComponents_builderSection}
      ref={ref}
    >
      <Fade
        in={inView}
        timeout={1500}
      >
        <div className={classNames.bodyComponents_builderSection__content}>
          <div style={{ alignSelf: 'center' }}>
            <img
              src="/logos/builder-logo.png"
              style={{ width: '100px'}}
            />
            <Typography variant="h5">The #1 Drag and Drop Website Builder</Typography>
            <Typography variant="subtitle1">Elementor is the best FREE WordPress Website Builder, Build websites that load faster,
              and speed up the process of building them.
            </Typography>
            </div>
          {!isMobile && <img
            src="/pics/builder-main.jpg"
            style={{ width: '450px'}}
          />}
        </div>
      </Fade>
    </div>
  )
};

export default BuilderSection;
