import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { createBlog } from "../actions/blogActions";

import Message from "../components/Message";
import Loader from "../components/Loader";

const BlogCreateScreen = () => {
  const { userInfo } = useSelector((state) => state.userLogin);
  const history = useHistory();

  const [userName, setUserName] = useState(userInfo.name || "");
  const [title, setTitle] = useState("");
  const [basePicture, setBasePicture] = useState("");
  const [content, setContent] = useState("");
  const [uploading, setUploading] = useState(false);

  const dispatch = useDispatch();

  const { blogInfo, error } = useSelector((state) => state.createBlog);

  const onCreateHandler = (e) => {
    dispatch(
      createBlog({
        userName,
        title,
        basePicture,
        content,
      })
    );
    setBasePicture("");
    setTitle("");
    setUserName("");
    setContent("");

    history.push(`/blog/${blogInfo?._id}`);
  };

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    setUploading(true);
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const { data } = await axios.post("/api/upload", formData, config);
      setBasePicture(data);
      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };

  return (
    <div>
      <h1>Create Article</h1>
      {error && <Message variant="danger">{error}</Message>}
      <Form>
        {/* Name of the user */}
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name."
            value={userName}
            disabled
          />
        </Form.Group>
        {/* title of the article */}
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Title of the article</Form.Label>
          <Form.Control
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        {/* base picture for the article */}
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Base picture for article</Form.Label>
          <Form.File
            id="image-file"
            label="Choose your base picture for article."
            custom
            onChange={uploadFileHandler}
          ></Form.File>
          {uploading && <Loader />}
        </Form.Group>
        {/* actual content of the article */}
        <Editor
          apiKey="cbea9mc2ggrrrxfnscyjuk8170r8odauy7b3mkcurvj0slau"
          value={content}
          onEditorChange={(e) => setContent(e)}
          init={{
            min_height: 500,
            plugins: [
              "advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker",
              "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
              "table emoticons template  help",
            ],
            toolbar:
              "undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | " +
              "bullist numlist outdent indent | link image | print preview media fullpage | " +
              "forecolor backcolor emoticons | help",
            menu: {
              favs: {
                title: "My Favorites",
                items: "code visualaid | searchreplace | emoticons",
              },
            },
            menubar: "favs file edit view insert format tools table help",
          }}
        />
        <br />
        <Button onClick={onCreateHandler} variant="success">
          Create
        </Button>
      </Form>
    </div>
  );
};

export default BlogCreateScreen;
