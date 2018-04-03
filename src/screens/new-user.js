import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, ContainerDouble, Input } from '../components/common';
import { connect } from 'react-redux';

import { onFormChamge, onFormSubmit } from '../actions/new-user-action';
import { errorText } from '../styles';

// https://docs.expo.io/versions/latest/sdk/imagepicker.html

class NewUser extends Component {
  onInputChange(type, value) {
    this.props.onFormChamge(type, value);
  }

  onSubmit() {
    const { email, password, password2, name } = this.props.user;
    this.props.onFormSubmit(this.props.user)
  }

  showErrors() {
    const { errors, errorsShow } = this.props.user;
    console.log("This is it -> ", errors);
    if (errorsShow) return (
      <View style={errorText.container}>
        {errors.map(e => <Text style={errorText.text} key={e}>{e}</Text>)}
      </View>
    )
  }

  render() {
    const { email, password, password2, name, errors, errorsShow } = this.props.user;
    return(
      <View style={{flex:1}}>
        <ContainerDouble
          first={
            <View>
              <Input
                placeholder="email"
                value={email}
                onchangeText={email => this.onInputChange("email", email)}
              />
              <Input
                placeholder="password"
                secureTextEntry={true}
                value={password}
                onchangeText={password => this.onInputChange("password", password)}
              />
              <Input
                placeholder="repeat password"
                secureTextEntry={true}
                value={password2}
                onchangeText={password2 => this.onInputChange("password2", password2)}
              />
              <Input
                placeholder="name"
                value={name}
                onchangeText={n => this.onInputChange("name", n)}
              />

              {this.showErrors()}

            </View>
          }
          second={
            <View style={{marginBottom:-5}}>
              <Button>
                Upload avatar
              </Button>
              <Button onPress={() => this.onSubmit()}>
                Continue
              </Button>
            </View>
          }
        />
      </View>
    )
  }
}

const mapStateToProps = ({ newUserReducer }) => {
  return { user: newUserReducer }
}

const actions = {
  onFormChamge,
  onFormSubmit
}

export default connect(mapStateToProps, actions)(NewUser);
