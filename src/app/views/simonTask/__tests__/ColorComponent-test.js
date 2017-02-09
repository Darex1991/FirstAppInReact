import React from 'react';
import renderer from 'react-test-renderer';
import ColorComponent from '../ColorComponent';
test('Should render ColorComponent correctly', () => {
    const tree = renderer.create(
        <ColorComponent /> 
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
    