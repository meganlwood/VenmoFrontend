import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableHighlight } from 'react-native';


const CenterPortion = (props) => {
    return(
        <View style={styles.cpOuter}>
            <View style={styles.cpInner}>
                <Text style={styles.boldText}>{props.firstName}</Text>
                <Text>{" " + props.paidOrCharged + " "}</Text>
                <Text style={styles.boldText}>{props.secondName}</Text>
            </View>
            <Text>{props.description}</Text>
            <View style={styles.cpInner}>
                <TouchableHighlight
                    onPress={() => console.log("pressed")}
                    underlayColor={"white"}
                    style={styles.touchableHighlight}
                >
                    <Text>Like</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    underlayColor={"white"}
                    style={styles.touchableHighlight}
                >
                    <Text>Comment</Text>
                </TouchableHighlight>
            </View>
        </View>
    );
}

const VenmoTransaction = (props) => {
    return(
        <View style={styles.outer}>
            <View style={{ flexDirection: 'row', justifyContent: 'center'}}>
                <Image
                    source={props.image}
                    style={styles.profileImage}
                />
            </View>

            <CenterPortion
                firstName={props.firstName}
                paidOrCharged={props.paidOrCharged}
                secondName={props.secondName}
                description={props.description}
            />
            <View style={styles.outerRight}>
                <View style={{ flexDirection: 'row', width: 50, justifyContent: 'flex-end', marginRight: 20  }}>
                    <Text style={styles.grayText}>{props.time}</Text>
                </View>
                <Text style={[styles.redText, styles.boldText, { marginRight: 20 }]}>{props.transactionAmount}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    outer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 100,
        paddingTop: 12,
        paddingBottom: 12,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray'
    },
    outerRight: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        // backgroundColor: 'green'
    },
    cpOuter: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: 250,
        paddingLeft: 10,
        // backgroundColor: 'yellow'
    },
    cpInner: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    boldText: {
        fontWeight: 'bold'
    },
    profileImage: {
        borderRadius: 30,
        width: 60,
        height: 60,
        margin: 10,
        marginRight: 0
    },
    touchableHighlight: {
        marginRight: 40
    },
    grayText: {
        color: 'gray',
    },
    redText: {
        color: 'red'
    }
});

export default VenmoTransaction;