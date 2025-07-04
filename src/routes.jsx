// Import necessary components and functions from react-router-dom.

import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home"; // export normal with curly braces
import AddContacts from "./pages/AddContacts"; // export without braces the components when you export default
// import { Single } from "./pages/Single";
// import { Demo } from "./pages/Demo";

export const router = createBrowserRouter(
    createRoutesFromElements(
    // CreateRoutesFromElements function allows you to build route elements declaratively.
    // Create your routes here, if you want to keep the Navbar and Footer in all views, add your new routes inside the containing Route.
    // Root, on the contrary, create a sister Route, if you have doubts, try it!
    // Note: keep in mind that errorElement will be the default page when you don't get a route, customize that page to make your project more attractive.
    // Note: The child paths of the Layout element replace the Outlet component with the elements contained in the "element" attribute of these child paths.

      // Root Route: All navigation will start from here.
        <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>} >

        {/* Nested Routes: Defines sub-routes within the BaseHome component. */}
        <Route path= "/" element={<Home />} /> {/* Home page by default */}
        <Route path= "/AddContact" element={<AddContacts />} />  //two elements with three routes
        <Route path= "/editContact/:idUser" element={<AddContacts />} />  //three routes with the same path, only the last one will be rendered
        //: (the two points means the paramter is dynamic: it can change)idUser is a parameter that will be passed to the AddContacts component
      </Route>
    )
);