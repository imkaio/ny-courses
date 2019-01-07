import { connect } from 'react-redux';
import StaticPage from 'components/static-page';
import getStatic from 'data/actions/static-page';

export default connect(
  ({ staticPage }) => staticPage,
  dispatch => ({
    loadStatic: staticPage => dispatch(getStatic(staticPage))
  })
)(StaticPage);
