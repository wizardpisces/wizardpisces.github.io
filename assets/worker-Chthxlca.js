(function(){"use strict";function t(e){return e.reduce((n,s)=>n+s*s,0)}self.onmessage=function(e){self.postMessage(t(e.data))}})();
