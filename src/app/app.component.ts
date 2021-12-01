import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  sumInTrust: number = 0;
  totalNumberInTrust: number = 0;
  trustRanking: any[] = [
    { desc: "Deri 100", number: 104137, limit: 0, euroPerPerson: 0.00096 },
    { desc: "Mbi 100 e deri 1000", number: 212789, limit: 100, euroPerPerson: 0.00423 },
    { desc: "Mbi 1000 e deri 5000", number: 194857, limit: 1000, euroPerPerson: 0.02053 },
    { desc: "Mbi 5000 e deri 10000", number: 74088, limit: 5000, euroPerPerson: 0.06748 },
    { desc: "Mbi 10000 e deri 20000", number: 40440, limit: 10000, euroPerPerson: 0.24727 },
    { desc: "Mbi 20000", number: 12944, limit: 20000, euroPerPerson: 2.31767 },
  ];
  percentage: number = 0;
  yourLevel: number = 0;
  peopleBelowYou: number = 0;

  ngOnInit() {
    this.totalNumberInTrust = this.trustRanking.map(item => item.number).reduce((a, b) => a + b, 0);
  }

  calculate(): void {
    if (this.sumInTrust <= 100) {
      this.yourLevel = 0;
    } else if (this.sumInTrust > 100 && this.sumInTrust <= 1000) {
      this.yourLevel = 1;
    } else if (this.sumInTrust > 1000 && this.sumInTrust <= 5000) {
      this.yourLevel = 2;
    } else if (this.sumInTrust > 5000 && this.sumInTrust <= 10000) {
      this.yourLevel = 3;
    } else if (this.sumInTrust > 10000 && this.sumInTrust <= 20000) {
      this.yourLevel = 4;
    } else {
      this.yourLevel = 5;
    }

    const filteredArray = this.trustRanking.filter((item, index) => index < this.yourLevel);
    const numberOfPeopleInLevelsBelow = filteredArray.map(item => item.number).reduce((a, b) => a + b, 0);
    this.peopleBelowYou = Math.floor(numberOfPeopleInLevelsBelow + (this.sumInTrust - this.trustRanking[this.yourLevel].limit) / this.trustRanking[this.yourLevel].euroPerPerson);
    this.percentage = this.peopleBelowYou / this.totalNumberInTrust * 100
  }
}
