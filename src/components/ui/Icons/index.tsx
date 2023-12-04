import IconTemplate from './IconTemplate.tsx';
import arrow from '../../../assets/icons/arrow.svg';
import error from '../../../assets/icons/error.svg';

export const ArrowIcon = ({...rest}) => (
  <IconTemplate src={arrow} alt="иконка назад" {...rest} />
);

export const ErrorIcon = ({...rest}) => (
  <IconTemplate src={error} alt="ошибка" {...rest}/>
);
