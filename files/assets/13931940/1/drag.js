var Drag = pc.createScript('drag');


var cam = null;
var coord = null;        
var rotatedLeft = false;
var rotatedRight = false;
var rotatedHr = false;


// initialize code called once per entity
Drag.prototype.initialize = function() {
    this.btn = false;
    
    this.app.mouse.on(pc.EVENT_MOUSEDOWN, this.onMouseDown, this);
    this.app.mouse.on(pc.EVENT_MOUSEUP, this.onMouseUp, this);
    this.app.mouse.on(pc.EVENT_MOUSEMOVE, this.onMouseMove, this);

};

Drag.prototype.onMouseDown = function (event) {
    this.btn = true;
};


Drag.prototype.onMouseUp = function (event) {
    this.btn = false;
};


Drag.prototype.onMouseMove = function (event) {    
    if (this.btn) {
        cam = this.entity.camera;
        coord = cam.screenToWorld(event.x, event.y, 6);
        
        var frontEdge = -0.83;
        var backEdge = 0.85;

        if (rotatedLeft) {
            coord.x = 1.25;
        
             if (coord.z >= (backEdge - 0.4)) { coord.z = backEdge - 0.4; }
             if (coord.z <= (frontEdge + 0.4)) { coord.z = frontEdge + 0.4; }
        }
        
        if (rotatedRight) {
            coord.x = -2.1;
            
             if (coord.z >= (backEdge - 0.4)) { coord.z = backEdge - 0.4; }
             if (coord.z <= (frontEdge + 0.4)) { coord.z = frontEdge + 0.4; }
        }
        if (!rotatedLeft && !rotatedRight) {
             coord.z = frontEdge;
            if (coord.x > 0.8) coord.x = 0.85;
            if (coord.x < -1.6) coord.x = -1.6;
        }
    
        if (coord.y >= 1.4) coord.y = 1.4;
        if (coord.y <= 0.45) coord.y = 0.45;
        // if (coord.x >= 1) coord.x = 1;
        
    }
};


Drag.prototype.onMouseOut = function (event) {
    this.btn = false;
    // this.panButtonDown = false;
};
