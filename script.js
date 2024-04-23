function makeTableFromCountry (country){
    let countryName;
    let countryCapital;
    let continentCountry;
    let pathofWorld;
    let timeDiff;
    let moneyName;
    let geographicObjects;
    let litracyWorks;
    let historicalEvents;
    let indexArr = 0;
    for (let i = 0; i < 9; i++) {
        // выполняю проверку для строк массива и добавляю значения в переменные
        if (typeof country[i] === 'string'){
            if (indexArr == 0){
                countryName = country[i];
            } else if (indexArr == 1){
                countryCapital = country[i];
            } else if (indexArr == 2){
                continentCountry = country[i];
            } else if (indexArr == 3){
                pathofWorld = country[i];
            } else {
                moneyName = country[i];
            }
            indexArr++;
        // разница по времени 
        } else if (typeof country[i] === 'number'){
            timeDiff = country[i];
        // проверяю то что это объект и не массив (Исторические события)
        } else if (typeof country[i] === 'object' && !Array.isArray(country[i])){
            historicalEvents = country[i];
        // проверяю что это массив, если массив из строк, то географические объекты, иначе литературые произведения
        } else if (Array.isArray(country[i])){
            if (typeof country[i][0] === 'string'){
                geographicObjects = country[i];
            } else {
                litracyWorks = country[i];
                }
            }

        }
        // далее я начинаю формировать для каждый страны html разметку из строк 
        // заголовок
        let headerPage = "<h1 style='background:lavenderblush;'>" + countryName + " - " + countryCapital +  "</h1>";
        // таблица с основыными даныыми
        let infoTable = "<table width=30%>"
        infoTable += "<tr><td>" + about[2] + ":" + '</td><td>' +  continentCountry + '</td></tr>';
        infoTable += "<tr><td>" + about[3] + ":" + '</td><td>' +  pathofWorld + '</td></tr>';
        infoTable += "<tr><td>" + about[4] + ":" + '</td><td>' +  timeDiff + '</td></tr>';
        // преобразуем географические объекты с помощью map и функции outArrayData
        let gObj = geographicObjects.map(outArrayData);
        let geografyTable = "<table width='20%' style='border:1px solid black;'>";
        geografyTable +="<b>" + "<p>Географические объекты:</p>" + "</b>";
        gObj.map(function(item) {
            geografyTable += item;
        });
        geografyTable += "</table>";
        // преобразуем литературные работы с помощью map и функции outArrayData
        let lObj = litracyWorks.map(outArrayData);
        let litracyTable = "<table width='50%' style='border:1px solid black;'>";
        lObj.map(function(item){
            litracyTable += item;
        });
        litracyTable += "</table>"
        // преобразуем историчиские объекты в таблицу с помощью цикла for
        let historicalTable = "<table width=60%' style='border:1px solid black;'>";
        for (let date in historicalEvents) {
            historicalTable += "<tr><td>" + date + "</td><td>" + historicalEvents[date] + "</td></tr>";
        }
        historicalTable += "</table>"
        // объединяем все строки в одну 
        scriptPage =  headerPage + infoTable + geografyTable + "<br>"+ "<b>" + about[8] + ":" + "</b>" +  "<br>" +  historicalTable;
        // возвращаем HTML разметку в виде строки
        return scriptPage;

    }

    
// функция для создания таблицы, которую мы вызываем через map для литературных произведений и исторических событий 
function outArrayData(item, index){
    let strReturn = " ";
    if (typeof item === 'string') {
        strReturn += "<tr><td>" + String.fromCharCode('\u2776'.charCodeAt(0) + index) + "</td><td>" + item + "</td></tr>";
    } else if (Array.isArray(item)) {
        strReturn += "<tr><td>" + String.fromCharCode('\u2776'.charCodeAt(0) + index) + "</td><td>" + item[0] + " «" + item[1] + "» (" + item[2] + ");</td></tr>";
    }
    return strReturn;
}



//map - создает новый массив, заполненный результатами вызова предоставленной функции для каждого элемента вызываемого массива.
/* когда map применяется к массиву countries, то она вызывает функцию makeTableFromCountry для каждого элемента countries, 
то есть подмассива с информацией со страной, именно поэтому мы передаём в функцию подмассив из 9 элементов и обработываем его.
*/
countriesTable=countries.map(makeTableFromCountry);
countriesTable.forEach(function(info) {
    document.body.innerHTML+=info+"<br>";
});
// countriesTable будет содержать HTML-код для одной страны.
/* в функции, переданной методу forEach, каждый элемент массива (каждая строка с HTML-кодом для таблицы) добавляется 
к содержимому тела HTML-документа (document.body.innerHTML) 
с помощью оператора +=, который добавляет строку к существующему HTML-содержимому.*/
/*каждая строка с HTML-кодом для таблицы отображается в документе, так как она добавляется к содержимому тела HTML-документа 
с помощью document.body.innerHTML.*/