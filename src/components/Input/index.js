import React from 'react';

import { TextInput } from 'react-native';

function Input({
  placeholder,
  placeholderColor,
  defaultValue,
  styles,
  onChange,
}) {
  return (
    <>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={placeholderColor}
        defaultValue={defaultValue}
        style={styles}
        onChangeText={onChange}
      />
    </>
  );
}

export default Input;
