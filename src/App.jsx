
import { Routes,Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import StudentForm from './components/StudentForm'
import StudentTable from './components/StudentTable'
import { useDispatch } from 'react-redux';
import {data} from "./data";
import { useEffect } from 'react'
import { addStudent } from './store/slice/studentSlice'
function App() {
const dispatch = useDispatch();
useEffect(()=>{
  data.map((student)=>{
dispatch(addStudent(student))

  })
},[])
  return (
    <>
  <Navbar/>
  <Routes>
  <Route path='/' element={<StudentTable/>}/>
    <Route path="/addstudent" element={<StudentForm/>}/>
  </Routes>
    </>
  )
}

export default App
