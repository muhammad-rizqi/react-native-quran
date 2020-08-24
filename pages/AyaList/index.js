import React, { Component } from 'react';
import { FlatList, View, ActivityIndicator } from 'react-native';
import ItemAya from '../../components/ItemAya';

class AyaList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true,
    };

  }

  componentDidMount() {
    const suraId = this.props.route.params.suraId;

    fetch('http://api.quran.com:3000/api/v3/chapters/'+suraId+'/verses?translations=33&language=id&text_type=words')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json.verses });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }


  render() {   
    const { data, isLoading } = this.state;

    return (
   
    <View style={{ flex: 1, justifyContent: "center" }}>
        {isLoading ? (
          <ActivityIndicator/>
        ) : (
            <FlatList
              data={data}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <ItemAya
                  key={item.id}
                  index={item.verse_number}
                  text={item.text_madani}
                  translation={item.translations[0].text}
                />
              )}
            />)}
      </View>

    );
  }
};
export default AyaList;