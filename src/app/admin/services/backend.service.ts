import { inject, Injectable } from "@angular/core";
import { Home } from "../../../api/database/model";
import { HttpClient } from "@angular/common/http";
import { Observable, take } from "rxjs";
import { House, IQueryResponse, IResponse } from "../../../interfaces/house";

@Injectable({ providedIn: 'root' })
export class BackendService {
    private http = inject(HttpClient);

    getLanding(): Observable<{sponsored:House[], recentHomes: House[]}> {
        return this.http.get<{sponsored:House[], recentHomes: House[]}>(`/api/home`)
            .pipe(take(1));
    }

    getHomes(page = 1, limit = 10): Observable<IQueryResponse<Home>> {
        return this.http.get<IQueryResponse<Home>>(`/api/properties?page=${page}&limit=${limit}`)
            .pipe(take(1));
    }

    addHome(home: Home): Observable<IResponse<Home>> {
        return this.http.post<IResponse<Home>>('/api/properties', home)
            .pipe(take(1));
    }

    updateHome(id: number, home: Home): Observable<IResponse<Home>> {
        return this.http.put<IResponse<Home>>(`/api/properties/${id}`, home)
            .pipe(take(1));
    }

    deleteHome(id: number): Observable<IResponse<void>> {
        return this.http.delete<IResponse<void>>(`/api/properties/${id}`)
            .pipe(take(1));
    }

    getHomeById(id: number): Observable<House> {
        return this.http.get<House>(`/api/properties/${id}`)
            .pipe(take(1));
    }
}