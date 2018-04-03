import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onLoginFormChange, onFormSubmit } from '../actions/login-action';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button, ContainerDouble, Input, ErrorList } from '../components/common';
import { errorText } from '../styles';

class Login extends Component {
  onSubmit() {
    this.props.onFormSubmit(this.props.form);
  }

  render() {
    const { email, password, errorsShow, errors } = this.props.form;
    return(
      <View style={{flex:1}}>
        <ContainerDouble
          first={
            <View>
              <Input
                placeholder="email"
                value={email}
                onchangeText={email => this.props.onLoginFormChange('email', email)}
              />
              <Input
                placeholder="password"
                value={password}
                onchangeText={password => this.props.onLoginFormChange('password', password)}
                secureTextEntry={true}
              />

              <ErrorList show={errorsShow} errors={errors} />

            </View>
          }
          second={
            <View style={{marginBottom:-5}}>
              <Button onPress={() => this.onSubmit()}>
                Continue
              </Button>
              <Button onPress={() => Actions.screenNewUser()}>
                New account
              </Button>
            </View>
          }
        />
      </View>
    )
  }
}

const mapStateToProps = ({ loginFormReducer }) => {
  return { form: loginFormReducer };
};

const actions = {
  onLoginFormChange,
  onFormSubmit
};

export default connect(mapStateToProps, actions)(Login);
