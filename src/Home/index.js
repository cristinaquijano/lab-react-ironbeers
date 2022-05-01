import "./Home.css";


export function Home() {
  return (
    <div className="homePage">
      <div className="heroSection">
            <a href="/beers" className="AllBeers">All beers</a>
            <a href="/random-beer" className="RandomBeer">Random beer</a>
            <a href="/new-beer" className="NewBeers">New beers</a>
        </div>

    </div>
  );
}
