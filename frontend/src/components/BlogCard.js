import React from "react";
import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <Card
      style={{
        borderRadius: 5,
      }}
    >
      <Card.Img
        style={{
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
          height: 300,
          overflow: "hidden",
          objectFit: "cover",
        }}
        variant="top"
        src={blog?.basePicture}
      />
      <Card.Body>
        <NavLink to={{ pathname: `blog/${blog?._id}`, state: { blog } }}>
          <Card.Title>{blog?.title}</Card.Title>
        </NavLink>
   
      </Card.Body>
    </Card>
  );
};

export default BlogCard;
