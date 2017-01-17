import React, {Component, PropTypes} from 'react';
import Profile from './statelessComponents';
import EditCard from './EditCard';

export default class CardComponent extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      item: this.props.item,
    };
  }

  displayEditForm = (event) => {
    this.state.item.editCard = !this.state.item.editCard;
    event.preventDefault();
  };

  render() {
    let editForm = undefined;
    if (this.state.item.editCard) {
      editForm = <EditCard item={this.props.item} editCard={this.props.editCard}/>
    }
    return (
      <div>
        <Profile item={this.props.item}/>
        <button onClick={this.displayEditForm}>Edit</button>
        {editForm}
      </div>
    );
  }
}
