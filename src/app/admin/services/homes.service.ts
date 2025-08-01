import { Injectable } from "@angular/core";
import { Home } from "../../../api/database/model";
import { BackendService } from "./backend.service";
import { BehaviorSubject, firstValueFrom, lastValueFrom, map, Observable } from "rxjs";
import { House } from "../../../interfaces/house";

@Injectable({ providedIn: 'root' })
export class HomesService {

    private homes = new BehaviorSubject<Home[]>([]);
    homes$ = this.homes.asObservable();

    constructor(private backendService: BackendService) {
        this.backendService.getHomes().subscribe({
            next: (response) => {
                if (response.homes) {
                    this.homes.next(response.homes);
                }
            },
            error: (err) => {
                console.error('Failed to fetch homes:', err);
            }
        });
    }

    addHome(home: Home): void {
        this.backendService.addHome(home).subscribe({
            next: (response) => {
                if (response.data) {
                    const currentHomes = this.homes.getValue();
                    this.homes.next([...currentHomes, response.data]);
                } else {
                    console.error('Failed to add home:', response.message);

                }
            },
            error: (err) => {
                console.error('Failed to add home:', err);
            }
        });
    }

    getHomeById(id: number): Observable<House|undefined> {
        return this.backendService.getHomeById(id);
    }


    removeHome(id: number): void {
        this.backendService.deleteHome(id).subscribe({
            next: (resp) => {
                if (resp.error) {
                    console.error('Failed to delete home:', resp.message);
                    return;
                }
                const currentHomes = this.homes.getValue();
                this.homes.next(currentHomes.filter(home => home.id !== id));
            }
        });
    }


    updateHome(id: number, updatedHome: Home): void {
        this.backendService.updateHome(id, updatedHome).subscribe({
            next: (response) => {
                if (response.data) {
                    const currentHomes = this.homes.getValue();
                    this.homes.next(currentHomes.map(home => home.id === id && response.data ? response.data : home));
                } else {
                    console.error('Failed to update home:', response.message);
                }
            },
            error: (err) => {
                console.error('Error updating home:', err);
            }
        });
    }


    async getFeaturedHouses(): Promise<{ sponsored: House[], recentHomes: House[] }> {
        try {
            const result = await firstValueFrom(this.backendService.getLanding());
            return result;
        } catch (error) {
            console.error('Failed to fetch featured houses:', error);
            throw error;
        }
    }
}