import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:8080/api/v1/puls",
    headers: {
        "Content-type": "application/json"
    }
});
