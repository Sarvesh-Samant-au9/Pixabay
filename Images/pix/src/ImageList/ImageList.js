import React from "react";
import "./ImageList.css";
import { Link } from "react-router-dom";
const ImageList = (props) => {
  console.log(props);
  return (
    <div className="container">
      {props.imageArray.length === 0 ? (
        <h1
          style={{ color: "#ffe3e3", textAlign: "center", fontWeight: "200" }}
        >
          No Data for Entered Term, Kindly Enter some Other Term
        </h1>
      ) : (
        <div className="row">
          {props.imageArray.map((image) => {
            // return <p key={id}>{tags}</p>;
            return (
              <div
                key={image.id}
                className="col-md-4"
                style={{ marginBottom: "2rem" }}
              >
                <div className="imageList__container">
                  <img
                    src={image.largeImageURL}
                    className="imageList__image"
                    alt={image.tags}
                  />
                  <div className="image__details">
                    <Link
                      to={{
                        pathname: `/image/${image.id}`,
                        state: { image: image },
                      }}
                    >
                      <button className="btn-lg btn-outline-success">
                        View
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ImageList;
