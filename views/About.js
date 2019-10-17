import React from 'react'

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Linking
} from 'react-native'

const HeroText = (props) => (
  <Text style={{
    textAlign: 'center',
    color: 'white'
  }}>
    {props.children}
  </Text>
)

const About = ({
  ooniprobeVersion,
  mkVersion
}) => {
  return (
    <View>
      <View style={{
        height: 200,
        backgroundColor: '#0588CB',
        justifyContent: 'center'
      }}>
        {/* TODO: Insert LOGO here */}
        <HeroText>{`ooniprobe: ${ooniprobeVersion}`}</HeroText>
        <HeroText>{`measurement-kit: ${mkVersion}`}</HeroText>
      </View>
      <View style={{
        margin: 30
      }}>
        <Text style={{
          marginBottom: 10
        }}>
          The Open Observatory of Network Interference (OONI) is a free software project under The Tor Project that aims to increase transparency of internet censorship around the world.
        </Text>
        <Text>
          Since 2012, OONI's global community has been measuring networks in more than 200 countries. Some of these measurements serve as evidence of internet censorship.
        </Text>
      </View>
      <View style={{
        height: 100,
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <Button title='Learn More' onPress={() => {
          Linking.openURL('https://ooni.org')
        }} />
        <Text style={{ color: '#0588CB' }} onPress={() => {
          Linking.openURL('https://ooni.org/about/data-policy/')
        }}>OONI Data Policy</Text>
      </View>
    </View>
  )
}

export default About
