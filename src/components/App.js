import React from 'react';
import CardList from './cardList/cardList';
import './app.css';

class AppComponent extends React.Component {

  render() {
    return (
      <div className="index">
        <CardList />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
