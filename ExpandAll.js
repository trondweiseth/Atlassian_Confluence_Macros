## Macro title: Expand All
## Macro has a body: N
##
## Developed by: Trond Weiseth
## Date created: 13/11/2024
## Installed by: Trond Weiseth
## @noparams

<p align="center">
    <button name="toggleAll" id="toggleAll" type="button" class="aui-button" aria-pressed="false">Expand/Collapse All</button>
</p>

<script type="text/javascript">
AJS.toInit(function () {
    AJS.$('#toggleAll').click(function () {
        // Find all expand/collapse controls based on the new code block elements
        var expanded = AJS.$('.expand-control-icon.icon').filter('.expanded');
        var unexpanded = AJS.$('.expand-control-icon.icon').not('.expanded');

        if (expanded.length > unexpanded.length) {
            // If more are expanded, collapse them
            expanded.each(function () {
                AJS.$(this).closest("div").find('.expand-control-text').trigger("click");
            });

            // Update the aria-pressed state
            AJS.$("#toggleAll").attr("aria-pressed", "false");
        } else {
            // If more are collapsed, expand them
            unexpanded.each(function () {
                AJS.$(this).closest("div").find('.expand-control-text').trigger("click");
            });

            // Update the aria-pressed state
            AJS.$("#toggleAll").attr("aria-pressed", "true");
        }
        jQuery(".expand-control").each(function () {
            var $expander = jQuery(this);
            var $expanderIcon = jQuery(".expand-control-icon", $expander);
            var $expanderContent = jQuery(".expand-content", $expander.closest(".expand-container")).first();

            // Toggle expansion/collapse
            if ($expanderContent.hasClass("expand-hidden")) {
                $expanderContent.show();
                $expanderContent.animate({ opacity: 1 });
            } else {
                $expanderContent.hide();
                $expanderContent.animate({ opacity: 0 });
            }

            // Toggle the relevant classes
            $expanderContent.toggleClass("expand-hidden");
            $expanderIcon.toggleClass("expanded");
        });
    });
});
</script>
