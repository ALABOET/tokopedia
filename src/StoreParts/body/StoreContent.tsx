import classNames from './StoreContent.module.scss'
import { Fade } from '@mui/material';
import { observer } from 'mobx-react';
import IntroductionSection from './bodyComponents/IntroductionSection';
import store from '../../stores/MainStore';
import HomepagesHeaderSection from './bodyComponents/HomepagesHeaderSection';
import HomepagesStyleSection from './bodyComponents/HomepagesStyleSection';

const StoreContent = observer(() => {
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
      </div>
    </Fade>
  )
});

export default StoreContent;
