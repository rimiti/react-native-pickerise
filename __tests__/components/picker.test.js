import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Pickerise from '../../src/components/picker';

describe('Pickerise', () => {
  it('Renders correctly', () => {
    const items = [
      { section: true, label: 'Cars' }, { label: 'Audi' }, { label: 'Dodge' }, { label: 'Ford' }, { label: 'Renault' },
      { section: true, label: 'Bikes' }, { label: 'Kawasaki' }, { label: 'Suzuki' }, { label: 'Triumph' }];

    const tree = renderer.create(<Pickerise
      items={items}
      initValue="Select me"
      onChange={() => {
        }}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
