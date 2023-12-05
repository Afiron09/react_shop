import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Items from "./components/items";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 2018285387,
          title: "Конфеты Toffifee 125 г (4014400400007)",
          img: "1.webp",
          alt: "Конфеты Toffifee 125 г",
          desc:
            "Описание Конфеты Toffifee 125 г (4014400400007) Забота о людях",
          category: "Конфеты",
          price: "133.00",
        },
        {
          id: 2018322133,
          title: "Конфеты Merci Молочный шоколад 250 г (4014400901405)",
          img: "2.webp",
          alt: "Конфеты Merci 250 г",
          desc: "Описание Конфеты Merci Молочный шоколад 250 г Мерси шоколад",
          category: "Конфеты",
          price: "288.00",
        },
        {
          id: 2018326972,
          title: "Конфеты Merci Finest Selection Ассорти 400 г (4014400900217)",
          img: "3.webp",
          alt: "Конфеты Merci 400 г",
          desc:
            "Описание Конфеты Merci Finest Selection Ассорти 400 г Мерси шоколад",
          category: "Конфеты",
          price: "580.00",
        },
      ],
    };
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Items items={this.state.items} />
        <Footer />
      </div>
    );
  }
}

export default App;
