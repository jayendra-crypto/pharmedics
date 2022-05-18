import React, { useEffect, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";

import Message from "../components/Message";
import Loader from "../components/Loader";

import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getBlogbyId, updateBlog } from "../actions/blogActions";

const BlogEditScreen = () => {
  const { userInfo } = useSelector((state) => state.userLogin);
  const dispatch = useDispatch();
  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    dispatch(getBlogbyId(params.id));
  }, []);

  const { blogInfo, loading, error } = useSelector((state) => state.blgById);

  const [userName, setUserName] = useState();
  const [title, setTitle] = useState("");
  const [basePicture, setBasePicture] = useState("");
  const [content, setContent] = useState("");
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    setUserName(userInfo?.name);
    setTitle(blogInfo?.title);
    setContent(blogInfo?.content);
    setBasePicture(blogInfo?.basePicture);
  }, [userInfo,loading]);

  const onEditHandler = (e) => {
    dispatch(
      updateBlog({
        _id: blogInfo._id,
        user: userInfo._id,
        userName: userInfo.name,
        title,
        content,
        basePicture,
      })
    );

    history.push(`/blog/${blogInfo._id}` , blogInfo);
    
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
      <h1>Edit Article</h1>
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
          <Button onClick={() => onEditHandler()} variant="success">
            Update
          </Button>
        </Form>
      )}
    </div>
  );
};

export default BlogEditScreen;
