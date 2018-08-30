'use strict';

function get(object,path){
var obj = object;
var parts = path.split(".");
if(parts[1]){
for(var i = 1;i < parts.length;i++){
	obj = obj[parts[i]];
	if(!obj)return undefined;
	}
}
return obj;
}