import { Component, OnInit } from "@angular/core";
import { Game } from "./models/game.model";
import { GameStockService } from "./services/game-stock.service";
import { Seller } from './models/seller.model';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "Displaying data collection";
  games: Game[];
  show = true;
  selectedGameName:string;
  selectedGameSellers:Seller[];

  constructor(private gameStockService: GameStockService) {}
  onGameChangeHandler = (gameEvent:string) =>{
    const {name = "", sellers = []} = this.gameStockService.getGameByName(gameEvent);
    this.selectedGameName = name;
    this.selectedGameSellers = sellers;
  }
  ngOnInit(): void {
    // throw new Error("Method not implemented.");
    this.games = this.gameStockService.getGames();
  }
}
