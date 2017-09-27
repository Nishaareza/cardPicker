import { Component } from "@angular/core";
import deck from  "./../classes/Deck";
import ICard from "./../interfaces/ICard";


@Component({
	selector: "application",
	templateUrl: "./app.html",
	styleUrls: ["./app.css"]
})
export class AppComponent {
	// write your component code here
	constructor() {
		this.arrayCards = [];
		this.card = {};
	}

	public cardDeck:deck = new deck();
	public card;
	public arrayCards:ICard[];

	get cardCount() {
		return this.cardDeck.getCardCount;
	}

	public clicked() {
		this.card = this.cardDeck.drawCard();
		this.arrayCards.push(this.card);
	}

	public returnBack(card) {
		this.cardDeck.returnCardToDeck(card);
		this.arrayCards = this.arrayCards.filter(obj => obj != card);
	}

	lifeBarHeight(){
		const baseHeight = 46;
		return this.cardCount / this.cardDeck.getMaxCardCount() * baseHeight;
	}
}
