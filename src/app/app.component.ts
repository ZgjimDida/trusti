import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'trusti';
  thisone = "14:00";
  sumTaken: number = 0;
  percentage: number = 0;
  level: number = 0;
  totalNumber: number = 0;
  howManyPeople: number = 0;

  test: any[] = [
    { desc: "Deri 100", number: 104137, limit: 0, euroPerPerson: 0.00096 },
    { desc: "Mbi 100 e deri 1000", number: 212789, limit: 100, euroPerPerson: 0.00423 },
    { desc: "Mbi 1000 e deri 5000", number: 194857, limit: 1000, euroPerPerson: 0.02053 },
    { desc: "Mbi 5000 e deri 10000", number: 74088, limit: 5000, euroPerPerson: 0.06748 },
    { desc: "Mbi 10000 e deri 20000", number: 40440, limit: 10000, euroPerPerson: 0.24727 },
    { desc: "Mbi 20000", number: 12944, limit: 20000, euroPerPerson: 2.31767 },
  ]

  ngOnInit() {
    console.log(this.howManyPeople = this.test.map(item => item.number).reduce((a, b) => a + b, 0));
  }

  calculatePercentage(): void {
    if (this.sumTaken <= 100) {
      this.level = 0;
    } else if (this.sumTaken > 100 && this.sumTaken <= 1000) {
      this.level = 1;
    } else if (this.sumTaken > 1000 && this.sumTaken <= 5000) {
      this.level = 2;
    } else if (this.sumTaken > 5000 && this.sumTaken <= 10000) {
      this.level = 3;
    } else if (this.sumTaken > 10000 && this.sumTaken <= 20000) {
      this.level = 4;
    } else {
      this.level = 5;
    }
    console.log(this.level);

    const filteredArray = this.test.filter((item, index) => index < this.level);
    const numberOfPeople = filteredArray.map(item => item.number).reduce((a, b) => a + b, 0);
    const totalNumberOfPeople = Math.floor(numberOfPeople + (this.sumTaken - this.test[this.level].limit) / this.test[this.level].euroPerPerson);
    console.log(totalNumberOfPeople);
    this.totalNumber = totalNumberOfPeople;
  }
}
