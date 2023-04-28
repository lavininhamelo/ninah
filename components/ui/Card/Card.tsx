import React from 'react';

import { Container } from './styles';

enum Padding {
    none = 'p-0',
    xs = 'p-2',
    sm = 'p-3',
    base = 'p-4',
    md = 'p-8',
    lg = 'p-12',
    xl = 'p-16',
}

interface Props extends React.HTMLAttributes<HTMLElement> {
    padding?: keyof typeof Padding;
}

const Card: React.FC<Props> = ({ padding = 'base', children, className, ...rest}) => {
  return <Container className={className + " " + Padding[padding]} {...rest}> {children}</Container>;
}

export default Card;