import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import Homepage from "./pages/homepage/Homepage";
import Signin from "./pages/signin/Signin";
import Signup from "./pages/signup/Signup";
import Document from "./component/documents/Document";
import NoMatchRoutes from './pages/NoMatchRoutes';

function routers() {
  return (
    <React.Fragment>
        <RecoilRoot>
            <Routes>
                <Route path="/" element={<Homepage />}/>
                <Route path="/Signin" element={<Signin />}/>
                <Route path="/Signup" element={<Signup />}/>
                <Route path="/Document" element={<Document />}/>
                <Route path="/Homepage" element={<Homepage />}/>
                <Route path="*" element={<NoMatchRoutes />}/>
            </Routes>
        </RecoilRoot>
    </React.Fragment>
  )
}

export default routers
