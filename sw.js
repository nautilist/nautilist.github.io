!function(){var e=["c13662905baa3406/bundle.js","cbd08fd9b13cd6c4/bundle.css","assets/.DS_Store","assets/bg-sketch.png","assets/bg-watercolor.png","assets/generator.png","assets/howto.png","assets/icon.png","assets/nautilist-public.png","assets/web-editor.png","manifest.json"];self.addEventListener("fetch",function(e){e.respondWith(self.caches.match(e.request).then(function(s){return s||self.fetch(e.request)}))}),self.addEventListener("install",function(s){s.waitUntil(self.caches.open("1.0.0").then(function(s){return s.addAll(e)}))}),self.addEventListener("activate",function(e){e.waitUntil(self.caches.keys().then(function(e){return Promise.all(e.map(function(s,t){if("1.0.0"!==e[t])return self.caches.delete(e[t])}))}))})}();
//# sourceMappingURL=bankai-service-worker.js.map