import { Routes as ReactRouterRoutes, Route } from "react-router";
import {  Home, ShowTask} from "../../pages";

export default function Routes() {
    return (
        <ReactRouterRoutes>
            <Route path="/">
                <Route index element={<Home />} />
                <Route path="task">
                    <Route path=":id" element={<ShowTask />} />
                </Route>
            </Route>
        </ReactRouterRoutes>
    );
}