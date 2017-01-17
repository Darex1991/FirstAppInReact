import React, {Component, PropTypes} from 'react';
import Profile from './statelessComponents';
import EditCard from './EditCard';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './cssTransitionGroup.sass'

export default class CardComponent extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    editCard: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      item: this.props.item,
    };
  }

  displayEditForm = (event) => {
    const item = {...this.state.item, editCard: !this.state.item.editCard};
    this.setState({item});
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <Profile item={this.props.item}/>
        <button onClick={this.displayEditForm}>Edit</button>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {this.state.item.editCard && <EditCard item={this.props.item} editCard={this.props.editCard}/>}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
