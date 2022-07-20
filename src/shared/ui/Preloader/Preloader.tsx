import { FC } from 'react';

import preloader from '../../assets/images/Half-Moon-Loading.svg';

import s from './Preloader.module.css';

const Preloader: FC = () => {
  return <img className={s.preloader} src={preloader} alt="preloader" />;
};

export default Preloader;
