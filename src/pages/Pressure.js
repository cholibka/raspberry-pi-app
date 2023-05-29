import CardTemplate from "../Templates/CardTemplate";

function Pressure() {
    return (
        <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8">
           <CardTemplate sensor={"pressure"}/>
        </div>
    );
}

export default Pressure;
