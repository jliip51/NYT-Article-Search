// var startYear = $("#year1").val() + "0101";
// var endYear = $("#year2").val() + "1231";
// var numberOfrecords = $("#records").val();
// var subject = $("#term").val();

var startYear = "1901" + "0101";
var endYear = "2016" + "1231";
var numberOfrecords = "5";
var subject = "Trump";

var articleCounter = 0;

var numArticles ;


function runThis(numArticles) {}

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

url += '?' + $.param({
  'api-key': "6c06af0cde254bc0a14d82aaa261021c" ,
  'q': subject ,
  'begin_date': startYear ,
  'end_date': endYear ,

});

$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);

  for (var i = 0; i < numArticles; i++) {

      articleCounter++;

      var wellSection = $("<div>");
      wellSection.addClass("well");
      wellSection.attr("id", "article-well-" + articleCounter);
      $("#well-section").append(wellSection);
}






}).fail(function(err) {
  throw err;
});
