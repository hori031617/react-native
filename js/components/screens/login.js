import React from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    Button,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';


export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login_id: "",
            password: ""
        };
    }

    onChangeId(id) {
        this.setState({login_id: id});
    }

    onChangePw(pw) {
        this.setState({password: pw});
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>

                <Image source={require('../../../imgs/common/amazon.png')} style={{width: 400, height: 200}}/>
                <TextInput style={{
                    height: 40,
                    borderColor: 'orange',
                    borderWidth: 1,
                    marginTop: 50,
                    marginBottom: 40
                }}
                  placeholder="Eメールアドレス"
                  value={this.state.login_id} onChangeText={this.onChangeId.bind(this)}
                />
                <TextInput style={{
                    height: 40,
                    borderColor: 'orange',
                    marginBottom: 40,
                    borderWidth: 1
                }}
                  placeholder="パスワード"
                  value={this.state.password} onChangeText={this.onChangePw.bind(this)}
                />

                <TouchableOpacity style={{backgroundColor: 'black'}}>
                <Button onPress={() => navigate('PropertyList')} title="ログイン" style={styles.btn_login} color="white"/>
                </TouchableOpacity>

            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    btn_login: {
      color: "black",
      backgroundColor: "black",

    },
    login: {
        height: 200,
        textAlignVertical: "top",
        marginTop: 10,
        marginBottom: 10
    },
    password: {
        height: 400,
        textAlignVertical: "top",
        marginTop: 10,
        marginBottom: 10
    }
});
