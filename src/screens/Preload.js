import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

const Preload = ({status}) => {
  return (
    <View style={styles.container}>
      <Text>Preload {status}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = state => {
  return {
    status: state.auth.status,
  };
};

const PreloadConnect = connect(
  mapStateToProps,
  {},
)(Preload);

export default PreloadConnect;
