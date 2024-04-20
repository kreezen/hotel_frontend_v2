import { InjectionToken } from '@angular/core';
export const API_BASE_URL = 'http://localhost:5195/api'
export const API_URL = new InjectionToken<string>('baseUrl');