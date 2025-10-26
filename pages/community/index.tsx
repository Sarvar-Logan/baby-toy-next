import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Box, Container, Pagination, Stack } from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";

const Community: NextPage = () => {
  const blogPosts = [
    {
      id: 1,
      date: "March 24, 2024",
      title: "Enhancing motor skills through play",
      excerpt: "Motor skills are divided into two categories: fine motor skills and gross motor skills. Toys play a vital role in the development of both.",
      category: "Education and Development",
      image: "/img/products/image4.svg",
      imageAlt: "Children playing with educational toys"
    },
    {
      id: 2,
      date: "Feb 12, 2024",
      title: "Fostering problem solving skills",
      excerpt: "Problem-solving is a critical skill that children begin to develop from a very young age through interactive and engaging play. Toys that challenge children to think and strategize encourage this development.",
      category: "Education and Development",
      image: "/img/products/image4.svg",
      imageAlt: "Kids solving puzzles together"
    },
    {
      id: 3,
      date: "Jun 16, 2023",
      title: "Emotional and Social Development",
      excerpt: "Toys also help children express their emotions and understand those of others, which is foundational for developing empathy and interpersonal skills.",
      category: "Customer Stories",
      image: "/img/products/image4.svg",
      imageAlt: "Children sharing toys and playing together"
    },
    {
      id: 4,
      date: "Jun 16, 2023",
      title: "Emotional and Social Development",
      excerpt: "Toys also help children express their emotions and understand those of others, which is foundational for developing empathy and interpersonal skills.",
      category: "Customer Stories",
      image: "/img/products/image4.svg",
      imageAlt: "Children sharing toys and playing together"
    }
  ];

  // Categories data
  const categories = [
    { name: "Education and Development", count: 5 },
    { name: "Toy Safety", count: 3 },
    { name: "Toy Trends", count: 7 },
    { name: "Customer Stories", count: 4 },
    { name: "Events and Promotions", count: 2 }
  ];

  // Recent posts data
  const recentPosts = [
    {
      title: "Enhancing motor skills through play",
      date: "March 24, 2024",
      image: "/img/products/image4.svg"
    },
    {
      title: "Fostering problem solving skills",
      date: "Feb 12, 2024",
      image: "/img/products/image4.svg"

    },
    {
      title: "Emotional and Social Development",
      date: "Jun 16, 2023",
      image: "/img/products/image4.svg"

    }
  ];

  // Popular tags
  const popularTags = [
    "Learn & Inspire", "Family fun", "Toy Trends", "Top Toys", "Toy Reviews", "Tips & Tricks"
  ];
  // Tab uchun 
  const [activeTab, setActiveTab] = useState<"description" | "reviews">("description");



  // PAGINATION UCHUN 
  const [page, setPage] = useState(1);

  const itemsPerPage = 3;
  const totalPages = Math.ceil(blogPosts.length / itemsPerPage);

  // Hozirgi sahifa uchun productlar
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPosts = blogPosts.slice(startIndex, endIndex);


  const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    // window.scrollTo({ top: 0, behavior: 'smooth' }); 
  };

  return (
    <>
      <div className="blog-page">
        {/* Breadcrumb */}
        <div className="breadcrumb">
          <div className="container">
            <div className="breadcrumb-content">
              <a href="/">Home</a>
              <span>/</span>
              <span>News</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container">
          <div className="main-content">
            {/* Blog Posts Section */}
            <div className="blog-posts">
              <h1 className="page-title">Blog Standard</h1>

              {/* Search Bar */}
              <div className="search-bar">
                <input type="text" placeholder="Search..." />
                <button className="search-button">
                  <i className="fas fa-search"></i>
                </button>
              </div>

              {/* Blog Posts */}
              <div className="posts-container">
                {currentPosts.slice(0, 3).map(post => (
                  <div key={post.id} className="blog-post">
                    <div className="post-image">
                      <img src={post.image} alt={post.imageAlt} />
                    </div>
                    <div className="post-meta">
                      <span className="post-date">{post.date}</span>
                      <span className="post-category">{post.category}</span>
                    </div>
                    <h2 className="post-title">{post.title}</h2>
                    <p className="post-excerpt">{post.excerpt}</p>
                    <a href="#" className="read-more">
                      Read More <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                ))}
                <Stack className="pagination-config">
                  {blogPosts.length !== 0 && (
                    <Stack className="pagination-box">
                      <Pagination
                        count={totalPages}
                        page={page}
                        onChange={handlePageChange}
                        color="primary"
                        shape="rounded"
                      />
                    </Stack>
                  )}
                </Stack>
              </div>
            </div>




            {/* Sidebar */}
            <div className="sidebar">
              {/* Categories */}
              <div className="sidebar-section">
                <h3 className="sidebar-title">Categories</h3>
                <ul className="categories-list">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <a href="#">
                        {category.name}
                        <span className="category-count">{category.count}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="sidebar-section">
                <h3 className="sidebar-title">Recent Posts</h3>
                <div className="recent-posts">
                  {recentPosts.map((post, index) => (
                    <div key={index} className="recent-post">
                      <div className="recent-post-img">
                        <img src={post.image} alt={post.title} />
                      </div>
                      <div className="recent-post-content">
                        <h4>{post.title}</h4>
                        <span className="recent-post-date">{post.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Popular Tags */}
              <div className="sidebar-section">
                <h3 className="sidebar-title">Popular Tag</h3>
                <div className="tags-list">
                  {popularTags.map((tag, index) => (
                    <a key={index} href="#" className="tag">{tag}</a>
                  ))}
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
export default withLayoutBasic(Community)