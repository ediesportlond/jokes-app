import { Text, TouchableOpacity } from 'react-native';
import styles from '../styles';

export default function Another({ getNextJoke, setShowJoke }){
    return (
        <>
            <TouchableOpacity style={styles.bigButton} onPress={()=>{
                setShowJoke()
                getNextJoke()
                }}>
                <Text style={styles.buttonText}>Another One</Text>
            </TouchableOpacity>
        </>
    )
}