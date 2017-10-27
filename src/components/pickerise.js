import React, { Component } from 'react';
import { View, Modal, Text, ScrollView, TouchableOpacity } from 'react-native';
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
    style: View.propTypes.style,
    cancelText: PropTypes.string,
    selectStyle: View.propTypes.style,
    item: View.propTypes.style,
    cancelStyle: View.propTypes.style,
    sectionStyle: View.propTypes.style,
    overlay: View.propTypes.style,
    itemText: Text.propTypes.style,
    sectionText: Text.propTypes.style,
    cancelTextStyle: Text.propTypes.style,
    selectTextStyle: Text.propTypes.style,
  };

  static defaultProps = {
    items: [],
    onChange: () => {
    },
    initValue: 'Select',
    style: {},
    selectStyle: {},
    selectTextStyle: {},
    item: {},
    itemText: {},
    sectionStyle: {},
    sectionText: {},
    cancelStyle: {},
    cancelTextStyle: {},
    overlay: {},
    cancelText: 'Cancel',
  };

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      animationType: 'none',
      modalVisible: false,
      transparent: false,
      selected: 'Select',
    };
  }

  componentDidMount() {
    this.state = { selected: this.props.initValue, cancelText: this.props.cancelText };
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
          transparent={this.state.transparent}
          visible={this.state.modalVisible}
          onRequestClose={() => this.setState({ modalVisible: false })}
          animationType={this.state.animationType}
        >
          <View style={[styles.overlay, this.props.overlay]}>
            <View style={styles.itemsContainer}>
              <ScrollView keyboardShouldPersistTaps>
                <View style={{ paddingHorizontal: 10 }}>
                  {this.props.items.map((item) => {
                    if (item.section) {
                      return (
                        <View key={item.key} style={[styles.sectionStyle, this.props.sectionStyle]}>
                          <Text style={[styles.sectionText, this.props.sectionText]}>
                            {item.label}
                          </Text>
                        </View>
                      );
                    }
                    return (
                      <TouchableOpacity key={item.key} onPress={() => this.onChange(item)}>
                        <View style={[styles.item, this.props.item]}>
                          <Text style={[styles.itemText, this.props.itemText]}>{item.label}</Text>
                        </View>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </ScrollView>
            </View>
            <View style={styles.cancelContainer}>
              <TouchableOpacity onPress={() => this.setState({ modalVisible: false })}>
                <View style={[styles.cancelStyle, this.props.cancelStyle]}>
                  <Text style={[styles.cancelTextStyle, this.props.cancelTextStyle]}>
                    {this.props.cancelText}
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
