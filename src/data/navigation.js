const menus = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Contact Us",
    path: "/contact-us",
  },
  {
    id: 3,
    name: "About Us",
    path: "/about-us",
  },
  {
    id: 4,
    name: "Services",
    children: [
      {
        id: 1,
        name: "Consulting",

        children: [
          {
            id: 1,
            name: "Registration & Formation of Companies",
            path: "/service",
          },
          { id: 2, name: "Company Annual Returns", path: "/" },
          { id: 3, name: "Tax Registration and Returns", path: "/" },
          { id: 4, name: "Financial Accounting", path: "/service" },
          { id: 5, name: "Auditing", path: "/service" },
          { id: 6, name: "Other CAC Services", path: "/service" },
          {
            id: 7,
            name: "Website Design – Corporate websites and ecommerce websites",
            path: "/service",
          },
        ],
      },
      {
        id: 2,
        name: "Recruitment",
        children: [
          { id: 1, name: "DIY Recruitment,", path: "/service" },
          { id: 1, name: "Talent Pool Recruitment", path: "/" },
        ],
      },
      {
        id: 3,
        name: "Training",
        children: [
          { id: 1, name: "Business Analysis", path: "/" },
          { id: 2, name: "Technical Skills", path: "/" },
        ],
      },
    ],
  },
];

export default menus;
