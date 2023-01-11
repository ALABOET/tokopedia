import { FC } from 'react';
import classNames from './TokopediaFooter.module.scss'
import {Button, Slide, Typography} from '@mui/material';
import { useInView } from 'react-intersection-observer';

const TokopediaFooter: FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      className={classNames.footer_root}
    >
      <Slide
        in={inView}
        direction="up"
        timeout={1000}
      >
        <div>
          <Typography
            variant="h4"
            sx={{ textAlign: 'center' }}
          >
            Feeling in love?
            <br/>
            Purchase Tokopedia!
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ textAlign: 'center', color: 'grey' }}
          >
            Visually exceptional. Powerful inside. Clean & Modern.
          </Typography>
        </div>
      </Slide>
      <Button
        variant="contained"
        color="success"
        sx={{ marginTop: '30px'}}
        >
          Buy for $19
      </Button>
      <div className={classNames.footer_root__bottom}>
        <Typography variant="caption">Powered by ALABOET</Typography>
      </div>
    </div>
  )
};

export default TokopediaFooter;
