import React from "react";
import { Link } from "react-router-dom";
import "./ImageView.css";
const ImageView = (props) => {
  console.log(props);
  const {
    largeImageURL,
    tags,
    user: owner,
    pageURL,
  } = props.location.state.image;
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-sm-10 m-auto">
          <div className="imageView__container">
            <img
              src={largeImageURL}
              alt={tags}
              className="imageView__img img-responsive"
            />
            <div className="imageView__copyright">
              <p> &copy; Pixabay</p>
            </div>
            <div className="imageView__text">
              <h4>
                Credits:
                <span> {owner}</span>
              </h4>
              <h4>
                Download:
                <span>
                  <a href={pageURL} target="_blank">
                    Go to Download
                  </a>
                </span>
              </h4>
            </div>
          </div>
        </div>
      </div>
      <button
        className="btn btn-outline-danger btn-lg"
        style={{ display: "block", margin: "auto" }}
      >
        <Link className="active" to="/">
          Go Back
        </Link>
      </button>
    </div>
  );
};

export default ImageView;
