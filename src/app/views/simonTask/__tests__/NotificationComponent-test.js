import React from 'react';
import renderer from 'react-test-renderer';
import NotificationComponent from '../NotificationComponent';
test('Should render NotificationComponent correctly', () => {
    const tree = renderer.create(
        <NotificationComponent /> 
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
    