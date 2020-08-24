import * as React from 'react';
import { Component } from 'react';
import {
  ActivityIndicator,
  FlatList,
  View,
} from 'react-native';
import ItemSura from '../../components/ItemSura';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true,
    };

  }

  componentDidMount() {
    fetch('http://api.quran.com:3000/api/v3/chapters?language=id')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json.chapters });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  render() {
    const { data, isLoading } = this.state;

    return (
      <View style={{ flex: 1, justifyContent: "center"}}>
      {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <ItemSura
                number={item.chapter_number}
                name={item.name_arabic}
                englishName={item.name_simple}
                englishNameTranslation={item.translated_name.name}
                onItemPress={() => {
                  this.props.navigation.navigate('AyaList', {
                    suraId: item.chapter_number,
                  })
                }}
              />
            )}
          />
        )}
      </View>
    );
  }
}
export default Main;
