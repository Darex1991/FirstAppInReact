import React from 'react';
import renderer from 'react-test-renderer';
import PhoneNumbersComponent from '../PhoneNumbersComponent';
test('Should render PhoneNumbersComponent correctly', () => {
    const tree = renderer.create(
        <PhoneNumbersComponent /> 
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
    