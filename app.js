// Triangle One 

const traingleOneHeight = 13;
const traingleOneBase = 10;
const traingleOneArea = (traingleOneBase * traingleOneHeight) / 2;
const triangleOneSpan = document.getElementById('triangle-one').innerText = `${traingleOneArea}cm`;

console.log(`Triangle One has an area of ${traingleOneArea}cm`)

// Triangle Two 

const traingleTwoHeight = 20.3;
const traingleTwoBase = 16.5;
const traingleTwoArea = (traingleTwoBase * traingleTwoHeight) / 2;
const triangleTwoSpan = document.getElementById('triangle-two').innerText = `${traingleTwoArea}cm`;

console.log(`Triangle Two has an area of ${traingleTwoArea}cm`)
const caseNoteOne = document.getElementById('case-one');

if(traingleOneArea > traingleTwoArea) {
    console.log(`CASE 1: Triangle One has an area of xx and Triangle Two has cm2`)
    caseNoteOne.innerText = 'CASE 1: Triangle One has an area of xx and Triangle Two has cm2';
} else {
    console.log(`CASE 1: Triangle Two has an area of xx and Triangle One has cm2`)
    caseNoteOne.innerText = 'CASE 1: Triangle Two has an area of xx and Triangle One has cm2';
}

// Triangle Three 

const traingleThreeHeight = 20.3;
const traingleThreeBase = 16.5;
const traingleThreeArea = (traingleThreeBase * traingleThreeHeight) / 2;
const triangleThreeSpan = document.getElementById('triangle-three').innerText = `${traingleThreeArea}cm`;

console.log(`Triangle Three has an area of ${traingleThreeArea}cm`)

// Triangle Four 

const traingleFourHeight = 16.5;
const traingleFourBase = 20.3;
const traingleFourArea = (traingleFourBase * traingleFourHeight) / 2;
const triangleFourSpan = document.getElementById('triangle-four').innerText = `${traingleFourArea}cm`;

console.log(`Triangle Four has an area of ${traingleFourArea}cm`)
const caseNoteTwo = document.getElementById('case-two');

if(traingleThreeArea > traingleFourArea) {
    console.log(`CASE 2: Triangle Three has an area of xx and Triangle Four has cm2`)
    caseNoteTwo.innerText = 'CASE 2: Triangle Three has an area of xx and Triangle Four has cm2';
} else {
    console.log(`CASE 2: Triangle Four has an area of xx and Triangle Three has cm2`)
    caseNoteTwo.innerText = 'CASE 2: Triangle Four has an area of xx and Triangle Three has cm2';
}

// Triangle Five 

const traingleFiveHeight = 5.6;
const traingleFiveBase = 7.8;
const traingleFiveArea = (traingleFiveBase * traingleFiveHeight) / 2;
const triangleFiveSpan = document.getElementById('triangle-five').innerText = `${traingleFiveArea}cm`;

console.log(`Triangle Five has an area of ${traingleFiveArea}cm`)

// Triangle Six 

const traingleSixHeight = 12.4;
const traingleSixBase = 9.3;
const traingleSixArea = (traingleSixBase * traingleSixHeight) / 2;
const triangleSixSpan = document.getElementById('triangle-six').innerText = `${traingleSixArea}cm`;

console.log(`Triangle Six has an area of ${traingleSixArea}cm`)
const caseNoteThree = document.getElementById('case-three');

if(traingleFiveArea > traingleSixArea) {
    console.log(`CASE 3: Triangle Five has an area of xx and Triangle Six has cm3`)
    caseNoteThree.innerText = 'CASE 3: Triangle Five has an area of xx and Triangle Six has cm3'
} else {
    console.log(`CASE 3: Triangle Six has an area of xx and Triangle Five has cm2`)
    caseNoteThree.innerText = 'CASE 3: Triangle Five has an area of xx and Triangle Six has cm3'
}