import {PureComponent} from "react";

class CustomizedAxisTick extends PureComponent {
    render() {
        const {x, y, payload} = this.props;
        return (
            <g transform={`translate(${x},${y})`} stroke="grey" fontWeight="100">
                <text fontSize={"0.8rem"} x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-20)">
                    {payload.value.split(' ')[1]}
                </text>
            </g>
        );
    }
}

export default CustomizedAxisTick;
