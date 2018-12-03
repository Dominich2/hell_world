import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Constants } from 'expo';


const ProfilePic = () => (
        <View>
            <Image
                style={styles.image}
                resizeMode={'cover'}
                source={require('../../assets/profilePic.jpg')}
            />
        </View>
    );

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
    },
    image: {
        height: 80,
        width: 80,
        borderRadius: 40,
    }
});


export default ProfilePic;
