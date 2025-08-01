import {
  layout,
  route,
  index,
  type RouteConfig,
  prefix,
} from "@react-router/dev/routes";

export default [
  route("login", "routes/login.tsx"),
  route("register", "routes/register.tsx"),

  layout("components/layout/MainLayout.tsx", [
    index("routes/_layout/index.tsx"),
    route("projects", "routes/_layout/Projects.tsx"),
    route("buttons", "routes/_layout/Buttons.tsx"),
    route("blogs", "routes/_layout/Blogs.tsx"),
    route("create-new-project", "routes/_layout/CreateNewProjectHome.tsx"),
    route(
      "create-interview-sheet",
      "routes/_layout/CreateInterviewSheetHome.tsx"
    ),
    route("project-overview", "routes/_layout/ProjectOverview.tsx"),
    route("interview-sheet", "routes/_layout/InterviewSheetHome.tsx"),
  ]),
] satisfies RouteConfig;
