import { Component } from '@angular/core';

interface IGameCard {
  name: string,
  img: string,
  visibility: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  index = 0;
  allCards: IGameCard[] = [
    {
      name: 'HTML5',
      img: '../assets/html5.webp',
      visibility: false
    },
    {
      name: 'Java',
      img: '../assets/java.png',
      visibility: false
    },
    {
      name: 'Javascript',
      img: '../assets/js.png',
      visibility: false
    },
    {
      name: 'HTML5',
      img: '../assets/html5.webp',
      visibility: false
    },
    {
      name: 'Javascript',
      img: '../assets/js.png',
      visibility: false
    },
    {
      name: 'Java',
      img: '../assets/java.png',
      visibility: false
    },
    {
      name: 'Python',
      img: '../assets/python.png',
      visibility: false
    },
    {
      name: 'PHP',
      img: '../assets/php.png',
      visibility: false
    },
    {
      name: 'CSS3',
      img: '../assets/css3.png',
      visibility: false
    },
    {
      name: 'Python',
      img: '../assets/python.png',
      visibility: false
    },
    {
      name: 'PHP',
      img: '../assets/php.png',
      visibility: false
    },
    {
      name: 'CSS3',
      img: '../assets/css3.png',
      visibility: false
    }
  ]
  reArrangedCards: IGameCard[] = []
  card = 0;
  allVisible = true;
  spinnedCards: number[] = []
  cardsMatch: number[] = [];

  spinCard(name: string, index: number) {
    if (this.spinnedCards.length >= 2) {
      return
    }

    this.reArrangedCards[index].visibility = !this.reArrangedCards[index].visibility;

    if (this.spinnedCards.includes(index)) {
      document.getElementById(`${name}_${index}`)?.classList.remove('spin');
      this.spinnedCards.splice(this.spinnedCards.indexOf(index), 1);
      console.log(this.spinnedCards)
    }

    if (this.reArrangedCards[index].visibility) {
      this.spinnedCards.push(index);
      const element = document.getElementById(`${name}_${index}`);
      element?.classList.add('spin');
      element?.addEventListener('transitionend', () => {
        if (this.spinnedCards.length === 2) {
          this.verify(this.spinnedCards);
          return;
        }
        return
      })
      console.log(this.spinnedCards)
      return
    };
  }

  verify(cards: number[]) {
    if (this.reArrangedCards[cards[0]].name === this.reArrangedCards[cards[1]].name) {
      this.cardsMatch.push(...cards);
      this.spinnedCards = [];
      if (this.cardsMatch.length === 12) {
        alert('Parabéns, você venceu!');
        location.reload();
      }
      return
    };

    document.getElementById(`${this.reArrangedCards[cards[1]].name}_${cards[1]}`)?.classList.remove('spin');
    document.getElementById(`${this.reArrangedCards[cards[0]].name}_${cards[0]}`)?.classList.remove('spin');
    this.reArrangedCards[cards[1]].visibility = false;
    this.reArrangedCards[cards[0]].visibility = false;
    this.spinnedCards = [];
    console.log(this.spinnedCards)
    return
  }

  reArrangeCards() {
    while (this.card < 12) {
      const selectedCard = Math.floor(Math.random() * (this.allCards.length - 1));
      this.reArrangedCards.push(this.allCards[selectedCard]);
      this.allCards.splice(selectedCard, 1);
      this.card++;
    }
  }
}
