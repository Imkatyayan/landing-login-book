require("source-map-support").install();
exports.ids = ["admin~home"];
exports.modules = {

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/card.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".card-cardback-8VIY9{\n    z-index: 1;\n    max-width: 345px;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    position:relative;\n    width:215px;\n    height: 330px;\n    border-radius: 15px;\n    overflow: hidden;\n    background: -o-linear-gradient(75deg, #f4f3f3 40%, #fdfcfc 0%);\n    background: linear-gradient(15deg, #f4f3f3 40%, #fdfcfc 0%);\n    -webkit-box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n            box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n    -webkit-transition: all 0.3s cubic-bezier(.25,.8,.25,1);\n    -o-transition: all 0.3s cubic-bezier(.25,.8,.25,1);\n    transition: all 0.3s cubic-bezier(.25,.8,.25,1);\n}\n.card-cardback-8VIY9:hover{\n  -webkit-transform:scale(1.1);\n      -ms-transform:scale(1.1);\n          transform:scale(1.1);\n  -webkit-box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\n          box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\n  border: 1px solid rgb(16, 65, 59);\n  -webkit-transform: translateY(-5%);\n      -ms-transform: translateY(-5%);\n          transform: translateY(-5%);\n  border-radius: 10px;\n\n}\n.card-cardback-8VIY9:before{\n    content:\"\";\n    position: absolute;\n    top:0;\n    left:0;\n    width:100%;\n    height: 100%;\n    background-color:#fdfcfc;\n    -webkit-clip-path:circle(125px at 100% 20%);\n            clip-path:circle(125px at 100% 20%);\n    -webkit-transition: 0.7s ease-in-out;\n    -o-transition: 0.7s ease-in-out;\n    transition: 0.7s ease-in-out;\n}\n.card-cardback-8VIY9:hover:before{\n    -webkit-clip-path:circle(275px at 0% 50%);\n            clip-path:circle(275px at 0% 50%);\n}\n.card-cardback-8VIY9:after{\n    content:\"Agrobios\";\n    position: absolute;\n    top:35%;\n    left:-10%;\n    font-size:4em;\n    font-weight:800;\n    font-style: italic;\n    color: rgba(211, 208, 208, 0.21);\n}\n.card-cardback-8VIY9 img{\n    position: absolute;\n    z-index: 1;\n    top: 95%;\n    right:21%;\n    height:180px;\n    opacity: 85%;\n    -webkit-transition: 0.5s;\n    -o-transition: 0.5s;\n    transition: 0.5s;\n   -webkit-filter: drop-shadow(-4px 3px 1mm rgb(0,0,0,0.7));\n           filter: drop-shadow(-4px 3px 1mm rgb(0,0,0,0.7))\n}\n.card-cardback-8VIY9:hover img{\n    top:20%;\n}\n.card-cardback-8VIY9 h6{\n    position: absolute;\n    font-weight: bold;\n    top:100%;\n    -webkit-transform: translateY(180%);\n        -ms-transform: translateY(180%);\n            transform: translateY(180%);\n    width:90%;\n    height:100px;\n    text-align: center;\n     -webkit-transition: 0.5s;\n     -o-transition: 0.5s;\n     transition: 0.5s;\n}\n.card-cardback-8VIY9 p p:nth-child(1){\n    position: absolute;\n    font-weight: bold;\n    top:100%;\n    -webkit-transform: translateY(203%);\n        -ms-transform: translateY(203%);\n            transform: translateY(203%);\n    width:90%;\n    height:100px;\n    text-align: center;\n     -webkit-transition: 0.5s;\n     -o-transition: 0.5s;\n     transition: 0.5s;\n}\n.card-cardback-8VIY9 p p:nth-child(2){\n    position: absolute;\n    font-weight: bold;\n    top:100%;\n    -webkit-transform: translateY(222%);\n        -ms-transform: translateY(222%);\n            transform: translateY(222%);\n    width:90%;\n    height:100px;\n    text-align: center;\n     -webkit-transition: 0.5s;\n     -o-transition: 0.5s;\n     transition: 0.5s;\n}\n.card-cardback-8VIY9 p p:nth-child(3){\n    position: absolute;\n    font-weight: bold;\n    top:100%;\n    -webkit-transform: translateY(241%);\n        -ms-transform: translateY(241%);\n            transform: translateY(241%);\n    width:90%;\n    height:100px;\n    text-align: center;\n     -webkit-transition: 0.5s;\n     -o-transition: 0.5s;\n     transition: 0.5s;\n     opacity: 0;\n     visibility: hidden;\n}\n.card-cardback-8VIY9 p p:nth-child(4){\n    position: absolute;\n    font-weight: bold;\n    top:100%;\n    -webkit-transform: translateY(262%);\n        -ms-transform: translateY(262%);\n            transform: translateY(262%);\n    width:90%;\n    height:100px;\n    text-align: center;\n     -webkit-transition: 0.5s;\n     -o-transition: 0.5s;\n     transition: 0.5s;\n      opacity: 0;\n     visibility: hidden;\n}\n.card-cardback-8VIY9:hover h6{\n    top:20%;\n}\n.card-cardback-8VIY9:hover p p{\n    top:20%;\n}\n.card-cardback-8VIY9:hover p p:nth-child(3){\n     opacity: 1;\n     visibility: visible;\n     -webkit-transition-delay: 0.2s;\n          -o-transition-delay: 0.2s;\n             transition-delay: 0.2s;\n}\n.card-cardback-8VIY9:hover p p:nth-child(4){\n     opacity: 1;\n     visibility: visible;\n     -webkit-transition-delay: 0.3s;\n          -o-transition-delay: 0.3s;\n             transition-delay: 0.3s;\n}\n", "",{"version":3,"sources":["card.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,gBAAgB;IAChB,wBAAgB;YAAhB,gBAAgB;IAChB,iBAAiB;IACjB,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,gBAAgB;IAChB,8DAA2D;IAA3D,2DAA2D;IAC3D,0EAAkE;YAAlE,kEAAkE;IAClE,uDAA+C;IAA/C,kDAA+C;IAA/C,+CAA+C;AACnD;AACA;EACE,4BAAoB;MAApB,wBAAoB;UAApB,oBAAoB;EACpB,8EAAsE;UAAtE,sEAAsE;EACtE,iCAAiC;EACjC,kCAA0B;MAA1B,8BAA0B;UAA1B,0BAA0B;EAC1B,mBAAmB;;AAErB;AACA;IACI,UAAU;IACV,kBAAkB;IAClB,KAAK;IACL,MAAM;IACN,UAAU;IACV,YAAY;IACZ,wBAAwB;IACxB,2CAAmC;YAAnC,mCAAmC;IACnC,oCAA4B;IAA5B,+BAA4B;IAA5B,4BAA4B;AAChC;AACA;IACI,yCAAiC;YAAjC,iCAAiC;AACrC;AACA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,OAAO;IACP,SAAS;IACT,aAAa;IACb,eAAe;IACf,kBAAkB;IAClB,gCAAgC;AACpC;AACA;IACI,kBAAkB;IAClB,UAAU;IACV,QAAQ;IACR,SAAS;IACT,YAAY;IACZ,YAAY;IACZ,wBAAgB;IAAhB,mBAAgB;IAAhB,gBAAgB;GACjB,wDAA+C;WAA/C;AACH;AACA;IACI,OAAO;AACX;AACA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,QAAQ;IACR,mCAA2B;QAA3B,+BAA2B;YAA3B,2BAA2B;IAC3B,SAAS;IACT,YAAY;IACZ,kBAAkB;KACjB,wBAAgB;KAAhB,mBAAgB;KAAhB,gBAAgB;AACrB;AACA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,QAAQ;IACR,mCAA2B;QAA3B,+BAA2B;YAA3B,2BAA2B;IAC3B,SAAS;IACT,YAAY;IACZ,kBAAkB;KACjB,wBAAgB;KAAhB,mBAAgB;KAAhB,gBAAgB;AACrB;AACA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,QAAQ;IACR,mCAA2B;QAA3B,+BAA2B;YAA3B,2BAA2B;IAC3B,SAAS;IACT,YAAY;IACZ,kBAAkB;KACjB,wBAAgB;KAAhB,mBAAgB;KAAhB,gBAAgB;AACrB;AACA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,QAAQ;IACR,mCAA2B;QAA3B,+BAA2B;YAA3B,2BAA2B;IAC3B,SAAS;IACT,YAAY;IACZ,kBAAkB;KACjB,wBAAgB;KAAhB,mBAAgB;KAAhB,gBAAgB;KAChB,UAAU;KACV,kBAAkB;AACvB;AACA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,QAAQ;IACR,mCAA2B;QAA3B,+BAA2B;YAA3B,2BAA2B;IAC3B,SAAS;IACT,YAAY;IACZ,kBAAkB;KACjB,wBAAgB;KAAhB,mBAAgB;KAAhB,gBAAgB;MACf,UAAU;KACX,kBAAkB;AACvB;AACA;IACI,OAAO;AACX;AACA;IACI,OAAO;AACX;AAEA;KACK,UAAU;KACV,mBAAmB;KACnB,8BAAsB;UAAtB,yBAAsB;aAAtB,sBAAsB;AAC3B;AACA;KACK,UAAU;KACV,mBAAmB;KACnB,8BAAsB;UAAtB,yBAAsB;aAAtB,sBAAsB;AAC3B","file":"card.css","sourcesContent":[".cardback{\n    z-index: 1;\n    max-width: 345px;\n    box-shadow: none;\n    position:relative;\n    width:215px;\n    height: 330px;\n    border-radius: 15px;\n    overflow: hidden;\n    background: linear-gradient(15deg, #f4f3f3 40%, #fdfcfc 0%);\n    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n    transition: all 0.3s cubic-bezier(.25,.8,.25,1);\n}\n.cardback:hover{\n  transform:scale(1.1);\n  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\n  border: 1px solid rgb(16, 65, 59);\n  transform: translateY(-5%);\n  border-radius: 10px;\n\n}\n.cardback:before{\n    content:\"\";\n    position: absolute;\n    top:0;\n    left:0;\n    width:100%;\n    height: 100%;\n    background-color:#fdfcfc;\n    clip-path:circle(125px at 100% 20%);\n    transition: 0.7s ease-in-out;\n}\n.cardback:hover:before{\n    clip-path:circle(275px at 0% 50%);\n}\n.cardback:after{\n    content:\"Agrobios\";\n    position: absolute;\n    top:35%;\n    left:-10%;\n    font-size:4em;\n    font-weight:800;\n    font-style: italic;\n    color: rgba(211, 208, 208, 0.21);\n}\n.cardback img{\n    position: absolute;\n    z-index: 1;\n    top: 95%;\n    right:21%;\n    height:180px;\n    opacity: 85%;\n    transition: 0.5s;\n   filter: drop-shadow(-4px 3px 1mm rgb(0,0,0,0.7))\n}\n.cardback:hover img{\n    top:20%;\n}\n.cardback h6{\n    position: absolute;\n    font-weight: bold;\n    top:100%;\n    transform: translateY(180%);\n    width:90%;\n    height:100px;\n    text-align: center;\n     transition: 0.5s;\n}\n.cardback p p:nth-child(1){\n    position: absolute;\n    font-weight: bold;\n    top:100%;\n    transform: translateY(203%);\n    width:90%;\n    height:100px;\n    text-align: center;\n     transition: 0.5s;\n}\n.cardback p p:nth-child(2){\n    position: absolute;\n    font-weight: bold;\n    top:100%;\n    transform: translateY(222%);\n    width:90%;\n    height:100px;\n    text-align: center;\n     transition: 0.5s;\n}\n.cardback p p:nth-child(3){\n    position: absolute;\n    font-weight: bold;\n    top:100%;\n    transform: translateY(241%);\n    width:90%;\n    height:100px;\n    text-align: center;\n     transition: 0.5s;\n     opacity: 0;\n     visibility: hidden;\n}\n.cardback p p:nth-child(4){\n    position: absolute;\n    font-weight: bold;\n    top:100%;\n    transform: translateY(262%);\n    width:90%;\n    height:100px;\n    text-align: center;\n     transition: 0.5s;\n      opacity: 0;\n     visibility: hidden;\n}\n.cardback:hover h6{\n    top:20%;\n}\n.cardback:hover p p{\n    top:20%;\n}\n\n.cardback:hover p p:nth-child(3){\n     opacity: 1;\n     visibility: visible;\n     transition-delay: 0.2s;\n}\n.cardback:hover p p:nth-child(4){\n     opacity: 1;\n     visibility: visible;\n     transition-delay: 0.3s;\n}\n"]}]);
// Exports
exports.locals = {
	"cardback": "card-cardback-8VIY9"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/cardGrid.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".cardGrid-noScroll-37pFz{\n    margin-left: -55px;\n    overflow-x: hidden  !important;\n}\n.cardGrid-moveRight-1BJoz {\n    position: absolute;\n    right:0;\n    -webkit-transform:translateY(250%);\n        -ms-transform:translateY(250%);\n            transform:translateY(250%);\n    z-index:15;\n    background-color: transparent;\n    color:transparent;\n    font-size: 30px;\n}\n.cardGrid-moveRight-1BJoz:hover{\n   background-color: rgba(151, 142, 142,0.8);\n   opacity: 0.5;\n   color: #000000;\n}\n.cardGrid-moveLeft-2RTA1 {\n    position: absolute;\n    left:0;\n    -webkit-transform:translateY(250%);\n        -ms-transform:translateY(250%);\n            transform:translateY(250%);\n    z-index:15;\n    background-color: transparent;\n    color:transparent;\n    font-size: 30px;\n}\n.cardGrid-moveLeft-2RTA1:hover{\n   background-color: rgba(151, 142, 142,0.8);\n   opacity: 0.5;\n   color: #000000;\n}", "",{"version":3,"sources":["cardGrid.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,8BAA8B;AAClC;AACA;IACI,kBAAkB;IAClB,OAAO;IACP,kCAA0B;QAA1B,8BAA0B;YAA1B,0BAA0B;IAC1B,UAAU;IACV,6BAA6B;IAC7B,iBAAiB;IACjB,eAAe;AACnB;AACA;GACG,yCAAyC;GACzC,YAAY;GACZ,cAAc;AACjB;AACA;IACI,kBAAkB;IAClB,MAAM;IACN,kCAA0B;QAA1B,8BAA0B;YAA1B,0BAA0B;IAC1B,UAAU;IACV,6BAA6B;IAC7B,iBAAiB;IACjB,eAAe;AACnB;AACA;GACG,yCAAyC;GACzC,YAAY;GACZ,cAAc;AACjB","file":"cardGrid.css","sourcesContent":[".noScroll{\n    margin-left: -55px;\n    overflow-x: hidden  !important;\n}\n.moveRight {\n    position: absolute;\n    right:0;\n    transform:translateY(250%);\n    z-index:15;\n    background-color: transparent;\n    color:transparent;\n    font-size: 30px;\n}\n.moveRight:hover{\n   background-color: rgba(151, 142, 142,0.8);\n   opacity: 0.5;\n   color: #000000;\n}\n.moveLeft {\n    position: absolute;\n    left:0;\n    transform:translateY(250%);\n    z-index:15;\n    background-color: transparent;\n    color:transparent;\n    font-size: 30px;\n}\n.moveLeft:hover{\n   background-color: rgba(151, 142, 142,0.8);\n   opacity: 0.5;\n   color: #000000;\n}"]}]);
// Exports
exports.locals = {
	"noScroll": "cardGrid-noScroll-37pFz",
	"moveRight": "cardGrid-moveRight-1BJoz",
	"moveLeft": "cardGrid-moveLeft-2RTA1"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/carousel.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "\n    *{\n        padding: 0;\n        margin:0;\n    }\n.carousel-hero-1Rs-N{\n    visibility:hidden;\n    height: 95vh;\n    background-color: rgb(161, 207, 253);\n}\n.carousel-hero-1Rs-N:before{\n    content:\"\";\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    height: 128px;\n    height: 8rem;\n    width: 100%;\n    background-image: url(/assets/src/components/wave-small.png?457c73ac);\n    background-size: cover;\n}\n.carousel-overlay-2R9jk{\n    display: block;\n    position: absolute;\n    left: 0;\n    top:0;\n    background-color: #ffffff;\n    width: 100%;\n    height: 100vh;\n}\n.carousel-container-2DpNz{\n        width:1440px;\n        min-width:1440px;\n        margin:0 auto;\n}\n.carousel-heroInner-2S2_K{\n            display: -ms-flexbox;\n            display: flex;\n            -ms-flex-align: center;\n                align-items: center;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n            margin:0 24px;\n            height: 100vh;\n}\n.carousel-heroContent-3hIPs{\n                width: 50%;        \n}\n.carousel-heroContentInner-1-YRb{\n                    width:600px;\n                    margin:0 auto;\n                    color: #323232;\n}\nh1{\n                        font-weight:500;\n                        font-size: 40px;\n                \n}\n.carousel-heroContentLine-3_rXY{\n                            margin: 0;\n                            height: 50px;\n                            overflow: hidden;\n}\n.carousel-heroImages-12wb9{\n                        width: 50%;\n                        height: 100vh;\n                        position: relative;\n}\n.carousel-firstImage-32cZS{\n                                position: absolute;\n                                overflow: hidden;\n                                top:250px;\n                                right:50px;\n                                width:30%;\n                                height:40%;\n                                -webkit-filter: drop-shadow(-4px 4px 1mm rgb(0,0,0,0.7));\n                                        filter: drop-shadow(-4px 4px 1mm rgb(0,0,0,0.7));\n                            }\n.carousel-secondImage-KcPYF{\n                                position: absolute;\n                                overflow: hidden;\n                                top:252px;\n                                right:170px;\n                                width:30%;\n                                height:40%;\n                                -webkit-filter: drop-shadow(-4px 1px 1mm rgb(0,0,0,0.7));\n                                        filter: drop-shadow(-4px 1px 1mm rgb(0,0,0,0.7));\n}\n.carousel-firstImage-32cZS img, .carousel-secondImage-KcPYF img{\n                                 position: absolute;\n                                 top:0;\n                                 right:0;\n                                 left:0;\n                                 bottom:0;\n                                 width:100%; \n                                 height: 100%;\n                                }\n.carousel-thirdImage-1sQ3o{\n                                position: absolute;\n                                overflow: hidden;\n                                top:254px;\n                                right:290px;\n                                width:30%;\n                                height:40%;\n                                -webkit-filter: drop-shadow(-4px 1px 1mm rgb(0,0,0,0.7));\n                                        filter: drop-shadow(-4px 1px 1mm rgb(0,0,0,0.7));\n}\n.carousel-thirdImage-1sQ3o img{\n                                 position: absolute;\n                                 top:0;\n                                 right:0;\n                                 left:0;\n                                 bottom:0;\n                                 width:100%; \n                                 height: 100%;\n}\n\n ", "",{"version":3,"sources":["carousel.scss"],"names":[],"mappings":";IACI;QACI,UAAU;QACV,QAAQ;IACZ;AACJ;IACI,iBAAiB;IACjB,YAAY;IACZ,oCAAoC;AACxC;AACA;IACI,UAAU;IACV,kBAAkB;IAClB,OAAO;IACP,SAAS;IACT,aAAY;IAAZ,YAAY;IACZ,WAAW;IACX,qEAAqE;IACrE,sBAAsB;AAC1B;AACA;IACI,cAAc;IACd,kBAAkB;IAClB,OAAO;IACP,KAAK;IACL,yBAAyB;IACzB,WAAW;IACX,aAAa;AACjB;AACA;QACQ,YAAY;QACZ,gBAAgB;QAChB,aAAa;AACrB;AACC;YACW,oBAAa;YAAb,aAAa;YACb,sBAAmB;gBAAnB,mBAAmB;YACnB,sBAA8B;gBAA9B,8BAA8B;YAC9B,aAAa;YACb,aAAa;AACzB;AAEA;gBACgB,UAAU;AAC1B;AAEC;oBACmB,WAAW;oBACX,aAAa;oBACb,cAAc;AAClC;AAEC;wBACuB,eAAe;wBACf,eAAe;;AAEvC;AACA;4BAC4B,SAAS;4BACT,YAAY;4BACZ,gBAAgB;AAC5C;AAEA;wBACwB,UAAU;wBACV,aAAa;wBACb,kBAAkB;AAC1C;AACE;gCAC8B,kBAAkB;gCAClB,gBAAgB;gCAChB,SAAS;gCACT,UAAU;gCACV,SAAS;gCACT,UAAU;gCACV,wDAAgD;wCAAhD,gDAAgD;4BACpD;AAE5B;gCACgC,kBAAkB;gCAClB,gBAAgB;gCAChB,SAAS;gCACT,WAAW;gCACX,SAAS;gCACT,UAAU;gCACV,wDAAgD;wCAAhD,gDAAgD;AAChF;AACA;iCACiC,kBAAkB;iCAClB,KAAK;iCACL,OAAO;iCACP,MAAM;iCACN,QAAQ;iCACR,UAAU;iCACV,YAAY;gCACb;AAChC;gCACgC,kBAAkB;gCAClB,gBAAgB;gCAChB,SAAS;gCACT,WAAW;gCACX,SAAS;gCACT,UAAU;gCACV,wDAAgD;wCAAhD,gDAAgD;AAChF;AACA;iCACiC,kBAAkB;iCAClB,KAAK;iCACL,OAAO;iCACP,MAAM;iCACN,QAAQ;iCACR,UAAU;iCACV,YAAY;AAC7C","file":"carousel.scss","sourcesContent":["\n    *{\n        padding: 0;\n        margin:0;\n    }\n.hero{\n    visibility:hidden;\n    height: 95vh;\n    background-color: rgb(161, 207, 253);\n}\n.hero:before{\n    content:\"\";\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    height: 8rem;\n    width: 100%;\n    background-image: url(/assets/src/components/wave-small.png?457c73ac);\n    background-size: cover;\n}\n.overlay{\n    display: block;\n    position: absolute;\n    left: 0;\n    top:0;\n    background-color: #ffffff;\n    width: 100%;\n    height: 100vh;\n}\n.container{\n        width:1440px;\n        min-width:1440px;\n        margin:0 auto;\n}\n .heroInner{\n            display: flex;\n            align-items: center;\n            justify-content: space-between;\n            margin:0 24px;\n            height: 100vh;\n}\n\n.heroContent{\n                width: 50%;        \n}\n\n .heroContentInner{\n                    width:600px;\n                    margin:0 auto;\n                    color: #323232;\n}\n\n h1{\n                        font-weight:500;\n                        font-size: 40px;\n                \n}\n.heroContentLine{\n                            margin: 0;\n                            height: 50px;\n                            overflow: hidden;\n}\n\n.heroImages{\n                        width: 50%;\n                        height: 100vh;\n                        position: relative;\n}\n  .firstImage{\n                                position: absolute;\n                                overflow: hidden;\n                                top:250px;\n                                right:50px;\n                                width:30%;\n                                height:40%;\n                                filter: drop-shadow(-4px 4px 1mm rgb(0,0,0,0.7));\n                            }                          \n\n.secondImage{\n                                position: absolute;\n                                overflow: hidden;\n                                top:252px;\n                                right:170px;\n                                width:30%;\n                                height:40%;\n                                filter: drop-shadow(-4px 1px 1mm rgb(0,0,0,0.7));\n}\n.firstImage img, .secondImage img{\n                                 position: absolute;\n                                 top:0;\n                                 right:0;\n                                 left:0;\n                                 bottom:0;\n                                 width:100%; \n                                 height: 100%;\n                                }\n.thirdImage{\n                                position: absolute;\n                                overflow: hidden;\n                                top:254px;\n                                right:290px;\n                                width:30%;\n                                height:40%;\n                                filter: drop-shadow(-4px 1px 1mm rgb(0,0,0,0.7));\n}\n.thirdImage img{\n                                 position: absolute;\n                                 top:0;\n                                 right:0;\n                                 left:0;\n                                 bottom:0;\n                                 width:100%; \n                                 height: 100%;\n}\n\n "]}]);
// Exports
exports.locals = {
	"hero": "carousel-hero-1Rs-N",
	"overlay": "carousel-overlay-2R9jk",
	"container": "carousel-container-2DpNz",
	"heroInner": "carousel-heroInner-2S2_K",
	"heroContent": "carousel-heroContent-3hIPs",
	"heroContentInner": "carousel-heroContentInner-1-YRb",
	"heroContentLine": "carousel-heroContentLine-3_rXY",
	"heroImages": "carousel-heroImages-12wb9",
	"firstImage": "carousel-firstImage-32cZS",
	"secondImage": "carousel-secondImage-KcPYF",
	"thirdImage": "carousel-thirdImage-1sQ3o"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/grid.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".grid-subListTitle-PFLFU{\n     margin: 10px 0px;\n      padding-bottom: 0px; \n      padding-left: 8px;\n      text-transform: uppercase;\n      font-size: 15px;\n      letter-spacing: 1px;\n}\n.grid-subListTitle-PFLFU:hover{\n  cursor: pointer;\n}\n.grid-subListTitle-PFLFU span{\n  -webkit-transition: 1 all;\n  -o-transition: 1 all;\n  transition: 1 all;\n  border: 2px solid rgb(161, 207, 253);\n  padding:2px 5px;\n  text-align: center;\n}\n.grid-subListTitle-PFLFU span:hover{\n   background-color: rgb(161, 207, 253);\n  color: #ffffff;\n}\n", "",{"version":3,"sources":["grid.css"],"names":[],"mappings":"AAAA;KACK,gBAAgB;MACf,mBAAmB;MACnB,iBAAiB;MACjB,yBAAyB;MACzB,eAAe;MACf,mBAAmB;AACzB;AACA;EACE,eAAe;AACjB;AACA;EACE,yBAAiB;EAAjB,oBAAiB;EAAjB,iBAAiB;EACjB,oCAAoC;EACpC,eAAe;EACf,kBAAkB;AACpB;AACA;GACG,oCAAoC;EACrC,cAAc;AAChB","file":"grid.css","sourcesContent":[".subListTitle{\n     margin: 10px 0px;\n      padding-bottom: 0px; \n      padding-left: 8px;\n      text-transform: uppercase;\n      font-size: 15px;\n      letter-spacing: 1px;\n}\n.subListTitle:hover{\n  cursor: pointer;\n}\n.subListTitle span{\n  transition: 1 all;\n  border: 2px solid rgb(161, 207, 253);\n  padding:2px 5px;\n  text-align: center;\n}\n.subListTitle span:hover{\n   background-color: rgb(161, 207, 253);\n  color: #ffffff;\n}\n"]}]);
// Exports
exports.locals = {
	"subListTitle": "grid-subListTitle-PFLFU"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/navBar.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "body{\n    margin: 0px;\n}\n.navBar-menu-options-26nix{\n    color: white;\n}", "",{"version":3,"sources":["navBar.css"],"names":[],"mappings":"AAAA;IACI,WAAW;AACf;AACA;IACI,YAAY;AAChB","file":"navBar.css","sourcesContent":["body{\n    margin: 0px;\n}\n.menu-options{\n    color: white;\n}"]}]);
// Exports
exports.locals = {
	"menu-options": "navBar-menu-options-26nix"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/popover.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "body{\n    margin: 0px;\n}", "",{"version":3,"sources":["popover.css"],"names":[],"mappings":"AAAA;IACI,WAAW;AACf","file":"popover.css","sourcesContent":["body{\n    margin: 0px;\n}"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/searchbar.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".searchbar-fieldSearch-3FEFs\n{\n     margin-left: 20% !important;\n     width: 60% !important;\n     font-size: 35px !important;\n     position: relative;\n     border-radius: 20px;\n} \n.searchbar-fieldSearch-3FEFs fieldset\n{\n     border-radius: 15px;\n} \n#searchbar-free-solo-2-demo-1Witv:focus{\n    width:900px;\n    -webkit-transform: translateY(\"-50%\");\n        -ms-transform: translateY(\"-50%\");\n            transform: translateY(\"-50%\");\n    z-index: 10;\n} \n.searchbar-fieldSearch-3FEFs:focus body{\n    min-height: 100%;\n    -webkit-box-shadow: inset 2000px 0 0 0 rgba(255,255,255,0.8) ;\n            box-shadow: inset 2000px 0 0 0 rgba(255,255,255,0.8) ;\n    z-index:1;\n} \n.searchbar-icon-304j7{\n    position:absolute;\n    size: 35px;\n    top:30px;\n    left:280;\n}", "",{"version":3,"sources":["searchbar.css"],"names":[],"mappings":"AAAA;;KAEK,2BAA2B;KAC3B,qBAAqB;KACrB,0BAA0B;KAC1B,kBAAkB;KAClB,mBAAmB;AACxB;AACA;;KAEK,mBAAmB;AACxB;AACA;IACI,WAAW;IACX,qCAA6B;QAA7B,iCAA6B;YAA7B,6BAA6B;IAC7B,WAAW;AACf;AACA;IACI,gBAAgB;IAChB,6DAAqD;YAArD,qDAAqD;IACrD,SAAS;AACb;AACA;IACI,iBAAiB;IACjB,UAAU;IACV,QAAQ;IACR,QAAQ;AACZ","file":"searchbar.css","sourcesContent":[".fieldSearch\n{\n     margin-left: 20% !important;\n     width: 60% !important;\n     font-size: 35px !important;\n     position: relative;\n     border-radius: 20px;\n} \n.fieldSearch fieldset\n{\n     border-radius: 15px;\n} \n#free-solo-2-demo:focus{\n    width:900px;\n    transform: translateY(\"-50%\");\n    z-index: 10;\n}\n.fieldSearch:focus body{\n    min-height: 100%;\n    box-shadow: inset 2000px 0 0 0 rgba(255,255,255,0.8) ;\n    z-index:1;\n}\n.icon{\n    position:absolute;\n    size: 35px;\n    top:30px;\n    left:280;\n}"]}]);
// Exports
exports.locals = {
	"fieldSearch": "searchbar-fieldSearch-3FEFs",
	"free-solo-2-demo": "searchbar-free-solo-2-demo-1Witv",
	"icon": "searchbar-icon-304j7"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/tabs.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".tabs-triangular-3q--s{\n     position:absolute;\n      right: 48.6%;\n      height: 0;\n      width: 0;\n      top:112%;\n      z-index: 30;\n       border-left: 10px solid transparent;\n      border-right: 10px solid transparent;\n      border-top: 10px solid rgb(161, 207, 253);\n}\n\n.tabs-tab-EnCBx{\n    min-width: 110px;\n    padding: 5px;\n    font-size:\"13px\";\n    font-weight: 600;\n    color: #ffffff !important;\n    background-color:rgb(161, 207, 253);\n    margin-right: 1%;\n}\n\n.tabs-tab-EnCBx:nth-of-type(2):hover ~ .tabs-triangular-3q--s{\n    right: 70%;\n}", "",{"version":3,"sources":["tabs.css"],"names":[],"mappings":"AAAA;KACK,iBAAiB;MAChB,YAAY;MACZ,SAAS;MACT,QAAQ;MACR,QAAQ;MACR,WAAW;OACV,mCAAmC;MACpC,oCAAoC;MACpC,yCAAyC;AAC/C;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,gBAAgB;IAChB,gBAAgB;IAChB,yBAAyB;IACzB,mCAAmC;IACnC,gBAAgB;AACpB;;AACA;IACI,UAAU;AACd","file":"tabs.css","sourcesContent":[".triangular{\n     position:absolute;\n      right: 48.6%;\n      height: 0;\n      width: 0;\n      top:112%;\n      z-index: 30;\n       border-left: 10px solid transparent;\n      border-right: 10px solid transparent;\n      border-top: 10px solid rgb(161, 207, 253);\n}\n\n.tab{\n    min-width: 110px;\n    padding: 5px;\n    font-size:\"13px\";\n    font-weight: 600;\n    color: #ffffff !important;\n    background-color:rgb(161, 207, 253);\n    margin-right: 1%;\n}\n.tab:nth-of-type(2):hover ~ .triangular{\n    right: 70%;\n}"]}]);
// Exports
exports.locals = {
	"triangular": "tabs-triangular-3q--s",
	"tab": "tabs-tab-EnCBx"
};

/***/ }),

/***/ "./src/components/card.css":
/***/ (function(module, exports, __webpack_require__) {


    var refs = 0;
    var css = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/card.css");
    var insertCss = __webpack_require__("./node_modules/isomorphic-style-loader/insertCss.js");
    var content = typeof css === 'string' ? [[module.i, css, '']] : css;

    exports = module.exports = css.locals || {};
    exports._getContent = function() { return content; };
    exports._getCss = function() { return '' + css; };
    exports._insertCss = function(options) { return insertCss(content, options) };

    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if ( true && typeof window !== 'undefined' && window.document) {
      var removeCss = function() {};
      module.hot.accept("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/card.css", function() {
        css = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/card.css");
        content = typeof css === 'string' ? [[module.i, css, '']] : css;
        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ "./src/components/card.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ImgMediaCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("isomorphic-style-loader/useStyles");
/* harmony import */ var isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("@material-ui/core/Card");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("@material-ui/core/CardActionArea");
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("@material-ui/core/CardActions");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("@material-ui/core/CardContent");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("@material-ui/core/CardMedia");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _card_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/components/card.css");
/* harmony import */ var _card_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_card_css__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "C:\\Users\\LENOVO\\agro-main-web\\src\\components\\card.js";











const usestyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])({
  root: {
    maxWidth: 345
  }
});
function ImgMediaCard() {
  isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_1___default()(_card_css__WEBPACK_IMPORTED_MODULE_10___default.a);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: _card_css__WEBPACK_IMPORTED_MODULE_10___default.a.cardback,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "http://agrobiosonline.com/books_coverpages/06260908_685.jpg",
    alt: "pic",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
    gutterBottom: true,
    variant: "h6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Elementary Botony"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
    color: "textSecondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Elementary Botony"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "MRP:345"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Authored By:Person1"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Released In: 2020")))));
}

/***/ }),

/***/ "./src/components/cardGrid.css":
/***/ (function(module, exports, __webpack_require__) {


    var refs = 0;
    var css = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/cardGrid.css");
    var insertCss = __webpack_require__("./node_modules/isomorphic-style-loader/insertCss.js");
    var content = typeof css === 'string' ? [[module.i, css, '']] : css;

    exports = module.exports = css.locals || {};
    exports._getContent = function() { return content; };
    exports._getCss = function() { return '' + css; };
    exports._insertCss = function(options) { return insertCss(content, options) };

    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if ( true && typeof window !== 'undefined' && window.document) {
      var removeCss = function() {};
      module.hot.accept("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/cardGrid.css", function() {
        css = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/cardGrid.css");
        content = typeof css === 'string' ? [[module.i, css, '']] : css;
        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ "./src/components/cardGrid.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CenteredGrid; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/card.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("@material-ui/core/Box");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("isomorphic-style-loader/useStyles");
/* harmony import */ var isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _cardGrid_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/components/cardGrid.css");
/* harmony import */ var _cardGrid_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_cardGrid_css__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\LENOVO\\agro-main-web\\src\\components\\cardGrid.js";








const usestyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {
    flexGrow: 0
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}));
function CenteredGrid() {
  isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_6___default()(_cardGrid_css__WEBPACK_IMPORTED_MODULE_7___default.a);
  const classes = usestyles();
  const [index, setIndex] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(5);
  const [indexF, setIndexF] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(-1);
  let scroller = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null);

  const handleChangeNext = event => {
    setIndex(index + 1);
    setIndexF(indexF + 1);
    console.log(index);
    console.log(indexF);
    scroller.childNodes[index].childNodes[0].scrollIntoView({
      behavior: 'smooth'
    });
  };

  const handleChangePrev = event => {
    if (indexF >= 0) {
      scroller.childNodes[indexF].childNodes[0].scrollIntoView({
        behavior: 'smooth'
      });
      setIndex(index - 1);
      setIndexF(indexF - 1);
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _cardGrid_css__WEBPACK_IMPORTED_MODULE_7___default.a.scrollbar,
    width: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: _cardGrid_css__WEBPACK_IMPORTED_MODULE_7___default.a.moveRight,
    onClick: handleChangeNext,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, ">"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: _cardGrid_css__WEBPACK_IMPORTED_MODULE_7___default.a.moveLeft,
    onClick: handleChangePrev,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "<"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4___default.a, {
    display: "flex",
    flexDirection: "row",
    m: 1,
    className: _cardGrid_css__WEBPACK_IMPORTED_MODULE_7___default.a.noScroll,
    ref: el => {
      scroller = el;
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: classes.paper,
    elevation: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), " ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: classes.paper,
    elevation: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), " ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: classes.paper,
    elevation: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), " ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: classes.paper,
    elevation: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), " ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: classes.paper,
    elevation: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), " ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: classes.paper,
    elevation: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), " ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: classes.paper,
    elevation: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }), " ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: classes.paper,
    elevation: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }), " ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: classes.paper,
    elevation: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }), " ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: classes.paper,
    elevation: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }), " ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: classes.paper,
    elevation: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }), " ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: classes.paper,
    elevation: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }), " ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: classes.paper,
    elevation: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }), " "))));
}

/***/ }),

/***/ "./src/components/carousel.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SimpleSlide; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("isomorphic-style-loader/useStyles");
/* harmony import */ var isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _carousel_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/carousel.scss");
/* harmony import */ var _carousel_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_carousel_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gSap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/gSap/index.js");
/* harmony import */ var _wave_small_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/wave-small.png");
/* harmony import */ var _wave_small_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wave_small_png__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\LENOVO\\agro-main-web\\src\\components\\carousel.js";





function SimpleSlide() {
  let app = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null);
  let images = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null);
  let content = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null);
  let overlay = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null);
  let tl = new gSap__WEBPACK_IMPORTED_MODULE_3__["TimelineLite"]({
    delay: .8
  });
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    const fImage = images.firstElementChild;
    const sImage = images.childNodes[1];
    const tImage = images.childNodes[2];
    const headline1 = content.childNodes[0].childNodes[0];
    const headline2 = content.childNodes[0].childNodes[1];
    const headline3 = content.childNodes[0].childNodes[2];
    gSap__WEBPACK_IMPORTED_MODULE_3__["TweenMax"].to(app, 0, {
      css: {
        visibility: "visible"
      }
    });
    tl.fromTo(overlay, 1.2, {
      x: 0
    }, {
      x: 1560,
      ease: gSap__WEBPACK_IMPORTED_MODULE_3__["Power2"].easeOut
    }, 'Start').from(fImage, 1.2, {
      y: 1280,
      ease: gSap__WEBPACK_IMPORTED_MODULE_3__["Power3"].easeOut
    }, 1).from(fImage.firstElementChild, 2, {
      scale: 1.6,
      ease: gSap__WEBPACK_IMPORTED_MODULE_3__["Power3"].easeOut
    }, 1.2).from(sImage, 1.2, {
      y: 1280,
      ease: gSap__WEBPACK_IMPORTED_MODULE_3__["Power3"].easeOut
    }, 1.2).from(sImage.firstElementChild, 2, {
      scale: 1.6,
      ease: gSap__WEBPACK_IMPORTED_MODULE_3__["Power3"].easeOut
    }, 1.2).from(tImage, 1.2, {
      y: 1280,
      ease: gSap__WEBPACK_IMPORTED_MODULE_3__["Power3"].easeOut
    }, 1.4).from(tImage.firstElementChild, 2, {
      scale: 1.6,
      ease: gSap__WEBPACK_IMPORTED_MODULE_3__["Power3"].easeOut
    }, 1.4);
    tl.staggerFrom([headline1.children, headline2.children, headline3.children], 1, {
      y: 40,
      ease: gSap__WEBPACK_IMPORTED_MODULE_3__["Power3"].easeOut
    }, 0.15, 'Start');
  });
  isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_1___default()(_carousel_scss__WEBPACK_IMPORTED_MODULE_2___default.a);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _carousel_scss__WEBPACK_IMPORTED_MODULE_2___default.a.hero,
    ref: el => {
      app = el;
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _carousel_scss__WEBPACK_IMPORTED_MODULE_2___default.a.overlay,
    ref: el => {
      overlay = el;
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _carousel_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _carousel_scss__WEBPACK_IMPORTED_MODULE_2___default.a.heroInner,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _carousel_scss__WEBPACK_IMPORTED_MODULE_2___default.a.heroContent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _carousel_scss__WEBPACK_IMPORTED_MODULE_2___default.a.heroContentInner,
    ref: el => {
      content = el;
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _carousel_scss__WEBPACK_IMPORTED_MODULE_2___default.a.heroContentLine,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _carousel_scss__WEBPACK_IMPORTED_MODULE_2___default.a.heroContentLineInner,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Brush Up Your Knowledge")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _carousel_scss__WEBPACK_IMPORTED_MODULE_2___default.a.heroContentLine,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _carousel_scss__WEBPACK_IMPORTED_MODULE_2___default.a.heroContentLineInner,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "Sales upto 70%")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _carousel_scss__WEBPACK_IMPORTED_MODULE_2___default.a.heroContentLine,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _carousel_scss__WEBPACK_IMPORTED_MODULE_2___default.a.heroContentLineInner,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Agriculture/Home Science/Economics"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _carousel_scss__WEBPACK_IMPORTED_MODULE_2___default.a.heroImages,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _carousel_scss__WEBPACK_IMPORTED_MODULE_2___default.a.heroImagesInner,
    ref: el => {
      images = el;
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _carousel_scss__WEBPACK_IMPORTED_MODULE_2___default.a.firstImage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "http://agrobiosonline.com/books_coverpages/06260908_685.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _carousel_scss__WEBPACK_IMPORTED_MODULE_2___default.a.secondImage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "http://agrobiosonline.com/books_coverpages/06260908_685.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _carousel_scss__WEBPACK_IMPORTED_MODULE_2___default.a.thirdImage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "http://agrobiosonline.com/books_coverpages/06260908_685.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  })))))));
}

/***/ }),

/***/ "./src/components/carousel.scss":
/***/ (function(module, exports, __webpack_require__) {


    var refs = 0;
    var css = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/carousel.scss");
    var insertCss = __webpack_require__("./node_modules/isomorphic-style-loader/insertCss.js");
    var content = typeof css === 'string' ? [[module.i, css, '']] : css;

    exports = module.exports = css.locals || {};
    exports._getContent = function() { return content; };
    exports._getCss = function() { return '' + css; };
    exports._insertCss = function(options) { return insertCss(content, options) };

    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if ( true && typeof window !== 'undefined' && window.document) {
      var removeCss = function() {};
      module.hot.accept("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/carousel.scss", function() {
        css = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/carousel.scss");
        content = typeof css === 'string' ? [[module.i, css, '']] : css;
        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ "./src/components/grid.css":
/***/ (function(module, exports, __webpack_require__) {


    var refs = 0;
    var css = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/grid.css");
    var insertCss = __webpack_require__("./node_modules/isomorphic-style-loader/insertCss.js");
    var content = typeof css === 'string' ? [[module.i, css, '']] : css;

    exports = module.exports = css.locals || {};
    exports._getContent = function() { return content; };
    exports._getCss = function() { return '' + css; };
    exports._insertCss = function(options) { return insertCss(content, options) };

    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if ( true && typeof window !== 'undefined' && window.document) {
      var removeCss = function() {};
      module.hot.accept("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/grid.css", function() {
        css = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/grid.css");
        content = typeof css === 'string' ? [[module.i, css, '']] : css;
        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ "./src/components/grid.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CenteredGrid; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _grid_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/components/grid.css");
/* harmony import */ var _grid_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_grid_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("isomorphic-style-loader/useStyles");
/* harmony import */ var isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\LENOVO\\agro-main-web\\src\\components\\grid.js";








const usestyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    color: theme.palette.text.secondary
  }
}));
function CenteredGrid() {
  const classes = usestyles();
  isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_7___default()(_grid_css__WEBPACK_IMPORTED_MODULE_6___default.a);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    sm: true,
    container: true,
    spacing: (5, 0),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2___default.a, {
    elevation: 0,
    className: _grid_css__WEBPACK_IMPORTED_MODULE_6___default.a.subListTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Agricultural Sciences")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_4___default.a, {
    dense: "true",
    style: {
      fontSize: "14px",
      padding: "0px"
    },
    className: classes.paper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      paddingRight: "0px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "5th Deans Committee"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      paddingRight: "0px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "5th Deans Committee (As Per)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      paddingRight: "0px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Agribusiness"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      paddingRight: "0px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Agricultural Chemistry"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      paddingRight: "0px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Agricultural Waste And Management"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      paddingRight: "0px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Agrochemicals"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      paddingRight: "0px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Agroforestry"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      paddingRight: "0px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Agrometeorology, Remote Sensing & Gis"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      paddingRight: "0px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Agronomy"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      paddingRight: "0px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Biochemistry"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: _grid_css__WEBPACK_IMPORTED_MODULE_6___default.a.subListTitle,
    elevation: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Environmental Sciences ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_4___default.a, {
    dense: "true",
    style: {
      fontSize: "14px",
      padding: "0px"
    },
    className: classes.paper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      paddingRight: "0px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "Air Environment"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      paddingRight: "0px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "Disaster Management"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      paddingRight: "0px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "Environment Education"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      paddingRight: "0px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "Environmental Analysis"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      paddingRight: "0px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "Environmental Biotechnology"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      paddingRight: "0px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "Global Warming"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      paddingRight: "0px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "Microbiology"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      paddingRight: "0px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "Natural Resources"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: _grid_css__WEBPACK_IMPORTED_MODULE_6___default.a.subListTitle,
    elevation: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, "Life Science")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_4___default.a, {
    dense: "true",
    style: {
      fontSize: "14px",
      padding: "0px"
    },
    className: classes.paper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      paddingRight: "0px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "Biochemistry\""), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      paddingRight: "0px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, "Biotechnology\""), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      paddingRight: "0px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, "Botany\""), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      paddingRight: "0px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, "Developmental Biolog"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      paddingRight: "0px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "Economic Botany"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      paddingRight: "0px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, "Ethnobotany"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      paddingRight: "0px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, "Genetics"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      paddingRight: "0px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, "Home Science"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      paddingRight: "0px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, "Human Health"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      paddingRight: "0px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, "Medicinal & AromaticPlants"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    xs: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: _grid_css__WEBPACK_IMPORTED_MODULE_6___default.a.subListTitle,
    elevation: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, "Veterinary and Animal Science")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_4___default.a, {
    dense: "true",
    style: {
      fontSize: "14px",
      padding: "0px"
    },
    className: classes.paper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      paddingRight: "0px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, "Animal Behaviour"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      paddingRight: "0px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, "Animal Biotechnology"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      paddingRight: "0px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, "Animal Breeding"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      paddingRight: "0px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, "Animal Diseases"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      paddingRight: "0px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, "Animal Ecology"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      paddingRight: "0px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, "Animal Husbandry"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      paddingRight: "0px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, "Animal Nutrition"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      paddingRight: "0px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, "Animal Products"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      paddingRight: "0px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }, "Beekeeping"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      paddingRight: "0px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, "Dairy Science")))));
}

/***/ }),

/***/ "./src/components/list1.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InteractiveList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("@material-ui/core/ListItemAvatar");
/* harmony import */ var _material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("@material-ui/core/ListItemIcon");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("@material-ui/core/ListItemSecondaryAction");
/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("@material-ui/core/Avatar");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("@material-ui/core/FormGroup");
/* harmony import */ var _material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("@material-ui/core/FormControlLabel");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("@material-ui/core/Checkbox");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_Folder__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("@material-ui/icons/Folder");
/* harmony import */ var _material_ui_icons_Folder__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Folder__WEBPACK_IMPORTED_MODULE_15__);
var _jsxFileName = "C:\\Users\\LENOVO\\agro-main-web\\src\\components\\list1.js";
















const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {
    flexGrow: 1
  },
  demo: {
    backgroundColor: "#f4f3f3"
  },
  title: {
    margin: theme.spacing(4, 0, 2)
  }
}));

function generate(element) {
  return [0, 1, 2].map(value => react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(element, {
    key: value
  }));
}

function InteractiveList() {
  const classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.root,
    style: {
      backgroundColor: "#f4f3f3"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_13___default.a, {
    container: true,
    spacing: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_13___default.a, {
    md: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_13___default.a, {
    md: 10,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_13___default.a, {
    container: true,
    spacing: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_13___default.a, {
    item: true,
    xs: 12,
    md: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14___default.a, {
    variant: "h6",
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Information"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.demo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Folder__WEBPACK_IMPORTED_MODULE_15___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7___default.a, {
    primary: "Cotact Us",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Folder__WEBPACK_IMPORTED_MODULE_15___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7___default.a, {
    primary: "About Us",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Folder__WEBPACK_IMPORTED_MODULE_15___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7___default.a, {
    primary: "Invitation to Authors",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Folder__WEBPACK_IMPORTED_MODULE_15___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7___default.a, {
    primary: "Copyright and Trademark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Folder__WEBPACK_IMPORTED_MODULE_15___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7___default.a, {
    primary: "Writing A Book",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Folder__WEBPACK_IMPORTED_MODULE_15___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7___default.a, {
    primary: "Publishing Process",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Folder__WEBPACK_IMPORTED_MODULE_15___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7___default.a, {
    primary: "Privacy Policy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Folder__WEBPACK_IMPORTED_MODULE_15___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7___default.a, {
    primary: "Pricing Information",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Folder__WEBPACK_IMPORTED_MODULE_15___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7___default.a, {
    primary: "Accuracy Of Content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_13___default.a, {
    item: true,
    xs: 12,
    md: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14___default.a, {
    variant: "h6",
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, "CUSTOMER SERVICE"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.demo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Folder__WEBPACK_IMPORTED_MODULE_15___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7___default.a, {
    primary: "Delivery Information",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Folder__WEBPACK_IMPORTED_MODULE_15___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7___default.a, {
    primary: "Shipping Rates",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Folder__WEBPACK_IMPORTED_MODULE_15___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7___default.a, {
    primary: "Cancellation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Folder__WEBPACK_IMPORTED_MODULE_15___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7___default.a, {
    primary: "Returns",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Folder__WEBPACK_IMPORTED_MODULE_15___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7___default.a, {
    primary: "Disclaimer of Warranty",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Folder__WEBPACK_IMPORTED_MODULE_15___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7___default.a, {
    primary: "Limitation of Liability",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_13___default.a, {
    item: true,
    xs: 12,
    md: 4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14___default.a, {
    variant: "h6",
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, "About Agrobios Online"), "Throughout the world, we provide scientific and professional communities with superior specialist information \u2013 produced by authors and colleagues across the world. We are committed to quality production, thought provoking contents and highest standard of ethical behavior, besides courteous and highly personalized services.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14___default.a, {
    variant: "h6",
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, "Disclaimer")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_13___default.a, {
    md: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  })));
}

/***/ }),

/***/ "./src/components/navBar.css":
/***/ (function(module, exports, __webpack_require__) {


    var refs = 0;
    var css = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/navBar.css");
    var insertCss = __webpack_require__("./node_modules/isomorphic-style-loader/insertCss.js");
    var content = typeof css === 'string' ? [[module.i, css, '']] : css;

    exports = module.exports = css.locals || {};
    exports._getContent = function() { return content; };
    exports._getCss = function() { return '' + css; };
    exports._insertCss = function(options) { return insertCss(content, options) };

    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if ( true && typeof window !== 'undefined' && window.document) {
      var removeCss = function() {};
      module.hot.accept("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/navBar.css", function() {
        css = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/navBar.css");
        content = typeof css === 'string' ? [[module.i, css, '']] : css;
        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ "./src/components/popover.css":
/***/ (function(module, exports, __webpack_require__) {


    var refs = 0;
    var css = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/popover.css");
    var insertCss = __webpack_require__("./node_modules/isomorphic-style-loader/insertCss.js");
    var content = typeof css === 'string' ? [[module.i, css, '']] : css;

    exports = module.exports = css.locals || {};
    exports._getContent = function() { return content; };
    exports._getCss = function() { return '' + css; };
    exports._insertCss = function(options) { return insertCss(content, options) };

    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if ( true && typeof window !== 'undefined' && window.document) {
      var removeCss = function() {};
      module.hot.accept("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/popover.css", function() {
        css = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/popover.css");
        content = typeof css === 'string' ? [[module.i, css, '']] : css;
        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ "./src/components/popover.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SimplePopover; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@material-ui/core/Popover");
/* harmony import */ var _material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/components/grid.js");
/* harmony import */ var _popover_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/components/popover.css");
/* harmony import */ var _popover_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_popover_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("@material-ui/icons/ExpandMore");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("@material-ui/icons/ExpandLess");
/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\LENOVO\\agro-main-web\\src\\components\\popover.js";









const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  typography: {
    padding: theme.spacing(2)
  },
  menuOptn: {
    border: 0,
    background: 'transparent',
    borderRadius: 3,
    color: 'black',
    height: 40,
    paddingRight: '0 2px',
    marginRight: '2px',
    marginLeft: '20px',
    boxShadow: "none",
    fontWeight: '400'
  }
}));
function SimplePopover() {
  const classes = useStyles();
  const st = useStyles(_popover_css__WEBPACK_IMPORTED_MODULE_6___default.a);
  const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
    "aria-describedby": id,
    className: classes.menuOptn,
    variant: "contained",
    onClick: handleClick,
    elevation: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Book Catalogue ", !open && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), open && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: id,
    open: open,
    anchorEl: anchorEl,
    onClose: handleClose,
    anchorReference: "anchorPosition",
    anchorPosition: {
      top: 65,
      left: 150
    },
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: '0'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'left'
    },
    elevation: 1,
    boxShadow: "none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  })));
}

/***/ }),

/***/ "./src/components/searchbar.css":
/***/ (function(module, exports, __webpack_require__) {


    var refs = 0;
    var css = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/searchbar.css");
    var insertCss = __webpack_require__("./node_modules/isomorphic-style-loader/insertCss.js");
    var content = typeof css === 'string' ? [[module.i, css, '']] : css;

    exports = module.exports = css.locals || {};
    exports._getContent = function() { return content; };
    exports._getCss = function() { return '' + css; };
    exports._insertCss = function(options) { return insertCss(content, options) };

    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if ( true && typeof window !== 'undefined' && window.document) {
      var removeCss = function() {};
      module.hot.accept("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/searchbar.css", function() {
        css = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/searchbar.css");
        content = typeof css === 'string' ? [[module.i, css, '']] : css;
        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ "./src/components/tabs.css":
/***/ (function(module, exports, __webpack_require__) {


    var refs = 0;
    var css = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/tabs.css");
    var insertCss = __webpack_require__("./node_modules/isomorphic-style-loader/insertCss.js");
    var content = typeof css === 'string' ? [[module.i, css, '']] : css;

    exports = module.exports = css.locals || {};
    exports._getContent = function() { return content; };
    exports._getCss = function() { return '' + css; };
    exports._insertCss = function(options) { return insertCss(content, options) };

    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if ( true && typeof window !== 'undefined' && window.document) {
      var removeCss = function() {};
      module.hot.accept("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/tabs.css", function() {
        css = __webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/tabs.css");
        content = typeof css === 'string' ? [[module.i, css, '']] : css;
        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ "./src/components/tabs.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SimpleTabs; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("react-swipeable-views");
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_views__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("@material-ui/core/Tabs");
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("@material-ui/core/Tab");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("@material-ui/core/Box");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _cardGrid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/components/cardGrid.js");
/* harmony import */ var isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("isomorphic-style-loader/useStyles");
/* harmony import */ var isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _tabs_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/components/tabs.css");
/* harmony import */ var _tabs_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_tabs_css__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "C:\\Users\\LENOVO\\agro-main-web\\src\\components\\tabs.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }














function TabPanel(props) {
  const {
    children,
    value,
    index,
    ...other
  } = props;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({
    role: "tabpanel",
    hidden: value !== index,
    id: `full-width-tabpanel-${index}`,
    "aria-labelledby": `full-width-tab-${index}`
  }, other, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), value === index && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_8___default.a, {
    p: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, children)));
}

TabPanel.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  index: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any.isRequired,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any.isRequired
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`
  };
}

const usestyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500
  }
}));
const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["createMuiTheme"])({
  Muitabs: {
    indicator: {
      backgroundColor: "#ffffff"
    },
    root: {
      "&:hover": {
        backgroundColor: "pink"
      }
    },
    selected: {
      backgroundColor: "#ffffff",
      "&:hover": {
        backgroundColor: "#000000"
      }
    }
  }
});
function SimpleTabs() {
  const classes = usestyles();
  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["useTheme"])();
  const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0);
  let triangle = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_10___default()(_tabs_css__WEBPACK_IMPORTED_MODULE_11___default.a);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
    theme: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _tabs_css__WEBPACK_IMPORTED_MODULE_11___default.a.triangular,
    ref: el => {
      triangle = el;
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.root,
    style: {
      width: "90%",
      marginLeft: "5%",
      paading: "0%",
      marginBottom: "10px",
      marginTop: "57px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_4___default.a, {
    position: "static",
    style: {
      backgroundColor: "transparent",
      marginLeft: "38%",
      width: "60%"
    },
    elevation: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_5___default.a, {
    value: value,
    onChange: handleChange,
    indicatorColor: "red",
    textColor: "primary",
    "aria-label": "full width tabs example",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_6___default.a, _extends({
    label: "New Arrivals",
    className: _tabs_css__WEBPACK_IMPORTED_MODULE_11___default.a.tab
  }, a11yProps(0), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_6___default.a, _extends({
    label: "Featured",
    className: _tabs_css__WEBPACK_IMPORTED_MODULE_11___default.a.tab
  }, a11yProps(1), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_6___default.a, _extends({
    label: "ForthComing",
    className: _tabs_css__WEBPACK_IMPORTED_MODULE_11___default.a.tab
  }, a11yProps(2), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_swipeable_views__WEBPACK_IMPORTED_MODULE_2___default.a, {
    axis: theme.direction === 'rtl' ? 'x-reverse' : 'x',
    index: value,
    onChangeIndex: handleChangeIndex,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TabPanel, {
    value: value,
    index: 0,
    dir: theme.direction,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_cardGrid__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TabPanel, {
    value: value,
    index: 1,
    dir: theme.direction,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_cardGrid__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TabPanel, {
    value: value,
    index: 2,
    dir: theme.direction,
    dir: theme.direction,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_cardGrid__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  })))));
}

/***/ }),

/***/ "./src/components/wave-small.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "src/components/wave-small.png?457c73ac";

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL2FkbWlufmhvbWUuanMiLCJzb3VyY2VzIjpbIkM6L1VzZXJzL0xFTk9WTy9hZ3JvLW1haW4td2ViL3NyYy9jb21wb25lbnRzL2NhcmQuY3NzIiwiQzovVXNlcnMvTEVOT1ZPL2Fncm8tbWFpbi13ZWIvc3JjL2NvbXBvbmVudHMvY2FyZEdyaWQuY3NzIiwiQzovVXNlcnMvTEVOT1ZPL2Fncm8tbWFpbi13ZWIvc3JjL2NvbXBvbmVudHMvY2Fyb3VzZWwuc2NzcyIsIkM6L1VzZXJzL0xFTk9WTy9hZ3JvLW1haW4td2ViL3NyYy9jb21wb25lbnRzL2dyaWQuY3NzIiwiQzovVXNlcnMvTEVOT1ZPL2Fncm8tbWFpbi13ZWIvc3JjL2NvbXBvbmVudHMvbmF2QmFyLmNzcyIsIkM6L1VzZXJzL0xFTk9WTy9hZ3JvLW1haW4td2ViL3NyYy9jb21wb25lbnRzL3BvcG92ZXIuY3NzIiwiQzovVXNlcnMvTEVOT1ZPL2Fncm8tbWFpbi13ZWIvc3JjL2NvbXBvbmVudHMvc2VhcmNoYmFyLmNzcyIsIkM6L1VzZXJzL0xFTk9WTy9hZ3JvLW1haW4td2ViL3NyYy9jb21wb25lbnRzL3RhYnMuY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NhcmQuY3NzPzZmMTkiLCJDOi9Vc2Vycy9MRU5PVk8vYWdyby1tYWluLXdlYi9zcmMvY29tcG9uZW50cy9jYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NhcmRHcmlkLmNzcz8zNGUxIiwiQzovVXNlcnMvTEVOT1ZPL2Fncm8tbWFpbi13ZWIvc3JjL2NvbXBvbmVudHMvY2FyZEdyaWQuanMiLCJDOi9Vc2Vycy9MRU5PVk8vYWdyby1tYWluLXdlYi9zcmMvY29tcG9uZW50cy9jYXJvdXNlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYXJvdXNlbC5zY3NzP2EzZTkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZ3JpZC5jc3M/ODg3MiIsIkM6L1VzZXJzL0xFTk9WTy9hZ3JvLW1haW4td2ViL3NyYy9jb21wb25lbnRzL2dyaWQuanMiLCJDOi9Vc2Vycy9MRU5PVk8vYWdyby1tYWluLXdlYi9zcmMvY29tcG9uZW50cy9saXN0MS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9uYXZCYXIuY3NzPzI4MmQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcG9wb3Zlci5jc3M/OWZiYSIsIkM6L1VzZXJzL0xFTk9WTy9hZ3JvLW1haW4td2ViL3NyYy9jb21wb25lbnRzL3BvcG92ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VhcmNoYmFyLmNzcz8xYTk0Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RhYnMuY3NzPzkxMzIiLCJDOi9Vc2Vycy9MRU5PVk8vYWdyby1tYWluLXdlYi9zcmMvY29tcG9uZW50cy90YWJzLmpzIiwiQzovVXNlcnMvTEVOT1ZPL2Fncm8tbWFpbi13ZWIvc3JjL2NvbXBvbmVudHMvd2F2ZS1zbWFsbC5wbmciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikodHJ1ZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jYXJkLWNhcmRiYWNrLThWSVk5e1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBtYXgtd2lkdGg6IDM0NXB4O1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XFxuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxuICAgIHdpZHRoOjIxNXB4O1xcbiAgICBoZWlnaHQ6IDMzMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoNzVkZWcsICNmNGYzZjMgNDAlLCAjZmRmY2ZjIDAlKTtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE1ZGVnLCAjZjRmM2YzIDQwJSwgI2ZkZmNmYyAwJSk7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwwLDAsMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsMCwwLDAuMjQpO1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsMCwwLDAuMTIpLCAwIDFweCAycHggcmdiYSgwLDAsMCwwLjI0KTtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtcXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO1xcbn1cXG4uY2FyZC1jYXJkYmFjay04VklZOTpob3ZlcntcXG4gIC13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMSk7XFxuICAgICAgLW1zLXRyYW5zZm9ybTpzY2FsZSgxLjEpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06c2NhbGUoMS4xKTtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxNHB4IDI4cHggcmdiYSgwLDAsMCwwLjI1KSwgMCAxMHB4IDEwcHggcmdiYSgwLDAsMCwwLjIyKTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAxNHB4IDI4cHggcmdiYSgwLDAsMCwwLjI1KSwgMCAxMHB4IDEwcHggcmdiYSgwLDAsMCwwLjIyKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxNiwgNjUsIDU5KTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01JSk7XFxuICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNSUpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFxufVxcbi5jYXJkLWNhcmRiYWNrLThWSVk5OmJlZm9yZXtcXG4gICAgY29udGVudDpcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6MDtcXG4gICAgbGVmdDowO1xcbiAgICB3aWR0aDoxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6I2ZkZmNmYztcXG4gICAgLXdlYmtpdC1jbGlwLXBhdGg6Y2lyY2xlKDEyNXB4IGF0IDEwMCUgMjAlKTtcXG4gICAgICAgICAgICBjbGlwLXBhdGg6Y2lyY2xlKDEyNXB4IGF0IDEwMCUgMjAlKTtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjdzIGVhc2UtaW4tb3V0O1xcbiAgICAtby10cmFuc2l0aW9uOiAwLjdzIGVhc2UtaW4tb3V0O1xcbiAgICB0cmFuc2l0aW9uOiAwLjdzIGVhc2UtaW4tb3V0O1xcbn1cXG4uY2FyZC1jYXJkYmFjay04VklZOTpob3ZlcjpiZWZvcmV7XFxuICAgIC13ZWJraXQtY2xpcC1wYXRoOmNpcmNsZSgyNzVweCBhdCAwJSA1MCUpO1xcbiAgICAgICAgICAgIGNsaXAtcGF0aDpjaXJjbGUoMjc1cHggYXQgMCUgNTAlKTtcXG59XFxuLmNhcmQtY2FyZGJhY2stOFZJWTk6YWZ0ZXJ7XFxuICAgIGNvbnRlbnQ6XFxcIkFncm9iaW9zXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6MzUlO1xcbiAgICBsZWZ0Oi0xMCU7XFxuICAgIGZvbnQtc2l6ZTo0ZW07XFxuICAgIGZvbnQtd2VpZ2h0OjgwMDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBjb2xvcjogcmdiYSgyMTEsIDIwOCwgMjA4LCAwLjIxKTtcXG59XFxuLmNhcmQtY2FyZGJhY2stOFZJWTkgaW1ne1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHRvcDogOTUlO1xcbiAgICByaWdodDoyMSU7XFxuICAgIGhlaWdodDoxODBweDtcXG4gICAgb3BhY2l0eTogODUlO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuNXM7XFxuICAgIC1vLXRyYW5zaXRpb246IDAuNXM7XFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxuICAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KC00cHggM3B4IDFtbSByZ2IoMCwwLDAsMC43KSk7XFxuICAgICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KC00cHggM3B4IDFtbSByZ2IoMCwwLDAsMC43KSlcXG59XFxuLmNhcmQtY2FyZGJhY2stOFZJWTk6aG92ZXIgaW1ne1xcbiAgICB0b3A6MjAlO1xcbn1cXG4uY2FyZC1jYXJkYmFjay04VklZOSBoNntcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdG9wOjEwMCU7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDE4MCUpO1xcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxODAlKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTgwJSk7XFxuICAgIHdpZHRoOjkwJTtcXG4gICAgaGVpZ2h0OjEwMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuNXM7XFxuICAgICAtby10cmFuc2l0aW9uOiAwLjVzO1xcbiAgICAgdHJhbnNpdGlvbjogMC41cztcXG59XFxuLmNhcmQtY2FyZGJhY2stOFZJWTkgcCBwOm50aC1jaGlsZCgxKXtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdG9wOjEwMCU7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMyUpO1xcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDMlKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAzJSk7XFxuICAgIHdpZHRoOjkwJTtcXG4gICAgaGVpZ2h0OjEwMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuNXM7XFxuICAgICAtby10cmFuc2l0aW9uOiAwLjVzO1xcbiAgICAgdHJhbnNpdGlvbjogMC41cztcXG59XFxuLmNhcmQtY2FyZGJhY2stOFZJWTkgcCBwOm50aC1jaGlsZCgyKXtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdG9wOjEwMCU7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIyMiUpO1xcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMjIlKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjIyJSk7XFxuICAgIHdpZHRoOjkwJTtcXG4gICAgaGVpZ2h0OjEwMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuNXM7XFxuICAgICAtby10cmFuc2l0aW9uOiAwLjVzO1xcbiAgICAgdHJhbnNpdGlvbjogMC41cztcXG59XFxuLmNhcmQtY2FyZGJhY2stOFZJWTkgcCBwOm50aC1jaGlsZCgzKXtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdG9wOjEwMCU7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDI0MSUpO1xcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyNDElKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjQxJSk7XFxuICAgIHdpZHRoOjkwJTtcXG4gICAgaGVpZ2h0OjEwMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuNXM7XFxuICAgICAtby10cmFuc2l0aW9uOiAwLjVzO1xcbiAgICAgdHJhbnNpdGlvbjogMC41cztcXG4gICAgIG9wYWNpdHk6IDA7XFxuICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcbi5jYXJkLWNhcmRiYWNrLThWSVk5IHAgcDpudGgtY2hpbGQoNCl7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHRvcDoxMDAlO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyNjIlKTtcXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjYyJSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDI2MiUpO1xcbiAgICB3aWR0aDo5MCU7XFxuICAgIGhlaWdodDoxMDBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjVzO1xcbiAgICAgLW8tdHJhbnNpdGlvbjogMC41cztcXG4gICAgIHRyYW5zaXRpb246IDAuNXM7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuLmNhcmQtY2FyZGJhY2stOFZJWTk6aG92ZXIgaDZ7XFxuICAgIHRvcDoyMCU7XFxufVxcbi5jYXJkLWNhcmRiYWNrLThWSVk5OmhvdmVyIHAgcHtcXG4gICAgdG9wOjIwJTtcXG59XFxuLmNhcmQtY2FyZGJhY2stOFZJWTk6aG92ZXIgcCBwOm50aC1jaGlsZCgzKXtcXG4gICAgIG9wYWNpdHk6IDE7XFxuICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwLjJzO1xcbiAgICAgICAgICAtby10cmFuc2l0aW9uLWRlbGF5OiAwLjJzO1xcbiAgICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjJzO1xcbn1cXG4uY2FyZC1jYXJkYmFjay04VklZOTpob3ZlciBwIHA6bnRoLWNoaWxkKDQpe1xcbiAgICAgb3BhY2l0eTogMTtcXG4gICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDAuM3M7XFxuICAgICAgICAgIC1vLXRyYW5zaXRpb24tZGVsYXk6IDAuM3M7XFxuICAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuM3M7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcImNhcmQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQix3QkFBZ0I7WUFBaEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsOERBQTJEO0lBQTNELDJEQUEyRDtJQUMzRCwwRUFBa0U7WUFBbEUsa0VBQWtFO0lBQ2xFLHVEQUErQztJQUEvQyxrREFBK0M7SUFBL0MsK0NBQStDO0FBQ25EO0FBQ0E7RUFDRSw0QkFBb0I7TUFBcEIsd0JBQW9CO1VBQXBCLG9CQUFvQjtFQUNwQiw4RUFBc0U7VUFBdEUsc0VBQXNFO0VBQ3RFLGlDQUFpQztFQUNqQyxrQ0FBMEI7TUFBMUIsOEJBQTBCO1VBQTFCLDBCQUEwQjtFQUMxQixtQkFBbUI7O0FBRXJCO0FBQ0E7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLEtBQUs7SUFDTCxNQUFNO0lBQ04sVUFBVTtJQUNWLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsMkNBQW1DO1lBQW5DLG1DQUFtQztJQUNuQyxvQ0FBNEI7SUFBNUIsK0JBQTRCO0lBQTVCLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0kseUNBQWlDO1lBQWpDLGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsU0FBUztJQUNULGFBQWE7SUFDYixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGdDQUFnQztBQUNwQztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixRQUFRO0lBQ1IsU0FBUztJQUNULFlBQVk7SUFDWixZQUFZO0lBQ1osd0JBQWdCO0lBQWhCLG1CQUFnQjtJQUFoQixnQkFBZ0I7R0FDakIsd0RBQStDO1dBQS9DO0FBQ0g7QUFDQTtJQUNJLE9BQU87QUFDWDtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixRQUFRO0lBQ1IsbUNBQTJCO1FBQTNCLCtCQUEyQjtZQUEzQiwyQkFBMkI7SUFDM0IsU0FBUztJQUNULFlBQVk7SUFDWixrQkFBa0I7S0FDakIsd0JBQWdCO0tBQWhCLG1CQUFnQjtLQUFoQixnQkFBZ0I7QUFDckI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsUUFBUTtJQUNSLG1DQUEyQjtRQUEzQiwrQkFBMkI7WUFBM0IsMkJBQTJCO0lBQzNCLFNBQVM7SUFDVCxZQUFZO0lBQ1osa0JBQWtCO0tBQ2pCLHdCQUFnQjtLQUFoQixtQkFBZ0I7S0FBaEIsZ0JBQWdCO0FBQ3JCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFFBQVE7SUFDUixtQ0FBMkI7UUFBM0IsK0JBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQixTQUFTO0lBQ1QsWUFBWTtJQUNaLGtCQUFrQjtLQUNqQix3QkFBZ0I7S0FBaEIsbUJBQWdCO0tBQWhCLGdCQUFnQjtBQUNyQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixRQUFRO0lBQ1IsbUNBQTJCO1FBQTNCLCtCQUEyQjtZQUEzQiwyQkFBMkI7SUFDM0IsU0FBUztJQUNULFlBQVk7SUFDWixrQkFBa0I7S0FDakIsd0JBQWdCO0tBQWhCLG1CQUFnQjtLQUFoQixnQkFBZ0I7S0FDaEIsVUFBVTtLQUNWLGtCQUFrQjtBQUN2QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixRQUFRO0lBQ1IsbUNBQTJCO1FBQTNCLCtCQUEyQjtZQUEzQiwyQkFBMkI7SUFDM0IsU0FBUztJQUNULFlBQVk7SUFDWixrQkFBa0I7S0FDakIsd0JBQWdCO0tBQWhCLG1CQUFnQjtLQUFoQixnQkFBZ0I7TUFDZixVQUFVO0tBQ1gsa0JBQWtCO0FBQ3ZCO0FBQ0E7SUFDSSxPQUFPO0FBQ1g7QUFDQTtJQUNJLE9BQU87QUFDWDtBQUVBO0tBQ0ssVUFBVTtLQUNWLG1CQUFtQjtLQUNuQiw4QkFBc0I7VUFBdEIseUJBQXNCO2FBQXRCLHNCQUFzQjtBQUMzQjtBQUNBO0tBQ0ssVUFBVTtLQUNWLG1CQUFtQjtLQUNuQiw4QkFBc0I7VUFBdEIseUJBQXNCO2FBQXRCLHNCQUFzQjtBQUMzQlwiLFwiZmlsZVwiOlwiY2FyZC5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNhcmRiYWNre1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBtYXgtd2lkdGg6IDM0NXB4O1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG4gICAgd2lkdGg6MjE1cHg7XFxuICAgIGhlaWdodDogMzMwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNWRlZywgI2Y0ZjNmMyA0MCUsICNmZGZjZmMgMCUpO1xcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLDAsMCwwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwwLDAsMC4yNCk7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO1xcbn1cXG4uY2FyZGJhY2s6aG92ZXJ7XFxuICB0cmFuc2Zvcm06c2NhbGUoMS4xKTtcXG4gIGJveC1zaGFkb3c6IDAgMTRweCAyOHB4IHJnYmEoMCwwLDAsMC4yNSksIDAgMTBweCAxMHB4IHJnYmEoMCwwLDAsMC4yMik7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTYsIDY1LCA1OSk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFxufVxcbi5jYXJkYmFjazpiZWZvcmV7XFxuICAgIGNvbnRlbnQ6XFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOjA7XFxuICAgIGxlZnQ6MDtcXG4gICAgd2lkdGg6MTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZGZjZmM7XFxuICAgIGNsaXAtcGF0aDpjaXJjbGUoMTI1cHggYXQgMTAwJSAyMCUpO1xcbiAgICB0cmFuc2l0aW9uOiAwLjdzIGVhc2UtaW4tb3V0O1xcbn1cXG4uY2FyZGJhY2s6aG92ZXI6YmVmb3Jle1xcbiAgICBjbGlwLXBhdGg6Y2lyY2xlKDI3NXB4IGF0IDAlIDUwJSk7XFxufVxcbi5jYXJkYmFjazphZnRlcntcXG4gICAgY29udGVudDpcXFwiQWdyb2Jpb3NcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDozNSU7XFxuICAgIGxlZnQ6LTEwJTtcXG4gICAgZm9udC1zaXplOjRlbTtcXG4gICAgZm9udC13ZWlnaHQ6ODAwO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGNvbG9yOiByZ2JhKDIxMSwgMjA4LCAyMDgsIDAuMjEpO1xcbn1cXG4uY2FyZGJhY2sgaW1ne1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHRvcDogOTUlO1xcbiAgICByaWdodDoyMSU7XFxuICAgIGhlaWdodDoxODBweDtcXG4gICAgb3BhY2l0eTogODUlO1xcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xcbiAgIGZpbHRlcjogZHJvcC1zaGFkb3coLTRweCAzcHggMW1tIHJnYigwLDAsMCwwLjcpKVxcbn1cXG4uY2FyZGJhY2s6aG92ZXIgaW1ne1xcbiAgICB0b3A6MjAlO1xcbn1cXG4uY2FyZGJhY2sgaDZ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHRvcDoxMDAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTgwJSk7XFxuICAgIHdpZHRoOjkwJTtcXG4gICAgaGVpZ2h0OjEwMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICB0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG4uY2FyZGJhY2sgcCBwOm50aC1jaGlsZCgxKXtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdG9wOjEwMCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDMlKTtcXG4gICAgd2lkdGg6OTAlO1xcbiAgICBoZWlnaHQ6MTAwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgIHRyYW5zaXRpb246IDAuNXM7XFxufVxcbi5jYXJkYmFjayBwIHA6bnRoLWNoaWxkKDIpe1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB0b3A6MTAwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIyMiUpO1xcbiAgICB3aWR0aDo5MCU7XFxuICAgIGhlaWdodDoxMDBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgdHJhbnNpdGlvbjogMC41cztcXG59XFxuLmNhcmRiYWNrIHAgcDpudGgtY2hpbGQoMyl7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHRvcDoxMDAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjQxJSk7XFxuICAgIHdpZHRoOjkwJTtcXG4gICAgaGVpZ2h0OjEwMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICB0cmFuc2l0aW9uOiAwLjVzO1xcbiAgICAgb3BhY2l0eTogMDtcXG4gICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuLmNhcmRiYWNrIHAgcDpudGgtY2hpbGQoNCl7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHRvcDoxMDAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjYyJSk7XFxuICAgIHdpZHRoOjkwJTtcXG4gICAgaGVpZ2h0OjEwMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICB0cmFuc2l0aW9uOiAwLjVzO1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcbi5jYXJkYmFjazpob3ZlciBoNntcXG4gICAgdG9wOjIwJTtcXG59XFxuLmNhcmRiYWNrOmhvdmVyIHAgcHtcXG4gICAgdG9wOjIwJTtcXG59XFxuXFxuLmNhcmRiYWNrOmhvdmVyIHAgcDpudGgtY2hpbGQoMyl7XFxuICAgICBvcGFjaXR5OiAxO1xcbiAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XFxufVxcbi5jYXJkYmFjazpob3ZlciBwIHA6bnRoLWNoaWxkKDQpe1xcbiAgICAgb3BhY2l0eTogMTtcXG4gICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjNzO1xcbn1cXG5cIl19XSk7XG4vLyBFeHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJjYXJkYmFja1wiOiBcImNhcmQtY2FyZGJhY2stOFZJWTlcIlxufTsiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKSh0cnVlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmNhcmRHcmlkLW5vU2Nyb2xsLTM3cEZ6e1xcbiAgICBtYXJnaW4tbGVmdDogLTU1cHg7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbiAgIWltcG9ydGFudDtcXG59XFxuLmNhcmRHcmlkLW1vdmVSaWdodC0xQkpveiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6MDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgyNTAlKTtcXG4gICAgICAgIC1tcy10cmFuc2Zvcm06dHJhbnNsYXRlWSgyNTAlKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWSgyNTAlKTtcXG4gICAgei1pbmRleDoxNTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOnRyYW5zcGFyZW50O1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxufVxcbi5jYXJkR3JpZC1tb3ZlUmlnaHQtMUJKb3o6aG92ZXJ7XFxuICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTEsIDE0MiwgMTQyLDAuOCk7XFxuICAgb3BhY2l0eTogMC41O1xcbiAgIGNvbG9yOiAjMDAwMDAwO1xcbn1cXG4uY2FyZEdyaWQtbW92ZUxlZnQtMlJUQTEge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6MDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgyNTAlKTtcXG4gICAgICAgIC1tcy10cmFuc2Zvcm06dHJhbnNsYXRlWSgyNTAlKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWSgyNTAlKTtcXG4gICAgei1pbmRleDoxNTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOnRyYW5zcGFyZW50O1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxufVxcbi5jYXJkR3JpZC1tb3ZlTGVmdC0yUlRBMTpob3ZlcntcXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1MSwgMTQyLCAxNDIsMC44KTtcXG4gICBvcGFjaXR5OiAwLjU7XFxuICAgY29sb3I6ICMwMDAwMDA7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcImNhcmRHcmlkLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1Asa0NBQTBCO1FBQTFCLDhCQUEwQjtZQUExQiwwQkFBMEI7SUFDMUIsVUFBVTtJQUNWLDZCQUE2QjtJQUM3QixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjtBQUNBO0dBQ0cseUNBQXlDO0dBQ3pDLFlBQVk7R0FDWixjQUFjO0FBQ2pCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLGtDQUEwQjtRQUExQiw4QkFBMEI7WUFBMUIsMEJBQTBCO0lBQzFCLFVBQVU7SUFDViw2QkFBNkI7SUFDN0IsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7QUFDQTtHQUNHLHlDQUF5QztHQUN6QyxZQUFZO0dBQ1osY0FBYztBQUNqQlwiLFwiZmlsZVwiOlwiY2FyZEdyaWQuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5ub1Njcm9sbHtcXG4gICAgbWFyZ2luLWxlZnQ6IC01NXB4O1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW4gICFpbXBvcnRhbnQ7XFxufVxcbi5tb3ZlUmlnaHQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OjA7XFxuICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVZKDI1MCUpO1xcbiAgICB6LWluZGV4OjE1O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6dHJhbnNwYXJlbnQ7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuLm1vdmVSaWdodDpob3ZlcntcXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1MSwgMTQyLCAxNDIsMC44KTtcXG4gICBvcGFjaXR5OiAwLjU7XFxuICAgY29sb3I6ICMwMDAwMDA7XFxufVxcbi5tb3ZlTGVmdCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDowO1xcbiAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWSgyNTAlKTtcXG4gICAgei1pbmRleDoxNTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOnRyYW5zcGFyZW50O1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxufVxcbi5tb3ZlTGVmdDpob3ZlcntcXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1MSwgMTQyLCAxNDIsMC44KTtcXG4gICBvcGFjaXR5OiAwLjU7XFxuICAgY29sb3I6ICMwMDAwMDA7XFxufVwiXX1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcIm5vU2Nyb2xsXCI6IFwiY2FyZEdyaWQtbm9TY3JvbGwtMzdwRnpcIixcblx0XCJtb3ZlUmlnaHRcIjogXCJjYXJkR3JpZC1tb3ZlUmlnaHQtMUJKb3pcIixcblx0XCJtb3ZlTGVmdFwiOiBcImNhcmRHcmlkLW1vdmVMZWZ0LTJSVEExXCJcbn07IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikodHJ1ZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbiAgICAqe1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgIG1hcmdpbjowO1xcbiAgICB9XFxuLmNhcm91c2VsLWhlcm8tMVJzLU57XFxuICAgIHZpc2liaWxpdHk6aGlkZGVuO1xcbiAgICBoZWlnaHQ6IDk1dmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjEsIDIwNywgMjUzKTtcXG59XFxuLmNhcm91c2VsLWhlcm8tMVJzLU46YmVmb3Jle1xcbiAgICBjb250ZW50OlxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgaGVpZ2h0OiAxMjhweDtcXG4gICAgaGVpZ2h0OiA4cmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvc3JjL2NvbXBvbmVudHMvd2F2ZS1zbWFsbC5wbmc/NDU3YzczYWMpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG4uY2Fyb3VzZWwtb3ZlcmxheS0yUjlqa3tcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOjA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG4uY2Fyb3VzZWwtY29udGFpbmVyLTJEcE56e1xcbiAgICAgICAgd2lkdGg6MTQ0MHB4O1xcbiAgICAgICAgbWluLXdpZHRoOjE0NDBweDtcXG4gICAgICAgIG1hcmdpbjowIGF1dG87XFxufVxcbi5jYXJvdXNlbC1oZXJvSW5uZXItMlMyX0t7XFxuICAgICAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XFxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgICAgICBtYXJnaW46MCAyNHB4O1xcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XFxufVxcbi5jYXJvdXNlbC1oZXJvQ29udGVudC0zaElQc3tcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwJTsgICAgICAgIFxcbn1cXG4uY2Fyb3VzZWwtaGVyb0NvbnRlbnRJbm5lci0xLVlSYntcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjYwMHB4O1xcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjAgYXV0bztcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzIzMjMyO1xcbn1cXG5oMXtcXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDo1MDA7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICAgICAgICAgICAgICBcXG59XFxuLmNhcm91c2VsLWhlcm9Db250ZW50TGluZS0zX3JYWXtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5jYXJvdXNlbC1oZXJvSW1hZ2VzLTEyd2I5e1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5jYXJvdXNlbC1maXJzdEltYWdlLTMyY1pTe1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDoyNTBweDtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OjUwcHg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDozMCU7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6NDAlO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KC00cHggNHB4IDFtbSByZ2IoMCwwLDAsMC43KSk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coLTRweCA0cHggMW1tIHJnYigwLDAsMCwwLjcpKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcbi5jYXJvdXNlbC1zZWNvbmRJbWFnZS1LY1BZRntcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6MjUycHg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDoxNzBweDtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjMwJTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDo0MCU7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coLTRweCAxcHggMW1tIHJnYigwLDAsMCwwLjcpKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygtNHB4IDFweCAxbW0gcmdiKDAsMCwwLDAuNykpO1xcbn1cXG4uY2Fyb3VzZWwtZmlyc3RJbWFnZS0zMmNaUyBpbWcsIC5jYXJvdXNlbC1zZWNvbmRJbWFnZS1LY1BZRiBpbWd7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDowO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OjA7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDowO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTowO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7IFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4uY2Fyb3VzZWwtdGhpcmRJbWFnZS0xc1Ezb3tcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6MjU0cHg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDoyOTBweDtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjMwJTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDo0MCU7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coLTRweCAxcHggMW1tIHJnYigwLDAsMCwwLjcpKTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygtNHB4IDFweCAxbW0gcmdiKDAsMCwwLDAuNykpO1xcbn1cXG4uY2Fyb3VzZWwtdGhpcmRJbWFnZS0xc1EzbyBpbWd7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDowO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OjA7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDowO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTowO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7IFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuIFwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcImNhcm91c2VsLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtJQUNJO1FBQ0ksVUFBVTtRQUNWLFFBQVE7SUFDWjtBQUNKO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixvQ0FBb0M7QUFDeEM7QUFDQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFNBQVM7SUFDVCxhQUFZO0lBQVosWUFBWTtJQUNaLFdBQVc7SUFDWCxxRUFBcUU7SUFDckUsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxLQUFLO0lBQ0wseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxhQUFhO0FBQ2pCO0FBQ0E7UUFDUSxZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLGFBQWE7QUFDckI7QUFDQztZQUNXLG9CQUFhO1lBQWIsYUFBYTtZQUNiLHNCQUFtQjtnQkFBbkIsbUJBQW1CO1lBQ25CLHNCQUE4QjtnQkFBOUIsOEJBQThCO1lBQzlCLGFBQWE7WUFDYixhQUFhO0FBQ3pCO0FBRUE7Z0JBQ2dCLFVBQVU7QUFDMUI7QUFFQztvQkFDbUIsV0FBVztvQkFDWCxhQUFhO29CQUNiLGNBQWM7QUFDbEM7QUFFQzt3QkFDdUIsZUFBZTt3QkFDZixlQUFlOztBQUV2QztBQUNBOzRCQUM0QixTQUFTOzRCQUNULFlBQVk7NEJBQ1osZ0JBQWdCO0FBQzVDO0FBRUE7d0JBQ3dCLFVBQVU7d0JBQ1YsYUFBYTt3QkFDYixrQkFBa0I7QUFDMUM7QUFDRTtnQ0FDOEIsa0JBQWtCO2dDQUNsQixnQkFBZ0I7Z0NBQ2hCLFNBQVM7Z0NBQ1QsVUFBVTtnQ0FDVixTQUFTO2dDQUNULFVBQVU7Z0NBQ1Ysd0RBQWdEO3dDQUFoRCxnREFBZ0Q7NEJBQ3BEO0FBRTVCO2dDQUNnQyxrQkFBa0I7Z0NBQ2xCLGdCQUFnQjtnQ0FDaEIsU0FBUztnQ0FDVCxXQUFXO2dDQUNYLFNBQVM7Z0NBQ1QsVUFBVTtnQ0FDVix3REFBZ0Q7d0NBQWhELGdEQUFnRDtBQUNoRjtBQUNBO2lDQUNpQyxrQkFBa0I7aUNBQ2xCLEtBQUs7aUNBQ0wsT0FBTztpQ0FDUCxNQUFNO2lDQUNOLFFBQVE7aUNBQ1IsVUFBVTtpQ0FDVixZQUFZO2dDQUNiO0FBQ2hDO2dDQUNnQyxrQkFBa0I7Z0NBQ2xCLGdCQUFnQjtnQ0FDaEIsU0FBUztnQ0FDVCxXQUFXO2dDQUNYLFNBQVM7Z0NBQ1QsVUFBVTtnQ0FDVix3REFBZ0Q7d0NBQWhELGdEQUFnRDtBQUNoRjtBQUNBO2lDQUNpQyxrQkFBa0I7aUNBQ2xCLEtBQUs7aUNBQ0wsT0FBTztpQ0FDUCxNQUFNO2lDQUNOLFFBQVE7aUNBQ1IsVUFBVTtpQ0FDVixZQUFZO0FBQzdDXCIsXCJmaWxlXCI6XCJjYXJvdXNlbC5zY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbiAgICAqe1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgIG1hcmdpbjowO1xcbiAgICB9XFxuLmhlcm97XFxuICAgIHZpc2liaWxpdHk6aGlkZGVuO1xcbiAgICBoZWlnaHQ6IDk1dmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjEsIDIwNywgMjUzKTtcXG59XFxuLmhlcm86YmVmb3Jle1xcbiAgICBjb250ZW50OlxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgaGVpZ2h0OiA4cmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvc3JjL2NvbXBvbmVudHMvd2F2ZS1zbWFsbC5wbmc/NDU3YzczYWMpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG4ub3ZlcmxheXtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOjA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG4uY29udGFpbmVye1xcbiAgICAgICAgd2lkdGg6MTQ0MHB4O1xcbiAgICAgICAgbWluLXdpZHRoOjE0NDBweDtcXG4gICAgICAgIG1hcmdpbjowIGF1dG87XFxufVxcbiAuaGVyb0lubmVye1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICAgICAgbWFyZ2luOjAgMjRweDtcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uaGVyb0NvbnRlbnR7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7ICAgICAgICBcXG59XFxuXFxuIC5oZXJvQ29udGVudElubmVye1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6NjAwcHg7XFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46MCBhdXRvO1xcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzMjMyMzI7XFxufVxcblxcbiBoMXtcXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDo1MDA7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICAgICAgICAgICAgICBcXG59XFxuLmhlcm9Db250ZW50TGluZXtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5oZXJvSW1hZ2Vze1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbiAgLmZpcnN0SW1hZ2V7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOjI1MHB4O1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6NTBweDtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjMwJTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDo0MCU7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KC00cHggNHB4IDFtbSByZ2IoMCwwLDAsMC43KSk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcbi5zZWNvbmRJbWFnZXtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6MjUycHg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDoxNzBweDtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjMwJTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDo0MCU7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KC00cHggMXB4IDFtbSByZ2IoMCwwLDAsMC43KSk7XFxufVxcbi5maXJzdEltYWdlIGltZywgLnNlY29uZEltYWdlIGltZ3tcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOjA7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6MDtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OjA7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOjA7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTsgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxcbi50aGlyZEltYWdle1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDoyNTRweDtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OjI5MHB4O1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MzAlO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjQwJTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coLTRweCAxcHggMW1tIHJnYigwLDAsMCwwLjcpKTtcXG59XFxuLnRoaXJkSW1hZ2UgaW1ne1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6MDtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDowO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6MDtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206MDtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlOyBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbiBcIl19XSk7XG4vLyBFeHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJoZXJvXCI6IFwiY2Fyb3VzZWwtaGVyby0xUnMtTlwiLFxuXHRcIm92ZXJsYXlcIjogXCJjYXJvdXNlbC1vdmVybGF5LTJSOWprXCIsXG5cdFwiY29udGFpbmVyXCI6IFwiY2Fyb3VzZWwtY29udGFpbmVyLTJEcE56XCIsXG5cdFwiaGVyb0lubmVyXCI6IFwiY2Fyb3VzZWwtaGVyb0lubmVyLTJTMl9LXCIsXG5cdFwiaGVyb0NvbnRlbnRcIjogXCJjYXJvdXNlbC1oZXJvQ29udGVudC0zaElQc1wiLFxuXHRcImhlcm9Db250ZW50SW5uZXJcIjogXCJjYXJvdXNlbC1oZXJvQ29udGVudElubmVyLTEtWVJiXCIsXG5cdFwiaGVyb0NvbnRlbnRMaW5lXCI6IFwiY2Fyb3VzZWwtaGVyb0NvbnRlbnRMaW5lLTNfclhZXCIsXG5cdFwiaGVyb0ltYWdlc1wiOiBcImNhcm91c2VsLWhlcm9JbWFnZXMtMTJ3YjlcIixcblx0XCJmaXJzdEltYWdlXCI6IFwiY2Fyb3VzZWwtZmlyc3RJbWFnZS0zMmNaU1wiLFxuXHRcInNlY29uZEltYWdlXCI6IFwiY2Fyb3VzZWwtc2Vjb25kSW1hZ2UtS2NQWUZcIixcblx0XCJ0aGlyZEltYWdlXCI6IFwiY2Fyb3VzZWwtdGhpcmRJbWFnZS0xc1Ezb1wiXG59OyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKHRydWUpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZ3JpZC1zdWJMaXN0VGl0bGUtUEZMRlV7XFxuICAgICBtYXJnaW46IDEwcHggMHB4O1xcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7IFxcbiAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxufVxcbi5ncmlkLXN1Ykxpc3RUaXRsZS1QRkxGVTpob3ZlcntcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmdyaWQtc3ViTGlzdFRpdGxlLVBGTEZVIHNwYW57XFxuICAtd2Via2l0LXRyYW5zaXRpb246IDEgYWxsO1xcbiAgLW8tdHJhbnNpdGlvbjogMSBhbGw7XFxuICB0cmFuc2l0aW9uOiAxIGFsbDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxNjEsIDIwNywgMjUzKTtcXG4gIHBhZGRpbmc6MnB4IDVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmdyaWQtc3ViTGlzdFRpdGxlLVBGTEZVIHNwYW46aG92ZXJ7XFxuICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MSwgMjA3LCAyNTMpO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcImdyaWQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0tBQ0ssZ0JBQWdCO01BQ2YsbUJBQW1CO01BQ25CLGlCQUFpQjtNQUNqQix5QkFBeUI7TUFDekIsZUFBZTtNQUNmLG1CQUFtQjtBQUN6QjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UseUJBQWlCO0VBQWpCLG9CQUFpQjtFQUFqQixpQkFBaUI7RUFDakIsb0NBQW9DO0VBQ3BDLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7QUFDQTtHQUNHLG9DQUFvQztFQUNyQyxjQUFjO0FBQ2hCXCIsXCJmaWxlXCI6XCJncmlkLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuc3ViTGlzdFRpdGxle1xcbiAgICAgbWFyZ2luOiAxMHB4IDBweDtcXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMHB4OyBcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbn1cXG4uc3ViTGlzdFRpdGxlOmhvdmVye1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uc3ViTGlzdFRpdGxlIHNwYW57XFxuICB0cmFuc2l0aW9uOiAxIGFsbDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxNjEsIDIwNywgMjUzKTtcXG4gIHBhZGRpbmc6MnB4IDVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnN1Ykxpc3RUaXRsZSBzcGFuOmhvdmVye1xcbiAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjEsIDIwNywgMjUzKTtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cIl19XSk7XG4vLyBFeHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJzdWJMaXN0VGl0bGVcIjogXCJncmlkLXN1Ykxpc3RUaXRsZS1QRkxGVVwiXG59OyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKHRydWUpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJib2R5e1xcbiAgICBtYXJnaW46IDBweDtcXG59XFxuLm5hdkJhci1tZW51LW9wdGlvbnMtMjZuaXh7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wibmF2QmFyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksWUFBWTtBQUNoQlwiLFwiZmlsZVwiOlwibmF2QmFyLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5e1xcbiAgICBtYXJnaW46IDBweDtcXG59XFxuLm1lbnUtb3B0aW9uc3tcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cIl19XSk7XG4vLyBFeHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJtZW51LW9wdGlvbnNcIjogXCJuYXZCYXItbWVudS1vcHRpb25zLTI2bml4XCJcbn07IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikodHJ1ZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHl7XFxuICAgIG1hcmdpbjogMHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJwb3BvdmVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFdBQVc7QUFDZlwiLFwiZmlsZVwiOlwicG9wb3Zlci5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keXtcXG4gICAgbWFyZ2luOiAwcHg7XFxufVwiXX1dKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKHRydWUpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc2VhcmNoYmFyLWZpZWxkU2VhcmNoLTNGRUZzXFxue1xcbiAgICAgbWFyZ2luLWxlZnQ6IDIwJSAhaW1wb3J0YW50O1xcbiAgICAgd2lkdGg6IDYwJSAhaW1wb3J0YW50O1xcbiAgICAgZm9udC1zaXplOiAzNXB4ICFpbXBvcnRhbnQ7XFxuICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn0gXFxuLnNlYXJjaGJhci1maWVsZFNlYXJjaC0zRkVGcyBmaWVsZHNldFxcbntcXG4gICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxufSBcXG4jc2VhcmNoYmFyLWZyZWUtc29sby0yLWRlbW8tMVdpdHY6Zm9jdXN7XFxuICAgIHdpZHRoOjkwMHB4O1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWShcXFwiLTUwJVxcXCIpO1xcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWShcXFwiLTUwJVxcXCIpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWShcXFwiLTUwJVxcXCIpO1xcbiAgICB6LWluZGV4OiAxMDtcXG59IFxcbi5zZWFyY2hiYXItZmllbGRTZWFyY2gtM0ZFRnM6Zm9jdXMgYm9keXtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAyMDAwcHggMCAwIDAgcmdiYSgyNTUsMjU1LDI1NSwwLjgpIDtcXG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAyMDAwcHggMCAwIDAgcmdiYSgyNTUsMjU1LDI1NSwwLjgpIDtcXG4gICAgei1pbmRleDoxO1xcbn0gXFxuLnNlYXJjaGJhci1pY29uLTMwNGo3e1xcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gICAgc2l6ZTogMzVweDtcXG4gICAgdG9wOjMwcHg7XFxuICAgIGxlZnQ6MjgwO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJzZWFyY2hiYXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztLQUVLLDJCQUEyQjtLQUMzQixxQkFBcUI7S0FDckIsMEJBQTBCO0tBQzFCLGtCQUFrQjtLQUNsQixtQkFBbUI7QUFDeEI7QUFDQTs7S0FFSyxtQkFBbUI7QUFDeEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxxQ0FBNkI7UUFBN0IsaUNBQTZCO1lBQTdCLDZCQUE2QjtJQUM3QixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQiw2REFBcUQ7WUFBckQscURBQXFEO0lBQ3JELFNBQVM7QUFDYjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixRQUFRO0lBQ1IsUUFBUTtBQUNaXCIsXCJmaWxlXCI6XCJzZWFyY2hiYXIuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5maWVsZFNlYXJjaFxcbntcXG4gICAgIG1hcmdpbi1sZWZ0OiAyMCUgIWltcG9ydGFudDtcXG4gICAgIHdpZHRoOiA2MCUgIWltcG9ydGFudDtcXG4gICAgIGZvbnQtc2l6ZTogMzVweCAhaW1wb3J0YW50O1xcbiAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59IFxcbi5maWVsZFNlYXJjaCBmaWVsZHNldFxcbntcXG4gICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxufSBcXG4jZnJlZS1zb2xvLTItZGVtbzpmb2N1c3tcXG4gICAgd2lkdGg6OTAwcHg7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWShcXFwiLTUwJVxcXCIpO1xcbiAgICB6LWluZGV4OiAxMDtcXG59XFxuLmZpZWxkU2VhcmNoOmZvY3VzIGJvZHl7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDIwMDBweCAwIDAgMCByZ2JhKDI1NSwyNTUsMjU1LDAuOCkgO1xcbiAgICB6LWluZGV4OjE7XFxufVxcbi5pY29ue1xcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gICAgc2l6ZTogMzVweDtcXG4gICAgdG9wOjMwcHg7XFxuICAgIGxlZnQ6MjgwO1xcbn1cIl19XSk7XG4vLyBFeHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJmaWVsZFNlYXJjaFwiOiBcInNlYXJjaGJhci1maWVsZFNlYXJjaC0zRkVGc1wiLFxuXHRcImZyZWUtc29sby0yLWRlbW9cIjogXCJzZWFyY2hiYXItZnJlZS1zb2xvLTItZGVtby0xV2l0dlwiLFxuXHRcImljb25cIjogXCJzZWFyY2hiYXItaWNvbi0zMDRqN1wiXG59OyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKHRydWUpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudGFicy10cmlhbmd1bGFyLTNxLS1ze1xcbiAgICAgcG9zaXRpb246YWJzb2x1dGU7XFxuICAgICAgcmlnaHQ6IDQ4LjYlO1xcbiAgICAgIGhlaWdodDogMDtcXG4gICAgICB3aWR0aDogMDtcXG4gICAgICB0b3A6MTEyJTtcXG4gICAgICB6LWluZGV4OiAzMDtcXG4gICAgICAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgICAgYm9yZGVyLXJpZ2h0OiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICAgIGJvcmRlci10b3A6IDEwcHggc29saWQgcmdiKDE2MSwgMjA3LCAyNTMpO1xcbn1cXG5cXG4udGFicy10YWItRW5DQnh7XFxuICAgIG1pbi13aWR0aDogMTEwcHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZm9udC1zaXplOlxcXCIxM3B4XFxcIjtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTYxLCAyMDcsIDI1Myk7XFxuICAgIG1hcmdpbi1yaWdodDogMSU7XFxufVxcblxcbi50YWJzLXRhYi1FbkNCeDpudGgtb2YtdHlwZSgyKTpob3ZlciB+IC50YWJzLXRyaWFuZ3VsYXItM3EtLXN7XFxuICAgIHJpZ2h0OiA3MCU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcInRhYnMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0tBQ0ssaUJBQWlCO01BQ2hCLFlBQVk7TUFDWixTQUFTO01BQ1QsUUFBUTtNQUNSLFFBQVE7TUFDUixXQUFXO09BQ1YsbUNBQW1DO01BQ3BDLG9DQUFvQztNQUNwQyx5Q0FBeUM7QUFDL0M7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLG1DQUFtQztJQUNuQyxnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxVQUFVO0FBQ2RcIixcImZpbGVcIjpcInRhYnMuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi50cmlhbmd1bGFye1xcbiAgICAgcG9zaXRpb246YWJzb2x1dGU7XFxuICAgICAgcmlnaHQ6IDQ4LjYlO1xcbiAgICAgIGhlaWdodDogMDtcXG4gICAgICB3aWR0aDogMDtcXG4gICAgICB0b3A6MTEyJTtcXG4gICAgICB6LWluZGV4OiAzMDtcXG4gICAgICAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgICAgYm9yZGVyLXJpZ2h0OiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICAgIGJvcmRlci10b3A6IDEwcHggc29saWQgcmdiKDE2MSwgMjA3LCAyNTMpO1xcbn1cXG5cXG4udGFie1xcbiAgICBtaW4td2lkdGg6IDExMHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTpcXFwiMTNweFxcXCI7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDE2MSwgMjA3LCAyNTMpO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDElO1xcbn1cXG4udGFiOm50aC1vZi10eXBlKDIpOmhvdmVyIH4gLnRyaWFuZ3VsYXJ7XFxuICAgIHJpZ2h0OiA3MCU7XFxufVwiXX1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInRyaWFuZ3VsYXJcIjogXCJ0YWJzLXRyaWFuZ3VsYXItM3EtLXNcIixcblx0XCJ0YWJcIjogXCJ0YWJzLXRhYi1FbkNCeFwiXG59OyIsIlxuICAgIHZhciByZWZzID0gMDtcbiAgICB2YXIgY3NzID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1ydWxlcy0yIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0zIS4vY2FyZC5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2luc2VydENzcy5qc1wiKTtcbiAgICB2YXIgY29udGVudCA9IHR5cGVvZiBjc3MgPT09ICdzdHJpbmcnID8gW1ttb2R1bGUuaWQsIGNzcywgJyddXSA6IGNzcztcblxuICAgIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGNzcy5sb2NhbHMgfHwge307XG4gICAgZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBleHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuICcnICsgY3NzOyB9O1xuICAgIGV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuXG4gICAgLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuICAgIC8vIGh0dHBzOi8vd2VicGFjay5naXRodWIuaW8vZG9jcy9ob3QtbW9kdWxlLXJlcGxhY2VtZW50XG4gICAgLy8gT25seSBhY3RpdmF0ZWQgaW4gYnJvd3NlciBjb250ZXh0XG4gICAgaWYgKG1vZHVsZS5ob3QgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50KSB7XG4gICAgICB2YXIgcmVtb3ZlQ3NzID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LXJ1bGVzLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTMhLi9jYXJkLmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY3NzID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1ydWxlcy0yIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0zIS4vY2FyZC5jc3NcIik7XG4gICAgICAgIGNvbnRlbnQgPSB0eXBlb2YgY3NzID09PSAnc3RyaW5nJyA/IFtbbW9kdWxlLmlkLCBjc3MsICcnXV0gOiBjc3M7XG4gICAgICAgIHJlbW92ZUNzcyA9IGluc2VydENzcyhjb250ZW50LCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gICAgICB9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgcmVtb3ZlQ3NzKCk7IH0pO1xuICAgIH1cbiAgIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvdXNlU3R5bGVzJ1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgQ2FyZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkJztcbmltcG9ydCBDYXJkQWN0aW9uQXJlYSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9uQXJlYSc7XG5pbXBvcnQgQ2FyZEFjdGlvbnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbnMnO1xuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50JztcbmltcG9ydCBDYXJkTWVkaWEgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZE1lZGlhJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IHMgZnJvbSAnLi9jYXJkLmNzcyc7XG5cbmNvbnN0IHVzZXN0eWxlcyA9IG1ha2VTdHlsZXMoe1xuICAgIHJvb3Q6IHtcbiAgICAgICAgbWF4V2lkdGg6IDM0NSxcbiAgICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEltZ01lZGlhQ2FyZCgpIHtcbiAgIHVzZVN0eWxlcyhzKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Q2FyZCBjbGFzc05hbWU9e3MuY2FyZGJhY2t9ID5cbiAgICAgICAgICAgIDxDYXJkQWN0aW9uQXJlYT5cbiAgICAgICAgICAgICAgICA8IGltZyBzcmM9XCJodHRwOi8vYWdyb2Jpb3NvbmxpbmUuY29tL2Jvb2tzX2NvdmVycGFnZXMvMDYyNjA5MDhfNjg1LmpwZ1wiXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cInBpY1wiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwiaDZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgRWxlbWVudGFyeSBCb3RvbnlcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb2xvcj1cInRleHRTZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgRWxlbWVudGFyeSBCb3RvbnlcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgTVJQOjM0NVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBBdXRob3JlZCBCeTpQZXJzb24xXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWxlYXNlZCBJbjogMjAyMFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgIDwvQ2FyZEFjdGlvbkFyZWE+XG4gICAgICAgIDwvQ2FyZD5cbiAgICApO1xufVxuXG5cblxuXG4iLCJcbiAgICB2YXIgcmVmcyA9IDA7XG4gICAgdmFyIGNzcyA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL2NhcmRHcmlkLmNzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvaW5zZXJ0Q3NzLmpzXCIpO1xuICAgIHZhciBjb250ZW50ID0gdHlwZW9mIGNzcyA9PT0gJ3N0cmluZycgPyBbW21vZHVsZS5pZCwgY3NzLCAnJ11dIDogY3NzO1xuXG4gICAgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gY3NzLmxvY2FscyB8fCB7fTtcbiAgICBleHBvcnRzLl9nZXRDb250ZW50ID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50OyB9O1xuICAgIGV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gJycgKyBjc3M7IH07XG4gICAgZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG5cbiAgICAvLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG4gICAgLy8gaHR0cHM6Ly93ZWJwYWNrLmdpdGh1Yi5pby9kb2NzL2hvdC1tb2R1bGUtcmVwbGFjZW1lbnRcbiAgICAvLyBPbmx5IGFjdGl2YXRlZCBpbiBicm93c2VyIGNvbnRleHRcbiAgICBpZiAobW9kdWxlLmhvdCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICAgIHZhciByZW1vdmVDc3MgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL2NhcmRHcmlkLmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY3NzID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1ydWxlcy0yIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0zIS4vY2FyZEdyaWQuY3NzXCIpO1xuICAgICAgICBjb250ZW50ID0gdHlwZW9mIGNzcyA9PT0gJ3N0cmluZycgPyBbW21vZHVsZS5pZCwgY3NzLCAnJ11dIDogY3NzO1xuICAgICAgICByZW1vdmVDc3MgPSBpbnNlcnRDc3MoY29udGVudCwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHJlbW92ZUNzcygpOyB9KTtcbiAgICB9XG4gICIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5pbXBvcnQgQm9vayBmcm9tIFwiLi9jYXJkXCJcbmltcG9ydCBCb3ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQm94JztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvdXNlU3R5bGVzJ1xuaW1wb3J0IHMgZnJvbSAnLi9jYXJkR3JpZC5jc3MnXG5cbmNvbnN0IHVzZXN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICAgIHJvb3Q6IHtcbiAgICAgICAgZmxleEdyb3c6IDAsXG4gICAgfSxcbiAgICBwYXBlcjoge1xuICAgICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDQpLFxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeSxcbiAgICB9LFxufSkpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2VudGVyZWRHcmlkKCkge1xuICAgIHVzZVN0eWxlcyhzKVxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VzdHlsZXMoKTtcbiAgICBjb25zdCBbaW5kZXgsIHNldEluZGV4XSA9IFJlYWN0LnVzZVN0YXRlKDUpO1xuICAgIGNvbnN0IFtpbmRleEYsIHNldEluZGV4Rl0gPSBSZWFjdC51c2VTdGF0ZSgtMSk7XG4gICAgbGV0IHNjcm9sbGVyID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICAgIGNvbnN0IGhhbmRsZUNoYW5nZU5leHQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgc2V0SW5kZXgoaW5kZXggKyAxKTtcbiAgICAgICAgc2V0SW5kZXhGKGluZGV4RiArIDEpO1xuICAgICAgICBjb25zb2xlLmxvZyhpbmRleCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGluZGV4Rik7XG4gICAgICAgIHNjcm9sbGVyLmNoaWxkTm9kZXNbaW5kZXhdLmNoaWxkTm9kZXNbMF0uc2Nyb2xsSW50b1ZpZXcoe1xuICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZUNoYW5nZVByZXYgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmKGluZGV4Rj49MCl7XG4gICAgICAgICAgICAgICAgc2Nyb2xsZXIuY2hpbGROb2Rlc1tpbmRleEZdLmNoaWxkTm9kZXNbMF0uc2Nyb2xsSW50b1ZpZXcoe1xuICAgICAgICAgICAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc2V0SW5kZXgoaW5kZXggLSAxKTtcbiAgICAgICAgICAgICAgICBzZXRJbmRleEYoaW5kZXhGIC0gMSk7XG4gICAgICAgICAgICB9XG5cbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnNjcm9sbGJhcn0gd2lkdGg9XCIxMDAlXCIgPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzLm1vdmVSaWdodH0gIG9uQ2xpY2s9e2hhbmRsZUNoYW5nZU5leHR9PlxuICAgICAgICAgICAgICAgIHtcIj5cIn1cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17cy5tb3ZlTGVmdH0gb25DbGljaz17aGFuZGxlQ2hhbmdlUHJldn0+XG4gICAgICAgICAgICAgICAge1wiPFwifVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuXG5cbiAgICAgICAgICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBmbGV4RGlyZWN0aW9uPVwicm93XCIgbT17MX0gY2xhc3NOYW1lPXtzLm5vU2Nyb2xsfSByZWY9eyhlbCkgPT4geyBzY3JvbGxlciA9IGVsOyB9fSA+XG4gICAgICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0gIGVsZXZhdGlvbj17MH0+IDxCb29rLz4gPC9QYXBlcj5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfSBlbGV2YXRpb249ezB9PiA8Qm9vayAvPiA8L1BhcGVyPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9IGVsZXZhdGlvbj17MH0+IDxCb29rIC8+IDwvUGFwZXI+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0gZWxldmF0aW9uPXswfT4gPEJvb2sgLz4gPC9QYXBlcj5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfSBlbGV2YXRpb249ezB9PiA8Qm9vayAvPiA8L1BhcGVyPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9IGVsZXZhdGlvbj17MH0gPiA8Qm9vayAvPiA8L1BhcGVyPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9IGVsZXZhdGlvbj17MH0+IDxCb29rIC8+IDwvUGFwZXI+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0gZWxldmF0aW9uPXswfT4gPEJvb2sgLz4gPC9QYXBlcj5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfSBlbGV2YXRpb249ezB9PiA8Qm9vayAvPiA8L1BhcGVyPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9IGVsZXZhdGlvbj17MH0+IDxCb29rIC8+IDwvUGFwZXI+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0gZWxldmF0aW9uPXswfT4gPEJvb2sgLz4gPC9QYXBlcj5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfSBlbGV2YXRpb249ezB9PiA8Qm9vayAvPiA8L1BhcGVyPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9IGVsZXZhdGlvbj17MH0+IDxCb29rIC8+IDwvUGFwZXI+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZVN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci91c2VTdHlsZXMnXG5pbXBvcnQgcyBmcm9tICcuL2Nhcm91c2VsLnNjc3MnXG5pbXBvcnQgeyBUd2Vlbk1heCwgVGltZWxpbmVMaXRlLCBQb3dlcjMsIFBvd2VyMiwgU2xvd01vfSBmcm9tICdnU2FwJztcbmltcG9ydCBpbWcgZnJvbScuL3dhdmUtc21hbGwucG5nJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2ltcGxlU2xpZGUoKSB7XG4gICAgbGV0IGFwcD0gUmVhY3QudXNlUmVmKG51bGwpO1xuICAgIGxldCBpbWFnZXM9UmVhY3QudXNlUmVmKG51bGwpO1xuICAgIGxldCBjb250ZW50ID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICAgIGxldCBvdmVybGF5PVJlYWN0LnVzZVJlZihudWxsKVxuICAgIGxldCB0bD0gbmV3IFRpbWVsaW5lTGl0ZSh7ZGVsYXk6Ljh9KTtcbiAgICBSZWFjdC51c2VFZmZlY3QoKCk9PntcbiAgICAgICAgY29uc3QgZkltYWdlPWltYWdlcy5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgY29uc3Qgc0ltYWdlID0gaW1hZ2VzLmNoaWxkTm9kZXNbMV07XG4gICAgICAgIGNvbnN0IHRJbWFnZSA9IGltYWdlcy5jaGlsZE5vZGVzWzJdXG5cbiAgICAgICAgY29uc3QgaGVhZGxpbmUxPSBjb250ZW50LmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1swXTtcbiAgICAgICAgY29uc3QgaGVhZGxpbmUyID0gY29udGVudC5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMV07XG4gICAgICAgIGNvbnN0IGhlYWRsaW5lMyA9IGNvbnRlbnQuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzJdO1xuXG4gICAgICAgIFR3ZWVuTWF4LnRvKGFwcCwwLHtjc3M6e3Zpc2liaWxpdHk6XCJ2aXNpYmxlXCJ9fSlcbiAgICAgICAgdGwuZnJvbVRvKG92ZXJsYXksIDEuMiwgeyB4OiAwIH0sIHsgeDogMTU2MCwgZWFzZTogUG93ZXIyLmVhc2VPdXQgfSwnU3RhcnQnKVxuICAgICAgICAgICAgLmZyb20oZkltYWdlLCAxLjIsIHsgeTogMTI4MCwgZWFzZTogUG93ZXIzLmVhc2VPdXQgfSwgMSlcbiAgICAgICAgICAuZnJvbShmSW1hZ2UuZmlyc3RFbGVtZW50Q2hpbGQsMix7c2NhbGU6MS42LGVhc2U6UG93ZXIzLmVhc2VPdXR9LDEuMilcbiAgICAgICAgICAgIC5mcm9tKHNJbWFnZSwgMS4yLCB7IHk6IDEyODAsIGVhc2U6IFBvd2VyMy5lYXNlT3V0IH0sMS4yKVxuICAgICAgICAgICAgLmZyb20oc0ltYWdlLmZpcnN0RWxlbWVudENoaWxkLCAyLCB7IHNjYWxlOiAxLjYsIGVhc2U6IFBvd2VyMy5lYXNlT3V0IH0sIDEuMilcbiAgICAgICAgICAgIC5mcm9tKHRJbWFnZSwgMS4yLCB7IHk6IDEyODAsIGVhc2U6IFBvd2VyMy5lYXNlT3V0IH0sIDEuNClcbiAgICAgICAgICAgIC5mcm9tKHRJbWFnZS5maXJzdEVsZW1lbnRDaGlsZCwgMiwgeyBzY2FsZTogMS42LCBlYXNlOiBQb3dlcjMuZWFzZU91dCB9LCAxLjQpXG5cbiAgICAgICAgICAgIHRsLnN0YWdnZXJGcm9tKFtoZWFkbGluZTEuY2hpbGRyZW4saGVhZGxpbmUyLmNoaWxkcmVuLGhlYWRsaW5lMy5jaGlsZHJlbl0sMSx7XG4gICAgICAgICAgICAgICAgeTo0MCxcbiAgICAgICAgICAgICAgICBlYXNlOiBQb3dlcjMuZWFzZU91dCxcbiAgICAgICAgICAgIH0sMC4xNSwnU3RhcnQnKVxuICAgIH0pXG4gICAgdXNlU3R5bGVzKHMpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuaGVyb30gcmVmPXsoZWwpPT57YXBwPWVsO319PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Mub3ZlcmxheX0gcmVmPXsoZWwpID0+IHsgb3ZlcmxheSA9IGVsOyB9fT48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuaGVyb0lubmVyfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuaGVyb0NvbnRlbnR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuaGVyb0NvbnRlbnRJbm5lcn0gcmVmPXsoZWwpID0+IHsgY29udGVudCA9IGVsOyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmhlcm9Db250ZW50TGluZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5oZXJvQ29udGVudExpbmVJbm5lcn0+QnJ1c2ggVXAgWW91ciBLbm93bGVkZ2U8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmhlcm9Db250ZW50TGluZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5oZXJvQ29udGVudExpbmVJbm5lcn0+U2FsZXMgdXB0byA3MCU8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmhlcm9Db250ZW50TGluZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5oZXJvQ29udGVudExpbmVJbm5lcn0+QWdyaWN1bHR1cmUvSG9tZSBTY2llbmNlL0Vjb25vbWljczwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmhlcm9JbWFnZXN9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuaGVyb0ltYWdlc0lubmVyfSByZWY9eyhlbCkgPT4geyBpbWFnZXMgPSBlbDsgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5maXJzdEltYWdlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHA6Ly9hZ3JvYmlvc29ubGluZS5jb20vYm9va3NfY292ZXJwYWdlcy8wNjI2MDkwOF82ODUuanBnXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5zZWNvbmRJbWFnZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwOi8vYWdyb2Jpb3NvbmxpbmUuY29tL2Jvb2tzX2NvdmVycGFnZXMvMDYyNjA5MDhfNjg1LmpwZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy50aGlyZEltYWdlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHA6Ly9hZ3JvYmlvc29ubGluZS5jb20vYm9va3NfY292ZXJwYWdlcy8wNjI2MDkwOF82ODUuanBnXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIiwiXG4gICAgdmFyIHJlZnMgPSAwO1xuICAgIHZhciBjc3MgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LXJ1bGVzLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTMhLi9jYXJvdXNlbC5zY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9pbnNlcnRDc3MuanNcIik7XG4gICAgdmFyIGNvbnRlbnQgPSB0eXBlb2YgY3NzID09PSAnc3RyaW5nJyA/IFtbbW9kdWxlLmlkLCBjc3MsICcnXV0gOiBjc3M7XG5cbiAgICBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBjc3MubG9jYWxzIHx8IHt9O1xuICAgIGV4cG9ydHMuX2dldENvbnRlbnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQ7IH07XG4gICAgZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiAnJyArIGNzczsgfTtcbiAgICBleHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcblxuICAgIC8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbiAgICAvLyBodHRwczovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvaG90LW1vZHVsZS1yZXBsYWNlbWVudFxuICAgIC8vIE9ubHkgYWN0aXZhdGVkIGluIGJyb3dzZXIgY29udGV4dFxuICAgIGlmIChtb2R1bGUuaG90ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgdmFyIHJlbW92ZUNzcyA9IGZ1bmN0aW9uKCkge307XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1ydWxlcy0yIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0zIS4vY2Fyb3VzZWwuc2Nzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY3NzID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1ydWxlcy0yIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0zIS4vY2Fyb3VzZWwuc2Nzc1wiKTtcbiAgICAgICAgY29udGVudCA9IHR5cGVvZiBjc3MgPT09ICdzdHJpbmcnID8gW1ttb2R1bGUuaWQsIGNzcywgJyddXSA6IGNzcztcbiAgICAgICAgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKGNvbnRlbnQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyByZW1vdmVDc3MoKTsgfSk7XG4gICAgfVxuICAiLCJcbiAgICB2YXIgcmVmcyA9IDA7XG4gICAgdmFyIGNzcyA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL2dyaWQuY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9pbnNlcnRDc3MuanNcIik7XG4gICAgdmFyIGNvbnRlbnQgPSB0eXBlb2YgY3NzID09PSAnc3RyaW5nJyA/IFtbbW9kdWxlLmlkLCBjc3MsICcnXV0gOiBjc3M7XG5cbiAgICBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBjc3MubG9jYWxzIHx8IHt9O1xuICAgIGV4cG9ydHMuX2dldENvbnRlbnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQ7IH07XG4gICAgZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiAnJyArIGNzczsgfTtcbiAgICBleHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcblxuICAgIC8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbiAgICAvLyBodHRwczovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvaG90LW1vZHVsZS1yZXBsYWNlbWVudFxuICAgIC8vIE9ubHkgYWN0aXZhdGVkIGluIGJyb3dzZXIgY29udGV4dFxuICAgIGlmIChtb2R1bGUuaG90ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgdmFyIHJlbW92ZUNzcyA9IGZ1bmN0aW9uKCkge307XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1ydWxlcy0yIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0zIS4vZ3JpZC5jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNzcyA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL2dyaWQuY3NzXCIpO1xuICAgICAgICBjb250ZW50ID0gdHlwZW9mIGNzcyA9PT0gJ3N0cmluZycgPyBbW21vZHVsZS5pZCwgY3NzLCAnJ11dIDogY3NzO1xuICAgICAgICByZW1vdmVDc3MgPSBpbnNlcnRDc3MoY29udGVudCwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHJlbW92ZUNzcygpOyB9KTtcbiAgICB9XG4gICIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCBMaXN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3QnO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtJztcbmltcG9ydCBzIGZyb20gJy4vZ3JpZC5jc3MnIFxuaW1wb3J0IHVzZVN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci91c2VTdHlsZXMnXG5cblxuY29uc3QgdXNlc3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gICAgcm9vdDoge1xuICAgICAgICBmbGV4R3JvdzogMSxcbiAgICB9LFxuICAgIHBhcGVyOiB7XG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5LFxuICAgIH0sXG4gICAgXG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENlbnRlcmVkR3JpZCgpIHtcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlc3R5bGVzKCk7XG4gICAgdXNlU3R5bGVzKHMpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9ID5cbiAgICAgICAgICAgIDxHcmlkIHNtIGNvbnRhaW5lciBzcGFjaW5nPXs1LDB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYXBlciBlbGV2YXRpb249ezB9IGNsYXNzTmFtZT17cy5zdWJMaXN0VGl0bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkFncmljdWx0dXJhbCBTY2llbmNlczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0IGRlbnNlPVwidHJ1ZVwiIHN0eWxlPXt7IGZvbnRTaXplOiBcIjE0cHhcIiwgcGFkZGluZzogXCIwcHhcIn19IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gIHN0eWxlPXt7cGFkZGluZ1JpZ2h0OlwiMHB4XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA1dGggRGVhbnMgQ29tbWl0dGVlXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIHN0eWxlPXt7cGFkZGluZ1JpZ2h0OlwiMHB4XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDV0aCBEZWFucyBDb21taXR0ZWUgKEFzIFBlcilcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gc3R5bGU9e3twYWRkaW5nUmlnaHQ6XCIwcHhcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgIEFncmlidXNpbmVzc1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBzdHlsZT17e3BhZGRpbmdSaWdodDpcIjBweFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQWdyaWN1bHR1cmFsIENoZW1pc3RyeVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBzdHlsZT17e3BhZGRpbmdSaWdodDpcIjBweFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQWdyaWN1bHR1cmFsIFdhc3RlIEFuZCBNYW5hZ2VtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIHN0eWxlPXt7cGFkZGluZ1JpZ2h0OlwiMHB4XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZ3JvY2hlbWljYWxzXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIHN0eWxlPXt7cGFkZGluZ1JpZ2h0OlwiMHB4XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZ3JvZm9yZXN0cnlcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gc3R5bGU9e3twYWRkaW5nUmlnaHQ6XCIwcHhcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgIEFncm9tZXRlb3JvbG9neSwgUmVtb3RlIFNlbnNpbmcgJiBHaXNcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gc3R5bGU9e3twYWRkaW5nUmlnaHQ6XCIwcHhcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFncm9ub215XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIHN0eWxlPXt7cGFkZGluZ1JpZ2h0OlwiMHB4XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCaW9jaGVtaXN0cnlcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtzLnN1Ykxpc3RUaXRsZX0gZWxldmF0aW9uPXswfT48c3Bhbj5FbnZpcm9ubWVudGFsIFNjaWVuY2VzIDwvc3Bhbj48L1BhcGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QgZGVuc2U9XCJ0cnVlXCIgc3R5bGU9e3sgZm9udFNpemU6IFwiMTRweFwiLCBwYWRkaW5nOiBcIjBweFwiIH19IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIHN0eWxlPXt7IHBhZGRpbmdSaWdodDogXCIwcHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBaXIgRW52aXJvbm1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBzdHlsZT17eyBwYWRkaW5nUmlnaHQ6IFwiMHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGlzYXN0ZXIgTWFuYWdlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIHN0eWxlPXt7cGFkZGluZ1JpZ2h0OlwiMHB4XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbnZpcm9ubWVudCBFZHVjYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBzdHlsZT17e3BhZGRpbmdSaWdodDpcIjBweFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRW52aXJvbm1lbnRhbCBBbmFseXNpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIHN0eWxlPXt7cGFkZGluZ1JpZ2h0OlwiMHB4XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbnZpcm9ubWVudGFsIEJpb3RlY2hub2xvZ3lcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBzdHlsZT17e3BhZGRpbmdSaWdodDpcIjBweFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR2xvYmFsIFdhcm1pbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBzdHlsZT17e3BhZGRpbmdSaWdodDpcIjBweFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWljcm9iaW9sb2d5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gc3R5bGU9e3twYWRkaW5nUmlnaHQ6XCIwcHhcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5hdHVyYWwgUmVzb3VyY2VzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30+XG4gICAgICAgICAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e3Muc3ViTGlzdFRpdGxlfSBlbGV2YXRpb249ezB9PjxzcGFuPkxpZmUgU2NpZW5jZTwvc3Bhbj48L1BhcGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QgZGVuc2U9XCJ0cnVlXCIgc3R5bGU9e3sgZm9udFNpemU6IFwiMTRweFwiLCBwYWRkaW5nOiBcIjBweFwiIH19IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gc3R5bGU9e3twYWRkaW5nUmlnaHQ6XCIwcHhcIn19PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJpb2NoZW1pc3RyeVwiXG4gICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gc3R5bGU9e3twYWRkaW5nUmlnaHQ6XCIwcHhcIn19PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJpb3RlY2hub2xvZ3lcIlxuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBzdHlsZT17e3BhZGRpbmdSaWdodDpcIjBweFwifX0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQm90YW55XCJcbiAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIHN0eWxlPXt7cGFkZGluZ1JpZ2h0OlwiMHB4XCJ9fT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZXZlbG9wbWVudGFsIEJpb2xvZ1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIHN0eWxlPXt7cGFkZGluZ1JpZ2h0OlwiMHB4XCJ9fT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFY29ub21pYyBCb3RhbnlcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIHN0eWxlPXt7cGFkZGluZ1JpZ2h0OlwiMHB4XCJ9fT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFdGhub2JvdGFueVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gc3R5bGU9e3twYWRkaW5nUmlnaHQ6XCIwcHhcIn19PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdlbmV0aWNzXG4gICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gc3R5bGU9e3twYWRkaW5nUmlnaHQ6XCIwcHhcIn19PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhvbWUgU2NpZW5jZVxuICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIHN0eWxlPXt7cGFkZGluZ1JpZ2h0OlwiMHB4XCJ9fT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIdW1hbiBIZWFsdGhcbiAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBzdHlsZT17e3BhZGRpbmdSaWdodDpcIjBweFwifX0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWVkaWNpbmFsICYgQXJvbWF0aWNQbGFudHNcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e3Muc3ViTGlzdFRpdGxlfSBlbGV2YXRpb249ezB9PjxzcGFuPlZldGVyaW5hcnkgYW5kIEFuaW1hbCBTY2llbmNlPC9zcGFuPjwvUGFwZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdCBkZW5zZT1cInRydWVcIiBzdHlsZT17eyBmb250U2l6ZTogXCIxNHB4XCIsIHBhZGRpbmc6IFwiMHB4XCIgfX0gY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBzdHlsZT17e3BhZGRpbmdSaWdodDpcIjBweFwifX0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQW5pbWFsIEJlaGF2aW91clxuICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBzdHlsZT17e3BhZGRpbmdSaWdodDpcIjBweFwifX0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQW5pbWFsIEJpb3RlY2hub2xvZ3lcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBzdHlsZT17e3BhZGRpbmdSaWdodDpcIjBweFwifX0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQW5pbWFsIEJyZWVkaW5nXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBzdHlsZT17e3BhZGRpbmdSaWdodDpcIjBweFwifX0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQW5pbWFsIERpc2Vhc2VzXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBzdHlsZT17e3BhZGRpbmdSaWdodDpcIjBweFwifX0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQW5pbWFsIEVjb2xvZ3lcbiAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIHN0eWxlPXt7cGFkZGluZ1JpZ2h0OlwiMHB4XCJ9fT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBbmltYWwgSHVzYmFuZHJ5XG4gICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gc3R5bGU9e3twYWRkaW5nUmlnaHQ6XCIwcHhcIn19PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFuaW1hbCBOdXRyaXRpb25cbiAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBzdHlsZT17e3BhZGRpbmdSaWdodDpcIjBweFwifX0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQW5pbWFsIFByb2R1Y3RzXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBzdHlsZT17e3BhZGRpbmdSaWdodDpcIjBweFwifX0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmVla2VlcGluZ1xuICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gc3R5bGU9e3twYWRkaW5nUmlnaHQ6XCIwcHhcIn19PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERhaXJ5IFNjaWVuY2VcbiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgey8qIDxHcmlkIGl0ZW0geHM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFwZXIgc3R5bGU9e3sgbWFyZ2luOiBcIjBweFwiLCBwYWRkaW5nQm90dG9tOiBcIjBweFwiLCBwYWRkaW5nTGVmdDpcIjhweFwiIH19IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0gZWxldmF0aW9uPXswfT5IaW5kaSBCb29rczwvUGFwZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdCBzdHlsZT17eyBmb250U2l6ZTogXCIxNHB4XCIsIHBhZGRpbmc6IFwiMHB4XCIgfX0gZGVuc2U9XCJ0cnVlXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBzdHlsZT17e3BhZGRpbmdSaWdodDpcIjBweFwifX0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWdyaWN1bHR1cmFsIFNjaWVuY2VcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBzdHlsZT17e3BhZGRpbmdSaWdodDpcIjBweFwifX0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGlmZSBTY2llbmNlc1xuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBzdHlsZT17e3BhZGRpbmdSaWdodDpcIjBweFwifX0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmV0ZXJpbmFyeSBBbmQgQW5pbWFsIFNjaWVuY2VcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbSA+XG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz5cbiAgICAgICAgICAgICAgICAgICAgPFBhcGVyIHN0eWxlPXt7IG1hcmdpbjogXCIwcHhcIiwgcGFkZGluZ0JvdHRvbTogXCIwcHhcIiB9fSBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9IGVsZXZhdGlvbj17MH0+VGV4dGJvb2s8L1BhcGVyPlxuICAgICAgICAgICAgICAgICAgICA8TGlzdCBkZW5zZT1cInRydWVcIiBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIHN0eWxlPXt7cGFkZGluZ1JpZ2h0OlwiMHB4XCJ9fT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZ3JpY3VsdHVyYWwgU2NpZW5jZVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIHN0eWxlPXt7cGFkZGluZ1JpZ2h0OlwiMHB4XCJ9fT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbnZpcm9ubWVudGFsIFNjaWVuY2VzXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gc3R5bGU9e3twYWRkaW5nUmlnaHQ6XCIwcHhcIn19PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhpbmRpIFRleHRib29rc1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gc3R5bGU9e3twYWRkaW5nUmlnaHQ6XCIwcHhcIn19PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExpZmUgU2NpZW5jZXNcbiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gc3R5bGU9e3twYWRkaW5nUmlnaHQ6XCIwcHhcIn19PiBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQaGFybWFjeVxuICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIHN0eWxlPXt7cGFkZGluZ1JpZ2h0OlwiMHB4XCJ9fT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWZXRlcmluYXJ5IEFuZCBBbmltYWwgU2NpZW5jZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICAgICAgICAgIDwvR3JpZD4gKi99XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IExpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdCc7XG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW0nO1xuaW1wb3J0IExpc3RJdGVtQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtQXZhdGFyJztcbmltcG9ydCBMaXN0SXRlbUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1JY29uJztcbmltcG9ydCBMaXN0SXRlbVNlY29uZGFyeUFjdGlvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVNlY29uZGFyeUFjdGlvbic7XG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dCc7XG5pbXBvcnQgQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0F2YXRhcic7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcbmltcG9ydCBGb3JtR3JvdXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUdyb3VwJztcbmltcG9ydCBGb3JtQ29udHJvbExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sTGFiZWwnO1xuaW1wb3J0IENoZWNrYm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NoZWNrYm94JztcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgRm9sZGVySWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRm9sZGVyJztcblxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgICByb290OiB7XG4gICAgICAgIGZsZXhHcm93OiAxLFxuXG4gICAgfSxcbiAgICBkZW1vOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZjRmM2YzXCIsXG4gICAgfSxcbiAgICB0aXRsZToge1xuICAgICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoNCwgMCwgMiksXG4gICAgfSxcbn0pKTtcblxuZnVuY3Rpb24gZ2VuZXJhdGUoZWxlbWVudCkge1xuICAgIHJldHVybiBbMCwgMSwgMl0ubWFwKCh2YWx1ZSkgPT5cbiAgICAgICAgUmVhY3QuY2xvbmVFbGVtZW50KGVsZW1lbnQsIHtcbiAgICAgICAgICAgIGtleTogdmFsdWUsXG4gICAgICAgIH0pLFxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEludGVyYWN0aXZlTGlzdCgpIHtcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2Y0ZjNmM1wiIH19PlxuICAgICAgICAgICBcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cbiAgICAgICAgICAgICAgICA8R3JpZCBtZD17MX0+XG5cbiAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgPEdyaWQgbWQ9ezEwfT5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17M30+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICBJbmZvcm1hdGlvblxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGVtb30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9sZGVySWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeT1cIkNvdGFjdCBVc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb2xkZXJJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5PVwiQWJvdXQgVXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9sZGVySWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeT1cIkludml0YXRpb24gdG8gQXV0aG9yc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb2xkZXJJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5PVwiQ29weXJpZ2h0IGFuZCBUcmFkZW1hcmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbGRlckljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnk9XCJXcml0aW5nIEEgQm9va1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9sZGVySWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeT1cIlB1Ymxpc2hpbmcgUHJvY2Vzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9sZGVySWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeT1cIlByaXZhY3kgUG9saWN5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb2xkZXJJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5PVwiUHJpY2luZyBJbmZvcm1hdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9sZGVySWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeT1cIkFjY3VyYWN5IE9mIENvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvR3JpZD5cblxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17NH0+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICBDVVNUT01FUiBTRVJWSUNFXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kZW1vfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb2xkZXJJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5PVwiRGVsaXZlcnkgSW5mb3JtYXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbGRlckljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnk9XCJTaGlwcGluZyBSYXRlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9sZGVySWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeT1cIkNhbmNlbGxhdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9sZGVySWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeT1cIlJldHVybnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbGRlckljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnk9XCJEaXNjbGFpbWVyIG9mIFdhcnJhbnR5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb2xkZXJJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5PVwiTGltaXRhdGlvbiBvZiBMaWFiaWxpdHlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezR9PlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgQWJvdXQgQWdyb2Jpb3MgT25saW5lXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuVGhyb3VnaG91dCB0aGUgd29ybGQsIHdlIHByb3ZpZGUgc2NpZW50aWZpYyBhbmQgcHJvZmVzc2lvbmFsIGNvbW11bml0aWVzIHdpdGggc3VwZXJpb3Igc3BlY2lhbGlzdCBpbmZvcm1hdGlvbiDigJMgcHJvZHVjZWQgYnkgYXV0aG9ycyBhbmQgY29sbGVhZ3VlcyBhY3Jvc3MgdGhlIHdvcmxkLlxuXG5XZSBhcmUgY29tbWl0dGVkIHRvIHF1YWxpdHkgcHJvZHVjdGlvbiwgdGhvdWdodCBwcm92b2tpbmcgY29udGVudHMgYW5kIGhpZ2hlc3Qgc3RhbmRhcmQgb2YgZXRoaWNhbCBiZWhhdmlvciwgYmVzaWRlcyBjb3VydGVvdXMgYW5kIGhpZ2hseSBwZXJzb25hbGl6ZWQgc2VydmljZXMuXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgRGlzY2xhaW1lclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgbWQ9ezF9PlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn0iLCJcbiAgICB2YXIgcmVmcyA9IDA7XG4gICAgdmFyIGNzcyA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL25hdkJhci5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2luc2VydENzcy5qc1wiKTtcbiAgICB2YXIgY29udGVudCA9IHR5cGVvZiBjc3MgPT09ICdzdHJpbmcnID8gW1ttb2R1bGUuaWQsIGNzcywgJyddXSA6IGNzcztcblxuICAgIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGNzcy5sb2NhbHMgfHwge307XG4gICAgZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBleHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuICcnICsgY3NzOyB9O1xuICAgIGV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuXG4gICAgLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuICAgIC8vIGh0dHBzOi8vd2VicGFjay5naXRodWIuaW8vZG9jcy9ob3QtbW9kdWxlLXJlcGxhY2VtZW50XG4gICAgLy8gT25seSBhY3RpdmF0ZWQgaW4gYnJvd3NlciBjb250ZXh0XG4gICAgaWYgKG1vZHVsZS5ob3QgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50KSB7XG4gICAgICB2YXIgcmVtb3ZlQ3NzID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LXJ1bGVzLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTMhLi9uYXZCYXIuY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjc3MgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LXJ1bGVzLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTMhLi9uYXZCYXIuY3NzXCIpO1xuICAgICAgICBjb250ZW50ID0gdHlwZW9mIGNzcyA9PT0gJ3N0cmluZycgPyBbW21vZHVsZS5pZCwgY3NzLCAnJ11dIDogY3NzO1xuICAgICAgICByZW1vdmVDc3MgPSBpbnNlcnRDc3MoY29udGVudCwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHJlbW92ZUNzcygpOyB9KTtcbiAgICB9XG4gICIsIlxuICAgIHZhciByZWZzID0gMDtcbiAgICB2YXIgY3NzID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1ydWxlcy0yIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0zIS4vcG9wb3Zlci5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2luc2VydENzcy5qc1wiKTtcbiAgICB2YXIgY29udGVudCA9IHR5cGVvZiBjc3MgPT09ICdzdHJpbmcnID8gW1ttb2R1bGUuaWQsIGNzcywgJyddXSA6IGNzcztcblxuICAgIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGNzcy5sb2NhbHMgfHwge307XG4gICAgZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBleHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuICcnICsgY3NzOyB9O1xuICAgIGV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuXG4gICAgLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuICAgIC8vIGh0dHBzOi8vd2VicGFjay5naXRodWIuaW8vZG9jcy9ob3QtbW9kdWxlLXJlcGxhY2VtZW50XG4gICAgLy8gT25seSBhY3RpdmF0ZWQgaW4gYnJvd3NlciBjb250ZXh0XG4gICAgaWYgKG1vZHVsZS5ob3QgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50KSB7XG4gICAgICB2YXIgcmVtb3ZlQ3NzID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LXJ1bGVzLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTMhLi9wb3BvdmVyLmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY3NzID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1ydWxlcy0yIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0zIS4vcG9wb3Zlci5jc3NcIik7XG4gICAgICAgIGNvbnRlbnQgPSB0eXBlb2YgY3NzID09PSAnc3RyaW5nJyA/IFtbbW9kdWxlLmlkLCBjc3MsICcnXV0gOiBjc3M7XG4gICAgICAgIHJlbW92ZUNzcyA9IGluc2VydENzcyhjb250ZW50LCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gICAgICB9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgcmVtb3ZlQ3NzKCk7IH0pO1xuICAgIH1cbiAgIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IFBvcG92ZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUG9wb3Zlcic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBDZW50ZXJlZEdyaWQgZnJvbSAnLi9ncmlkJ1xuaW1wb3J0IHMgZnJvbSAnLi9wb3BvdmVyLmNzcydcbmltcG9ydCBFeHBhbmRNb3JlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTW9yZSc7XG5pbXBvcnQgRXhwYW5kTGVzc0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZExlc3MnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgICB0eXBvZ3JhcGh5OiB7XG4gICAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgfSxcbiAgICBtZW51T3B0bjoge1xuICAgICAgICBib3JkZXI6IDAsXG4gICAgICAgIGJhY2tncm91bmQ6J3RyYW5zcGFyZW50JyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAzLFxuICAgICAgICBjb2xvcjogJ2JsYWNrJyxcbiAgICAgICAgaGVpZ2h0OiA0MCxcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMCAycHgnLFxuICAgICAgICBtYXJnaW5SaWdodDogJzJweCcsXG4gICAgICAgIG1hcmdpbkxlZnQ6JzIwcHgnLFxuICAgICAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxuICAgICAgICBmb250V2VpZ2h0OiAnNDAwJ1xuICAgIH0sXG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpbXBsZVBvcG92ZXIoKSB7XG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICAgIGNvbnN0IHN0PXVzZVN0eWxlcyhzKTtcbiAgICBjb25zdCBbYW5jaG9yRWwsIHNldEFuY2hvckVsXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgc2V0QW5jaG9yRWwoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xuICAgICAgICBzZXRBbmNob3JFbChudWxsKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb3BlbiA9IEJvb2xlYW4oYW5jaG9yRWwpO1xuICAgIGNvbnN0IGlkID0gb3BlbiA/ICdzaW1wbGUtcG9wb3ZlcicgOiB1bmRlZmluZWQ7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEJ1dHRvbiBhcmlhLWRlc2NyaWJlZGJ5PXtpZH0gY2xhc3NOYW1lPXtjbGFzc2VzLm1lbnVPcHRufSB2YXJpYW50PVwiY29udGFpbmVkXCIgb25DbGljaz17aGFuZGxlQ2xpY2t9IGVsZXZhdGlvbj17MH0+XG4gICAgICAgICAgICAgICAgQm9vayBDYXRhbG9ndWUgeyFvcGVuICYmIDxFeHBhbmRNb3JlSWNvbi8+fXtvcGVuICYmIDxFeHBhbmRMZXNzSWNvbiAvPiB9IFxuICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8UG9wb3ZlclxuICAgICAgICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICAgICAgICBvcGVuPXtvcGVufVxuICAgICAgICAgICAgICAgIGFuY2hvckVsPXthbmNob3JFbH1cbiAgICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cbiAgICAgICAgICAgICAgICBhbmNob3JSZWZlcmVuY2U9XCJhbmNob3JQb3NpdGlvblwiXG4gICAgICAgICAgICAgICAgYW5jaG9yUG9zaXRpb249e3sgdG9wOiA2NSwgbGVmdDogMTUwfX1cbiAgICAgICAgICAgICAgICBhbmNob3JPcmlnaW49e3tcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWw6ICdib3R0b20nLFxuICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsOiAnMCcsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW49e3tcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWw6ICd0b3AnLFxuICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsOiAnbGVmdCcsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBlbGV2YXRpb249ezF9XG4gICAgICAgICAgICAgICAgYm94U2hhZG93PSdub25lJ1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxDZW50ZXJlZEdyaWQgLz5cbiAgICAgICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuXG5cblxuXG5cbiIsIlxuICAgIHZhciByZWZzID0gMDtcbiAgICB2YXIgY3NzID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1ydWxlcy0yIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0zIS4vc2VhcmNoYmFyLmNzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvaW5zZXJ0Q3NzLmpzXCIpO1xuICAgIHZhciBjb250ZW50ID0gdHlwZW9mIGNzcyA9PT0gJ3N0cmluZycgPyBbW21vZHVsZS5pZCwgY3NzLCAnJ11dIDogY3NzO1xuXG4gICAgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gY3NzLmxvY2FscyB8fCB7fTtcbiAgICBleHBvcnRzLl9nZXRDb250ZW50ID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50OyB9O1xuICAgIGV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gJycgKyBjc3M7IH07XG4gICAgZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG5cbiAgICAvLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG4gICAgLy8gaHR0cHM6Ly93ZWJwYWNrLmdpdGh1Yi5pby9kb2NzL2hvdC1tb2R1bGUtcmVwbGFjZW1lbnRcbiAgICAvLyBPbmx5IGFjdGl2YXRlZCBpbiBicm93c2VyIGNvbnRleHRcbiAgICBpZiAobW9kdWxlLmhvdCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICAgIHZhciByZW1vdmVDc3MgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL3NlYXJjaGJhci5jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNzcyA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL3NlYXJjaGJhci5jc3NcIik7XG4gICAgICAgIGNvbnRlbnQgPSB0eXBlb2YgY3NzID09PSAnc3RyaW5nJyA/IFtbbW9kdWxlLmlkLCBjc3MsICcnXV0gOiBjc3M7XG4gICAgICAgIHJlbW92ZUNzcyA9IGluc2VydENzcyhjb250ZW50LCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gICAgICB9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgcmVtb3ZlQ3NzKCk7IH0pO1xuICAgIH1cbiAgIiwiXG4gICAgdmFyIHJlZnMgPSAwO1xuICAgIHZhciBjc3MgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LXJ1bGVzLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTMhLi90YWJzLmNzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvaW5zZXJ0Q3NzLmpzXCIpO1xuICAgIHZhciBjb250ZW50ID0gdHlwZW9mIGNzcyA9PT0gJ3N0cmluZycgPyBbW21vZHVsZS5pZCwgY3NzLCAnJ11dIDogY3NzO1xuXG4gICAgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gY3NzLmxvY2FscyB8fCB7fTtcbiAgICBleHBvcnRzLl9nZXRDb250ZW50ID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50OyB9O1xuICAgIGV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gJycgKyBjc3M7IH07XG4gICAgZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG5cbiAgICAvLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG4gICAgLy8gaHR0cHM6Ly93ZWJwYWNrLmdpdGh1Yi5pby9kb2NzL2hvdC1tb2R1bGUtcmVwbGFjZW1lbnRcbiAgICAvLyBPbmx5IGFjdGl2YXRlZCBpbiBicm93c2VyIGNvbnRleHRcbiAgICBpZiAobW9kdWxlLmhvdCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICAgIHZhciByZW1vdmVDc3MgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL3RhYnMuY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjc3MgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LXJ1bGVzLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTMhLi90YWJzLmNzc1wiKTtcbiAgICAgICAgY29udGVudCA9IHR5cGVvZiBjc3MgPT09ICdzdHJpbmcnID8gW1ttb2R1bGUuaWQsIGNzcywgJyddXSA6IGNzcztcbiAgICAgICAgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKGNvbnRlbnQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyByZW1vdmVDc3MoKTsgfSk7XG4gICAgfVxuICAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBTd2lwZWFibGVWaWV3cyBmcm9tICdyZWFjdC1zd2lwZWFibGUtdmlld3MnO1xuaW1wb3J0IHsgY3JlYXRlTXVpVGhlbWUsIG1ha2VTdHlsZXMsIFRoZW1lUHJvdmlkZXIsIHVzZVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcbmltcG9ydCBUYWJzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYnMnO1xuaW1wb3J0IFRhYiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWInO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgQm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JveCc7XG5pbXBvcnQgUGljcyBmcm9tICcuL2NhcmRHcmlkJztcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvdXNlU3R5bGVzJztcbmltcG9ydCBzIGZyb20gJy4vdGFicy5jc3MnO1xuZnVuY3Rpb24gVGFiUGFuZWwocHJvcHMpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCB2YWx1ZSwgaW5kZXgsIC4uLm90aGVyIH0gPSBwcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICAgIHJvbGU9XCJ0YWJwYW5lbFwiXG4gICAgICAgICAgICBoaWRkZW49e3ZhbHVlICE9PSBpbmRleH1cbiAgICAgICAgICAgIGlkPXtgZnVsbC13aWR0aC10YWJwYW5lbC0ke2luZGV4fWB9XG4gICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9e2BmdWxsLXdpZHRoLXRhYi0ke2luZGV4fWB9XG4gICAgICAgICAgICB7Li4ub3RoZXJ9XG4gICAgICAgID5cbiAgICAgICAgICAgIHt2YWx1ZSA9PT0gaW5kZXggJiYgKFxuICAgICAgICAgICAgICAgIDxCb3ggcD17M30+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PntjaGlsZHJlbn08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5UYWJQYW5lbC5wcm9wVHlwZXMgPSB7XG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAgIGluZGV4OiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXG4gICAgdmFsdWU6IFByb3BUeXBlcy5hbnkuaXNSZXF1aXJlZCxcbn07XG5cbmZ1bmN0aW9uIGExMXlQcm9wcyhpbmRleCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGlkOiBgZnVsbC13aWR0aC10YWItJHtpbmRleH1gLFxuICAgICAgICAnYXJpYS1jb250cm9scyc6IGBmdWxsLXdpZHRoLXRhYnBhbmVsLSR7aW5kZXh9YCxcbiAgICB9O1xufVxuXG5jb25zdCB1c2VzdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgICByb290OiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxuICAgICAgICB3aWR0aDo1MDBcbiAgICB9LFxufSkpO1xuY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XG4gICAgICAgIE11aXRhYnM6e1xuICAgICAgICBpbmRpY2F0b3I6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmZmZmZmXCIsXG4gICAgICAgIH0sXG4gICAgICAgICAgICByb290OiB7XG4gICAgICAgICAgICAgICAgXCImOmhvdmVyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInBpbmtcIixcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VsZWN0ZWQ6IHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZmZmZlwiLFxuICAgICAgICAgICAgICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMDAwMDAwXCIsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG59KTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpbXBsZVRhYnMoKSB7XG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZXN0eWxlcygpO1xuICAgIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xuICAgIGxldCB0cmlhbmdsZT1SZWFjdC51c2VSZWYobnVsbCk7XG5cblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCwgbmV3VmFsdWUpID0+IHtcbiAgICAgICAgc2V0VmFsdWUobmV3VmFsdWUpO1xuICAgIH07XG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlSW5kZXggPSAoaW5kZXgpID0+IHtcbiAgICAgICAgc2V0VmFsdWUoaW5kZXgpO1xuICAgIH07XG4gICAgdXNlU3R5bGVzKHMpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnRyaWFuZ3VsYXJ9IHJlZj17KGVsKSA9PiB7IHRyaWFuZ2xlID0gZWw7IH19PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSBzdHlsZT17eyB3aWR0aDogXCI5MCVcIiwgbWFyZ2luTGVmdDogXCI1JVwiLHBhYWRpbmc6XCIwJVwiLG1hcmdpbkJvdHRvbTpcIjEwcHhcIixtYXJnaW5Ub3A6XCI1N3B4XCJ9fT5cbiAgICAgICAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJzdGF0aWNcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIiwgbWFyZ2luTGVmdDogXCIzOCVcIix3aWR0aDpcIjYwJVwifX0gZWxldmF0aW9uPXswfT5cbiAgICAgICAgICAgICAgICAgICAgPFRhYnMgdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBpbmRpY2F0b3JDb2xvcj1cInJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJmdWxsIHdpZHRoIHRhYnMgZXhhbXBsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8VGFiIGxhYmVsPVwiTmV3IEFycml2YWxzXCIgY2xhc3NOYW1lPXtzLnRhYn0gey4uLmExMXlQcm9wcygwKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIgbGFiZWw9XCJGZWF0dXJlZFwiIGNsYXNzTmFtZT17cy50YWJ9ICB7Li4uYTExeVByb3BzKDEpfSAvPlxuICAgICAgICAgICAgICAgICAgICA8VGFiIGxhYmVsPVwiRm9ydGhDb21pbmdcIiBjbGFzc05hbWU9e3MudGFifSB7Li4uYTExeVByb3BzKDIpfSAvPlxuICAgICAgICAgICAgICAgIDwvVGFicz5cbiAgICAgICAgICAgIDwvQXBwQmFyPlxuICAgICAgICAgICAgICAgIDxTd2lwZWFibGVWaWV3c1xuICAgICAgICAgICAgICAgICAgICBheGlzPXt0aGVtZS5kaXJlY3Rpb24gPT09ICdydGwnID8gJ3gtcmV2ZXJzZScgOiAneCd9XG4gICAgICAgICAgICAgICAgICAgIGluZGV4PXt2YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2VJbmRleD17aGFuZGxlQ2hhbmdlSW5kZXh9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8VGFiUGFuZWwgdmFsdWU9e3ZhbHVlfSBpbmRleD17MH0gZGlyPXt0aGVtZS5kaXJlY3Rpb259ID5cbiAgICAgICAgICAgICAgICA8UGljcy8+XG4gICAgICA8L1RhYlBhbmVsPlxuICAgICAgICAgICAgICAgICAgICA8VGFiUGFuZWwgdmFsdWU9e3ZhbHVlfSBpbmRleD17MX0gZGlyPXt0aGVtZS5kaXJlY3Rpb259PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFBpY3MgLz5cbiAgICAgIDwvVGFiUGFuZWw+XG4gICAgICAgICAgICA8VGFiUGFuZWwgdmFsdWU9e3ZhbHVlfSBpbmRleD17Mn1kaXI9e3RoZW1lLmRpcmVjdGlvbn0gZGlyPXt0aGVtZS5kaXJlY3Rpb259PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFBpY3MgLz5cbiAgICAgIDwvVGFiUGFuZWw+XG4gICAgICA8L1N3aXBlYWJsZVZpZXdzPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgKTtcbn1cblxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL2NvbXBvbmVudHMvd2F2ZS1zbWFsbC5wbmc/NDU3YzczYWNcIjsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ05BO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQTs7Ozs7OztBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFKQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7Ozs7Ozs7QUN6RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUpBO0FBVUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBbUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdlFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFSQTtBQUNBO0FBWUE7QUFDQTtBQUVBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7Ozs7Ozs7QUNqTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQUpBO0FBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBaEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWtCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTs7Ozs7OztBQ3ZFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBVEE7QUFEQTtBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTs7Ozs7OztBQ25IQTs7OztBIiwic291cmNlUm9vdCI6IiJ9