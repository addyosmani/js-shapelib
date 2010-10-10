
/**

jsShapelib
Author: Addy Osmani
Release: 1.0.1
Date: Thursday, 30 Sept 2010.
Released under the MIT license.


**/



/*
   drawCircle() 
   selector : a jQuery selector defining an element or array of elements
   center : the center of the circle
   radius : the radius of the circle
   angle: the angle of the circle
   x: the left offset of all points on the circle
   y: the top offset of all points on the circle
   
   Sample usage: 
   CSS: .box { background-color:red; height:90px; width:90px;  position:absolute; margin:5px;}
   JS:drawCircle('.box', 50, 200, 90, 310, 220);
   
*/
    function drawCircle(selector, center, radius, angle, x, y)
    {
    
    
    var total = $(selector).length;
    var alpha = Math.PI * 2 / total;
           
    $(selector).each(function(index)
    {
        var theta = alpha * index;
        var pointx  =  Math.floor(Math.cos( theta ) * radius);
        var pointy  = Math.floor(Math.sin( theta ) * radius );
		
		
        $(this).css('margin-left', pointx + x + 'px');
        $(this).css('margin-top', pointy  + y  + 'px');
    });
    
   }





/*
   drawEllipse()
   selector : a jQuery selector defining an element or array of elements
   x: the left offset of all points on the ellipse
   y: the top offset of all points on the ellipse
   a: the height of the ellipse
   b: the width of the ellipse
   angle: the angle of the ellipse
   
   Sample usage: 
   CSS: .box { background-color:red; height:60px; width:60px;  position:absolute; margin:5px;}
   JS:drawEllipse(".box", 230,300, 200, 350, 360);
   
*/

function drawEllipse(selector, x, y, a, b, angle)
{
        var steps = $(selector).length;
        
        var i = 0;
        var beta = -angle * (Math.PI / 180);    
        var sinbeta = Math.sin(beta);
        var cosbeta = Math.cos(beta);
        
        $(selector).each(function(index)
        {
        i+= (360/steps);
        var alpha = i * (Math.PI / 180) ;
        var sinalpha = Math.sin(alpha);
        var cosalpha = Math.cos(alpha);
        var X = x + (a * cosalpha * cosbeta - b * sinalpha * sinbeta);
        var Y = y + (a * cosalpha * sinbeta + b * sinalpha * cosbeta);
        
        
        X = Math.floor(X);
        Y = Math.floor(Y);
        
        $(this).css('margin-top', X + 'px');
        $(this).css('margin-left', Y + 'px');
        
        });
        
        
       
}


