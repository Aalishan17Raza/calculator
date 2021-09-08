var num1 = "",
    num2 = "",
    operation;
var screen = $("#place");
operation = "" + $(".operation").text();
$(".btn").click(function() {
    var buttonClicked = $(this).text();
    if (operation.includes("" + buttonClicked) == true) {
        if (buttonClicked == "AC") {
            $("#place").attr("value", "");
            num1 = "";
        }
        if (buttonClicked == "=") {
            screen.attr("value", eval(num1));
        }
        if (buttonClicked == "(") {
            if (num1 == "")
                num1 = num1 + "(";
            else
                num1 = num1 + "*(";
            screen.attr("value", num1);
        }
        if (buttonClicked == "x") {
            num1 = num1 + "*";
            screen.attr("value", num1);
        }

    } else {
        num1 = num1 + buttonClicked;
        screen.attr("value", "" + num1);
    }
});