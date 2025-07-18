/*! Plugin swiper: 0.1.2 - "2c4926418333c1aad3c59dd0ffe90ead64431cc4" - 2021-07-22T18:58:10.590Z */ (() => {
    'use strict';
    var t = {
            607: (t, e) => {
                var i = (function () {
                    function t() {
                        (this.layerNb = 0),
                            (this.layerNames = []),
                            (this.closureFunc = function (t) {
                                for (
                                    var e = [], i = 1;
                                    i < arguments.length;
                                    i++
                                )
                                    e[i - 1] = arguments[i];
                                var r = Array.prototype.slice.call(
                                    arguments,
                                    1
                                );
                                return function () {
                                    var e = r.slice();
                                    return (
                                        e.push.apply(e, arguments),
                                        t.apply(this, e)
                                    );
                                };
                            });
                    }
                    return (
                        (t.prototype.init = function (e) {
                            var i = this;
                            (this.mapApi = e),
                                (this.config =
                                    this._RV.getConfig('plugins').swiper),
                                (this.config.language =
                                    this._RV.getCurrentLang()),
                                (this.layerNb = 0),
                                (this.layerNames = []),
                                this.mapApi.layersObj.layerAdded.subscribe(
                                    function (t) {
                                        i.config.layers.find(function (e) {
                                            e.id === t.id &&
                                                (i.layerNb++,
                                                i.layerNames.push(t.name));
                                        });
                                    }
                                ),
                                (this._button =
                                    this.mapApi.mapI.addPluginButton(
                                        t.prototype.translations[
                                            this._RV.getCurrentLang()
                                        ].menu,
                                        this.onMenuItemClick()
                                    )),
                                (this._button.isActive = this.config.open = !0),
                                window.RAMP.GAPI.esriLoadApiClasses([
                                    ['esri/dijit/LayerSwipe', 'layerSwipe']
                                ]).then(function (t) {
                                    var e = setInterval(function () {
                                        i.mapApi.mapDiv
                                            .find('rv-shell')
                                            .find('.rv-esri-map')
                                            .prepend(
                                                '<div id="rv-swiper-div"></div>'
                                            ),
                                            i.layerNb ===
                                                i.config.layers.length &&
                                                (i.setSwiper(t, i.config),
                                                clearInterval(e));
                                    }, 500);
                                });
                        }),
                        (t.prototype.destroy = function () {
                            this.swipeWidget.destroy();
                        }),
                        (t.prototype.onMenuItemClick = function () {
                            var t = this;
                            return function () {
                                (t._button.isActive = !t._button.isActive),
                                    (t.mapApi.mapDiv.find(
                                        '#rv-swiper-div '
                                    )[0].style.display = t._button.isActive
                                        ? 'block'
                                        : 'none'),
                                    t._button.isActive
                                        ? t.swipeWidget.enable()
                                        : t.swipeWidget.disable();
                            };
                        }),
                        (t.prototype.setSwiper = function (e, i) {
                            for (var r = [], n = i.layers.length; n--; )
                                r.push(
                                    this.mapApi.esriMap.getLayer(i.layers[n].id)
                                );
                            try {
                                var s = new e.layerSwipe(
                                    {
                                        type: i.type,
                                        map: this.mapApi.esriMap,
                                        layers: r,
                                        top: document.body.scrollHeight / 2,
                                        left: this.getWidth() / 2
                                    },
                                    'rv-swiper-div'
                                );
                                this.swipeWidget = s;
                                var o = this;
                                s.on('load', function () {
                                    var e = o.mapApi.mapDiv.find(
                                        '#rv-swiper-div .' + s.type
                                    )[0];
                                    (e.tabIndex = -3),
                                        e.addEventListener(
                                            'keydown',
                                            o.closureFunc(
                                                function (t, e, r, n) {
                                                    if ('vertical' === i.type) {
                                                        var s = parseInt(
                                                                e.style.left
                                                            ),
                                                            a =
                                                                parseInt(
                                                                    o.mapApi.mapDiv
                                                                        .find(
                                                                            '#rv-swiper-div'
                                                                        )
                                                                        .width()
                                                                ) - 10;
                                                        37 === n.keyCode &&
                                                        s >= 0
                                                            ? (s =
                                                                  s > r
                                                                      ? (s -= r)
                                                                      : 0)
                                                            : 39 ===
                                                                  n.keyCode &&
                                                              s <= a &&
                                                              (s =
                                                                  s <= a - r
                                                                      ? (s += r)
                                                                      : a),
                                                            (e.style.left =
                                                                String(
                                                                    s + 'px'
                                                                ));
                                                    } else if (
                                                        'horizontal' === i.type
                                                    ) {
                                                        s = parseInt(
                                                            e.style.top
                                                        );
                                                        var p =
                                                            parseInt(
                                                                o.mapApi.mapDiv
                                                                    .find(
                                                                        '#rv-swiper-div'
                                                                    )
                                                                    .height()
                                                            ) - 10;
                                                        38 === n.keyCode &&
                                                        s >= 0
                                                            ? (s =
                                                                  s > r
                                                                      ? (s -= r)
                                                                      : 0)
                                                            : 40 ===
                                                                  n.keyCode &&
                                                              s <= p &&
                                                              (s =
                                                                  s <= p - r
                                                                      ? (s += r)
                                                                      : p),
                                                            (e.style.top =
                                                                String(
                                                                    s + 'px'
                                                                ));
                                                    }
                                                    t.swipe();
                                                },
                                                s,
                                                e,
                                                i.keyboardOffset
                                            )
                                        ),
                                        (e.title =
                                            t.prototype.translations[
                                                o.config.language
                                            ].tooltip),
                                        (e.title +=
                                            '\r\n- ' +
                                            o.layerNames.join(',\r\n- '));
                                }),
                                    s.startup();
                            } catch (t) {
                                console.log('try catch error is ', t),
                                    this.swipeWidget.destroy();
                            }
                        }),
                        (t.prototype.getWidth = function () {
                            return Math.max(
                                document.body.scrollWidth,
                                document.documentElement.scrollWidth,
                                document.body.offsetWidth,
                                document.documentElement.offsetWidth,
                                document.documentElement.clientWidth
                            );
                        }),
                        t
                    );
                })();
                (i.prototype.translations = {
                    'en-CA': {
                        tooltip: 'Drag to see underlying layer',
                        menu: 'Swiper'
                    },
                    'fr-CA': {
                        tooltip:
                            'Faites glisser pour voir les couches sous-jacentes',
                        menu: 'Balayage'
                    }
                }),
                    (window.swiper = i);
            }
        },
        e = {};
    function i(r) {
        var n = e[r];
        if (void 0 !== n) return n.exports;
        var s = (e[r] = { exports: {} });
        return t[r](s, s.exports, i), s.exports;
    }
    i(607);
})();
