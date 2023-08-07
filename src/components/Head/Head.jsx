import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';
import { _appName } from '@/configs';

function Head({ title = '', description = '' }) {
  return (
    <Helmet title={title ? `${title} | ${_appName}` : undefined} defaultTitle={_appName}>
      <meta name="description" content={description} />
    </Helmet>
  );
}

Head.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Head;
