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
            question: "There is someone patrolling the corner, what do you do?",
            leftText: "Act normal and keep walking",
            rightText: "Jump the fence quietly",
            left: {
                question: "They find you suspicious and stop you from entering<br><span style='color: red;'>GAME OVER</span>",
                leftText: null,
                rightText: "Try Again",
                left: null,
                right: null
            },
            right: {
                question: "You jump into someone's backyard. The dog starts barking. Do you try hush the dog or find somewhere to hide?",
                leftText: "Hush the dog",
                rightText: "Hide",
                left: {
                    question: "They catch you trespassing and drag you out of there<br><span style='color: red;'>GAME OVER</span>",
                    leftText: null,
                    rightText: "Try Again",
                    left: null,
                    right: null
                },
                right: {
                    question: "You find and enter a basement door to hide in. It's dark inside, do you walk downstairs or get out?",
                    leftText: "Walk inside",
                    rightText: "Get out",
                    left: {
                        question: "It's completely dark and you hear a girl crying. Do you turn on the basement light or walk towards the sound of the girl?",
                        leftText: "Turn on light",
                        rightText: "Walk towards the crying sound",
                        left: {
                            question: "The bulb breaks and you get hauled into darkness<br><span style='color: red;'>GAME OVER</span>",
                            leftText: null,
                            rightText: "Try Again",
                            left: null,
                            right: null
                        },
                        right: {
                            question: "The crying suddenly stops and you are dragged into the dark.<br><span style='color: red;'>GAME OVER</span>",
                            leftText: null,
                            rightText: "Try Again",
                            left: null,
                            right: null
                        }
                    },
                    right: {
                        question: "Try see you leaving the basement and catch you.<br><span style='color: red;'>GAME OVER</span>",
                        leftText: null,
                        rightText: "Try Again",
                        left: null,
                        right: null
                    }
                }
            }
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
                    question: "Someone grabs you from behind and takes you away<br><span style='color: red;'>GAME OVER</span>",
                    leftText: null,
                    rightText: "Try Again",
                    left: null,
                    right: null
                },
                right: {
                    question: "Alone an empty road, you see a streetlight flickering, Do you...",
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
                                question: "A leaking yellow gas makes you fall unconscious<br><span style='color: red;'>GAME OVER</span>",
                                leftText: null,
                                rightText: "Try Again",
                                left: null,
                                right: null
                            },
                            right: {
                                question: "You see a light at the end of the tunnel. It's the vault. Do you have the key?",
                                leftText: "Yes",
                                rightText: "No",
                                left: {
                                    question: "You have unclocked the vault.<br>Your code is 1235789",
                                    leftText: null,
                                    rightText: "Quit",
                                    left: null,
                                    right: null
                                },
                                right: {
                                    question: "The vault cannot be opened without the key.<br><span style='color: red;'>GAME OVER</span>",
                                    leftText: null,
                                    rightText: "Try Again",
                                    left: null,
                                    right: null
                                }
                            }
                        },
                        right: {
                        question: "The streetlight dies and someone drags you into the dark<br><span style='color: red;'>GAME OVER</span>",
                        leftText: null,
                        rightText: "Try Again",
                        left: null,
                        right: null
                    } 
                    },
                    right: {
                        question: "You turn around and it's completely dark. You're falling through the ground indefinitely.<br><span style='color: red;'>GAME OVER</span>",
                        leftText: null,
                        rightText: "Try Again",
                        left: null,
                        right: null
                    }
                }
            },
            right: {
                question: "Sound of the footsteps stop. Alone an empty road, you see a streetlight flickering, Do you...",
                leftText: "Check it out",
                rightText: "Go opposite way",
                left: null,
                right: null
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
                    question: "The sound starts ringing repeatedly in your head intensly until you pass out.<br><span style='color: red;'>GAME OVER</span>",
                    leftText: null,
                    rightText: "Try Again",
                    left: null,
                    right: null
                },
                right: {
                    question: "You see a cloth hanging on a tree. Do you...",
                    leftText: "Inspect the cloth",
                    rightText: "Leave and walk ahead",
                    left: {
                        question: "A trap net emerges from the ground and captures you.<br><span style='color: red;'>GAME OVER</span>",
                        leftText: null,
                        rightText: "Try Again",
                        left: null,
                        right: null
                    },
                    right: {
                        question: "There is a deep pit in front of you that leads into a den. Do you climb down or try to look from above?",
                        leftText: "Climb down",
                        rightText: "Peek from above",
                        left: {
                            question: "Your foot slips and you slide roughly into the edges of the pit and get stuck.<br><span style='color: red;'>GAME OVER</span>",
                            leftText: null,
                            rightText: "Try Again",
                            left: null,
                            right: null
                        },
                        right: {
                            question: "You feel someone's hands pushing you forward as you fall into the pit and go unconscious.<br><span style='color: red;'>GAME OVER</span>",
                            leftText: null,
                            rightText: "Try Again",
                            left: null,
                            right: null
                        }
                    }
                }
            },
            right: null
        },
        right: {
            question: "You have reached the lake side. You hear a creature growling do you...",
            leftText: "Trace your way back",
            rightText: "Hide behind the old tree",
            left: {
                question: "The creature jumps onto you, catches you and drags you away.<br><span style='color: red;'>GAME OVER</span>",
                leftText: null,
                rightText: "Try Again",
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
                        question: "The creature catches you hiding behind the tree and clenches you.<br><span style='color: red;'>GAME OVER</span>",
                        leftText: null,
                        rightText: "Try Again",
                        left: null,
                        right: null
                    },
                    right: {
                        question: "You hear the creature run away and you trace steps back. Where do you go next?",
                        leftText: "City Road",
                        rightText: "Into the woods",
                        left: null,
                        right: {
                            question: "You see a cloth hanging on a tree. Do you...",
                            leftText: "Inspect the cloth",
                            rightText: "Leave and walk ahead",
                            left: {
                                question: "A trap net emerges from the ground and captures you.<br><span style='color: red;'>GAME OVER</span>",
                                leftText: null,
                                rightText: "Try Again",
                                left: null,
                                right: null
                            },
                            right: {
                                question: "There is a deep pit in front of you that leads into a den. Do you climb down or try to look from above?",
                                leftText: "Climb down",
                                rightText: "Peek from above",
                                left: {
                                    question: "Your foot slips and you slide roughly into the edges of the pit and get stuck.<br><span style='color: red;'>GAME OVER</span>",
                                    leftText: null,
                                    rightText: "Try Again",
                                    left: null,
                                    right: null
                                },
                                right: {
                                    question: "You feel someone's hands pushing you forward as you fall into the pit and go unconscious.<br><span style='color: red;'>GAME OVER</span>",
                                    leftText: null,
                                    rightText: "Try Again",
                                    left: null,
                                    right: null
                                }
                            }
                        }
                    }
                },
                right: {
                    question: "You hear the creature run away and you trace steps back. Where do you go next?",
                    leftText: "City Road",
                    rightText: "Into the woods",
                    left: null,
                    right: {
                        question: "You see a cloth hanging on a tree. Do you...",
                        leftText: "Inspect the cloth",
                        rightText: "Leave and walk ahead",
                        left: {
                            question: "A trap net emerges from the ground and captures you.<br><span style='color: red;'>GAME OVER</span>",
                            leftText: null,
                            rightText: "Try Again",
                            left: null,
                            right: null
                        },
                        right: {
                            question: "There is a deep pit in front of you that leads into a den. Do you climb down or try to look from above?",
                            leftText: "Climb down",
                            rightText: "Peek from above",
                            left: {
                                question: "Your foot slips and you slide roughly into the edges of the pit and get stuck.<br><span style='color: red;'>GAME OVER</span>",
                                leftText: null,
                                rightText: "Try Again",
                                left: null,
                                right: null
                            },
                            right: {
                                question: "You feel someone's hands pushing you forward as you fall into the pit and go unconscious.<br><span style='color: red;'>GAME OVER</span>",
                                leftText: null,
                                rightText: "Try Again",
                                left: null,
                                right: null
                            }
                        }
                    }
                }
            }
        }
    }
};
