import React from 'react';

interface FlightsBoardProps {
    flights: string[],
};

const FlightsBoard: React.FC<FlightsBoardProps> = props => {
    const { flights } = props;
    console.log(props);
    return (
        <div>
            {flights?.map((flight: string, index: number) => {
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