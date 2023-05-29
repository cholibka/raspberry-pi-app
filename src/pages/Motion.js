import CardTemplate from "../Templates/CardTemplate";

function Motion() {
    return (
        <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8">
            <CardTemplate sensor={"motion"}/>
        </div>
    );
}

export default Motion;
