import { Branch } from "./branch.model";

export interface BranchResponse {
    data: Branch[];
    totalItems: number
}