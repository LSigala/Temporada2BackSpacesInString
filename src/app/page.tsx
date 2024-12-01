'use client';
import 'bootstrap/dist/css/bootstrap.css';

export default function Home() {

  async function data(e: any){
    e.preventDefault();

    const data = {
      String: (e.target.string.value)
    }
    
    const stringSeparated = data.String.split("")

    handleDeletions(stringSeparated)

  }
  
  async function handleDeletions(String: any){
    const newString:any = [];

    var n = 0;
    for(let i = 0; i < String.length; i++){
        if(String[i] == "#"){
          n++
        }
    }

    if(n > String.length - n){
      newString.push('')
      alert(newString)
      
    }else{

      for (let i = 0; i < String.length; i++) {
        const currentSymbol = String[i];
        const nextSymbol = String[i + 1];
        
        if (currentSymbol != "#" && nextSymbol == "#") {
          let index = String.indexOf(`${nextSymbol}`);
          String.splice(index, 1);
          index = String.indexOf(`${currentSymbol}`);
          String.splice(index, 1);
        }
      }

      const found = String.find((element:string) => element == "#");

      if(found == "#"){
        handleDeletions(String)
      }else{
        alert(String.reduce((accumulator:any, current:any) => accumulator + current))
      }

    }
}

  return (
      <form onSubmit={data} className="container col-6 text-center mt-4 bg-light">
        <div>
            <div className="d-flex justify-content-center form-group">
                <div className="form-group col-5 px-md-4 mb-3">
                    <label>String</label>
                    <input type="text" className="form-control" id="string" required aria-describedby="emailHelp " />
                </div>
            </div>
            <button type="submit" className="btn btn-primary mt-3 mx-auto d-block">Send Recipe</button>
        </div>
    </form>
  );
}
