import React from "react";
import MenuItem from "../MenuItem/MenuItem";
import "./Directory.scss";
import { connect } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory-selector";
import { createStructuredSelector } from "reselect";

export const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {this.state.sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
