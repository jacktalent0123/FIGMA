import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const RidesviewOne = React.lazy(() => import("pages/RidesviewOne"));
const Ridesview = React.lazy(() => import("pages/Ridesview"));
const Passwordreset = React.lazy(() => import("pages/Passwordreset"));
const Bookingconformation = React.lazy(() =>
  import("pages/Bookingconformation")
);
const Pickupconformation = React.lazy(() => import("pages/Pickupconformation"));
const PaymentNotification = React.lazy(() =>
  import("pages/PaymentNotification")
);
const MyprofileDropdown = React.lazy(() => import("pages/MyprofileDropdown"));
const LanguageDropdown = React.lazy(() => import("pages/LanguageDropdown"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/languagedropdown" element={<LanguageDropdown />} />
          <Route path="/myprofiledropdown" element={<MyprofileDropdown />} />
          <Route
            path="/paymentnotification"
            element={<PaymentNotification />}
          />
          <Route path="/pickupconformation" element={<Pickupconformation />} />
          <Route
            path="/bookingconformation"
            element={<Bookingconformation />}
          />
          <Route path="/passwordreset" element={<Passwordreset />} />
          <Route path="/ridesview" element={<Ridesview />} />
          <Route path="/ridesviewone" element={<RidesviewOne />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
