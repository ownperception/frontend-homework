'use strict';

function get(object, path) {
    if (path == null) return undefined;
    var parts = path.split(".");
    if (parts[1]) {
        for (let i = 1; i < parts.length; i++) {
            object = object[parts[i]];
            if (!object) { return undefined; }
        }
    }
    return object;
}
