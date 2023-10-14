export interface Commit {
    message: string;
    sha: string;
    author: string;
    githubLink: string;
    date: Date
    fileAfected?: number
}
