import React, {
  Component,
  StyleSheet,
  Text,
  View,
  PropTypes,
  TouchableHighlight,
} from 'react-native';


export default class Direction extends Component {

  static propTypes = {
    backgroundColor: PropTypes.string,
  };

  state = {
    direction: 'right',
  };

  _onPressButton() {
    this.setState({
      direction: Math.random() >= 0.5 ? 'left'  : 'right',
    });
  }

  render() {
    const {
      direction,
    } = this.state;

    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this._onPressButton.bind(this)}>
          <View>
            {direction === 'left' && <Text style={styles.welcome}>Left</Text>}
            {direction === 'right' && <Text style={styles.welcome}>Right</Text>}
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1,
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});