const tree = {
    question: "Two paths lay in front of you. First one takes you through a city road and the other, a forest trail. Which one do you choose?",
    leftText: "City Road",
    rightText: "Forest Trail",

    left: {
        question: "You choose the city road!!",
        leftText: "Left",
        rightText: "Right",
        left: {
            question: "You choose left!!",
            leftText: "Left",
            rightText: "Right",
            left: null,
            right: null
        },
        right: {
            question: "You choose right!!",
            leftText: "Left",
            rightText: "Right",
            left: null,
            right: null
        }
    },

    right: {
        question: "Do you go through the dense forest or walk along the path?",
        leftText: "Dense forest",
        rightText: "Along the path",
        left: {
            question: "You choose left!!",
            leftText: "Left",
            rightText: "Right",
            left: null,
            right: null
        },
        right: {
            question: "You choose right!!",
            leftText: "Left",
            rightText: "Right",
            left: null,
            right: null
        }
    }
};
