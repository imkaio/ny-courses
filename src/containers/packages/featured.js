import { connect } from 'react-redux';
import FeaturedPackages from '../../components/packages/featured';
import fetchPackages from '../../data/actions/packages';

export default connect(
  ({ packages }) => ({
    ...packages,
    payload: packages.payload.slice(0, 3)
  }),
  dispatch => ({
    getPackages: () => dispatch(fetchPackages())
  })
)(FeaturedPackages);
