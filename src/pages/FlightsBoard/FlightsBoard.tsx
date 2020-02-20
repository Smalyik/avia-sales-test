import React from 'react';

type Props = {
    flights: Object[],
};

const FlightsBoard: React.FC<Props> = props => {
    const { flights } = props;
    console.log(props);
    return (
        <div>
            {flights.map((flight, index) => {
                return (
                    <div key={index}>
                        {flight}
                    </div>
                )
            })}
        </div>
    )
}

export default FlightsBoard;