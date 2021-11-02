import React from 'react';
import { Text, StyleSheet } from 'react-native';

function SkillCard({ skill }) {
  return (
    <Text style={styles.skill} key={skill}>
      {skill}
    </Text>
  );
}

const styles = StyleSheet.create({
  skill: {
    color: '#fff',
    backgroundColor: '#1F1E25',
    padding: 20,
    borderRadius: 7,
    marginTop: 10,
  },
});

export default SkillCard;
