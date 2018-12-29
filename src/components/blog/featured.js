import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Consumer } from '../../client/context';

class FeaturedBlog extends Component {
  static propTypes = {
    posts: PropTypes.array,
    getBlogPosts: PropTypes.func
  }

  componentDidMount() {
    this.props.getBlogPosts();
  }

  render() {
    return (
      <Consumer>
        {content => (
          <section className="blog-featured">
            <div className="container">
              <div className="row">
                <div className="col-xs-3 col-xs-offset-1">
                  <h1 className="blog-featured__title">{content.BLOG}</h1>
                  <p className="blog-featured__description">{content.BLOG_DESCRICAO}</p>
                  <Link className="blog-featured__button" to="/blog">{content.LER_MAIS}</Link>
                </div>

                {this.props.posts.map(post => (
                  <article key={post.id} className="col-xs-4">
                    <Link className="blog-featured__item" to={`/blog/${post.id}`}>
                      <div className="blog-featured__item-wrapper">
                        <img className="blog-featured__item-image" src={post.images[0]} alt={post.title} />
                      </div>
                      <div className="blog-featured__item-info">
                        <h1 className="blog-featured__item-title">{post.title}</h1>
                        <p className="blog-featured__item-description">{post.description}</p>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}
      </Consumer>
    );
  }
}

export default FeaturedBlog;
