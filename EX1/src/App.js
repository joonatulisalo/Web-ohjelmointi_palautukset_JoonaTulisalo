import './App.css';
import Header from './components/Header';
import Notifications from './components/Notifications';
import SubHeader from './components/SubHeader';
import MainNews from './components/MainNews';
import SideNews from './components/SideNews';
import SDHeader from './components/SDHeader';




function App() {
  return (
    <div>
      
   
     <Header/>
     <SubHeader/>
     <Notifications topic='ULKOMAAT' text=' Koronavirus­kuolemien määrä lähti kasvuun Yhdys­valloissa'/>
     <Notifications topic='PÄIVÄN TIMANTTI' text=' Klassinen cappuccino uhkaa kadota – asiantuntijat syyttävät siitä sosiaalista mediaa'/>
     <Notifications topic='JUURI NYT' text=' Poliisi: Niuvan­niemen oikeus­psykiatrisesta sairaalasta karannut nainen on saatu kiinni'/>
     <MainNews/>
     <SideNews numero = '1'otsikko='Brexit | Boris Johnsonin toive 20 vuoden takaa on toteutumassa: Metri­järjestelmän odotetaan poistuvan käytöstä Britanniassa'/>
      <SideNews numero = '2' otsikko='Räjähteet | Helsingin pamaukselle löytyi todennäköinen paikka sekä jäänteitä tapahtumista –  ”Useaan otteeseen oli jotain yritetty sytyttää”'/>
      <SideNews numero = '3' otsikko='HS Vantaa | Asukas löysi panssaroidun Mersun omalta auto­paikaltaan – Kesken poliisitehtävän alkoi suukopu siitä, miten virkavalta saa pysäköidä'/>
      <SideNews numero = '4' otsikko='Televisio | ”Hän tavallaan terrorisoi sarjaa” – Greyn anatomian rakastetuin hahmo kirjoitettiin yllättäen ulos sarjasta kuusi vuotta sitten, nyt paljastui miksi'/>
      <SDHeader/>
    </div>

       
  );
}


export default App;
