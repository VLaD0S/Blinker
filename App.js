import React, { Component } from "react";
import { AppRegistry, Text, View } from "react-native";

class Blink extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShowingText: true,
      myDynamicColor: "#4286f4",
      prevColor: "#4286f4"
    };

    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      });
    }, 1000);

    setInterval(() => {
      const letters = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F"
      ];
      var color = "#";

      for (var i = 0; i < 6; i++) {
        randhex = Math.floor(Math.random() * 16);
        append = letters[Math.floor(randhex)];
        color += append;
      }
      this.setState(previousState => {
        return {
          myDynamicColor: color,
          prevColor: previousState.myDynamicColor
        };
      });
    }, Math.random() * 500);
  }

  render() {
    let display = this.state.isShowingText ? this.props.text : " ";
    let seizure = this.state.myDynamicColor;

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: this.state.myDynamicColor,
          justifyContent: "center"
        }}
      >
        <Text
          style={{
            fontSize: 60,
            fontWeight: "bold",
            textAlign: "center",
            color: this.state.prevColor
          }}
        >
          {display}
        </Text>
      </View>
    );
  }
}

export default class BlinkApp extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Blink text="BLIIINK" />

        <Blink text="BLIIINK" />

        <Blink text="BLIIINK" />

        <Blink text="BLIIINK" />

        <Blink text="BLIIINK" />
      </View>
    );
  }
}
