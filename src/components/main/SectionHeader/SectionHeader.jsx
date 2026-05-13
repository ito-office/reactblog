import { Children } from "react";

export default function SectionHeader({children = 'Latest Blog Posts'}) {
    return(
        <div>
            <h2>{children}</h2>
        </div>
    );
}