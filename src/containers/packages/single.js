import { connect } from 'react-redux';
import SinglePackages from 'components/packages/single';
import { fetchPackages, fetchSinglePackage } from 'data/actions/packages';

export default connect(
  ({ packages }) => packages,
  dispatch => ({
    getPackages: () => dispatch(fetchPackages()),
    getSinglePackage: id => dispatch(fetchSinglePackage(id))
  })
)(SinglePackages);
