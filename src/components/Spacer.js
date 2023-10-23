import { Text, StyleSheet, View} from 'react-native'

const Spacer = ({children}) => {
    return (
        <View style={styles.spacer}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    spacer : {
        marginVertical: 10,
        marginHorizontal: 15
    }
});

export default Spacer;