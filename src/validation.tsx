import React from "react";

export const PremiumCell = ({ value, index, row, column }) => {
    if (!/^\d{10}$/.test(value)) {
        return <span style={{ color: 'red' }}>{value}</span>;
    } else {
        return value;
    }
};

export const freePositiveNumber = ({ value, index, row, column }) => {
    if (/^[1-9]\d*$/.test(value)) {
        return value;
    } else {
        return <span style={{ color: 'red' }}>{value}</span>;
    }
};

export const cellValidator = ({ value, index, row, column }) => {
    const min = 0;
    const max = 100;

    if (value < min || value > max) {
        return <span style={{ color: 'red' }}>{value}</span>;
    } else {
        return value;
    }
};


