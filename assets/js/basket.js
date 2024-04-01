var receiptList = document.getElementById("basketItems"); // Reference to the receipt list


    function confirmOrder() {
        var espresso_quantity = document.getElementById("espresso-qnty").value;
        var macchiato_quantity = document.getElementById("macchiato-qnty").value;
        var cappucino_quantity = document.getElementById("cappucino-qnty").value;
        var americano_quantity = document.getElementById("americano-qnty").value;
        var mocha_quantity = document.getElementById("mocha-qnty").value;
        var latte_quantity = document.getElementById("latte-qnty").value;
        var pastillas_quantity = document.getElementById("pastillas-qnty").value;
        var ensaymada_quantity = document.getElementById("ensaymada-qnty").value;
        var pandesalsal_quantity = document.getElementById("pandesal-qnty").value;

        var basketItems = [];

        if (espresso_quantity > 0) {
            basketItems.push("Espresso: " + espresso_quantity);
        }
        if (macchiato_quantity > 0) {
            basketItems.push("Macchiato: " + macchiato_quantity);
        }
        if (cappucino_quantity > 0) {
            basketItems.push("Cappuccino: " + cappucino_quantity);
        }
        if (americano_quantity > 0) {
            basketItems.push("Americano: " + americano_quantity);
        }
        if (mocha_quantity > 0) {
            basketItems.push("Mocha: " + mocha_quantity);
        }
        if (latte_quantity > 0) {
            basketItems.push("Latte: " + latte_quantity);
        }
        if (pastillas_quantity > 0) {
            basketItems.push("Pastillas: " + pastillas_quantity);
        }
        if (ensaymada_quantity > 0) {
            basketItems.push("Ensaymada: " + ensaymada_quantity);
        }
        if (pandesalsal_quantity > 0) {
            basketItems.push("Pandesal: " + pandesalsal_quantity);
        }

        displayList(basketItems);
    }

    function displayList(items) {
        // Clear previous receipt items
        receiptList.innerHTML = "";

        // Display each item in the receipt
        if (items.length === 0) {
            receiptList.innerHTML = "<li>-- Empty Basket --</li>";
        } else {
            items.forEach(function (stringItem) {
                var parts = stringItem.split(':');
                var itemName = parts[0].trim();
                var itemQuantity = parseInt(parts[1].trim()); // Parse the quantity
                var listItem = document.createElement("li");
                listItem.textContent = itemName + ": " + itemQuantity; // Combine item name and quantity
                receiptList.appendChild(listItem);
            });
        }

        showBasket();
    }


    function showBasket() {
        // Hide the basket container
        document.getElementById("basketContainer").style.display = "block";
    }

    function hideBasket() {
        // Hide the basket container
        document.getElementById("basketContainer").style.display = "none";
    }

    function proceedPayment() {
        // Calculate the total cost of items in the basket
        if (receiptList.innerHTML == "<li>-- Empty Basket --</li>") {
            alert("Basket is empty");
            return;

        }
        var totalCost = calculateTotalCost();

        // Assuming you have a payment gateway or some form of payment processing mechanism,
        // here you can redirect the user to the payment page or display a payment modal.
        // For demonstration purposes, let's log the total cost to the console.
        generateReceiptContent();


    }

    function calculateTotalCost() {
        var totalCost = 0;
        var items = receiptList.getElementsByTagName("li");
        for (var i = 0; i < items.length; i++) {
            var itemText = items[i].textContent;
            var parts = itemText.split(':');
            var itemQuantity = parseInt(parts[1].trim());
            var itemCost = getItemCost(parts[0].trim());
            totalCost += itemQuantity * itemCost;
        }
        return totalCost;
    }

    function getItemCost(itemName) {
        switch (itemName) {
            case "Espresso":
                return 50;
            case "Macchiato":
                return 60;
            case "Cappuccino":
                return 60;
            case "Americano":
                return 40;
            case "Mocha":
                return 50;
            case "Latte":
                return 45;
            case "Pastillas":
                return 10;
            case "Ensaymada":
                return 40;
            case "Pandesal":
                return 25;
            default:
                return 0;
        }
    }

    


    function proceedPayment() {
        // Calculate the total cost of items in the basket
        if (receiptList.innerHTML == "<li>-- Empty Basket --</li>") {
            alert("Basket is empty");
            return;
        }
        var totalCost = calculateTotalCost();
        var receiptContent = generateReceiptContent();

        hideBasket();

        displayReceipt(totalCost, receiptContent);
    }

    function generateReceiptContent() {
        var items = receiptList.getElementsByTagName("li");
        var receiptContent = "";
        for (var i = 0; i < items.length; i++) {
            receiptContent += items[i].textContent + "<br>";
        }
        return receiptContent;
    }

    function displayReceipt(totalCost, receiptContent) {
        document.getElementById("receipt-details").innerHTML = receiptContent;
        document.getElementById("receipt-container").style.display = "block";
        document.getElementById("receipt-details").innerHTML += "<p><strong>Total Cost:</strong> PHP " + totalCost + "</p>";
    }