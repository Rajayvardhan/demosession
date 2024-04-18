import { Home, Airplay, Box, FolderPlus, Command, Cloud, BarChart, Users, ShoppingBag, Phone, List, Mail, MessageCircle, GitPullRequest, Monitor, Heart, Clock, Zap, CheckSquare, Calendar, Image, HelpCircle, Radio, Map, Edit, Sunrise, Package, Sliders, Layout, Server, Database, Search, File, Layers, UserCheck } from 'react-feather';

export const MENUITEMS = [
    {
        menutitle: 'General',
        menucontent: 'Dashboards, Widgets, Enquire, Students, Parents, Staff, Academic, Attendence, Exam, Class Test, Marks, Library,Transport, Hostel, Account, Custom Report  ',
        Items: [
            {
                // title: 'Dashboard', icon: Home, type: 'sub', active: false, children: [
                //     { path: `${process.env.PUBLIC_URL}/dashboard/default`, title: 'Default', type: 'link' },
                //     { path: `${process.env.PUBLIC_URL}/dashboard/ecommerce`, title: 'Ecommerce', type: 'link' },
                // ]
                path: `${process.env.PUBLIC_URL}/dashboard/default`, title: 'Dashboard',icon: Home, type: 'link' 
            },
            // {
            //     title: 'Widgets', icon: Airplay, type: 'sub', active: false, children: [
            //         { path: `${process.env.PUBLIC_URL}/widgets/general`, title: 'General', type: 'link' },
            //         { path: `${process.env.PUBLIC_URL}/widgets/chart`, title: 'Chart', type: 'link' },
            //     ]
            // },
            {
                title: 'Enquire',  icon: Phone, type: 'sub', active: false, children: [
                    { path: `/enquire/enquire`, title: 'Enquire', type: 'link' },
                    // { path: `${process.env.PUBLIC_URL}/widgets/chart`, title: 'Chart', type: 'link' },
                ]
            },
            {
                // title: 'Student', icon: Users, type: 'sub', active: false, children: [
                //     { path: `${process.env.PUBLIC_URL}/students/students`, title: 'Students', type: 'link' },
                //     // { path: `${process.env.PUBLIC_URL}/students/students`, title: 'Chart', type: 'link' },
                // // 
                // ]

                title: 'Students', icon: Airplay, type: 'sub', active: false, children: [
                
                {path: `/students/students`, title: 'Student',icon: Users, type: 'link'},
                { path: `/students/rte_students`, title: ' RTE Students', icon: Users, type: 'link' },
                { path: `/students/bpl_students`, title: ' BPL Students', icon: Users, type: 'link' },
            { path: `/students/studentstatus`, title: ' Active/Deactive Student', icon: Users, type: 'link' },
            { path: `/students/subjectassign_studentwise`, title: 'Subject Assign(Student Wise)', icon: Users, type: 'link' },
            { path: `/students/subjectassign_subjectwise`, title: 'Subject Assign(Subject Wise)', icon: Users, type: 'link' },
            { path: `/students/houseassign`, title: 'Assign House', icon: Users, type: 'link' },  
                ]
            },
        
            {
                // title: 'Parents', icon: Airplay, type: 'sub', active: false, children: [
                //      { path: `${process.env.PUBLIC_URL}/parents/parents`, title: 'Parents', type: 'link' },
                //     // { path: `${process.env.PUBLIC_URL}/widgets/chart`, title: 'Chart', type: 'link' },
                // ]
                path: `/parents/parents`, title: 'Parents',icon:Users, type: 'link'
            },
            {
                // title: 'Staff', icon: Airplay,type: 'sub', active: false, children: [
                //      { path: `${process.env.PUBLIC_URL}/staff/staff`, title: 'Staff', type: 'link' },
                //     // { path: `${process.env.PUBLIC_URL}/widgets/chart`, title: 'Chart', type: 'link' },
                // ]
                path: `/staff/staff`, title: 'Staff', icon:Users, type: 'link'
            },
            {
                title: 'Academic', icon: Airplay, type: 'sub', active: false, children: [
                    { path: `/academic/class`, title: 'Class', type: 'link' },
                    { path: `/academic/shift`, title: 'Shift', type: 'link' },
                    { path: `/academic/subject`, title: 'Subject', type: 'link' },
                    { path: `/academic/section`, title: 'Section', type: 'link' },
                    { path: `/academic/period`, title: 'Period', type: 'link' },
                    { path: `/academic/syllabus`, title: 'Syllabus', type: 'link' },
                    { path: `/academic/assignment`, title: 'Assignment', type: 'link' },
                    { path: `/academic/routine`, title: 'Routine', type: 'link' },

                    { path: `/academic/teachertimetable`, title: 'Teacher-Timetable', type: 'link' },

                    // { path: `${process.env.PUBLIC_URL}/academic/teachertimetable`, title: 'Teacher Time Table', type: 'link' },

                ]
            },
            {
                title: 'Attendance', icon: Airplay, type: 'sub', active: false, children: [
                    { path: `/attendance/studentattendance`, title: 'Student Attendance', type: 'link' },
                    { path: `/attendance/staffattendance`, title: 'Staff Attendance', type: 'link' },
                ]
            },
            {
                title: 'Exam', icon: Airplay, type: 'sub', active: false, children: [
                    { path: `/exam`, title: 'Exam', type: 'link' },
                    { path: `/examschedule`, title: 'Exam Schedule', type: 'link' },
                    { path: `/grade`, title: 'Grade', type: 'link' },
                    { path: `/eattendance`, title: 'Exam Attendance', type: 'link' },
                ]
            },
            {
                title: 'Class Test', icon: Airplay, type: 'sub', active: false, children: [
                    { path: `/classtest`, title: 'Class Test', type: 'link' },
                    { path: `/classtestchedule`, title: 'Class Test Schedule', type: 'link' },
                    { path: `/grade`, title: 'Grade', type: 'link' },
                    { path: `/eattendance`, title: 'Class Test Attendance', type: 'link' },
                ]
            },
            {
                title: 'Marks', icon: Airplay, type: 'sub', active: false, children: [
                    { path: `/marks/markspercentage`, title: 'Mark Percentage', type: 'link' },
                    { path: `/marks/assigngrade`, title: 'Assign Grade', type: 'link' },
                    { path: `/marks/marks`, title: 'Marks', type: 'link' },
                    { path: `/marks/promotion`, title: 'Promotion', type: 'link' },
                    { path: `/marks/reportcard`, title: 'Report Card', type: 'link' },
                
                ]
            },
            {
                title: 'Library', icon: Airplay, type: 'sub', active: false, children: [
                    { path: `library/member/member`, title: 'Member', type: 'link' },
                    { path: `/library/books`, title: 'Books', type: 'link' },
                    { path: `/library/issue/issue`, title: 'Issue/Return', type: 'link' },
                    { path: `/library/libraryreport/report`, title: 'Library Report', type: 'link' },
                    { path: `/library/import`, title: 'Import Books', type: 'link' },
                    { path: `/library/lost/lost`, title: 'Lost/Tom', type: 'link' },
                ]
            },
            {
                title: 'Transport', icon: Airplay, type: 'sub', active: false, children: [
                    { path: `/transport`, title: 'Bus Attendance', type: 'link' },
                    { path: `/transport/busroute`, title: 'Bus Route', type: 'link' },
                    { path: `/transport/buslivetrack/buslivetrack`, title: 'Bus Live track', type: 'link' },
                    { path: `/transport/listmember/member`, title: 'List Member', type: 'link' },
                    { path: `/transport/distancemaster/distancemaster`, title: 'Distance Master', type: 'link' },
                    { path: `/transport/busmaster/busmaster`, title: 'Bus Master', type: 'link' },
                    { path: `/transport/busstand/busstand`, title: 'Bus Stand', type: 'link' },
                    { path: `/transport/transport/member`, title: 'Members', type: 'link' },
                ]
            },
            {
                title: 'Hostel', icon: Airplay, type: 'sub', active: false, children: [
                    { path: `/hostel/hostel`, title: 'Hostel', type: 'link' },
                    { path: `/hostel/category`, title: 'Category', type: 'link' },
                    { path: `/hostel/member`, title: 'Member', type: 'link' },
                    
                    // { path: `${process.env.PUBLIC_URL}/widgets/chart`, title: 'Bus Live track', type: 'link' },
                   
                ]
            },
            {
                title: 'Report', icon: Airplay, type: 'sub', active: false, children: [
                    { path: `/report/class_report`, title: 'Class Report', type: 'link' },
                    { path: `/report/attendance_report`, title: 'Attendance Report', type: 'link' },
                    { path: `/report/student_report`, title: 'Student Report', type: 'link' },
                    { path: `/report/sms_report`, title: 'SMS Report', type: 'link' },
                    { path: `/report/exam_report`, title: 'Exam Report', type: 'link' },
                    { path: `/report/monthly_report`, title: 'Monthly Report', type: 'link' },
                    { path: `/report/late_report`, title: 'Late Report', type: 'link' },
                    
                    // { path: `${process.env.PUBLIC_URL}/widgets/chart`, title: 'Bus Live track', type: 'link' },
                   
                ]
            },
            {
                title: 'Account', icon: Airplay, type: 'sub', active: false, children: [
                    { path: `/account/feetypes/fee_type`, title: 'Fee types', type: 'link' },
                    { path: `/payslip`, title: 'Payslip', type: 'link' },
                    { path: `/advance`, title: 'Advance Receipt', type: 'link' },
                    { path: `/feecollection`, title: 'Fee Collection', type: 'link' },
                    { path: `/buscollection`, title: 'Bus Fee Collection', type: 'link' },
                    { path: `/duefees`, title: 'Due Fees', type: 'link' },
                    { path: `/paymenthistory`, title: 'Payment History', type: 'link' },
                    { path: `/expense`, title: 'Expense', type: 'link' },
                    { path: `/discount`, title: 'Discount', type: 'link' },
                    // { path: `${process.env.PUBLIC_URL}/duefee`, title: 'Due Fee Report', type: 'link' },
                    { path: `/account/day_report`, title: 'Day Report', type: 'link' },
                    { path: `/account/discount_report`, title: 'Discount DayBook', type: 'link' },
                    { path: `/account/classwise_dayreport`, title: 'Classwise DayBook', type: 'link' },
                
                    { path: `/account/school_report`, title: 'School Report', type: 'link' },
                    { path: `/account/feeaccountregister`, title: 'Fee Account Register', type: 'link' },
                    { path: `/account/invoice`, title: 'Invoice', type: 'link' },
                    { path: `/hostelfeecollection`, title: 'Hostel Fee Collection', type: 'link' },
                    // { path: `${process.env.PUBLIC_URL}/widgets/chart`, title: 'Bus Live track', type: 'link' },
                   
             ]
            },
            {
                title: 'Custom Report', icon: Airplay, type: 'sub', active: false, children: [
                    { path: `/report/name_number_report`, title: 'Name & Date', type: 'link' },
                    { path: `/report/attendance_report`, title: 'Attendance Report', type: 'link' },
                    { path: `/report/student_report`, title: 'Student Report', type: 'link' },
                    { path: `/report/sms_report`, title: 'SMS Report', type: 'link' },
                    { path: `/report/exam_report`, title: 'Exam Report', type: 'link' },
                    { path: `/report/monthly_report`, title: 'Monthly Report', type: 'link' },
                    { path: `/report/late_report`, title: 'Late Report', type: 'link' },
                    
                    // { path: `${process.env.PUBLIC_URL}/widgets/chart`, title: 'Bus Live track', type: 'link' },

                   
                ]
            },
               {
                title: 'Administrator', icon: Airplay, type: 'sub', active: false, children: [
                    { path: `/Administrator/acadmic-year`, title: 'Acadmic-year', type: 'link' },
                    { path: `/Administrator/system-admin`, title: 'System Admin', type: 'link' },
                    { path: `/Administrator/Reset-password`, title: 'Reset Password', type: 'link' },
                    { path: `/Administrator/import`, title: 'Import', type: 'link' },
                    { path: `/Administrator/backup`, title: 'Backup', type: 'link' },
                    
                    
                    // { path: `${process.env.PUBLIC_URL}/widgets/chart`, title: 'Bus Live track', type: 'link' },
                   
                ]
            },
            {
                title: 'Setting', icon: Airplay, type: 'sub', active: false, children: [
                    { path: `/setting/general-setting`, title: 'Genral-setting', type: 'link' },
        ]
    }
    
]
    }
        ]