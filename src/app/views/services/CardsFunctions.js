import React, {Component, PropTypes} from "react";
import _ from "lodash";

export default {
  nextId: (cards) => {
    return _.last(cards).id +1
  }
}
