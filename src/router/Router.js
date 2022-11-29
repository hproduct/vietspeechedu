import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home/HomeView";
import Schedule from "@/components/Schedule.vue";
import StudentInfo from "@/components/StudentInfo.vue";
import InformationView from "@/views/Information/InformationView";
import ChangePassword from "@/views/Information/ChangePassword.vue";

//parent
import ParentView from "../views/Manage/Parent/ParentView";
import Request from "@/components/Parent/Request/Request.vue";
import DayReport from "@/components/Parent/DailyReport/DayReport.vue";
import ParentInterventionPlan from "@/components/Parent/InterventionPlan/InterventionPlan.vue";
import ParentInterventionPlanReport from "@/components/Parent/InterventionPlanReport/InterventionPlanReport.vue";
import ParentStudentFee from '@/components/Parent/ParentStudentFee.vue';
import ParentStudentAssessment from "@/components/Parent/Assessment/StudentAssessment.vue";
import ParentSchedule from "@/components/Parent/Schedule/Schedule.vue";

//admin
import AdminView from "@/views/Manage/Admin/AdminView";
import AllActivities from "@/components/Admin/AllActivity.vue";
import ParentDetail from "@/components/Admin/ParentManage/ParentDetail.vue";
import TeacherDetail from "@/components/Admin/TeacherManage/TeacherDetail.vue";
import StudentDetail from "@/components/Admin/StudentDetail.vue";
import CreateAccount from "@/components/Admin/CreateAccount.vue";
import CreateStudent from "@/components/Admin/CreateStudent.vue";
import TeacherTableList from '@/components/Admin/TeacherManage/TeacherTableList.vue'
import SupervisorTableList from '@/components/Admin/SupervisorManage/SupervisorTableList.vue'
import OfficeStaffTableList from '@/components/Admin/OfficeStaffManage/OfficeStaffTableList.vue'
import StudentInfoTableList from '@/components/Admin/StudentInfoTableList.vue'
import ParentTableList from '@/components/Admin/ParentManage/ParentTableList.vue'



//teacher compone
import TeacherView from "@/views/Manage/Teacher/TeacherView.vue";
import TeacherDailyReport from "@/components/Teacher/Teacher_DailyReport.vue";
import TeacherInventionReport from "@/components/Teacher/Teacher_InventionPlanReport.vue";
import TeacherInventionPlan from "@/components/Teacher/Teacher_InventionPlan.vue";
import Teacher_Request from "@/components/Teacher/Teacher_Request.vue";
import { LocalStorageKey } from "@/constant/LocalStorageKey";
import SupervisorView from '@/views/Manage/Supervisor/SupervisorView.vue'
import SupervisorSchedule from '@/components/Supervisor/SupervisorSchedule.vue'
import SupervisorDashboard from '@/views/Manage/Supervisor/SupervisorDashboard.vue'
import SupervisorAssessment from '@/components/Supervisor/SupervisorAssessment.vue'
import SupervisorNewAssessment from '@/components/Supervisor/SupervisorNewAssessment.vue'
import ListStudent from '@/components/Teacher/ListStudent.vue'
import TeacherStudent from '@/views/Manage/Teacher/TeacherStudent.vue'
import SupervisorInterventionPlanReport from '@/components/Supervisor/SupervisorInterventionReport.vue'
import SupervisorInterventionPlanReportDetail from '@/components/Supervisor/SupervisorInterventionPlanReportDetail.vue'
import TeacherAssessment from '@/components/Teacher/Teacher_Assessment.vue'

// Office Staff
import StaffView from '@/views/Manage/Staff/StaffView.vue';
import StaffStudentList from '@/components/Staff/StaffStudentList.vue';
import StaffStudentDetail from '@/components/Staff/StaffStudentDetail.vue';
import StaffStudentFee from '@/components/Staff/StaffStudentFee.vue';
import StaffTakeAttend from '@/components/Staff/StaffTakeAttend.vue';
import StaffAttendanceDetail from '@/components/Staff/StaffAttendanceDetail.vue';

import VueJwtDecode from "vue-jwt-decode";
import store from "@/store/AppModule";
import cookie from 'vue-cookies'

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    beforeEnter: (to, from) => {
      if (cookie.get(LocalStorageKey.ROLES_KEY) !== null) {
        let role = cookie.get(LocalStorageKey.ROLES_KEY);
        // still some weir bug here
        switch (role.roleName) {
          case "ADMIN":
            router.push({ name: "admin" })
            break;
          case "PARENT":
            router.push({ name: "parent" })
            break;
          case "TEACHER":
            router.push({ name: "teacher" })
            break;
          case "SUPERVISOR":
            router.push({ name: "supervisor" })
            break;
          case "TEACHER": {
            router.push({ path: "teacher" });
            break;
          }
          case "STAFF": {
            router.push({ path: "staff" });
            break;
          }
        }
      }
    },
  },
  // parent
  {
    path: "/parent",
    name: "parent",
    component: ParentView,
    // beforeEnter: (to, from) => {
    //   let role = cookie.get(LocalStorageKey.ROLES_KEY);
    //   if (role.roleName === "PARENT") {
    //   } else {
    //     router.push({ name: "ErrorPage" });
    //   }
    // },
    children: [
      {
        path: "parent-request/:id",
        component: Request,
      },
      {
        path: "student-scheduler/:id",
        component: ParentSchedule,
      },
      {
        path: "student-info/:id",
        component: StudentInfo,
      },
      {
        path: "day-report/:id",
        component: DayReport,
      },
      {
        path: "intervention-plan/:id",
        component: ParentInterventionPlan,
      },
      {
        path: "intervention-plan-report/:id",
        component: ParentInterventionPlanReport,
      },
      {
        path: "assessment-report/:id",
        component: ParentStudentAssessment,
      },
      {
        path: "student-fee",
        component: ParentStudentFee,
      },
    ],
  },
  // admin
  {
    path: "/admin",
    name: "admin",
    component: AdminView,
    // beforeEnter: (to, from) => {
    //   let role = cookie.get(LocalStorageKey.ROLES_KEY);
    //   if (role.roleName === "ADMIN") {
    //   } else {
    //     router.push({ name: "ErrorPage" });
    //   }
    // },
    children: [
      {
        path: "list-student",
        component: StudentInfoTableList,
      },
      {
        path: "list-parent",
        component: ParentTableList,
      },
      {
        path: "list-teacher",
        component: TeacherTableList,
      },
      {
        path: "list-supervisor",
        component: SupervisorTableList,
      },
      {
        path: "list-office-staff",
        component: OfficeStaffTableList,
      },
      {
        path: "all-activities",
        component: AllActivities,
      },
      {
        path: "list-parent/Detail",
        component: ParentDetail,
      },
      {
        path: "list-teacher/Detail",
        component: TeacherDetail,
      },
      {
        path: "list-supervisor/Detail",
        component: TeacherDetail,
      },
      {
        path: "create-account",
        component: CreateAccount,
      },
      {
        path: "create-student",
        component: CreateStudent,
      },
      {
        path: "list-student/Detail",
        component: StudentDetail,
        children: [
          {
            path: "parent-request",
            component: Request,
          },
          {
            path: "student-scheduler",
            component: Schedule,
          },
          {
            path: "student-info",
            component: StudentInfo,
          },
          {
            path: "day-report",
            component: DayReport,
          },

          {
            path: "intervention-plan",
            component: DayReport,
          },
          {
            path: "intervention-plan-report",
            component: ParentInterventionPlan,
          },
          {
            path: "assessment-report",
            component: DayReport,
          },
        ],
      },
    ],
  },
  // account information
  {

    path: "/information",
    name: "information",
    component: InformationView,
  },
  // account change password
  {
    path: "/change-password",
    name: "change-password",
    component: ChangePassword,
  },
  // error page
  {
    path: "/:patchMatch(.*)*",
    name: "ErrorPage",
    component: () => import("@/views/Error/ErrorView.vue"),
  },

  //Teacher
  {
    path: "/teacher",
    name : "teacher",
    component: TeacherView,
    children: [
      {
        path: "teacher-scheduler", // teacher scheduler
        component: Schedule
      },
      {
        path: "student-list",
        component: ListStudent // student picking page
      },
      {
        path: "student-teacher",
        component: TeacherStudent,
        children: [
          {
            path: "daily-report/:id",
            component: TeacherDailyReport,
          },
          {
            path: "student-info/:id",
            component: StudentInfo,
          },
          {
            path: "student-scheduler/:id",
            component: Schedule,
          },
          {
            path: "invention-report/:id",
            component: TeacherInventionReport,
          },
          {
            path: "invention-plan/:id",
            component: TeacherInventionPlan,
          },
          {
            path: "request/:id",
            component: Teacher_Request,
          },
          {
            path: "assessment/:id",
            component: TeacherAssessment,
          },
        ]
      }
    ]
  },

  // Supervisor
  {
    path: "/supervisor",
    name: "supervisor",
    component: SupervisorView,
    beforeEnter: (to, from) => {
      // let role = cookie.get(LocalStorageKey.ROLES_KEY);
      // //if (role.roleName === "SUPERVISOR") {
      //   if (role.roleName === "PARENT") {

      // } else {
      //   router.push({ name: "ErrorPage" })
      // }
    },
    children: [
      {
        path: "supervisor-scheduler",
        component: SupervisorSchedule, // supervisor scheduler
      },
      {
        path: "student-list",
        component: () => import("@/components/Supervisor/SupervisorListStudent.vue"), // student picking page
      },
      {
        path: "student-detail",
        component: SupervisorDashboard,
        children: [
          {
            path: "info",
            component: StudentInfo, // supervisor scheduler
          },
          {
            path: "assessment",
            component: SupervisorAssessment, // supervisor scheduler
          },
          {
            path: "create-assessment",
            component: SupervisorNewAssessment,
          },
          {
            path: "intervention-plan-report",
            component: SupervisorInterventionPlanReport,
          },
          {
            path: "intervention-plan-report-detail",
            component: SupervisorInterventionPlanReportDetail,
          },
        ],
      }
    ]
  },

  //Office Staff
  {
    path: "/staff",
    component: StaffView,
    beforeEnter: (to, from) => {

    },
    children: [
      {
        path: "student-list",
        component: StaffStudentList,
      },
      {
        path: "student-detail",
        component: StaffStudentDetail,
        children:[
          {
            path: "Fee",
            component: StaffStudentFee,
          }
        ]
      },
      {
        path: "take-attendance",
        component: StaffTakeAttend,
      },
      {
        path: "attendance-detail",
        component: StaffAttendanceDetail,
      },
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

router.beforeEach((to, from) => {
  try {
    let token = cookie.get(LocalStorageKey.TOKEN_KEY);
    if (token !== null) {
      let decoded = VueJwtDecode.decode(token);
      let expired = Date.now() >= decoded.exp * 1000;
      if (expired && to.path !== "/") {
        store.commit("setIsLogin", false);
        router.push({ name: "home" });
        cookie.keys().forEach((co) => cookie.remove(co));
      }
    } else if (token === null && to.path !== "/") {
      store.commit("setIsLogin", false);
      router.push({ name: "home" });
      cookie.keys().forEach((co) => cookie.remove(co));
    }
  } catch (error) {
    console.log("error in router" + error)
    store.commit("setIsLogin", false);
    router.push({ name: "home" });
    cookie.keys().forEach((co) => cookie.remove(co));
  }
});
