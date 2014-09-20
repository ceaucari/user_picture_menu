Drupal.behaviors.user_picture_menu = {
    attach: function (context, settings) {
        jQuery(document).ready(function() {
            jQuery('.user-menu-toggler').click(function(){
                jQuery('.user-items').fadeToggle();
            });
        });
    }
};