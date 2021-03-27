/*Quantity Function: https://embed.plnkr.co/plunk/B5waxZ*/
/*CSS/JS model */

function quantity_inrements() {
    jQuery("div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)").each(function(a, b) {
        var c = jQuery(b);
        c.addClass("buttons_added"), c.children().first().before('<input type="button" value="-" class="minus" />'), c.children().last().after('<input type="button" value="+" class="plus" />')
    })
}
String.prototype.getDecimals || (String.prototype.getDecimals = function() {
    var a = this,
        b = ("" + a).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
    return b ? Math.max(0, (b[1] ? b[1].length : 0) - (b[2] ? +b[2] : 0)) : 0
}), jQuery(document).ready(function() {
    quantity_inrements()
}), jQuery(document).on("updated_wc_div", function() {
    quantity_inrements()
}), jQuery(document).on("click", ".plus, .minus", function() {
    var a = jQuery(this).closest(".quantity").find(".qty"),
        b = parseFloat(a.val()),
        c = parseFloat(a.attr("max")),
        d = parseFloat(a.attr("min")),
        e = a.attr("step");
    b && "" !== b && "NaN" !== b || (b = 0), "" !== c && "NaN" !== c || (c = ""), "" !== d && "NaN" !== d || (d = 0), "any" !== e && "" !== e && void 0 !== e && "NaN" !== parseFloat(e) || (e = 1), jQuery(this).is(".plus") ? c && b >= c ? a.val(c) : a.val((b + parseFloat(e)).toFixed(e.getDecimals())) : d && b <= d ? a.val(d) : b > 0 && a.val((b - parseFloat(e)).toFixed(e.getDecimals())), a.trigger("change")
});


function quickShop_function1() {
  var popup = document.getElementById("myPopup1");
  popup.classList.toggle("show");
}

function quickShop_function2() {
  var popup = document.getElementById("myPopup2");
  popup.classList.toggle("show");
}

function quickShop_function3() {
  var popup = document.getElementById("myPopup3");
  popup.classList.toggle("show");
}

function quickShop_function4() {
  var popup = document.getElementById("myPopup4");
  popup.classList.toggle("show");
}

function quickShop_function5() {
  var popup = document.getElementById("myPopup5");
  popup.classList.toggle("show");
}

function quickShop_function6() {
  var popup = document.getElementById("myPopup6");
  popup.classList.toggle("show");
}

function quickShop_function7() {
  var popup = document.getElementById("myPopup7");
  popup.classList.toggle("show");
}

function quickShop_function8() {
  var popup = document.getElementById("myPopup8");
  popup.classList.toggle("show");
}

function quickShop_function9() {
  var popup = document.getElementById("myPopup9");
  popup.classList.toggle("show");
}

function quickShop_function10() {
  var popup = document.getElementById("myPopup10");
  popup.classList.toggle("show");
}

function quickShop_function11() {
  var popup = document.getElementById("myPopup11");
  popup.classList.toggle("show");
}

function quickShop_function12() {
  var popup = document.getElementById("myPopup12");
  popup.classList.toggle("show");
}

