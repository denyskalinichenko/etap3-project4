document.body.addEventListener("click", function (e) {
    let xCoordinate = e.clientX;
    let yCoordinate = e.clientY;

    // Jeżeli parzyste są dwie wartości, kolor - czerwony
    if (xCoordinate % 2 == 0 && yCoordinate % 2 == 0) {
        document.body.style.backgroundColor = "red";

        // Jeżeli NIEparzyste są dwie wartości, kolor - niebieski
    } else if (xCoordinate % 2 != 0 && yCoordinate % 2 != 0) {
        document.body.style.backgroundColor = "blue";

        // Jeżeli NIEparzysta jest jedna wartość, kolor - zielony
    } else if (xCoordinate % 2 != 0 || yCoordinate % 2 != 0) {
        document.body.style.backgroundColor = "green";
    }

    console.log(xCoordinate, yCoordinate);
})