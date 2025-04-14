import axios from "axios"
import ApiRequest from "./ApiService"

export const postDashboard = (dashboardJson) => {
    axios.post("http://localhost:8080/save-dashboard", dashboardJson)
}