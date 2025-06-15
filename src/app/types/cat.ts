// types/cat.d.ts
export interface IIMRanking {
  rank: number;
  name: string;
  catCutoff: number;
}
export interface BSchoolRanking{
  rank:number;
  name:string;
  cutoff:string;
}
export interface NonEngineerCutoff {
  rank: number;
  name: string;
  cutoff: string;
}

export interface TopBSchool {
  rank: number;
  name: string;
  test: string;
}

export interface PercentileData {
  percentile: string;
  score: number;
  questions: number;
}

export interface CatSyllabus {
  key1: string;
  key2: string;
  key3: string;
}

export interface ApplicationDeadline {
  rank: number;
  name: string;
  entranceTest: string;
  lastDate: string;
  cutoff: string;
  fees: string;
}
