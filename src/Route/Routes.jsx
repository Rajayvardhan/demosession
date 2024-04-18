// dashbaord
import Default from "../Components/Dashboard/Default";
import Ecommerce from "../Components/Dashboard/Ecommerce";

//widgets
import Chart from "../Components/Widgets/Chart";
import General from "../Components/Widgets/General";

//enquire
import Enquire from "../Modules/Enquire/Enquire";
import EnquireAdd from "../Modules/Enquire/Add";
import EnquireView from "../Modules/Enquire/View";
import EnquireEdit from "../Modules/Enquire/Edit";

//student
import Students from "../Modules/Students/Students";
import StudentAdd from "../Modules/Students/Add";
import StudentEdit from "../Modules/Students/Edit";
import StudentView from "../Modules/Students/View";
import RTEStudents from "../Modules/Students/RTE_Students/RTE_Students";
import BPL_Students from "../Modules/Students/BPL_Students/BPL_Students";
// import Student_Status from "../Modules/Students/Active-deactive/Student_status";
import StudentWise from "../Modules/Students/Subject_Assign/StudentWise";
import SubjectWise from "../Modules/Students/Subject_Assign/SubjectWise";
import House from "../Modules/Students/House_Assign/House_Assign";
import StudentStatus from "../Modules/Students/Active-deactive/Student_status";
//Parents
import Parents from "../Modules/Parents/Parents";
import ParentEdit from "../Modules/Parents/Edit";
import ParentView from "../Modules/Parents/View";

//Staff
import Staff from "../Modules/Staff/Staff";
import AddStaff from "../Modules/Staff/Add";
import EditStaff from "../Modules/Staff/Edit";
import StaffView from "../Modules/Staff/View";

//Academic

import Classess from "../Modules/Academic/Classes/Classes";
import AddClasses from "../Modules/Academic/Classes/Add";
import EditClasses from "../Modules/Academic/Classes/Edit";
// import ViewClasses from  "../Modules/Academic/Classes/"

// import  Classes from "../Modules/Academic/Classes";

import Shift from "../Modules/Academic/Shift/Shift";
import ShiftAdd from "../Modules/Academic/Shift/Add";
import ShiftEdit from "../Modules/Academic/Shift/Edit";

import Subject from "../Modules/Academic/Subject/Subject";
import SubjectAdd from "../Modules/Academic/Subject/Add";
import SubjectEdit from "../Modules/Academic/Subject/Edit";

import Section from "../Modules/Academic/Sections/Section";
import SectionAdd from "../Modules/Academic/Sections/Add";
import SectionEdit from "../Modules/Academic/Sections/Edit";

import Period from '../Modules/Academic/Period/Period';
import PeriodAdd from '../Modules/Academic/Period/Add';
import PeriodEdit from '../Modules/Academic/Period/Edit';

import Syllabus from "../Modules/Academic/Syllabus/Syllabus";
import SyllabusAdd from "../Modules/Academic/Syllabus/Add";
import SyllabusEdit from "../Modules/Academic/Syllabus/Edit";

import Assignment from "../Modules/Academic/Assignment/Assignment";
import AssignmentAdd from "../Modules/Academic/Assignment/Add";
import AssignmentView from "../Modules/Academic/Assignment/View";

import Routine from "../Modules/Academic/Routine/Routine";
import RoutineAdd from "../Modules/Academic/Routine/Add";

import Teachertimetable from "../Modules/Academic/Teachertimetable/Teachertimetable";

import StudentAttendance from "../Modules/Attendance/StudentAttendance/StudentAttendance";
import StudentAttendanceAdd from "../Modules/Attendance/StudentAttendance/Add";
import StudentAttendanceView from "../Modules/Attendance/StudentAttendance/StudentAttView";
import StaffAttendance from "../Modules/Attendance/StaffAttendance/StaffAttendance";
import StaffAttendanceAdd from "../Modules/Attendance/StaffAttendance/Add";
import StaffAttendanceView from "../Modules/Attendance/StaffAttendance/StaffView";

import Exam from "../Modules/Exam/Exam/Exam";
import ExamAdd from "../Modules/Exam/Exam/Add";
import ExamEdit from "../Modules/Exam/Exam/Edit";

import ClassTest from "../Modules/ClassTest/Test/Test";
import ClassTestAdd from "../Modules/ClassTest/Test/Add";
import ClassTestEdit from "../Modules/ClassTest/Test/Edit";

import ExamAttendance from "../Modules/Exam/ExamAttendance/ExamAttendance";
import ExamAttendanceAdd from "../Modules/Exam/ExamAttendance/Add";
import ExamAttendanceEdit from "../Modules/Exam/ExamAttendance/Edit";

import ExamSchedule from "../Modules/Exam/ExamSchedule/ExamSchedule";
import ExamScheduleAdd from "../Modules/Exam/ExamSchedule/Add";
import ExamScheduleEdit from "../Modules/Exam/ExamSchedule/Edit";

import ClassTestSchedule from "../Modules/ClassTest/ClassTestSchedule/ClassTestSchedule";
import ClassTestScheduleAdd from "../Modules/ClassTest/ClassTestSchedule/Add";
import ClassTestScheduleEdit from "../Modules/ClassTest/ClassTestSchedule/Edit";

import Grade from "../Modules/Exam/Grade/Grade";
import GradeAdd from "../Modules/Exam/Grade/Add";
import GradeEdit from "../Modules/Exam/Grade/Edit";

import AssignGrade from "../Modules/Marks/AssignGrade/AssignGrade";
import AssignGradeAdd from "../Modules/Marks/AssignGrade/Add";
import AssignGradeEdit from "../Modules/Marks/AssignGrade/Edit";

import MarkPercentage from "../Modules/Marks/MarkPercentage/MarkPercentage";
import MarkPercentageAdd from "../Modules/Marks/MarkPercentage/Add";
import MarkPercentageEdit from "../Modules/Marks/MarkPercentage/Edit";

import Marks from "../Modules/Marks/Marks/Marks";
import MarksAdd from "../Modules/Marks/Marks/Add";
import MarksEdit from "../Modules/Marks/Marks/Edit";

import Promotion from "../Modules/Marks/Promotion/Promotion";
import PromotionAdd from "../Modules/Marks/Promotion/Add";
import PromotionEdit from "../Modules/Marks/Promotion/Edit";

import ReportCard from "../Modules/Marks/ReportCard/ReportCard";
import ReportCardAdd from "../Modules/Marks/ReportCard/Add";
import ReportCardView from "../Modules/Marks/ReportCard/View";

import LibraryMember from "../Modules/Library/Member/Member";
import LibraryMemberAdd from "../Modules/Library/Member/Add";
import LibraryMemberEdit from "../Modules/Library/Member/Edit";
import LibraryMemberView from "../Modules/Library/Member/View";

import Books from "../Modules/Library/Books/Books";
import BooksAdd from "../Modules/Library/Books/Add";
import BooksEdit from "../Modules/Library/Books/Edit";

import Issue from "../Modules/Library/Issue/Issue";
import IssueAdd from "../Modules/Library/Issue/Add";
import IssueEdit from "../Modules/Library/Issue/Edit";

import LibraryReport from "../Modules/Library/LibraryReport/Report";
import LibraryReportAdd from "../Modules/Library/LibraryReport/Add";
import ReportEdit from "../Modules/Library/LibraryReport/Edit";

import Import from "../Modules/Library/ImportBooks/Import";
import ImportAdd from "../Modules/Library/ImportBooks/Add";
import ImportEdit from "../Modules/Library/ImportBooks/Edit";

import Lost from "../Modules/Library/Lost/Lost";
import LostAdd from "../Modules/Library/Lost/Add";
import LostEdit from "../Modules/Library/Lost/Edit";

import BusAttendance from "../Modules/Transport/BusAttendance/BusAttendance";
import BusAttendanceAdd from "../Modules/Transport/BusAttendance/Add";
import BusAttendanceEdit from "../Modules/Transport/BusAttendance/Edit";
import BusAttendanceView from "../Modules/Transport/BusAttendance/View";

import BusRoute from "../Modules/Transport/BusRoute/BusRoute";
import BusRouteView from "../Modules/Transport/BusRoute/View";
import BusRouteMonthly from "../Modules/Transport/BusRoute/Monthly";
import BusRouteAdd from "../Modules/Transport/BusRoute/Add";
import BusRouteEdit from "../Modules/Transport/BusRoute/Edit";

import BusLiveTrack from "../Modules/Transport/BusLiveTrack/BusLiveTrack";
import BusLiveTrackAdd from "../Modules/Transport/BusLiveTrack/Add";
import BusLiveTrackEdit from "../Modules/Transport/BusLiveTrack/Edit";
import BusLiveTrackView from "../Modules/Transport/BusLiveTrack/View";

import ListMember from "../Modules/Transport/ListtMember/ListtMember";
import ListMemberView from "../Modules/Transport/ListtMember/View";
import ListMemberEdit from "../Modules/Transport/ListtMember/Edit";
import ListMemberAdd from "../Modules/Transport/ListtMember/Add";

import DistanceMaster from "../Modules/Transport/DistanceMaster/DistanceMaster";
import DistanceMasterAdd from "../Modules/Transport/DistanceMaster/Add";
import DistanceMasterEdit from "../Modules/Transport/DistanceMaster/Edit";
import DistanceMasterView from "../Modules/Transport/DistanceMaster/View";

import BusStand from "../Modules/Transport/BusStand/BusStand";
import BusStandAdd from "../Modules/Transport/BusStand/Add";
import BusStandView from "../Modules/Transport/BusStand/View";
import BusStandEdit from "../Modules/Transport/BusStand/Edit";

import TransportMember from "../Modules/Transport/TransportMember/TransportMember";
import TransportMemberAdd from "../Modules/Transport/TransportMember/Add";
import TransportMemberEdit from "../Modules/Transport/TransportMember/Edit";
import TransportMemberView from "../Modules/Transport/TransportMember/View";

import BusMaster from "../Modules/Transport/BusMaster/BusMaster";
import BusMasterAdd from "../Modules/Transport/BusMaster/Add";
import BusMasterView from "../Modules/Transport/BusMaster/View";
import BusMasterEdit from "../Modules/Transport/BusMaster/Edit";

import Hostel from "../Modules/Hostel/Hostel/Hostel";
import HostelAdd from "../Modules/Hostel/Hostel/Add";
import HostelEdit from "../Modules/Hostel/Hostel/Edit";

import Category from "../Modules/Hostel/Category/Category";
import CategoryAdd from "../Modules/Hostel/Category/Add";
import CategoryEdit from "../Modules/Hostel/Category/Edit";

import HostelMember from "../Modules/Hostel/HostelMember/HostelMember";
import HostelMemberAdd from "../Modules/Hostel/HostelMember/Add";
import HostelMemberEdit from "../Modules/Hostel/HostelMember/Edit";
import HostelMemberView from "../Modules/Hostel/HostelMember/View";
import { Class } from "leaflet";
import { Library } from "../Constant";
import Feetype from "../Modules/Account/Fee_type/fee_type";
import AddFeetype from "../Modules/Account/Fee_type/Add";
// import StaffView from "../Modules/Staff/View";


import TtimeTable from "../Modules/Academic/TtimeTable/TtimeTable";
import TimeTableListing from "../Modules/Academic/TtimeTable/TimeTableListing";
import ApiTest from "../Modules/Marks/Marks/ApiTest";

//Invoice
import Invoice from "../Modules/Invoice/Invoice";
import InvoiceAdd from "../Modules/Invoice/Add";
import InvoiceEdit from "../Modules/Invoice/Edit";


//Feecollection
import Feecollection from "../Modules/Account/Fee_type/Feecollection/Feecollection";
import FeecollectionAdd from "../Modules/Account/Fee_type/Feecollection/Add";
import DueFee from "../Modules/Account/Fee_type/DueFee/DueFee";
//Bus Fee collection
import Buscollection from "../Modules/Buscollection/Buscollection";
import BuscollectionAdd from "../Modules/Buscollection/Add";

//Payslip
import Payslip from "../Modules/Account/Fee_type/Payslip/Payslip";
import PayslipAdd from "../Modules/Account/Fee_type/Payslip/Add";

//Expense
import Expense from "../Modules/Account/Fee_type/Expense/Expense";
import ExpenseAdd from "../Modules/Account/Fee_type/Expense/Add";

//Discount
import Discount from "../Modules/Account/Fee_type/Discount/Discount";
import DiscountAdd from "../Modules/Account/Fee_type/Discount/Add";

//Advance
import Advance from "../Modules/Account/Advance/Advance";
import AdvanceAdd from "../Modules/Account/Advance/Add";
import AdvanceView from "../Modules/Account/Advance/View";

//Due Fees
import Duefees from "../Modules/Account/Fee_type/Duefees/Duefees";
import DuefeesAdd from "../Modules/Account/Fee_type/Duefees/Add";

//invoice

import Invoicee from "../Modules/Account/Fee_type/invoice/Invoice";
import AddInvoice from "../Modules/Account/Fee_type/invoice/Add";
import Feeinvoice from "../Modules/Account/Fee_type/Feeinvoice";
import ViewInvoice from "../Modules/Account/Fee_type/invoice/View";


//Paymenthistory
import Paymenthistory from "../Modules/Account/Fee_type/Paymenthistory/Payment";
// import DuefeesAdd from "../Modules/Duefees/Add";

import ClassReport from "../Modules/Report/Class_report/Class_report";
import AttendanceReport from "../Modules/Report/Attendance_report/Attendance";
import StudentReport from "../Modules/Report/Student_report/Student_report";
import SMSReport from "../Modules/Report/SMS_report/Sms_report";
import MonthlyReport from "../Modules/Report/monthly_report/Monthly_report";
import LateReport from "../Modules/Report/Late_report/Late_report";
import ExamReport from "../Modules/Report/Exam_report/Exam_report";

//import Custom Report
import CustomReport from "../Modules/Custom Report/Name-Date";

// import Class_report from "../Modules/Report/Class_report/Class_report";
import DayReport from "../Modules/Account/Fee_type/DayReport";
import DiscountReport from "../Modules/Account/Fee_type/DiscountReport";
import ClassWiseDayReport from "../Modules/Account/Fee_type/ClassWise";
// import DiscountReport from "../Modules/Report/DayReport/DiscountReport";
// import ClassWiseReport from "../Modules/Report/DayReport/ClassWise";
import SchoolReport from "../Modules/Account/Fee_type/SchoolReport";
import FeeAccountRegister from "../Modules/Account/Fee_type/FeeAccountRegister";
import  ViewHistory  from "../Modules/Account/Fee_type/Feecollection/ViewHistory";
import ViewBusHistory from '../Modules/Buscollection/ViewHistory';
import Edit from "../Modules/Buscollection/Edit";
 
//hostelFee
import HostelFee from "../Modules/Account/HostelFeeCollection/HostelFee";
import AddHostelFee from "../Modules/Account/HostelFeeCollection/Add";
import EditHostelFee from "../Modules/Account/HostelFeeCollection/Edit";
import ViewHostelfee from "../Modules/Account/HostelFeeCollection/View";

//Addministrator
import Academic from "../Modules/Administrator/Academic_year";
import Backup from "../Modules/Administrator/Backup";
import Imports from "../Modules/Administrator/Imports";
import Reset_password from "../Modules/Administrator/Reset_password";
import System_admin from "../Modules/Administrator/System_admin";
//settings
import Genral_settings from "../Modules/Settings/General_settings"
// settings

export const routes = [
        //dashboard
        { path: `${process.env.PUBLIC_URL}/dashboard/default`, Component: <Default /> },
        { path: `${process.env.PUBLIC_URL}/dashboard/ecommerce`, Component: <Ecommerce /> },

        // //widgets
        { path: `${process.env.PUBLIC_URL}/widgets/general`, Component: <General /> },
        { path: `${process.env.PUBLIC_URL}/widgets/chart`, Component: <Chart /> },
        //Enquire

        { path: `/enquire/enquire`, Component: <Enquire/> },

        { path: `/enquire/add`, Component: <EnquireAdd /> },
  {
    path: `/enquire/view/:eid/:cid`,
    Component: <EnquireView />,
  },
  {
    path: `/report/name_number_report`,
    Component: <CustomReport />,
  },
  {
    path: `/enquire/edit/:eid/:cid`,
    Component: <EnquireEdit />,
  },
  //students
  {
    path: `/students/students`,
    Component: <Students />,
  },
  { path: "/students/add", Component: <StudentAdd /> },
  {
    path: `/students/view/:sid/:cid`,
    Component: <StudentView />,
  },
  {
    path: `/students/edit/:sid/:cid`,
    Component: <StudentEdit />,
  },
  
  {
    path: `/students/rte_students`,
    Component: <RTEStudents/>,
  },

  {
    path: `/students/bpl_students`,
    Component: <BPL_Students/>,
  },

   {
    path: `/students/studentstatus`,
    Component: <StudentStatus/>,
  },

  {
    path: `/students/subjectassign_studentwise`,
    Component: <StudentWise/>,
  },

  {
    path: `/students/subjectassign_subjectwise`,
    Component: <SubjectWise/>,
  },
  {
    path: `/students/subjectassign_subjectwise`,
    Component: <SubjectWise/>,
  },

  {
    path: `/students/houseassign`,
    Component: <House/>,
  },

  //parents
  { path: `/parents/parents`, Component: <Parents /> },
  { path: `parents/view/:id`, Component: <ParentView /> },
  { path: `parents/edit/:id`, Component: <ParentEdit /> },

  //staff
  { path: `/staff/staff`, Component: <Staff /> },
  // { path: `/staff/add`, Component: <AddStaff/> },
  // { path: `/staff/view/:sid`, Component: <ViewStaff /> },
  // { path: `/staff/edit`, Component: <EditStaff /> },

  { path: `staff/add/:sid`, Component: <AddStaff/> },
  { path: `staff/view/:tid`, Component: <StaffView/> },
  { path: `staff/edit/:id`, Component: <EditStaff /> },

  
  //academic//class
  { path: `/academic/class`,
   Component: <Classess /> },
  {
    path: `/academic/class/add`,
    Component: <AddClasses />,
  },
//   {
//     path: `${process.env.PUBLIC_URL}/academic/class/view`,
//     Component: <ViewClasses/>,
//   },
  {
    path: `/academic/class/edit`,
    Component: <EditClasses/>,
  },

  //shift
  { path: `/academic/shift`, Component: <Shift /> },
  {
    path: `/shift/edit/:id`,
    Component: <ShiftEdit />,
  },
  {
    path: `/shift/add`,
    Component: <ShiftAdd />,
  },

  //subject
  {
    path: `/academic/subject`,
    Component: <Subject />,
  },
  {
    path: `/subject/edit/:id`,
    Component: <SubjectEdit />,
  },
  {
    path: `/subject/add`,
    Component: <SubjectAdd />,
  },

  //sections

  {
    path: `/academic/section`,
    Component: <Section />,
  },
  {
    path: `section/edit/:id`,
    Component: <SectionEdit />
  },
  {
    path: `section/add`,
    Component: <SectionAdd />,
  },

  //Periods
  {
    path: `/academic/period`,
    Component: <Period />,
  },
  {
    path: `period/edit/:id`,
    Component: <PeriodEdit />
  },
  {
    path: `period/add`,
    Component: <PeriodAdd />,
  },

  //Syllabus

  {
    path: `/academic/syllabus`,
    Component: <Syllabus />,
  },
  {
    path: `/syllabus/edit`,
    Component: <SyllabusEdit />,
  },
  {
    path: `/syllabus/add`,
    Component: <SyllabusAdd />,
  },

  {
    path: `/academic/assignment`,
    Component: <Assignment />,
  },
  //  { path: `${process.env.PUBLIC_URL}/academic/Assignment/edit`, Component: <AssignmentEdit/> },
  {
    path: `/academic/assignment/add`,
    Component: <AssignmentAdd />,
  },

  {
    path: `/academic/routine`,
    Component: <Routine />,
  },
  {
    path: `/academic/routine/add`,
    Component: <RoutineAdd />,
  },
  {
    path: `/academic/teachertimetable`,
    Component: <TtimeTable />,
  },
  {
    path: `/students/listing`,
    Component: <TimeTableListing  />,
  },

  //Invoice
  {
    path: `/invoice`,
    Component: <Invoice />,
  },
  {
    path: `/invoicee/add`,
    Component: <AddInvoice />,
  },
  {
    path: `/invoice/edit`,
    Component: <InvoiceEdit />,
  },
  {
    path: `/invoice/view/:id`,
    Component: <ViewInvoice />,
  },

  //Fee Collection
  {
    path: `/feecollection`,
    Component: <Feecollection />,
  },
  {
    path: `/feecollectionn/add`,
    Component: <FeecollectionAdd />,
  },

   //Bus Fee Collection
   {
    path: `/buscollection`,
    Component: <Buscollection />,
  },
  {
    path: `/buscollection/add`,
    Component: <BuscollectionAdd />,
  },
  {
    path: `/buscollection/viewhistory/:sid`,
    Component: <ViewBusHistory />,
  },


  {
    path: `/hostelfeecollection`,
    Component: <HostelFee />,
  },
  {
    path: `/hostlefeecollection/add`,
    Component: <AddHostelFee />,
  },
  {
    path: `/hostelfeecollection/edit`,
    Component: < EditHostelFee />,
  },
  {
    path: `/hostelcollection/HostelView`,
    Component: < ViewHostelfee/>,
  },

   //Payslip
   {
    path: `/payslip`,
    Component: <Payslip />,
  },
  {
    path: `/payslip/add`,
    Component: <PayslipAdd />,
  },

  //Expense
  {
    path: `/expense`,
    Component: <Expense />,
  },
  {
    path: `/expense/add`,
    Component: <ExpenseAdd />,
  },

   //Discount
   {
    path: `/discount`,
    Component: <Discount />,
  },
  {
    path: `/Discount/add`,
    Component: <DiscountAdd />,
  },

   //Advance
   {
    path: `/advance`,
    Component: <Advance />,
  },
  {
    path: `/advance/add`,
    Component: <AdvanceAdd />,
  },
  {
    path: `/advance/view/:sid`,
    Component: <AdvanceView />,
  },

  //Due Fees
  {
    path: `/duefees`,
    Component: <Duefees />,
  },
  {
    path: `/duefees/add`,
    Component: <DuefeesAdd />,
  },


  //Payment History
  {
    path: `/paymenthistory`,
    Component: <Paymenthistory />,
  },
  {
    path: `/duefees/add`,
    Component: <DuefeesAdd />,
  },
  

//Teacher Time Table

  {
    path: `/academic/teachertimetable`,
    Component: <Teachertimetable />,
  },
  {
    path: `/academic/routine/add`,
    Component: <RoutineAdd />,
  },

  {
    path: `/attendance/studentattendance`,
    Component: <StudentAttendance />,
  },
  {
    path: `/attendance/studentattendance/add`,
    Component: <StudentAttendanceAdd />,
  },
  {
    path: `/attendance/studentattendance/view`,
    Component: <StudentAttendanceView />,
  },
  {
    path: `/attendance/staffattendance`,
    Component: <StaffAttendance />,
  },
  {
    path: `/attendance/staffattendance/view`,
    Component: <StaffAttendanceView />,
  },
  {
    path: `/attendance/staffattendance/add`,
    Component: <StaffAttendanceAdd/>,
  },

  //Exam

  { path: `/exam`, Component: <Exam /> },
  { path: `/exam/edit`, Component: <ExamEdit /> },
  { path: `/exam/add`, Component: <ExamAdd /> },

  //classTest

  { path: `/classtest`, Component: <ClassTest /> },
  { path: `/classtest/edit`, Component: <ClassTestEdit /> },
  { path: `/classtest/add`, Component: <ClassTestAdd /> },

  //Exam Schedule

  {
    path: `/examschedule`,
    Component: <ExamSchedule />,
  },
  {
    path: `/examschedule/edit`,
    Component: <ExamScheduleEdit />,
  },
  {
    path: `/examschedule/add`,
    Component: <ExamScheduleAdd />,
  },

  {
    path: `/classtestchedule`,
    Component: <ClassTestSchedule />,
  },
  {
    path: `/examschedule/edit`,
    Component: <ExamScheduleEdit />,
  },
  {
    path: `/examschedule/add`,
    Component: <ExamScheduleAdd />,
  },

//

  //Grade

  { path: `/grade`, Component: <Grade /> },
  {
    path: `/grade/edit`,
    Component: <GradeEdit />,
  },
  { path: `/grade/add`, Component: <GradeAdd /> },


  //ExamAttendance

  {
    path: `/eattendance`,
    Component: <ExamAttendance />,
  },
  {
    path: `/eattendance/edit`,
    Component: <ExamAttendanceEdit />,
  },
  {
    path: `/eattendance/add`,
    Component: <ExamAttendanceAdd />,
  },


  //Marks

  { path: `/marks/marks`, Component: <Marks /> },
  {
    path: `/marks/marksedit`,
    Component: <MarksEdit />,
  },
  { path: `/marks/marksadd`, Component: <MarksAdd /> },
  { path: `/marks/marksapitest`, Component: <ApiTest /> },

  {
    path: `/marks/markspercentage`,
    Component: <MarkPercentage />,
  },
  {
    path: `/marks/markpercentage/edit`,
    Component: <MarkPercentageEdit />,
  },
  {
    path: `/marks/markpercentageadd`,
    Component: <MarkPercentageAdd />,
  },

  {
    path: `/marks/assigngrade`,
    Component: <AssignGrade />,
  },
  {
    path: `/marks/assigngrade/edit`,
    Component: <AssignGradeEdit />,
  },
  {
    path: `/marks/assigngrade/add`,
    Component: <AssignGradeAdd />,
  },

  {
    path: `/marks/promotion`,
    Component: <Promotion />,
  },
  {
    path: `/marks/promotion/edit`,
    Component: <PromotionEdit />,
  },
  {
    path: `/marks/promotion/add`,
    Component: <PromotionAdd />,
  },

  {
    path: `/marks/promotion`,
    Component: <Promotion />,
  },
  {
    path: `/marks/promotion/edit`,
    Component: <PromotionEdit />,
  },
  {
    path: `/marks/promotion/add`,
    Component: <PromotionAdd />,
  },

  {
    path: `/marks/reportcard`,
    Component: <ReportCard />,
  },
  {
    path: `/marks/reportcard/edit`,
    Component: <ReportEdit />,
  },
  // {
  //   path: `/marks/reportcard/add`,
  //   Component: <ReportAdd />,
  // },

  {
    path: `/library/member/member`,
    Component: <LibraryMember />,
  },
  {
    path: `/library/member/add`,
    Component: <LibraryMemberAdd />,
  },
  {
    path: `/library/member/edit`,
    Component: <LibraryMemberEdit />,
  },
  {
    path: `/library/member/view`,
    Component: <LibraryMemberView />,
  },
  //  { path: `${process.env.PUBLIC_URL}/attendance/staffattendance/view`, Component: <StaffAttendanceView /> }

  { path: `/library/books`, Component: <Books /> },
  {
    path: `/library/books/edit`,
    Component: <BooksEdit />,
  },
  {
    path: `/library/books/add`,
    Component: <BooksAdd />,
  },

  {
    path: `/library/issue/issue`,
    Component: <Issue />,
  },
  {
    path: `/library/issue/edit`,
    Component: <IssueEdit />,
  },
  {
    path: `/library/issue/add`,
    Component: <IssueAdd />,
  },

  {
    path: `/library/libraryreport/report`,
    Component: <LibraryReport />,
  },
  {
    path: `/library/libraryreport/edit`,
    Component: <ReportEdit />,
  },
  {
    path: `/library/libraryreport/add`,
    Component: <LibraryReportAdd />,
  },

  { path: `/library/lost/lost`, Component: <Lost /> },
  {
    path: `/library/lost//edit`,
    Component: <LostEdit />,
  },
  {
    path: `/library/lost/add`,
    Component: <LostAdd />,
  },

  { path: `/library/import`, Component: <Import /> },
  {
    path: `/library/import/add`,
    Component: <ImportAdd />,
  },
  {
    path: `/library/import/edit`,
    Component: <ImportEdit />,
  },

  {
    path: `/transport`,
    Component: <BusAttendance />,
  },
  {
    path: `/transport/add`,
    Component: <BusAttendanceAdd />,
  },
  {
    path: `/transport/edit`,
    Component: <BusAttendanceEdit />,
  },
  {
    path: `/transport/view`,
    Component: <BusAttendanceView />,
  },

  {
    path: `/transport/buslivetrack/buslivetrack`,
    Component: <BusLiveTrack />,
  },
  {
    path: `/transport/buslivetrack/add`,
    Component: <BusLiveTrackAdd />,
  },
  {
    path: `/transport/buslivetrack/edit`,
    Component: <BusLiveTrackEdit />,
  },
  {
    path: `/transport/buslivetrack/view`,
    Component: <BusLiveTrackView />,
  },

  {
    path: `/transport/busmaster/busmaster`,
    Component: <BusMaster />,
  },
  {
    path: `/transport/busmaster/add`,
    Component: <BusMasterAdd />,
  },
  {
    path: `/transport/busmaster/edit`,
    Component: <BusMasterEdit />,
  },
  {
    path: `/transport/busmaster/view`,
    Component: <BusMasterView />,
  },

  {
    path: `/transport/busroute`,
    Component: <BusRoute />,
  },
  {
    path: `/transport/busroute/add`,
    Component: <BusRouteAdd />,
  },
  {
    path: `/transport/busroute/edit`,
    Component: <BusRouteEdit />,
  },
  {
    path: `/transport/busroute/view`,
    Component: <BusRouteView />,
  },
  {
    path: `/transport/busroute/monthly`,
    Component: <BusRouteMonthly />,
  },

  {
    path: `/transport/busstand/busstand`,
    Component: <BusStand />,
  },
  {
    path: `/transport/busstand/add`,
    Component: <BusStandAdd />,
  },
  {
    path: `/transport/busstand/edit`,
    Component: <BusStandEdit />,
  },
  {
    path: `/transport/busstand/view`,
    Component: <BusStandView />,
  },

  {
    path: `/transport/distancemaster/distancemaster`,
    Component: <DistanceMaster />,
  },
  {
    path: `/transport/distancemaster/add`,
    Component: <DistanceMasterAdd />,
  },
  {
    path: `/transport/distancemaster/edit`,
    Component: <DistanceMasterEdit />,
  },
  {
    path: `/transport/distancemaster/view`,
    Component: <DistanceMasterView />,
  },

  {
    path: `/transport/listmember/member`,
    Component: <ListMember />,
  },
  {
    path: `/transport/listmember/add`,
    Component: <ListMemberAdd />,
  },
  {
    path: `/transport/listmember//edit`,
    Component: <ListMemberEdit />,
  },
  {
    path: `/transport/listmember/view`,
    Component: <ListMemberView />,
  },

  {
    path: `/transport/transport/member`,
    Component: <TransportMember />,
  },
  {
    path: `/transport/member/add/:sid/:cid`,
    Component: <TransportMemberAdd />,
  },
  {
    path: `/transport/member/edit/:sid/:cid`,
    Component: <TransportMemberEdit />,
  },
  {
    path: `/transport/member/view/:sid/:cid`,
    Component: <TransportMemberView />,
  },

  { path: `/hostel/hostel`, Component: <Hostel /> },
  { path: `/hostel/edit`, Component: <HostelEdit /> },
  { path: `/hostel/add`, Component: <HostelAdd /> },

  {
    path: `/hostel/category`,
    Component: <Category />,
  },
  {
    path: `/hostel/category/edit`,
    Component: <CategoryEdit />,
  },
  {
    path: `/hostel/category/add`,
    Component: <CategoryAdd />,
  },

  {
    path: `/hostel/member`,
    Component: <HostelMember />,
  },
  {
    path: `/hostel/member/add/:sid/:cid`,
    Component: <HostelMemberAdd />,
  },
  {
    path: `/hostel/member/edit`,
    Component: <HostelMemberEdit />,
  },
  {
    path: `/hostel/member/view`,
    Component: <HostelMemberView />,
  },
  {
    path: `/account/feeaccountregister`,
    Component: <FeeAccountRegister/>,
},
{
  path: `/account/feehistory/Academic/:sid`,
  Component: <ViewHistory/>,
},
{
  path: `/buscollection/edit`,
  Component: < Edit/>,
},
{
  path: `/Account/Fee_type/ppinvoice`, Component: <Feeinvoice/>
},
  { path: `/account/feetypes/fee_type`, Component: <Feetype /> },
  { path: `/account/feetypes/add`, Component: <AddFeetype/> },
  { path: `/hostel/add`, Component: <HostelAdd /> },
  {
    path: `account/Invoice`,
    Component: <Invoicee/>,
},


//invoice
{ path: `/invoice/add`, Component: <AddInvoice /> },

  {
    path: `/account/day_report`,
    Component: <DayReport />,
  },
  {
    path: `/account/discount_report`,
    Component: <DiscountReport/>,
  },
  {
    path: `/account/classwise_dayreport`,
    Component: <ClassWiseDayReport/>,
  },
  
  {
    path: `/account/school_report`,
    Component: <SchoolReport/>,
  },
  //REPORT
  { path: `/report/class_report`, Component: <ClassReport /> },
  { path: `/report/attendance_report`, Component: <AttendanceReport /> },
  { path: `/report/student_report`, Component: <StudentReport /> },
  { path: `/report/sms_report`, Component: <SMSReport /> },
  {path: `/report/exam_report`, Component: <ExamReport />},
  {path: `/report/monthly_report`, Component: <MonthlyReport />},
  {path: `/report/late_report`, Component: <LateReport/>},
        // { path: `${process.env.PUBLIC_URL}/enquire/enquire`, Component: <Enquire /> },
        //  administrator
  { path: `/Administrator/acadmic-year`, Component: <Academic /> },
  { path: `/Administrator/system-admin`, Component: <System_admin /> },
  { path: `/Administrator/backup`, Component: <Backup /> },
  { path: `/Administrator/import`, Component: <Imports /> },
  { path: `/Administrator/Reset-password`, Component: <Reset_password /> },

// settings
   {path:`/setting/general-setting`,Component:<Genral_settings/>},
];

