import React, { Component } from "react";
import ShopData from "./shop-data.js";
import PreviewCollection from "../../components/PreviewCollection/PreviewCollection";

export default class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: ShopData
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <PreviewCollection key={id} {...otherCollectionProps} />
        ))}{" "}
      </div>
    );
  }
}
