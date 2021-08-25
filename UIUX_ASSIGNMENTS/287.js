import React, { useRef, useEffect, useState, useCallback } from "react";
import mojs from "@mojs/core";

var htmlA = new mojs.Html({
    el: ".a",
    x: {
        0: 400
    },
    angleZ: {
        0: 720
    },
    duration: 1000,
    repeat: 4,
    isYoyo: true
});

var htmlB = new mojs.Html({
    el: ".b",
    x: {
        400: 0
    },
    angleY: {
        0: 360
    },
    angleZ: {
        0: 720
    },
    duration: 1000,
    repeat: 4
});

var htmlC = new mojs.Html({
    el: ".c",
    x: {
        0: 400
    },
    angleY: {
        0: 360
    },
    scaleZ: {
        1: 2
    },
    skewX: {
        0: 30
    },
    duration: 1000,
    repeat: 4,
    isYoyo: true
});

document.querySelector(".play").addEventListener("click", function() {
    htmlA.play();
    htmlB.play();
    htmlC.play();
});