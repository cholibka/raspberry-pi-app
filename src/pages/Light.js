import CardTemplate from "../Templates/CardTemplate";

function Light() {
    return (
        <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8">
            <CardTemplate sensor={"light"}/>
        </div>
    );
}

export default Light;
