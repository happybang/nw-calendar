Ext.define('Ext.calendar.data.Events', {

    statics: {
        getData: function() {
            var fs= require('fs');
             var path = require('path');
            var alertdata= fs.readFileSync('alert.json');
            var data = JSON.parse(alertdata);
            for(var i=0;i<data.length;i++){
                if(data[i].start)
                    data[i].start=new Date(data[i].start);
                if(data[i].end)
                    data[i].end=new Date(data[i].end);
            }
            var today = Ext.Date.clearTime(new Date()), 
                makeDate = function(d, h, m, s) {
                    d = d * 86400;
                    h = (h || 0) * 3600;
                    m = (m || 0) * 60;
                    s = (s || 0);
                    return Ext.Date.add(today, Ext.Date.SECOND, d + h + m + s);
                };
            return {
                "evts": data
            }
        }
    }
});
