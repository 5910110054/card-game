import CharacterCard from "./CharacterCard";

export default class WorldCard extends component{
    render(){
        return(
            <div>
                {Array.from(this.props.value).map((caches,i) => <CharacterCard value ={c} key={i}/>)}
                </div>
        );
    }
}