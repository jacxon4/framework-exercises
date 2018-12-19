import { Seller } from "./seller.model";
export class Game {
  name: string;
  dateRelease: Date;
  imageUrl?: string;
  sellers?: Seller[];

  constructor(name?: string, dateRelease?: string, imageUrl?: string, sellers?: Seller[]) {
    this.name = name;
    this.dateRelease = new Date(dateRelease);
    this.imageUrl = imageUrl;
    this.sellers = sellers;
  }

  getYearsFromRelease(): number {
    return this.convertToYears(
      new Date(this.millisecondsRange(this.dateRelease.getTime()))
    );
  }

  private millisecondsRange = (
    millisecondsStart: number,
    millisecondsEnd: number = Date.now()
  ): number => millisecondsEnd - millisecondsStart;

  private convertToYears = (date: Date): number => date.getUTCFullYear() - 1970; //UTC starts on 1970
}
