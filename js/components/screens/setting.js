import React from 'react';

import {Text, View, StyleSheet, Switch} from 'react-native';
import { resetAction } from '../../utils/screen';

export default class Setting extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            switchValue: false
        };
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Text>内覧者から通話を受ける</Text>
                <Switch value={(this.state && this.state.switchValue) || false} onValueChange={(value) => {
                    this.setState({switchValue: value})
                }} tintColor={"rgba(230,230,230,1)"} onTintColor={"rgba(68,219,94,1)"}/>
                <Text onPress={() => this.props.navigation.dispatch(resetAction)}>ログアウト</Text>
            </View>
        );
    }
}
