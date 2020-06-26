// 1. When the DOM is ready, console.log the message “Let’s get ready to party with jQuery!”
$(document).ready(function () {
  console.log("Let's get ready to party with jQuery!");

  // Or use the shorthand:
  // $(function () {
  //   console.log("Let's get ready to party with jQuery!");
  // });

  // 2. Give all images inside of an article tag the class of image-center (this class is defined inside of the style tag in the head).
  $("article img").addClass("image-center");

  // 3. Remove the last paragraph in the article.
  $("p").last().remove();
  // OR
  //$("article p:last-child").remove();

  // 4. Set the font size of the title to be a random pixel size from 0 to 100.
  const fontSize = Math.floor(Math.random() * 101);
  $("#title").css("font-size", `${fontSize}px`);

  // 5. Add an item to the list; it can say whatever you want.
  // $("li").eq(1).after("<li>Goofy List Item");
  // Or (from the provided solution) add it to the end of the list:
  $("ol").append($("<li>", { text: "I can add to lists with jQuery!" }));

  // 6. Scratch that; the list is silly. Empty the aside and put a paragraph in it apologizing for the list’s existence.
  // $("aside").empty().append("<p>I'm so sorry!</p>");
  // Or from provided solution:
  $("aside")
    .empty()
    .append($("<p>", { text: "Sorry about that list :(" }));

  // 7. When you change the numbers in the three inputs on the bottom, the background color of the body should change to match whatever the three values in the inputs are.
  // const rgb = {
  //   red: `${$("input").get()[0].value}`,
  //   green: `${$("input").get()[1].value}`,
  //   blue: `${$("input").get()[2].value}`,
  // };
  // console.log(color);
  // $("body").on("change").css("background-color", `${color}`); //THIS WORKS!!

  // Set initial body color
  // $("body").css("background-color", `rgb(${rgb.red},${rgb.green},${rgb.blue})`);

  $(".form-control").on("change", function (e) {
    // console.log("Event: ", e);
    const rgb = {
      red: `${$("input").get()[0].value}`,
      green: `${$("input").get()[1].value}`,
      blue: `${$("input").get()[2].value}`,
    };
    const color = `rgb(${rgb.red},${rgb.green},${rgb.blue})`;
    $("body").css("background-color", color);
  });

  // can I use .animate() and pass in an object containing the input values?

  // 8. Add an event listener so that when you click on the image, it is removed from the DOM.
  $("img").on("click", function (e) {
    $(this).remove();
  });
  // Or from the provided solution:
  // $("img").on("click", function (e) {
  //   $(e.target).remove();
  // });
});
