const User = [
  {
    name: "User",
    path: "/user",
    component: () =>
      import(/* webpackChunkName: "user" */ "@/views/user/userHome.vue"),
  },
  {
    name: "UserDetail",
    path: "/user/detail",
    component: () =>
      import(/* webpackChunkName: "user" */ "@/views/user/userDetail.vue"),
  },
];
export default User;
