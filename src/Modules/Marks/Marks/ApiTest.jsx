import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { BaseURL } from '../../../api/DataApis';
const ApiTest = () => {
    const [Marks, setMarks] = useState('');
    const[users, setUsers] = useState([]);
    const[SubjectState, SetSubjectState] = useState('');
    useEffect(() => { 
        const fetchData = async () => {
          try {
            const response = await axios.get(`${BaseURL}/mark/addMarks`);
          //  const  schoolyearID = "9";
      // setUsers(response.data.exams)
      setUsers( response.data);
      console.log("apppi data", response.data.subjects);
      } catch (error) {
        console.error('Error fetching Add api data:', error);
      }
      };
      fetchData();
      }, []);
return (
    <select value = {SubjectState} 
                                      name="examID"
                                      id="examID"
                                      class="form-control select2 select2-offscreen"
                                      tabindex="-1"
                                    >
                                        <option>select subject</option>
<option>english</option>
{users.subjects && users.subjects.map((item) => (
                        
                            <option>{item.subject}</option>


))}

                                    </select>

)


    }
export default ApiTest;