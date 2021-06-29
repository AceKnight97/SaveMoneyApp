export default {
  isLoading: false,
  login: {
    user: {},
    isSuccess: false,
  },
  notifications: [],
  unreadNotificationCount: 0,
  isEndOfNotifications: false,
  savePath: {
    // activeNewTab: ....
    // activeReportTab: ....
    // navigateFromTab: ... // a whole pathName
    // tabName: ... // a tabName: new, active, ....

    // newMDTableLastView: { searchField: ..., searchValue: ... }
    // newRegisteredTableLastView: { searchField: ..., searchValue: ... }
    // newAssignedTableLastView: { searchField: ..., searchValue: ... }

    // activeTableLastView: { searchField: ..., searchValue: ... }
    // inactiveTableLastView: { searchField: ..., searchValue: ... }

    // notificationTableLastView: { searchField: ..., searchValue: ... }
    // monthlyTableLastView: { searchField: ..., searchValue: ... }

    // notificationDetailTableLastView: { searchField: ..., searchValue: ... }
    // monthlyDetailTableLastView: { searchField: ..., searchValue: ... }

    // appointmentTableLastView: { selectedDate: moment(), searchField: ..., searchValue: ... }
  },
};
