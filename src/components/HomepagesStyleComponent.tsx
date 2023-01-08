import classNames from './Components.module.scss'
import {Grow, Typography} from '@mui/material';
type HomepageStyleProps = {
    isInView: boolean,
    src: string,
    orderNumber: number,
    name: string,
}
const HomepagesStyleComponent = ({ isInView, src, orderNumber, name }: HomepageStyleProps) => {
  return (
    <Grow
      in={isInView}
      timeout={500 * orderNumber}
    >
      <div className={classNames.homepage_style}>
        <img
          src={src}
          alt="Error"
          className={classNames.homepage_style__img}
        />
        <Typography sx={{ textAlign: 'center' }}>{name}</Typography>
      </div>
    </Grow>
  )
};

export default HomepagesStyleComponent;
