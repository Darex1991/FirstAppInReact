import React                from 'react';
import { shallow }          from 'enzyme';
import chai, {expect}       from 'chai';
import dirtyChai            from 'dirty-chai';
import ColorComponent       from '../../../src/app/views/simonTask/ColorComponent';

chai.use(dirtyChai);

describe('ColorComponent ', () => {
  it('should render "ColorComponent" with markup', () => {
    const wrapper = shallow(<ColorComponent />);
    expect(wrapper).to.exist();
    expect(wrapper.find('h2').length).to.equal(1);
    expect(wrapper.find('p').length).to.equal(1);
    expect(typeof wrapper.find('div').children().nodes[2].type).to.equal('function')
  });

  it('h2 should contain text "Color Schema"', () => {
    const wrapper = shallow(<ColorComponent />);
    expect(wrapper).to.exist();
    expect(wrapper.find('p').text()).to.equal('Dark schema');
  });

  it('p should contain text "Dark schema"', () => {
    const wrapper = shallow(<ColorComponent />);
    expect(wrapper).to.exist();
    expect(wrapper.find('p').text()).to.equal('Dark schema');
  });
});
