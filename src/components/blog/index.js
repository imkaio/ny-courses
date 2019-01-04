import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Consumer } from 'app/client/context';
import { formatDate } from 'app/utils/functions';

class Blog extends Component {
  static propTypes = {
    posts: PropTypes.array,
    getPosts: PropTypes.func,
    loading: PropTypes.bool
  }

  componentDidMount() {
    return !this.props.posts?.length && this.props.getPosts();
  }

  render() {
    const highlightPosts = this.props.posts.filter(post => post.highlight);
    const posts = this.props.posts.filter(post => !post.highlight);

    return (
      <Consumer>
        {content => (
          <section className="blog">
            <div className="container">
              <h1 className="blog__title">{content.BLOG}</h1>

              {!highlightPosts.length && !posts.length && !this.props.loading ? (
                <span className="blog__no-posts">{content.SEM_POSTS}</span>
              ) : (
                <Fragment>
                  {!!highlightPosts.length && (
                    <Fragment>
                      <h2 className="blog__subtitle">{content.MAIS_LIDOS}</h2>
                      <div className="row">
                        {highlightPosts.map(post => (
                          <article className="col-xs-4" key={post.id}>
                            <Link className="blog__post" to={`/blog/${post.id}`}>
                              <div className="blog__post-info">
                                <h1 className="blog__post-title">{post.title}</h1>
                                <p className="blog__post-date">{formatDate(post.date, content)}</p>
                                <span className="blog__post-meta">{content.POST_POR}: {post.author}</span>
                                <span className="blog__post-meta">{content.PUBLICADO}: {post.publisher}</span>

                                <button className="blog__post-button">{content.LER}</button>
                              </div>

                              {post.image && (
                                <img className="blog__post-image" src={post.image} alt={post.title} />
                              )}
                            </Link>
                          </article>
                        ))}
                      </div>
                    </Fragment>
                  )}

                  {!!posts.length && (
                    <Fragment>
                      <h2 className="blog__subtitle">{content.TALVEZ_POSSA_GOSTAR}</h2>
                      {posts.map(post => (
                        <article className="col-xs-4" key={post.id}>
                          <Link className="blog__post" to={`/blog/${post.id}`}>
                            <div className="blog__post-info">
                              <h1 className="blog__post-title">{post.title}</h1>
                              <p className="blog__post-date">{formatDate(post.date, content)}</p>
                              <span className="blog__post-meta">{content.POST_POR}: {post.author}</span>
                              <span className="blog__post-meta">{content.PUBLICADO}: {post.publisher}</span>

                              <button className="blog__post-button">{content.LER}</button>
                            </div>

                            {post.image && (
                              <img className="blog__post-image" src={post.image} alt={post.title} />
                            )}
                          </Link>
                        </article>
                      ))}
                    </Fragment>
                  )}
                </Fragment>
              )}
            </div>
          </section>
        )}
      </Consumer>
    );
  }
}

export default Blog;
