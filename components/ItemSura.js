import * as React from 'react';
import { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

class ItemSura extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableHighlight   activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={this.props.onItemPress}
        >
        <View style={{padding: 16, flex: 1, flexDirection: "row"}}>
          <View style={{ flex: 1, flexDirection: "column"}}>
            <Text>{this.props.number}</Text>        
          </View>
          <View style={{ flex: 7, flexDirection: "column"}}>
            <Text style={{fontWeight: "bold"}}>{this.props.englishName}</Text>
            <Text>{this.props.englishNameTranslation}</Text>
          </View>
          <View style={{flex: 3}}>
            <Text style={{fontSize: 18, fontWeight: "bold"}}>{this.props.name}</Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}

export default ItemSura;