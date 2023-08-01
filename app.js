const firstSelect = document.querySelector("#industry_category"); // first select tag element
const secondSelect = document.querySelector("#industry_sub_category"); // second select tag element

const priceInput = document.querySelector(".price"); // price div
const titleInput = document.querySelector(".title"); // title div
const descriptionInput = document.querySelector(".description"); // description div
const servicesWrapper = document.querySelector(".services-wrapper"); // services will be displayed as "li" in-here

const paymentStepperUL = document.querySelector(".payment-stepper-ul"); // payment stepper ul
const progressContentSection = document.querySelector(
  "#progress-content-section"
); // progress-content-section

let selectedData = {}; // after selecting second select option.. we will get a particular object data, that will be stored in-here

// standard website offers dataset
const standardWebsiteOffers = [
  "Basic Landing Page",
  "Portfolio Website",
  "Static Website",
];
// CMS website offers dataset
const cmsWebsiteOffers = [
  "Multiple Pages Website",
  "Single Page Application",
  "Learning Management System",
  "CRM Tool",
];
// E-Commerce website offers dataset
const eCommerceWebsiteOffers = [
  "Multiple Products Ecommerce Store",
  "Integrated Payment Gateway",
  "Approved Multiple Tests",
];

//  All the services dataset offered by us
const dataset = [
  {
    category: "Standard Website",
    subCategories: [
      {
        name: "Basic Landing Page",
        price: 149,
        services: [
          "Pages: 3",
          "Domain: Yes",
          "Hosting: Yes",
          "Testing: No",
          "Responsive: Yes",
        ],
        paymentMileStones: [
          {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Repellat, impedit! Lorem ipsum dolor sit amet consectetur,adipisicing elit.",
          },
          {
            desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Repellat, impedit! Lorem ipsum dolor sit amet consectetur,
          adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Repellat, impedit! Lorem ipsum dolor sit amet consectetur,
          adipisicing elit.`,
          },
          {
            desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Repellat, Lorem ipsum dolor sit amet consectetur,
          adipisicing elit.`,
          },
        ],
      },
      {
        name: "Portfolio Website",
        price: 99,
        services: [
          "Pages: 2 ",
          "Domain: Yes",
          "Hosting: Yes",
          "Testing: No",
          "Responsive: Yes",
        ],
        paymentMileStones: [
          {
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Repellat, impedit! Lorem ipsum dolor sit amet consectetur,adipisicing elit.",
          },
          {
            desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Repellat, impedit! Lorem ipsum dolor sit amet consectetur,
          adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Repellat, impedit! Lorem ipsum dolor sit amet consectetur,
          adipisicing elit.`,
          },
          {
            desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Repellat, Lorem ipsum dolor sit amet consectetur,
          adipisicing elit.`,
          },
          {
            desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Repellat, `,
          },
          {
            desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Repellat, Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Repellat, Lorem ipsum dolor sit amet consectetur,
          adipisicing elit`,
          },
        ],
      },
      {
        name: "Static Website",
        price: 49,
        services: [
          "Pages: 1",
          "Domain: Yes",
          "Hosting: Yes",
          "Testing: No",
          "Responsive: Yes",
        ],
      },
    ],
  },
  {
    category: "CMS Website",
    subCategories: [
      {
        name: "Multiple Pages Website",
        price: 349,
        services: [
          "Pages: 3",
          "Domain: Yes",
          "Hosting: Yes",
          "Testing: No",
          "Responsive: Yes",
        ],
      },
      {
        name: "Single Page Application",
        price: 399,
        services: [
          "Pages: 2",
          "Domain: Yes",
          "Hosting: Yes",
          "Testing: Yes",
          "Responsive: Yes",
        ],
      },
      {
        name: "Learning Management System",
        price: 699,
        services: [
          "Pages: 8",
          "Domain: Yes",
          "Hosting: Yes",
          "Testing: No",
          "Responsive: Yes",
        ],
      },
      {
        name: "CRM Tool",
        price: 899,
        services: [
          "Pages: 4",
          "Domain: Yes",
          "Hosting: Yes",
          "Testing: Yes",
          "Responsive: Yes",
        ],
      },
    ],
  },
  {
    category: "E-commerce Website",
    subCategories: [
      {
        name: "Multiple Products Ecommerce Store",
        price: 799,
        services: [
          "Pages: 5",
          "Domain: Yes",
          "Hosting: Yes",
          "Testing: Yes",
          "Responsive: Yes",
        ],
      },
      {
        name: "Integrated Payment Gateway",
        price: 699,
        services: [
          "Pages: 1",
          "Domain: Yes",
          "Hosting: Yes",
          "Testing: Yes",
          "Responsive: Yes",
        ],
      },
      {
        name: "Approved Multiple Tests",
        price: 499,
        services: [
          "Pages: ---",
          "Domain: Yes",
          "Hosting: Yes",
          "Testing: Yes",
          "Responsive: Yes",
        ],
      },
    ],
  },
];

// helper function for creating options for second select tag
function createOptions(service) {
  secondSelect.innerHTML = "";

  const offers =
    service === "Standard Website"
      ? standardWebsiteOffers
      : service === "CMS Website"
      ? cmsWebsiteOffers
      : service === "E-commerce Website"
      ? eCommerceWebsiteOffers
      : [];

  const option = document.createElement("option");
  option.value = "";
  option.textContent = "Select an Option";
  secondSelect.appendChild(option);

  offers.map((offer) => {
    const option = document.createElement("option");
    option.value = offer;
    option.textContent = offer;
    secondSelect.appendChild(option);
  });
}

// helper function for clearing all the content from UI, after 1st select element option changes
function clear() {
  priceInput.innerHTML = "";
  titleInput.innerHTML = "";
  descriptionInput.innerHTML = "";
  servicesWrapper.innerHTML = "";
}

// calling createOptions function if 1st select option changes.
function onFirstSelectChange() {
  switch (firstSelect.value) {
    case "Standard Website":
      createOptions("Standard Website");
      clear();
      break;
    case "CMS Website":
      createOptions("CMS Website");
      clear();
      break;
    case "E-commerce Website":
      createOptions("E-commerce Website");
      clear();
      break;
    default:
      secondSelect.innerHTML = `<option value="" selected>Select Industry....</option>`;
      clear();
      break;
  }
}

// displaying content on UI depending on the 2nd select option value.
function onSecondSelectChange() {
  servicesWrapper.innerHTML = "";
  const object = dataset.find(({ category }) => category === firstSelect.value);

  const actualData = object.subCategories.find(
    ({ name }) => name === secondSelect.value
  );

  // ------------- this code will display on the bottom of the page
  priceInput.innerHTML = `$ ${actualData.price}`;
  titleInput.innerHTML = firstSelect.value;
  descriptionInput.innerHTML = actualData.name;
  actualData.services.map((service) => {
    const li = document.createElement("li");
    li.innerHTML = service;
    servicesWrapper.appendChild(li);
  });
  // ------------end of above code

  // ------------this code will update the payment milestones
  // below code helps to update the Steps Header
  paymentStepperUL.innerHTML = `
    ${actualData.paymentMileStones
      .map(
        (milestone, index) =>
          ` 
      <li class="step step0${index + 1} ${index + 1 === 1 ? "active" : ""}">
        <div class="step-inner">Step ${index + 1}</div>
      </li> 
      `
      )
      .join("")}
  `;
  // ------ end

  // below code helps to update the Steps Content
  progressContentSection.innerHTML = `
      ${actualData?.paymentMileStones
        ?.map(
          (milestone, index) =>
            `<div class="section-content step${index + 1} ${
              index + 1 === 1 ? "active" : ""
            }">
          <h2>Step ${index + 1}</h2>
          <p>
            ${milestone.desc}
          </p>
        </div>
  `
        )
        .join("")}
  `;

  preparePaymentSteps(actualData?.paymentMileStones?.length);
}

// Price Converter Code 👇 --------------------------------------------------
const packagePrice = document.querySelectorAll(".total-package-price"); // 499 amount text tag
const currencyIcon = document.querySelectorAll(".currency-icon"); // $ symbol text tag
const packagePriceAmount = document.querySelector("#price-converter-select"); // price converter select tag

// fn for handling & changing price currency on the UI
function handlePriceConverter() {
  switch (packagePriceAmount.value) {
    case "USD":
      packagePrice[0].innerHTML = "499";
      packagePrice[1].innerHTML = "499";
      currencyIcon[0].innerHTML = "$";
      currencyIcon[1].innerHTML = "$";
      break;

    case "INR":
      packagePrice[0].innerHTML = "39999";
      packagePrice[1].innerHTML = "39999";
      currencyIcon[0].innerHTML = "₹";
      currencyIcon[1].innerHTML = "₹";
      break;

    case "CAD":
      packagePrice[0].innerHTML = "650";
      packagePrice[1].innerHTML = "650";
      currencyIcon[0].innerHTML = "$";
      currencyIcon[1].innerHTML = "$";
      break;

    case "AUD":
      packagePrice[0].innerHTML = "750";
      packagePrice[1].innerHTML = "750";
      currencyIcon[0].innerHTML = "$";
      currencyIcon[1].innerHTML = "$";
      break;

    case "GBP":
      packagePrice[0].innerHTML = "385";
      packagePrice[1].innerHTML = "385";
      currencyIcon[0].innerHTML = "£";
      currencyIcon[1].innerHTML = "£";
      break;

    case "EUR":
      packagePrice[0].innerHTML = "450";
      packagePrice[1].innerHTML = "450";
      currencyIcon[0].innerHTML = "€";
      currencyIcon[1].innerHTML = "€";
      break;

    default:
      packagePrice[0].innerHTML = "499";
      packagePrice[1].innerHTML = "499";
      currencyIcon[0].innerHTML = "$";
      currencyIcon[1].innerHTML = "$";
      break;
  }
}

//----------------------------

// STEPPER JS CODE --------------------------------------------------------------------------------
function preparePaymentSteps(paymentStepsCount) {
  // Set the calculated width as the CSS property for the step class
  const steps = document.querySelectorAll(".step");
  steps.forEach((step) => {
    step.style.width = `${
      paymentStepsCount === 4 ? 25 : paymentStepsCount === 3 ? 33 : 20
    }%`;
  });

  $(".step").click(function () {
    $(this).addClass("active").prevAll().addClass("active");
    $(this).nextAll().removeClass("active");
  });

  if (paymentStepsCount === 4) {
    $(".step01").click(function () {
      $("#line-progress").css("width", "25%");
      $(".step1").addClass("active").siblings().removeClass("active");
    });

    $(".step02").click(function () {
      $("#line-progress").css("width", "50%");
      $(".step2").addClass("active").siblings().removeClass("active");
    });

    $(".step03").click(function () {
      $("#line-progress").css("width", "75%");
      $(".step3").addClass("active").siblings().removeClass("active");
    });

    $(".step04").click(function () {
      $("#line-progress").css("width", "100%");
      $(".step4").addClass("active").siblings().removeClass("active");
    });
  } else if (paymentStepsCount === 3) {
    $(".step01").click(function () {
      $("#line-progress").css("width", "5%");
      $(".step1").addClass("active").siblings().removeClass("active");
    });

    $(".step02").click(function () {
      $("#line-progress").css("width", "50%");
      $(".step2").addClass("active").siblings().removeClass("active");
    });

    $(".step03").click(function () {
      $("#line-progress").css("width", "100%");
      $(".step3").addClass("active").siblings().removeClass("active");
    });
  } else {
    $(".step01").click(function () {
      $("#line-progress").css("width", "1%");
      $(".step1").addClass("active").siblings().removeClass("active");
    });
    $(".step02").click(function () {
      $("#line-progress").css("width", "25%");
      $(".step2").addClass("active").siblings().removeClass("active");
    });
    $(".step03").click(function () {
      $("#line-progress").css("width", "50%");
      $(".step3").addClass("active").siblings().removeClass("active");
    });
    $(".step04").click(function () {
      $("#line-progress").css("width", "75%");
      $(".step4").addClass("active").siblings().removeClass("active");
    });
    $(".step05").click(function () {
      $("#line-progress").css("width", "100%");
      $(".step5").addClass("active").siblings().removeClass("active");
    });
  }
}

preparePaymentSteps();
