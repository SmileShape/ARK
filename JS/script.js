function getTime()
{
    today = new Date();
    day = today.getDay();

    date = today.getDate();
    month = today.getMonth()+1;
    year = today.getFullYear();

    //Instrukcja wyboru - switch()
    switch(day)
    {
        case 0: day = "sunday"; break;
        case 1: day = "monday"; break;
        case 2: day = "tuesday"; break;
        case 3: day = "wednesday"; break;
        case 4: day = "thursday"; break;
        case 5: day = "friday"; break;
        case 6: day = "saturday"; break;
    }

    //Sprawdzenie warunków
    if(day < 10)
    day = "0" + day;

    if(month < 10)
    month = "0" + month;

    //Wyświetlenie aktualnej daty oraz godziny
    document.getElementById("time").innerHTML = day + ", " + date + "." + month + "." + year;

    setInterval("getTime()", 1000);
}