import { View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Svg, Path } from 'react-native-svg';

const COLORS = {
  like: '#00eda6',
  nope: '#ff006f',
  star: '#07A6FF'
};

const TickIcon = ({ size, color }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M20 6L9 17L4 12"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const CrossIcon = ({ size, color }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M6 6L18 18M6 18L18 6"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const Footer = ({ handleChoice }) => {
  return (
    <View
      style={{
        position: 'absolute',
        bottom: 15,
        width: 240,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: -99999,
      }}
    >
      <TouchableOpacity onPress={() => handleChoice(-1)}>
        <CrossIcon size={24} color={COLORS.nope} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleChoice(1)}>
        <TickIcon size={24} color={COLORS.like} />
      </TouchableOpacity>
    </View>
  );
};

export default Footer;