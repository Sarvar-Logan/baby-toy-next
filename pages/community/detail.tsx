import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Box, Container, Stack } from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const CommunityDetail: NextPage = () => {
  const [likes, setLikes] = useState(24);
  const [views, setViews] = useState(156);
  const [isLiked, setIsLiked] = useState(false);


  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };
  return (
    <>
      <div className="blog-detail-page">
        {/* Breadcrumb */}
        <div className="breadcrumb">
          <div className="container">
            <div className="breadcrumb-content">
              <a href="/">Home</a>
              <span>/</span>
              <a href="/blog">Blog</a>
              <span>/</span>
              <span>Enhancing motor skills through play</span>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="blog-detail-wrapper">
            {/* Main Content */}
            <div className="blog-main-content">
              {/* Blog Header */}
              <div className="blog-header">
                <h1 className="blog-title">Enhancing motor skills through play</h1>

                <div className="blog-meta">
                  <div className="author-info">
                    <div className="author-avatar"></div>
                    <div className="author-details">
                      <span className="author-name">Sarah Johnson</span>
                      <div className="post-date">
                        <span>March 24, 2024</span>
                        <span className="divider">•</span>
                        <span>5 min read</span>
                      </div>
                    </div>
                  </div>

                  {/* Like and View Counts */}
                  <div className="engagement-stats">
                    <div className="stat-item">
                      <button
                        className={`like-btn`}
                        onClick={handleLike}
                      >
                        <FavoriteBorderIcon sx={{color: "#6c757d"}} className={`like-icon ${isLiked ? 'liked' : ''}`} />
                      </button>
                      <span>{likes}</span>

                    </div>
                    <div className="stat-item">
                      <div className="views-count">
                        <VisibilityIcon />
                        {views} views
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Featured Image */}
              <div className="featured-image">
                <img src="/img/headerImages/Rectangle 51.svg" alt="Children playing with educational toys" />
              </div>

              {/* Blog Content */}
              <div className="blog-content">
                <p className="intro-text">
                  Motor skills are divided into two categories: fine motor skills and gross motor skills.
                  Toys play a vital role in the development of both.
                </p>
              </div>

              {/* Tabs */}
              <div className="product-tabs">
            

                <div className="tab-content">
                    <div className="reviews-section">
                      <h3>Customer Reviews (14)</h3>
                      <div className="review">
                        <strong>Jane Doe</strong>
                        <span className="stars">★★★★★</span>
                        <p>My kid absolutely loves this toy! Great quality and colorful design.</p>
                      </div>

                      <div className="review">
                        <strong>John Smith</strong>
                        <span className="stars">★★★★☆</span>
                        <p>Very educational toy. The shapes fit perfectly and colors are vibrant.</p>
                      </div>

                      <form className="review-form">
                        <h5>Leave a review</h5>
                        <textarea placeholder="Write your review..." />
                        <button type="submit">Submit Review</button>
                      </form>
                    </div>
                </div>
              </div>
            </div>


            {/* Sidebar */}
            <div className="blog-sidebar">
              {/* About Widget */}
              <div className="sidebar-widget about-widget">
                <h3>About the Blog</h3>
                <p>
                  Discover the latest insights on child development, educational toys,
                  and parenting tips from our team of experts.
                </p>
              </div>

              {/* Categories */}
              <div className="sidebar-widget">
                <h3>Categories</h3>
                <ul className="categories-list">
                  <li><a href="#">Education and Development</a></li>
                  <li><a href="#">Toy Safety</a></li>
                  <li><a href="#">Toy Trends</a></li>
                  <li><a href="#">Customer Stories</a></li>
                  <li><a href="#">Events and Promotions</a></li>
                </ul>
              </div>

              {/* Tags */}
              <div className="sidebar-widget">
                <h3>Popular Tags</h3>
                <div className="tags-list">
                  <a href="#" className="tag">Learn & Inspire</a>
                  <a href="#" className="tag">Family fun</a>
                  <a href="#" className="tag">Toy Trends</a>
                  <a href="#" className="tag">Top Toys</a>
                  <a href="#" className="tag">Toy Reviews</a>
                  <a href="#" className="tag">Tips & Tricks</a>
                </div>
              </div>


              {/* Promo Banner */}
              <div className="promo-banner">
                <h3 className="promo-title">Dream Toys at Delightful Prices!</h3>
                <p className="promo-text">15% Off on Kids' Toys and Gifts!</p>
                <a href="#" className="promo-btn">Shop now</a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
export default withLayoutBasic(CommunityDetail)