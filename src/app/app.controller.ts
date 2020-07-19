import { controller, Log } from "@foal/core";

import { ApiController } from "./controllers";

@Log("----- AppController ----", {
  body: true,
  headers: ["X-CSRF-Token"],
  params: true,
  query: true,
})
export class AppController {
  subControllers = [controller("/api", ApiController)];
}
