import React, {Component, Fragment} from 'react';
import {TouchableOpacity, Text, View, Image, StyleSheet} from 'react-native';
import {BarCodeReadEvent} from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {checkIfEmailInString} from '../../library/functions';
import styles from './styles';

type Props = {
  onDetected: Function;
};

type IState = {
  result: any;
  scan: boolean;
  ScanResult: boolean;
  notAnEmail: boolean | null;
};

class Scan extends Component<Props, IState> {
  state: IState = {
    result: null,
    scan: false,
    ScanResult: false,
    notAnEmail: false,
  };

  scanner: QRCodeScanner | null = null;

  onSuccess = (e: BarCodeReadEvent) => {
    const email = checkIfEmailInString(e.data);
    console.log(email, email);
    this.setState(
      {
        result: e,
        scan: false,
        ScanResult: true,
        notAnEmail: email === null,
      },
      () => this.props.onDetected(email),
    );
  };

  activeQR = () => {
    this.setState({scan: true});
  };
  scanAgain = () => {
    this.setState({scan: true, ScanResult: false, notAnEmail: false});
  };

  render() {
    const {scan, ScanResult, result} = this.state;
    return (
      <View style={styles.scrollViewStyle}>
        <Fragment>
          {!scan && !ScanResult && (
            <View style={styles.cardView}>
              <Image
                source={require('./assets/camera.png')}
                style={style.image}
              />
              <Text numberOfLines={8} style={styles.descText}>
                Please move your camera {'\n'} over the QR Code
              </Text>
              <Image
                source={require('./assets/qr-code.png')}
                style={style.margin20}
              />
              <TouchableOpacity
                onPress={this.activeQR}
                style={styles.buttonScan}>
                <View style={styles.buttonWrapper}>
                  <Image
                    source={require('./assets/camera.png')}
                    style={style.image}
                  />
                  <Text style={style.textStyles}>Scan QR Code</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
          {ScanResult && (
            <>
              <View style={style.hrPadding}>
                {this.state.notAnEmail && (
                  <Text style={style.warning}>Please Scan an Email ! </Text>
                )}
                <Text style={styles.textTitle1}>{result?.data}</Text>
              </View>
              <View style={ScanResult ? styles.scanCardView : styles.cardView}>
                <TouchableOpacity
                  onPress={this.scanAgain}
                  style={styles.buttonScan}>
                  <View style={styles.buttonWrapper}>
                    <Image
                      source={require('./assets/camera.png')}
                      style={style.image}
                    />
                    <Text style={style.textStyles}>Click to scan again</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </>
          )}
          {scan && (
            <QRCodeScanner
              reactivate={true}
              showMarker={true}
              ref={node => {
                this.scanner = node;
              }}
              onRead={this.onSuccess}
              topContent={
                <Text style={styles.centerText}>
                  Please move your camera {'\n'} over the QR Code
                </Text>
              }
            />
          )}
        </Fragment>
      </View>
    );
  }
}

const style = StyleSheet.create({
  image: {height: 36, width: 36},
  textStyles: {...styles.buttonTextStyle, color: '#2196f3'},
  margin20: {margin: 20},
  warning: {marginTop: 10, color: 'red', fontSize: 18},
  hrPadding: {paddingHorizontal: 20},
});

export default Scan;
