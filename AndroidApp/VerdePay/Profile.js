import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

let stuff;

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transactions: {"transactions": [{"AMT": 0}]}
    }
    this.responses;
    this.getTransactions();
    this.handlePay();


  }

  getTransactions = async () => {
    const promise1 = await fetch('https://verdepay.herokuapp.com/verdepay/transactions')
    const info = await promise1.json();
    this.setState({
      transactions: info
    })
  }

  handlePay = async () => {
    const result = await fetch('https://verdepay.herokuapp.com/verdepay/transaction/SCOHPUOXM3RIRO42DIUUFID5I7H4L2GQLNJZNND7WVYLANOAYYDNVXNZ/SB4U2AW7UH677C5PYXREAX7K27STEP6YCX2GSEVLMUSVOBYQ3GMXUQRW/30');
  }

  render() {
    let navigate = this.props.navigation.navigate
    let ganggang = this.state.transactions.transactions;

    for (i=0;i<ganggang.length;i++){
      ganggang[i] = JSON.parse(JSON.stringify(ganggang[i]))
    }

    return (
      <View style={styles.container}>
        {
          ganggang.map((value, index) => <Text>Transaction {index}: ${ganggang[index].AMT} amount transferred, carbon fee of ${Math.abs(ganggang[index].AMT * 0.005)}</Text>)
        }

        <Text>Fees have been taken out of your account!</Text>
        <Text>Thank you for saving the environment!</Text>
      </View>
    );
  }

  handlePress = () => {
    console.log('pressed');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20
  },
});
