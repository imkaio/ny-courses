import { connect } from 'react-redux';
import Language from 'components/language';
import fetchContent from 'data/actions/content';

export default connect(
  ({ content }) => ({
    language: content.default
  }),
  dispatch => ({
    getContent: language => dispatch(fetchContent(language))
  })
)(Language);
