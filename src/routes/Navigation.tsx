import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom";

import { FormikBasicPage, FormikYupPage, RegisterPage, FormikComponents, FormikAbstractation, RegisterFormikPage, DynamicForm } from "../03-forms/pages/";

import logo from '../logo.svg';


export const Navigation = () => {
  return (
    <>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              <li>
                <NavLink to="/register" className={({ isActive }) => isActive ? 'nav-active' : ''}>Register Page</NavLink>
              </li>
              <li>
                <NavLink to="/FormikBasicPage" className={({ isActive }) => isActive ? 'nav-active' : ''}>Formik Basic</NavLink>
              </li>
              <li>
                <NavLink to="/FormikYupPage" className={({ isActive }) => isActive ? 'nav-active' : ''}>Formik Yup</NavLink>
              </li>
              <li>
                <NavLink to="/FormikComponents" className={({ isActive }) => isActive ? 'nav-active' : ''}>Formik Components</NavLink>
              </li>
              <li>
                <NavLink to="/FormikAbstractation" className={({ isActive }) => isActive ? 'nav-active' : ''}>Formik Abstractation</NavLink>
              </li>
              <li>
                <NavLink to="/FormikRegister" className={({ isActive }) => isActive ? 'nav-active' : ''}>Register Formik</NavLink>
              </li>
              <li>
                <NavLink to="/DynamicForm" className={({ isActive }) => isActive ? 'nav-active' : ''}>Dynamic Form</NavLink>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="FormikComponents" element={<FormikComponents />} />
            <Route path="FormikBasicPage" element={<FormikBasicPage />} />
            <Route path="FormikYupPage" element={<FormikYupPage />} />
            <Route path="FormikAbstractation" element={<FormikAbstractation />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="FormikRegister" element={<RegisterFormikPage />} />
            <Route path="DynamicForm" element={<DynamicForm />} />

            <Route path="/*" element={<Navigate to="/register" replace />} />
          </Routes>

        </div>
      </BrowserRouter>
    </>
  )
}
