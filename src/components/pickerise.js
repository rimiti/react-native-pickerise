import React, { Component } from 'react';
import { View, Modal, Text, ScrollView, TouchableOpacity, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../styles/pickerise';

export default class Pickerise extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      section: PropTypes.bool,
    })),
    onChange: PropTypes.func,
    initValue: PropTypes.string,
    cancelText: PropTypes.string,
    style: ViewPropTypes.style,
    itemsContainerStyle: ViewPropTypes.style,
    itemsContainerChildStyle: ViewPropTypes.style,
    selectStyle: ViewPropTypes.style,
    itemStyle: ViewPropTypes.style,
    cancelStyle: ViewPropTypes.style,
    sectionStyle: ViewPropTypes.style,
    overlayStyle: ViewPropTypes.style,
    itemTextStyle: Text.propTypes.style,
    sectionTextStyle: Text.propTypes.style,
    cancelTextStyle: Text.propTypes.style,
    selectTextStyle: Text.propTypes.style,
    modalAnimationType: Modal.propTypes.animationType,
    modalTransparent: Modal.propTypes.transparent,
  };

  static defaultProps = {
    items: [],
    onChange: () => {
    },
    initValue: 'Select',
    style: {},
    itemsContainerStyle: {},
    itemsContainerChildStyle: {},
    selectStyle: {},
    selectTextStyle: {},
    itemStyle: {},
    itemTextStyle: {},
    sectionStyle: {},
    sectionTextStyle: {},
    cancelStyle: {},
    cancelTextStyle: {},
    overlayStyle: {},
    cancelText: 'Cancel',
    modalAnimationType: 'slide',
    modalTransparent: false,
  };

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      items: this.props.items.map((item, key) => Object.assign(item, { key })),
      selected: this.props.initValue,
      cancelText: this.props.cancelText,
      modalVisible: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.initValue !== this.props.initValue) {
      this.setState({ selected: nextProps.initValue });
    }
  }

  onChange(item) {
    this.props.onChange(item);
    this.setState({ selected: item.label, modalVisible: false });
  }

  render() {
    return (
      <View style={this.props.style}>
        <Modal
          transparent={this.props.modalTransparent}
          visible={this.state.modalVisible}
          onRequestClose={() => this.setState({ modalVisible: false })}
          animationType={this.props.modalAnimationType}
        >
          <View style={[styles.overlayStyle, this.props.overlayStyle]}>
            <View style={[styles.itemsContainerStyle, this.props.itemsContainerStyle]}>
              <ScrollView keyboardShouldPersistTaps="always">
                <View style={[
                  styles.itemsContainerChildStyle,
                  this.props.itemsContainerChildStyle,
                ]}
                >
                  {this.state.items.map((item) => {
                    if (item.section) {
                      return (
                        <View key={item.key} style={[styles.sectionStyle, this.props.sectionStyle]}>
                          <Text style={[styles.sectionTextStyle, this.props.sectionTextStyle]}>
                            {item.label}
                          </Text>
                        </View>
                      );
                    }
                    return (
                      <TouchableOpacity key={item.key} onPress={() => this.onChange(item)}>
                        <View style={[styles.itemStyle, this.props.itemStyle]}>
                          <Text style={[styles.itemTextStyle, this.props.itemTextStyle]}>
                            {item.label}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </ScrollView>
            </View>
            <View style={styles.cancelContainerStyle}>
              <TouchableOpacity onPress={() => this.setState({ modalVisible: false })}>
                <View style={[styles.cancelStyle, this.props.cancelStyle]}>
                  <Text style={[styles.cancelTextStyle, this.props.cancelTextStyle]}>
                    {this.state.cancelText}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <TouchableOpacity onPress={() => this.setState({ modalVisible: true })}>
          <View style={[styles.selectStyle, this.props.selectStyle]}>
            <Text style={[styles.selectTextStyle, this.props.selectTextStyle]}>
              {this.state.selected}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
