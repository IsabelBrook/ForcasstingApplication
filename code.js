$(document).ready(function () {
    bigData.innerHTML="";
    $.get(`http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/351414?res=3hourly&key=3e83b492-f4e4-44fe-b216-21874e51aee4`, function(data,status){
        const days = data.SiteRep.DV.Location.Period;
        console.log(days);
        let elements1 = $("<table>");
        let elements2 = $("<table>");
        let today1 = days[0].Rep;
        let k = 0;
        tableOne(today1, elements1, k);


        $("#bigData").append(elements1);


        for (let i = 0; i < days.length; i ++) {
            console.log(days[i]);
            let weekday = days[i].Rep;
            k = i;
            tableOne(weekday, elements2, k);
        }

        $("#somethingelse").append(elements2);

        function tableOne(today, elements, k) {


            let elements22 = $("<th>");

            let temp = [];
            for (let i = 0; i < days[0].Rep.length; i++) {
                console.log(today[i].T);
                temp.push(today[i].T);
            }
            let UV = [];
            for (let j = 0; j < days[0].Rep.length; j++) {
                console.log(today[j].U);
                UV.push(today[j].U);
            }
            console.log(UV);

            const weatherType = ["Clear night", "Sunny day", "Partly cloudy (night)", "Partly cloudy (day)", "Not used", "Mist", "Fog", "Cloudy", "Overcast",
                "Light rain shower (night)", "Light rain shower (day)", "Drizzle", "Light rain", "Heavy rain shower (night)", "Heavy rain shower (day)",
                "Heavy rain", "Sleet shower (night)", "Sleet shower (day)", "Sleet", "Hail shower (night)", "Hail shower (day)", "Hail", "Light snow shower (night)",
                "Light snow shower (day)", "Light snow", "Heavy snow shower (night)", "Heavy snow shower (day)", "Heavy snow", "Thunder shower (night)", "Thunder shower (day)", "Thunder"];

            let todayW = days[k].Rep[0].W;
            console.log(weatherType[todayW]);

            let weatherImage = $("<tr>");
            elements22.append(weatherImage);

            let input = todayW

            let wElements = $("<tr>");
            elements22.append(wElements);
            let description = weatherType[input];
            const day7 = $("<th>").html(description);
            wElements.append(day7);

            let imageToday;

            // if (parseInt(input)  8) {
            //     imageToday = $("<div>").prepend("<img src =./assets/sun-icon3.png alt = Sun>");
            // }
            if (parseInt(input) < 2) {
                imageToday = $("<div>").prepend("<img src = ./assets/sun-icon3.png alt = sun>");
            } else if (parseInt(input) < 6) {
                imageToday = $("<div>").prepend("<img src = ./assets/slightCloud2.png alt = slight-cloud>");
            } else if (parseInt(input) < 9) {
                imageToday = $("<div>").prepend("<img src = ./assets/cloudy2.png alt = cloudy>");
            } else if (parseInt(input) < 14) {
                imageToday = $("<div>").prepend("<img src = ./assets/light-rain.png alt = light rain>");
            } else if (parseInt(input) < 17) {
                imageToday = $("<div>").prepend("<img src = ./assets/heavy-rain.png alt = heavy rain>");
            } else if (parseInt(input) < 20) {
                imageToday = $("<div>").prepend("<img src = ./assets/sleet.png alt = sleet>");
            } else if (parseInt(input) < 23) {
                imageToday = $("<div>").prepend("<img src = ./assets/hail.png alt = hail>");
            } else if (parseInt(input) < 29) {
                imageToday = $("<div>").prepend("<img src = ./assets/snow.png alt = snowing>");
            } else {
                imageToday = $("<div>").prepend("<img src = ./assets/thunder.png alt = thunder>")
            }

            console.log(parseInt(input) + "hgjkg" + "   " + input);

            weatherImage.append(imageToday);

            console.log(UV);
            console.log(temp);
            temp.sort();
            console.log("This is the lowest temp " + temp[0] + "C");
            console.log("This is the highest temp " + temp[4] + "C");
            UV.sort();
            console.log(UV[4]);
            let lowTemp = temp[0];
            let hightemp = temp[4];

            let headElements = $("<tr>");
            elements22.append(headElements);
            let head1 = "Min temp";
            const day3 = $("<th>").html(head1);
            headElements.append(day3);
            let head2 = "Max temp";
            const day4 = $("<th>").html(head2);
            headElements.append(day4);

            let dayElements = $("<tr>");
            elements22.append(dayElements);
            const day = $("<th>").html(lowTemp);
            dayElements.append(day);
            const day2 = $("<th>").html(hightemp);
            dayElements.append(day2);

            let UVdata = UV[4];
            let head3 = "UV ";
            const day5 = $("<th>").html(head3);
            headElements.append(day5);
            const day6 = $("<th>").html(UVdata);
            dayElements.append(day6);




            elements.append(elements22);

        }

    })
})
