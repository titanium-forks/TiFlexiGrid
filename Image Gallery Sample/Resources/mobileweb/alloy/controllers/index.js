function Controller() {
    function createSampleData() {
        items = [];
        var sample_data = [ {
            title: "sample 1",
            image: "http://www.lorempixel.com/700/600/"
        }, {
            title: "sample 2",
            image: "http://www.lorempixel.com/900/1200/"
        }, {
            title: "sample 3",
            image: "http://www.lorempixel.com/400/300/"
        }, {
            title: "sample 4",
            image: "http://www.lorempixel.com/600/600/"
        }, {
            title: "sample 5",
            image: "http://www.lorempixel.com/400/310/"
        }, {
            title: "sample 6",
            image: "http://www.lorempixel.com/410/300/"
        }, {
            title: "sample 7",
            image: "http://www.lorempixel.com/500/300/"
        }, {
            title: "sample 8",
            image: "http://www.lorempixel.com/300/300/"
        }, {
            title: "sample 9",
            image: "http://www.lorempixel.com/450/320/"
        }, {
            title: "sample 10",
            image: "http://www.lorempixel.com/500/400/"
        } ];
        for (var x = 0; sample_data.length > x; x++) {
            var view = Alloy.createController("item_gallery", {
                image: sample_data[x].image,
                width: $.fg.getItemWidth(),
                height: $.fg.getItemHeight()
            }).getView();
            var values = {
                title: sample_data[x].title,
                image: sample_data[x].image
            };
            items.push({
                view: view,
                data: values
            });
        }
        $.fg.addGridItems(items);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.fgWin = Ti.UI.createWindow({
        backgroundColor: "#fff",
        navBarHidden: true,
        tabBarHidden: true,
        layout: "vertical",
        orientationModes: [ Ti.UI.PORTRAIT, Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT, Ti.UI.UPSIDE_PORTRAIT ],
        exitOnClose: true,
        id: "fgWin"
    });
    $.__views.fgWin && $.addTopLevelView($.__views.fgWin);
    $.__views.fgHeader = Ti.UI.createView({
        backgroundColor: "#00b3ed",
        width: Ti.UI.FILL,
        height: 60,
        id: "fgHeader"
    });
    $.__views.fgWin.add($.__views.fgHeader);
    $.__views.fgHeaderTitle = Ti.UI.createLabel({
        text: "TiFlexiGrid",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#fff",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        bottom: 10,
        id: "fgHeaderTitle"
    });
    $.__views.fgHeader.add($.__views.fgHeaderTitle);
    $.__views.fg = Alloy.createWidget("com.prodz.tiflexigrid", "widget", {
        id: "fg",
        __parentSymbol: $.__views.fgWin
    });
    $.__views.fg.setParent($.__views.fgWin);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var items = [];
    var showGridItemInfo = function(e) {
        alert("Title is: " + e.source.data.title + ". Image is: " + e.source.data.image);
    };
    $.fg.init({
        columns: 3,
        space: 5,
        gridBackgroundColor: "#fff",
        itemHeightDelta: 0,
        itemBackgroundColor: "#eee",
        itemBorderColor: "transparent",
        itemBorderWidth: 0,
        itemBorderRadius: 0,
        onItemClick: showGridItemInfo
    });
    createSampleData();
    Ti.Gesture.addEventListener("orientationchange", function(e) {
        var orientation = e.orientation;
        var nColumn, nSpace;
        if (1 > orientation || orientation > 4) return;
        if (1 == orientation || 2 == orientation) {
            nColumn = 3;
            nSpace = 5;
        } else if (3 == orientation || 4 == orientation) {
            nColumn = 5;
            nSpace = 7;
        }
        $.fg.clearGrid();
        $.fg.init({
            columns: nColumn,
            space: nSpace,
            gridBackgroundColor: "#fff",
            itemHeightDelta: 0,
            itemBackgroundColor: "#eee",
            itemBorderColor: "transparent",
            itemBorderWidth: 0,
            itemBorderRadius: 0,
            onItemClick: showGridItemInfo
        });
        createSampleData();
    });
    $.fgWin.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;