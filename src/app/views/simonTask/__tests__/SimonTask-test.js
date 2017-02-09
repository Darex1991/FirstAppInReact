import React from 'react';
import renderer from 'react-test-renderer';
import SimonTask from '../SimonTask';
test('Should render SimonTask correctly', () => {
    const tree = renderer.create(
        <SimonTask /> 
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
    