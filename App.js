/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
    TouchableHighlight
} from 'react-native';
import VenmoTransaction from "./components/VenmoTransaction";
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

DATA = {
  items: {
      global: [
          {
              from: "Kim Kardashian",
              did: "paid",
              to: "Kanye West",
              for: "hey",
              time: "18m",
              amount: "",
              image: "https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/19059928_10158905368110613_1425001884133662643_n.jpg?oh=a06d3d714f6c9c7d807b3f8d728e9ac2&oe=5B0915AB"
          },
          {
              from: "Beyonce",
              did: "paid",
              to: "Jay-Z",
              for: "wassup",
              time: "18m",
              amount: "",
              image: "https://scontent-lax3-2.xx.fbcdn.net/v/t31.0-8/22528970_1499911310092164_4910502556269158647_o.jpg?oh=09c860ec9684ae8bd50c45210f245eab&oe=5B195900"
          },
          {
              from: "Ellen Degeneres",
              did: "paid",
              to: "Oprah Winfrey",
              for: "hey",
              time: "18m",
              amount: '',
              image: "https://scontent-lax3-2.xx.fbcdn.net/v/t31.0-8/461470_10150876597577240_4211055_o.jpg?oh=0c7f51b4d557f8e46c488b23bd04778d&oe=5B19E0D2"
          }
      ],
      friends: [
          {
              from: "Megan Wood",
              did: "paid",
              to: "Courtney Wood",
              for: "👌",
              time: "18m",
              amount: "-$5.00",
              image: "https://scontent-lax3-2.xx.fbcdn.net/v/t31.0-8/1800057_831412000207024_244506293_o.jpg?oh=ea304245ca89f380890ed2e32cd51d2f&oe=5B4B9EDB"
          },
          {
              from: "Courtney Wood",
              did: "paid",
              to: "Joan Hong",
              for: "test2",
              time: "19m",
              amount: "",
              image: "https://scontent-lax3-2.xx.fbcdn.net/v/t31.0-8/12027358_10208350899637103_3210884830110523797_o.jpg?oh=8a7c52ebac07e0ba930f121246b5b10a&oe=5B02AF22",
          },
          {
              from: "Marisa Macaya",
              did: "paid",
              to: "Megan Wood",
              for: "test3",
              time: "1s",
              amount: "",
              image: "https://scontent-lax3-2.xx.fbcdn.net/v/t31.0-8/17310903_1262400507177895_2016293746208463824_o.jpg?oh=2ee8ceb7c3cfedbd5c56faf6f837a7ea&oe=5B4AC356"
          }
      ],
      profile: [
          {
              from: "You",
              did: "paid",
              to: "Courtney Wood",
              for: "food",
              time: "10m",
              amount: "-$5.00",
              image: "https://scontent-lax3-2.xx.fbcdn.net/v/t31.0-8/1800057_831412000207024_244506293_o.jpg?oh=ea304245ca89f380890ed2e32cd51d2f&oe=5B4B9EDB"
          }
      ]



  }
}

const Segment = (props) => {
  return(
      <TouchableHighlight onPress={() => props.onPress()}
            style={[styles.segment,
                { borderRightWidth: props.last? 0 : 1,
                    borderBottomLeftRadius: props.left? 4: 0,
                    borderTopLeftRadius: props.left? 4: 0,
                    backgroundColor: props.selected? 'white' : '#3D95CE',
                    borderBottomRightRadius: props.last? 4: 0,
                    borderTopRightRadius: props.last? 4: 0

                }]}
                          underlayColor={"white"}
      >
        <Icon name={props.icon} size={22} color={!props.selected? 'white' : '#3D95CE'} />
      </TouchableHighlight>
  )
}

export default class App extends Component<Props> {

  state = {
      items: DATA.items,
      selected: [ true, false, false ],
      page: 'world',
  }

  headerCenter() {
    return(
        <View style={{ borderColor: 'white', borderWidth: 1, width: 200, height: 30, borderRadius: 5, flexDirection: 'row' }}>
          <Segment icon={"globe"} onPress={() => this.changePage('world')} selected={this.state.selected[0]}left color={"white"}/>
          <Segment icon={"users"} onPress={() => this.changePage('friends')} selected={this.state.selected[1]} color={"white"}/>
          <Segment icon={"user"} onPress={() => this.changePage('profile')} selected={this.state.selected[2]}color={"white"} last/>
        </View>
    );
  }

  changePage(page) {
    this.setState({ page: page });
    if (page == 'friends') {
      this.setState({ selected: [ false, true, false ]});
    }
    if (page == 'world') {
      this.setState({ selected: [true, false, false]});
    }
    if (page == 'profile') {
      this.setState({ selected: [false, false, true]});
    }
  }

  renderPage() {
    if (this.state.page == 'friends') {
        return this.state.items.friends.map((item) => {
            return (
                <VenmoTransaction
                    firstName={item.from}
                    secondName={item.to}
                    description={item.for}
                    time={item.time}
                    paidOrCharged={item.did}
                    image={{ uri: item.image}}
                    transactionAmount={item.amount}
                />)
        })
    }
    if (this.state.page == 'world') {
        return this.state.items.global.map((item) => {
            return (
                <VenmoTransaction
                    firstName={item.from}
                    secondName={item.to}
                    description={item.for}
                    time={item.time}
                    paidOrCharged={item.did}
                    image={{ uri: item.image}}
                    transactionAmount={item.amount}
                />)
        })
    }
    if (this.state.page == 'profile') {
        return this.state.items.profile.map((item) => {
            return (
                <VenmoTransaction
                    firstName={item.from}
                    secondName={item.to}
                    description={item.for}
                    time={item.time}
                    paidOrCharged={item.did}
                    image={{ uri: item.image}}
                    transactionAmount={item.amount}
                />)
        })
    }
  }

  render() {
    return (
      <View >

          <Header
              centerComponent={this.headerCenter()}
              backgroundColor={"#3D95CE"}
              leftComponent={<Icon name={"bars"} size={25} color={"white"} />}
              rightComponent={<Icon name={"edit"} size={30} color={"white"} />}
          ></Header>


          {this.renderPage()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
    segment: {
      width: 66,

      borderRightColor: 'white',
      height: 28,
      alignItems: 'center',
      padding: 4,
      flexDirection: 'column',
      justifyContent: 'center',
  }

});
