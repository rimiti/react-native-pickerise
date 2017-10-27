import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';
import Pickerise from '../../src';

describe('Pickerise', () => {
  it('Renders default state', () => {
    const items = [
      { section: true, label: 'Cars' }, { label: 'Audi' }, { label: 'Dodge' }, { label: 'Ford' }, { label: 'Renault' },
      { section: true, label: 'Bikes' }, { label: 'Kawasaki' }, { label: 'Suzuki' }, { label: 'Triumph' }];

    const wrapper = shallow(<Pickerise
      items={items}
      onChange={() => {
      }}
    />);

    expect(wrapper.length).toEqual(1);
    expect(wrapper.contains('Select')).toEqual(true);
    expect(wrapper.contains('Cancel')).toEqual(true);
    expect(wrapper.contains('Cars')).toEqual(true);
    expect(wrapper.contains('Audi')).toEqual(true);
    expect(wrapper.contains('Dodge')).toEqual(true);
    expect(wrapper.contains('Ford')).toEqual(true);
    expect(wrapper.contains('Renault')).toEqual(true);
    expect(wrapper.contains('Bikes')).toEqual(true);
    expect(wrapper.contains('Kawasaki')).toEqual(true);
    expect(wrapper.contains('Suzuki')).toEqual(true);
    expect(wrapper.contains('Triumph')).toEqual(true);
    expect(wrapper.contains('Peugeot')).not.toEqual(true);
    expect(wrapper.find('TouchableOpacity').length).toEqual(9);
    wrapper.setState({ items: items.map((item, key) => Object.assign(item, { key })) });
    wrapper.find('TouchableOpacity').forEach(child => child.simulate('press'));
    wrapper.instance().componentWillReceiveProps({ initValue: 'test' });
  });
});
