import React                from 'react';
import {shallow}            from 'enzyme';
import chai, {expect}       from 'chai';
import dirtyChai            from 'dirty-chai';
import {every}              from "lodash";
import NotificationComponent from '../../../src/app/views/simonTask/NotificationComponent';

chai.use(dirtyChai);

let wrapper, props;

describe('AddNewPhoneComponent ', () => {

  beforeEach(function () {
    props = {
      dataBase: {
        phones: [
          {id: 1, name: 'asd', key: 1, value: 'val 1', checked: true, highPriority: true},
          {id: 2, name: 'asdasdasd', key: 2, value: 'val 122222', checked: false, highPriority: false},
          {id: 3, name: 'asdasdasd', key: 3, value: 'val asdasd', checked: false, highPriority: true},
          {id: 4, name: '222', key: 4, value: 'val213123 1', checked: true, highPriority: false}]
      },
      updateDataBase: (newDataBase) => {
        this.dataBase = newDataBase
      }
    };

    wrapper = shallow(<NotificationComponent {...props} />);
  });

  it('should render "AddNewPhoneComponent" with markup', () => {
    expect(wrapper).to.exist();
    expect(wrapper.find('h2').length).to.equal(1);
    expect(wrapper.find('h2').text()).to.equal('Notification');
  });

  describe('#toggleNotificationSetting', () => {
    it('should change state of checkbox with key "checked"', () => {
      let wrapperInstance = wrapper.instance();
      let wrapperProps = wrapperInstance.props;
      let secondPhone = wrapperProps.dataBase.phones[2];

      expect(secondPhone.checked).to.equal(false);
      wrapperInstance.toggleNotificationSetting(secondPhone, 'checked');
      expect(secondPhone.checked).to.equal(true);
    });

    it('should change state of checkbox with key "highPriority"', () => {
      let wrapperInstance = wrapper.instance();
      let wrapperProps = wrapperInstance.props;
      let secondPhone = wrapperProps.dataBase.phones[0];

      expect(secondPhone.highPriority).to.equal(true);
      wrapperInstance.toggleNotificationSetting(secondPhone, 'highPriority');
      expect(secondPhone.highPriority).to.equal(false);
    });
  });

  describe('#renderCheckboxes', () => {
    it('render four tr from database.phones', () => {
      let renderCheckboxes = wrapper.instance().renderCheckboxes();
      expect(renderCheckboxes.length).to.equal(4);
      expect(renderCheckboxes[2].type).to.equal('tr');
      expect(renderCheckboxes[2].key).to.equal('2');
    });

    it('each tr has three td', () => {
      let renderCheckboxes = wrapper.instance().renderCheckboxes();
      let checkAllTypesAndLength = every(renderCheckboxes, (item) => {
        let checkLengthOfItem = item.props.children.length == 3;
        let checkAllItemsChildren = every(item.props.children, (itemChild) => { return itemChild.type == 'td' });
        return checkLengthOfItem && checkAllItemsChildren;
      });
      expect(checkAllTypesAndLength).to.equal(true);
    });
  });

  describe('input in #renderCheckboxes', () => {
    it('should change checked', () => {
      let event = { target: { checked: false } };

      expect(wrapper.find('input').length).to.equal(8);
      expect(wrapper.instance().props.dataBase.phones[0].checked).to.equal(true);

      wrapper.find('input').first().simulate('change', event);

      expect(wrapper.instance().props.dataBase.phones[0].checked).to.equal(false);
    });

    it('should change highPriority', () => {
      let event = { target: { checked: false } };

      expect(wrapper.find('input').length).to.equal(8);
      debugger;
      expect(wrapper.instance().props.dataBase.phones[0].highPriority).to.equal(true);

      wrapper.find('input').at(1).simulate('change', event);

      expect(wrapper.instance().props.dataBase.phones[0].highPriority).to.equal(false);
    });
  })
});
