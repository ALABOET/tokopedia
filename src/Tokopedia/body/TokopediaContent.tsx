import classNames from './TokopediaContent.module.scss'
import { Fade } from '@mui/material';
import { observer } from 'mobx-react';
import IntroductionSection from './bodyComponents/IntroductionSection';
import store from '../../store/store';
import HomepagesHeaderSection from './bodyComponents/HomepagesHeaderSection';
import HomepagesStyleSection from './bodyComponents/HomepagesStyleSection';
import BuilderSection from "./bodyComponents/BuilderSection";

const TokopediaContent = observer(() => {
  return (
    <Fade
      in={store.pageIsLoaded}
      timeout={1500}
    >
      <div className={classNames.content_root}>
        <IntroductionSection />
        <div className={classNames.bodyComponents_homePages}>
          <HomepagesHeaderSection />
          <HomepagesStyleSection />
        </div>
        <BuilderSection />
      </div>
    </Fade>
  )
});

export default TokopediaContent;
