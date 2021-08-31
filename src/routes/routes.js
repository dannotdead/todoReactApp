import AllToDos from "../pages/AllToDos";
import ActiveToDos from "../pages/ActiveToDos";
import CompletedTodos from "../pages/CompletedTodos";

export const allRoutes = [
  {path: '/all', exact: false, component: AllToDos},
  {path: '/active', exact: false, component: ActiveToDos},
  {path: '/completed', exact: false, component: CompletedTodos},
]