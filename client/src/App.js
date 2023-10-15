import React, { useEffect } from 'react'
import '../src/App.css'
import 'react-redux'


import Login from './user/Login.js'
import BG_form from './user/BG_form'
import BG_list from './user/BG_list'
import { useDispatch, useSelector } from 'react-redux'
import { getBGForm } from './redux/actions/BG_Form.Action'
import { Route, Routes } from 'react-router-dom'
import BG_approvedList from './user/BG_approvedList'
import BG_approverList from './user/BG_approverList'
import Home from './user/Home'
import BG_admin from './user/BG_admin'

//Bootstrap from validation
const validation = () => {
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
}

const onlyNumber = (event) => {
  const allowedKeys = ["Backspace", "Tab", "Escape", "Enter", "Delete", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", '%'];

  if (allowedKeys.includes(event.key)) {
    // Allow key press
    return;
  } else {
    // Block key press
    event.preventDefault();
    return;
  }
}
export default function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBGForm())
  }, [dispatch])



  //get data
  const data = useSelector(state => state.getBgForm.BgForm);
  // console.log("data",data)
  return (
    <>
      <Routes>
        {/* <Route exact path='/' element={<BG_form validation={validation} onlyNumber={onlyNumber} />} /> */}
        <Route exact path='/' element={<Home />} />
        <Route exact path='/bg-list' element={<BG_list data={data} onlyNumber={onlyNumber} />} />
        <Route exact path='/bg-approved-list' element={<BG_approvedList data={data} validation={validation} />} />
        <Route exact path='/bg-approver-list' element={<BG_approverList validation={validation} data={data} />} />
        <Route exact path='/bg-admin' element={<BG_admin validation={validation} data={data} />} />
        <Route exact path='/login' element={<Login />} />
      </Routes>
    </>
  )
}



