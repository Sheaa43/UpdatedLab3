$(document).ready(
    function() {
        //event handlers
        $("#calculateLateFees").click(calculateTheFee);
        //event handlers
        $("#totalCostDisplay").click(calculateTheCost);

        //other functions
        function calculateTheFee()
        {
            //get all input from boxes and parse to number data type
            var bookReturn = $("#bookReturn").val();
            bookReturn = parseFloat(bookReturn);

            var dvdReturn = $("#dvdReturn").val();
            dvdReturn = parseFloat(dvdReturn);

            var daysLate = $("#daysLate").val();
            daysLate = parseFloat(daysLate);


            //calculate cost

            var bookLateFees = bookReturn * 0.25;
            var dvdLateFees = dvdReturn * 0.50;
            var totalLateFees = bookLateFees + dvdLateFees;
            var finalCosts = totalLateFees + daysLate;


            //put output into paragraphs

            $("#lateFeeOutput").text(`Your late fees are ${finalCosts.toFixed(2)}`);
        }


        //event handlers


        //other functions
        function calculateTheCost() {
            //get all input from boxes and parse to number data type
            var numberOfToppings = $("#numberOfToppings").val();
            numberOfToppings = parseFloat(numberOfToppings);

            var numberOfPeople = $("#numberOfPeople").val();
            numberOfPeople = parseFloat(numberOfPeople);

            var daysLate = $("#daysLate").val();
            daysLate = parseFloat(daysLate);


            //calculate cost

            var priceOfToppings = numberOfToppings * 1.25;
            var pizzaToppingsCost = 15 + priceOfToppings;
            var total = pizzaToppingsCost / numberOfPeople;


            //put output into paragraphs

            $("#totalCostOutput").text(`The cost per person is ${total.toFixed(2)}`);
        }
    }
);