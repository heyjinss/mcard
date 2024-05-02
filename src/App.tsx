import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepages from '@pages/home'
import Testpages from '@pages/test'
import CardPages from '@pages/Card'
import SigninPage from '@pages/Signin'
import SignupPage from '@pages/Signup'

import Navbar from '@shared/Navbar'
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" Component={Homepages} />
        <Route path="/signin" Component={SigninPage} />
        <Route path="/signup/" Component={SignupPage} />
        <Route path="/test" Component={Testpages} />
        <Route path="/card/:id" Component={CardPages} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
