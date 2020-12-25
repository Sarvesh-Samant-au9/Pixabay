import React, { Component } from "react";
import "../src/Styles/App.css";
import ImageList from "./ImageList/ImageList";
import ImageSearch from "./ImageSearch/ImageSearch";
const ApiKey = `19650097-20d13b266ac441ed24e09b0c9`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      images: [],
      error: null,
    };
  }
  handleRequest = async (e) => {
    e.preventDefault();
    const searchTerm = e.target.elements.searchValue.value;
    const url = `https://pixabay.com/api/?key=${ApiKey}&q=${searchTerm}&image_type=photo`;
    // const searchTerm = e.target.elementFromHtmlDocumnetWhoseNameiSEqualto.name="name Attribute of Tag".value
    const request = await fetch(`${url}`);
    const convertJson = await request.json();
    // console.log(convertJson.hits);
    {
      searchTerm
        ? this.setState({ images: convertJson.hits, error: null })
        : this.setState({ error: "Please Enter The Value" });
    }
    // this.setState({ images: convertJson.hits });
    // console.log(this.state.images);
    console.log(this.state);
    // console.log(searchTerm);
  };
  // componentDidMount() {
  //   this.handleRequest();
  // }
  componentDidMount() {
    const jsonConvert = localStorage.getItem("imagesToStore");
    const imagesAgainIntoJson = JSON.parse(jsonConvert);
    this.setState({
      images: imagesAgainIntoJson,
    });
  }
  componentDidUpdate() {
    const dataLocalStorage = JSON.stringify(this.state.images);
    localStorage.setItem("imagesToStore", dataLocalStorage);
  }

  render() {
    return (
      <div>
        <ImageSearch handleRequest={this.handleRequest} />
        {/* {this.state.images.length > 0 &&
          this.state.images.map((image) => {
            return <p key={image.id}>{image.tags}</p>;
          })} */}
        {/* {this.state.error === null ? (
          <ImageList imageArray={this.state.images} />
        ) : (
          <div style={{ color: "darkcyan", textAlign: "center" }}>
            {this.state.error}
          </div>
        )} */}

        {this.state.error !== null ? (
          <div>
            <h1 style={{ color: "red", textAlign: "center", fontWeight: 200 }}>
              {this.state.error}
            </h1>
          </div>
        ) : (
          <ImageList imageArray={this.state.images} />
        )}
      </div>
    );
  }
}

export default App;
