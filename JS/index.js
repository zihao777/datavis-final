console.log(lax);
window.scrollTo(0, 0);

window.onload = function () {
    $(".radialTree").scrollLock();

    lax.init();

    lax.addDriver(
        "scrollY",
        function () {
            return document.documentElement.scrollTop;
        },
        { frameStep: 1 }
    );

    lax.addElements(".name", {
        scrollY: {
            opacity: [[0, "screenHeight/3"], [1, 0]],
        }
    });

    lax.addElements(".letter-F", {
        scrollY: {
            translateY: [[0, 100], [0, 100]],
            opacity: [[0, 200], [1, 0]],
        }
    });

    lax.addElements(".letter-A", {
        scrollY: {
            translateX: [[0, "screenHeight"], [0, 400]],
            opacity: [[0, "screenHeight/2"], [1, 0]]
        }
    });

    lax.addElements(".letter-R", {
        scrollY: {
            translateX: [[0, "screenHeight"], [0, -400]],
            opacity: [[0, "screenHeight/2"], [1, 0]]
        }
    });

    lax.addElements(".letter-m", {
        scrollY: {
            translateX: [[0, "screenHeight"], [0, 500]],
            opacity: [[0, "screenHeight/2"], [1, 0]]
        }
    });

    lax.addElements(".letter-V", {
        scrollY: {
            translateX: [[0, "screenHeight"], [0, 400]],
            scale: [[0, "screenHeight"], [1, 10]],
            opacity: [[0, "screenHeight/2"], [1, 0]]
        }
    });

    lax.addElements(".letter-i", {
        scrollY: {
            translateY: [[0, 300], [0, -200]],
            opacity: [[0, 200], [1, 0]]
        }
    });

    lax.addElements(".letter-S", {
        scrollY: {
            translateX: [[0, "screenHeight"], [0, -200]],
            opacity: [[0, "screenHeight/2"], [1, 0]]
        }
    });


    lax.addElements(".scrolldown", {
        scrollY: {
            "letter-spacing": [
                [0, "screenHeight"],
                [0, 150],
                {
                    cssUnit: "px"
                }
            ],
            opacity: [["screenHeight*0.25", "screenHeight*0.75"], [1, 0]],
            translateX: [[0, "screenHeight", "screenHeight*3/2"], [0, 80, 3000]]
        }
    });

    lax.addElements(".downarrows img", {
        scrollY: {
            translateY: [
                [0, 200],
                [0, 200]
            ],
            opacity: [
                [0, "screenHeight"],
                [1, 0]
            ]
        }
    });

    // lax.addElements(".bubble", {
    //     scrollY: {
    //         translateY: [
    //             ["screenHeight/4", "screenHeight * 3.5"],
    //             ["Math.random()*screenHeight", "Math.random()*screenHeight*3"]
    //         ],
    //         opacity: [
    //             ["screenHeight/4", "screenHeight/2"],
    //             [0, 1]
    //         ],
    //         scale: [[0], ["(Math.random()*0.8)+0.2"]],
    //         translateX: [[0], ["index*(screenWidth/25)-50"]],
    //         transform: [
    //             [0, 4000],
    //             [0, "(Math.random() + 0.8) * 1000"],
    //             {
    //                 cssFn: function (val) {
    //                     return `rotateX(${val % 360}deg)`
    //                 }
    //             }
    //         ],
    //         rotate: [
    //             [0, 4000],
    //             [0, "(Math.random() - 0.5) * 1000"],
    //         ],
    //     }
    // });
    lax.addElements(".gallary", {
        scrollY: {
            translateX: [["screenHeight*19/40", "screenHeight/2", "screenHeight*5/2", "screenHeight*51/20"], [-2000, 0, 0, -2000]],
            opacity: [
                ["screenHeight/2", "screenHeight", "screenHeight*2", "screenHeight*5/2"],
                [0, 1, 1, 0]
            ]
        }
    }, {
        style: {
            display: "block"
        }
    });

    $(".item3").on("click", function () {
        document.documentElement.scrollTop = screen.height * 3;
    })

    $(".item4").on("click", function () {
        document.documentElement.scrollTop = screen.height * 5;
    })

    $(".item2").on("click", function () {
        document.documentElement.scrollTop = screen.height * 7;
    })

    $(".item1").on("click", function () {
        document.documentElement.scrollTop = screen.height * 9;
    })


    lax.addElements(".carousel", {
        scrollY: {
            translateX: [["screenHeight*19/40", "screenHeight/2", "screenHeight*5/2", "screenHeight*51/20"], [-2000, 0, 0, -2000]],
            opacity: [
                ["screenHeight/2", "screenHeight", "screenHeight*2", "screenHeight*5/2"],
                [0, 1, 1, 0]
            ]
        }
    }, {
        style: {
            display: "block"
        }
    });

    lax.addElements(".radialTree", {
        scrollY: {
            translateX: [["screenHeight*99/40", "screenHeight*5/2", "screenHeight*9/2", "screenHeight*91/20"], [0, screen.width, screen.width, 0]],
            opacity: [
                ["screenHeight*5/2", "screenHeight*3", "screenHeight*4", "screenHeight*9/2"],
                [0, 1, 1, 0]
            ]
        }
    }, {
        style: {
            display: "block"
        }
    });

    lax.addElements(".soilTest", {
        scrollY: {
            translateX: [["screenHeight*89/20", "screenHeight*9/2", "screenHeight*13/2", "screenHeight*131/20"], [-2000, 0, 0, -2000]],
            opacity: [
                ["screenHeight*9/2", "screenHeight*5", "screenHeight*6", "screenHeight*13/2"],
                [0, 1, 1, 0]
            ]
        }
    }, {
        style: {
            display: "block"
        }
    });

    lax.addElements(".radialPie", {
        scrollY: {
            translateX: [["screenHeight*129/20", "screenHeight*13/2", "screenHeight*17/2", "screenHeight*171/20"], [-2000, 0, 0, -2000]],
            opacity: [
                ["screenHeight*13/2", "screenHeight*7", "screenHeight*8", "screenHeight*17/2"],
                [0, 1, 1, 0]
            ]
        }
    }, {
        style: {
            display: "block"
        }
    });

    lax.addElements(".radialBar", {
        scrollY: {
            translateX: [["screenHeight*169/20", "screenHeight*17/2", "screenHeight*21/2", "screenHeight*211/20"], [-2000, 0, 0, -2000]],
            opacity: [
                ["screenHeight*17/2", "screenHeight*9", "screenHeight*10", "screenHeight*21/2"],
                [0, 1, 1, 0]
            ]
        }
    }, {
        style: {
            display: "block"
        }
    });

    lax.addElements('#pinkZag', {
        scrollY: {
            translateY: [
                ["screenHeight*10", "screenHeight*12"],
                [0, -screen.height]
            ],
        }
    })

    lax.addElements('#tealZag', {
        scrollY: {
            translateY: [
                ["screenHeight*10", "screenHeight*12"],
                [0, -screen.height * 4 / 5]
            ],
        }
    })

    lax.addElements('#purpleZag', {
        scrollY: {
            translateY: [
                ["screenHeight*10", "screenHeight*12"],
                [0, -screen.height * 3 / 5]
            ],
        }
    })




}