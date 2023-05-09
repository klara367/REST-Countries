import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Countries from "./pages/Countries"
import CountryDetails from "./pages/CountryDetails"
import Error from "./pages/Error"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Countries />} />
        <Route path="/details/:cca3" element={<CountryDetails />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  )
}

export default App