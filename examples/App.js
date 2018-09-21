/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import CheckboxCustom from 'react-native-checkboxcustom'

class App extends Component {
  state = {
    option1: [
      { label: '', value: 'A' },
      { label: '', value: 'B' },
      { label: '', value: 'C' },
      { label: '', value: 'D' },
    ],
    option2: [
      { label: 'this is list of A', value: 'A' },
      { label: 'this is list of B', value: 'B' },
      { label: 'this is list of C', value: 'C' },
      { label: 'this is list of D', value: 'D' },
    ],
  }
  _renderIndicator = (option) => {
    return (
      <View style={[styles.checkbox]}>
        <Text style={[styles.option]}>{option.value}</Text>
      </View>
    )
  }
  _renderIndicatorChecked = (option) => {
    return (
      <View style={[styles.checkbox, styles.checkboxSelected]}>
        <Text style={[styles.option, styles.optionSelected]}>{option.value}</Text>
      </View>
    )
  }
  _onSelectionHandle = (option) => {
    console.log(option)
  }
  render() {
    return (
      <View style={styles.container}>
        <View>
          <View>
            <View style={{ paddingHorizontal: 10, paddingVertical: 10, }}>
              <Text>this is the checkbox without custom(default checkbox)</Text>
            </View>
            <CheckboxCustom
              options={this.state.option1}
              onSelection={(option) => this._onSelectionHandle(option)}
              style={{paddingLeft: 10}}
            />
          </View>

          <View>
            <View style={{ paddingHorizontal: 10, paddingVertical: 10, }}>
              <Text>this is the custom checkbox</Text>
            </View>
            <CheckboxCustom
              options={this.state.option1}
              renderIndicator={this._renderIndicator}
              renderIndicatorChecked={this._renderIndicatorChecked}
              onSelection={(option) => this._onSelectionHandle(option)}
            />
          </View>
          <View>
            <View style={{paddingHorizontal: 10, paddingVertical: 10,}}>
              <Text>this is the custom checkbox list</Text>
            </View>
            <CheckboxCustom
              options={this.state.option2}
              selectedOptions={['A', 'C']}
              renderIndicator={this._renderIndicator}
              renderIndicatorChecked={this._renderIndicatorChecked}
              onSelection={(option) => this._onSelectionHandle(option)}
              contentContainerStyle={{ flexDirection: 'column' }}
            />
          </View>
        </View>
      </View>
    );
  }
}
export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  checkbox: {
    width: 42,
    height: 42,
    borderRadius: 21,
    borderWidth: 2,
    borderColor: '#c4c4c4',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
    marginVertical: 5
  },
  checkboxSelected: {
    borderColor: '#3bcb7e',
  },
  option: {
    fontSize: 16,
    color: '#656565'
  },
  optionSelected: {
    color: '#3bcb7e'
  },
});
