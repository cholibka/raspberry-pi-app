import CardTemplate from "../Templates/CardTemplate";

function Temperature() {
    return (
        <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8">
            <CardTemplate sensor={"temperature"}/>
        </div>
    )
}

export default Temperature;