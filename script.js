<script src="https://unpkg.com/@popperjs/core@2/dist/umd/popper.min.js"></script>
<script src="https://unpkg.com/tippy.js@6/dist/tippy-bundle.umd.js"></script>
<script src="https://unpkg.com/@popperjs/core@2"></script>
<script src="https://unpkg.com/tippy.js@6"></script>
<script src="https://unpkg.com/intersection-observer@0.5.1/intersection-observer.js"></script>
<script src="https://unpkg.com/scrollama"></script>

document.querySelector(".container1").classList.add("hide");
document.querySelector(".container2").classList.add("hide");
document.querySelector(".container3").classList.add("hide");
document.querySelector(".container4").classList.add("hide");
document.querySelector(".container5").classList.add("hide");
document.querySelector(".container6").classList.add("hide");
document.querySelector(".container7").classList.add("hide");
document.querySelector(".container8").classList.add("hide");
document.querySelector(".container9").classList.add("hide");
document.querySelector(".container10").classList.add("hide");

// using d3 for convenience
var main = document.querySelector("main");
var scrolly = main.querySelector("#scrolly");
var sticky = scrolly.querySelector(".sticky-thing");
var article = scrolly.querySelector("article");
var steps = article.querySelectorAll(".step");

// initialize the scrollama
var scroller = scrollama();

// scrollama event handlers
function handleStepEnter(response) {
  // response = { element, direction, index }
  var el = response.element;
  console.log(el.dataset.step);

  // remove is-active from all steps
  // then add is-active to this step
  steps.forEach((step) => step.classList.remove("is-active"));
  el.classList.add("is-active");

  if (el.dataset.step != 1) {
    document.querySelector(".container1").classList.add("hide");
  } else {
    document.querySelector(".container1").classList.remove("hide");
  }

  if (el.dataset.step != 2) {
    document.querySelector(".container2").classList.add("hide");
  } else {
    document.querySelector(".container2").classList.remove("hide");
  }

  if (el.dataset.step != 3) {
    document.querySelector(".container3").classList.add("hide");
  } else {
    document.querySelector(".container3").classList.remove("hide");
  }

  if (el.dataset.step != 4) {
    document.querySelector(".container4").classList.add("hide");
  } else {
    document.querySelector(".container4").classList.remove("hide");
  }

  if (el.dataset.step != 5) {
    document.querySelector(".container5").classList.add("hide");
  } else {
    document.querySelector(".container5").classList.remove("hide");
  }

  if (el.dataset.step != 6) {
    document.querySelector(".container6").classList.add("hide");
  } else {
    document.querySelector(".container6").classList.remove("hide");
  }

  if (el.dataset.step != 7) {
    document.querySelector(".container7").classList.add("hide");
  } else {
    document.querySelector(".container7").classList.remove("hide");
  }

  if (el.dataset.step != 8) {
    document.querySelector(".container8").classList.add("hide");
  } else {
    document.querySelector(".container8").classList.remove("hide");
  }

  if (el.dataset.step != 9) {
    document.querySelector(".container9").classList.add("hide");
  } else {
    document.querySelector(".container9").classList.remove("hide");
  }

  if (el.dataset.step != 10) {
    document.querySelector(".container10").classList.add("hide");
  } else {
    document.querySelector(".container10").classList.remove("hide");
  }
}

function init() {
  // 2. setup the scroller passing options
  // 		this will also initialize trigger observations
  // 3. bind scrollama event handlers (this can be chained like below)
  scroller
    .setup({
      step: "#scrolly article .step",
      offset: 0.66,
      debug: false,
    })
    .onStepEnter(handleStepEnter);

  // setup resize event
  window.addEventListener("resize", scroller.resize);
}

// kick things off
init();

tippy("#btn1", {
  content:
    '<img src="https://cdn.glitch.global/7cebc84e-df9c-45e9-95c1-516a7a17465b/Sequence%20010.jpg?v=1676607072084" style="height: 180px; width: auto; margin-left: 5px"/><p>Both hands start on a "sidepull" hold. When grabbing a hold, you want your forearm perpendicular to the pulling edge of the hold.</p>',
  allowHTML: true,
});

tippy("#btn2", {
  content:
    '<img src="https://cdn.glitch.global/7cebc84e-df9c-45e9-95c1-516a7a17465b/Sequence%20015.jpg?v=1676607086189" style="height: 180px; width: auto; margin-left: 5px"/><p>On slippery footholds like this, climbers "smear" their foot by dropping their heal and maximizing the amount of shoe rubber in contact with the hold.</p>',
  allowHTML: true,
});

tippy("#btn3", {
  content: "My tooltip!",
});

tippy("#btn4", {
  content: "My tooltip!",
});

tippy("#btn5", {
  content: "My tooltip!",
});

tippy("#btn6", {
  content: "My tooltip!",
});
