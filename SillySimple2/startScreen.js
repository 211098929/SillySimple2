/*
 * JS for startScreen generated by Appery.io
 */

Apperyio.getProjectGUID = function() {
    return '80456d64-90a3-4e06-9916-7bda187e2d03';
};

function navigateTo(outcome, useAjax) {
    Apperyio.navigateTo(outcome, useAjax);
}

// Deprecated


function adjustContentHeight() {
    Apperyio.adjustContentHeightWithPadding();
}

function adjustContentHeightWithPadding(_page) {
    Apperyio.adjustContentHeightWithPadding(_page);
}

function setDetailContent(pageUrl) {
    Apperyio.setDetailContent(pageUrl);
}

Apperyio.AppPages = [{
    "name": "AreaPanel",
    "location": "AreaPanel.html"
}, {
    "name": "startScreen",
    "location": "startScreen.html"
}];

startScreen_js = function(runBeforeShow) {

    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilebutton_2': 'startScreen_mobilebutton_2',
        'mobilebutton_3': 'startScreen_mobilebutton_3',
        'mobilebutton_4': 'startScreen_mobilebutton_4',
        'googlemap_5': 'startScreen_googlemap_5',
        'marker_6': 'startScreen_marker_6'
    };

    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }

    if (navigator.userAgent.indexOf("IEMobile") != -1) {
        //Fix for jQuery Mobile's footer in Cordova webview on WP8 devices
        var msViewportStyle = document.createElement("style");
        msViewportStyle.appendChild(
        document.createTextNode("@media screen and (orientation: portrait){@-ms-viewport {width: 320px; height: 534px;user-zoom: fixed;zoom: 1;}}" + "@media screen and (orientation:landscape){@-ms-viewport{width:480px;user-zoom:fixed;zoom:1;}}"));
        document.getElementsByTagName("head")[0].appendChild(msViewportStyle);
    }

    Apperyio.CurrentScreen = 'startScreen';

    /*
     * Nonvisual components
     */
    var datasources = [];

    mobilecamera2 = new Apperyio.DataSource(CameraService, {
        'onBeforeSend': function(jqXHR) {

        },
        'onComplete': function(jqXHR, textStatus) {

            Apperyio.refreshScreenFormElements("startScreen");
        },
        'onSuccess': function(data) {},
        'onError': function(jqXHR, textStatus, errorThrown) {},
        'responseMapping': [],
        'requestMapping': [{
            'PATH': ['quality'],
            'TYPE': 'STRING',
            'ATTR': '80'
        }, {
            'PATH': ['destinationType'],
            'TYPE': 'STRING',
            'ATTR': 'Data URL'
        }, {
            'PATH': ['sourcetype'],
            'TYPE': 'STRING',
            'ATTR': 'Camera'
        }, {
            'PATH': ['allowedit'],
            'TYPE': 'STRING',
            'ATTR': 'true'
        }, {
            'PATH': ['encodingType'],
            'TYPE': 'STRING',
            'ATTR': 'JPEG'
        }, {
            'PATH': ['targetWidth'],
            'TYPE': 'STRING',
            'ATTR': '1024'
        }, {
            'PATH': ['targetHeight'],
            'TYPE': 'STRING',
            'ATTR': '768'
        }]
    });

    datasources.push(mobilecamera2);

    /*
     * Events and handlers
     */

    // Before Show
    var startScreen_beforeshow = function() {
            Apperyio.CurrentScreen = "startScreen";
            for (var idx = 0; idx < datasources.length; idx++) {
                datasources[idx].__setupDisplay();
            }
        };

    // On Load
    var startScreen_onLoad = function() {
            startScreen_elementsExtraJS();

            // TODO fire device events only if necessary (with JS logic)
            startScreen_deviceEvents();
            startScreen_windowEvents();
            startScreen_elementsEvents();
        };

    // screen window events
    var startScreen_windowEvents = function() {

            $('#startScreen').bind('pageshow orientationchange', function() {
                var _page = this;
                adjustContentHeightWithPadding(_page);
            });

        };

    // device events
    var startScreen_deviceEvents = function() {
            document.addEventListener("deviceready", function() {

            });
        };

    // screen elements extra js
    var startScreen_elementsExtraJS = function() {
            // screen (startScreen) extra code

            /* googlemap_5 */

            $("[name = 'googlemap_5']").wrap("<div/>");
            $("[name = 'googlemap_5']").parent().css("margin-left", $("[name = 'googlemap_5']").css("margin-left"));
            $("[name = 'googlemap_5']").parent().css("margin-right", $("[name = 'googlemap_5']").css("margin-right"));
            $("[name = 'googlemap_5']").css("margin-left", '0');
            $("[name = 'googlemap_5']").css("margin-right", '0');

            var googlemap_5_options = {
                markerSourceName: "googlemap_5_markers",
                latitude: "",
                longitude: "",
                address: "San Francisco, CA",
                zoom: 10,
                showLocationMarker: false
            }

            Apperyio.__registerComponent('googlemap_5', new Apperyio.ApperyMapComponent("googlemap_5", googlemap_5_options));
            $("[name='googlemap_5_markers'] [apperytype='marker']").attr("reRender", "googlemap_5");
            $("[name='googlemap_5']").closest("[data-role='page']").bind({
                pagecontainershow: function() {
                    if (Apperyio('googlemap_5') != undefined) {
                        Apperyio('googlemap_5').refresh();
                    }
                }
            });

        };

    // screen elements handler
    var startScreen_elementsEvents = function() {
            $(document).on("click", "a :input,a a,a fieldset label", function(event) {
                event.stopPropagation();
            });

            $(document).off("click", '#startScreen_mobilecontainer1 [name="mobilebutton_2"]').on({
                click: function() {
                    if (!$(this).attr('disabled')) {
                        Apperyio.navigateTo('AreaPanel', {
                            transition: 'slide',
                            reverse: false
                        });

                    }
                },
            }, '#startScreen_mobilecontainer1 [name="mobilebutton_2"]');
            $(document).off("click vclick select tap", '#startScreen_mobilecontainer1 [name="mobilebutton_3"]').on({
                click: function() {
                    if (!$(this).attr('disabled')) {
                        try {
                            mobilecamera2.execute({})
                        } catch (ex) {
                            console.log(ex.name + '  ' + ex.message);
                            hideSpinner();
                        };

                    }
                },
                vclick: function() {
                    try {
                        mobilecamera2.execute({})
                    } catch (ex) {
                        console.log(ex.name + '  ' + ex.message);
                        hideSpinner();
                    };
                },
                select: function() {
                    try {
                        mobilecamera2.execute({})
                    } catch (ex) {
                        console.log(ex.name + '  ' + ex.message);
                        hideSpinner();
                    };
                },
                tap: function() {
                    try {
                        mobilecamera2.execute({})
                    } catch (ex) {
                        console.log(ex.name + '  ' + ex.message);
                        hideSpinner();
                    };
                    event.stopPropagation();
                    return false;
                },
            }, '#startScreen_mobilecontainer1 [name="mobilebutton_3"]');

        };

    $(document).off("pagebeforeshow", "#startScreen").on("pagebeforeshow", "#startScreen", function(event, ui) {
        startScreen_beforeshow();
    });

    if (runBeforeShow) {
        startScreen_beforeshow();
    } else {
        startScreen_onLoad();
    }
};

$(document).off("pagecreate", "#startScreen").on("pagecreate", "#startScreen", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    startScreen_js();
});