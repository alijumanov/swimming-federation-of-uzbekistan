import axios from "axios";
import { ATHLETES_URL, BRANCHES_URL, COACHES_URL, DEPARTMENTS_URL, DOCUMENTS_URL, NEWS_URL, ORGANIZATIONS_URL, PARTNERS_URL, POOLS_URL, RECORDS_URL, REFEREES_URL, REGIONS_URL, RULES_URL, STAFF_URL, TEAMS_URL, TOURNAMENTS_URL } from "./ApiUrl";

// API of News

export const fetchNews = () => {
    return axios.get(NEWS_URL)
};

// API of Coaches

export const fetchCoaches = () => {
    return axios.get(COACHES_URL)
};

// API of Referees

export const fetchReferees = () => {
    return axios.get(REFEREES_URL)
};

// API of Athletes

export const fetchAthletes = () => {
    return axios.get(ATHLETES_URL)
};

// API of Records

export const fetchRecords = () => {
    return axios.get(RECORDS_URL)
};

// API of Tournaments

export const fetchTournaments = () => {
    return axios.get(TOURNAMENTS_URL)
};

// API of Teams

export const fetchTeams = () => {
    return axios.get(TEAMS_URL)
};

// API of Branches

export const fetchBranches = () => {
    return axios.get(BRANCHES_URL)
};

// API of Departments

export const fetchDepartments = () => {
    return axios.get(DEPARTMENTS_URL)
};

// API of Documents

export const fetchDocuments = () => {
    return axios.get(DOCUMENTS_URL)
};

// API of Organizations

export const fetchOrganizations = () => {
    return axios.get(ORGANIZATIONS_URL)
};

// API of Pools

export const fetchPools = () => {
    return axios.get(POOLS_URL)
};

// API of Rules

export const fetchRules = () => {
    return axios.get(RULES_URL)
};

// API of Regions

export const fetchRegions = () => {
    return axios.get(REGIONS_URL)
};

// API of Staff

export const fetchStaff = () => {
    return axios.get(STAFF_URL)
};

// API of Partners

export const fetchPartners = () => {
    return axios.get(PARTNERS_URL)
};