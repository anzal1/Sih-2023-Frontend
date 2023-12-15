import { apiClient } from "@/lib/providers/api-provider";
import {
  CreateAdminProps,
  CreateExamProps,
  CreateProctorProps,
  GetAllProctorsProps,
  GetExamByIdProps,
  LoginStudentProps,
  LoginUserProps,
  RemoveProctorProps,
  UpdateExamProps,
} from "./APIProps";

export const createAdmin = ({ body }: CreateAdminProps): Promise<any> =>
  apiClient("/api/v1/register-organization/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

export const UserLogin = ({ body }: LoginUserProps): Promise<any> =>
  apiClient("/api/v1/login-organization/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

export const createProctor = ({ body }: CreateProctorProps): Promise<any> =>
  apiClient("/api/v1/create-proctor/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("OrgToken"),
    },
    body: JSON.stringify(body),
  });

export const getAllProctors = ({ body }: GetAllProctorsProps): Promise<any> => {
  return apiClient(
    `/api/v1/get-all-proctors?limit=${body?.limit}&offset=${body?.offset}`,
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("OrgToken"),
      },
    }
  );
};

export const removeProctor = ({ body }: RemoveProctorProps): Promise<any> =>
  apiClient("/api/v1/remove-proctor/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("OrgToken"),
    },
    body: JSON.stringify(body),
  });

export const createExam = ({ body }: CreateExamProps): Promise<any> => {
  return apiClient("/api/v1/create-exam/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("OrgToken"),
    },
    body: JSON.stringify(body),
  });
};

export const getAllExams = ({ body }: GetAllProctorsProps): Promise<any> => {
  return apiClient(
    `/api/v1/get-all-exams?limit=${body?.limit}&offset=${body?.offset}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("OrgToken"),
      },
    }
  );
};

export const updateExam = ({ body }: UpdateExamProps): Promise<any> =>
  apiClient("/api/v1/update-exam/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("OrgToken"),
    },
    body: JSON.stringify(body),
  });

export const getExamById = ({ body }: GetExamByIdProps): Promise<any> =>
  apiClient(`/api/v1/get-exam-by-id?examId=${body?.examId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("OrgToken"),
    },
  });

export const StudentLogin = ({ body }: LoginStudentProps): Promise<any> =>
  apiClient("/api/v1/login-student/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

export const ProctorLogin = ({ body }: LoginStudentProps): Promise<any> =>
  apiClient("/api/v1/login-proctor/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
