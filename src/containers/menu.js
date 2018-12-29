import { connect } from 'react-redux';
import Menu from 'components/menu';

export default connect(({ menu }) => menu)(Menu);
