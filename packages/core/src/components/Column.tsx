import React from 'react';

import classes from './Column.module.css';

type ColumnProps = {
    className?: string;
};

const Column: React.FC<ColumnProps> = ({ className, children }) => {
    return <div className={[classes.column, className].filter(Boolean).join(' ')}>{children}</div>;
};

export default Column;
