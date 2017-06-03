import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Button,
    Alert,
    Image,
    TouchableHighlight,
    WebView,
    Switch,
    Modal,
    ListView,
    TouchableOpacity,
    TouchableWithoutFeedback
} from 'react-native';
import {StackNavigator, TabNavigator} from 'react-navigation';
import {resetAction} from '../../utils/screen';
import {getProperties} from '../../actions/property';

class PropertyInfo extends React.Component {

    render() {
        return (<WebView source={{
            uri: 'https://m.yahoo.co.jp/'
        }}/>);
    }
}
PropertyInfo.navigationOptions = {
    tabBarIcon: ({tintColor}) => (<Image source={require('../../../imgs/common/property_info.png')}/>)
};

class ChatList extends React.Component {

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        var ownerId = 'hori';
        var list = getProperties(ownerId);

        this.state = {
            dataSource: ds.cloneWithRows(list)
        }
    }

    render(){
        console.log('fuga');
        return(
            <View></View>
        );
    }

    componentDidMount() {
        console.log('hoge');
        const {navigate} = this.props.navigation;
        return (<View>
                    <ListView dataSource={this.state.dataSource} renderRow={(rowData) => this.renderItem(rowData)}/>
                </View>);
    }

    renderItem(item) {
        return (
            <TouchableWithoutFeedback onPress={() => this.clickCallButton(item)}>
                <View style={styles.listItemContainer}>
                    <Image style={styles.thumbnail} source={{
                        uri: item.photo
                    }}/>
                    <View style={styles.rightContainer}>
                        <View style={styles.childContainer1}>
                            <Text>{item.name}</Text>
                            <Text>{item.address}</Text>
                            <Text>{item.build}</Text>
                        </View>
                        <View style={styles.childContainer2}>
                            <View>
                                <Text>
                                    <Text style={{
                                        color: 'orange',
                                        fontWeight: 'bold',
                                        fontSize: 20
                                    }}>{item.active_room_count}</Text>/{item.total_room_count}部屋 chat</Text>
                            </View>
                            <View>
                                <Text>稼働率 chat<Text style={{
                color: 'orange',
                fontWeight: 'bold',
                fontSize: 20
            }}>{item.active_rate}</Text>
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={{
                        flexDirection: 'row'
                    }}>
                        <TouchableOpacity style={{
                            backgroundColor: 'gray',
                            height: 100,
                            justifyContent: 'center'
                        }}>
                            <Text style={{
                                color: 'white',
                                padding: 5,
                                fontSize: 18
                            }}>＞</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }

    clickCallButton(item) {
        PropertyDetail.navigationOptions = (props) => {
            return {title: 'チャット詳細'}
        }
        const {navigate} = this.props.navigation;
        navigate('ChatMessage');
    }
}


class ChatMessage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text>
                    チャット画面
                </Text>
            </View>
        );
    }
}

const ChatStack = StackNavigator({
    ChatList: {
        screen: ChatList
    },
    ChatMessage: {
        screen: ChatMessage
    }
}, {
    initialRouteName: 'ChatList',
    headerMode: 'none'
});

const ChatScreen = ({screenProps}) => (<ChatStack/>);

ChatScreen.navigationOptions = {
    tabBarIcon: ({tintColor}) => (<Image source={require('../../../imgs/common/chat.jpg')}/>)
};

class Setting extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            switchValue: false
        };
    }

    logout(){
        console.log('logout');
    }

    render() {
        return (
            <View>
                <Text>内覧者から通話を受ける</Text>
                <Switch value={(this.state && this.state.switchValue) || false} onValueChange={(value) => {
                    this.setState({switchValue: value})
                }} tintColor={"rgba(230,230,230,1)"} onTintColor={"rgba(68,219,94,1)"}/>
            <Text onPress={this.logout.bind(this)}>ログアウト</Text>
            </View>
        );
    }
}
Setting.navigationOptions = {
    tabBarIcon: ({tintColor}) => (<Image source={require('../../../imgs/common/setting.jpg')}/>)
};

const PropertyTab = TabNavigator({
    PropertyInfo: {
        screen: PropertyInfo
    },
    ChatScreen: {
        screen: ChatScreen
    },
    Setting: {
        screen: Setting
    }
}, {
    tabBarOptions: {
        activeTintColor: '#037aff',
        inactiveTintColor: '#737373',
        showLabel: false
    }
});

export default class PropertyDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <PropertyTab />;
    }
}
PropertyDetail.navigationOptions = (props) => {
    return {title: '物件名'}
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
        borderColor: 'gray'
    },
    rightContainer: {
        flex: 1,
        borderRightWidth: 0.5,
        borderRightColor: 'gray',
        borderLeftWidth: 0.5,
        borderLeftColor: 'gray',
        padding: 5
    },
    childContainer1: {
        flex: 3
    },
    childContainer2: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderTopColor: 'gray'
    },
    thumbnail: {
        width: 80,
        height: 80,
        margin: 10
    },
    header: {},
    button: {
        fontSize: 15,
        height: 50,
        color: 'steelblue'
    }
});
