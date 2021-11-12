import { connect } from 'react-redux';
import { withLoading } from './withLoading';

const withLoadingStarships = (component: any) => {
  const mapStateToProps = (state: any) => {
    return {
      loading: state.starships.loading,
    };
  };

  return connect(mapStateToProps)(withLoading(component));
};
export default withLoadingStarships;
