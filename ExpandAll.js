## Macro title: Expand All
## Macro has a body: N
##
## Developed by: Trond Weiseth
## Date created: 13/11/2024
## Installed by: Trond Weiseth
## @noparams

<p align="center">
    <button name="toggleAll" id="toggleAll" type="button" class="aui-button" aria-pressed="false">Expand All</button>
</p>

<script type="text/javascript">
AJS.toInit(function () {
    AJS.$('#toggleAll').click(function () {
        var button = AJS.$(this);  // Get the button element
        var expanded = AJS.$('.expand-control-icon.icon').filter('.expanded');
        var unexpanded = AJS.$('.expand-control-icon.icon').not('.expanded');

        // Expand All Logic
        if (button.text() === "Expand All") {
            // Expand all macros
            jQuery(".expand-control").each(function () {
                var $expander = jQuery(this);
                var $expanderIcon = jQuery(".expand-control-icon", $expander);
                var $expanderContent = jQuery(".expand-content", $expander.closest(".expand-container")).first();

                $expanderContent.show();
                $expanderContent.animate({ opacity: 1 });
            });

            // Change button text to "Collapse All"
            button.text("Collapse All");
            button.attr("aria-pressed", "true");  // Mark as expanded

            // If more are collapsed, expand them
            unexpanded.each(function () {
                AJS.$(this).closest("div").find('.expand-control-text').trigger("click");
            });

            // Update the aria-pressed state
            AJS.$("#toggleAll").attr("aria-pressed", "true");
        } 
        // Collapse All Logic
        else if (button.text() === "Collapse All") {
            // Collapse all macros
            jQuery(".expand-control").each(function () {
                var $expander = jQuery(this);
                var $expanderIcon = jQuery(".expand-control-icon", $expander);
                var $expanderContent = jQuery(".expand-content", $expander.closest(".expand-container")).first();

                // Ensure the content is hidden (collapse it)
                $expanderContent.hide();  // Hide content
                $expanderIcon.removeClass("expanded");  // Remove "expanded" class
                $expanderContent.addClass("expand-hidden");  // Add hidden class
            });

            // Change button text to "Expand All"
            button.text("Expand All");
            button.attr("aria-pressed", "false");  // Mark as collapsed

            // If more are expanded, collapse them
            expanded.each(function () {
                AJS.$(this).closest("div").find('.expand-control-text').trigger("click");
            });

            AJS.$("#toggleAll").attr("aria-pressed", "false");
        }
    });
});
</script>
