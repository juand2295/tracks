import { StyleSheet } from 'react-native'
import Map from '../components/Map';
import { Text } from '@rneui/themed';
import { withNavigationFocus, SafeAreaView } from 'react-navigation';
import Spacer from '../components/Spacer';
import { useContext } from 'react';
// import '../_mockLocation' //only if we dont want to use the location simulator or if we are testing in the physical device to simulate movement
import {Context as LocationContext} from "../context/locationContext"
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';


const TrackCreate = ({isFocused}) => { // isFocused is a prop from withNavigationFocus that will help us know when a component is currently focus on the screen, this in order to stop tracking the location when the user is not recording or in the trakCreate screen to save battery
    const { addLocation } = useContext(LocationContext)
    const [err] = useLocation(isFocused, addLocation)
    
    return (
        <SafeAreaView forceInset={{top:'always'}}>
            <Spacer>
                <Text h1>Create Track</Text>
            </Spacer>
            <Map />
            {err ? <Text>Please enable location services</Text> : null}
            <TrackForm/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
});

export default withNavigationFocus(TrackCreate)