# react-native-checkboxcustom

A cross-platform radio and multiple-choice React Native component that checkbox style users can define

![example](https://github.com/dzfrontend/react-native-checkboxcustom/blob/master/assets/checkboxcustom.png)

# Installation

```sh
npm install react-native-checkboxcustom --save
```

# Usage

```jsx
import CheckboxCustom from 'react-native-checkboxcustom'
```

# Example 

### default checkbox

```jsx
<CheckboxCustom
  options={
    [
      { label: '', value: 'A' },
      { label: '', value: 'B' },
      { label: '', value: 'C' },
      { label: '', value: 'D' }
    ]
  }
  maxSelectedOptions={1}
  onSelection={(option)=>console.log(option + ' was selected!')}
/>

```
### custom checkbox

component:

```jsx

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
render(){
  return(
	<CheckboxCustom
	  options={
	    [
	      {label:'this is list of A',value:'A'},
	      {label:'this is list of B',value:'B'},
	      {label:'this is list of C',value:'C'},
	      {label:'this is list of D',value:'D'}
	    ]
	  }
	  selectedOptions={['A', 'C']}
	  renderIndicator={this._renderIndicator}
	  renderIndicatorChecked={this._renderIndicatorChecked}
	  onSelection={(option)=>console.log(option + ' was selected!')}
	  contentContainerStyle={{ flexDirection: 'column' }}
	/>
  )
}

```
styles:

```
const styles = StyleSheet.create({
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
```

# Api

* `style - {}` custom style of the list
* `optionStyle - {}` custom style of the option element
* `options - []` required array of options
* `selectedOptions - []` optional array of initially selected options
* `maxSelectedOptions - int` optional maximum number of selectable options
* `onSelection - function(option){}` option selection callback
* `renderIndicator - function(option)` should return a selected/deselected indicator node, default: check mark image
* `renderSeparator - function(option)` should return a separator node that is displayed between the options, default: gray line
* `renderText - function(option)` should return a text node, default: text node
* `renderRow - function(option)` should return a option view
* `disabled - bool` if set to true component is disabled and can't be interacted with




