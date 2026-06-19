import { Outlet, createRootRoute, createRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingNavButtonsWrapper from "@/components/FloatingNavButtonsWrapper";
import Home from "@/app/page";
import AboutPage from "@/app/about/page";
import AnniversaryPage from "@/app/80th-anniversary/page";
import CafePage from "@/app/cafe/page";
import FamilyPage from "@/app/family/page";
import FeedbackPage from "@/app/feedback/page";
import HistoryPage from "@/app/history/page";
import OrderPage from "@/app/order/page";
import ProductsPage from "@/app/products/page";
import NotFound from "@/app/not-found";

const rootRoute = createRootRoute({
  component: () => (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingNavButtonsWrapper />
    </>
  ),
  notFoundComponent: NotFound,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});

const anniversaryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/80th-anniversary",
  component: AnniversaryPage,
});

const cafeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/cafe",
  component: CafePage,
});

const familyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/family",
  component: FamilyPage,
});

const feedbackRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/feedback",
  component: FeedbackPage,
});

const historyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/history",
  component: HistoryPage,
});

const orderRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/order",
  component: OrderPage,
});

const productsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/products",
  validateSearch: (search: Record<string, unknown>) => ({
    category:
      typeof search.category === "string" ? search.category : undefined,
  }),
  component: ProductsPage,
});

export const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  anniversaryRoute,
  cafeRoute,
  familyRoute,
  feedbackRoute,
  historyRoute,
  orderRoute,
  productsRoute,
]);
