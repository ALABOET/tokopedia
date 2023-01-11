import { FC } from 'react';
import classNames from '../bodyComponents/BodyComponents.module.scss'
import HomepagesStyleComponent from "../../../components/HomepagesStyleComponent";
import { useInView } from 'react-intersection-observer';
import store from "../../../store/store";

const HomepagesStyleSection: FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      className={classNames.bodyComponents_homePagesStyle}
    >
      {store.stylesArray.map((elem, index) => {
        return (
          <HomepagesStyleComponent
            src={`/pics/${elem.src}.jpg`}
            orderNumber={index}
            isInView={inView}
            name={elem.name}
          />)
      })}
    </div>
  )
};

export default HomepagesStyleSection;
