import { RotatingLines } from 'react-loader-spinner';
import s from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={s.loading}>
      <RotatingLines
        strokeColor="rgba(0, 0, 255)"
        strokeWidth="5"
        animationDuration="0.75"
        width="50"
        visible={true}
      />
    </div>
  );
};
export default Loader;