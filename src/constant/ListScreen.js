export const ListScreen = {
    studentList: [{ id: 1, message: 'Báo cáo ngày', path: '/parent/day-report', isSelected: false },
    { id: 2, message: 'Báo cáo quá trình can thiệp', path: '/parent/intervention-plan-report', isSelected: false },
    { id: 3, message: 'Kế hoạch can thiệp', path: '/parent/intervention-plan', isSelected: false },
    { id: 4, message: 'Các nhu cầu của trẻ', path: '/parent/parent-request', isSelected: false },
    // need to have function to set date
    { id: 5, message: 'Lịch học', path: '/parent/student-scheduler', isSelected: false },
    { id: 6, message: 'Đánh giá trẻ', path: '/parent/assessment-report', isSelected: false },
    { id: 7, message: 'Thông tin cá nhân', path: '/parent/student-info', isSelected: false },
    { id: 8, message: 'Học phí', path: '/parent/student-info', isSelected: false },
    ],
    TeacherDetailList: [{ id: 1, message: 'Thông tin cá nhân', path: '', isSelected: false },
    { id: 2, message: 'Lịch dạy', path: '', isSelected: false },
    { id: 3, message: 'Tài liệu đã tạo', path: '', isSelected: false },
    { id: 4, message: 'Something else', path: '', isSelected: false },

    ],
    studentDetailList: [{ id: 1, message: 'Báo cáo ngày', path: '/admin/list-student/detail/day-report', isSelected: false },
    { id: 2, message: 'Báo cáo quá trình', path: '/admin/list-student/detail/intervention-plan-report', isSelected: false },
    { id: 3, message: 'Kế hoạch can thiệp', path: '/admin/list-student/detail/intervention-plan', isSelected: false },
    { id: 4, message: 'Các nhu cầu của trẻ', path: '/admin/list-student/detail/parent-request', isSelected: false },
    // need to have function to set date
    { id: 5, message: 'Lịch học', path: '/admin/list-student/detail/student-scheduler', isSelected: false },
    { id: 6, message: 'Đánh giá trẻ', path: '/admin/list-student/detail/assessment-report', isSelected: false },
    { id: 7, message: 'Thông tin cá nhân', path: '/admin/list-student/detail/student-info', isSelected: false },
    { id: 8, message: 'Học phí', path: '/admin/list-student/detail/student-info', isSelected: false },
    ],
    TeacherDashboardList: [
        { id: 1, message: 'Lịch dạy', path: 'teacher-schedule', isSelected: false },
        { id: 2, message: 'Danh sách học sinh', path: 'teacher-student-list', isSelected: false },
    ],

    getStudentList() {
        return ["Hello","Hi","hoo"]
    }
} 
