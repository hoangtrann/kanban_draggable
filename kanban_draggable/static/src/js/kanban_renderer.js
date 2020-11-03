odoo.define("kanban_draggable.kanban_renderer", function (require) {
    "use strict";

    var KanbanRenderer = require("web.KanbanRenderer");

    KanbanRenderer.include({
        _setState: function (state) {
            this._super.apply(this, arguments);
            var self = this;
            var arch = this.arch;
            var attrs = [
                "disable_drag_drop_record",
                "disable_sort_record",
                "disable_sort_column",
            ];
            if (arch) {
                attrs.forEach(function (item) {
                    if (!_.has(arch.attrs, item)) {
                        return;
                    }
                    switch (item) {
                        case "disable_drag_drop_record":
                            self.columnOptions.draggable = !JSON.parse(
                                arch.attrs[item].toLowerCase()
                            );
                        case "disable_sort_record":
                            self.recordOptions.sortable = !JSON.parse(
                                arch.attrs[item].toLowerCase()
                            );
                        case "disable_sort_column":
                            self.columnOptions.sortable = !JSON.parse(
                                arch.attrs[item].toLowerCase()
                            );
                    }
                });
            }
        },

        _renderGrouped: function (fragment) {
            this._super.apply(this, arguments);

            if (!this.columnOptions.sortable) {
                this.$el.sortable("disable");
            }
        },
    });
});
