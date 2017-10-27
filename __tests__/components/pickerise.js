import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import Pickerise from '../../src/components/pickerise';

describe('Pickerise', () => {
  it('Renders correctly', () => {
    const items = [
      { section: true, label: 'Cars' }, { label: 'Audi' }, { label: 'Dodge' }, { label: 'Ford' }, { label: 'Renault' },
      { section: true, label: 'Bikes' }, { label: 'Kawasaki' }, { label: 'Suzuki' }, { label: 'Triumph' }];

    const wrapper = shallow(<Pickerise
      items={items}
      initValue="Select me"
      onChange={() => {
      }}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
