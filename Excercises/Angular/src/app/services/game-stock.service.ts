import { Injectable } from "@angular/core";
import { Game } from "../models/game.model";
import { Seller } from '../models/seller.model';

const games: Game[] = [
  new Game(
    "Super Mario Bros",
    "13 September 1985",
    "https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/virtual_console_nintendo_3ds_7/SI_3DSVC_SuperMarioBros_image1600w.jpg",
    [
      {
        id: 1,
        name: "Old shop",
        price: 95,
        amount:3,
        isAvailable: true
      },
      {
        id: 2,
        name: "New shop",
        price: 93,
        amount:33,
        isAvailable: true
      },
      {
        id: 3,
        name: "Uggly shop",
        price: 120,
        amount:0,
        isAvailable: false
      }
    ]
  ),
  new Game(
    "Zelda",
    "21 February 1986",
    "https://media.redadn.es/imagenes/the-legend-of-zelda-game-boy-advance-nes-nintendo-3ds-wii-wii-u_112103.jpg",
    [
      {
        id: 1,
        name: "Old shop",
        price: 9,
        amount:3,
        isAvailable: true
      },
      {
        id: 2,
        name: "New shop",
        price: 9,
        amount:33,
        isAvailable: true
      },
      {
        id: 3,
        name: "Uggly shop",
        price: 20,
        amount:0,
        isAvailable: false
      }
    ]
  ),
  new Game(
    "Sonic",
    "26 June 1991",
    "https://www.thewrap.com/wp-content/uploads/2014/06/Sonic.jpg",  [
      {
        id: 1,
        name: "Old shop",
        price: 999,
        amount:30,
        isAvailable: true
      }
    ]
  )
];

@Injectable({
  providedIn: "root"
})
export class GameStockService {
  getGames = (): Game[] => games;
  getGameByName = (name:string):Game => games.find((g) => g.name === name);
  getGameSellersByGameName = (name:string):Seller[] => this.getGameByName(name)? this.getGameByName(name).sellers:null;
}
