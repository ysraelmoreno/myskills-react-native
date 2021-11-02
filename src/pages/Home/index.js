import React, { useState, useCallback, useEffect } from 'react';
import { Text, StyleSheet, FlatList, View, StatusBar } from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';
import SkillCard from '../../components/SkillCard';
import { useUser } from '../../context/user';

function Home() {
  const [skillInput, setSkillInput] = useState('');
  const [error, setError] = useState('');
  const [skills, setSkills] = useState([]);
  const [greeting, setGreeting] = useState('');
  const { user } = useUser();

  const handleNewSkill = useCallback(() => {
    if (skillInput === '') {
      setError('Por favor, digite uma habilidade');
      return;
    }

    if (skills.includes(skillInput)) {
      setError('Não é possível inserir habilidades duplicadas');
      return;
    }

    setSkills([...skills, skillInput]);
    setSkillInput('');
    setError('');
  }, [skillInput, skills]);

  useEffect(() => {
    const date = new Date();

    if (date.getHours() < 12) {
      setGreeting('Good morning');
    } else if (date.getHours() < 18) {
      setGreeting('Good afternoon');
    } else {
      setGreeting('Good night');
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, {user}</Text>
      <Text style={styles.greetings}>{greeting}</Text>
      <Input
        placeholder="Insert your new skill"
        placeholderColor="#555"
        defaultValue={skillInput}
        styles={styles.input}
        onChange={setSkillInput}
      />
      {!!error && <Text style={styles.error}>{error}</Text>}

      <Button
        onPress={handleNewSkill}
        activeOpacity={0.6}
        styles={styles.button}>
        <Text style={styles.buttonText}>Add</Text>
      </Button>

      <Text style={[styles.title, skillsTitle]}>My skills</Text>

      <FlatList
        data={skills}
        keyExtractor={item => item}
        renderItem={({ item }) => <SkillCard skill={item} />}
      />
    </View>
  );
}

const skillsTitle = {
  marginTop: 50,
  paddingBottom: 20,
  borderBottomWidth: 0.7,
  borderBottomColor: '#262626',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    color: '#fff',
    backgroundColor: '#1F1E25',
    fontSize: 18,
    padding: 15,
    marginTop: 30,
    borderRadius: 7,
  },
  button: {
    alignItems: 'center',
    alignContent: 'center',
    padding: 10,
    marginTop: 20,
    borderRadius: 7,
    backgroundColor: '#a370f7',
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },

  error: {
    color: 'red',
    marginTop: 10,
    textAlign: 'center',
  },
  greetings: {
    color: '#fff',
  },
});

export default Home;
