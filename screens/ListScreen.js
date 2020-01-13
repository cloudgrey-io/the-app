import React, { Component } from 'react';
import { Text, ScrollView, StyleSheet, Alert } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { testProps } from '../lib/utils';

const CLOUD_TYPES = {
  'Altocumulus': 'mid-level stratocumuliform limited-convective',
  'Altostratus': 'mid-level stratiform non-convective',
  'AWS': 'the safest and protected platform of cloud service which offers a wide set of infrastructure services like database storage, computing power, networking',
  'Azure': 'used for deploying, designing and managing the applications through a worldwide network',
  'Cirrocumulus': 'high-level stratocumuliform limited-convective',
  'Cirrostratus': 'high-level stratiform non-convective',
  'Cirrus': 'high-level cirriform mostly non-convective',
  'Creative Cloud': 'Adobe offers many products that provide cloud services',
  'Cumulonimbus': 'towering vertical cumulonimbiform strong-convective',
  'Cumulus Congestus': 'towering vertical cumuliform free-convective',
  'Cumulus Mediocris': 'vertical/multi-level cumuliform free-convective',
  'Cumulus humilis': 'low-level cumuliform free-convective',
  'Dropbox': 'a refined cloud storage service used by small businesses and customers to store files or documents virtually on remote cloud servers',
  'Fog': 'surface-level stratiform non-convective',
  'Google Cloud Platform': 'uses resources such as computers, virtual machines, hard disks, etc. located at Google data centers',
  'IBM Cloud': 'offers Iaas, PaaS, and SaaS through all the available cloud delivery models',
  'Kamatera': 'provides very low-maintenance and high-performance cloud infrastructure services',
  'Nimbostratus': 'vertical/multi-level stratiform non-convective',
  'Noctilucent': 'extreme-level cirriform mostly non-convective',
  'Oracle Cloud': 'available as SaaS, PaaS, and IaaS. Oracle Cloud helps the companies in transforming their business quickness and reducing the IT Complexity',
  'PhoenixNAP': 'a global IT services provider offering secure and scalable Infrastructure-as-a-Service solutions, including private, public, and managed cloud services',
  'Polar Stratospheric': 'very high-level cirriform mostly non-convective',
  'Rackspace Cloud': 'offers a set of cloud computing services like hosting web applications, Cloud Files, Cloud Block Storage, Cloud Backup, Databases and Cloud Servers',
  'RedHat': 'an Open Cloud technology used by IT organizations to deliver agile and flexible solutions',
  'Salesforce Cloud': 'offers all the applications required by businesses like CRM, ERP, customer service, sales, mobile applications, and marketing',
  'SAP': 'an enterprise service with wide-ranging services required for application development',
  'ScienceSoft': 'a renowned US-based provider of cloud infrastructure services',
  'Stratocumulus': 'low-level stratocumuliform limited-convective',
  'Stratus': 'low-level stratiform non-convective',
  'VMWare': 'a universal leader in virtualization and Cloud Infrastructure',
};

const styles = StyleSheet.create({
  listHeader: {
    padding: 8,
    fontSize: 14,
    marginBottom: -20,
  },
});

export default class ListScreen extends Component {

  showPickedAlert (cloudType) {
    const onLearnMore = () => {
      Alert.alert(
        cloudType,
        `This is a ${CLOUD_TYPES[cloudType]} cloud`
      );
    };
    Alert.alert(
      'Your Cloud Selection',
      `Congratulations! You expressed interest in the ${cloudType} cloud`,
      [
        {text: `Learn more about ${cloudType}`, onPress: onLearnMore},
        {text: 'Cancel', style: 'cancel'},
        {text: 'OK'},
      ],
      {cancelable: false}
    );
  }

  render() {
    return (
      <ScrollView>
        <Text style={styles.listHeader}>Check out these clouds</Text>
        <List>
          {Object.keys(CLOUD_TYPES).map(cloudType => (
            <ListItem
              key={cloudType}
              title={cloudType}
              onPress={() => this.showPickedAlert(cloudType)}
              {...testProps(cloudType)}
            />
          ))}
        </List>
      </ScrollView>
    );
  }
}
