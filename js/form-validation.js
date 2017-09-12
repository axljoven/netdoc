//	Jquery Form Validation
    (function($,W,D)
    {
        var JQUERY4U = {};

        JQUERY4U.UTIL =
        {
            setupFormValidation: function()
            {
                //form validation rules
                $("#contact-form").validate({
                    rules: {
                        name: "required",
                        email: {
                            required: true,
                            email: true
                        },
                        msg: "required",
                        contact: {
                            number: true
                        }
                    },
                    messages: {
                        name: "Please enter your name",
                        email: "Please enter a valid email address",
                        contact: "Please enter a valid contact number",
                        msg: "Please enter your message"
                    },
                    submitHandler: function(form) {
                        form.submit();
                    }
                });
            }
        }

        //when the dom has loaded setup form validation rules
        $(D).ready(function($) {
            JQUERY4U.UTIL.setupFormValidation();
        });

    })(jQuery, window, document);


//  JQuery Reset Button
    $("input#contact-reset").click(function(){
        $("#contact-form input.u-full-width").each(function(){
            $(this).val("");
        });
        $("#contact-form textarea").val("");
        $("label.error").css('display', 'none');
    });