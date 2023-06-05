import axios from "axios";
import { NEWS_URL, PARTNERS_URL } from "./ApiUrl";

// API of News

export const fetchNews = () => {
    return axios.get(NEWS_URL)
};

// API of Partners

export const fetchPartners = () => {
    return axios.get(PARTNERS_URL)
};