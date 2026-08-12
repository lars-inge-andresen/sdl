import {
  type RouteConfig,
  index,
  route,
  prefix,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),

  route("login", "./routes/login.jsx"),
  route("logout", "./routes/logout.jsx"),

  ...prefix(":dep", [
    index("./routes/department/department.tsx"),
    route("dailylog", "./routes/department/dailylog.tsx"),
  ]),

  route("tools", "./routes/tools/tools.tsx"),

  // ...prefix("about", [
  //index("./routes/about/about.tsx"),
  // route("about", "./routes/about/about.tsx"),
  // route("manual", "./routes/about/manual.tsx"),
  //]),

  ...prefix("admin", [
    index("./routes/admin/admin.tsx"),
    route("customer", "./routes/admin/customer.tsx"),
    route("vessel", "./routes/admin/vessel.jsx"),
    route("department", "./routes/admin/department.tsx"),
    route("user", "./routes/admin/user.tsx"),
    route("project", "./routes/admin/project.tsx"),
    route("activity", "./routes/admin/activity.tsx"),
    route("category", "./routes/admin/category.tsx"),
    route("position", "./routes/admin/position.tsx"),
    route("failure", "./routes/admin/failure.tsx"),
  ]),

  /*   route("*", "./routes/home.tsx"), */
] satisfies RouteConfig;
