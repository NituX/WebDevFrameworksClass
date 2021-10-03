import styles from './App.module.css';
import Header from './components/Header';
import Notifications from './components/Notifications';
import Menu from './components/Menu';
import MainFeed from './components/MainFeed';
import MostReadedFeed from './components/MostReadedFeed';
import UpperBar from './components/UpperBar';


function App() {

  const rightNowData = [
    {
      topic: 'Tuore kyselytieto',
      body: 'Nuoret kokeilleet aiempaa vähemmän kannabista - myös raittius lisääntyy'
    }
  ]

  const mainNewData = [
    {
      picture: 'ganja.png',
      topic: 'Tuore tutkimustieto - Nuorten kannabiskokeilut laskussa',
      genre: 'kotimaa',
      time: '13:12',
      readcount: 123
    },
    {
      picture: 'ganja.png',
      topic: 'Nuorten kannabiskäyttö järkyttävässä jamassa - jokainen nuori koukussa',
      genre: 'kotimaa',
      time: '16:20',
      readcount: 356
    },
    {
      picture: 'ss-lappi.png',
      topic: '"Lapissa kaikki kukkii komeasti" - lapin kesä ihastuttaa ihmisiä!',
      genre: 'kotimaa',
      time: '11:25',
      readcount: 500
    },
    {
      picture: 'ss-lappi.png',
      topic: 'Lapissa vihataan turisteja - paikalliset raivoissaan tunturin turmelusta',
      genre: 'kotimaa',
      time: '17:58',
      readcount: 456
    }
  ];

  return (
    <div className = {styles.site}>
      <UpperBar />
      <Header />
      <Menu />
      {
        rightNowData.map(element => <Notifications topic={element.topic} body={element.body} />)
      }
      <div className={styles.newsContainer}>
        <div className={styles.mainFeed}>
          {
            mainNewData.map(element => <MainFeed picture={element.picture} topic={element.topic} genre={element.genre} time={element.time} />)
          }
        </div>
        <div className={styles.mostReaded}>
          <MostReadedFeed topics=
            {
            mainNewData.sort((a, b) => a.readcount - b.readcount).reverse()
          } />

        </div>
      </div>
    </div>
  );
}
/*
{
            mainNewData.sort((a, b) => a.readcount > b.readcount).map(element => <MostReadCard topic={element.topic} readcount={element.readcount} />)
          }
*/
export default App;
