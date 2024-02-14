import r from "color_r.js";
import g from "color_g.js";
import b from "color_b.js";
function  fill(canvas0,width,heigth){
var canvas = document.getElementById(canvas0);
var ctx = canvas.getContext("2d");
for(let c=0;c<=width*heigth;c++){
        for(let w=0;w<=width;w++){
            for(let h=0;h<=heigth;h++){
             
              ctx.fillStyle =
              "rgb(" +
              Math.floor( r[c]) +
              "," +
              Math.floor(  g[c]) +
              ", "+ Math.floor( b[c])+")";
    ctx.fillRect(w,h , 1, 1);
          
        }
          }
  
        }
    }
  
