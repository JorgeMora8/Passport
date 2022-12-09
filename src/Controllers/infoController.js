import {procesDATA} from "../Configuration/configDATA.js"; 

export function infoController(req, res) { 
        res.render("info", {data:procesDATA});
}