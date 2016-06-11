jQuery(document).ready(function($) {
    // Make checkboxes act like radios
    var chboxToRadios = function() {
        var selectedBox = null;
        $('.package').click(function() {
            selectedBox = this.id;
            $('.package').each(function() {
                if (this.id === selectedBox) {
                    this.checked = true;
                } else {
                    this.checked = false;
                }
            });
        });
    };
    chboxToRadios();
    // Hotel TV Price
    var hotelTVprice = function() {
        var total = parseFloat(0.00);
        var $selectboxes = $('#screen-details select');
        $selectboxes.change(function() {
            var screenSize = $('#selectScreenSize').find(':selected').val();
            var screenQuantity = $('#selectScreenQty').find(':selected').val();
            total = (screenSize * screenQuantity) || 0;
            $('input#totalValue').val(total);
            console.log(total);
            return total;
        });
    };
    // WAW TV Price
    var wawPrice = function() {
        $('input:checkbox').on('change', function() {
            var sum = 0;
            $('.selected-input').each(function() {
                if (this.checked) sum = sum + parseFloat($(this).val());
            });
            $('input#totalValue').val(sum);
            console.log(sum);
            return sum;
        });
    };
    function calcResult(){
        var a = wawPrice() || 0;
        var b = hotelTVprice() || 0;
        console.log(a + b);
    }
    calcResult();

    // var result = function() {
    //     hotelTVprice();
    //     wawPrice();
    //     var final = hotelTVprice.total || 0 + wawPrice.sum || 0;
    //     console.log("this is " + final);
    //     $('input#totalValue').val(final);
    // };
    // result();
    // Toggle Hotel TV details
    $('.checkbox').on('click', 'input#hotel-tv', function() {
        $('#screen-details').toggle('slow');
    });




    // jQuery('.adults select, .children select, .children2 select').change(function() {
    //     opt1 = jQuery('.adults').find('option:selected');
    //     opt2 = jQuery('.children').find('option:selected');
    //     opt3 = jQuery('.children2').find('option:selected');
    //     total = +opt1.val() + +opt2.val() + +opt3.val();
    //     jQuery(".guests-select .total").html(total);
    // });
    
});