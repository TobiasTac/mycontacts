import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Arrow from '../../assets/images/icons/arrow.svg';

import { Container } from './styles';

export default function PageHeader({ title }) {
  return (
    <Container>
      <Link to="/">
        <img src={Arrow} alt="Arrow" />
        <span> Voltar </span>
      </Link>
      <h1>
        {title}
      </h1>
    </Container>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
