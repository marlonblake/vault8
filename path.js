// left: {
//     question: "You choose left!!",
//     leftText: "Left",
//     rightText: "Right",
//     left: null,
//     right: null
// },
// right: {
//     question: "You choose right!!",
//     leftText: "Left",
//     rightText: "Right",
//     left: null,
//     right: null
// }


const path = {
    question: "Two paths lay in front of you. First one takes you through a city road and the other, a forest trail. Which one do you choose?",
    leftText: "City Road",
    rightText: "Forest Trail",

    left: {
        question: "Do you choose to go towards the neighbourhood that is well lit or the other poorly lit one?",
        leftText: "Well lit",
        rightText: "Poorly lit",
        left: {
            question: "You choose left!!",
            leftText: "Left",
            rightText: "Right",
            left: null,
            right: null
        },
        right: {
            question: "You hear someone's footsteps racing towards you. What is your of action?",
            leftText: "Turn around and confront them",
            rightText: "Run",
            left: {
                question: "Footsteps stop and you don't see anyone. Do you...",
                leftText: "Continue walking",
                rightText: "Wait and look around",
                left: {
                    question: "Someone grabs you from behind and takes you away",
                    leftText: "<span style='color: red;'>GAME OVER</span>",
                    rightText: "Try Again",
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
                question: "Sound of the footsteps stop. Alone an empty road, you see a streetlight flickering, Do you...",
                leftText: "Check it out",
                rightText: "Go opposite way",
                left: {
                    question: "You see an open manhole right below the flickering streetlight. Do you go down inside or walk straight?",
                    leftText: "Go down inside",
                    rightText: "Walk ahead",
                    left: {
                        question: "There are two ways. Which way  do you choose?",
                        leftText: "Right",
                        rightText: "Left",
                        left: {
                            question: "A leaking yellow gas makes you fall unconscious",
                            leftText: "<span style='color: red;'>GAME OVER</span>",
                            rightText: "Try Again",
                            left: null,
                            right: null
                        },
                        right: {
                            question: "You see a light at the end of the tunnel. It's the vault. Do you have the key?",
                            leftText: "Yes",
                            rightText: "No",
                            left: null,
                            right: null
                        }
                    }
                },
                right: {
                    question: "You choose right!!",
                    leftText: "Left",
                    rightText: "Right",
                    left: null,
                    right: null
                }
            }
        }
    },

    right: {
        question: "Do you go through the dense forest or walk along the path?",
        leftText: "Dense forest",
        rightText: "Along the path",
        left: {
            question: "You hear a rustling noise coming from the woods. Do you try to locate it?",
            leftText: "Yes",
            rightText: "Turn around",
            left: {
                question: "The sound becomes more intense and loud, Do you still follow it?",
                leftText: "Yes",
                rightText: "No, go some other way",
                left: {
                    question: "The sound starts ringing repeatedly in your head intensly until you pass out.",
                    leftText: "<span style='color: red;'>GAME OVER</span>",
                    rightText: "Try Again",
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
                question: "You choose right!!",
                leftText: "Left",
                rightText: "Right",
                left: null,
                right: null
            }
        },
        right: {
            question: "You have reached the lake side. You hear a creature growling do you...",
            leftText: "Trace your way back",
            rightText: "Hide behind the old tree",
            left: {
                question: "You choose left!!",
                leftText: "Left",
                rightText: "Right",
                left: null,
                right: null
            },
            right: {
                question: "You are safely hidden for now. There is something shining in the lake. It's the key.",
                leftText: "Take the key",
                rightText: "Stay hidden",
                left: {
                    question: "You took the key but it alerted the creature. Will you...",
                    leftText: "Stay still",
                    rightText: "Distract it",
                    left: {
                        question: "You choose left!!",
                        leftText: "Left",
                        rightText: "Right",
                        left: null,
                        right: null
                    },
                    right: {
                        question: "You hear the creature run away and you trace steps back. Where do you go next?",
                        leftText: "City Road",
                        rightText: "Into the woods",
                        left: {
                            question: "We have to make this connected to first city road. Still on going",
                            leftText: "Left",
                            rightText: "Right",
                            left: null,
                            right: null
                        },
                        right: {
                            question: "You see a cloth hanging on a tree. Do you...",
                            leftText: "Inspect the cloth",
                            rightText: "Leave and walk ahead",
                            left: {
                                question: "A trap net emerges from the ground and captures you.",
                                leftText: "<span style='color: red;'>GAME OVER</span>",
                                rightText: "Try Again",
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
                    }
                },
                right: {
                    question: "You choose right!!",
                    leftText: "Left",
                    rightText: "Right",
                    left: null,
                    right: null
                }
            }
        }
    }
};
