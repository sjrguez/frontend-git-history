import { Commit } from "./commit.model";

export interface CommitResponse {
    data: Commit[];
    totalItems: number
}