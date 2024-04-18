import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import request from "../../../../Apis/request";
import Loader from "../../../../Components/Loader/Loader";
import Swal from "sweetalert2";
import { BaseURL, schoolyearID } from '../../../../api/DataApis';


const InvoiceAdd = () => {
// const [ClassList, setClassList]= useState('');
const [StudentList, setStudentList] = useState([]);
const [ MonthList, setMonthList]= useState('');
const [OptionalFeeList, setOptionalFeeList]= useState('');
const [DiscountList, setDiscountList]= useState('');
const [TotalFeeList, setTotalFeeList]= useState('');
const [TotalDiscountList, setTotalDiscountList]= useState('');
const [TotalAmountList, setTotalAmountList]= useState('');
const [DateList, setDateList]= useState('');
const [DueDateList, setDueDateList]= useState('');
const [listItems, setListItems] = useState([]);
const [Listitem, setListItem] = useState([]);
const [classes, setClasses] = useState([]);
const [loading, setLoading] = useState(false);
const [selectedClass, setSelectedClass] = useState("");
const [selectedStudent, setSelectedStudent] = useState([]);
const[selectPaymentMode, setSelectedPaymentMode] = useState('');
const [FeeNameListing, setFeeNameListing] =  useState([]);
const[selectFeeName, setSelectFeeName] = useState([]);
const [chequeNumber, setChequeNumber] = useState([]);
const [chequeDate, setChequeDate] = useState([]);
const [BankName, setBankName] = useState([]);
const [DD, setDD] = useState([]);
const [BranchName, setBranchName] = useState([]);



const handlefeeName = (e) =>  {
  setSelectFeeName(e.target.value);
}


const handleBankBranch = (e) =>  {
  setBranchName(e.target.value);
}
const handlechequeDate = (e) => {
  setChequeDate(e.target.value);
}
const handleError= ()=> {
    alert("Please select the essential options");
  }
  const   AddInvoice = async () => {

    let response = await request({
      url: `${BaseURL}/invoice/addInvoice`,
      // url: 'posts',
      method:"POST",
      data: JSON.stringify({
        // "feetype_name" : FeeType,
      "usertypeID" : 1,
      "loginuserID" : 5,
      "schoolyearID" : schoolyearID,
       "username": "Admin",
       "classesID" : selectedClass,
       "studentID" : selectedStudent,
       "discount" : 30,
       "periodID" : 2,
       "feetype_select" : 1,
       "discount_id" : 1,
       "name":  selectFeeName,
       "date" : DateList,
       "due_date" : "14-07-2024",
      "fchqNo" : chequeNumber,
      "fchqDate" : chequeDate,
      "fchqBank" : BankName,
       "bank_branch" :  BranchName,
       "amount" : 5000,

       }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    });
  
     if( response.status == "200" ) {
      Swal.fire({
        icon: "success",
        title: "success!",
        text: "Invoice Submitted Successfully...",
        showConfirmButton: false,
        timer: 1500,
      });
      fetchData();
    } 
          //  alert("Data submitted successfully!!");fee_list
          // let feetypenamedata = response.fee_list
          // console.log(feetypenamedata, "feetypenamedata");
          // setFeeNameListing(response?.fee_list)
                      //  console.log("response", response.fee_list);
          //  fetch("http://www.swarnkarsamajindia.com/api/add-karyakarini");
    // } else {
        // alert("data entry failed");
     
}

useEffect(() => {
  AddInvoice();
}, []);



const fetchDataa = async () => {

  let response = await request({
    url: `${BaseURL}/feetypes/feetypeget`,
    // url: 'posts',
    method:"POST",
    data: JSON.stringify({
      // "feetype_name" : FeeType,
       "type": "1",
      // "username": "Admin",
      
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  });

  if( response.status == "200" ) {

 
  

        //  alert("Data submitted successfully!!");fee_list
        // let feetypenamedata = response.fee_list
        // console.log(feetypenamedata, "feetypenamedata");
        setFeeNameListing(response.fee_list)
        console.log("responseeeee", response);
        //  fetch("http://www.swarnkarsamajindia.com/api/add-karyakarini");
  } 
}

useEffect(() => {

fetchDataa();
// alert(selectedClass);
}, []);

  
const handleClassChange = (event) => {
  setSelectedClass(event.target.value);
  fetchData( event.target.value );
  };
  const handleStudentListChange = (event) => {
    setSelectedStudent(event.target.value);
};
const handleBankNameChange = (event) => {
  setBankName(event.target.value);
};
const handleDateChange = (event) => {
  setDateList(event.target.value);
};
  const handleMonthListChange = (event) => {
    setMonthList(event.target.value);
    
 }; 
 const handleOptionalFeesChange = (event) => {
setOptionalFeeList(event.target.value);

 }
 const handleDiscountChange = (event) => {
    setDiscountList(event.target.value);
    }
    const handleDDChange = (event) => {
      setDD(event.target.value);
      }

    const handlePaymentModeChange = (event) => {
      setSelectedPaymentMode(event.target.value);
      }
  
      const handleCheque = (event) => {
        setChequeNumber(event.target.value);
        }
  const fetchData = async ( selectedClass ) => {
    //https://demo.keendroid.in/student/viewStudent/${u.studentID}/${u.classesID}
    // props.setProgress(10);
    setLoading(true);

    var url = `${BaseURL}/student/getStudents`;
    if( selectedClass ) {
      url = `${BaseURL}/student/getStudents/`+selectedClass;
    } 

    let res = await request({
      
      url:url,
      // url: 'posts',
      method:"POST",
      data: JSON.stringify({
        "schoolyearID": schoolyearID
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
     }
    });
    console.log("res",res)
    setClasses(res.classes); 
    if (res && res.students)  {
      //const data = res.data.student;
       //console.log("res",res.students)
       setStudentList(res.students);
       
      
      //sreturn res.student;
      }
      


  
    return [];
}
 useEffect(() => {
  fetchData();
 }, []);

//  const fetchFeeListing = async () => {
//   //https://demo.keendroid.in/student/viewStudent/${u.studentID}/${u.classesID}
//   // props.setProgress(10);
//   setLoading(true);

//   var url = "https://demo.keendroid.in/feetypes/feetypeget";


//   let res = await request({
    
//     url:url,
//     // url: 'posts',
//     method: "POST",
//     data: JSON.stringify({
//       "type": 1
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//    }
//   });
//   console.log("res",res)
//   setFeeNameListing(res.fee_list); 
//   if (res && res.fee_list)  {
//     //const data = res.data.student;
//      //console.log("res",res.students)
//      setFeeName(res.fee_list);
     
    
//     //sreturn res.student;
//     }
    



//   return [];
// }
// useEffect(() => {
// fetchFeeListing();
// }, []);

 console.log("students lists", StudentList);
 console.log("feenamelisting", FeeNameListing);
 console.log("classid", classes.classesID);
  return (
    (
        <>
        {/* <Breadcrumb title="Student" path="/viho/students/students" subtitle="Add" /> */}
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <div className="card">
                  <h1 className="page-title"></h1>
                  <div className="portlet light bordered">
                    <div className="portlet-title">
                      <div className="caption font-dark">
                        <h4 className="caption-subject bold uppercase mx-3">
                    Invoice
                        </h4>
                      </div>
                    </div>
                    <div className="portlet-body mx-3">
                      <hr style={{marginTop:"-10px"}} />
                      <div className="row">
                        <div className="col-sm-12">
                          <form className="form-horizontal" role="form" method="post" encType="multipart/form-data">
                            <div className="form-group">
                              <div className="row">
                                <label htmlFor="name_id" className="col-sm-2 control-label">Class <span className="text-red">*</span> </label>
                                <div className="col-sm-6">
                                  <select onChange= {handleClassChange} value={selectedClass} className="form-control" id="name_id" name="name">
                                  <option value="0" >Select Class</option>
                                  { classes && classes.map((classes) => {
                        return (
                          <option
                            key={classes.classesID}
                            value={classes.classesID}
                          >
                            {classes.classes}
                          </option>
                        );
                      })}
                                  </select>
                                </div>
                 

                                <span className="col-sm-4 control-label"></span>
                              </div>
                            </div>
                            <div className="form-group">
                              <div className="row">
                                <label
                                  htmlFor="father_name"
                                  className="col-sm-2 control-label"
                                >
                                    Student<span className="text-red">*</span>
                                </label>
                                <div className="col-sm-6">
                                  <select value= {selectedStudent} onChange = {handleStudentListChange} 
                                    type="text"
                                    className="form-control"
                                    id="studentID"
                                    name="studentID"
                                    
                                  >
                                  <option value="0" >Select Student</option>
                                  { StudentList && StudentList.map((student) => {
                        return (
                          <option
                            key={student.studentID}
                            value={student.studentID}
                          >
                            {student.name}
                          </option>
                        );
                      })}
                                  </select>
                                  <span className="col-sm-4 control-label"> </span>
                                </div>
                              </div>
                            </div>
                            <div className="form-group">
                              <div className="row">
                                <label
                                  htmlFor="feetype_select"
                                  className="col-sm-2 control-label"
                                >
                                  Select Fee
                                </label>
                                <div className="col-sm-6">
                                <select  min={0} className="form-control" id="feetype_name" name="feetype_name" defaultValue="" value={selectFeeName}  onChange={handlefeeName}>
                                        <option>select fee</option>

                                    
                                          {FeeNameListing && FeeNameListing.map((u,i) => {
                                          return (
                                          <option key={u.feetypesID} value={u.feetypesID}>
                                            {u.fee_name}
                                          </option>
                                       ) })} 
                                        </select>
                                </div>
                                <span className="col-sm-4 control-label"></span>
                              </div>
                            </div>
                            {OptionalFeeList === "Admission_fee" &&
                            <>
                                <div className="card-body">
      <div className="table-responsive">
      <table className="table display dataTable" style={ { border: "1 px solid black", width: "67%",backgroundColor: "#fff", fontSize: "14px", borderColor: "#e6edef",color: "#717171",border: "1px #e6edef solid",borderRadius: "4px",
}} id="advance-1">
          <thead>
            <tr>
              <th>#</th>
              <th>Names</th>
              <th>Amount</th>
              
         
            </tr>
          </thead>
          <tbody>
        <tr>
                    <td></td>
                
                  <td>Vivek</td>
                    <td>5000</td>
                   
                   
                  
                   
                      {/* <Link to="/marks/assigngrade/edit"><i className="fa fa-edit" style={{fontSize:"18px"}}></i> </Link> */}
                      {/* <Link> <i className="fa fa-trash" style={{fontSize:"18px"}}></i></Link> */}
                    
                  </tr>
          </tbody>
                </table>
      </div>
    </div>
                            </>
                      
    }
                        
                            <div className="form-group">
                              <div className="row">
                                <label
                                  htmlFor="Discount"
                                  className="col-sm-2 control-label"
                                >
                            Discount
                                </label>
                                <div className="col-sm-6">
                                  <select  value= {DiscountList} onChange= {handleDiscountChange} 
                                    name="discount_id"
                                    id="discount_id"
                                    className="form-control select2"
                                 >
                                  <option value="0">Select Discount</option>
                                   <option value="1000">1000</option> 
                                   <option value="2000">2000</option> 
                              </select>
                                </div>
                                <span className="col-sm-4 control-label"></span>
                              </div>
                            </div>
                            <div className="form-group">
                              <div className="row">
                                <label
                                  htmlFor="religion"
                                  className="col-sm-2 control-label">
                                  Total Fee
                                </label>
                                <div className="col-sm-6">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="amount"
                                    name="amount" readOnly
                                  />
                                </div>
                                <span className="col-sm-4 control-label"></span>
                              </div>
                            </div>
    
                            <div className="form-group">
                              <div className="row">
                                <label
                                  htmlFor="email"
                                  className="col-sm-2 control-label"
                                >
                                  Total Discount
                                </label>
                                <div className="col-sm-6">
                                  <input type="text"
                                    className="form-control"
                                    id="email"
                                    name="email" readOnly
                                  />
                                </div>
                    <span className="col-sm-4 control-label"></span>
                              </div>
                            </div>
                            <div className="form-group">
                              <div className="row">
                                <label htmlFor="phone" className="col-sm-2 control-label">Total amount <span className="text-red">*</span></label>
                                <div className="col-sm-6">
                                  <input type="text" className="form-control" id="amount" name="amount" readOnly/>
                                </div>
                                <span className="col-sm-4 control-label"></span>
                              </div>
                            </div>
                               <div className="form-group">
                              <div className="row">
                                <label htmlFor="address" className="col-sm-2 control-label">Date</label>
                                <div className="col-sm-6">
                                  <input type="date" value={DateList} onChange={handleDateChange} className="form-control" id="date" name="date"/>
                                </div>
                                <span className="col-sm-4 control-label"></span>
                              </div>
                            </div>
                          <div className="form-group">
                              <div className="row">
                                <label htmlFor="payment_mode" className="col-sm-2 control-label">Payment Mode</label>
                                <div className="col-sm-6">
                                  <select type="payment_mode" className="form-control" onChange={handlePaymentModeChange} value={selectPaymentMode} id="payment_mode" name="payment_mode">
                                    <option value="0"> select payment method</option>
                                    <option value="Cash" >Cash</option>
                                    <option value="cheque">Cheque</option>
                                    <option value="DD">DD</option>
                                    <option value="POS">POS</option>
                                    <option value="Merchant">Merchant</option>
                                    <option value="Bharat_QR">Bharat QR</option>
                                    <option value="UPI">UPI</option>
                                    </select>
                                </div>
                                <span className="col-sm-4 control-label"></span>
                              </div>
                            </div>
                            {selectPaymentMode === "cheque" &&
                            <>

                               <div className="form-group">
                               <div className="row">
                                 <label htmlFor="address" className="col-sm-2 control-label">Date</label>
                                 <div className="col-sm-6">
                                   <input type="date" value={chequeDate} onChange={handlechequeDate} className="form-control" id="date" name="date"/>
                                 </div>
                                 <span className="col-sm-4 control-label"></span>
                               </div>
                             </div>

<div className="form-group">
<div className="row">
  <label htmlFor="address"  className="col-sm-2 control-label">Chq./DD No*</label>
  <div className="col-sm-6">
    <input type="text" value= {chequeNumber}  placeholder="enter number" onChange={handleCheque} className="form-control" id="date" name="date"/>
  </div>
  <span className="col-sm-4 control-label"></span>
</div>
</div>
<div className="form-group">
<div className="row">
  <label htmlFor="address" className="col-sm-2 control-label">Bank Name</label>
  <div className="col-sm-6">
    <input type="text" value={BankName} onChange={handleBankNameChange} className="form-control" id="bank_name" placeholder ="enter bank name" name="bank_name"/>
  </div>
  <span className="col-sm-4 control-label"></span>
</div>
</div>
<div className="form-group">
<div className="row">
  <label htmlFor="address" className="col-sm-2 control-label">Bank Branch</label>
  <div className="col-sm-6">
    <input type="text" value={BranchName} onChange={handleBankBranch} className="form-control" id="bank_branch" placeholder ="enter bank name" name ="bank_branch"/>
  </div>
  <span className="col-sm-4 control-label"></span>
</div>
</div>

</>
}
{selectPaymentMode === "DD" &&
                            <>

                               <div className="form-group">
                               <div className="row">
                                 <label htmlFor="address" className="col-sm-2 control-label">Date</label>
                                 <div className="col-sm-6">
                                   <input type="date" value={DateList} onChange={handleDateChange} className="form-control" id="date" name="date"/>
                                 </div>
                                 <span className="col-sm-4 control-label"></span>
                               </div>
                             </div>

<div className="form-group">
<div className="row">
  <label htmlFor="address"  className="col-sm-2 control-label">Chq./DD No*</label>
  <div className="col-sm-6">
    <input type="text" onChange={handleDDChange} value={DD}  placeholder="enter number"  className="form-control" id="date" name="date"/>
  </div>
  <span className="col-sm-4 control-label"></span>
</div>
</div>
<div className="form-group">
<div className="row">
  <label htmlFor="address" className="col-sm-2 control-label">Bank Name</label>
  <div className="col-sm-6">
    <input type="text" value={BankName} onChange={handleBankNameChange} className="form-control" id="bank_name" placeholder ="enter bank name" name="bank_name"/>
  </div>
  <span className="col-sm-4 control-label"></span>
</div>
</div>
<div className="form-group">
<div className="row">
  <label htmlFor="address" className="col-sm-2 control-label">Bank Branch</label>
  <div className="col-sm-6">
    <input type="text" value={BranchName} onChange={handleBankBranch} className="form-control" id="bank_name" placeholder ="enter branch
    
     name" name="bank_name"/>
  </div>
  <span className="col-sm-4 control-label"></span>
</div>
</div>

</>
}
{selectPaymentMode === "POS" &&
                            <>

                               <div className="form-group">
                               <div className="row">
                                 <label htmlFor="address" className="col-sm-2 control-label">Date</label>
                                 <div className="col-sm-6">
                                   <input type="date" value={DateList} onChange={handleDateChange} className="form-control" id="date" name="date"/>
                                 </div>
                                 <span className="col-sm-4 control-label"></span>
                               </div>
                             </div>

<div className="form-group">
<div className="row">
  <label htmlFor="address"  className="col-sm-2 control-label">Card Type*
</label>
  <div className="col-sm-6">
    <select  value= ""  placeholder="enter number" onChange="" className="form-control" id="date" name="date">
      <option>Debit card</option>
      <option>Credit card</option>
      </select>
  </div>
  <span className="col-sm-4 control-label"></span>
</div>
</div>
<div className="form-group">
<div className="row">
  <label htmlFor="address" className="col-sm-2 control-label">Bank Name</label>
  <div className="col-sm-6">
    <input type="text" value="" onChange="" className="form-control" id="bank_name" placeholder ="enter bank name" name="bank_name"/>
  </div>
  <span className="col-sm-4 control-label"></span>
</div>
</div>
</>
}
{selectPaymentMode === "Merchant" &&
                            <>

                               <div className="form-group">
                               <div className="row">
                                 <label htmlFor="address" className="col-sm-2 control-label">Date</label>
                                 <div className="col-sm-6">
                                   <input type="date" value={DateList} onChange={handleDateChange} className="form-control" id="date" name="date"/>
                                 </div>
                                 <span className="col-sm-4 control-label"></span>
                               </div>
                             </div>

<div className="form-group">
<div className="row">
  <label htmlFor="address"  className="col-sm-2 control-label">Mode
</label>
  <div className="col-sm-6">
    <input  value= ""  placeholder="enter mode" onChange="" className="form-control" id="date" name="date"/>
      </div>
  <span className="col-sm-4 control-label"></span>
</div>
</div>

</>
}
{selectPaymentMode === "UPI" &&
                            <>

                               <div className="form-group">
                               <div className="row">
                                 <label htmlFor="address" className="col-sm-2 control-label">Date</label>
                                 <div className="col-sm-6">
                                   <input type="date" value={DateList} onChange={handleDateChange} className="form-control" id="date" name="date"/>
                                 </div>
                                 <span className="col-sm-4 control-label"></span>
                               </div>
                             </div>

<div className="form-group">
<div className="row">
  <label htmlFor="address"  className="col-sm-2 control-label">Mode
</label>
  <div className="col-sm-6">
    <input    placeholder="enter mode"  className="form-control" id="date" name="date"/>
      </div>
  <span className="col-sm-4 control-label"></span>
</div>
</div>

</>
}
                            
                            
                            {/* <div className="form-group">
                              <div className="row">
                                <label htmlFor="photo" className="col-sm-2 control-label">
                                  Photo
                                </label>
                                <div className="col-sm-6">
                                  <div className="input-group image-preview">
                                    <input
                                      type="text"
                                      className="form-control image-preview-filename"
                                      disabled="disabled"
                                    />
                                    <span className="input-group-btn">
                                      <button
                                        type="button"
                                        className="btn btn-default image-preview-clear"
                                        style={{ display: "none" }}
                                      >
                                        <span className="fa fa-remove"></span>
                                        Clear
                                      </button>
                                      <div className="btn btn-success image-preview-input" style={{width:"355px"}}>
                                        <span className="fa fa-repeat"></span>
                                        <span className="image-preview-input-title">
                                          File Browse
                                        </span>
                                        <input
                                          type="File"
                                          id="image"
                                          accept="image/png, image/jpeg, image/gif"
                                          name="photo"
                                        />
                                      </div>
                                    </span>
                                  </div>
                                </div>
                                <span className="col-sm-4"></span>
                              </div>
                            </div> */}
                            <input className=" btn btn-success" type= "button"  onClick={AddInvoice} value="Add Invoice" style={{position: "relative",top: "-13px",}} />
                          </form>
                         <div className="callout callout-danger"><p><b>Note:</b>  If you need any fee type then you can add before you create invoice and also you can write new fee type here into fee type input it will be saved.</p>
                           </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )
      
  
  )
}

export default InvoiceAdd
