import FooterComponent from "../components/FooterComponent"
import HeaderComponent from "../components/HeaderComponent"
import MainComponent from "../components/MainComponent"

export default function Home({data1, data2}) {
  
  return (
    <div>
      <HeaderComponent/>
      <MainComponent data1={data1} data2={data2}/>
      <FooterComponent/>
    </div>
    
  )
}

// Fetching data from given API
export const getStaticProps = async ()=> {
  const score1 = await fetch(`https://lookup.dbpedia.org/api/search?format=JSON&query=Christian%20Drosten`)
  const score2 = await fetch(`https://lookup.dbpedia.org/api/search?format=JSON&query=Harald%20Lesch`)
  const data1 = await score1.json()
  const data2 = await score2.json()

  return{
    props:{
      data1:data1.docs[0],
      data2: data2.docs[0]
    }
  }
}