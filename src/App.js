import { RouterProvider } from "react-router-dom";
import { router } from "./router/routes";

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      {/* <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<RootLayout />} />
          <Route path="/villans" element={<RootLayout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/hotels/:id" element={<HoltelDetails />} />
          <Route path="/hotels/:id/:id" element={<RoomDetails />} />
          <Route
            path="/hotels/:id/:id/reserv"
            element={
              <ProtectedRoutes>
                <Reservetion />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/books"
            element={
              <ProtectedRoutes>
                <Books />
              </ProtectedRoutes>
            }
          >
            <Route index element={<NextBookingTable />} />
            <Route path="next" element={<NextBookingTable />} />
            <Route path="prev" element={<PrevBookingTable />} />
          </Route>
          <Route path="/books/:id" element={<UpdateBooking />} />
          <Route path="/fev" element={<Favorite />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
};

export default App;
