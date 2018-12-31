import { connect } from 'react-redux';
import FeaturedPackages from 'components/packages/featured';
import { fetchPackages } from 'data/actions/packages';
import { toggleModal } from 'data/actions/modal';

export default connect(
  ({ packages }) => ({
    loading: packages.loading,
    loaded: packages.loaded,
    error: packages.error,
    payload: packages.payload.slice(0, 3)
  }),
  dispatch => ({
    getPackages: () => dispatch(fetchPackages()),
    openModal: id => dispatch(toggleModal(id))
  })
)(FeaturedPackages);
