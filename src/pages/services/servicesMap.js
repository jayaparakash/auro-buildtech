import LayoutDevelopment from "./sections/LayoutDevelopment";
import SaleOfProperties from "./sections/SaleOfProperties";
import Constructions from "./sections/Constructions";
import InteriorSolutions from "./sections/InteriorSolutions";
import HomeAutomation from "./sections/HomeAutomation";
import FinancialServices from "./sections/FinancialServices";

export const servicesMap = [
  {
    id: "layout-development",
    title: "Layout Development",
    component: LayoutDevelopment,
  },
  {
    id: "sale-of-properties",
    title: "Sale of Properties",
    component: SaleOfProperties,
  },
  {
    id: "constructions",
    title: "Constructions",
    component: Constructions,
  },
  {
    id: "interior-solutions",
    title: "Interior Solutions",
    component: InteriorSolutions,
  },
  {
    id: "home-automation",
    title: "Home Automation",
    component: HomeAutomation,
  },
  {
    id: "financial-services",
    title: "Financial Services",
    component: FinancialServices,
  },
];
