function PopUpBoxFunction() {
    document.getElementById("leftPopUpBox").style.display = "block"
    document.getElementById("leftPopUpBox").style.animationName = "leftPopUpBoxAnimation"
    document.getElementById("leftPopUpBox").style.animationDelay = "0s"
    document.getElementById("rightPopUpBox").style.display = "block"
    document.getElementById("rightPopUpBox").style.animationName = "rightPopUpBoxAnimation"
    document.getElementById("rightPopUpBox").style.animationDelay = "0s"
    document.getElementById("slidingBorderRightPopUpBox").style.animationName = "slidingBorderRightPopUpBoxAnimationOpenBeforeTurn"
    document.getElementById("slidingBorderRightPopUpBox").style.animationDuration = "1s"
    document.getElementById("slidingBorderRightPopUpBox").style.animationDelay = "1s"
}

function PopUpBoxButtonClose() {
    document.getElementById("leftPopUpBox").style.animationDelay = "1s"
    document.getElementById("leftPopUpBox").style.animationName = "leftPopUpBoxAnimationBack"
    document.getElementById("rightPopUpBox").style.animationDelay = "1s"
    document.getElementById("rightPopUpBox").style.animationName = "rightPopUpBoxAnimationBack"
    document.getElementById("slidingBorderRightPopUpBox").style.animationName = "slidingBorderRightPopUpBoxAnimationCloseBeforeTurn"
    document.getElementById("slidingBorderRightPopUpBox").style.animationDuration = "1s"
    document.getElementById("slidingBorderRightPopUpBox").style.animationDelay = "0s"
}

function rightPopUpBoxTiltFunction() {
    document.getElementById("slidingBorderRightPopUpBox").style.animationName = "slidingBorderRightPopUpBoxAnimationCloseBeforeTurn"
    document.getElementById("slidingBorderRightPopUpBox").style.animationDuration = "1s"
    document.getElementById("slidingBorderRightPopUpBox").style.animationDelay = "0s"
    document.getElementById("rightPopUpBox").style.animationName = "rightPopUpBoxTiltAnimation"
    document.getElementById("rightPopUpBox").style.animationDelay = "1s"
    setTimeout(() => {  document.getElementById("rightPopUpBoxIMG").style.display = "none"; }, 1100);
    setTimeout(() => { document.getElementById("rightPopUpTabIMG1").style.display = "block";  }, 2100);
    setTimeout(() => { document.getElementById("rightPopUpTabIMG2").style.display = "block";  }, 2100);
    setTimeout(() => { document.getElementById("rightPopUpTabIMG3").style.display = "block";  }, 2100);
    setTimeout(() => { document.getElementById("rightPopUpTabIMG4").style.display = "block";  }, 2100);
    setTimeout(() => { document.getElementById("rightPopUpTabIMG5").style.display = "block";  }, 2100);
    setTimeout(() => { document.getElementById("rightPopUpTabIMG6").style.display = "block";  }, 2100);
    setTimeout(() => { document.getElementById("rightPopUpTabIMG7").style.display = "block";  }, 2100);
    setTimeout(() => { document.getElementById("rightPopUpTabIMG8").style.display = "block";  }, 2100);
    setTimeout(() => { document.getElementById("rightPopUpTabIMG9").style.display = "block";  }, 2100);
    setTimeout(() => {  document.getElementById("rightPopUpBox").style.height = "185%"; }, 1000);
    setTimeout(() => {  document.getElementById("slidingBorderRightPopUpBox").style.animationName = "slidingBorderRightPopUpBoxAnimationAfterTurn"; }, 2000);
    setTimeout(() => {  document.getElementById("rightPopUpBoxExit").style.display = "block"; }, 3000);
}

function rightPopUpBoxTiltFunctionClose() {
    document.getElementById("slidingBorderRightPopUpBox").style.animationName = "slidingBorderRightPopUpBoxAnimationCloseBeforeTurn"
    document.getElementById("slidingBorderRightPopUpBox").style.animationDuration = "1s"
    document.getElementById("slidingBorderRightPopUpBox").style.animationDelay = "0s"
    document.getElementById("rightPopUpBox").style.animationName = "rightPopUpBoxTiltAnimation, rightPopUpBoxTiltBackAnimation"
    setTimeout(() => {  document.getElementById("slidingBorderRightPopUpBox").style.animationName = "slidingBorderRightPopUpBoxAnimationOpenBeforeTurn"; }, 2000);
    setTimeout(() => {  document.getElementById("rightPopUpBoxExit").style.display = "none"; }, 1000);
    setTimeout(() => {  document.getElementById("rightPopUpBox").style.animationName = "rightPopUpBoxTiltBackAnimation"; }, 2000);
    setTimeout(() => {  document.getElementById("rightPopUpBox").style.height = "85%"; }, 2000);
    setTimeout(() => {  document.getElementById("rightPopUpBoxIMG").style.display = "block"; }, 1100);
    setTimeout(() => {  document.getElementById("rightPopUpBoxExit").style.display = "none"; }, 250);
    setTimeout(() => {  document.getElementById("rightPopUpBoxExit").style.display = "none"; }, 250);
    setTimeout(() => {  document.getElementById("rightPopUpTabIMG1").style.display = "none"; }, 250);
    setTimeout(() => {  document.getElementById("rightPopUpTabIMG2").style.display = "none"; }, 250);
    setTimeout(() => {  document.getElementById("rightPopUpTabIMG3").style.display = "none"; }, 250);
    setTimeout(() => {  document.getElementById("rightPopUpTabIMG4").style.display = "none"; }, 250);
    setTimeout(() => {  document.getElementById("rightPopUpTabIMG5").style.display = "none"; }, 250);
    setTimeout(() => {  document.getElementById("rightPopUpTabIMG6").style.display = "none"; }, 250);
    setTimeout(() => {  document.getElementById("rightPopUpTabIMG7").style.display = "none"; }, 250);
    setTimeout(() => {  document.getElementById("rightPopUpTabIMG8").style.display = "none"; }, 250);
    setTimeout(() => {  document.getElementById("rightPopUpTabIMG9").style.display = "none"; }, 250);
    
}

function ProjectTree() {

}