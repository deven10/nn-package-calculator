const firstSelect = document.querySelector("#industry_category"); // first select tag element
const secondSelect = document.querySelector("#industry_sub_category"); // second select tag element

const packageTitle = document.querySelector(".package-title"); // Main title of the package

const packagePrice = document.querySelectorAll(".total-package-price"); // both price 499 amount text tag
const currencyIcon = document.querySelectorAll(".currency-icon"); // both $ symbol text tag
const packagePriceAmount = document.querySelector("#price-converter-select"); // price converter select tag

const featuresUL = document.querySelector(".features-ul");

const packageDescriptionTag = document.querySelector(".package-description"); // package description text tag
const projectTimelineTag = document.querySelector(".project-timeline"); // project time line text tag

let initialSelectedData = {
  category: "Standard Website",
  subCategory: "Standard Website",
  packageDescription:
    "Our standard website package offers a larger canvas to organize your content, enabling clear sections for different purposes. This helps users engage better, find information easily, and navigate through your offerings smoothly.",
  projectTimeline:
    "We can create this type of website for you within 5 working days, ensuring a swift and efficient process.",
  price: 150,
  features: [
    {
      heading: "Domain Registration",
      description:
        "Domain registration services for popular extensions such as .com, .net, .org, .in, and more...",
    },
    {
      heading: "2 GB Web Hosting with SSL",
      description:
        "Get reliable web hosting with business email and SSL (https://) setup",
    },
    {
      heading: "5 Web Pages Creation",
      description:
        "We'll create a unique custom webpage with html/css/php/jQuery to meet your website and business needs.",
    },
    {
      heading: "Mobile Friendly Design",
      description:
        "Get a mobile-friendly website with responsive design for seamless browsing on any mobile device.",
    },
    {
      heading: "Professional Web Design",
      description:
        "Creative, functional, and impressive web design services for a lasting impact.",
    },
    {
      heading: "Animated Images Slider on Homepage",
      description:
        "Dynamic animated images slider showcasing a series of visually appealing and eye-catching images that slides smoothly, adding an interactive and engaging element to the website's first impression.",
    },
    {
      heading: "Google Analytics Setup",
      description:
        "Google Analytics setup to gather insightful data and analytics about its performance, user behavior, traffic sources, and other essential metrics.",
    },
    {
      heading: "XML Sitemap Creation & Submission",
      description:
        "We create and submit XML Sitemap to search engines, ensuring your website's pages are effectively indexed and easily found by potential customers.",
    },
    {
      heading: "Social Media Integration",
      description:
        "We'll incorporate social media icons on your website, linking them to your respective social profiles, enabling easy engagement with your audience across platforms.",
    },
    {
      heading: "Inquiry/Contact Form",
      description:
        "Add a user-friendly Inquiry/Contact Form to streamline communication and capture potential customer inquiries on your website.",
    },
    {
      heading: "Lifetime Technical Support",
      description:
        "Free technical support for as long as your website remains under our care and control, ensuring reliable assistance and resolving any technical issues that may arise.",
    },
  ],
}; // after selecting second select option.. we will get a particular object data, that will be stored in-here

// standard website offers dataset
const standardWebsiteOffers = [
  "Single Page Website",
  "Standard Website",
  "Professional Business Website",
];
// CMS website offers dataset
const cmsWebsiteOffers = [
  "Basic CMS Website",
  "Standard CMS Website",
  "Premium CMS Website",
];
// E-Commerce website offers dataset
const eCommerceWebsiteOffers = [
  "Standard Ecommerce Website",
  "Premium Ecommerce Website",
];

//  All the services dataset offered by us
const dataset = [
  {
    category: "Standard Website",
    subCategories: [
      {
        name: "Single Page Website",
        price: 65,
        packageDescription:
          "Neel Networks offers cost-effective expertise in crafting single-page websites for just $65, ensuring efficient content integration, intuitive design, and smooth navigation, resulting in a compelling online presence.",
        projectTimeline:
          "We can create a single-page website within 2 working days, ensuring a rapid and efficient turnaround.",
        features: [
          {
            heading: "Domain Registration",
            description:
              "Domain registration services for popular extensions such as .com, .net, .org, .in, and more...",
          },
          {
            heading: "1 GB Web Hosting with SSL",
            description:
              "Get reliable web hosting with business email and SSL (https://) setup",
          },
          {
            heading: "Single Page Creation",
            description:
              "We'll create a unique custom webpage with HTML and CSS to meet your website and business needs.",
          },
          {
            heading: "Mobile Friendly Design",
            description:
              "Get a mobile-friendly website with responsive design for seamless browsing on any mobile device.",
          },
          {
            heading: "Professional Web Design",
            description:
              "Creative, functional, and impressive web design services for a lasting impact.",
          },
          {
            heading: "Lifetime Technical Support",
            description:
              "Free technical support for as long as your website remains under our care and control, ensuring reliable assistance and resolving any technical issues that may arise.",
          },
        ],
      },
      {
        name: "Standard Website",
        price: 150,
        packageDescription:
          "Our standard website package offers a larger canvas to organize your content, enabling clear sections for different purposes. This helps users engage better, find information easily, and navigate through your offerings smoothly.",
        projectTimeline:
          "We can create this type of website for you within 5 working days, ensuring a swift and efficient process.",
        features: [
          {
            heading: "Domain Registration",
            description:
              "Domain registration services for popular extensions such as .com, .net, .org, .in, and more...",
          },
          {
            heading: "2 GB Web Hosting with SSL",
            description:
              "Get reliable web hosting with business email and SSL (https://) setup",
          },
          {
            heading: "5 Web Pages Creation",
            description:
              "We'll create a unique custom webpage with html/css/php/jQuery to meet your website and business needs.",
          },
          {
            heading: "Mobile Friendly Design",
            description:
              "Get a mobile-friendly website with responsive design for seamless browsing on any mobile device.",
          },
          {
            heading: "Professional Web Design",
            description:
              "Creative, functional, and impressive web design services for a lasting impact.",
          },
          {
            heading: "Animated Images Slider on Homepage",
            description:
              "Dynamic animated images slider showcasing a series of visually appealing and eye-catching images that slides smoothly, adding an interactive and engaging element to the website's first impression.",
          },
          {
            heading: "Google Analytics Setup",
            description:
              "Google Analytics setup to gather insightful data and analytics about its performance, user behavior, traffic sources, and other essential metrics.",
          },
          {
            heading: "XML Sitemap Creation & Submission",
            description:
              "We create and submit XML Sitemap to search engines, ensuring your website's pages are effectively indexed and easily found by potential customers.",
          },
          {
            heading: "Social Media Integration",
            description:
              "We'll incorporate social media icons on your website, linking them to your respective social profiles, enabling easy engagement with your audience across platforms.",
          },
          {
            heading: "Inquiry/Contact Form",
            description:
              "Add a user-friendly Inquiry/Contact Form to streamline communication and capture potential customer inquiries on your website.",
          },
          {
            heading: "Lifetime Technical Support",
            description:
              "Free technical support for as long as your website remains under our care and control, ensuring reliable assistance and resolving any technical issues that may arise.",
          },
        ],
      },
      {
        name: "Professional Business Website",
        price: 300,
        packageDescription:
          "Neel Networks delivers a polished professional business website that showcases your company's essence, services, and contact information in a sleek and user-friendly format, helping you make a strong online impression.",
        projectTimeline:
          "We can build your professional business website in a maximum of 10 working days, ensuring a timely and effective online presence for your company.",
        features: [
          {
            heading: "Domain Registration",
            description:
              "Domain registration services for popular extensions such as .com, .net, .org, .in, and more...",
          },
          {
            heading: "5 GB Web Hosting with SSL",
            description:
              "Get reliable web hosting with business email and SSL (https://) setup",
          },
          {
            heading: "15 Web Pages Creation",
            description:
              "We'll create a unique custom webpage with html/css/php/jQuery to meet your website and business needs.",
          },
          {
            heading: "Mobile Friendly Design",
            description:
              "Get a mobile-friendly website with responsive design for seamless browsing on any mobile device.",
          },
          {
            heading: "Professional Web Design",
            description:
              "Creative, functional, and impressive web design services for a lasting impact.",
          },
          {
            heading: "Animated Images Slider on Homepage",
            description:
              "Dynamic animated images slider showcasing a series of visually appealing and eye-catching images that slides smoothly, adding an interactive and engaging element to the website's first impression.",
          },
          {
            heading: "Social Media Integration",
            description:
              "We'll incorporate social media icons on your website, linking them to your respective social profiles, enabling easy engagement with your audience across platforms.",
          },
          {
            heading: "Inquiry/Contact Form",
            description:
              "Add a user-friendly Inquiry/Contact Form to streamline communication and capture potential customer inquiries on your website.",
          },
          {
            heading: "Website Live Chat",
            description:
              "Enhance customer engagement and support with Live Chat integration, enabling real-time communication and assistance on your website.",
          },
          {
            heading: "Onsite SEO Setup",
            description:
              "Optimization of various elements on your website, such as content, meta tags, URLs, and internal linking, to enhance search engine visibility and improve organic search rankings.",
          },
          {
            heading: "Google Search Console Setup",
            description:
              "GSC will allow you to monitor and optimize your website presence in Google search results, providing valuable insights, diagnostic tools, and reports for better performance and visibility.",
          },
          {
            heading: "Google Analytics Setup",
            description:
              "Google Analytics setup to gather insightful data and analytics about its performance, user behavior, traffic sources, and other essential metrics.",
          },
          {
            heading: "XML Sitemap Creation & Submission",
            description:
              "We create and submit XML Sitemap to search engines, ensuring your website's pages are effectively indexed and easily found by potential customers.",
          },
          {
            heading: "Lifetime Technical Support",
            description:
              "Free technical support for as long as your website remains under our care and control, ensuring reliable assistance and resolving any technical issues that may arise.",
          },
        ],
      },
    ],
  },
  {
    category: "CMS Website",
    subCategories: [
      {
        name: "Basic CMS Website",
        price: 200,
        packageDescription:
          "Neel Networks offers a simple and effective CMS WordPress website, with around 5 pages. You'll be able to easily handle and update your content. Our aim is to create a professional online space for your business.",
        projectTimeline:
          "We can create this website in a maximum of 5 working days, ensuring a speedy setup for your Simple CMS WordPress site.",
        features: [
          {
            heading: "Domain Registration",
            description:
              "Domain registration services for popular extensions such as .com, .net, .org, .in, and more...",
          },
          {
            heading: "2 GB Web Hosting with SSL",
            description:
              "Get reliable web hosting with business email and SSL (https://) setup",
          },
          {
            heading: "5 Pages Creation",
            description:
              "We'll create a unique 5 webpages using WordPress to meet your website and business needs.",
          },
          {
            heading: "Mobile Friendly Design",
            description:
              "Get a mobile-friendly website with responsive design for seamless browsing on any mobile device.",
          },
          {
            heading: "Professional Web Design",
            description:
              "Creative, functional, and impressive web design services for a lasting impact.",
          },
          {
            heading: "Animated Images Slider on Homepage",
            description:
              "Dynamic animated images slider showcasing a series of visually appealing and eye-catching images that slides smoothly, adding an interactive and engaging element to the website's first impression.",
          },
          {
            heading: "Admin Dashboard",
            description:
              "Empower your website management with a user-friendly admin dashboard, offering streamlined control and efficient monitoring capabilities.",
          },
          {
            heading: "Google Analytics Setup",
            description:
              "Google Analytics setup to gather insightful data and analytics about its performance, user behavior, traffic sources, and other essential metrics.",
          },
          {
            heading: "XML Sitemap Creation & Submission",
            description:
              "We create and submit XML Sitemap to search engines, ensuring your website's pages are effectively indexed and easily found by potential customers.",
          },
          {
            heading: "Social Media Integration",
            description:
              "We'll incorporate social media icons on your website, linking them to your respective social profiles, enabling easy engagement with your audience across platforms.",
          },
          {
            heading: "Inquiry/Contact Form",
            description:
              "Add a user-friendly Inquiry/Contact Form to streamline communication and capture potential customer inquiries on your website.",
          },
          {
            heading: "Lifetime Technical Support",
            description:
              "Free technical support for as long as your website remains under our care and control, ensuring reliable assistance and resolving any technical issues that may arise.",
          },
        ],
      },
      {
        name: "Standard CMS Website",
        price: 350,
        packageDescription:
          "Neel Networks offers a comprehensive Standard CMS WordPress website package, featuring around 15 pages and a fully set up blog. This solution empowers you to manage your content effortlessly.",
        projectTimeline:
          "We can create this website for you in a maximum of 10 working days, ensuring a prompt setup for your Standard CMS WordPress site with a blog.",
        features: [
          {
            heading: "Domain Registration",
            description:
              "Domain registration services for popular extensions such as .com, .net, .org, .in, and more...",
          },
          {
            heading: "2 GB Web Hosting with SSL",
            description:
              "Get reliable web hosting with business email and SSL (https://) setup",
          },
          {
            heading: "15 Pages Creation",
            description:
              "We'll create a unique 15 webpages using WordPress to meet your website and business needs.",
          },
          {
            heading: "Mobile Friendly Design",
            description:
              "Get a mobile-friendly website with responsive design for seamless browsing on any mobile device.",
          },
          {
            heading: "Professional Web Design",
            description:
              "Creative, functional, and impressive web design services for a lasting impact.",
          },
          {
            heading: "Animated Images Slider on Homepage",
            description:
              "Dynamic animated images slider showcasing a series of visually appealing and eye-catching images that slides smoothly, adding an interactive and engaging element to the website's first impression.",
          },
          {
            heading: "Admin Dashboard",
            description:
              "Empower your website management with a user-friendly admin dashboard, offering streamlined control and efficient monitoring capabilities.",
          },
          {
            heading: "Video Guide to Administer Website",
            description:
              "A comprehensive video guide that simplifies the process of administering your website, providing step-by-step instructions for efficient and effective management.",
          },
          {
            heading: "Website Live Chat",
            description:
              "Enhance customer engagement and support with Live Chat integration, enabling real-time communication and assistance on your website.",
          },
          {
            heading: "Blog Setup and Integration",
            description:
              "Unlock the power of blogging to connect with your audience, share valuable insights, and establish your online presence as a thought leader in your industry.",
          },
          {
            heading: "Google Analytics Setup",
            description:
              "Google Analytics setup to gather insightful data and analytics about its performance, user behavior, traffic sources, and other essential metrics.",
          },
          {
            heading: "XML Sitemap Creation & Submission",
            description:
              "We create and submit XML Sitemap to search engines, ensuring your website's pages are effectively indexed and easily found by potential customers.",
          },
          {
            heading: "Social Media Integration",
            description:
              "We'll incorporate social media icons on your website, linking them to your respective social profiles, enabling easy engagement with your audience across platforms.",
          },
          {
            heading: "Inquiry/Contact Form",
            description:
              "Add a user-friendly Inquiry/Contact Form to streamline communication and capture potential customer inquiries on your website.",
          },
          {
            heading: "Lifetime Technical Support",
            description:
              "Free technical support for as long as your website remains under our care and control, ensuring reliable assistance and resolving any technical issues that may arise.",
          },
        ],
      },
      {
        name: "Premium CMS Website",
        price: 500,
        packageDescription:
          "A feature-rich CMS WordPress website with approximately 20 pages, including a blog setup. We go the extra mile by providing exclusive online training to help you confidently manage the WordPress CMS system.",
        projectTimeline:
          "We can develop this website for you within 15 working days, offering an exclusive online training to master the WordPress CMS system.",
        features: [
          {
            heading: "Domain Registration",
            description:
              "Domain registration services for popular extensions such as .com, .net, .org, .in, and more...",
          },
          {
            heading: "10 GB Web Hosting with SSL",
            description:
              "Get reliable web hosting with business email and SSL (https://) setup",
          },
          {
            heading: "20 Pages Creation",
            description:
              "We'll create a unique 20 webpages using WordPress to meet your website and business needs.",
          },
          {
            heading: "Mobile Friendly Design",
            description:
              "Get a mobile-friendly website with responsive design for seamless browsing on any mobile device.",
          },
          {
            heading: "Professional Web Design",
            description:
              "Creative, functional, and impressive web design services for a lasting impact.",
          },
          {
            heading: "Animated Images Slider on Homepage",
            description:
              "Dynamic animated images slider showcasing a series of visually appealing and eye-catching images that slides smoothly, adding an interactive and engaging element to the website's first impression.",
          },
          {
            heading: "Admin Dashboard",
            description:
              "Empower your website management with a user-friendly admin dashboard, offering streamlined control and efficient monitoring capabilities.",
          },
          {
            heading: "Video Guide to Administer Website",
            description:
              "A comprehensive video guide that simplifies the process of administering your website, providing step-by-step instructions for efficient and effective management.",
          },
          {
            heading: "Website Live Chat",
            description:
              "Enhance customer engagement and support with Live Chat integration, enabling real-time communication and assistance on your website.",
          },
          {
            heading: "Online WordPress CMS Training",
            description:
              "Our online training will empower you to efficiently manage your WordPress website, enabling you to add unlimited content and pages while maintaining your blog system effectively.",
          },
          {
            heading: "Onsite SEO Setup",
            description:
              "Optimization of various elements on your website, such as content, meta tags, URLs, and internal linking, to enhance search engine visibility and improve organic search rankings.",
          },
          {
            heading: "Online Booking & Appointments",
            description:
              "Streamline the scheduling process by providing a convenient and efficient way for customers to book services, appointments, or reservations directly through your website.",
          },
          {
            heading: "Blog Setup and Integration",
            description:
              "Unlock the power of blogging to connect with your audience, share valuable insights, and establish your online presence as a thought leader in your industry.",
          },
          {
            heading: "Google Analytics Setup",
            description:
              "Google Analytics setup to gather insightful data and analytics about its performance, user behavior, traffic sources, and other essential metrics.",
          },
          {
            heading: "XML Sitemap Creation & Submission",
            description:
              "We create and submit XML Sitemap to search engines, ensuring your website's pages are effectively indexed and easily found by potential customers.",
          },
          {
            heading: "Social Media Integration",
            description:
              "We'll incorporate social media icons on your website, linking them to your respective social profiles, enabling easy engagement with your audience across platforms.",
          },
          {
            heading: "Inquiry/Contact Form",
            description:
              "Add a user-friendly Inquiry/Contact Form to streamline communication and capture potential customer inquiries on your website.",
          },
          {
            heading: "Lifetime Technical Support",
            description:
              "Free technical support for as long as your website remains under our care and control, ensuring reliable assistance and resolving any technical issues that may arise.",
          },
        ],
      },
    ],
  },
  {
    category: "E-commerce Website",
    subCategories: [
      {
        name: "Standard Ecommerce Website",
        price: 500,
        packageDescription:
          "Our standard ecommerce website comes with an ecommerce powerpack, accommodating 50 products and categories for a diverse online store. We ensure full mobile responsiveness, delivering a seamless shopping experience across devices.",
        projectTimeline:
          "We can develop this comprehensive Ecommerce website, complete with Ecommerce Powerpack, 50 products & categories within just 10 working days. Your online store will be up and running in no time.",
        features: [
          {
            heading: "Domain Registration",
            description:
              "Domain registration services for popular extensions such as .com, .net, .org, .in, and more...",
          },
          {
            heading: "5GB Web Hosting",
            description:
              "Get reliable web hosting with business email and SSL (https://) setup",
          },
          {
            heading: "Professional Web Design",
            description:
              "Creative, functional, and impressive web design services for a lasting impact.",
          },
          {
            heading: "Fully Responsive Mobile Friendly",
            description:
              "Get a mobile-friendly website with responsive design for seamless browsing on any mobile device.",
          },
          {
            heading: "Animated Images Slider on Homepage",
            description:
              "Dynamic animated images slider showcasing a series of visually appealing and eye-catching images that slides smoothly, adding an interactive and engaging element to the website's first impression.",
          },
          {
            heading: "Add Upto 50 Products & Categories",
            description:
              "Unleash your product catalog's potential with products and categories, creating a scalable and extensive online store.",
          },
          {
            heading: "Sell Online on Ecommerce Website",
            description:
              "Unlock the potential of online selling with a powerful ecommerce website, enabling you to showcase and sell your products or services to a global audience, 24/7.",
          },
          {
            heading: "Ecommerce Powerpack",
            description:
              "Comprehensive ecommerce website solution that includes easy product upload, pricing and description management for enhanced shopping experience.",
          },
          {
            heading: "Payment Gateway Setup",
            description:
              "Online transactions with seamless payment gateway setup, allowing you to securely process customer payments and accept payment methods on your website like PayPal, Stripe, COD, Etc...",
          },
          {
            heading: "Shipping Options/Shipping Rates/Free Shipping",
            description:
              "Explore flexible shipping options, competitive shipping rates, and the added benefit of free shipping to enhance your customers' shopping experience.",
          },
          {
            heading: "Admin Dashboard",
            description:
              "Empower your website management with a user-friendly admin dashboard, offering streamlined control and efficient monitoring capabilities.",
          },
          {
            heading: "YouTube Video Guide to Administer Website",
            description:
              "We will share a YouTube video guide on managing your eCommerce website effectively.",
          },
          {
            heading: "Inventory and Order Management System",
            description:
              "Manage your inventory and orders with inventory and order management solution, ensuring streamlined operations and timely fulfillment for your business.",
          },
          {
            heading: "Inquiry/Contact Form",
            description:
              "Add a user-friendly Inquiry/Contact Form to streamline communication and capture potential customer inquiries on your website.",
          },
          {
            heading: "Social Media Integration",
            description:
              "We'll incorporate social media icons on your website, linking them to your respective social profiles, enabling easy engagement with your audience across platforms.",
          },
          {
            heading: "Google Analytics & Sitemap Submission",
            description:
              "Google Analytics setup to gather insightful data and analytics about its performance, user behavior, traffic sources, and other essential metrics.",
          },
          {
            heading: "Lifetime Technical Support",
            description:
              "Free technical support for as long as your website remains under our care and control, ensuring reliable assistance and resolving any technical issues that may arise.",
          },
        ],
      },
      {
        name: "Premium Ecommerce Website",
        price: 900,
        packageDescription:
          "Our premium ecommerce website includes an advanced Powerpack for unlimited products and categories, coupled with comprehensive online training to effortlessly manage and add products. Anticipate a top-tier, customised Ecommerce platform.",
        projectTimeline:
          "We can create this advanced premium ecommerce website within a span of just 15 days. Get ready to launch your feature-rich online store in no time.",
        features: [
          {
            heading: "Domain Registration",
            description:
              "Domain registration services for popular extensions such as .com, .net, .org, .in, and more...",
          },
          {
            heading: "10 GB Web Hosting",
            description:
              "Get reliable web hosting with business email and SSL (https://) setup",
          },
          {
            heading: "Professional Web Design",
            description:
              "Creative, functional, and impressive web design services for a lasting impact.",
          },
          {
            heading: "Fully Responsive Mobile Friendly",
            description:
              "Get a mobile-friendly website with responsive design for seamless browsing on any mobile device.",
          },
          {
            heading: "Video Headers, Image Sliders & Galleries",
            description:
              "Versatile visual elements that enhance your website by showcasing dynamic and engaging multimedia content.",
          },
          {
            heading: "Admin Dashboard",
            description:
              "Empower your website management with a user-friendly admin dashboard, offering streamlined control and efficient monitoring capabilities.",
          },
          {
            heading: "Sell Online on Ecommerce Website",
            description:
              "Unlock the potential of online selling with a powerful ecommerce website, enabling you to showcase and sell your products or services to a global audience, 24/7.",
          },
          {
            heading: "Add Unlimited Products & Categories",
            description:
              "We will assist you in adding up to 100 products initially, and then provide online training to enable you to add unlimited products and categories to your eCommerce website through its backend admin panel on your own.",
          },
          {
            heading: "Ecommerce Powerpack",
            description:
              "Comprehensive ecommerce website solution that includes easy product upload, pricing and description management, product variations (color, size, etc..), product ratings and reviews, as well as robust sorting and filtering options for enhanced shopping experience.",
          },
          {
            heading: "Multiple Currency Options",
            description:
              "Provide customers with multiple currency options for a personalized shopping experience.",
          },
          {
            heading: "Payment Gateway Setup",
            description:
              "Online transactions with seamless payment gateway setup, allowing you to securely process customer payments and accept various payment methods on your website.",
          },
          {
            heading: "Shipping Options/Shipping Rates/Free Shipping",
            description:
              "Explore flexible shipping options, competitive shipping rates, and the added benefit of free shipping to enhance your customers' shopping experience.",
          },
          {
            heading: "Inventory and Order Management System",
            description:
              "Manage your inventory and orders with inventory and order management solution, ensuring streamlined operations and timely fulfillment for your business.",
          },
          {
            heading: "Blog Setup and Integration",
            description:
              "Unlock the power of blogging to connect with your audience, share valuable insights, and establish your online presence as a thought leader in your industry.",
          },
          {
            heading: "Online Booking & Appointments",
            description:
              "Streamline the scheduling process by providing a convenient and efficient way for customers to book services, appointments, or reservations directly through your website.",
          },
          {
            heading: "Website Live Chat",
            description:
              "Enhance customer engagement and support with Live Chat integration, enabling real-time communication and assistance on your website.",
          },
          {
            heading: "Social Media Integration",
            description:
              "Integrate social media into your website, expanding your online presence and fostering seamless engagement with your audience.",
          },
          {
            heading: "Inquiry/Contact Form",
            description:
              "Enhance user interaction and gather valuable insights with a customizable inquiry/contact form that enables seamless communication and effective lead generation on your website.",
          },
          {
            heading: "Video Guide to Administer Website",
            description:
              "Our comprehensive screen recorded video guide simplifies the process of administering your website, offering step-by-step instructions for efficient and effective management.",
          },
          {
            heading: "Online CMS Training",
            description:
              "Our one hour online training will empower you to efficiently manage your Ecommerce website, enabling you to add unlimited products and content while maintaining your Ecommerce website system effectively.",
          },
          {
            heading: "Onsite SEO Setup",
            description:
              "Optimization of various elements on your website, such as content, meta tags, URLs, and internal linking, to enhance search engine visibility and improve organic search rankings.",
          },
          {
            heading: "Google Search Console Setup",
            description:
              "GSC will allow you to monitor and optimize your website presence in Google search results, providing valuable insights, diagnostic tools, and reports for better performance and visibility.",
          },
          {
            heading: "Google Analytics & Sitemap Submission",
            description:
              "Harness the power of data-driven insights with Google Analytics integration and ensure optimal search engine visibility through seamless sitemap submission for your website.",
          },
          {
            heading: "Lifetime Technical Support",
            description:
              "Enjoy peace of mind with free technical support for as long as your website remains under our care and control, ensuring reliable assistance and resolving any technical issues that may arise.",
          },
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
  option.textContent = "Select a Package";
  secondSelect.appendChild(option);

  offers.map((offer) => {
    const option = document.createElement("option");
    option.value = offer;
    option.textContent = offer;
    secondSelect.appendChild(option);
  });
}

// calling createOptions function if 1st select option changes.
function onFirstSelectChange() {
  switch (firstSelect.value) {
    case "Standard Website":
      createOptions("Standard Website");
      break;
    case "CMS Website":
      createOptions("CMS Website");
      break;
    case "E-commerce Website":
      createOptions("E-commerce Website");
      break;
    default:
      secondSelect.innerHTML = `<option value="" selected>Select Package....</option>`;
      break;
  }
}

// displaying content on UI depending on the 2nd select option value.
function onSecondSelectChange() {
  const object = dataset.find(({ category }) => category === firstSelect.value);

  const actualData = object.subCategories.find(
    ({ name }) => name === secondSelect.value
  );

  console.log("data: ", actualData);

  // setting the initial selected data
  initialSelectedData = {
    category: object.category,
    subCategory: actualData.name,
    price: actualData.price,
    packageDescription: actualData.packageDescription,
    projectTimeline: actualData.projectTimeline,
    features: [...actualData.features],
  };

  updateChanges(
    actualData.name,
    actualData.price,
    actualData.features,
    actualData.packageDescription,
    actualData.projectTimeline
  );
}

// helper function to update the changes on UI
function updateChanges(
  titleOfPackage,
  priceOfPackage,
  featuresOfPackage,
  newPackageDescription,
  newProjectTimeline
) {
  packagePrice[0].innerHTML = priceOfPackage;
  packagePrice[1].innerHTML = priceOfPackage;

  currencyIcon[0].innerHTML = "$";
  currencyIcon[1].innerHTML = "$";

  packageTitle.innerHTML = titleOfPackage;

  console.log(newPackageDescription, newProjectTimeline);

  packageDescriptionTag.innerHTML = newPackageDescription;
  projectTimelineTag.innerHTML = newProjectTimeline;

  featuresUL.innerHTML = featuresOfPackage
    .map(
      (feature) =>
        `<li class="features-li">
      <p class="content">${feature.heading}</p>
      <p class="sub-content">
        ${feature.description}
      </p>
    </li>
    `
    )
    .join("");

  packagePriceAmount.value = "USD";
}

// fn for handling & changing price currency on the UI
function handlePriceConverter() {
  switch (packagePriceAmount.value) {
    case "USD":
      packagePrice[0].innerHTML = initialSelectedData.price;
      packagePrice[1].innerHTML = initialSelectedData.price;
      currencyIcon[0].innerHTML = "$";
      currencyIcon[1].innerHTML = "$";
      break;

    case "INR":
      packagePrice[0].innerHTML = (initialSelectedData.price * 82).toFixed(0);
      packagePrice[1].innerHTML = (initialSelectedData.price * 82).toFixed(0);
      currencyIcon[0].innerHTML = "₹";
      currencyIcon[1].innerHTML = "₹";
      break;

    case "CAD":
      packagePrice[0].innerHTML = (initialSelectedData.price * 1.34).toFixed(0);
      packagePrice[1].innerHTML = (initialSelectedData.price * 1.34).toFixed(0);
      currencyIcon[0].innerHTML = "$";
      currencyIcon[1].innerHTML = "$";
      break;

    case "AUD":
      packagePrice[0].innerHTML = (initialSelectedData.price * 1.52).toFixed(0);
      packagePrice[1].innerHTML = (initialSelectedData.price * 1.52).toFixed(0);
      currencyIcon[0].innerHTML = "$";
      currencyIcon[1].innerHTML = "$";
      break;

    case "GBP":
      packagePrice[0].innerHTML = (initialSelectedData.price * 0.78).toFixed(0);
      packagePrice[1].innerHTML = (initialSelectedData.price * 0.78).toFixed(0);
      currencyIcon[0].innerHTML = "£";
      currencyIcon[1].innerHTML = "£";
      break;

    case "EUR":
      packagePrice[0].innerHTML = (initialSelectedData.price * 0.91).toFixed(0);
      packagePrice[1].innerHTML = (initialSelectedData.price * 0.91).toFixed(0);
      currencyIcon[0].innerHTML = "€";
      currencyIcon[1].innerHTML = "€";
      break;

    default:
      packagePrice[0].innerHTML = initialSelectedData.price;
      packagePrice[1].innerHTML = initialSelectedData.price;
      currencyIcon[0].innerHTML = "$";
      currencyIcon[1].innerHTML = "$";
      break;
  }
}
