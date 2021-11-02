import React from 'react';

import { TouchableOpacity } from 'react-native';

function Button({ children, onPress, activeOpacity, styles }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={activeOpacity}
      style={styles}>
      {children}
    </TouchableOpacity>
  );
}

export default Button;
