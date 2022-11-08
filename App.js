import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Button } from 'react-native';
import styles from './styles';
import Joke from './components/Jokes';
import Punchline from './components/Punchline';
import Another from './components/Another';

export default function App() {

  //create state to hold jokes
  const [jokeList, setJokeList] = useState();

  //state to hold last joke index
  const [currentJokeIndex, setCurrentJokeIndex] = useState(0);

  const [showJoke, setShowJoke] = useState();

  //create function to get another
  const getNextJoke = () => {
    if (currentJokeIndex < jokeList.length - 1) {
      setCurrentJokeIndex(currentJokeIndex + 1);
    } else {
      setCurrentJokeIndex(0);
    }
  }

  //useEffect to get all jokes
  useEffect(() => {
    fetch('https://api.sampleapis.com/jokes/goodJokes')
      .then(res => res.json())
      .then(setJokeList)
      .catch(alert)
  }, []);

  return (
    <View style={styles.container}>
      {
        jokeList
          ? <>
            <Joke joke={jokeList[currentJokeIndex].setup} />
          </>
          : null
      }
      {
        jokeList && showJoke
          ? <>
            <Punchline punchline={jokeList[currentJokeIndex].punchline} />
          </>
          : <Button title={'Show punchline'} onPress={()=>setShowJoke(true)}/>
      }
      <Another getNextJoke={getNextJoke} setShowJoke={setShowJoke}/>
      <StatusBar style="auto" />
    </View>
  );
}