import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),

  route("login", "./routes/login.tsx"),

  route(":dep", "./routes/department/department.jsx"),

  route("tools", "./routes/tools/tools.tsx"),

  route("about", "./routes/about/about.tsx"),

  route("administration", "./routes/administration/administration.tsx"),
] satisfies RouteConfig;
