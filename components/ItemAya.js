import React, { Component } from 'react';
import { View, Text, TouchableHighlight, } from 'react-native';

class ItemAya extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableHighlight   activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={() => { }}
        >
        <View style={{padding: 16, flex: 1}}>
          <View>
            <Text style={{fontSize: 24}}>{this.props.text}</Text>
          </View>
          <View>
            <Text style={{textAlign: "justify"}}>{this.props.index}. {this.props.translation}</Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}

export default ItemAya;