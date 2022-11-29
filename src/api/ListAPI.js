export const BaseURl = "http://vietspeechedu.us-east-1.elasticbeanstalk.com/"

export const Method = {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    DELETE: "DELETE",
    PATCH: "PATCH"
}

export const ContentType = {
    JSON: 'application/json',
    MultiPart : 'multipart/form-data'
}

export const CommonAPI = {
    Login: "api/auth/signin"
}

export const ParentAPI = {
    GetListStudent: "api/get-list-children",
    CreateParentRequest: "api/create-request"
}

export const StudentAPI = {
    GetListParentRequest: "api/list-request",
    GetListDailyReport: "api/list-daily-report",
    GetStudentInfor: "api/get-student-info",
    GetStudentIntenventionPlanList: "api/list-intervention-report",
    GetSlotList: "api/slot-list",
    GetStudentList: 'api/get-all-student'
}

export const AccountAPI = {
    GetPersonalAPI : "api/get-user-information",
    SavePersonalAPI : "api/update-account",
    GetListAccountByRoleName: 'api/get-list-account-by-role'
}

export const ImageAPI = {
    SaveImage : "api/upload",
    DeleteImage: "api/delete"
}

export const GuestAPI = {
    SaveAppointment: "api/auth/save-appointment-information",
}

export const TestAPI = {
    Test: "api/auth/demo-test-get-method"
}