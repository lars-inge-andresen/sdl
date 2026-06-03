import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),

  route(":dep", "./routes/department/department.jsx"),

  route("about", "./routes/about/about.tsx"),

  route("administration", "./routes/administration/administration.tsx"),
] satisfies RouteConfig;
