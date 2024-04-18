import request from './request';
import { BaseURL, Token, schoolyearID } from '../api/DataApis';
    
// export const getUserList = async () => {

//     let res = await request({
//       url: 'webservices.php?action=getstudents',
//       // url: 'posts',
//       method:"GET"
//     });

//     if (res && res.data ) {
//       const data = res.data.student;
//       console.log("data",data);
//       return data;
//     }
//     return [];
// }


export const getStudentList = async (class_id ) => {
  console.log("class_id", class_id);
    
  //alert(class_id);

    let res = await request({
      url: `${BaseURL}/sattendance/getAttendance/${class_id}`,
      // url: 'posts',
      method:"POST",
      data: JSON.stringify({
        "schoolyearID":schoolyearID
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        "Token":Token
     }
    });

    if (res && res.students) {
      //const data = res.data.student;
      console.log("res",res.students)
      return res.students;
    }
    return [];
}
