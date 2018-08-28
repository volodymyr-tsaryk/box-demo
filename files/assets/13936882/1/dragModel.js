var Drag = pc.createScript('dragModel');


// initialize code called once per entity
Drag.prototype.initialize = function() {
    this.btnM = false;
   
    this.app.mouse.on(pc.EVENT_MOUSEDOWN, this.onMouseDown, this);
    this.app.mouse.on(pc.EVENT_MOUSEUP, this.onMouseUp, this);
    this.app.mouse.on(pc.EVENT_MOUSEMOVE, this.onMouseMove, this);
    this.app.keyboard.on(pc.EVENT_KEYDOWN, this.onKeyDown, this);
};


Drag.prototype.onMouseDown = function (event) {
    if (event.ctrlKey) return;
  
   this.btnM = true;
   // console.log(cam);
};


Drag.prototype.onMouseUp = function (event) {
    this.btnM = false;
};


Drag.prototype.onMouseMove = function (event) {    
    if (event.ctrlKey) return;
    
    if (this.btnM) {
        if (coord) {  
            // console.log('WORLD COORDS', coord.x, coord.y, coord.z);
          
            this.entity.setPosition(coord);
        }     
    }
};

Drag.prototype.onMouseOut = function (event) {
    this.btnM = false;
};

Drag.prototype.onKeyDown = function (event) {
    if (event.ctrlKey) return;
    var r = null;
    var x = 0, y = 0, z = 0;

    if (event.key === 37) {
        y = -90;
        rotatedLeft = !rotatedLeft && !rotatedRight;
        rotatedRight = false;
    }
    
    if (event.key === 39) {
        y = 90;
        rotatedRight = !rotatedRight && !rotatedLeft;
        rotatedLeft = false;
    }
    if (coord) { 
        if (!rotatedLeft && !rotatedRight){
            coord.z= -0.83;
        }
        if (rotatedLeft){
            coord.x = 1.25;  
        }

        if (rotatedRight) {
            coord.x = -2.1;
        }
        this.entity.setPosition(coord);
        
    }
    
    r = new pc.Vec3(x, y, z);
    this.entity.rotate(r);
    
};