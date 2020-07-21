import { AuthController } from "./controllers";

import { controller, Get, Log, render } from "@foal/core";

import { ApiController } from "./controllers";

@Log("----- AppController ----", {
  body: true,
  headers: ["X-CSRF-Token"],
  params: true,
  query: true,
})
export class AppController {
  subControllers = [
    controller("/api", ApiController),
    controller("/auth", AuthController),
  ];

  @Get("/")
  index() {
    return render("templates/index.html");
  }

  @Get("/signin")
  signin() {
    return render("templates/signin.html");
  }

  @Get("/signup")
  signup() {
    return render("templates/signup.html");
  }
}
