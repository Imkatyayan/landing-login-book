require("source-map-support").install();
exports.ids = ["admin~dashboard~home"];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL2FkbWlufmRhc2hib2FyZH5ob21lLmpzIiwic291cmNlcyI6WyJDOi9Vc2Vycy9MRU5PVk8vYWdyby1tYWluLXdlYi9zcmMvY29tcG9uZW50cy9jYXJkLmNzcyIsIkM6L1VzZXJzL0xFTk9WTy9hZ3JvLW1haW4td2ViL3NyYy9jb21wb25lbnRzL2NhcmRHcmlkLmNzcyIsIkM6L1VzZXJzL0xFTk9WTy9hZ3JvLW1haW4td2ViL3NyYy9jb21wb25lbnRzL2Nhcm91c2VsLnNjc3MiLCJDOi9Vc2Vycy9MRU5PVk8vYWdyby1tYWluLXdlYi9zcmMvY29tcG9uZW50cy9ncmlkLmNzcyIsIkM6L1VzZXJzL0xFTk9WTy9hZ3JvLW1haW4td2ViL3NyYy9jb21wb25lbnRzL25hdkJhci5jc3MiLCJDOi9Vc2Vycy9MRU5PVk8vYWdyby1tYWluLXdlYi9zcmMvY29tcG9uZW50cy9wb3BvdmVyLmNzcyIsIkM6L1VzZXJzL0xFTk9WTy9hZ3JvLW1haW4td2ViL3NyYy9jb21wb25lbnRzL3NlYXJjaGJhci5jc3MiLCJDOi9Vc2Vycy9MRU5PVk8vYWdyby1tYWluLXdlYi9zcmMvY29tcG9uZW50cy90YWJzLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYXJkLmNzcz82ZjE5IiwiQzovVXNlcnMvTEVOT1ZPL2Fncm8tbWFpbi13ZWIvc3JjL2NvbXBvbmVudHMvY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYXJkR3JpZC5jc3M/MzRlMSIsIkM6L1VzZXJzL0xFTk9WTy9hZ3JvLW1haW4td2ViL3NyYy9jb21wb25lbnRzL2NhcmRHcmlkLmpzIiwiQzovVXNlcnMvTEVOT1ZPL2Fncm8tbWFpbi13ZWIvc3JjL2NvbXBvbmVudHMvY2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2Fyb3VzZWwuc2Nzcz9hM2U5Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2dyaWQuY3NzPzg4NzIiLCJDOi9Vc2Vycy9MRU5PVk8vYWdyby1tYWluLXdlYi9zcmMvY29tcG9uZW50cy9ncmlkLmpzIiwiQzovVXNlcnMvTEVOT1ZPL2Fncm8tbWFpbi13ZWIvc3JjL2NvbXBvbmVudHMvbGlzdDEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbmF2QmFyLmNzcz8yODJkIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BvcG92ZXIuY3NzPzlmYmEiLCJDOi9Vc2Vycy9MRU5PVk8vYWdyby1tYWluLXdlYi9zcmMvY29tcG9uZW50cy9wb3BvdmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NlYXJjaGJhci5jc3M/MWE5NCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90YWJzLmNzcz85MTMyIiwiQzovVXNlcnMvTEVOT1ZPL2Fncm8tbWFpbi13ZWIvc3JjL2NvbXBvbmVudHMvdGFicy5qcyIsIkM6L1VzZXJzL0xFTk9WTy9hZ3JvLW1haW4td2ViL3NyYy9jb21wb25lbnRzL3dhdmUtc21hbGwucG5nIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKHRydWUpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY2FyZC1jYXJkYmFjay04VklZOXtcXG4gICAgei1pbmRleDogMTtcXG4gICAgbWF4LXdpZHRoOiAzNDVweDtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcbiAgICB3aWR0aDoyMTVweDtcXG4gICAgaGVpZ2h0OiAzMzBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KDc1ZGVnLCAjZjRmM2YzIDQwJSwgI2ZkZmNmYyAwJSk7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNWRlZywgI2Y0ZjNmMyA0MCUsICNmZGZjZmMgMCUpO1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsMCwwLDAuMTIpLCAwIDFweCAycHggcmdiYSgwLDAsMCwwLjI0KTtcXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLDAsMCwwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwwLDAsMC4yNCk7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7XFxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtcXG59XFxuLmNhcmQtY2FyZGJhY2stOFZJWTk6aG92ZXJ7XFxuICAtd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjEpO1xcbiAgICAgIC1tcy10cmFuc2Zvcm06c2NhbGUoMS4xKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOnNjYWxlKDEuMSk7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMTRweCAyOHB4IHJnYmEoMCwwLDAsMC4yNSksIDAgMTBweCAxMHB4IHJnYmEoMCwwLDAsMC4yMik7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMTRweCAyOHB4IHJnYmEoMCwwLDAsMC4yNSksIDAgMTBweCAxMHB4IHJnYmEoMCwwLDAsMC4yMik7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTYsIDY1LCA1OSk7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNSUpO1xcbiAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUlKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01JSk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcbn1cXG4uY2FyZC1jYXJkYmFjay04VklZOTpiZWZvcmV7XFxuICAgIGNvbnRlbnQ6XFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOjA7XFxuICAgIGxlZnQ6MDtcXG4gICAgd2lkdGg6MTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZGZjZmM7XFxuICAgIC13ZWJraXQtY2xpcC1wYXRoOmNpcmNsZSgxMjVweCBhdCAxMDAlIDIwJSk7XFxuICAgICAgICAgICAgY2xpcC1wYXRoOmNpcmNsZSgxMjVweCBhdCAxMDAlIDIwJSk7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC43cyBlYXNlLWluLW91dDtcXG4gICAgLW8tdHJhbnNpdGlvbjogMC43cyBlYXNlLWluLW91dDtcXG4gICAgdHJhbnNpdGlvbjogMC43cyBlYXNlLWluLW91dDtcXG59XFxuLmNhcmQtY2FyZGJhY2stOFZJWTk6aG92ZXI6YmVmb3Jle1xcbiAgICAtd2Via2l0LWNsaXAtcGF0aDpjaXJjbGUoMjc1cHggYXQgMCUgNTAlKTtcXG4gICAgICAgICAgICBjbGlwLXBhdGg6Y2lyY2xlKDI3NXB4IGF0IDAlIDUwJSk7XFxufVxcbi5jYXJkLWNhcmRiYWNrLThWSVk5OmFmdGVye1xcbiAgICBjb250ZW50OlxcXCJBZ3JvYmlvc1xcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOjM1JTtcXG4gICAgbGVmdDotMTAlO1xcbiAgICBmb250LXNpemU6NGVtO1xcbiAgICBmb250LXdlaWdodDo4MDA7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgY29sb3I6IHJnYmEoMjExLCAyMDgsIDIwOCwgMC4yMSk7XFxufVxcbi5jYXJkLWNhcmRiYWNrLThWSVk5IGltZ3tcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICB0b3A6IDk1JTtcXG4gICAgcmlnaHQ6MjElO1xcbiAgICBoZWlnaHQ6MTgwcHg7XFxuICAgIG9wYWNpdHk6IDg1JTtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjVzO1xcbiAgICAtby10cmFuc2l0aW9uOiAwLjVzO1xcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xcbiAgIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdygtNHB4IDNweCAxbW0gcmdiKDAsMCwwLDAuNykpO1xcbiAgICAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygtNHB4IDNweCAxbW0gcmdiKDAsMCwwLDAuNykpXFxufVxcbi5jYXJkLWNhcmRiYWNrLThWSVk5OmhvdmVyIGltZ3tcXG4gICAgdG9wOjIwJTtcXG59XFxuLmNhcmQtY2FyZGJhY2stOFZJWTkgaDZ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHRvcDoxMDAlO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxODAlKTtcXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTgwJSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDE4MCUpO1xcbiAgICB3aWR0aDo5MCU7XFxuICAgIGhlaWdodDoxMDBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjVzO1xcbiAgICAgLW8tdHJhbnNpdGlvbjogMC41cztcXG4gICAgIHRyYW5zaXRpb246IDAuNXM7XFxufVxcbi5jYXJkLWNhcmRiYWNrLThWSVk5IHAgcDpudGgtY2hpbGQoMSl7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHRvcDoxMDAlO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDMlKTtcXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAzJSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMyUpO1xcbiAgICB3aWR0aDo5MCU7XFxuICAgIGhlaWdodDoxMDBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjVzO1xcbiAgICAgLW8tdHJhbnNpdGlvbjogMC41cztcXG4gICAgIHRyYW5zaXRpb246IDAuNXM7XFxufVxcbi5jYXJkLWNhcmRiYWNrLThWSVk5IHAgcDpudGgtY2hpbGQoMil7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHRvcDoxMDAlO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMjIlKTtcXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjIyJSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIyMiUpO1xcbiAgICB3aWR0aDo5MCU7XFxuICAgIGhlaWdodDoxMDBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjVzO1xcbiAgICAgLW8tdHJhbnNpdGlvbjogMC41cztcXG4gICAgIHRyYW5zaXRpb246IDAuNXM7XFxufVxcbi5jYXJkLWNhcmRiYWNrLThWSVk5IHAgcDpudGgtY2hpbGQoMyl7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHRvcDoxMDAlO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyNDElKTtcXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjQxJSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDI0MSUpO1xcbiAgICB3aWR0aDo5MCU7XFxuICAgIGhlaWdodDoxMDBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjVzO1xcbiAgICAgLW8tdHJhbnNpdGlvbjogMC41cztcXG4gICAgIHRyYW5zaXRpb246IDAuNXM7XFxuICAgICBvcGFjaXR5OiAwO1xcbiAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG4uY2FyZC1jYXJkYmFjay04VklZOSBwIHA6bnRoLWNoaWxkKDQpe1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB0b3A6MTAwJTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjYyJSk7XFxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDI2MiUpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyNjIlKTtcXG4gICAgd2lkdGg6OTAlO1xcbiAgICBoZWlnaHQ6MTAwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC41cztcXG4gICAgIC1vLXRyYW5zaXRpb246IDAuNXM7XFxuICAgICB0cmFuc2l0aW9uOiAwLjVzO1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcbi5jYXJkLWNhcmRiYWNrLThWSVk5OmhvdmVyIGg2e1xcbiAgICB0b3A6MjAlO1xcbn1cXG4uY2FyZC1jYXJkYmFjay04VklZOTpob3ZlciBwIHB7XFxuICAgIHRvcDoyMCU7XFxufVxcbi5jYXJkLWNhcmRiYWNrLThWSVk5OmhvdmVyIHAgcDpudGgtY2hpbGQoMyl7XFxuICAgICBvcGFjaXR5OiAxO1xcbiAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMC4ycztcXG4gICAgICAgICAgLW8tdHJhbnNpdGlvbi1kZWxheTogMC4ycztcXG4gICAgICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4ycztcXG59XFxuLmNhcmQtY2FyZGJhY2stOFZJWTk6aG92ZXIgcCBwOm50aC1jaGlsZCg0KXtcXG4gICAgIG9wYWNpdHk6IDE7XFxuICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwLjNzO1xcbiAgICAgICAgICAtby10cmFuc2l0aW9uLWRlbGF5OiAwLjNzO1xcbiAgICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjNzO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJjYXJkLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsd0JBQWdCO1lBQWhCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLDhEQUEyRDtJQUEzRCwyREFBMkQ7SUFDM0QsMEVBQWtFO1lBQWxFLGtFQUFrRTtJQUNsRSx1REFBK0M7SUFBL0Msa0RBQStDO0lBQS9DLCtDQUErQztBQUNuRDtBQUNBO0VBQ0UsNEJBQW9CO01BQXBCLHdCQUFvQjtVQUFwQixvQkFBb0I7RUFDcEIsOEVBQXNFO1VBQXRFLHNFQUFzRTtFQUN0RSxpQ0FBaUM7RUFDakMsa0NBQTBCO01BQTFCLDhCQUEwQjtVQUExQiwwQkFBMEI7RUFDMUIsbUJBQW1COztBQUVyQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixLQUFLO0lBQ0wsTUFBTTtJQUNOLFVBQVU7SUFDVixZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLDJDQUFtQztZQUFuQyxtQ0FBbUM7SUFDbkMsb0NBQTRCO0lBQTVCLCtCQUE0QjtJQUE1Qiw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLHlDQUFpQztZQUFqQyxpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFNBQVM7SUFDVCxhQUFhO0lBQ2IsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsUUFBUTtJQUNSLFNBQVM7SUFDVCxZQUFZO0lBQ1osWUFBWTtJQUNaLHdCQUFnQjtJQUFoQixtQkFBZ0I7SUFBaEIsZ0JBQWdCO0dBQ2pCLHdEQUErQztXQUEvQztBQUNIO0FBQ0E7SUFDSSxPQUFPO0FBQ1g7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsUUFBUTtJQUNSLG1DQUEyQjtRQUEzQiwrQkFBMkI7WUFBM0IsMkJBQTJCO0lBQzNCLFNBQVM7SUFDVCxZQUFZO0lBQ1osa0JBQWtCO0tBQ2pCLHdCQUFnQjtLQUFoQixtQkFBZ0I7S0FBaEIsZ0JBQWdCO0FBQ3JCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFFBQVE7SUFDUixtQ0FBMkI7UUFBM0IsK0JBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQixTQUFTO0lBQ1QsWUFBWTtJQUNaLGtCQUFrQjtLQUNqQix3QkFBZ0I7S0FBaEIsbUJBQWdCO0tBQWhCLGdCQUFnQjtBQUNyQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixRQUFRO0lBQ1IsbUNBQTJCO1FBQTNCLCtCQUEyQjtZQUEzQiwyQkFBMkI7SUFDM0IsU0FBUztJQUNULFlBQVk7SUFDWixrQkFBa0I7S0FDakIsd0JBQWdCO0tBQWhCLG1CQUFnQjtLQUFoQixnQkFBZ0I7QUFDckI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsUUFBUTtJQUNSLG1DQUEyQjtRQUEzQiwrQkFBMkI7WUFBM0IsMkJBQTJCO0lBQzNCLFNBQVM7SUFDVCxZQUFZO0lBQ1osa0JBQWtCO0tBQ2pCLHdCQUFnQjtLQUFoQixtQkFBZ0I7S0FBaEIsZ0JBQWdCO0tBQ2hCLFVBQVU7S0FDVixrQkFBa0I7QUFDdkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsUUFBUTtJQUNSLG1DQUEyQjtRQUEzQiwrQkFBMkI7WUFBM0IsMkJBQTJCO0lBQzNCLFNBQVM7SUFDVCxZQUFZO0lBQ1osa0JBQWtCO0tBQ2pCLHdCQUFnQjtLQUFoQixtQkFBZ0I7S0FBaEIsZ0JBQWdCO01BQ2YsVUFBVTtLQUNYLGtCQUFrQjtBQUN2QjtBQUNBO0lBQ0ksT0FBTztBQUNYO0FBQ0E7SUFDSSxPQUFPO0FBQ1g7QUFFQTtLQUNLLFVBQVU7S0FDVixtQkFBbUI7S0FDbkIsOEJBQXNCO1VBQXRCLHlCQUFzQjthQUF0QixzQkFBc0I7QUFDM0I7QUFDQTtLQUNLLFVBQVU7S0FDVixtQkFBbUI7S0FDbkIsOEJBQXNCO1VBQXRCLHlCQUFzQjthQUF0QixzQkFBc0I7QUFDM0JcIixcImZpbGVcIjpcImNhcmQuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jYXJkYmFja3tcXG4gICAgei1pbmRleDogMTtcXG4gICAgbWF4LXdpZHRoOiAzNDVweDtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxuICAgIHdpZHRoOjIxNXB4O1xcbiAgICBoZWlnaHQ6IDMzMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTVkZWcsICNmNGYzZjMgNDAlLCAjZmRmY2ZjIDAlKTtcXG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwwLDAsMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsMCwwLDAuMjQpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtcXG59XFxuLmNhcmRiYWNrOmhvdmVye1xcbiAgdHJhbnNmb3JtOnNjYWxlKDEuMSk7XFxuICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsMCwwLDAuMjUpLCAwIDEwcHggMTBweCByZ2JhKDAsMCwwLDAuMjIpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE2LCA2NSwgNTkpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01JSk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcbn1cXG4uY2FyZGJhY2s6YmVmb3Jle1xcbiAgICBjb250ZW50OlxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDowO1xcbiAgICBsZWZ0OjA7XFxuICAgIHdpZHRoOjEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmRmY2ZjO1xcbiAgICBjbGlwLXBhdGg6Y2lyY2xlKDEyNXB4IGF0IDEwMCUgMjAlKTtcXG4gICAgdHJhbnNpdGlvbjogMC43cyBlYXNlLWluLW91dDtcXG59XFxuLmNhcmRiYWNrOmhvdmVyOmJlZm9yZXtcXG4gICAgY2xpcC1wYXRoOmNpcmNsZSgyNzVweCBhdCAwJSA1MCUpO1xcbn1cXG4uY2FyZGJhY2s6YWZ0ZXJ7XFxuICAgIGNvbnRlbnQ6XFxcIkFncm9iaW9zXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6MzUlO1xcbiAgICBsZWZ0Oi0xMCU7XFxuICAgIGZvbnQtc2l6ZTo0ZW07XFxuICAgIGZvbnQtd2VpZ2h0OjgwMDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBjb2xvcjogcmdiYSgyMTEsIDIwOCwgMjA4LCAwLjIxKTtcXG59XFxuLmNhcmRiYWNrIGltZ3tcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICB0b3A6IDk1JTtcXG4gICAgcmlnaHQ6MjElO1xcbiAgICBoZWlnaHQ6MTgwcHg7XFxuICAgIG9wYWNpdHk6IDg1JTtcXG4gICAgdHJhbnNpdGlvbjogMC41cztcXG4gICBmaWx0ZXI6IGRyb3Atc2hhZG93KC00cHggM3B4IDFtbSByZ2IoMCwwLDAsMC43KSlcXG59XFxuLmNhcmRiYWNrOmhvdmVyIGltZ3tcXG4gICAgdG9wOjIwJTtcXG59XFxuLmNhcmRiYWNrIGg2e1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB0b3A6MTAwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDE4MCUpO1xcbiAgICB3aWR0aDo5MCU7XFxuICAgIGhlaWdodDoxMDBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgdHJhbnNpdGlvbjogMC41cztcXG59XFxuLmNhcmRiYWNrIHAgcDpudGgtY2hpbGQoMSl7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHRvcDoxMDAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAzJSk7XFxuICAgIHdpZHRoOjkwJTtcXG4gICAgaGVpZ2h0OjEwMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICB0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG4uY2FyZGJhY2sgcCBwOm50aC1jaGlsZCgyKXtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdG9wOjEwMCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMjIlKTtcXG4gICAgd2lkdGg6OTAlO1xcbiAgICBoZWlnaHQ6MTAwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgIHRyYW5zaXRpb246IDAuNXM7XFxufVxcbi5jYXJkYmFjayBwIHA6bnRoLWNoaWxkKDMpe1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB0b3A6MTAwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDI0MSUpO1xcbiAgICB3aWR0aDo5MCU7XFxuICAgIGhlaWdodDoxMDBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgdHJhbnNpdGlvbjogMC41cztcXG4gICAgIG9wYWNpdHk6IDA7XFxuICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcbi5jYXJkYmFjayBwIHA6bnRoLWNoaWxkKDQpe1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB0b3A6MTAwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDI2MiUpO1xcbiAgICB3aWR0aDo5MCU7XFxuICAgIGhlaWdodDoxMDBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgdHJhbnNpdGlvbjogMC41cztcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG4uY2FyZGJhY2s6aG92ZXIgaDZ7XFxuICAgIHRvcDoyMCU7XFxufVxcbi5jYXJkYmFjazpob3ZlciBwIHB7XFxuICAgIHRvcDoyMCU7XFxufVxcblxcbi5jYXJkYmFjazpob3ZlciBwIHA6bnRoLWNoaWxkKDMpe1xcbiAgICAgb3BhY2l0eTogMTtcXG4gICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjJzO1xcbn1cXG4uY2FyZGJhY2s6aG92ZXIgcCBwOm50aC1jaGlsZCg0KXtcXG4gICAgIG9wYWNpdHk6IDE7XFxuICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4zcztcXG59XFxuXCJdfV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiY2FyZGJhY2tcIjogXCJjYXJkLWNhcmRiYWNrLThWSVk5XCJcbn07IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikodHJ1ZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jYXJkR3JpZC1ub1Njcm9sbC0zN3BGentcXG4gICAgbWFyZ2luLWxlZnQ6IC01NXB4O1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW4gICFpbXBvcnRhbnQ7XFxufVxcbi5jYXJkR3JpZC1tb3ZlUmlnaHQtMUJKb3oge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OjA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMjUwJSk7XFxuICAgICAgICAtbXMtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMjUwJSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMjUwJSk7XFxuICAgIHotaW5kZXg6MTU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjp0cmFuc3BhcmVudDtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG4uY2FyZEdyaWQtbW92ZVJpZ2h0LTFCSm96OmhvdmVye1xcbiAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTUxLCAxNDIsIDE0MiwwLjgpO1xcbiAgIG9wYWNpdHk6IDAuNTtcXG4gICBjb2xvcjogIzAwMDAwMDtcXG59XFxuLmNhcmRHcmlkLW1vdmVMZWZ0LTJSVEExIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OjA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMjUwJSk7XFxuICAgICAgICAtbXMtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMjUwJSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMjUwJSk7XFxuICAgIHotaW5kZXg6MTU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjp0cmFuc3BhcmVudDtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG4uY2FyZEdyaWQtbW92ZUxlZnQtMlJUQTE6aG92ZXJ7XFxuICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTEsIDE0MiwgMTQyLDAuOCk7XFxuICAgb3BhY2l0eTogMC41O1xcbiAgIGNvbG9yOiAjMDAwMDAwO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJjYXJkR3JpZC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLGtDQUEwQjtRQUExQiw4QkFBMEI7WUFBMUIsMEJBQTBCO0lBQzFCLFVBQVU7SUFDViw2QkFBNkI7SUFDN0IsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7QUFDQTtHQUNHLHlDQUF5QztHQUN6QyxZQUFZO0dBQ1osY0FBYztBQUNqQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixrQ0FBMEI7UUFBMUIsOEJBQTBCO1lBQTFCLDBCQUEwQjtJQUMxQixVQUFVO0lBQ1YsNkJBQTZCO0lBQzdCLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25CO0FBQ0E7R0FDRyx5Q0FBeUM7R0FDekMsWUFBWTtHQUNaLGNBQWM7QUFDakJcIixcImZpbGVcIjpcImNhcmRHcmlkLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubm9TY3JvbGx7XFxuICAgIG1hcmdpbi1sZWZ0OiAtNTVweDtcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuICAhaW1wb3J0YW50O1xcbn1cXG4ubW92ZVJpZ2h0IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDowO1xcbiAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWSgyNTAlKTtcXG4gICAgei1pbmRleDoxNTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOnRyYW5zcGFyZW50O1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxufVxcbi5tb3ZlUmlnaHQ6aG92ZXJ7XFxuICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTEsIDE0MiwgMTQyLDAuOCk7XFxuICAgb3BhY2l0eTogMC41O1xcbiAgIGNvbG9yOiAjMDAwMDAwO1xcbn1cXG4ubW92ZUxlZnQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6MDtcXG4gICAgdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMjUwJSk7XFxuICAgIHotaW5kZXg6MTU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjp0cmFuc3BhcmVudDtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG4ubW92ZUxlZnQ6aG92ZXJ7XFxuICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTEsIDE0MiwgMTQyLDAuOCk7XFxuICAgb3BhY2l0eTogMC41O1xcbiAgIGNvbG9yOiAjMDAwMDAwO1xcbn1cIl19XSk7XG4vLyBFeHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJub1Njcm9sbFwiOiBcImNhcmRHcmlkLW5vU2Nyb2xsLTM3cEZ6XCIsXG5cdFwibW92ZVJpZ2h0XCI6IFwiY2FyZEdyaWQtbW92ZVJpZ2h0LTFCSm96XCIsXG5cdFwibW92ZUxlZnRcIjogXCJjYXJkR3JpZC1tb3ZlTGVmdC0yUlRBMVwiXG59OyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKHRydWUpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4gICAgKntcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICBtYXJnaW46MDtcXG4gICAgfVxcbi5jYXJvdXNlbC1oZXJvLTFScy1Oe1xcbiAgICB2aXNpYmlsaXR5OmhpZGRlbjtcXG4gICAgaGVpZ2h0OiA5NXZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYxLCAyMDcsIDI1Myk7XFxufVxcbi5jYXJvdXNlbC1oZXJvLTFScy1OOmJlZm9yZXtcXG4gICAgY29udGVudDpcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGhlaWdodDogMTI4cHg7XFxuICAgIGhlaWdodDogOHJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL3NyYy9jb21wb25lbnRzL3dhdmUtc21hbGwucG5nPzQ1N2M3M2FjKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuLmNhcm91c2VsLW92ZXJsYXktMlI5amt7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDowO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuLmNhcm91c2VsLWNvbnRhaW5lci0yRHBOentcXG4gICAgICAgIHdpZHRoOjE0NDBweDtcXG4gICAgICAgIG1pbi13aWR0aDoxNDQwcHg7XFxuICAgICAgICBtYXJnaW46MCBhdXRvO1xcbn1cXG4uY2Fyb3VzZWwtaGVyb0lubmVyLTJTMl9Le1xcbiAgICAgICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICAgICAgbWFyZ2luOjAgMjRweDtcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG4uY2Fyb3VzZWwtaGVyb0NvbnRlbnQtM2hJUHN7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7ICAgICAgICBcXG59XFxuLmNhcm91c2VsLWhlcm9Db250ZW50SW5uZXItMS1ZUmJ7XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDo2MDBweDtcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjowIGF1dG87XFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzMyMzIzMjtcXG59XFxuaDF7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6NTAwO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgICAgICAgICAgICAgXFxufVxcbi5jYXJvdXNlbC1oZXJvQ29udGVudExpbmUtM19yWFl7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uY2Fyb3VzZWwtaGVyb0ltYWdlcy0xMndiOXtcXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uY2Fyb3VzZWwtZmlyc3RJbWFnZS0zMmNaU3tcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6MjUwcHg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDo1MHB4O1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MzAlO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjQwJTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdygtNHB4IDRweCAxbW0gcmdiKDAsMCwwLDAuNykpO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KC00cHggNHB4IDFtbSByZ2IoMCwwLDAsMC43KSk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4uY2Fyb3VzZWwtc2Vjb25kSW1hZ2UtS2NQWUZ7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOjI1MnB4O1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6MTcwcHg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDozMCU7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6NDAlO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KC00cHggMXB4IDFtbSByZ2IoMCwwLDAsMC43KSk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coLTRweCAxcHggMW1tIHJnYigwLDAsMCwwLjcpKTtcXG59XFxuLmNhcm91c2VsLWZpcnN0SW1hZ2UtMzJjWlMgaW1nLCAuY2Fyb3VzZWwtc2Vjb25kSW1hZ2UtS2NQWUYgaW1ne1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6MDtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDowO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6MDtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206MDtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlOyBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XFxuLmNhcm91c2VsLXRoaXJkSW1hZ2UtMXNRM297XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOjI1NHB4O1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6MjkwcHg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDozMCU7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6NDAlO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KC00cHggMXB4IDFtbSByZ2IoMCwwLDAsMC43KSk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coLTRweCAxcHggMW1tIHJnYigwLDAsMCwwLjcpKTtcXG59XFxuLmNhcm91c2VsLXRoaXJkSW1hZ2UtMXNRM28gaW1ne1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6MDtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDowO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6MDtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206MDtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlOyBcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbiBcIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJjYXJvdXNlbC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7SUFDSTtRQUNJLFVBQVU7UUFDVixRQUFRO0lBQ1o7QUFDSjtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxTQUFTO0lBQ1QsYUFBWTtJQUFaLFlBQVk7SUFDWixXQUFXO0lBQ1gscUVBQXFFO0lBQ3JFLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsS0FBSztJQUNMLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsYUFBYTtBQUNqQjtBQUNBO1FBQ1EsWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixhQUFhO0FBQ3JCO0FBQ0M7WUFDVyxvQkFBYTtZQUFiLGFBQWE7WUFDYixzQkFBbUI7Z0JBQW5CLG1CQUFtQjtZQUNuQixzQkFBOEI7Z0JBQTlCLDhCQUE4QjtZQUM5QixhQUFhO1lBQ2IsYUFBYTtBQUN6QjtBQUVBO2dCQUNnQixVQUFVO0FBQzFCO0FBRUM7b0JBQ21CLFdBQVc7b0JBQ1gsYUFBYTtvQkFDYixjQUFjO0FBQ2xDO0FBRUM7d0JBQ3VCLGVBQWU7d0JBQ2YsZUFBZTs7QUFFdkM7QUFDQTs0QkFDNEIsU0FBUzs0QkFDVCxZQUFZOzRCQUNaLGdCQUFnQjtBQUM1QztBQUVBO3dCQUN3QixVQUFVO3dCQUNWLGFBQWE7d0JBQ2Isa0JBQWtCO0FBQzFDO0FBQ0U7Z0NBQzhCLGtCQUFrQjtnQ0FDbEIsZ0JBQWdCO2dDQUNoQixTQUFTO2dDQUNULFVBQVU7Z0NBQ1YsU0FBUztnQ0FDVCxVQUFVO2dDQUNWLHdEQUFnRDt3Q0FBaEQsZ0RBQWdEOzRCQUNwRDtBQUU1QjtnQ0FDZ0Msa0JBQWtCO2dDQUNsQixnQkFBZ0I7Z0NBQ2hCLFNBQVM7Z0NBQ1QsV0FBVztnQ0FDWCxTQUFTO2dDQUNULFVBQVU7Z0NBQ1Ysd0RBQWdEO3dDQUFoRCxnREFBZ0Q7QUFDaEY7QUFDQTtpQ0FDaUMsa0JBQWtCO2lDQUNsQixLQUFLO2lDQUNMLE9BQU87aUNBQ1AsTUFBTTtpQ0FDTixRQUFRO2lDQUNSLFVBQVU7aUNBQ1YsWUFBWTtnQ0FDYjtBQUNoQztnQ0FDZ0Msa0JBQWtCO2dDQUNsQixnQkFBZ0I7Z0NBQ2hCLFNBQVM7Z0NBQ1QsV0FBVztnQ0FDWCxTQUFTO2dDQUNULFVBQVU7Z0NBQ1Ysd0RBQWdEO3dDQUFoRCxnREFBZ0Q7QUFDaEY7QUFDQTtpQ0FDaUMsa0JBQWtCO2lDQUNsQixLQUFLO2lDQUNMLE9BQU87aUNBQ1AsTUFBTTtpQ0FDTixRQUFRO2lDQUNSLFVBQVU7aUNBQ1YsWUFBWTtBQUM3Q1wiLFwiZmlsZVwiOlwiY2Fyb3VzZWwuc2Nzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG4gICAgKntcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICBtYXJnaW46MDtcXG4gICAgfVxcbi5oZXJve1xcbiAgICB2aXNpYmlsaXR5OmhpZGRlbjtcXG4gICAgaGVpZ2h0OiA5NXZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYxLCAyMDcsIDI1Myk7XFxufVxcbi5oZXJvOmJlZm9yZXtcXG4gICAgY29udGVudDpcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGhlaWdodDogOHJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL3NyYy9jb21wb25lbnRzL3dhdmUtc21hbGwucG5nPzQ1N2M3M2FjKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuLm92ZXJsYXl7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDowO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuLmNvbnRhaW5lcntcXG4gICAgICAgIHdpZHRoOjE0NDBweDtcXG4gICAgICAgIG1pbi13aWR0aDoxNDQwcHg7XFxuICAgICAgICBtYXJnaW46MCBhdXRvO1xcbn1cXG4gLmhlcm9Jbm5lcntcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgICAgIG1hcmdpbjowIDI0cHg7XFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmhlcm9Db250ZW50e1xcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAlOyAgICAgICAgXFxufVxcblxcbiAuaGVyb0NvbnRlbnRJbm5lcntcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjYwMHB4O1xcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjAgYXV0bztcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzIzMjMyO1xcbn1cXG5cXG4gaDF7XFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6NTAwO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgICAgICAgICAgICAgXFxufVxcbi5oZXJvQ29udGVudExpbmV7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uaGVyb0ltYWdlc3tcXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4gIC5maXJzdEltYWdle1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDoyNTBweDtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OjUwcHg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDozMCU7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6NDAlO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygtNHB4IDRweCAxbW0gcmdiKDAsMCwwLDAuNykpO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXG4uc2Vjb25kSW1hZ2V7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOjI1MnB4O1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6MTcwcHg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDozMCU7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6NDAlO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygtNHB4IDFweCAxbW0gcmdiKDAsMCwwLDAuNykpO1xcbn1cXG4uZmlyc3RJbWFnZSBpbWcsIC5zZWNvbmRJbWFnZSBpbWd7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDowO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OjA7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDowO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTowO1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7IFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cXG4udGhpcmRJbWFnZXtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6MjU0cHg7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDoyOTBweDtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOjMwJTtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDo0MCU7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KC00cHggMXB4IDFtbSByZ2IoMCwwLDAsMC43KSk7XFxufVxcbi50aGlyZEltYWdlIGltZ3tcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOjA7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6MDtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OjA7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOjA7XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTsgXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4gXCJdfV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiaGVyb1wiOiBcImNhcm91c2VsLWhlcm8tMVJzLU5cIixcblx0XCJvdmVybGF5XCI6IFwiY2Fyb3VzZWwtb3ZlcmxheS0yUjlqa1wiLFxuXHRcImNvbnRhaW5lclwiOiBcImNhcm91c2VsLWNvbnRhaW5lci0yRHBOelwiLFxuXHRcImhlcm9Jbm5lclwiOiBcImNhcm91c2VsLWhlcm9Jbm5lci0yUzJfS1wiLFxuXHRcImhlcm9Db250ZW50XCI6IFwiY2Fyb3VzZWwtaGVyb0NvbnRlbnQtM2hJUHNcIixcblx0XCJoZXJvQ29udGVudElubmVyXCI6IFwiY2Fyb3VzZWwtaGVyb0NvbnRlbnRJbm5lci0xLVlSYlwiLFxuXHRcImhlcm9Db250ZW50TGluZVwiOiBcImNhcm91c2VsLWhlcm9Db250ZW50TGluZS0zX3JYWVwiLFxuXHRcImhlcm9JbWFnZXNcIjogXCJjYXJvdXNlbC1oZXJvSW1hZ2VzLTEyd2I5XCIsXG5cdFwiZmlyc3RJbWFnZVwiOiBcImNhcm91c2VsLWZpcnN0SW1hZ2UtMzJjWlNcIixcblx0XCJzZWNvbmRJbWFnZVwiOiBcImNhcm91c2VsLXNlY29uZEltYWdlLUtjUFlGXCIsXG5cdFwidGhpcmRJbWFnZVwiOiBcImNhcm91c2VsLXRoaXJkSW1hZ2UtMXNRM29cIlxufTsiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKSh0cnVlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmdyaWQtc3ViTGlzdFRpdGxlLVBGTEZVe1xcbiAgICAgbWFyZ2luOiAxMHB4IDBweDtcXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMHB4OyBcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbn1cXG4uZ3JpZC1zdWJMaXN0VGl0bGUtUEZMRlU6aG92ZXJ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5ncmlkLXN1Ykxpc3RUaXRsZS1QRkxGVSBzcGFue1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAxIGFsbDtcXG4gIC1vLXRyYW5zaXRpb246IDEgYWxsO1xcbiAgdHJhbnNpdGlvbjogMSBhbGw7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTYxLCAyMDcsIDI1Myk7XFxuICBwYWRkaW5nOjJweCA1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5ncmlkLXN1Ykxpc3RUaXRsZS1QRkxGVSBzcGFuOmhvdmVye1xcbiAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjEsIDIwNywgMjUzKTtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJncmlkLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtLQUNLLGdCQUFnQjtNQUNmLG1CQUFtQjtNQUNuQixpQkFBaUI7TUFDakIseUJBQXlCO01BQ3pCLGVBQWU7TUFDZixtQkFBbUI7QUFDekI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLHlCQUFpQjtFQUFqQixvQkFBaUI7RUFBakIsaUJBQWlCO0VBQ2pCLG9DQUFvQztFQUNwQyxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCO0FBQ0E7R0FDRyxvQ0FBb0M7RUFDckMsY0FBYztBQUNoQlwiLFwiZmlsZVwiOlwiZ3JpZC5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnN1Ykxpc3RUaXRsZXtcXG4gICAgIG1hcmdpbjogMTBweCAwcHg7XFxuICAgICAgcGFkZGluZy1ib3R0b206IDBweDsgXFxuICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XFxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgICBmb250LXNpemU6IDE1cHg7XFxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG59XFxuLnN1Ykxpc3RUaXRsZTpob3ZlcntcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnN1Ykxpc3RUaXRsZSBzcGFue1xcbiAgdHJhbnNpdGlvbjogMSBhbGw7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTYxLCAyMDcsIDI1Myk7XFxuICBwYWRkaW5nOjJweCA1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5zdWJMaXN0VGl0bGUgc3Bhbjpob3ZlcntcXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYxLCAyMDcsIDI1Myk7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuXCJdfV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwic3ViTGlzdFRpdGxlXCI6IFwiZ3JpZC1zdWJMaXN0VGl0bGUtUEZMRlVcIlxufTsiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKSh0cnVlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keXtcXG4gICAgbWFyZ2luOiAwcHg7XFxufVxcbi5uYXZCYXItbWVudS1vcHRpb25zLTI2bml4e1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIm5hdkJhci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFlBQVk7QUFDaEJcIixcImZpbGVcIjpcIm5hdkJhci5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keXtcXG4gICAgbWFyZ2luOiAwcHg7XFxufVxcbi5tZW51LW9wdGlvbnN7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XCJdfV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwibWVudS1vcHRpb25zXCI6IFwibmF2QmFyLW1lbnUtb3B0aW9ucy0yNm5peFwiXG59OyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKHRydWUpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJib2R5e1xcbiAgICBtYXJnaW46IDBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wicG9wb3Zlci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxXQUFXO0FBQ2ZcIixcImZpbGVcIjpcInBvcG92ZXIuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHl7XFxuICAgIG1hcmdpbjogMHB4O1xcbn1cIl19XSk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKSh0cnVlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnNlYXJjaGJhci1maWVsZFNlYXJjaC0zRkVGc1xcbntcXG4gICAgIG1hcmdpbi1sZWZ0OiAyMCUgIWltcG9ydGFudDtcXG4gICAgIHdpZHRoOiA2MCUgIWltcG9ydGFudDtcXG4gICAgIGZvbnQtc2l6ZTogMzVweCAhaW1wb3J0YW50O1xcbiAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59IFxcbi5zZWFyY2hiYXItZmllbGRTZWFyY2gtM0ZFRnMgZmllbGRzZXRcXG57XFxuICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbn0gXFxuI3NlYXJjaGJhci1mcmVlLXNvbG8tMi1kZW1vLTFXaXR2OmZvY3Vze1xcbiAgICB3aWR0aDo5MDBweDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoXFxcIi01MCVcXFwiKTtcXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoXFxcIi01MCVcXFwiKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoXFxcIi01MCVcXFwiKTtcXG4gICAgei1pbmRleDogMTA7XFxufSBcXG4uc2VhcmNoYmFyLWZpZWxkU2VhcmNoLTNGRUZzOmZvY3VzIGJvZHl7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMjAwMHB4IDAgMCAwIHJnYmEoMjU1LDI1NSwyNTUsMC44KSA7XFxuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMjAwMHB4IDAgMCAwIHJnYmEoMjU1LDI1NSwyNTUsMC44KSA7XFxuICAgIHotaW5kZXg6MTtcXG59IFxcbi5zZWFyY2hiYXItaWNvbi0zMDRqN3tcXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XFxuICAgIHNpemU6IDM1cHg7XFxuICAgIHRvcDozMHB4O1xcbiAgICBsZWZ0OjI4MDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wic2VhcmNoYmFyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7S0FFSywyQkFBMkI7S0FDM0IscUJBQXFCO0tBQ3JCLDBCQUEwQjtLQUMxQixrQkFBa0I7S0FDbEIsbUJBQW1CO0FBQ3hCO0FBQ0E7O0tBRUssbUJBQW1CO0FBQ3hCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gscUNBQTZCO1FBQTdCLGlDQUE2QjtZQUE3Qiw2QkFBNkI7SUFDN0IsV0FBVztBQUNmO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsNkRBQXFEO1lBQXJELHFEQUFxRDtJQUNyRCxTQUFTO0FBQ2I7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsUUFBUTtJQUNSLFFBQVE7QUFDWlwiLFwiZmlsZVwiOlwic2VhcmNoYmFyLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuZmllbGRTZWFyY2hcXG57XFxuICAgICBtYXJnaW4tbGVmdDogMjAlICFpbXBvcnRhbnQ7XFxuICAgICB3aWR0aDogNjAlICFpbXBvcnRhbnQ7XFxuICAgICBmb250LXNpemU6IDM1cHggIWltcG9ydGFudDtcXG4gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufSBcXG4uZmllbGRTZWFyY2ggZmllbGRzZXRcXG57XFxuICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbn0gXFxuI2ZyZWUtc29sby0yLWRlbW86Zm9jdXN7XFxuICAgIHdpZHRoOjkwMHB4O1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoXFxcIi01MCVcXFwiKTtcXG4gICAgei1pbmRleDogMTA7XFxufVxcbi5maWVsZFNlYXJjaDpmb2N1cyBib2R5e1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAyMDAwcHggMCAwIDAgcmdiYSgyNTUsMjU1LDI1NSwwLjgpIDtcXG4gICAgei1pbmRleDoxO1xcbn1cXG4uaWNvbntcXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XFxuICAgIHNpemU6IDM1cHg7XFxuICAgIHRvcDozMHB4O1xcbiAgICBsZWZ0OjI4MDtcXG59XCJdfV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiZmllbGRTZWFyY2hcIjogXCJzZWFyY2hiYXItZmllbGRTZWFyY2gtM0ZFRnNcIixcblx0XCJmcmVlLXNvbG8tMi1kZW1vXCI6IFwic2VhcmNoYmFyLWZyZWUtc29sby0yLWRlbW8tMVdpdHZcIixcblx0XCJpY29uXCI6IFwic2VhcmNoYmFyLWljb24tMzA0ajdcIlxufTsiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKSh0cnVlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnRhYnMtdHJpYW5ndWxhci0zcS0tc3tcXG4gICAgIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgICAgIHJpZ2h0OiA0OC42JTtcXG4gICAgICBoZWlnaHQ6IDA7XFxuICAgICAgd2lkdGg6IDA7XFxuICAgICAgdG9wOjExMiU7XFxuICAgICAgei1pbmRleDogMzA7XFxuICAgICAgIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICAgIGJvcmRlci1yaWdodDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgICBib3JkZXItdG9wOiAxMHB4IHNvbGlkIHJnYigxNjEsIDIwNywgMjUzKTtcXG59XFxuXFxuLnRhYnMtdGFiLUVuQ0J4e1xcbiAgICBtaW4td2lkdGg6IDExMHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTpcXFwiMTNweFxcXCI7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDE2MSwgMjA3LCAyNTMpO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDElO1xcbn1cXG5cXG4udGFicy10YWItRW5DQng6bnRoLW9mLXR5cGUoMik6aG92ZXIgfiAudGFicy10cmlhbmd1bGFyLTNxLS1ze1xcbiAgICByaWdodDogNzAlO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ0YWJzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtLQUNLLGlCQUFpQjtNQUNoQixZQUFZO01BQ1osU0FBUztNQUNULFFBQVE7TUFDUixRQUFRO01BQ1IsV0FBVztPQUNWLG1DQUFtQztNQUNwQyxvQ0FBb0M7TUFDcEMseUNBQXlDO0FBQy9DOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixtQ0FBbUM7SUFDbkMsZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksVUFBVTtBQUNkXCIsXCJmaWxlXCI6XCJ0YWJzLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIudHJpYW5ndWxhcntcXG4gICAgIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgICAgIHJpZ2h0OiA0OC42JTtcXG4gICAgICBoZWlnaHQ6IDA7XFxuICAgICAgd2lkdGg6IDA7XFxuICAgICAgdG9wOjExMiU7XFxuICAgICAgei1pbmRleDogMzA7XFxuICAgICAgIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICAgIGJvcmRlci1yaWdodDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgICBib3JkZXItdG9wOiAxMHB4IHNvbGlkIHJnYigxNjEsIDIwNywgMjUzKTtcXG59XFxuXFxuLnRhYntcXG4gICAgbWluLXdpZHRoOiAxMTBweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBmb250LXNpemU6XFxcIjEzcHhcXFwiO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxNjEsIDIwNywgMjUzKTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxJTtcXG59XFxuLnRhYjpudGgtb2YtdHlwZSgyKTpob3ZlciB+IC50cmlhbmd1bGFye1xcbiAgICByaWdodDogNzAlO1xcbn1cIl19XSk7XG4vLyBFeHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJ0cmlhbmd1bGFyXCI6IFwidGFicy10cmlhbmd1bGFyLTNxLS1zXCIsXG5cdFwidGFiXCI6IFwidGFicy10YWItRW5DQnhcIlxufTsiLCJcbiAgICB2YXIgcmVmcyA9IDA7XG4gICAgdmFyIGNzcyA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL2NhcmQuY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9pbnNlcnRDc3MuanNcIik7XG4gICAgdmFyIGNvbnRlbnQgPSB0eXBlb2YgY3NzID09PSAnc3RyaW5nJyA/IFtbbW9kdWxlLmlkLCBjc3MsICcnXV0gOiBjc3M7XG5cbiAgICBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBjc3MubG9jYWxzIHx8IHt9O1xuICAgIGV4cG9ydHMuX2dldENvbnRlbnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQ7IH07XG4gICAgZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiAnJyArIGNzczsgfTtcbiAgICBleHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcblxuICAgIC8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbiAgICAvLyBodHRwczovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvaG90LW1vZHVsZS1yZXBsYWNlbWVudFxuICAgIC8vIE9ubHkgYWN0aXZhdGVkIGluIGJyb3dzZXIgY29udGV4dFxuICAgIGlmIChtb2R1bGUuaG90ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgdmFyIHJlbW92ZUNzcyA9IGZ1bmN0aW9uKCkge307XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1ydWxlcy0yIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0zIS4vY2FyZC5jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNzcyA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL2NhcmQuY3NzXCIpO1xuICAgICAgICBjb250ZW50ID0gdHlwZW9mIGNzcyA9PT0gJ3N0cmluZycgPyBbW21vZHVsZS5pZCwgY3NzLCAnJ11dIDogY3NzO1xuICAgICAgICByZW1vdmVDc3MgPSBpbnNlcnRDc3MoY29udGVudCwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHJlbW92ZUNzcygpOyB9KTtcbiAgICB9XG4gICIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL3VzZVN0eWxlcydcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IENhcmQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZCc7XG5pbXBvcnQgQ2FyZEFjdGlvbkFyZWEgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbkFyZWEnO1xuaW1wb3J0IENhcmRBY3Rpb25zIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25zJztcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudCc7XG5pbXBvcnQgQ2FyZE1lZGlhIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRNZWRpYSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBzIGZyb20gJy4vY2FyZC5jc3MnO1xuXG5jb25zdCB1c2VzdHlsZXMgPSBtYWtlU3R5bGVzKHtcbiAgICByb290OiB7XG4gICAgICAgIG1heFdpZHRoOiAzNDUsXG4gICAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbWdNZWRpYUNhcmQoKSB7XG4gICB1c2VTdHlsZXMocyk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPENhcmQgY2xhc3NOYW1lPXtzLmNhcmRiYWNrfSA+XG4gICAgICAgICAgICA8Q2FyZEFjdGlvbkFyZWE+XG4gICAgICAgICAgICAgICAgPCBpbWcgc3JjPVwiaHR0cDovL2Fncm9iaW9zb25saW5lLmNvbS9ib29rc19jb3ZlcnBhZ2VzLzA2MjYwOTA4XzY4NS5qcGdcIlxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJwaWNcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gdmFyaWFudD1cImg2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgIEVsZW1lbnRhcnkgQm90b255XG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIEVsZW1lbnRhcnkgQm90b255XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIE1SUDozNDVcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgQXV0aG9yZWQgQnk6UGVyc29uMVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVsZWFzZWQgSW46IDIwMjBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgICAgICA8L0NhcmRBY3Rpb25BcmVhPlxuICAgICAgICA8L0NhcmQ+XG4gICAgKTtcbn1cblxuXG5cblxuIiwiXG4gICAgdmFyIHJlZnMgPSAwO1xuICAgIHZhciBjc3MgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LXJ1bGVzLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTMhLi9jYXJkR3JpZC5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2luc2VydENzcy5qc1wiKTtcbiAgICB2YXIgY29udGVudCA9IHR5cGVvZiBjc3MgPT09ICdzdHJpbmcnID8gW1ttb2R1bGUuaWQsIGNzcywgJyddXSA6IGNzcztcblxuICAgIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGNzcy5sb2NhbHMgfHwge307XG4gICAgZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBleHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuICcnICsgY3NzOyB9O1xuICAgIGV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuXG4gICAgLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuICAgIC8vIGh0dHBzOi8vd2VicGFjay5naXRodWIuaW8vZG9jcy9ob3QtbW9kdWxlLXJlcGxhY2VtZW50XG4gICAgLy8gT25seSBhY3RpdmF0ZWQgaW4gYnJvd3NlciBjb250ZXh0XG4gICAgaWYgKG1vZHVsZS5ob3QgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50KSB7XG4gICAgICB2YXIgcmVtb3ZlQ3NzID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LXJ1bGVzLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTMhLi9jYXJkR3JpZC5jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNzcyA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL2NhcmRHcmlkLmNzc1wiKTtcbiAgICAgICAgY29udGVudCA9IHR5cGVvZiBjc3MgPT09ICdzdHJpbmcnID8gW1ttb2R1bGUuaWQsIGNzcywgJyddXSA6IGNzcztcbiAgICAgICAgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKGNvbnRlbnQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyByZW1vdmVDc3MoKTsgfSk7XG4gICAgfVxuICAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuaW1wb3J0IEJvb2sgZnJvbSBcIi4vY2FyZFwiXG5pbXBvcnQgQm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JveCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL3VzZVN0eWxlcydcbmltcG9ydCBzIGZyb20gJy4vY2FyZEdyaWQuY3NzJ1xuXG5jb25zdCB1c2VzdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgICByb290OiB7XG4gICAgICAgIGZsZXhHcm93OiAwLFxuICAgIH0sXG4gICAgcGFwZXI6IHtcbiAgICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZyg0KSxcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnksXG4gICAgfSxcbn0pKTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENlbnRlcmVkR3JpZCgpIHtcbiAgICB1c2VTdHlsZXMocylcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlc3R5bGVzKCk7XG4gICAgY29uc3QgW2luZGV4LCBzZXRJbmRleF0gPSBSZWFjdC51c2VTdGF0ZSg1KTtcbiAgICBjb25zdCBbaW5kZXhGLCBzZXRJbmRleEZdID0gUmVhY3QudXNlU3RhdGUoLTEpO1xuICAgIGxldCBzY3JvbGxlciA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VOZXh0ID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIHNldEluZGV4KGluZGV4ICsgMSk7XG4gICAgICAgIHNldEluZGV4RihpbmRleEYgKyAxKTtcbiAgICAgICAgY29uc29sZS5sb2coaW5kZXgpO1xuICAgICAgICBjb25zb2xlLmxvZyhpbmRleEYpO1xuICAgICAgICBzY3JvbGxlci5jaGlsZE5vZGVzW2luZGV4XS5jaGlsZE5vZGVzWzBdLnNjcm9sbEludG9WaWV3KHtcbiAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VQcmV2ID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZihpbmRleEY+PTApe1xuICAgICAgICAgICAgICAgIHNjcm9sbGVyLmNoaWxkTm9kZXNbaW5kZXhGXS5jaGlsZE5vZGVzWzBdLnNjcm9sbEludG9WaWV3KHtcbiAgICAgICAgICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHNldEluZGV4KGluZGV4IC0gMSk7XG4gICAgICAgICAgICAgICAgc2V0SW5kZXhGKGluZGV4RiAtIDEpO1xuICAgICAgICAgICAgfVxuXG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5zY3JvbGxiYXJ9IHdpZHRoPVwiMTAwJVwiID5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17cy5tb3ZlUmlnaHR9ICBvbkNsaWNrPXtoYW5kbGVDaGFuZ2VOZXh0fT5cbiAgICAgICAgICAgICAgICB7XCI+XCJ9XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e3MubW92ZUxlZnR9IG9uQ2xpY2s9e2hhbmRsZUNoYW5nZVByZXZ9PlxuICAgICAgICAgICAgICAgIHtcIjxcIn1cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cblxuXG4gICAgICAgICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIgZmxleERpcmVjdGlvbj1cInJvd1wiIG09ezF9IGNsYXNzTmFtZT17cy5ub1Njcm9sbH0gcmVmPXsoZWwpID0+IHsgc2Nyb2xsZXIgPSBlbDsgfX0gPlxuICAgICAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9ICBlbGV2YXRpb249ezB9PiA8Qm9vay8+IDwvUGFwZXI+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0gZWxldmF0aW9uPXswfT4gPEJvb2sgLz4gPC9QYXBlcj5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfSBlbGV2YXRpb249ezB9PiA8Qm9vayAvPiA8L1BhcGVyPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9IGVsZXZhdGlvbj17MH0+IDxCb29rIC8+IDwvUGFwZXI+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0gZWxldmF0aW9uPXswfT4gPEJvb2sgLz4gPC9QYXBlcj5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfSBlbGV2YXRpb249ezB9ID4gPEJvb2sgLz4gPC9QYXBlcj5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfSBlbGV2YXRpb249ezB9PiA8Qm9vayAvPiA8L1BhcGVyPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9IGVsZXZhdGlvbj17MH0+IDxCb29rIC8+IDwvUGFwZXI+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0gZWxldmF0aW9uPXswfT4gPEJvb2sgLz4gPC9QYXBlcj5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfSBlbGV2YXRpb249ezB9PiA8Qm9vayAvPiA8L1BhcGVyPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9IGVsZXZhdGlvbj17MH0+IDxCb29rIC8+IDwvUGFwZXI+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0gZWxldmF0aW9uPXswfT4gPEJvb2sgLz4gPC9QYXBlcj5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfSBlbGV2YXRpb249ezB9PiA8Qm9vayAvPiA8L1BhcGVyPlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvdXNlU3R5bGVzJ1xuaW1wb3J0IHMgZnJvbSAnLi9jYXJvdXNlbC5zY3NzJ1xuaW1wb3J0IHsgVHdlZW5NYXgsIFRpbWVsaW5lTGl0ZSwgUG93ZXIzLCBQb3dlcjIsIFNsb3dNb30gZnJvbSAnZ1NhcCc7XG5pbXBvcnQgaW1nIGZyb20nLi93YXZlLXNtYWxsLnBuZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpbXBsZVNsaWRlKCkge1xuICAgIGxldCBhcHA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgICBsZXQgaW1hZ2VzPVJlYWN0LnVzZVJlZihudWxsKTtcbiAgICBsZXQgY29udGVudCA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgICBsZXQgb3ZlcmxheT1SZWFjdC51c2VSZWYobnVsbClcbiAgICBsZXQgdGw9IG5ldyBUaW1lbGluZUxpdGUoe2RlbGF5Oi44fSk7XG4gICAgUmVhY3QudXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGNvbnN0IGZJbWFnZT1pbWFnZXMuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgIGNvbnN0IHNJbWFnZSA9IGltYWdlcy5jaGlsZE5vZGVzWzFdO1xuICAgICAgICBjb25zdCB0SW1hZ2UgPSBpbWFnZXMuY2hpbGROb2Rlc1syXVxuXG4gICAgICAgIGNvbnN0IGhlYWRsaW5lMT0gY29udGVudC5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMF07XG4gICAgICAgIGNvbnN0IGhlYWRsaW5lMiA9IGNvbnRlbnQuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzFdO1xuICAgICAgICBjb25zdCBoZWFkbGluZTMgPSBjb250ZW50LmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1syXTtcblxuICAgICAgICBUd2Vlbk1heC50byhhcHAsMCx7Y3NzOnt2aXNpYmlsaXR5OlwidmlzaWJsZVwifX0pXG4gICAgICAgIHRsLmZyb21UbyhvdmVybGF5LCAxLjIsIHsgeDogMCB9LCB7IHg6IDE1NjAsIGVhc2U6IFBvd2VyMi5lYXNlT3V0IH0sJ1N0YXJ0JylcbiAgICAgICAgICAgIC5mcm9tKGZJbWFnZSwgMS4yLCB7IHk6IDEyODAsIGVhc2U6IFBvd2VyMy5lYXNlT3V0IH0sIDEpXG4gICAgICAgICAgLmZyb20oZkltYWdlLmZpcnN0RWxlbWVudENoaWxkLDIse3NjYWxlOjEuNixlYXNlOlBvd2VyMy5lYXNlT3V0fSwxLjIpXG4gICAgICAgICAgICAuZnJvbShzSW1hZ2UsIDEuMiwgeyB5OiAxMjgwLCBlYXNlOiBQb3dlcjMuZWFzZU91dCB9LDEuMilcbiAgICAgICAgICAgIC5mcm9tKHNJbWFnZS5maXJzdEVsZW1lbnRDaGlsZCwgMiwgeyBzY2FsZTogMS42LCBlYXNlOiBQb3dlcjMuZWFzZU91dCB9LCAxLjIpXG4gICAgICAgICAgICAuZnJvbSh0SW1hZ2UsIDEuMiwgeyB5OiAxMjgwLCBlYXNlOiBQb3dlcjMuZWFzZU91dCB9LCAxLjQpXG4gICAgICAgICAgICAuZnJvbSh0SW1hZ2UuZmlyc3RFbGVtZW50Q2hpbGQsIDIsIHsgc2NhbGU6IDEuNiwgZWFzZTogUG93ZXIzLmVhc2VPdXQgfSwgMS40KVxuXG4gICAgICAgICAgICB0bC5zdGFnZ2VyRnJvbShbaGVhZGxpbmUxLmNoaWxkcmVuLGhlYWRsaW5lMi5jaGlsZHJlbixoZWFkbGluZTMuY2hpbGRyZW5dLDEse1xuICAgICAgICAgICAgICAgIHk6NDAsXG4gICAgICAgICAgICAgICAgZWFzZTogUG93ZXIzLmVhc2VPdXQsXG4gICAgICAgICAgICB9LDAuMTUsJ1N0YXJ0JylcbiAgICB9KVxuICAgIHVzZVN0eWxlcyhzKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmhlcm99IHJlZj17KGVsKT0+e2FwcD1lbDt9fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLm92ZXJsYXl9IHJlZj17KGVsKSA9PiB7IG92ZXJsYXkgPSBlbDsgfX0+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5jb250YWluZXJ9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmhlcm9Jbm5lcn0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmhlcm9Db250ZW50fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmhlcm9Db250ZW50SW5uZXJ9IHJlZj17KGVsKSA9PiB7IGNvbnRlbnQgPSBlbDsgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5oZXJvQ29udGVudExpbmV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuaGVyb0NvbnRlbnRMaW5lSW5uZXJ9PkJydXNoIFVwIFlvdXIgS25vd2xlZGdlPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5oZXJvQ29udGVudExpbmV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuaGVyb0NvbnRlbnRMaW5lSW5uZXJ9PlNhbGVzIHVwdG8gNzAlPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5oZXJvQ29udGVudExpbmV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuaGVyb0NvbnRlbnRMaW5lSW5uZXJ9PkFncmljdWx0dXJlL0hvbWUgU2NpZW5jZS9FY29ub21pY3M8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5oZXJvSW1hZ2VzfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmhlcm9JbWFnZXNJbm5lcn0gcmVmPXsoZWwpID0+IHsgaW1hZ2VzID0gZWw7IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuZmlyc3RJbWFnZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwOi8vYWdyb2Jpb3NvbmxpbmUuY29tL2Jvb2tzX2NvdmVycGFnZXMvMDYyNjA5MDhfNjg1LmpwZ1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Muc2Vjb25kSW1hZ2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cDovL2Fncm9iaW9zb25saW5lLmNvbS9ib29rc19jb3ZlcnBhZ2VzLzA2MjYwOTA4XzY4NS5qcGdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MudGhpcmRJbWFnZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwOi8vYWdyb2Jpb3NvbmxpbmUuY29tL2Jvb2tzX2NvdmVycGFnZXMvMDYyNjA5MDhfNjg1LmpwZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiIsIlxuICAgIHZhciByZWZzID0gMDtcbiAgICB2YXIgY3NzID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1ydWxlcy0yIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0zIS4vY2Fyb3VzZWwuc2Nzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvaW5zZXJ0Q3NzLmpzXCIpO1xuICAgIHZhciBjb250ZW50ID0gdHlwZW9mIGNzcyA9PT0gJ3N0cmluZycgPyBbW21vZHVsZS5pZCwgY3NzLCAnJ11dIDogY3NzO1xuXG4gICAgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gY3NzLmxvY2FscyB8fCB7fTtcbiAgICBleHBvcnRzLl9nZXRDb250ZW50ID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50OyB9O1xuICAgIGV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gJycgKyBjc3M7IH07XG4gICAgZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG5cbiAgICAvLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG4gICAgLy8gaHR0cHM6Ly93ZWJwYWNrLmdpdGh1Yi5pby9kb2NzL2hvdC1tb2R1bGUtcmVwbGFjZW1lbnRcbiAgICAvLyBPbmx5IGFjdGl2YXRlZCBpbiBicm93c2VyIGNvbnRleHRcbiAgICBpZiAobW9kdWxlLmhvdCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICAgIHZhciByZW1vdmVDc3MgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL2Nhcm91c2VsLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNzcyA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL2Nhcm91c2VsLnNjc3NcIik7XG4gICAgICAgIGNvbnRlbnQgPSB0eXBlb2YgY3NzID09PSAnc3RyaW5nJyA/IFtbbW9kdWxlLmlkLCBjc3MsICcnXV0gOiBjc3M7XG4gICAgICAgIHJlbW92ZUNzcyA9IGluc2VydENzcyhjb250ZW50LCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gICAgICB9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgcmVtb3ZlQ3NzKCk7IH0pO1xuICAgIH1cbiAgIiwiXG4gICAgdmFyIHJlZnMgPSAwO1xuICAgIHZhciBjc3MgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LXJ1bGVzLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTMhLi9ncmlkLmNzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvaW5zZXJ0Q3NzLmpzXCIpO1xuICAgIHZhciBjb250ZW50ID0gdHlwZW9mIGNzcyA9PT0gJ3N0cmluZycgPyBbW21vZHVsZS5pZCwgY3NzLCAnJ11dIDogY3NzO1xuXG4gICAgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gY3NzLmxvY2FscyB8fCB7fTtcbiAgICBleHBvcnRzLl9nZXRDb250ZW50ID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50OyB9O1xuICAgIGV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gJycgKyBjc3M7IH07XG4gICAgZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG5cbiAgICAvLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG4gICAgLy8gaHR0cHM6Ly93ZWJwYWNrLmdpdGh1Yi5pby9kb2NzL2hvdC1tb2R1bGUtcmVwbGFjZW1lbnRcbiAgICAvLyBPbmx5IGFjdGl2YXRlZCBpbiBicm93c2VyIGNvbnRleHRcbiAgICBpZiAobW9kdWxlLmhvdCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICAgIHZhciByZW1vdmVDc3MgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL2dyaWQuY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjc3MgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LXJ1bGVzLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTMhLi9ncmlkLmNzc1wiKTtcbiAgICAgICAgY29udGVudCA9IHR5cGVvZiBjc3MgPT09ICdzdHJpbmcnID8gW1ttb2R1bGUuaWQsIGNzcywgJyddXSA6IGNzcztcbiAgICAgICAgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKGNvbnRlbnQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyByZW1vdmVDc3MoKTsgfSk7XG4gICAgfVxuICAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XG5pbXBvcnQgTGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0JztcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbSc7XG5pbXBvcnQgcyBmcm9tICcuL2dyaWQuY3NzJyBcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvdXNlU3R5bGVzJ1xuXG5cbmNvbnN0IHVzZXN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICAgIHJvb3Q6IHtcbiAgICAgICAgZmxleEdyb3c6IDEsXG4gICAgfSxcbiAgICBwYXBlcjoge1xuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeSxcbiAgICB9LFxuICAgIFxufSkpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDZW50ZXJlZEdyaWQoKSB7XG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZXN0eWxlcygpO1xuICAgIHVzZVN0eWxlcyhzKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSA+XG4gICAgICAgICAgICA8R3JpZCBzbSBjb250YWluZXIgc3BhY2luZz17NSwwfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFwZXIgZWxldmF0aW9uPXswfSBjbGFzc05hbWU9e3Muc3ViTGlzdFRpdGxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5BZ3JpY3VsdHVyYWwgU2NpZW5jZXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdCBkZW5zZT1cInRydWVcIiBzdHlsZT17eyBmb250U2l6ZTogXCIxNHB4XCIsIHBhZGRpbmc6IFwiMHB4XCJ9fSBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtICBzdHlsZT17e3BhZGRpbmdSaWdodDpcIjBweFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgNXRoIERlYW5zIENvbW1pdHRlZVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBzdHlsZT17e3BhZGRpbmdSaWdodDpcIjBweFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICA1dGggRGVhbnMgQ29tbWl0dGVlIChBcyBQZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIHN0eWxlPXt7cGFkZGluZ1JpZ2h0OlwiMHB4XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICBBZ3JpYnVzaW5lc3NcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gc3R5bGU9e3twYWRkaW5nUmlnaHQ6XCIwcHhcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFncmljdWx0dXJhbCBDaGVtaXN0cnlcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gc3R5bGU9e3twYWRkaW5nUmlnaHQ6XCIwcHhcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFncmljdWx0dXJhbCBXYXN0ZSBBbmQgTWFuYWdlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBzdHlsZT17e3BhZGRpbmdSaWdodDpcIjBweFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQWdyb2NoZW1pY2Fsc1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBzdHlsZT17e3BhZGRpbmdSaWdodDpcIjBweFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQWdyb2ZvcmVzdHJ5XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIHN0eWxlPXt7cGFkZGluZ1JpZ2h0OlwiMHB4XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICBBZ3JvbWV0ZW9yb2xvZ3ksIFJlbW90ZSBTZW5zaW5nICYgR2lzXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIHN0eWxlPXt7cGFkZGluZ1JpZ2h0OlwiMHB4XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZ3Jvbm9teVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBzdHlsZT17e3BhZGRpbmdSaWdodDpcIjBweFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQmlvY2hlbWlzdHJ5XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17cy5zdWJMaXN0VGl0bGV9IGVsZXZhdGlvbj17MH0+PHNwYW4+RW52aXJvbm1lbnRhbCBTY2llbmNlcyA8L3NwYW4+PC9QYXBlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0IGRlbnNlPVwidHJ1ZVwiIHN0eWxlPXt7IGZvbnRTaXplOiBcIjE0cHhcIiwgcGFkZGluZzogXCIwcHhcIiB9fSBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBzdHlsZT17eyBwYWRkaW5nUmlnaHQ6IFwiMHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWlyIEVudmlyb25tZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gc3R5bGU9e3sgcGFkZGluZ1JpZ2h0OiBcIjBweFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERpc2FzdGVyIE1hbmFnZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBzdHlsZT17e3BhZGRpbmdSaWdodDpcIjBweFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRW52aXJvbm1lbnQgRWR1Y2F0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gc3R5bGU9e3twYWRkaW5nUmlnaHQ6XCIwcHhcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVudmlyb25tZW50YWwgQW5hbHlzaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBzdHlsZT17e3BhZGRpbmdSaWdodDpcIjBweFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRW52aXJvbm1lbnRhbCBCaW90ZWNobm9sb2d5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gc3R5bGU9e3twYWRkaW5nUmlnaHQ6XCIwcHhcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdsb2JhbCBXYXJtaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gc3R5bGU9e3twYWRkaW5nUmlnaHQ6XCIwcHhcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1pY3JvYmlvbG9neVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIHN0eWxlPXt7cGFkZGluZ1JpZ2h0OlwiMHB4XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOYXR1cmFsIFJlc291cmNlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9PlxuICAgICAgICAgICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtzLnN1Ykxpc3RUaXRsZX0gZWxldmF0aW9uPXswfT48c3Bhbj5MaWZlIFNjaWVuY2U8L3NwYW4+PC9QYXBlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0IGRlbnNlPVwidHJ1ZVwiIHN0eWxlPXt7IGZvbnRTaXplOiBcIjE0cHhcIiwgcGFkZGluZzogXCIwcHhcIiB9fSBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIHN0eWxlPXt7cGFkZGluZ1JpZ2h0OlwiMHB4XCJ9fT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCaW9jaGVtaXN0cnlcIlxuICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIHN0eWxlPXt7cGFkZGluZ1JpZ2h0OlwiMHB4XCJ9fT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCaW90ZWNobm9sb2d5XCJcbiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gc3R5bGU9e3twYWRkaW5nUmlnaHQ6XCIwcHhcIn19PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJvdGFueVwiXG4gICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBzdHlsZT17e3BhZGRpbmdSaWdodDpcIjBweFwifX0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGV2ZWxvcG1lbnRhbCBCaW9sb2dcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBzdHlsZT17e3BhZGRpbmdSaWdodDpcIjBweFwifX0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRWNvbm9taWMgQm90YW55XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBzdHlsZT17e3BhZGRpbmdSaWdodDpcIjBweFwifX0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRXRobm9ib3RhbnlcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIHN0eWxlPXt7cGFkZGluZ1JpZ2h0OlwiMHB4XCJ9fT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHZW5ldGljc1xuICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIHN0eWxlPXt7cGFkZGluZ1JpZ2h0OlwiMHB4XCJ9fT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIb21lIFNjaWVuY2VcbiAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBzdHlsZT17e3BhZGRpbmdSaWdodDpcIjBweFwifX0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSHVtYW4gSGVhbHRoXG4gICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gc3R5bGU9e3twYWRkaW5nUmlnaHQ6XCIwcHhcIn19PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1lZGljaW5hbCAmIEFyb21hdGljUGxhbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtzLnN1Ykxpc3RUaXRsZX0gZWxldmF0aW9uPXswfT48c3Bhbj5WZXRlcmluYXJ5IGFuZCBBbmltYWwgU2NpZW5jZTwvc3Bhbj48L1BhcGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QgZGVuc2U9XCJ0cnVlXCIgc3R5bGU9e3sgZm9udFNpemU6IFwiMTRweFwiLCBwYWRkaW5nOiBcIjBweFwiIH19IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gc3R5bGU9e3twYWRkaW5nUmlnaHQ6XCIwcHhcIn19PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFuaW1hbCBCZWhhdmlvdXJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gc3R5bGU9e3twYWRkaW5nUmlnaHQ6XCIwcHhcIn19PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFuaW1hbCBCaW90ZWNobm9sb2d5XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gc3R5bGU9e3twYWRkaW5nUmlnaHQ6XCIwcHhcIn19PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFuaW1hbCBCcmVlZGluZ1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gc3R5bGU9e3twYWRkaW5nUmlnaHQ6XCIwcHhcIn19PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFuaW1hbCBEaXNlYXNlc1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gc3R5bGU9e3twYWRkaW5nUmlnaHQ6XCIwcHhcIn19PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFuaW1hbCBFY29sb2d5XG4gICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBzdHlsZT17e3BhZGRpbmdSaWdodDpcIjBweFwifX0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQW5pbWFsIEh1c2JhbmRyeVxuICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIHN0eWxlPXt7cGFkZGluZ1JpZ2h0OlwiMHB4XCJ9fT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBbmltYWwgTnV0cml0aW9uXG4gICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gc3R5bGU9e3twYWRkaW5nUmlnaHQ6XCIwcHhcIn19PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFuaW1hbCBQcm9kdWN0c1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gc3R5bGU9e3twYWRkaW5nUmlnaHQ6XCIwcHhcIn19PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJlZWtlZXBpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIHN0eWxlPXt7cGFkZGluZ1JpZ2h0OlwiMHB4XCJ9fT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYWlyeSBTY2llbmNlXG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgIHsvKiA8R3JpZCBpdGVtIHhzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFBhcGVyIHN0eWxlPXt7IG1hcmdpbjogXCIwcHhcIiwgcGFkZGluZ0JvdHRvbTogXCIwcHhcIiwgcGFkZGluZ0xlZnQ6XCI4cHhcIiB9fSBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9IGVsZXZhdGlvbj17MH0+SGluZGkgQm9va3M8L1BhcGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3Qgc3R5bGU9e3sgZm9udFNpemU6IFwiMTRweFwiLCBwYWRkaW5nOiBcIjBweFwiIH19IGRlbnNlPVwidHJ1ZVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gc3R5bGU9e3twYWRkaW5nUmlnaHQ6XCIwcHhcIn19PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFncmljdWx0dXJhbCBTY2llbmNlXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gc3R5bGU9e3twYWRkaW5nUmlnaHQ6XCIwcHhcIn19PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExpZmUgU2NpZW5jZXNcbiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gc3R5bGU9e3twYWRkaW5nUmlnaHQ6XCIwcHhcIn19PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZldGVyaW5hcnkgQW5kIEFuaW1hbCBTY2llbmNlXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0gPlxuICAgICAgICAgICAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM+XG4gICAgICAgICAgICAgICAgICAgIDxQYXBlciBzdHlsZT17eyBtYXJnaW46IFwiMHB4XCIsIHBhZGRpbmdCb3R0b206IFwiMHB4XCIgfX0gY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfSBlbGV2YXRpb249ezB9PlRleHRib29rPC9QYXBlcj5cbiAgICAgICAgICAgICAgICAgICAgPExpc3QgZGVuc2U9XCJ0cnVlXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBzdHlsZT17e3BhZGRpbmdSaWdodDpcIjBweFwifX0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWdyaWN1bHR1cmFsIFNjaWVuY2VcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBzdHlsZT17e3BhZGRpbmdSaWdodDpcIjBweFwifX0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRW52aXJvbm1lbnRhbCBTY2llbmNlc1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIHN0eWxlPXt7cGFkZGluZ1JpZ2h0OlwiMHB4XCJ9fT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBIaW5kaSBUZXh0Ym9va3NcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIHN0eWxlPXt7cGFkZGluZ1JpZ2h0OlwiMHB4XCJ9fT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMaWZlIFNjaWVuY2VzXG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtIHN0eWxlPXt7cGFkZGluZ1JpZ2h0OlwiMHB4XCJ9fT4gXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGhhcm1hY3lcbiAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBzdHlsZT17e3BhZGRpbmdSaWdodDpcIjBweFwifX0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmV0ZXJpbmFyeSBBbmQgQW5pbWFsIFNjaWVuY2VzXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgICAgICAgICA8L0dyaWQ+ICovfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBMaXN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3QnO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtJztcbmltcG9ydCBMaXN0SXRlbUF2YXRhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbUF2YXRhcic7XG5pbXBvcnQgTGlzdEl0ZW1JY29uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtSWNvbic7XG5pbXBvcnQgTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24nO1xuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHQnO1xuaW1wb3J0IEF2YXRhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXInO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XG5pbXBvcnQgRm9ybUdyb3VwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Hcm91cCc7XG5pbXBvcnQgRm9ybUNvbnRyb2xMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbExhYmVsJztcbmltcG9ydCBDaGVja2JveCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DaGVja2JveCc7XG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IEZvbGRlckljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0ZvbGRlcic7XG5cblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gICAgcm9vdDoge1xuICAgICAgICBmbGV4R3JvdzogMSxcblxuICAgIH0sXG4gICAgZGVtbzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2Y0ZjNmM1wiLFxuICAgIH0sXG4gICAgdGl0bGU6IHtcbiAgICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDQsIDAsIDIpLFxuICAgIH0sXG59KSk7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gWzAsIDEsIDJdLm1hcCgodmFsdWUpID0+XG4gICAgICAgIFJlYWN0LmNsb25lRWxlbWVudChlbGVtZW50LCB7XG4gICAgICAgICAgICBrZXk6IHZhbHVlLFxuICAgICAgICB9KSxcbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnRlcmFjdGl2ZUxpc3QoKSB7XG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiNmNGYzZjNcIiB9fT5cbiAgICAgICAgICAgXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XG4gICAgICAgICAgICAgICAgPEdyaWQgbWQ9ezF9PlxuXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgIDxHcmlkIG1kPXsxMH0+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezN9PlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgSW5mb3JtYXRpb25cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRlbW99PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbGRlckljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnk9XCJDb3RhY3QgVXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9sZGVySWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeT1cIkFib3V0IFVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbGRlckljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnk9XCJJbnZpdGF0aW9uIHRvIEF1dGhvcnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9sZGVySWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeT1cIkNvcHlyaWdodCBhbmQgVHJhZGVtYXJrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb2xkZXJJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5PVwiV3JpdGluZyBBIEJvb2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbGRlckljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnk9XCJQdWJsaXNoaW5nIFByb2Nlc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbGRlckljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnk9XCJQcml2YWN5IFBvbGljeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9sZGVySWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeT1cIlByaWNpbmcgSW5mb3JtYXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbGRlckljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnk9XCJBY2N1cmFjeSBPZiBDb250ZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0dyaWQ+XG5cbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezR9PlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgQ1VTVE9NRVIgU0VSVklDRVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGVtb30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9sZGVySWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeT1cIkRlbGl2ZXJ5IEluZm9ybWF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb2xkZXJJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5PVwiU2hpcHBpbmcgUmF0ZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbGRlckljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnk9XCJDYW5jZWxsYXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbGRlckljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnk9XCJSZXR1cm5zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb2xkZXJJY29uIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5PVwiRGlzY2xhaW1lciBvZiBXYXJyYW50eVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9sZGVySWNvbiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeT1cIkxpbWl0YXRpb24gb2YgTGlhYmlsaXR5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs0fT5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFib3V0IEFncm9iaW9zIE9ubGluZVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cblRocm91Z2hvdXQgdGhlIHdvcmxkLCB3ZSBwcm92aWRlIHNjaWVudGlmaWMgYW5kIHByb2Zlc3Npb25hbCBjb21tdW5pdGllcyB3aXRoIHN1cGVyaW9yIHNwZWNpYWxpc3QgaW5mb3JtYXRpb24g4oCTIHByb2R1Y2VkIGJ5IGF1dGhvcnMgYW5kIGNvbGxlYWd1ZXMgYWNyb3NzIHRoZSB3b3JsZC5cblxuV2UgYXJlIGNvbW1pdHRlZCB0byBxdWFsaXR5IHByb2R1Y3Rpb24sIHRob3VnaHQgcHJvdm9raW5nIGNvbnRlbnRzIGFuZCBoaWdoZXN0IHN0YW5kYXJkIG9mIGV0aGljYWwgYmVoYXZpb3IsIGJlc2lkZXMgY291cnRlb3VzIGFuZCBoaWdobHkgcGVyc29uYWxpemVkIHNlcnZpY2VzLlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIERpc2NsYWltZXJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIG1kPXsxfT5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59IiwiXG4gICAgdmFyIHJlZnMgPSAwO1xuICAgIHZhciBjc3MgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LXJ1bGVzLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTMhLi9uYXZCYXIuY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9pbnNlcnRDc3MuanNcIik7XG4gICAgdmFyIGNvbnRlbnQgPSB0eXBlb2YgY3NzID09PSAnc3RyaW5nJyA/IFtbbW9kdWxlLmlkLCBjc3MsICcnXV0gOiBjc3M7XG5cbiAgICBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBjc3MubG9jYWxzIHx8IHt9O1xuICAgIGV4cG9ydHMuX2dldENvbnRlbnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQ7IH07XG4gICAgZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiAnJyArIGNzczsgfTtcbiAgICBleHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcblxuICAgIC8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbiAgICAvLyBodHRwczovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvaG90LW1vZHVsZS1yZXBsYWNlbWVudFxuICAgIC8vIE9ubHkgYWN0aXZhdGVkIGluIGJyb3dzZXIgY29udGV4dFxuICAgIGlmIChtb2R1bGUuaG90ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgdmFyIHJlbW92ZUNzcyA9IGZ1bmN0aW9uKCkge307XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1ydWxlcy0yIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0zIS4vbmF2QmFyLmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY3NzID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1ydWxlcy0yIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0zIS4vbmF2QmFyLmNzc1wiKTtcbiAgICAgICAgY29udGVudCA9IHR5cGVvZiBjc3MgPT09ICdzdHJpbmcnID8gW1ttb2R1bGUuaWQsIGNzcywgJyddXSA6IGNzcztcbiAgICAgICAgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKGNvbnRlbnQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyByZW1vdmVDc3MoKTsgfSk7XG4gICAgfVxuICAiLCJcbiAgICB2YXIgcmVmcyA9IDA7XG4gICAgdmFyIGNzcyA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL3BvcG92ZXIuY3NzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9pbnNlcnRDc3MuanNcIik7XG4gICAgdmFyIGNvbnRlbnQgPSB0eXBlb2YgY3NzID09PSAnc3RyaW5nJyA/IFtbbW9kdWxlLmlkLCBjc3MsICcnXV0gOiBjc3M7XG5cbiAgICBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBjc3MubG9jYWxzIHx8IHt9O1xuICAgIGV4cG9ydHMuX2dldENvbnRlbnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQ7IH07XG4gICAgZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiAnJyArIGNzczsgfTtcbiAgICBleHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcblxuICAgIC8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbiAgICAvLyBodHRwczovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvaG90LW1vZHVsZS1yZXBsYWNlbWVudFxuICAgIC8vIE9ubHkgYWN0aXZhdGVkIGluIGJyb3dzZXIgY29udGV4dFxuICAgIGlmIChtb2R1bGUuaG90ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgdmFyIHJlbW92ZUNzcyA9IGZ1bmN0aW9uKCkge307XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1ydWxlcy0yIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0zIS4vcG9wb3Zlci5jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNzcyA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL3BvcG92ZXIuY3NzXCIpO1xuICAgICAgICBjb250ZW50ID0gdHlwZW9mIGNzcyA9PT0gJ3N0cmluZycgPyBbW21vZHVsZS5pZCwgY3NzLCAnJ11dIDogY3NzO1xuICAgICAgICByZW1vdmVDc3MgPSBpbnNlcnRDc3MoY29udGVudCwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHJlbW92ZUNzcygpOyB9KTtcbiAgICB9XG4gICIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBQb3BvdmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BvcG92ZXInO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgQ2VudGVyZWRHcmlkIGZyb20gJy4vZ3JpZCdcbmltcG9ydCBzIGZyb20gJy4vcG9wb3Zlci5jc3MnXG5pbXBvcnQgRXhwYW5kTW9yZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZE1vcmUnO1xuaW1wb3J0IEV4cGFuZExlc3NJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRMZXNzJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gICAgdHlwb2dyYXBoeToge1xuICAgICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIH0sXG4gICAgbWVudU9wdG46IHtcbiAgICAgICAgYm9yZGVyOiAwLFxuICAgICAgICBiYWNrZ3JvdW5kOid0cmFuc3BhcmVudCcsXG4gICAgICAgIGJvcmRlclJhZGl1czogMyxcbiAgICAgICAgY29sb3I6ICdibGFjaycsXG4gICAgICAgIGhlaWdodDogNDAsXG4gICAgICAgIHBhZGRpbmdSaWdodDogJzAgMnB4JyxcbiAgICAgICAgbWFyZ2luUmlnaHQ6ICcycHgnLFxuICAgICAgICBtYXJnaW5MZWZ0OicyMHB4JyxcbiAgICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcbiAgICAgICAgZm9udFdlaWdodDogJzQwMCdcbiAgICB9LFxufSkpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaW1wbGVQb3BvdmVyKCkge1xuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgICBjb25zdCBzdD11c2VTdHlsZXMocyk7XG4gICAgY29uc3QgW2FuY2hvckVsLCBzZXRBbmNob3JFbF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIHNldEFuY2hvckVsKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICAgICAgc2V0QW5jaG9yRWwobnVsbCk7XG4gICAgfTtcblxuICAgIGNvbnN0IG9wZW4gPSBCb29sZWFuKGFuY2hvckVsKTtcbiAgICBjb25zdCBpZCA9IG9wZW4gPyAnc2ltcGxlLXBvcG92ZXInIDogdW5kZWZpbmVkO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxCdXR0b24gYXJpYS1kZXNjcmliZWRieT17aWR9IGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW51T3B0bn0gdmFyaWFudD1cImNvbnRhaW5lZFwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSBlbGV2YXRpb249ezB9PlxuICAgICAgICAgICAgICAgIEJvb2sgQ2F0YWxvZ3VlIHshb3BlbiAmJiA8RXhwYW5kTW9yZUljb24vPn17b3BlbiAmJiA8RXhwYW5kTGVzc0ljb24gLz4gfSBcbiAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPFBvcG92ZXJcbiAgICAgICAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgICAgICAgb3Blbj17b3Blbn1cbiAgICAgICAgICAgICAgICBhbmNob3JFbD17YW5jaG9yRWx9XG4gICAgICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XG4gICAgICAgICAgICAgICAgYW5jaG9yUmVmZXJlbmNlPVwiYW5jaG9yUG9zaXRpb25cIlxuICAgICAgICAgICAgICAgIGFuY2hvclBvc2l0aW9uPXt7IHRvcDogNjUsIGxlZnQ6IDE1MH19XG4gICAgICAgICAgICAgICAgYW5jaG9yT3JpZ2luPXt7XG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsOiAnYm90dG9tJyxcbiAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbDogJzAnLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtT3JpZ2luPXt7XG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsOiAndG9wJyxcbiAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbDogJ2xlZnQnLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgZWxldmF0aW9uPXsxfVxuICAgICAgICAgICAgICAgIGJveFNoYWRvdz0nbm9uZSdcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Q2VudGVyZWRHcmlkIC8+XG4gICAgICAgICAgICA8L1BvcG92ZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cblxuXG5cblxuXG4iLCJcbiAgICB2YXIgcmVmcyA9IDA7XG4gICAgdmFyIGNzcyA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtcnVsZXMtMiEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTUtcnVsZXMtMyEuL3NlYXJjaGJhci5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2luc2VydENzcy5qc1wiKTtcbiAgICB2YXIgY29udGVudCA9IHR5cGVvZiBjc3MgPT09ICdzdHJpbmcnID8gW1ttb2R1bGUuaWQsIGNzcywgJyddXSA6IGNzcztcblxuICAgIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGNzcy5sb2NhbHMgfHwge307XG4gICAgZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBleHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuICcnICsgY3NzOyB9O1xuICAgIGV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuXG4gICAgLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuICAgIC8vIGh0dHBzOi8vd2VicGFjay5naXRodWIuaW8vZG9jcy9ob3QtbW9kdWxlLXJlcGxhY2VtZW50XG4gICAgLy8gT25seSBhY3RpdmF0ZWQgaW4gYnJvd3NlciBjb250ZXh0XG4gICAgaWYgKG1vZHVsZS5ob3QgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50KSB7XG4gICAgICB2YXIgcmVtb3ZlQ3NzID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LXJ1bGVzLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTMhLi9zZWFyY2hiYXIuY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjc3MgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LXJ1bGVzLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTMhLi9zZWFyY2hiYXIuY3NzXCIpO1xuICAgICAgICBjb250ZW50ID0gdHlwZW9mIGNzcyA9PT0gJ3N0cmluZycgPyBbW21vZHVsZS5pZCwgY3NzLCAnJ11dIDogY3NzO1xuICAgICAgICByZW1vdmVDc3MgPSBpbnNlcnRDc3MoY29udGVudCwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHJlbW92ZUNzcygpOyB9KTtcbiAgICB9XG4gICIsIlxuICAgIHZhciByZWZzID0gMDtcbiAgICB2YXIgY3NzID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1ydWxlcy0yIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0zIS4vdGFicy5jc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2luc2VydENzcy5qc1wiKTtcbiAgICB2YXIgY29udGVudCA9IHR5cGVvZiBjc3MgPT09ICdzdHJpbmcnID8gW1ttb2R1bGUuaWQsIGNzcywgJyddXSA6IGNzcztcblxuICAgIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGNzcy5sb2NhbHMgfHwge307XG4gICAgZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBleHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuICcnICsgY3NzOyB9O1xuICAgIGV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuXG4gICAgLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuICAgIC8vIGh0dHBzOi8vd2VicGFjay5naXRodWIuaW8vZG9jcy9ob3QtbW9kdWxlLXJlcGxhY2VtZW50XG4gICAgLy8gT25seSBhY3RpdmF0ZWQgaW4gYnJvd3NlciBjb250ZXh0XG4gICAgaWYgKG1vZHVsZS5ob3QgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50KSB7XG4gICAgICB2YXIgcmVtb3ZlQ3NzID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LXJ1bGVzLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS01LXJ1bGVzLTMhLi90YWJzLmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY3NzID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1ydWxlcy0yIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNS1ydWxlcy0zIS4vdGFicy5jc3NcIik7XG4gICAgICAgIGNvbnRlbnQgPSB0eXBlb2YgY3NzID09PSAnc3RyaW5nJyA/IFtbbW9kdWxlLmlkLCBjc3MsICcnXV0gOiBjc3M7XG4gICAgICAgIHJlbW92ZUNzcyA9IGluc2VydENzcyhjb250ZW50LCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gICAgICB9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgcmVtb3ZlQ3NzKCk7IH0pO1xuICAgIH1cbiAgIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgU3dpcGVhYmxlVmlld3MgZnJvbSAncmVhY3Qtc3dpcGVhYmxlLXZpZXdzJztcbmltcG9ydCB7IGNyZWF0ZU11aVRoZW1lLCBtYWtlU3R5bGVzLCBUaGVtZVByb3ZpZGVyLCB1c2VUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgQXBwQmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FwcEJhcic7XG5pbXBvcnQgVGFicyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJzJztcbmltcG9ydCBUYWIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFiJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IEJveCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Cb3gnO1xuaW1wb3J0IFBpY3MgZnJvbSAnLi9jYXJkR3JpZCc7XG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL3VzZVN0eWxlcyc7XG5pbXBvcnQgcyBmcm9tICcuL3RhYnMuY3NzJztcbmZ1bmN0aW9uIFRhYlBhbmVsKHByb3BzKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgdmFsdWUsIGluZGV4LCAuLi5vdGhlciB9ID0gcHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgICByb2xlPVwidGFicGFuZWxcIlxuICAgICAgICAgICAgaGlkZGVuPXt2YWx1ZSAhPT0gaW5kZXh9XG4gICAgICAgICAgICBpZD17YGZ1bGwtd2lkdGgtdGFicGFuZWwtJHtpbmRleH1gfVxuICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PXtgZnVsbC13aWR0aC10YWItJHtpbmRleH1gfVxuICAgICAgICAgICAgey4uLm90aGVyfVxuICAgICAgICA+XG4gICAgICAgICAgICB7dmFsdWUgPT09IGluZGV4ICYmIChcbiAgICAgICAgICAgICAgICA8Qm94IHA9ezN9PlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT57Y2hpbGRyZW59PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuVGFiUGFuZWwucHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgICBpbmRleDogUHJvcFR5cGVzLmFueS5pc1JlcXVpcmVkLFxuICAgIHZhbHVlOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQsXG59O1xuXG5mdW5jdGlvbiBhMTF5UHJvcHMoaW5kZXgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBpZDogYGZ1bGwtd2lkdGgtdGFiLSR7aW5kZXh9YCxcbiAgICAgICAgJ2FyaWEtY29udHJvbHMnOiBgZnVsbC13aWR0aC10YWJwYW5lbC0ke2luZGV4fWAsXG4gICAgfTtcbn1cblxuY29uc3QgdXNlc3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gICAgcm9vdDoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcbiAgICAgICAgd2lkdGg6NTAwXG4gICAgfSxcbn0pKTtcbmNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xuICAgICAgICBNdWl0YWJzOntcbiAgICAgICAgaW5kaWNhdG9yOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZmZmZlwiLFxuICAgICAgICB9LFxuICAgICAgICAgICAgcm9vdDoge1xuICAgICAgICAgICAgICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJwaW5rXCIsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlbGVjdGVkOiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZmZmZcIixcbiAgICAgICAgICAgICAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzAwMDAwMFwiLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxufSk7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaW1wbGVUYWJzKCkge1xuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VzdHlsZXMoKTtcbiAgICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcbiAgICBsZXQgdHJpYW5nbGU9UmVhY3QudXNlUmVmKG51bGwpO1xuXG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQsIG5ld1ZhbHVlKSA9PiB7XG4gICAgICAgIHNldFZhbHVlKG5ld1ZhbHVlKTtcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZUNoYW5nZUluZGV4ID0gKGluZGV4KSA9PiB7XG4gICAgICAgIHNldFZhbHVlKGluZGV4KTtcbiAgICB9O1xuICAgIHVzZVN0eWxlcyhzKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy50cmlhbmd1bGFyfSByZWY9eyhlbCkgPT4geyB0cmlhbmdsZSA9IGVsOyB9fT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gc3R5bGU9e3sgd2lkdGg6IFwiOTAlXCIsIG1hcmdpbkxlZnQ6IFwiNSVcIixwYWFkaW5nOlwiMCVcIixtYXJnaW5Cb3R0b206XCIxMHB4XCIsbWFyZ2luVG9wOlwiNTdweFwifX0+XG4gICAgICAgICAgICA8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsIG1hcmdpbkxlZnQ6IFwiMzglXCIsd2lkdGg6XCI2MCVcIn19IGVsZXZhdGlvbj17MH0+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJzIHZhbHVlPXt2YWx1ZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gaW5kaWNhdG9yQ29sb3I9XCJyZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiZnVsbCB3aWR0aCB0YWJzIGV4YW1wbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPFRhYiBsYWJlbD1cIk5ldyBBcnJpdmFsc1wiIGNsYXNzTmFtZT17cy50YWJ9IHsuLi5hMTF5UHJvcHMoMCl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFiIGxhYmVsPVwiRmVhdHVyZWRcIiBjbGFzc05hbWU9e3MudGFifSAgey4uLmExMXlQcm9wcygxKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPFRhYiBsYWJlbD1cIkZvcnRoQ29taW5nXCIgY2xhc3NOYW1lPXtzLnRhYn0gey4uLmExMXlQcm9wcygyKX0gLz5cbiAgICAgICAgICAgICAgICA8L1RhYnM+XG4gICAgICAgICAgICA8L0FwcEJhcj5cbiAgICAgICAgICAgICAgICA8U3dpcGVhYmxlVmlld3NcbiAgICAgICAgICAgICAgICAgICAgYXhpcz17dGhlbWUuZGlyZWN0aW9uID09PSAncnRsJyA/ICd4LXJldmVyc2UnIDogJ3gnfVxuICAgICAgICAgICAgICAgICAgICBpbmRleD17dmFsdWV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlSW5kZXg9e2hhbmRsZUNoYW5nZUluZGV4fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPFRhYlBhbmVsIHZhbHVlPXt2YWx1ZX0gaW5kZXg9ezB9IGRpcj17dGhlbWUuZGlyZWN0aW9ufSA+XG4gICAgICAgICAgICAgICAgPFBpY3MvPlxuICAgICAgPC9UYWJQYW5lbD5cbiAgICAgICAgICAgICAgICAgICAgPFRhYlBhbmVsIHZhbHVlPXt2YWx1ZX0gaW5kZXg9ezF9IGRpcj17dGhlbWUuZGlyZWN0aW9ufT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQaWNzIC8+XG4gICAgICA8L1RhYlBhbmVsPlxuICAgICAgICAgICAgPFRhYlBhbmVsIHZhbHVlPXt2YWx1ZX0gaW5kZXg9ezJ9ZGlyPXt0aGVtZS5kaXJlY3Rpb259IGRpcj17dGhlbWUuZGlyZWN0aW9ufT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQaWNzIC8+XG4gICAgICA8L1RhYlBhbmVsPlxuICAgICAgPC9Td2lwZWFibGVWaWV3cz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgICk7XG59XG5cbiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9jb21wb25lbnRzL3dhdmUtc21hbGwucG5nPzQ1N2M3M2FjXCI7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7Ozs7Ozs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBOzs7Ozs7O0FDekVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFKQTtBQVVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQW1FQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBUkE7QUFDQTtBQVlBO0FBQ0E7QUFFQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBOzs7Ozs7O0FDak5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFKQTtBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQWhCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFrQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7Ozs7Ozs7QUN2RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQVRBO0FBREE7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7Ozs7Ozs7QUNuSEE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==