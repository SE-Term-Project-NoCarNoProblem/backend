import "express";

declare module "express" {
	interface Locals {
		user?: { id: string; email: string };
	}

	interface Response {
		locals: Locals;
	}
}
