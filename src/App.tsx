import Header from './components/Header'
import { Card } from './components/Card'
import './App.css'
function App() {
  const data = [
    {
      imageSrc: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      country: 'Japan',
      location: 'Mount Fuji',
      description: `Mount Fuji is the tallest 
      mountain in Japan, standing at 3,776 meters 
      (12,380 feet). Mount Fuji is the single most 
      popular tourist site in Japan, for both Japanese and foreign tourists.`,
      date: '12 Jan, 2021 - 24 Jan, 2021'
    }
  ]
  return (
    <div className="app">
      <Header></Header>
      <section className="content">
        {
          data.map((el, index) => {
            return <Card
              key={index}
              imageSrc={el.imageSrc}
              location={el.location}
              country={el.country}
              description={el.description}
              date={el.date}
            >
            </Card>
          })
        }
        <div className="line"></div>
      </section>
    </div>
  )
}

export default App
