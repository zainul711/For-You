var fontSize = 40;
if (window.screen.width > 700) fontSize = 55;
else if (window.screen.width > 1200) fontSize = 80;
var vara = new Vara(
  "#container",
  "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json",
  [
    {
      text: "Bersama mu",
      y: 150,
      delay: 900,
      fromCurrentPosition: { y: false },
      duration: 1700,
    },
    {
      text: "Ku akan dicintai dengan tulus",
      y: 150,
      fromCurrentPosition: { y: false },
      delay: 1000,
      duration: 2000,
    },
    {
      text: "Tanpa ragu ",
      y: 150,
      fromCurrentPosition: { y: false },
      delay: 800,
      duration: 1500,
    },
    {
      text: "ku akan memberikan cintaku",
      y: 150,
      fromCurrentPosition: { y: false },
      delay: 1000,
      duration: 2200,
    },
    {
      text: "Bersamaku kamu tak akan sendu",
      y: 150,
      fromCurrentPosition: { y: false },
      delay: 1000,
      duration: 3300,
    },
    {
      text: "Yakinkan kamu",
      y: 150,
      fromCurrentPosition: { y: false },
      delay: 1500,
      duration: 1800,
    },
    {
      text: "aku yang terbaik untukmu",
      y: 150,
      fromCurrentPosition: { y: false },
      delay: 1000,
      duration: 3200,
    },
  ],

  {
    strokeWidth: 2,
    color: "#fff",
    fontSize: fontSize,
    textAlign: "center",
  }
);
vara.ready(function () {
  var erase = true;
  vara.animationEnd(function (i, o) {
    if (i == "no_erase") erase = false;
    if (erase) {
      o.container.style.transition = "opacity 1s 1s";
      o.container.style.opacity = 0;
    }
  });
});
