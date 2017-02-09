import React from 'react';
import renderer from 'react-test-renderer';
import ProfileComponent from '../ProfileComponent';
test('Should render ProfileComponent correctly', () => {
    const tree = renderer.create(
        <ProfileComponent /> 
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
    