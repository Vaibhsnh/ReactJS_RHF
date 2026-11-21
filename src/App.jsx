import React from 'react'
import Navbar from './components/navbar'
import Form from './components/form'
import UserCards from './components/UserCards'
const App = () => {
  return (
    <div className="h-screen w-full bg-gray-950 flex flex-col items-center gap-20">
      <Navbar />
      {/* <Form /> */}
      <UserCards/>
    </div>
  )
}

export default App
