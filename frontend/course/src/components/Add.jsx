import { Box, Button, TextField } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"



const Add = () => {
  const [course, setCourse] = useState({
    courseId: '',
    courseName: '',
    courseDescription: '',
    courseCategory: '',
    courseFee: '',
  })
  const fetchValue = (e) => {
    //   // console.log(e)
    setCourse({ ...course, [e.target.name]: e.target.value })
  }

  const location = useLocation()
  const navigate = useNavigate()
  const sendData = () => {
    if (location.state != null) {
      axios.put('http://localhost:3000/edit/' + location.state.course._id, course).then((res) => {
        alert('Data updated')
        navigate('/Home')
      }).catch((error) => {
        console.log(error)
      })
    }
    else {
      axios.post('http://localhost:3000/addCourse', course).then((res) => {
        navigate('/Home')
      }).catch((error) => {
        console.log(error)
      })
    }

  }


  useEffect(() => {
    if (location.state != null) {
      setCourse({
        ...course,
        courseId: location.state.course.courseId,
        courseName: location.state.course.courseName,
        courseCategory: location.state.course.courseCategory,
        courseDescription: location.state.course.courseDescription,
        courseFee: location.state.course.courseFee
      })
    }
  }, [])



  return (<div>
    <h2>Add Employee</h2>
    <Box

      component="form"
      sx={{
        backgroundColor: '#f0f0f0',
        borderWidth: '0.3px', 
        borderStyle: 'solid',
        padding:'50px'
      }}

      // sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic"
        label="courseId"
        variant="standard"
        name='courseId'
        value={course.courseId}
        onChange={fetchValue} /><br />

      <TextField id="standard-basic"
        label="courseName"
        variant="standard"
        name='courseName'
        value={course.courseName}
        onChange={fetchValue} /><br />

      <TextField id="standard-basic"
        label="courseDescription"
        variant="standard"
        name='courseDescription'
        value={course.courseDescription}
        onChange={fetchValue} /><br />

      <TextField id="standard-basic"
        label="courseCategory"
        variant="standard"
        name='courseCategory'
        value={course.courseCategory}
        onChange={fetchValue} /><br />

      <TextField id="standard-basic"
        label="courseFee"
        variant="standard"
        name='courseFee'
        value={course.courseFee}
        onChange={fetchValue} /><br />
      <br /><br />
      <Button variant="contained" onClick={sendData}>Submit</Button>
    </Box>
  </div>

  )
}

export default Add
