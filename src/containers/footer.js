import { connect } from 'react-redux';
import Footer from 'components/footer';

export default connect(({ footer }) => footer)(Footer);
