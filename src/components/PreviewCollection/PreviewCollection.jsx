import React from "react";
import "./PreviewCollection.scss";
import "../CollectionItem/CollectionItem";
import CollectionItem from "../CollectionItem/CollectionItem";

const PreviewCollection = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem {...otherItemProps} key={id} />
        ))}
    </div>
  </div>
);
export default PreviewCollection;
