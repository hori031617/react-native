import React from 'react';

import {Text, View, StyleSheet, Button, Alert} from 'react-native';

class ButtonTel extends React.Component {
    toCall() {
        this._changeTelStates();
        Alert.alert('通話開始');
    }

    endCall() {
        this._changeTelStates();
        Alert.alert('通話終了');
    }

    _changeTelStates() {
        this.props.changeTelStatesFlg(this.props.tel_states);
    }
    render() {
        return (
            <View style={styles.call}>
                {(() => {
                    if (this.props.tel_states) {
                        return <Button title="終了" onPress={this.endCall.bind(this)}/>
                    } else {
                        return <Button title="通話" onPress={this.toCall.bind(this)}/>
                    }
                })()}
            </View>
        );
    }
}

export default class Call extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            teling_flg: false
        };
    }

    changeTelStates() {
        this.setState({
            teling_flg: (this.state.teling_flg)
                ? false
                : true
        });
    }

    render() {
        return (
            <View>
                <ButtonTel tel_states={this.state.teling_flg} changeTelStatesFlg={() => this.changeTelStates()}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    call: {
        marginTop: 200
    }
});
