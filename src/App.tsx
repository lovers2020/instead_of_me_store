import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "./components/common/layout";
import ErrorPage from "./components/common/errorpage";
import MyPage from "./screen/mypage";
import Home from "./screen/home";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Layout />,
            errorElement: <ErrorPage />,
            children: [
                {
                    path: "",
                    element: <Home />,
                },
                {
                    path: "mypage",
                    element: <MyPage />,
                    children: [
                        {
                            path: "findid",
                        },
                        {
                            path: "findpw",
                        },
                    ],
                },
                {
                    path: "join",
                    element: <MyPage />,
                },
            ],
        },
    ],
    { basename: "/instead_of_me_store" }
);

function App() {
    return (
        <>
            <Helmet>
                <title>Instead Of Me</title>
            </Helmet>
            <RouterProvider router={router}></RouterProvider>
        </>
    );
}

export default App;
