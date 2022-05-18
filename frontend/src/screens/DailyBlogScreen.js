import React, { useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import { getAllBlogs } from "../actions/blogActions";
import Loader from "../components/Loader";
import Message from "../components/Message";

const DailyBlogScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBlogs());
  }, []);

  const { blogInfo, loading, error } = useSelector((state) => state.blogList);
  
  return (
    <>
      <div
        style={{
          marginBottom: 10,
        }}
      >
        {/* create and see all article button */}

        <NavLink
          to="blog-create"
          style={{
            marginLeft: 15,
          }}
        >
          <Button variant="success">Create</Button>
        </NavLink>
        <NavLink
          to={`/blog/user/${6225551651}`}
          style={{
            marginLeft: 15,
          }}
        >
          <Button>See all your articles</Button>
        </NavLink>
      </div>

      {/* All the blogs are shown here */}
      <Row>
        {loading ? (
          <Loader />
        ) : error ? (
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Message variant="danger">{error}</Message>
          </div>
        ) : (
          blogInfo?.map((blog) => (
            <Col key={blog._id} lg={6} style={{ marginBottom: 60 }}>
              <BlogCard blog={blog} />
            </Col>
          ))
        )}
      </Row>
    </>
  );
};

export default DailyBlogScreen;
