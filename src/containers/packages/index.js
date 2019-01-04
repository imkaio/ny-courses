import { connect } from 'react-redux';
import Packages from 'components/packages';
import { fetchPackages } from 'data/actions/packages';
import { toggleModal } from 'data/actions/modal';

export default connect(
  ({ packages }) => ({
    loading: packages.loading,
    loaded: packages.loaded,
    packages: packages.payload,
    error: packages.error
  }),
  dispatch => ({
    getPackages: () => dispatch(fetchPackages()),
    openModal: id => dispatch(toggleModal(id))
  })
)(Packages);
