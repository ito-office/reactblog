export default function Navigation({items = [] }) {
    return(
        <nav>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        <a href={item.href}>{item.text}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}