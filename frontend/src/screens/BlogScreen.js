import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { Markup } from "interweave";
import moment from "moment";

import { Avatar } from "react-profile-avatar";
import "react-profile-avatar/dist/index.css";
import { deleteBlog, getBlogbyId } from "../actions/blogActions";
import { useDispatch, useSelector } from "react-redux";

import Message from "../components/Message";
import Loader from "../components/Loader";

const BlogScreen = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userLogin);
  const params = useParams();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteArticleHandler = () => {
    dispatch(deleteBlog(blogInfo?.user, blogInfo?._id));
    history.push("/blogs");
  };

  const updateArticleHandler = () => {
    history.replace(`/blog-edit/${blogInfo?._id}`);
  };

  const { blogInfo, loading, error } = useSelector((state) => state.blgById);

  useEffect(() => {
    dispatch(getBlogbyId(params.id));
  }, []);

  useEffect(() => {}, [loading]);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Button
            onClick={() => {
              history.push("/blogs");
            }}
          >
            Back
          </Button>
        </div>
        {userInfo?._id === blogInfo?.user ? (
          <div>
            <Button
              onClick={() => handleShow()}
              variant="danger"
              style={{
                marginRight: 50,
              }}
            >
              Delete
            </Button>
            <Button variant="warning" onClick={updateArticleHandler}>
              Update
            </Button>
          </div>
        ) : null}
      </div>

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
        <div
          style={{
            width: "85%",
            margin: "auto",
          }}
        >
          <div
            style={{
              fontSize: 35,
              margin: 0,
              color: "black",
              borderBottom: "4px solid",
              marginTop: 15,
              letterSpacing: 0,
            }}
          >
            {blogInfo?.title}
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: 15,
            }}
          >
            <Avatar
              name={blogInfo?.userName}
              size={55}
              style={{
                marginRight: 10,
              }}
            />
            <div>
              <p
                style={{
                  fontSize: 19,
                  margin: 0,
                  color: "black",
                }}
              >
                {blogInfo?.userName}
              </p>
              <span>Updated By {moment(blogInfo?.updatedAt).format("LL")}</span>
            </div>
          </div>
          {/* Base Image */}
          <div
            style={{
              width: "90%",
              margin: "auto",
              marginTop: 15,
            }}
          >
            <img
              src={blogInfo?.basePicture}
              style={{
                width: "100%",
                height: 350,
                borderRadius: 2,
                objectFit: "cover",
              }}
            />
          </div>
          {/* actual content */}
          <div>
            <Markup content={blogInfo?.content} />
          </div>
        </div>
      )}

      {show && (
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Delete Article</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to delete this article?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={deleteArticleHandler}>
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default BlogScreen;
