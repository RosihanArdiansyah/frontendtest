import React, { useState, useEffect } from "react";
import axios from "axios";

const PhotoView = () => {
  const [photos, setPhoto] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [query, setQuery] = useState("");

  //put keyword into the function
  useEffect(() => {
   getItemTags();
  }, [keyword]);

  //get data from the backend based from the keyword
  const getItemTags = async () => {
    const response = await axios.get(
      `http://localhost:5000/apiSearch?tags=${keyword}`
    ).then(response =>response.data)
    setPhoto(response.data.items);
    console.log(response.data);
    
  };

  //Get keyword from search bar
  const searchData = (e) => {
    e.preventDefault();
    setKeyword(query);
  };

  return (
    <div className="container mt-5">
      <div className="columns">
        <div className="column is-centered">
        {/*search form*/}
          <form onSubmit={searchData}>
            <div className="field has-addons">
              <div className="control is-expanded">
                <input
                  type="text"
                  className="input"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Find something here..."
                />
              </div>
              <div className="control">
                <button type="submit" className="button is-info" data-testid="searchButton">
                  Search
                </button>
              </div>
            </div>
          </form>    

        </div>
      </div>

      {/* showing pictures */}
      <div className="columns is-multiline mt-2">
        {photos.map((photo) => (
          <div className="column is-one-quarter" key={photo.id}>
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={photo.media.m} alt="Image" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">{photo.title}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default PhotoView;
