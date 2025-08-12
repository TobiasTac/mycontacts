import PropTypes from 'prop-types';

import ReactPortal from '../ReactPortal';
import Spinner from '../Spinner';
import { Overlay } from './styles';

import useAnimatedOut from '../../hooks/useAnimatedOut';

export default function Loader({ isLoading }) {
  const { shouldRender, animatedElementRef } = useAnimatedOut(isLoading);

  if (!shouldRender) {
    return null;
  }

  return (
    <ReactPortal containerId="loader-root">
      <Overlay $isLeaving={!isLoading} ref={animatedElementRef}>
        <Spinner />
      </Overlay>
    </ReactPortal>
  );
}

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
