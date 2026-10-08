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

  route(":dep", "./routes/department/department.tsx", [
    route("dailylog", "./routes/department/dailylog.tsx"),
    route("changelog", "./routes/department/changelog.tsx"),
  ]),

  route("tools", "./routes/tools/tools.tsx"),

  route("about", "./routes/about/about.tsx"),

  route("admin", "./routes/admin/admin.tsx", [
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
] satisfies RouteConfig;
