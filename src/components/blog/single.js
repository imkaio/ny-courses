import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Isvg from 'react-inlinesvg';
import { Link } from 'react-router-dom';
import { Consumer } from 'app/client/context';
import { formatDate } from 'app/utils/functions';
import CustomMarkdown from 'app/utils/custom-markdown';

class SingleBlog extends Component {
  static propTypes = {
    loaded: PropTypes.bool,
    match: PropTypes.object,
    history: PropTypes.object,
    getPost: PropTypes.func,
    post: PropTypes.object,
    length: PropTypes.number,
    params: PropTypes.object,
    related: PropTypes.array,
    location: PropTypes.object,
    getBlogPosts: PropTypes.func,
    id: PropTypes.string
  }

  state = {
    active: 0
  }

  componentDidMount() {
    if (!this.props.match.params.id) return this.props.history.push('/blog');
    if (!this.props.related?.length) return this.props.getBlogPosts();
    return this.props.getPost(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    const payloadLoaded = !prevProps.related?.length && this.props.related?.length;
    const routeChanged = prevProps.match.params.id !== this.props.match.params.id;

    if (payloadLoaded || (prevProps.post.id && routeChanged)) {
      this.props.getPost(this.props.match.params.id);
    }
  }

  handleNavigation = isNext => () => {
    const { images } = this.props.post;

    if (isNext) {
      return this.setState(state => ({
        active: state.active + 1 < images?.length
          ? state.active + 1
          : 0
      }));
    }

    return this.setState(state => ({
      active: state.active <= 0
        ? images.length - 1
        : state.active - 1
    }));
  }

  handleShare = () => {
    const baseUrl = 'https://www.facebook.com/sharer/sharer.php?u=';
    const siteUrl = process.env.SITE_URL;
    const post = this.props.location.pathname;

    window.open(`${baseUrl}${siteUrl}${post}`, 'popup', 'width=600,height=600');
  }

  render() {
    const { post, related } = this.props;
    const relatedPosts = related.filter(relatedItem => post.related?.includes(relatedItem.id));

    return (
      <Consumer>
        {content => (
          <section className="single-post">
            <div className="container">
              <div className="single-post__wrapper">
                {post.images && post.images[0] && (
                  <img className="single-post__image" src={post.images[0]} alt={post.title} />
                )}
              </div>

              <div className="row">
                <div className="col-xs-5 col-xs-offset-1">
                  <h1 className="single-post__title">{post.title}</h1>
                </div>

                <div className="col-xs-4 col-xs-offset-1">
                  <div className="single-post__info">
                    <ul className="single-post__categories">
                      {post.categories?.map(category => (
                        <li key={category} className="single-post__category">{category}</li>
                      ))}
                    </ul>

                    <time className="single-post__date" dateTime={post.date}>{formatDate(post.date, content)}</time>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-10 col-xs-offset-1">
                  <div className="single-post__actions">
                    <span className="single-post__share" onClick={this.handleShare}>{content.COMPARTILHAR_FACEBOOK}</span>
                    <div className="single-post__metas">
                      <span className="single-post__meta">{content.POST_POR}: {post.author}</span>
                      <span className="single-post__meta">{content.PUBLICADO}: {post.publisher}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-8 col-xs-offset-1">
                  <CustomMarkdown
                    classes={{
                      paragraph: 'single-post__paragraph',
                      blockquote: 'single-post__quote',
                      link: 'single-post__link'
                    }}
                    source={post.description}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-xs-10 col-xs-offset-1">
                  <div className="single-post__gallery">
                    <div className="single-post__arrow single-post__arrow--left" onClick={this.handleNavigation(false)}>
                      <Isvg src="/images/icon-arrow.svg" />
                    </div>
                    <div className="single-post__arrow single-post__arrow--right" onClick={this.handleNavigation(true)}>
                      <Isvg src="/images/icon-arrow.svg" />
                    </div>
                    <div className="single-post__gallery-quantity">
                      {this.state.active + 1 < 10 ? `0${this.state.active + 1}` : this.state.active + 1}
                      /{post.images?.length < 10 ? `0${post.images?.length}` : post.images?.length}
                    </div>

                    {post.images?.map((image, index) => (
                      <img key={image} src={image} className={`
                        single-post__gallery-image
                        ${index === this.state.active ? 'single-post__gallery-image--active' : ''}
                      `} />
                    ))}
                  </div>
                </div>
              </div>

              <div className="row">
                <CustomMarkdown
                  source={post.text}
                  className="single-post__text col-xs-9 col-xs-offset-1"
                  classes={{
                    paragraph: 'single-post__paragraph',
                    blockquote: 'single-post__quote',
                    link: 'single-post__link'
                  }}
                />
              </div>

              {!!relatedPosts?.length && (
                <div className="single-post__related">
                  <h2 className="single-post__related-title">{content.POSTS_RELACIONADOS}</h2>
                  <div className="row">
                    {related.map(related => (
                      <article className="col-xs-4" key={related.id}>
                        <Link className="single-blog__item" to={`/pacotes/${related.id}`}>
                          <div className="single-blog__item-info">
                            <h1 className="single-blog__item-title">{related.title}</h1>
                            <time className="single-blog__item-time" dateTime={related.date}>{formatDate(related.date, content)}</time>
                            <span className="single-blog__item-meta">{content.POST_POR}: {related.author}</span>
                            <span className="single-blog__item-meta">{content.PUBLICADO}: {related.publisher}</span>

                            <button className="single-blog__item-button">{content.LER}</button>
                          </div>

                          {related.image && (
                            <img className="single-blog__item-image" src={related.image} alt={related.title} />
                          )}
                        </Link>
                      </article>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}
      </Consumer>
    );
  }
}

export default SingleBlog;

