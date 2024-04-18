import { Source } from "@state-adapt/rxjs";
import { BehaviorSubject } from "rxjs";

export const refreshSource$ = new BehaviorSubject(true);
export const refreshUserSource$ = new BehaviorSubject(true);