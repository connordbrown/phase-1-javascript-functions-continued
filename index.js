const { describe } = require("mocha");

function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(work = "go to the office") {
    return `This Monday, I will ${work}.`;
}

function wrapAdjective(wrapper = '*') {
    return function (descr = 'special') {
        return `You are ${wrapper}${descr}${wrapper}!`;
    }
}