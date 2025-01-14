gdjs.Main_32MenuCode = {};
gdjs.Main_32MenuCode.localVariables = [];
gdjs.Main_32MenuCode.forEachIndex3 = 0;

gdjs.Main_32MenuCode.forEachObjects3 = [];

gdjs.Main_32MenuCode.forEachTemporary3 = null;

gdjs.Main_32MenuCode.forEachTotalCount3 = 0;

gdjs.Main_32MenuCode.GDRocketObjects1= [];
gdjs.Main_32MenuCode.GDRocketObjects2= [];
gdjs.Main_32MenuCode.GDRocketObjects3= [];
gdjs.Main_32MenuCode.GDRocketObjects4= [];
gdjs.Main_32MenuCode.GDRocketObjects5= [];
gdjs.Main_32MenuCode.GDRocketStartPositionObjects1= [];
gdjs.Main_32MenuCode.GDRocketStartPositionObjects2= [];
gdjs.Main_32MenuCode.GDRocketStartPositionObjects3= [];
gdjs.Main_32MenuCode.GDRocketStartPositionObjects4= [];
gdjs.Main_32MenuCode.GDRocketStartPositionObjects5= [];
gdjs.Main_32MenuCode.GDRocketNextStartPositionObjects1= [];
gdjs.Main_32MenuCode.GDRocketNextStartPositionObjects2= [];
gdjs.Main_32MenuCode.GDRocketNextStartPositionObjects3= [];
gdjs.Main_32MenuCode.GDRocketNextStartPositionObjects4= [];
gdjs.Main_32MenuCode.GDRocketNextStartPositionObjects5= [];
gdjs.Main_32MenuCode.GDTopWallObjects1= [];
gdjs.Main_32MenuCode.GDTopWallObjects2= [];
gdjs.Main_32MenuCode.GDTopWallObjects3= [];
gdjs.Main_32MenuCode.GDTopWallObjects4= [];
gdjs.Main_32MenuCode.GDTopWallObjects5= [];
gdjs.Main_32MenuCode.GDBottomWallObjects1= [];
gdjs.Main_32MenuCode.GDBottomWallObjects2= [];
gdjs.Main_32MenuCode.GDBottomWallObjects3= [];
gdjs.Main_32MenuCode.GDBottomWallObjects4= [];
gdjs.Main_32MenuCode.GDBottomWallObjects5= [];
gdjs.Main_32MenuCode.GDLeftWallObjects1= [];
gdjs.Main_32MenuCode.GDLeftWallObjects2= [];
gdjs.Main_32MenuCode.GDLeftWallObjects3= [];
gdjs.Main_32MenuCode.GDLeftWallObjects4= [];
gdjs.Main_32MenuCode.GDLeftWallObjects5= [];
gdjs.Main_32MenuCode.GDRightWallObjects1= [];
gdjs.Main_32MenuCode.GDRightWallObjects2= [];
gdjs.Main_32MenuCode.GDRightWallObjects3= [];
gdjs.Main_32MenuCode.GDRightWallObjects4= [];
gdjs.Main_32MenuCode.GDRightWallObjects5= [];
gdjs.Main_32MenuCode.GDMeteriodsObjects1= [];
gdjs.Main_32MenuCode.GDMeteriodsObjects2= [];
gdjs.Main_32MenuCode.GDMeteriodsObjects3= [];
gdjs.Main_32MenuCode.GDMeteriodsObjects4= [];
gdjs.Main_32MenuCode.GDMeteriodsObjects5= [];
gdjs.Main_32MenuCode.GDTitle_9595TextObjects1= [];
gdjs.Main_32MenuCode.GDTitle_9595TextObjects2= [];
gdjs.Main_32MenuCode.GDTitle_9595TextObjects3= [];
gdjs.Main_32MenuCode.GDTitle_9595TextObjects4= [];
gdjs.Main_32MenuCode.GDTitle_9595TextObjects5= [];
gdjs.Main_32MenuCode.GDViewLeaderboards_9595TextObjects1= [];
gdjs.Main_32MenuCode.GDViewLeaderboards_9595TextObjects2= [];
gdjs.Main_32MenuCode.GDViewLeaderboards_9595TextObjects3= [];
gdjs.Main_32MenuCode.GDViewLeaderboards_9595TextObjects4= [];
gdjs.Main_32MenuCode.GDViewLeaderboards_9595TextObjects5= [];
gdjs.Main_32MenuCode.GDLargePlayButtonObjects1= [];
gdjs.Main_32MenuCode.GDLargePlayButtonObjects2= [];
gdjs.Main_32MenuCode.GDLargePlayButtonObjects3= [];
gdjs.Main_32MenuCode.GDLargePlayButtonObjects4= [];
gdjs.Main_32MenuCode.GDLargePlayButtonObjects5= [];
gdjs.Main_32MenuCode.GDWorldObjects1= [];
gdjs.Main_32MenuCode.GDWorldObjects2= [];
gdjs.Main_32MenuCode.GDWorldObjects3= [];
gdjs.Main_32MenuCode.GDWorldObjects4= [];
gdjs.Main_32MenuCode.GDWorldObjects5= [];
gdjs.Main_32MenuCode.GDBackgroundObjects1= [];
gdjs.Main_32MenuCode.GDBackgroundObjects2= [];
gdjs.Main_32MenuCode.GDBackgroundObjects3= [];
gdjs.Main_32MenuCode.GDBackgroundObjects4= [];
gdjs.Main_32MenuCode.GDBackgroundObjects5= [];
gdjs.Main_32MenuCode.GDFadeInOutObjects1= [];
gdjs.Main_32MenuCode.GDFadeInOutObjects2= [];
gdjs.Main_32MenuCode.GDFadeInOutObjects3= [];
gdjs.Main_32MenuCode.GDFadeInOutObjects4= [];
gdjs.Main_32MenuCode.GDFadeInOutObjects5= [];


gdjs.Main_32MenuCode.eventsList0 = function(runtimeScene) {

};gdjs.Main_32MenuCode.eventsList1 = function(runtimeScene) {

{



}


};gdjs.Main_32MenuCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Meteriods"), gdjs.Main_32MenuCode.GDMeteriodsObjects2);

for (gdjs.Main_32MenuCode.forEachIndex3 = 0;gdjs.Main_32MenuCode.forEachIndex3 < gdjs.Main_32MenuCode.GDMeteriodsObjects2.length;++gdjs.Main_32MenuCode.forEachIndex3) {
gdjs.Main_32MenuCode.GDMeteriodsObjects3.length = 0;


gdjs.Main_32MenuCode.forEachTemporary3 = gdjs.Main_32MenuCode.GDMeteriodsObjects2[gdjs.Main_32MenuCode.forEachIndex3];
gdjs.Main_32MenuCode.GDMeteriodsObjects3.push(gdjs.Main_32MenuCode.forEachTemporary3);
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.Main_32MenuCode.GDMeteriodsObjects3.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMeteriodsObjects3[i].returnVariable(gdjs.Main_32MenuCode.GDMeteriodsObjects3[i].getVariables().getFromIndex(0)).setNumber(gdjs.randomInRange(0, 100));
}
}}
}

}


{



}


{


gdjs.Main_32MenuCode.eventsList1(runtimeScene);
}


};gdjs.Main_32MenuCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("FadeInOut"), gdjs.Main_32MenuCode.GDFadeInOutObjects2);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDFadeInOutObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDFadeInOutObjects2[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 0.5, "Flash", "Backward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(5);
}{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(0.1);
}{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(300);
}{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(1);
}{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(16);
}{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(0.2);
}{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(gdjs.randomInRange(200, 340));
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.sound.isSoundOnChannelPlaying(runtimeScene, 1));
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "game background.mp3", 1, true, 15, 1);
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Title_Text"), gdjs.Main_32MenuCode.GDTitle_9595TextObjects2);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDTitle_9595TextObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDTitle_9595TextObjects2[i].setCenterXInScene(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ShootingDelay");
}}

}


{


gdjs.Main_32MenuCode.eventsList2(runtimeScene);
}


};gdjs.Main_32MenuCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.Main_32MenuCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.Main_32MenuCode.mapOfEmptyGDRocketObjects = Hashtable.newFrom({"Rocket": []});
gdjs.Main_32MenuCode.asyncCallback16533156 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Main_32MenuCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(7).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}gdjs.Main_32MenuCode.localVariables.length = 0;
}
gdjs.Main_32MenuCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Main_32MenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Main_32MenuCode.asyncCallback16533156(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDRocketObjects2Objects = Hashtable.newFrom({"Rocket": gdjs.Main_32MenuCode.GDRocketObjects2});
gdjs.Main_32MenuCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ShootingDelay") > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("RocketStartPosition"), gdjs.Main_32MenuCode.GDRocketStartPositionObjects2);
gdjs.Main_32MenuCode.GDRocketObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDRocketObjects2Objects, (( gdjs.Main_32MenuCode.GDRocketStartPositionObjects2.length === 0 ) ? 0 :gdjs.Main_32MenuCode.GDRocketStartPositionObjects2[0].getPointX("")), (( gdjs.Main_32MenuCode.GDRocketStartPositionObjects2.length === 0 ) ? 0 :gdjs.Main_32MenuCode.GDRocketStartPositionObjects2[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDRocketObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDRocketObjects2[i].getBehavior("Physics2").applyPolarImpulse(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)), (gdjs.Main_32MenuCode.GDRocketObjects2[i].getBehavior("Physics2").getMassCenterX()), (gdjs.Main_32MenuCode.GDRocketObjects2[i].getBehavior("Physics2").getMassCenterY()));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ShootingDelay");
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\audio\\audio - PUNCH DESIGNED LIGHT 78.aac", false, 20, gdjs.randomFloatInRange(0.9, 1.1));
}{runtimeScene.getScene().getVariables().getFromIndex(7).sub(1);
}}

}


};gdjs.Main_32MenuCode.eventsList7 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Main_32MenuCode.mapOfEmptyGDRocketObjects) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16532556);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("RocketNextStartPosition"), gdjs.Main_32MenuCode.GDRocketNextStartPositionObjects3);
gdjs.copyArray(runtimeScene.getObjects("RocketStartPosition"), gdjs.Main_32MenuCode.GDRocketStartPositionObjects3);
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(gdjs.randomInRange(200, 340));
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDRocketStartPositionObjects3.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDRocketStartPositionObjects3[i].getBehavior("Tween").addObjectPositionXTween2("SlideOver", (( gdjs.Main_32MenuCode.GDRocketNextStartPositionObjects3.length === 0 ) ? 0 :gdjs.Main_32MenuCode.GDRocketNextStartPositionObjects3[0].getPointX("")), "linear", 0.5, false);
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList5(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(7)) > 0;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Main_32MenuCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDRocketObjects2Objects = Hashtable.newFrom({"Rocket": gdjs.Main_32MenuCode.GDRocketObjects2});
gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDBottomWallObjects2Objects = Hashtable.newFrom({"BottomWall": gdjs.Main_32MenuCode.GDBottomWallObjects2});
gdjs.Main_32MenuCode.eventsList8 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("BottomWall"), gdjs.Main_32MenuCode.GDBottomWallObjects2);
gdjs.copyArray(runtimeScene.getObjects("Rocket"), gdjs.Main_32MenuCode.GDRocketObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDRocketObjects2Objects, gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDBottomWallObjects2Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Main_32MenuCode.GDRocketObjects2 */
gdjs.copyArray(runtimeScene.getObjects("RocketNextStartPosition"), gdjs.Main_32MenuCode.GDRocketNextStartPositionObjects2);
gdjs.copyArray(runtimeScene.getObjects("RocketStartPosition"), gdjs.Main_32MenuCode.GDRocketStartPositionObjects2);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDRocketNextStartPositionObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDRocketNextStartPositionObjects2[i].setPosition((( gdjs.Main_32MenuCode.GDRocketObjects2.length === 0 ) ? 0 :gdjs.Main_32MenuCode.GDRocketObjects2[0].getPointX("")),(( gdjs.Main_32MenuCode.GDRocketStartPositionObjects2.length === 0 ) ? 0 :gdjs.Main_32MenuCode.GDRocketStartPositionObjects2[0].getPointY("")));
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDRocketObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDRocketObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDRocketObjects4Objects = Hashtable.newFrom({"Rocket": gdjs.Main_32MenuCode.GDRocketObjects4});
gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDMeteriodsObjects4Objects = Hashtable.newFrom({"Meteriods": gdjs.Main_32MenuCode.GDMeteriodsObjects4});
gdjs.Main_32MenuCode.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Meteriods"), gdjs.Main_32MenuCode.GDMeteriodsObjects4);
gdjs.copyArray(gdjs.Main_32MenuCode.GDRocketObjects3, gdjs.Main_32MenuCode.GDRocketObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.haveObjectsStartedColliding(gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDRocketObjects4Objects, "Physics2", gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDMeteriodsObjects4Objects, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Main_32MenuCode.GDMeteriodsObjects4 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDMeteriodsObjects4.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMeteriodsObjects4[i].returnVariable(gdjs.Main_32MenuCode.GDMeteriodsObjects4[i].getVariables().getFromIndex(0)).sub(1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\audio\\audio - FX3352 Mouth Pop 2.aac", false, 20, 1);
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDMeteriodsObjects4.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMeteriodsObjects4[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(0.5, 10, 10, 0, 0, 0.1, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDMeteriodsObjects4.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMeteriodsObjects4[i].getBehavior("Effect").enableEffect("Outline", true);
}
}}

}


};gdjs.Main_32MenuCode.eventsList10 = function(runtimeScene) {

{



}


};gdjs.Main_32MenuCode.eventsList11 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Meteriods"), gdjs.Main_32MenuCode.GDMeteriodsObjects2);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDMeteriodsObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDMeteriodsObjects2[i].getBehavior("Effect").enableEffect("Outline", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Rocket"), gdjs.Main_32MenuCode.GDRocketObjects2);

for (gdjs.Main_32MenuCode.forEachIndex3 = 0;gdjs.Main_32MenuCode.forEachIndex3 < gdjs.Main_32MenuCode.GDRocketObjects2.length;++gdjs.Main_32MenuCode.forEachIndex3) {
gdjs.Main_32MenuCode.GDRocketObjects3.length = 0;


gdjs.Main_32MenuCode.forEachTemporary3 = gdjs.Main_32MenuCode.GDRocketObjects2[gdjs.Main_32MenuCode.forEachIndex3];
gdjs.Main_32MenuCode.GDRocketObjects3.push(gdjs.Main_32MenuCode.forEachTemporary3);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.Main_32MenuCode.eventsList9(runtimeScene);} //Subevents end.
}
}

}


{



}


{


gdjs.Main_32MenuCode.eventsList10(runtimeScene);
}


};gdjs.Main_32MenuCode.eventsList12 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.eventsList8(runtimeScene);
}


{


gdjs.Main_32MenuCode.eventsList11(runtimeScene);
}


};gdjs.Main_32MenuCode.eventsList13 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.eventsList7(runtimeScene);
}


{


gdjs.Main_32MenuCode.eventsList12(runtimeScene);
}


};gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDLargePlayButtonObjects2ObjectsGDgdjs_9546Main_959532MenuCode_9546GDWorldObjects2Objects = Hashtable.newFrom({"LargePlayButton": gdjs.Main_32MenuCode.GDLargePlayButtonObjects2, "World": gdjs.Main_32MenuCode.GDWorldObjects2});
gdjs.Main_32MenuCode.eventsList14 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17008892);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\audio\\audio - FX3352 Mouth Pop 2.aac", false, 25, 0.5);
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
/* Reuse gdjs.Main_32MenuCode.GDLargePlayButtonObjects2 */
/* Reuse gdjs.Main_32MenuCode.GDWorldObjects2 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDLargePlayButtonObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDLargePlayButtonObjects2[i].setColor("74;74;74");
}
for(var i = 0, len = gdjs.Main_32MenuCode.GDWorldObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDWorldObjects2[i].setColor("74;74;74");
}
}}

}


};gdjs.Main_32MenuCode.eventsList15 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.Main_32MenuCode.GDLargePlayButtonObjects2, gdjs.Main_32MenuCode.GDLargePlayButtonObjects3);

gdjs.copyArray(gdjs.Main_32MenuCode.GDWorldObjects2, gdjs.Main_32MenuCode.GDWorldObjects3);

{for(var i = 0, len = gdjs.Main_32MenuCode.GDLargePlayButtonObjects3.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDLargePlayButtonObjects3[i].setColor("255;255;255");
}
for(var i = 0, len = gdjs.Main_32MenuCode.GDWorldObjects3.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDWorldObjects3[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDLargePlayButtonObjects3.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDLargePlayButtonObjects3[i].getBehavior("Effect").enableEffect("Outline", false);
}
for(var i = 0, len = gdjs.Main_32MenuCode.GDWorldObjects3.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDWorldObjects3[i].getBehavior("Effect").enableEffect("Outline", false);
}
}}

}


{



}


{

/* Reuse gdjs.Main_32MenuCode.GDLargePlayButtonObjects2 */
/* Reuse gdjs.Main_32MenuCode.GDWorldObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDLargePlayButtonObjects2ObjectsGDgdjs_9546Main_959532MenuCode_9546GDWorldObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Main_32MenuCode.GDLargePlayButtonObjects2 */
/* Reuse gdjs.Main_32MenuCode.GDWorldObjects2 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDLargePlayButtonObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDLargePlayButtonObjects2[i].getBehavior("Effect").enableEffect("Outline", true);
}
for(var i = 0, len = gdjs.Main_32MenuCode.GDWorldObjects2.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDWorldObjects2[i].getBehavior("Effect").enableEffect("Outline", true);
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList14(runtimeScene);} //End of subevents
}

}


};gdjs.Main_32MenuCode.eventsList16 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("LargePlayButton"), gdjs.Main_32MenuCode.GDLargePlayButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("World"), gdjs.Main_32MenuCode.GDWorldObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDLargePlayButtonObjects2.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDLargePlayButtonObjects2[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDLargePlayButtonObjects2[k] = gdjs.Main_32MenuCode.GDLargePlayButtonObjects2[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDLargePlayButtonObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDWorldObjects2.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDWorldObjects2[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDWorldObjects2[k] = gdjs.Main_32MenuCode.GDWorldObjects2[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDWorldObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Main_32MenuCode.eventsList15(runtimeScene);} //End of subevents
}

}


};gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDMeteriodsObjects4Objects = Hashtable.newFrom({"Meteriods": gdjs.Main_32MenuCode.GDMeteriodsObjects4});
gdjs.Main_32MenuCode.asyncCallback16543676 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Main_32MenuCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Meteriods"), gdjs.Main_32MenuCode.GDMeteriodsObjects4);
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "42bcaead-3b3b-448b-a9a0-207753fb2499", true);
}{gdjs.physics2.setTimeScale(gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDMeteriodsObjects4Objects, "Physics2", 0);
}{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0);
}gdjs.Main_32MenuCode.localVariables.length = 0;
}
gdjs.Main_32MenuCode.eventsList17 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Main_32MenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.Main_32MenuCode.asyncCallback16543676(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDMeteriodsObjects2Objects = Hashtable.newFrom({"Meteriods": gdjs.Main_32MenuCode.GDMeteriodsObjects2});
gdjs.Main_32MenuCode.eventsList18 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("World"), gdjs.Main_32MenuCode.GDWorldObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDWorldObjects3.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDWorldObjects3[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDWorldObjects3[k] = gdjs.Main_32MenuCode.GDWorldObjects3[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDWorldObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16541484);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ViewLeaderboards_Text"), gdjs.Main_32MenuCode.GDViewLeaderboards_9595TextObjects3);
/* Reuse gdjs.Main_32MenuCode.GDWorldObjects3 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDViewLeaderboards_9595TextObjects3.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDViewLeaderboards_9595TextObjects3[i].getBehavior("Tween").addObjectPositionYTween2("SlideUp", (( gdjs.Main_32MenuCode.GDWorldObjects3.length === 0 ) ? 0 :gdjs.Main_32MenuCode.GDWorldObjects3[0].getPointY("")), "linear", 0.1, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("World"), gdjs.Main_32MenuCode.GDWorldObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDWorldObjects3.length;i<l;++i) {
    if ( !(gdjs.Main_32MenuCode.GDWorldObjects3[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDWorldObjects3[k] = gdjs.Main_32MenuCode.GDWorldObjects3[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDWorldObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16542492);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ViewLeaderboards_Text"), gdjs.Main_32MenuCode.GDViewLeaderboards_9595TextObjects3);
{for(var i = 0, len = gdjs.Main_32MenuCode.GDViewLeaderboards_9595TextObjects3.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDViewLeaderboards_9595TextObjects3[i].getBehavior("Tween").addObjectPositionYTween2("SlideDown", gdjs.evtTools.camera.getCameraBorderBottom(runtimeScene, "UI", 0), "linear", 0.1, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("World"), gdjs.Main_32MenuCode.GDWorldObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDWorldObjects3.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDWorldObjects3[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDWorldObjects3[k] = gdjs.Main_32MenuCode.GDWorldObjects3[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDWorldObjects3.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\audio\\audio - FX3352 Mouth Pop 2.aac", false, 25, 2);
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList17(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.leaderboards.isLeaderboardViewLoaded());
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16545108);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Meteriods"), gdjs.Main_32MenuCode.GDMeteriodsObjects2);
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\audio\\audio - FX3352 Mouth Pop 2.aac", false, 25, 2);
}{gdjs.physics2.setTimeScale(gdjs.Main_32MenuCode.mapOfGDgdjs_9546Main_959532MenuCode_9546GDMeteriodsObjects2Objects, "Physics2", 1);
}{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 1);
}}

}


};gdjs.Main_32MenuCode.asyncCallback16546676 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Main_32MenuCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Tutorial", false);
}gdjs.Main_32MenuCode.localVariables.length = 0;
}
gdjs.Main_32MenuCode.eventsList19 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Main_32MenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Main_32MenuCode.asyncCallback16546676(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Main_32MenuCode.eventsList20 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("LargePlayButton"), gdjs.Main_32MenuCode.GDLargePlayButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDLargePlayButtonObjects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDLargePlayButtonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32MenuCode.GDLargePlayButtonObjects1[k] = gdjs.Main_32MenuCode.GDLargePlayButtonObjects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDLargePlayButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FadeInOut"), gdjs.Main_32MenuCode.GDFadeInOutObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\audio\\audio - FX3352 Mouth Pop 2.aac", false, 50, 2);
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDFadeInOutObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDFadeInOutObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 0.5, "Flash", "Forward", 255, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList19(runtimeScene);} //End of subevents
}

}


};gdjs.Main_32MenuCode.eventsList21 = function(runtimeScene) {

{



}


{


gdjs.Main_32MenuCode.eventsList16(runtimeScene);
}


{


gdjs.Main_32MenuCode.eventsList18(runtimeScene);
}


{


gdjs.Main_32MenuCode.eventsList20(runtimeScene);
}


};gdjs.Main_32MenuCode.eventsList22 = function(runtimeScene) {

{


gdjs.Main_32MenuCode.eventsList4(runtimeScene);
}


{


gdjs.Main_32MenuCode.eventsList13(runtimeScene);
}


{


gdjs.Main_32MenuCode.eventsList21(runtimeScene);
}


};

gdjs.Main_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32MenuCode.GDRocketObjects1.length = 0;
gdjs.Main_32MenuCode.GDRocketObjects2.length = 0;
gdjs.Main_32MenuCode.GDRocketObjects3.length = 0;
gdjs.Main_32MenuCode.GDRocketObjects4.length = 0;
gdjs.Main_32MenuCode.GDRocketObjects5.length = 0;
gdjs.Main_32MenuCode.GDRocketStartPositionObjects1.length = 0;
gdjs.Main_32MenuCode.GDRocketStartPositionObjects2.length = 0;
gdjs.Main_32MenuCode.GDRocketStartPositionObjects3.length = 0;
gdjs.Main_32MenuCode.GDRocketStartPositionObjects4.length = 0;
gdjs.Main_32MenuCode.GDRocketStartPositionObjects5.length = 0;
gdjs.Main_32MenuCode.GDRocketNextStartPositionObjects1.length = 0;
gdjs.Main_32MenuCode.GDRocketNextStartPositionObjects2.length = 0;
gdjs.Main_32MenuCode.GDRocketNextStartPositionObjects3.length = 0;
gdjs.Main_32MenuCode.GDRocketNextStartPositionObjects4.length = 0;
gdjs.Main_32MenuCode.GDRocketNextStartPositionObjects5.length = 0;
gdjs.Main_32MenuCode.GDTopWallObjects1.length = 0;
gdjs.Main_32MenuCode.GDTopWallObjects2.length = 0;
gdjs.Main_32MenuCode.GDTopWallObjects3.length = 0;
gdjs.Main_32MenuCode.GDTopWallObjects4.length = 0;
gdjs.Main_32MenuCode.GDTopWallObjects5.length = 0;
gdjs.Main_32MenuCode.GDBottomWallObjects1.length = 0;
gdjs.Main_32MenuCode.GDBottomWallObjects2.length = 0;
gdjs.Main_32MenuCode.GDBottomWallObjects3.length = 0;
gdjs.Main_32MenuCode.GDBottomWallObjects4.length = 0;
gdjs.Main_32MenuCode.GDBottomWallObjects5.length = 0;
gdjs.Main_32MenuCode.GDLeftWallObjects1.length = 0;
gdjs.Main_32MenuCode.GDLeftWallObjects2.length = 0;
gdjs.Main_32MenuCode.GDLeftWallObjects3.length = 0;
gdjs.Main_32MenuCode.GDLeftWallObjects4.length = 0;
gdjs.Main_32MenuCode.GDLeftWallObjects5.length = 0;
gdjs.Main_32MenuCode.GDRightWallObjects1.length = 0;
gdjs.Main_32MenuCode.GDRightWallObjects2.length = 0;
gdjs.Main_32MenuCode.GDRightWallObjects3.length = 0;
gdjs.Main_32MenuCode.GDRightWallObjects4.length = 0;
gdjs.Main_32MenuCode.GDRightWallObjects5.length = 0;
gdjs.Main_32MenuCode.GDMeteriodsObjects1.length = 0;
gdjs.Main_32MenuCode.GDMeteriodsObjects2.length = 0;
gdjs.Main_32MenuCode.GDMeteriodsObjects3.length = 0;
gdjs.Main_32MenuCode.GDMeteriodsObjects4.length = 0;
gdjs.Main_32MenuCode.GDMeteriodsObjects5.length = 0;
gdjs.Main_32MenuCode.GDTitle_9595TextObjects1.length = 0;
gdjs.Main_32MenuCode.GDTitle_9595TextObjects2.length = 0;
gdjs.Main_32MenuCode.GDTitle_9595TextObjects3.length = 0;
gdjs.Main_32MenuCode.GDTitle_9595TextObjects4.length = 0;
gdjs.Main_32MenuCode.GDTitle_9595TextObjects5.length = 0;
gdjs.Main_32MenuCode.GDViewLeaderboards_9595TextObjects1.length = 0;
gdjs.Main_32MenuCode.GDViewLeaderboards_9595TextObjects2.length = 0;
gdjs.Main_32MenuCode.GDViewLeaderboards_9595TextObjects3.length = 0;
gdjs.Main_32MenuCode.GDViewLeaderboards_9595TextObjects4.length = 0;
gdjs.Main_32MenuCode.GDViewLeaderboards_9595TextObjects5.length = 0;
gdjs.Main_32MenuCode.GDLargePlayButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDLargePlayButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDLargePlayButtonObjects3.length = 0;
gdjs.Main_32MenuCode.GDLargePlayButtonObjects4.length = 0;
gdjs.Main_32MenuCode.GDLargePlayButtonObjects5.length = 0;
gdjs.Main_32MenuCode.GDWorldObjects1.length = 0;
gdjs.Main_32MenuCode.GDWorldObjects2.length = 0;
gdjs.Main_32MenuCode.GDWorldObjects3.length = 0;
gdjs.Main_32MenuCode.GDWorldObjects4.length = 0;
gdjs.Main_32MenuCode.GDWorldObjects5.length = 0;
gdjs.Main_32MenuCode.GDBackgroundObjects1.length = 0;
gdjs.Main_32MenuCode.GDBackgroundObjects2.length = 0;
gdjs.Main_32MenuCode.GDBackgroundObjects3.length = 0;
gdjs.Main_32MenuCode.GDBackgroundObjects4.length = 0;
gdjs.Main_32MenuCode.GDBackgroundObjects5.length = 0;
gdjs.Main_32MenuCode.GDFadeInOutObjects1.length = 0;
gdjs.Main_32MenuCode.GDFadeInOutObjects2.length = 0;
gdjs.Main_32MenuCode.GDFadeInOutObjects3.length = 0;
gdjs.Main_32MenuCode.GDFadeInOutObjects4.length = 0;
gdjs.Main_32MenuCode.GDFadeInOutObjects5.length = 0;

gdjs.Main_32MenuCode.eventsList22(runtimeScene);
gdjs.Main_32MenuCode.GDRocketObjects1.length = 0;
gdjs.Main_32MenuCode.GDRocketObjects2.length = 0;
gdjs.Main_32MenuCode.GDRocketObjects3.length = 0;
gdjs.Main_32MenuCode.GDRocketObjects4.length = 0;
gdjs.Main_32MenuCode.GDRocketObjects5.length = 0;
gdjs.Main_32MenuCode.GDRocketStartPositionObjects1.length = 0;
gdjs.Main_32MenuCode.GDRocketStartPositionObjects2.length = 0;
gdjs.Main_32MenuCode.GDRocketStartPositionObjects3.length = 0;
gdjs.Main_32MenuCode.GDRocketStartPositionObjects4.length = 0;
gdjs.Main_32MenuCode.GDRocketStartPositionObjects5.length = 0;
gdjs.Main_32MenuCode.GDRocketNextStartPositionObjects1.length = 0;
gdjs.Main_32MenuCode.GDRocketNextStartPositionObjects2.length = 0;
gdjs.Main_32MenuCode.GDRocketNextStartPositionObjects3.length = 0;
gdjs.Main_32MenuCode.GDRocketNextStartPositionObjects4.length = 0;
gdjs.Main_32MenuCode.GDRocketNextStartPositionObjects5.length = 0;
gdjs.Main_32MenuCode.GDTopWallObjects1.length = 0;
gdjs.Main_32MenuCode.GDTopWallObjects2.length = 0;
gdjs.Main_32MenuCode.GDTopWallObjects3.length = 0;
gdjs.Main_32MenuCode.GDTopWallObjects4.length = 0;
gdjs.Main_32MenuCode.GDTopWallObjects5.length = 0;
gdjs.Main_32MenuCode.GDBottomWallObjects1.length = 0;
gdjs.Main_32MenuCode.GDBottomWallObjects2.length = 0;
gdjs.Main_32MenuCode.GDBottomWallObjects3.length = 0;
gdjs.Main_32MenuCode.GDBottomWallObjects4.length = 0;
gdjs.Main_32MenuCode.GDBottomWallObjects5.length = 0;
gdjs.Main_32MenuCode.GDLeftWallObjects1.length = 0;
gdjs.Main_32MenuCode.GDLeftWallObjects2.length = 0;
gdjs.Main_32MenuCode.GDLeftWallObjects3.length = 0;
gdjs.Main_32MenuCode.GDLeftWallObjects4.length = 0;
gdjs.Main_32MenuCode.GDLeftWallObjects5.length = 0;
gdjs.Main_32MenuCode.GDRightWallObjects1.length = 0;
gdjs.Main_32MenuCode.GDRightWallObjects2.length = 0;
gdjs.Main_32MenuCode.GDRightWallObjects3.length = 0;
gdjs.Main_32MenuCode.GDRightWallObjects4.length = 0;
gdjs.Main_32MenuCode.GDRightWallObjects5.length = 0;
gdjs.Main_32MenuCode.GDMeteriodsObjects1.length = 0;
gdjs.Main_32MenuCode.GDMeteriodsObjects2.length = 0;
gdjs.Main_32MenuCode.GDMeteriodsObjects3.length = 0;
gdjs.Main_32MenuCode.GDMeteriodsObjects4.length = 0;
gdjs.Main_32MenuCode.GDMeteriodsObjects5.length = 0;
gdjs.Main_32MenuCode.GDTitle_9595TextObjects1.length = 0;
gdjs.Main_32MenuCode.GDTitle_9595TextObjects2.length = 0;
gdjs.Main_32MenuCode.GDTitle_9595TextObjects3.length = 0;
gdjs.Main_32MenuCode.GDTitle_9595TextObjects4.length = 0;
gdjs.Main_32MenuCode.GDTitle_9595TextObjects5.length = 0;
gdjs.Main_32MenuCode.GDViewLeaderboards_9595TextObjects1.length = 0;
gdjs.Main_32MenuCode.GDViewLeaderboards_9595TextObjects2.length = 0;
gdjs.Main_32MenuCode.GDViewLeaderboards_9595TextObjects3.length = 0;
gdjs.Main_32MenuCode.GDViewLeaderboards_9595TextObjects4.length = 0;
gdjs.Main_32MenuCode.GDViewLeaderboards_9595TextObjects5.length = 0;
gdjs.Main_32MenuCode.GDLargePlayButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDLargePlayButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDLargePlayButtonObjects3.length = 0;
gdjs.Main_32MenuCode.GDLargePlayButtonObjects4.length = 0;
gdjs.Main_32MenuCode.GDLargePlayButtonObjects5.length = 0;
gdjs.Main_32MenuCode.GDWorldObjects1.length = 0;
gdjs.Main_32MenuCode.GDWorldObjects2.length = 0;
gdjs.Main_32MenuCode.GDWorldObjects3.length = 0;
gdjs.Main_32MenuCode.GDWorldObjects4.length = 0;
gdjs.Main_32MenuCode.GDWorldObjects5.length = 0;
gdjs.Main_32MenuCode.GDBackgroundObjects1.length = 0;
gdjs.Main_32MenuCode.GDBackgroundObjects2.length = 0;
gdjs.Main_32MenuCode.GDBackgroundObjects3.length = 0;
gdjs.Main_32MenuCode.GDBackgroundObjects4.length = 0;
gdjs.Main_32MenuCode.GDBackgroundObjects5.length = 0;
gdjs.Main_32MenuCode.GDFadeInOutObjects1.length = 0;
gdjs.Main_32MenuCode.GDFadeInOutObjects2.length = 0;
gdjs.Main_32MenuCode.GDFadeInOutObjects3.length = 0;
gdjs.Main_32MenuCode.GDFadeInOutObjects4.length = 0;
gdjs.Main_32MenuCode.GDFadeInOutObjects5.length = 0;


return;

}

gdjs['Main_32MenuCode'] = gdjs.Main_32MenuCode;
