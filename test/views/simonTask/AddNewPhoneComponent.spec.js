import React                from 'react';
import {shallow}            from 'enzyme';
import chai, {expect}       from 'chai';
import dirtyChai            from 'dirty-chai';
import {keys}               from "lodash";
import AddNewPhoneComponent from '../../../src/app/views/simonTask/AddNewPhoneComponent';

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

    wrapper = shallow(<AddNewPhoneComponent {...props} />);
  });

  it('should render "AddNewPhoneComponent" with markup', () => {
    expect(wrapper).to.exist();
    expect(wrapper.find('button').length).to.equal(1);
    expect(wrapper.find('button').text()).to.equal('Add new');
  });

  it('should change state.displayForm', () => {
    expect(wrapper.state().displayForm).to.equal(false);
    wrapper.instance().seeForm();
    expect(wrapper.state().displayForm).to.equal(true);
  });

  it('should display markup after change state.displayForm', () => {
    expect(wrapper.find('label').length).to.equal(0);
    wrapper.instance().seeForm();
    expect(wrapper.find('label').length).to.equal(2);
  });

  it('should cover two class names "col-xs-6" ', () => {
    wrapper.instance().seeForm();
    expect(wrapper.find('.col-xs-6').length).to.equal(2);
  });

  it('should have state object with two keys', () => {
    expect(keys(wrapper.state()).length).to.equal(2);
    expect(keys(wrapper.state())[0]).to.equal('displayForm');
    expect(keys(wrapper.state())[1]).to.equal('newPhone');
  });

  describe('#handleChange', () => {
    it('should have state.newPhone object with two keys', () => {
      expect(keys(wrapper.state().newPhone).length).to.equal(2);
      expect(keys(wrapper.state().newPhone)[0]).to.equal('name');
      expect(keys(wrapper.state().newPhone)[1]).to.equal('value');
    });

    it('should automatic change name of state.newPhone object', () => {
      wrapper.instance().seeForm();
      let textField = wrapper.find('InputWithoutValue').first();
      let event = {key: 'Enter', target: {value: 'mock', name: 'name'}};
      textField.simulate('change', event);
      expect(wrapper.state().newPhone['name']).to.equal('mock');
      expect(wrapper.state().newPhone['value']).to.equal('');
    });

    it('should automatic change value of state.newPhone object', () => {
      wrapper.instance().seeForm();
      let textField = wrapper.find('InputWithoutValue').last();
      let event = {key: 'Enter', target: {value: 'mock2', name: 'value'}};
      textField.simulate('change', event);
      expect(wrapper.state().newPhone['name']).to.equal('');
      expect(wrapper.state().newPhone['value']).to.equal('mock2');
    });
  });

  describe('#addNew', () => {
    it('add new object into props', () => {
      wrapper.instance().seeForm();

      let textField = wrapper.find('InputWithoutValue').first();
      let event = {key: 'Enter', target: {value: 'mock', name: 'name'}};
      textField.simulate('change', event);

      expect(wrapper.instance().props.dataBase.phones.length).to.equal(4);

      wrapper.instance().addNew();

      expect(wrapper.state().newPhone['name']).to.equal('');
      expect(wrapper.state().newPhone['value']).to.equal('');
      expect(wrapper.state().displayForm).to.equal(false);
      expect(wrapper.instance().props.dataBase.phones.length).to.equal(5);
    });

  });
});
