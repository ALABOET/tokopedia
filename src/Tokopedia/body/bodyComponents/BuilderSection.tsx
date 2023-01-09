import { FC } from 'react';
import classNames from '../bodyComponents/BodyComponents.module.scss'
import { useInView } from 'react-intersection-observer';
import {Fade, Typography} from "@mui/material";

const BuilderSection: FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
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
          <div>
            <img
              src="/logos/builder-logo.png"
              style={{ width: '100px'}}
            />
            <Typography variant="h5">The #1 Drag and Drop Website Builder</Typography>
            <Typography variant="subtitle1">Elementor is the best FREE WordPress Website Builder, Build websites that load faster,
              and speed up the process of building them.
            </Typography>
            </div>
          <img
            src="/pics/builder-main.jpg"
            style={{ width: '450px'}}
          />
        </div>
      </Fade>
    </div>
  )
};

export default BuilderSection;
