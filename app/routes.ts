import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),

  route(":department", "./routes/department/department.tsx"),

  route("about", "./routes/about/about.tsx"),

  route("administration", "./routes/administration/administration.tsx"),
] satisfies RouteConfig;
