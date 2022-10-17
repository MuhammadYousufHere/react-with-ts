import React, { ReactNode } from 'react';

function List<ListItem>({
    items,
    render,
}: {
    items: ListItem[];
    render: (item: ListItem) => ReactNode;
}) {
    return (
        <ul>
            {items.map((item, i) => (
                <li key={i}>{render(item)}</li>
            ))}
        </ul>
    );
}
export default List;
