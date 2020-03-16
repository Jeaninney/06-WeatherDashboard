//moment("2019-06-04 15:35").isSame("2019-04-06", "hour"); - would return false, not the same
//isBefore, isAfter, isSameOrBefore

//past is .bg-dark
//present is .bg-warning
//future is .bg-success
$(function () {

var now = moment();
$("#today").text(now.format("dddd, MMMM Do YYYY"));

var currenthour = now.format("H");

function init(){
    //cycling through each of the scheduling blocks and setting their
    //color based on the time 
    $(".hourblocktext").each(function (index) {
        var thisvalue = $(this).attr("value");
        
        // console.log(thisvalue);
        // console.log(currenthour);

        //this if will make the block of time that matches the current hour yellow
        if (currenthour == thisvalue) {
            $(this).addClass("bg-warning");
        }
        //this will make time blocks in the past turn dark grey
        else if (currenthour < thisvalue) {
            $(this).addClass("bg-success");
        }
        //this will make time blocks in the future green
        else {
            $(this).addClass("text-light bg-dark");
        }
        
        var whichEntry = $(this).attr("which");
        //setting the value of the entry to show what is stored locally
        var storedText = localStorage.getItem(whichEntry);
        console.log(whichEntry);
        if (storedText != null){
            
            $(this).text(storedText);
        }
        
        // $(".hourblocktext").text = localStorage.getItem()

    } )
}
init();

$("button").on("click", function (event) {
    event.preventDefault();
    var whichEntry = $(this).attr("which");
    console.log(whichEntry);
    
    if (whichEntry == "9am"){
        var store = $("#nine");
        console.log(store.val());
        localStorage.setItem(whichEntry, store.val());
    }
    else if (whichEntry == "10am"){
        var store = $("#ten");
        console.log(store.val());
        localStorage.setItem(whichEntry, store.val());
    }
    else if (whichEntry == "11am"){
        var store = $("#eleven");
        console.log(store.val());
        localStorage.setItem(whichEntry, store.val());
    }
    else if (whichEntry == "12pm"){
        var store = $("#twelve");
        console.log(store.val());
        localStorage.setItem(whichEntry, store.val());
    }
    else if (whichEntry == "1pm"){
        var store = $("#one");
        console.log(store.val());
        localStorage.setItem(whichEntry, store.val());
    }
    else if (whichEntry == "2pm"){
        var store = $("#two");
        console.log(store.val());
        localStorage.setItem(whichEntry, store.val());
    }
    else if (whichEntry == "3pm"){
        var store = $("#three");
        console.log(store.val());
        localStorage.setItem(whichEntry, store.val());
    }
    else if (whichEntry == "4pm"){
        var store = $("#four");
        console.log(store.val());
        localStorage.setItem(whichEntry, store.val());
    }
    else {
        var store = $("#five");
        console.log(store.val());
        localStorage.setItem(whichEntry, store.val());
    }




})


})