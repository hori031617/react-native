import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    Button,
    Alert,
    Image,
    TouchableOpacity,
    TouchableWithoutFeedback
} from 'react-native';
import {getProperties} from '../../actions/property';

export default class PropertyList extends React.Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        var ownerId = 'hori';
        var list = getProperties(ownerId);

        this.state = {
            dataSource: ds.cloneWithRows(list),
        }
        //this.props.navigation = props.navigation;
    }

    render() {
        return (
                <ListView
                  dataSource={this.state.dataSource}
                  renderRow={(rowData) => this.renderItem(rowData)}
                />
        );
    }

    renderItem(item) {
        return (
          <TouchableWithoutFeedback onPress={() => this.clickCallButton(item)}>
            <View style={styles.listItemContainer}>
                <Image style={styles.thumbnail  }
                  source={{uri: item.photo}} />
                <View style={styles.rightContainer}>
                  <View style={styles.childContainer1}>
                    <Text>{item.name}</Text>
                    <Text>{item.address}</Text>
                    <Text>{item.build}</Text>
                  </View>
                  <View style={styles.childContainer2}>
                    <View>
                      <Text><Text style={{color: 'orange', fontWeight: 'bold', fontSize: 20}}>{item.active_room_count}</Text>/{item.total_room_count}部屋</Text>
                    </View>
                    <View>
                      <Text>稼働率<Text style={{color: 'orange', fontWeight: 'bold', fontSize: 20}}>{item.active_rate}</Text></Text>
                    </View>
                  </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity style={{backgroundColor: 'gray', height: 100, justifyContent: 'center'}}>
                  <Text style={{color: 'white', padding: 5, fontSize: 18}}>＞</Text>
                </TouchableOpacity>
                </View>
            </View>
          </TouchableWithoutFeedback>
        );
    }

    clickCallButton(item) {
        const {navigate} = this.props.navigation;
        navigate('PropertyDetail');
    }

}

PropertyList.navigationOptions = props => {
    return {title: '所有物件一覧'}
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    listItemContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
      margin: 10,
      borderWidth: 0.5,
      borderColor: 'gray',
    },
    rightContainer: {
      flex: 1,
      borderRightWidth: 0.5,
      borderRightColor: 'gray',
      borderLeftWidth: 0.5,
      borderLeftColor: 'gray',
      padding: 5,
    },
    childContainer1: {
      flex: 3
    },
    childContainer2: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderTopWidth: 1,
      borderTopColor: 'gray',
    },
    thumbnail: {
      width: 80,
      height: 80,
      margin: 10,
    },
    header: {},
    button: {
        fontSize: 15,
        height: 50,
        color: 'steelblue'
    }
});
