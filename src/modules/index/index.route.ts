import { Route } from "core/interfaces";
import { Router } from "express";
import IndexController from "./index.controller";

export default class IndexRoute implements Route
{
    public path='/';
    public router = Router();

    public indexController  = new IndexController();

    constructor()
    {
        this.InitializeRoute();
    }

    private InitializeRoute()
    {
        this.router.get(this.path, this.indexController.index);
    }
}