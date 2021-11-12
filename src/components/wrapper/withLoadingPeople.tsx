import { connect } from 'react-redux';
import { withLoading } from './withLoading';

const withLoadingPeople = (component: any) => {
  const mapStateToProps = (state: any) => {
    return {
      loading: state.people.loading,
    };
  };

  return connect(mapStateToProps)(withLoading(component));
};
export default withLoadingPeople;
