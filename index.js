angular.module('hgCache', [])

.provider('HungryCache', [function() {

    var cache = {};

    return {

        $get: function() {
            
            return {
                get: function(key) {
                    return cache[key];
                },

                put: function(key, value) {
                    cache[key] = value;
                },

                remove: function(key) {
                    for (var prop in cache) {
                        if (prop.indexOf(key) > -1) {
                            delete cache[prop];
                        }
                    };
                },

                removeAll: function() {
                    cache = {};
                },

                destroy: function() {},
            }
        }
    }
}])