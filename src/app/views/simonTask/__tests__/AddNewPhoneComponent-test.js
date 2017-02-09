import React from 'react';
import renderer from 'react-test-renderer';
import AddNewPhoneComponent from '../AddNewPhoneComponent';
test('Should render AddNewPhoneComponent correctly', () => {
    const tree = renderer.create(
        <AddNewPhoneComponent /> 
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
    