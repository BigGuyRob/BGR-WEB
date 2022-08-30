import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Productblock from './pcproductblock.js';
import Serviceblock from './services.js';
import {featuredTitle, productImage1, productImage2,productImage3} from './resources/productstrings.js';
import {productHeadingparagraph, productHeadingtitle, headingDisclaimer} from './resources/productstrings.js';
import {Slot0Tag, titleSlot0, titleSlot1, titleSlot2, titleSlot3, titleSlot4, titleSlot5, titleSlot6} from './resources/productstrings.js';
import {pgSlot1, pgSlot2, pgSlot3, pgSlot4, pgSlot5, pgSlot6} from './resources/productstrings.js';
import {priceSlot1, priceSlot2, priceSlot3, priceSlot4, priceSlot5, priceSlot6} from './resources/productstrings.js';
var serviceState = false;
var ResumeState = false;
var ServiceBlockState = false;


function startupRendering(){
    const root = ReactDOM.createRoot(document.getElementById('featuredRoot'));
/*root.render(<Productblock featuredTitle ={featuredTitle} productImage1 = {productImage1}
    productImage2 = {productImage2} productImage3 = {productImage3}
    productHeadingparagraph = {productHeadingparagraph} productHeadingtitle = {productHeadingtitle}
    headingDisclaimer = {headingDisclaimer}
    Slot0Tag = {Slot0Tag} titleSlot0 = {titleSlot0} titleSlot1 = {titleSlot1} titleSlot2 = {titleSlot2} 
    titleSlot3 = {titleSlot3} titleSlot4 = {titleSlot4} titleSlot5 = {titleSlot5} titleSlot6 = {titleSlot6}
    pgSlot1 = {pgSlot1} pgSlot2 = {pgSlot2} pgSlot3 = {pgSlot3} pgSlot4 = {pgSlot4}  pgSlot5 = {pgSlot5} 
    pgSlot6 = {pgSlot6} priceSlot1 = {priceSlot1} priceSlot2 = {priceSlot2}  priceSlot3 = {priceSlot3}  
    priceSlot4 = {priceSlot4}  priceSlot5 = {priceSlot5}  priceSlot6 = {priceSlot6}
    />) */
}

function validateForm(name, email, message) {
    if (email.trim() ==='' || name.trim() === '' || message.trim() === '') {
        //if any of the fields are empty
        return false;
    }
    return true;
}

/**
 * changeEmailResponse changes the component visibility for the email sending
 * @param {boolean} state - state the visibility state to send the email response component message to 
 */
function changeEmailResponse(state){
    if(state === true){
        document.getElementById("emailsuccess").style.visibility = "visible";
        fadeOutEffect(document.getElementById("emailsuccess"));
    }else{
        document.getElementById("emailfailure").style.visibility = "visible";
        fadeOutEffect(document.getElementById("emailfailure"));
    }
}

function fadeOutEffect(fadeTarget) {
    fadeTarget.style.visibility = "visible";
    fadeTarget.style.opacity = 1;
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, 300);
}



function setCookie(cName, cValue, expDays) {
    let date = new Date();
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + ", " + expires + "; path=/";
}


function showService(state){
    const root = ReactDOM.createRoot(document.getElementById('serviceRoot'));
    serviceState = !serviceState;
    if(serviceState){
        document.getElementById("xnav").style.visibility = "visible";
        document.location="#tie";
        root.render(<Serviceblock />);
    }else{
        document.getElementById("xnav").style.visibility = "hidden";
        document.location="#toppage";
        root.unmount(<Serviceblock />);
    }
}

document.getElementById("resumeRoot").style.height=0;


function showResume(state){
    var root = document.getElementById("resumeRoot");
    ResumeState = state;
    if(ResumeState){
        document.getElementById("xr").style.visibility ="hidden";
        makeEffect(document.getElementById("resumeRoot"));
    }else{
        document.getElementById("resumeRoot").style.visibility="visible";
        document.getElementById("xr").style.visibility ="visible";
        makeEffect(document.getElementById("resumeRoot"));
    }
}

var x = 0;
function makeEffect(target){
    var newinterval = setInterval(function () {
        if(!ResumeState){
            x = x + 10;
        }else{
            x = x - 10;
        }
        if(x >= 570){
            ResumeState = true;
            clearInterval(newinterval);
        }else if (x < 0){
            ResumeState = false;
            document.location = "#toppage"
            target.style.visibility="hidden";
            clearInterval(newinterval);
        }
        target.style.height = x+'px';
    }, 0.01);
}

function attempttosendemail(){
    var boy;
    const nm = document.getElementById("name-1").value
    const em = document.getElementById("email-1").value
    const ms = document.getElementById("message-1").value
    var form = validateForm(nm,em,ms)
    if(form === true){
        boy = {
            name: nm, email: em, message: ms
        }
        
        fetch("/emails",{
            method: "POST",
            mode: "cors",
            headers:{
                Accept: "application/json",
                'Content-Type':'application/json',
            },
            body: JSON.stringify(boy)
        }).then((res)=>{ return res.text()}).then((text) => {
            console.log(text);
            const ops = text.split("/");
            if(ops[0] === "tm"){
                    document.getElementById("emailsuccess").innerHTML = "You are doing this too much please try again tomorrow";
                    changeEmailResponse(true);
            }else if (ops[0] === "send"){
                    setCookie('tag', ops[1],1); //1 day expiration date
                    document.getElementById("emailsuccess").innerHTML = "Thank you! Your message has been sent.";
                    changeEmailResponse(true);
            }else{
                //Will need to figure out why the body is not success //is there a way instead of this that we can get the alert to just go away
                //that text is in this element  i am setting to hidden, is there a time.sleep()
                changeEmailResponse(false);
            }
        }).catch((reason) =>{
            document.getElementById("emailfailure").innerHTML = "Something happened. Please send me a message manually.";
          changeEmailResponse(false);  
        });
    }else{

        document.getElementById("emailfailure").innerHTML = "Please ensure all fields are filled out and try again.";
        changeEmailResponse(false);
    }
}
function helper(){
    showService(serviceState);
}

function helperResume(){
    showResume(ResumeState);
}

function blank(){
    
}

var servicebutton = document.getElementById("servicebtn");


startupRendering();
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

var G = 107;
var state = false;
setInterval(function () {
    var serviceButton = document.getElementById("servicebtn");    
    if(G > 137){
        state = true;
    }else if (G < 107){
        state = false;
    }
    if(!state){
        G = G + 3;
    }else{
        G = G - 3;
    }
    serviceButton.style.background = "#" + componentToHex(48) + componentToHex(G) + componentToHex(107);
}, 100);
document.getElementById("submitbtn").onclick = attempttosendemail;
document.getElementById("servicebtn").onclick = helper; 
document.getElementById("x").onclick = helper; 
document.getElementById("resumebtn").onclick = helperResume;
document.getElementById("xr").onclick = helperResume; 