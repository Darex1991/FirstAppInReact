import React            from 'react';
import ReactTestUtils   from 'react-addons-test-utils'

import chai             from 'chai';
import chaiJestSnapshot from "chai-jest-snapshot";

import InputWithoutValue from '../InputWithoutValue';

chai.use(chaiJestSnapshot);

test('Should render InputWithoutValue correctly', () => {
    const shallowRenderer = ReactTestUtils.createRenderer();
    const result = shallowRenderer.render( <InputWithoutValue /> );
    expect(result).toMatchSnapshot();
});
