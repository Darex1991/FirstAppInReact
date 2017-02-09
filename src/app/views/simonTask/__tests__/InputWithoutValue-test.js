import React from 'react';
import renderer from 'react-test-renderer';
import InputWithoutValue from '../InputWithoutValue';
test('Should render InputWithoutValue correctly', () => {
    const tree = renderer.create(
        <InputWithoutValue /> 
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
    