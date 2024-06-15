(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,n(r.key),r)}}function n(e){var n=function(e,n){if("object"!=t(e)||!e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,"string");if("object"!=t(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==t(n)?n:n+""}var i=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.w=e,this.x=n,this.y=i,this.z=r}return n=t,i=[{key:"print",value:function(){console.log("w: ".concat(this.w," x: ").concat(this.x," y: ").concat(this.y," z: ").concat(this.z)),console.log("xAngle: ".concat(this.angles.x," yAngle: ").concat(this.angles.y," zAngle: ").concat(this.angles.z))}},{key:"mult",value:function(e){var n=this;return new t(n.w*e.w-n.x*e.x-n.y*e.y-n.z*e.z,n.w*e.x+n.x*e.w+n.y*e.z-n.z*e.y,n.w*e.y+n.y*e.w+n.z*e.x-n.x*e.z,n.w*e.z+n.z*e.w+n.x*e.y-n.y*e.x)}},{key:"rotateVector",value:function(e){var n=new t(0,e.x,e.y,e.z),i=this.mult(n).mult(this.conjugate);return new Vector3(i.x,i.y,i.z)}},{key:"inverse",value:function(){var e=this.conjugate,n=this.w*this.w-this.x*this.x-this.y*this.y-this.z*this.z;return new t(e.w/n,-e.x/n,-e.y/n,-e.z/n)}},{key:"normalize",value:function(){var e=Math.sqrt(this.w*this.w+this.x*this.x+this.y*this.y+this.z*this.z);return new t(this.w/e,this.x/e,this.y/e,this.z/e)}},{key:"angles",get:function(){return new Vector3(this.xAngle,this.yAngle,this.zAngle)}},{key:"conjugate",get:function(){return new t(this.w,-this.x,-this.y,-this.z)}},{key:"xAngle",get:function(){return 180*Math.atan2(2*(this.w*this.x+this.y*this.z),1-2*(this.x*this.x+this.y*this.y))/Math.PI}},{key:"yAngle",get:function(){return 180*(-Math.PI/2+2*Math.atan2(Math.sqrt(1+2*(this.w*this.y-this.x*this.z)),Math.sqrt(1-2*(this.w*this.y-this.x*this.z))))/Math.PI}},{key:"zAngle",get:function(){return 180*Math.atan2(2*(this.w*this.z+this.x*this.y),1-2*(this.y*this.y+this.z*this.z))/Math.PI}},{key:"differenceMagnitude",value:function(t){var e=new Vector3(1,0,0),n=new Vector3(0,1,0),i=new Vector3(0,0,1),r=this.rotateVector(e).dot(t.rotateVector(e)),o=this.rotateVector(n).dot(t.rotateVector(n)),a=this.rotateVector(i).dot(t.rotateVector(i)),u=Math.acos(r)*(180/Math.PI),s=Math.acos(o)*(180/Math.PI),h=Math.acos(a)*(180/Math.PI);return Math.sqrt(u*u+s*s,h*h)}},{key:"angle",value:function(t){var e=new Vector3(1,0,0),n=this.rotateVector(e).dot(t.rotateVector(e));return Math.acos(n)}},{key:"flipSign",value:function(){return new t(-this.w,-this.x,-this.y,-this.z)}},{key:"dist",value:function(t){t.w<0&&(t=t.flipSign());var e=this;e.w<0&&(e=e.flipSign());var n=e.w-t.w,i=e.x-t.x,r=e.y-t.y,o=e.z-t.z;return Math.sqrt(n*n+i*i+r*r+o*o)}}],r=[{key:"euler",value:function(e,n,i){var r=Math.PI/180*.5;e*=r,n*=r,i*=r;var o=Math.cos(e),a=Math.sin(e),u=Math.cos(n),s=Math.sin(n),h=Math.cos(i),y=Math.sin(i);return new t(o*u*h+a*s*y,a*u*h-o*s*y,o*s*h+a*u*y,o*u*y-a*s*h)}},{key:"randomUnitQuaternion",value:function(){var e=function(){return 2*Math.random()-1};return new t(e(),e(),e(),e()).normalize()}},{key:"identity",value:function(){return new t}}],i&&e(n.prototype,i),r&&e(n,r),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,i,r}();function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,a(i.key),i)}}function a(t){var e=function(t,e){if("object"!=r(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!=r(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==r(e)?e:e+""}var u=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=e,this.y=n}return e=t,(n=[{key:"mag",value:function(){return Math.sqrt(this.x*this.x+this.y*this.y)}},{key:"mult",value:function(e){return new t(this.x*e,this.y*e)}},{key:"norm",value:function(){var e=this.mag();return new t(this.x/e,this.y/e)}},{key:"add",value:function(e){return new t(this.x+e.x,this.y+e.y)}},{key:"toVector3",value:function(){return new Vector3(this.x,this.y,0)}},{key:"dot",value:function(t){return this.x*t.x+this.y+t.y}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,n}();function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function h(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,y(i.key),i)}}function y(t){var e=function(t,e){if("object"!=s(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!=s(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==s(e)?e:e+""}var c=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=e,this.y=n,this.z=i}return e=t,(n=[{key:"mag",value:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}},{key:"mult",value:function(e){return new t(this.x*e,this.y*e,this.z*e)}},{key:"norm",value:function(){return new Vector2(this.x/this.mag,this.y/this.mag,this.z/this.mag)}},{key:"add",value:function(e){return new t(this.x+e.x,this.y+e.y,this.z+e.z)}},{key:"toVector2",value:function(){return new Vector2(this.x,this.y)}},{key:"dot",value:function(t){return t.x*this.x+t.y*this.y+t.z*this.z}}])&&h(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,n}();window.Quaternion=i,window.Vector2=u,window.Vector3=c})();