import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
// compose lets us pass HOC by passing functions
import { compose } from "redux";

import { selectIsCollectionFetching } from "../../redux/shop/shop-selectors";

import WithSpinner from "../../components/WithSpinner/WithSpinner";
import CollectionsOverview from "./CollectionsOverview";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
